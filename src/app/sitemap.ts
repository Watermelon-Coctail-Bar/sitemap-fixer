import { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://sitemapfixer.com';
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: base+'/sitemap-finder', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: base+'/sitemap-checker', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: base+'/website-seo-checker', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: base+'/xml-sitemap-generator', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: base+'/free-seo-audit', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
  ];
}
