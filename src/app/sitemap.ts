import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://sitemapfixer.com';
  const now = new Date();

  const core = [
    { url: base, lastModified: now, changeFrequency: 'daily' as const, priority: 1.0 },
    { url: `${base}/sitemap-finder`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${base}/sitemap-checker`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${base}/website-seo-checker`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${base}/xml-sitemap-generator`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${base}/free-seo-audit`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9 },
  ];

  const errorPages = [
    'duplicate-urls', 'invalid-urls', 'too-many-urls',
    'orphan-pages', 'incorrect-priority', 'changefreq-misuse',
  ].map(slug => ({
    url: `${base}/sitemap-errors/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const learnPages = [
    'what-is-an-xml-sitemap', 'sitemap-best-practices', 'sitemap-vs-robots-txt',
    'why-pages-not-indexed', 'how-to-create-a-sitemap',
  ].map(slug => ({
    url: `${base}/learn/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const platformPages = [
    'wordpress', 'shopify', 'nextjs', 'ecommerce', 'large-sites',
  ].map(slug => ({
    url: `${base}/fix-sitemap-for/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const indexes = [
    { url: `${base}/sitemap-errors`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${base}/learn`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${base}/fix-sitemap-for`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.7 },
  ];

  return [...core, ...indexes, ...errorPages, ...learnPages, ...platformPages];
}
