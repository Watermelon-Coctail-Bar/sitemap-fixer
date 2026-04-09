/**
 * URL Health Checker
 * Fetches sample URLs from a sitemap and checks for common indexing issues:
 * - HTTP status (404, redirects, 5xx)
 * - noindex meta tags
 * - Canonical mismatches
 * - Response time
 * - robots.txt conflicts
 */

export interface URLHealthResult {
  url: string;
  status: number;
  redirectUrl?: string;
  hasNoindex: boolean;
  canonicalUrl?: string;
  canonicalMismatch: boolean;
  responseTimeMs: number;
  blockedByRobots: boolean;
  issue?: string;
}

export interface HealthSummary {
  checked: number;
  healthy: number;
  issues: {
    notFound: string[];
    redirects: { url: string; redirectsTo: string }[];
    serverErrors: string[];
    noindexConflict: string[];
    canonicalMismatch: { url: string; canonical: string }[];
    blockedByRobots: string[];
    slow: { url: string; ms: number }[];
  };
  results: URLHealthResult[];
}

function parseRobotsDisallows(robotsTxt: string): string[] {
  const disallows: string[] = [];
  let inUserAgentAll = false;

  for (const line of robotsTxt.split('\n')) {
    const trimmed = line.trim().toLowerCase();
    if (trimmed.startsWith('user-agent:')) {
      const agent = trimmed.replace('user-agent:', '').trim();
      inUserAgentAll = agent === '*';
    } else if (inUserAgentAll && trimmed.startsWith('disallow:')) {
      const path = line.trim().replace(/^disallow:\s*/i, '').trim();
      if (path) disallows.push(path);
    }
  }
  return disallows;
}

function isBlockedByRobots(url: string, disallows: string[]): boolean {
  try {
    const path = new URL(url).pathname;
    return disallows.some(d => path.startsWith(d));
  } catch {
    return false;
  }
}

async function checkSingleUrl(url: string, disallows: string[]): Promise<URLHealthResult> {
  const start = Date.now();
  const result: URLHealthResult = {
    url,
    status: 0,
    hasNoindex: false,
    canonicalMismatch: false,
    responseTimeMs: 0,
    blockedByRobots: isBlockedByRobots(url, disallows),
  };

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);

    const res = await fetch(url, {
      signal: controller.signal,
      redirect: 'manual',
      headers: {
        'User-Agent': 'SitemapFixer/1.0 (SEO Checker)',
        'Accept': 'text/html',
      },
    });
    clearTimeout(timeout);

    result.status = res.status;
    result.responseTimeMs = Date.now() - start;

    // Handle redirects
    if (res.status >= 300 && res.status < 400) {
      result.redirectUrl = res.headers.get('location') || undefined;
      result.issue = `Redirects to ${result.redirectUrl}`;
      return result;
    }

    // Only parse HTML for 200 responses
    if (res.status === 200) {
      const html = await res.text();
      // Only parse head section for performance (first 5KB)
      const head = html.substring(0, 5000);

      // Check noindex
      const robotsMeta = head.match(/<meta\s+[^>]*name=["']robots["'][^>]*content=["']([^"']+)["']/i)
        || head.match(/<meta\s+[^>]*content=["']([^"']+)["'][^>]*name=["']robots["']/i);
      if (robotsMeta && robotsMeta[1].toLowerCase().includes('noindex')) {
        result.hasNoindex = true;
        result.issue = 'Has noindex tag but is in sitemap';
      }

      // Check canonical
      const canonicalMatch = head.match(/<link\s+[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i)
        || head.match(/<link\s+[^>]*href=["']([^"']+)["'][^>]*rel=["']canonical["']/i);
      if (canonicalMatch) {
        result.canonicalUrl = canonicalMatch[1];
        // Normalize for comparison (remove trailing slash, protocol)
        const normalizeUrl = (u: string) => u.replace(/^https?:\/\//, '').replace(/\/$/, '').toLowerCase();
        if (normalizeUrl(result.canonicalUrl) !== normalizeUrl(url)) {
          result.canonicalMismatch = true;
          result.issue = `Canonical points to ${result.canonicalUrl}`;
        }
      }
    } else if (res.status === 404) {
      result.issue = 'Page not found (404)';
    } else if (res.status >= 500) {
      result.issue = `Server error (${res.status})`;
    }
  } catch (err: unknown) {
    result.responseTimeMs = Date.now() - start;
    if (err instanceof Error && err.name === 'AbortError') {
      result.status = 0;
      result.issue = 'Timeout (>8s)';
      result.responseTimeMs = 8000;
    } else {
      result.status = 0;
      result.issue = 'Connection failed';
    }
  }

  // Flag slow responses
  if (result.responseTimeMs > 3000 && !result.issue) {
    result.issue = `Slow response (${(result.responseTimeMs / 1000).toFixed(1)}s)`;
  }

  // Flag robots.txt blocked
  if (result.blockedByRobots && !result.issue) {
    result.issue = 'Blocked by robots.txt but in sitemap';
  }

  return result;
}

export async function checkUrlHealth(
  urls: string[],
  robotsTxt: string,
  sampleSize: number = 30,
): Promise<HealthSummary> {
  const disallows = parseRobotsDisallows(robotsTxt);

  // Sample URLs: pick evenly across the list to cover different sections
  const step = Math.max(1, Math.floor(urls.length / sampleSize));
  const sampled: string[] = [];
  for (let i = 0; i < urls.length && sampled.length < sampleSize; i += step) {
    sampled.push(urls[i]);
  }

  // Check in parallel batches of 10
  const results: URLHealthResult[] = [];
  for (let i = 0; i < sampled.length; i += 10) {
    const batch = sampled.slice(i, i + 10);
    const batchResults = await Promise.all(
      batch.map(url => checkSingleUrl(url, disallows))
    );
    results.push(...batchResults);
  }

  // Build summary
  const summary: HealthSummary = {
    checked: results.length,
    healthy: results.filter(r => !r.issue).length,
    issues: {
      notFound: results.filter(r => r.status === 404).map(r => r.url),
      redirects: results.filter(r => r.redirectUrl).map(r => ({ url: r.url, redirectsTo: r.redirectUrl! })),
      serverErrors: results.filter(r => r.status >= 500).map(r => r.url),
      noindexConflict: results.filter(r => r.hasNoindex).map(r => r.url),
      canonicalMismatch: results.filter(r => r.canonicalMismatch).map(r => ({ url: r.url, canonical: r.canonicalUrl! })),
      blockedByRobots: results.filter(r => r.blockedByRobots).map(r => r.url),
      slow: results.filter(r => r.responseTimeMs > 3000 && r.status === 200).map(r => ({ url: r.url, ms: r.responseTimeMs })),
    },
    results,
  };

  return summary;
}
