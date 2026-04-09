import { XMLParser } from 'fast-xml-parser';

export interface SitemapURL {
  loc: string;
  lastmod?: string;
  changefreq?: string;
  priority?: number;
}

export interface ParsedSitemap {
  urls: SitemapURL[];
  sitemapSource: string;
  isSitemapIndex: boolean;
  childSitemaps: string[];
  robotsTxt: string;
}

const HEADERS = {
  'User-Agent': 'Mozilla/5.0 (compatible; SitemapFinder/1.0)',
  Accept: 'text/xml,application/xml,text/plain,*/*',
};

const TIMEOUT = 8000;

async function fetchWithTimeout(url: string): Promise<string | null> {
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), TIMEOUT);
    const res = await fetch(url, { headers: HEADERS, signal: controller.signal });
    clearTimeout(timer);
    if (!res.ok) return null;
    return await res.text();
  } catch {
    return null;
  }
}

function normalizeUrl(domain: string): string {
  let d = domain.trim().toLowerCase();
  if (!d.startsWith('http')) d = 'https://' + d;
  d = d.replace(/\/$/, '');
  return d;
}

async function parseSitemapXml(xml: string): Promise<{ urls: SitemapURL[]; isSitemapIndex: boolean; childSitemaps: string[] }> {
  const parser = new XMLParser({ ignoreAttributes: false, parseTagValue: true });
  const result = parser.parse(xml);

  const urls: SitemapURL[] = [];
  const childSitemaps: string[] = [];
  let isSitemapIndex = false;

  // Sitemap index
  if (result.sitemapindex?.sitemap) {
    isSitemapIndex = true;
    const sitemaps = Array.isArray(result.sitemapindex.sitemap)
      ? result.sitemapindex.sitemap
      : [result.sitemapindex.sitemap];
    sitemaps.forEach((s: { loc?: string }) => {
      if (s.loc) childSitemaps.push(String(s.loc).trim());
    });
  }

  // Regular sitemap
  if (result.urlset?.url) {
    const entries = Array.isArray(result.urlset.url)
      ? result.urlset.url
      : [result.urlset.url];
    entries.forEach((u: { loc?: string; lastmod?: string; changefreq?: string; priority?: number }) => {
      if (u.loc) {
        urls.push({
          loc: String(u.loc).trim(),
          lastmod: u.lastmod ? String(u.lastmod).trim() : undefined,
          changefreq: u.changefreq ? String(u.changefreq).trim() : undefined,
          priority: u.priority ? Number(u.priority) : undefined,
        });
      }
    });
  }

  return { urls, isSitemapIndex, childSitemaps };
}

async function extractSitemapFromRobots(baseUrl: string): Promise<string[]> {
  const robotsText = await fetchWithTimeout(`${baseUrl}/robots.txt`);
  if (!robotsText) return [];
  const matches = robotsText.match(/^Sitemap:\s*(.+)$/gim) || [];
  return matches
    .map(line => line.replace(/^Sitemap:\s*/i, '').trim())
    .filter(url => url.startsWith('http'));
}

export async function discoverAndParseSitemap(domain: string): Promise<ParsedSitemap> {
  const base = normalizeUrl(domain);

  const candidates = [
    `${base}/sitemap.xml`,
    `${base}/sitemap_index.xml`,
    `${base}/sitemap-index.xml`,
    `${base}/sitemap/sitemap.xml`,
    `${base}/wp-sitemap.xml`,
    `${base}/sitemap1.xml`,
    `${base}/news-sitemap.xml`,
  ];

  // First check robots.txt (also store raw text for URL health checks)
  const robotsTxtRaw = await fetchWithTimeout(`${base}/robots.txt`) || '';
  const robotsSitemaps = robotsTxtRaw
    ? (robotsTxtRaw.match(/^Sitemap:\s*(.+)$/gim) || []).map(m => m.replace(/^Sitemap:\s*/i, '').trim()).filter(u => u.startsWith('http'))
    : await extractSitemapFromRobots(base);
  const seen = new Set<string>();
  const allCandidates: string[] = [];
  for (const u of [...robotsSitemaps, ...candidates]) {
    if (!seen.has(u)) { seen.add(u); allCandidates.push(u); }
  }

  let xml: string | null = null;
  let sitemapSource = '';

  for (const url of allCandidates) {
    xml = await fetchWithTimeout(url);
    if (xml && (xml.includes('<urlset') || xml.includes('<sitemapindex'))) {
      sitemapSource = url;
      break;
    }
    xml = null;
  }

  if (!xml) {
    return { urls: [], sitemapSource: 'not_found', isSitemapIndex: false, childSitemaps: [], robotsTxt: robotsTxtRaw };
  }

  const parsed = await parseSitemapXml(xml);

  // If sitemap index, fetch child sitemaps (up to 5 to stay fast)
  if (parsed.isSitemapIndex && parsed.childSitemaps.length > 0) {
    const childUrls: SitemapURL[] = [];
    const toFetch = parsed.childSitemaps.slice(0, 5);
    for (const childUrl of toFetch) {
      const childXml = await fetchWithTimeout(childUrl);
      if (childXml) {
        const childParsed = await parseSitemapXml(childXml);
        childUrls.push(...childParsed.urls);
      }
    }
    return {
      urls: childUrls,
      sitemapSource,
      isSitemapIndex: true,
      childSitemaps: parsed.childSitemaps,
      robotsTxt: robotsTxtRaw,
    };
  }

  return {
    urls: parsed.urls,
    sitemapSource,
    isSitemapIndex: parsed.isSitemapIndex,
    childSitemaps: parsed.childSitemaps,
    robotsTxt: robotsTxtRaw,
  };
}
