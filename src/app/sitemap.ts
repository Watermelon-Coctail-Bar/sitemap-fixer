import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://sitemapfixer.com';
  const now = new Date().toISOString();
  const urls = [
    // Core pages
    { url: base, priority: 1.0, changeFrequency: 'daily' as const },
    { url: base + '/pricing', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: base + '/signup', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: base + '/blog', priority: 0.8, changeFrequency: 'daily' as const },
    { url: base + '/learn', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: base + '/terms', priority: 0.3, changeFrequency: 'monthly' as const },
    { url: base + '/privacy', priority: 0.3, changeFrequency: 'monthly' as const },
    // Learn - Sitemaps
    { url: base + '/learn/what-is-an-xml-sitemap', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: base + '/learn/xml-sitemap-generator', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: base + '/learn/sitemap-best-practices', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: base + '/learn/how-to-create-a-sitemap', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: base + '/learn/sitemap-checker', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: base + '/learn/sitemap-validator', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: base + '/learn/sitemap-not-working', priority: 0.7, changeFrequency: 'monthly' as const },
    // Learn - Indexing
    { url: base + '/learn/pages-not-indexed-google', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: base + '/learn/submitted-url-not-indexed', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: base + '/learn/crawled-currently-not-indexed', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: base + '/learn/pages-in-sitemap-not-indexed', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: base + '/learn/why-pages-not-indexed', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: base + '/learn/index-coverage-report', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: base + '/learn/noindex-tag', priority: 0.7, changeFrequency: 'monthly' as const },
    // Learn - Crawling
    { url: base + '/learn/robots-txt-guide', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: base + '/learn/sitemap-vs-robots-txt', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: base + '/learn/crawl-budget', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: base + '/learn/google-not-crawling-my-site', priority: 0.7, changeFrequency: 'monthly' as const },
    // Learn - Technical SEO
    { url: base + '/learn/technical-seo-checklist', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: base + '/learn/canonical-tags', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: base + '/learn/structured-data', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: base + '/learn/core-web-vitals', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: base + '/learn/page-speed-optimization', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: base + '/learn/internal-linking', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: base + '/learn/sitemap-errors-google-search-console', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: base + '/learn/google-search-console-sitemap', priority: 0.7, changeFrequency: 'monthly' as const },
  ];
  return urls.map(u => ({ ...u, lastModified: now }));
}
