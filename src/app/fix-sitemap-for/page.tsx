import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Fix Sitemap by Platform — WordPress, Shopify, Next.js | SitemapFixer',
  description: 'Platform-specific sitemap fix guides for WordPress, Shopify, Next.js, e-commerce, and large sites.',
  alternates: { canonical: 'https://sitemapfixer.com/fix-sitemap-for' },
};
const PLATFORMS = [
  { slug: 'wordpress', name: 'WordPress', desc: 'Fix Yoast/Rank Math sitemap issues, exclude low-value pages.' },
  { slug: 'shopify', name: 'Shopify', desc: 'Handle product variants, duplicate collection URLs.' },
  { slug: 'nextjs', name: 'Next.js', desc: 'sitemap.ts, dynamic routes, App Router setup.' },
  { slug: 'ecommerce', name: 'E-commerce', desc: 'Product variants, faceted nav, out-of-stock pages.' },
  { slug: 'large-sites', name: 'Large Sites', desc: 'Sitemap indexes, crawl budget, enterprise scale.' },
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
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '12px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 700, display: 'inline-block' }}>Analyze My Sitemap Free →</a>
      </div>
    </div>
  );
}