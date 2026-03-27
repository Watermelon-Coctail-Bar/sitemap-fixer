import { SitemapURL } from './sitemapParser';

export interface URLCluster {
  prefix: string;
  label: string;
  urls: string[];
  count: number;
}

export interface StructuredAnalysis {
  totalPages: number;
  clusters: URLCluster[];
  depthDistribution: Record<number, number>;
  maxDepth: number;
  orphanLike: string[];
  stalePages: string[];
  freshPages: string[];
  noLastmod: number;
  inconsistentPatterns: string[];
  urlSamples: string[];
}

function getDepth(url: string): number {
  try {
    const path = new URL(url).pathname;
    return path.split('/').filter(Boolean).length;
  } catch {
    return 1;
  }
}

function getPrefix(url: string, depth: number = 1): string {
  try {
    const parts = new URL(url).pathname.split('/').filter(Boolean);
    return parts.slice(0, depth).join('/');
  } catch {
    return '';
  }
}

function isStale(lastmod?: string): boolean {
  if (!lastmod) return false;
  const date = new Date(lastmod);
  if (isNaN(date.getTime())) return false;
  const ageMs = Date.now() - date.getTime();
  const ageDays = ageMs / (1000 * 60 * 60 * 24);
  return ageDays > 365; // older than 1 year = stale
}

function isFresh(lastmod?: string): boolean {
  if (!lastmod) return false;
  const date = new Date(lastmod);
  if (isNaN(date.getTime())) return false;
  const ageMs = Date.now() - date.getTime();
  const ageDays = ageMs / (1000 * 60 * 60 * 24);
  return ageDays < 90;
}

function slugToLabel(slug: string): string {
  return slug
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase()) || 'Root Pages';
}

export function analyzeUrls(urls: SitemapURL[]): StructuredAnalysis {
  const totalPages = urls.length;
  const depthDist: Record<number, number> = {};
  const clusterMap: Record<string, string[]> = {};
  const stale: string[] = [];
  const fresh: string[] = [];
  let noLastmod = 0;

  urls.forEach(u => {
    const depth = getDepth(u.loc);
    depthDist[depth] = (depthDist[depth] || 0) + 1;

    const prefix = getPrefix(u.loc, 1);
    if (!clusterMap[prefix]) clusterMap[prefix] = [];
    clusterMap[prefix].push(u.loc);

    if (!u.lastmod) {
      noLastmod++;
    } else {
      if (isStale(u.lastmod)) stale.push(u.loc);
      if (isFresh(u.lastmod)) fresh.push(u.loc);
    }
  });

  const clusters: URLCluster[] = Object.entries(clusterMap)
    .sort((a, b) => b[1].length - a[1].length)
    .slice(0, 12)
    .map(([prefix, clusterUrls]) => ({
      prefix,
      label: slugToLabel(prefix),
      urls: clusterUrls,
      count: clusterUrls.length,
    }));

  const maxDepth = Math.max(...Object.keys(depthDist).map(Number), 0);

  // Detect orphan-like pages: clusters with only 1 URL and depth > 1
  const orphanLike = urls
    .filter(u => {
      const prefix = getPrefix(u.loc, 1);
      return clusterMap[prefix]?.length === 1 && getDepth(u.loc) > 1;
    })
    .map(u => u.loc)
    .slice(0, 10);

  // Inconsistent URL patterns
  const patterns = urls.map(u => {
    try {
      return new URL(u.loc).pathname;
    } catch {
      return u.loc;
    }
  });

  const inconsistentPatterns: string[] = [];
  const hasTrailingSlash = patterns.filter(p => p.endsWith('/') && p !== '/').length;
  const noTrailingSlash = patterns.filter(p => !p.endsWith('/') && p !== '/').length;
  if (hasTrailingSlash > 0 && noTrailingSlash > 0) {
    inconsistentPatterns.push('Mixed trailing slash usage detected');
  }

  const hasUppercase = patterns.some(p => p !== p.toLowerCase());
  if (hasUppercase) {
    inconsistentPatterns.push('Mixed-case URLs found (should be lowercase)');
  }

  const hasUnderscores = patterns.some(p => p.includes('_'));
  const hasDashes = patterns.some(p => p.includes('-'));
  if (hasUnderscores && hasDashes) {
    inconsistentPatterns.push('Mixed URL delimiters (hyphens and underscores)');
  }

  const urlSamples = urls.slice(0, 20).map(u => u.loc);

  return {
    totalPages,
    clusters,
    depthDistribution: depthDist,
    maxDepth,
    orphanLike,
    stalePages: stale.slice(0, 15),
    freshPages: fresh.slice(0, 5),
    noLastmod,
    inconsistentPatterns,
    urlSamples,
  };
}
