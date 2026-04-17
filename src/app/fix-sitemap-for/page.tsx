import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Fix Sitemap by Platform: WordPress, Shopify & More',
  description: 'Platform-specific sitemap fix guides for WordPress, Shopify, Next.js, e-commerce, and large sites. Step-by-step instructions to fix common sitemap issues.',
  alternates: { canonical: 'https://sitemapfixer.com/fix-sitemap-for' },
  openGraph: {
    title: 'Fix Sitemap by Platform: WordPress, Shopify & More',
    description: 'Platform-specific sitemap fix guides for WordPress, Shopify, Next.js, e-commerce, and large sites. Step-by-step instructions to fix common sitemap issues.',
    url: 'https://sitemapfixer.com/fix-sitemap-for',
    type: 'website',
    images: [{
      url: 'https://sitemapfixer.com/opengraph-image',
      width: 1200,
      height: 630,
      alt: 'SitemapFixer - AI Sitemap Checker and SEO Fix Tool',
    }],
    siteName: 'SitemapFixer',
    locale: 'en_US',
  },
};
const PLATFORMS = [
  { slug: 'wordpress', name: 'WordPress', desc: 'Fix Yoast/Rank Math sitemap issues, exclude low-value pages.' },
  { slug: 'shopify', name: 'Shopify', desc: 'Handle product variants, duplicate collection URLs.' },
  { slug: 'nextjs', name: 'Next.js', desc: 'sitemap.ts, dynamic routes, App Router setup.' },
  { slug: 'ecommerce', name: 'E-commerce', desc: 'Product variants, faceted nav, out-of-stock pages.' },
  { slug: 'large-sites', name: 'Large Sites', desc: 'Sitemap indexes, crawl budget, enterprise scale.' },
  { slug: 'webflow', name: 'Webflow', desc: 'CMS collections, pagination, staging subdomain leaks.' },
  { slug: 'squarespace', name: 'Squarespace', desc: 'Auto-sitemap at /sitemap.xml, customization limits.' },
  { slug: 'wix', name: 'Wix', desc: 'Dynamic content, member pages, locale duplication.' },
  { slug: 'ghost', name: 'Ghost', desc: 'RSS/AMP variants, author/tag page bloat.' },
  { slug: 'magento', name: 'Magento', desc: 'Catalog URLs, layered nav, multi-store sitemaps.' },
  { slug: 'framer', name: 'Framer', desc: 'CMS items, dynamic pages, locale handling.' },
  { slug: 'hugo', name: 'Hugo', desc: 'config.toml sitemap setup, taxonomies, sections.' },
  { slug: 'astro', name: 'Astro', desc: '@astrojs/sitemap integration, i18n, dynamic routes.' },
  { slug: 'nuxt', name: 'Nuxt', desc: '@nuxtjs/sitemap module, dynamic routes, i18n.' },
  { slug: 'gatsby', name: 'Gatsby', desc: 'gatsby-plugin-sitemap, exclude patterns, GraphQL nodes.' },
  { slug: 'django', name: 'Django', desc: 'django.contrib.sitemaps, pagination, custom views.' },
  { slug: 'laravel', name: 'Laravel', desc: 'spatie/laravel-sitemap, Eloquent queries, scheduling.' },
  { slug: 'rails', name: 'Ruby on Rails', desc: 'sitemap_generator gem, lastmod updates, deploys.' },
  { slug: 'drupal', name: 'Drupal', desc: 'Simple XML Sitemap module, content types, taxonomies.' },
  { slug: 'bigcommerce', name: 'BigCommerce', desc: 'Product variants, category filters, sitemap index.' },
  { slug: 'joomla', name: 'Joomla', desc: 'OSMap/JSitemap extensions, multi-language, component URLs.' },
];
export default function PlatformsIndex() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px', fontFamily: 'Geist, sans-serif' }}>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Fix Your Sitemap by Platform</h1>
      <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 40 }}>Platform-specific guides for fixing the most common sitemap issues.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 12, marginBottom: 48 }}>
        {PLATFORMS.map(p => (
          <a key={p.slug} href={'/fix-sitemap-for/' + p.slug} style={{ display: 'block', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px', textDecoration: 'none', background: 'white' }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 4 }}>{p.name}</div>
            <div style={{ color: '#6b6b7d', fontSize: 14 }}>{p.desc}</div>
          </a>
        ))}
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '28px', textAlign: 'center' }}>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '12px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 700, display: 'inline-block' }}>Analyze My Sitemap Free </a>
      </div>
    </div>
  );
}