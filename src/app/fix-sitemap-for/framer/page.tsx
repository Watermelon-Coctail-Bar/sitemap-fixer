import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fix Sitemap for Framer - Complete Guide',
  description: 'Optimize your Framer sitemap: manage CMS collection items, dynamic pages, framer.website subdomains, and indexing for your published site.',
  alternates: { canonical: 'https://sitemapfixer.com/fix-sitemap-for/framer' },
  openGraph: {
    title: 'Fix Sitemap for Framer - Complete Guide',
    description: 'Optimize your Framer sitemap: manage CMS collection items, dynamic pages, framer.website subdomains, and indexing for your published site.',
    url: 'https://sitemapfixer.com/fix-sitemap-for/framer',
    type: 'article',
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

export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px', fontFamily: 'Geist, sans-serif' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>
        {'  '}
        <a href="/fix-sitemap-for" style={{ color: '#2d5be3', textDecoration: 'none' }}>Platform Guides</a>
        {'  '}
        <span>Framer</span>
      </nav>

      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>
        Fix Your Sitemap for Framer
      </h1>
      <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        Framer auto-generates /sitemap.xml when you publish, but CMS Collections, dynamic detail pages, and framer.website preview domains often slip into the output and steal link equity.
      </p>

      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Analyze your Framer sitemap now </span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>
          Try Sitemap Fixer Free
        </a>
      </div>

      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 24 }}>
        Framer publishes a clean HTML sitemap for most sites, but marketing teams using CMS Collections for blog posts, case studies,
        or changelogs often see duplicate URLs and orphaned items. This guide walks through the fix path.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common Framer Sitemap Issues</h2>
      <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li>framer.website staging subdomain getting indexed alongside the custom domain</li>
        <li>CMS Collection detail pages (/blog/:slug) appearing for draft items with partial content</li>
        <li>Utility pages (404, 500, password-protected) ending up in sitemap.xml</li>
        <li>Multiple locale variants duplicating URLs when using localization features without canonical handling</li>
        <li>Stale items persisting in sitemap for hours after being unpublished due to Framer CDN caching</li>
        <li>Missing lastmod values because Framer does not expose per-item modified timestamps</li>
      </ul>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Step-by-Step Fix Guide</h2>
      <ol style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li style={{ marginBottom: 12 }}>In Site Settings - Domains, connect a custom domain and set it as the primary; Framer will 301 the framer.website subdomain automatically</li>
        <li style={{ marginBottom: 12 }}>Open Site Settings - SEO and verify Generate sitemap.xml is enabled with the correct base URL</li>
        <li style={{ marginBottom: 12 }}>For each CMS Collection, toggle Exclude from sitemap for draft, archived, and internal items</li>
        <li style={{ marginBottom: 12 }}>Mark 404, 500, and password pages as Hide from search engines in their individual Page SEO panel</li>
        <li style={{ marginBottom: 12 }}>When using localization, add hreflang via Custom Code and keep each locale on a distinct path (/en, /de)</li>
        <li style={{ marginBottom: 12 }}>Force a republish after making CMS changes so Framer rebuilds sitemap.xml and purges CDN cache</li>
        <li style={{ marginBottom: 12 }}>Run Sitemap Fixer against yourdomain.com/sitemap.xml and submit the verified URL to Google Search Console</li>
      </ol>

      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Analyze your Framer sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Find all issues in your sitemap - free, no signup required</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>
          Analyze My Sitemap Free
        </a>
      </div>

      <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
        <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Other platform guides</div>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <li><a href="/fix-sitemap-for/webflow" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Webflow</a></li>
          <li><a href="/fix-sitemap-for/squarespace" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Squarespace</a></li>
          <li><a href="/fix-sitemap-for/wix" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Wix</a></li>
          <li><a href="/fix-sitemap-for/astro" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Astro</a></li>
          <li><a href="/learn/framer-sitemap" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Framer Sitemap Guide</a></li>
        </ul>
      </div>
    </div>
  );
}
