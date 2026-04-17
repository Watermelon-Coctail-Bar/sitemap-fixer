import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fix Sitemap for Squarespace - Complete Guide',
  description: 'Optimize your Squarespace sitemap at /sitemap.xml: handle blog paginations, exclude hidden pages, and improve indexing despite limited customization.',
  alternates: { canonical: 'https://sitemapfixer.com/fix-sitemap-for/squarespace' },
  openGraph: {
    title: 'Fix Sitemap for Squarespace - Complete Guide',
    description: 'Optimize your Squarespace sitemap at /sitemap.xml: handle blog paginations, exclude hidden pages, and improve indexing despite limited customization.',
    url: 'https://sitemapfixer.com/fix-sitemap-for/squarespace',
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
        <span>Squarespace</span>
      </nav>

      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>
        Fix Your Sitemap for Squarespace
      </h1>
      <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        Squarespace publishes a sitemap automatically at /sitemap.xml and gives you almost no direct control. That forces you to fix issues through page settings, URL slugs, and robots.txt overrides.
      </p>

      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Analyze your Squarespace sitemap now </span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>
          Try Sitemap Fixer Free
        </a>
      </div>

      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 24 }}>
        Because Squarespace does not let you edit sitemap.xml directly, the fix workflow is about configuring
        pages, products, and blog posts so the auto-generated output is clean. This guide covers the patterns that produce the best results.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common Squarespace Sitemap Issues</h2>
      <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li>Hidden pages (Not Linked) still appearing in /sitemap.xml because they remain published</li>
        <li>Blog tag and category archives competing with the main blog page for the same keywords</li>
        <li>Product variant URLs inflating the sitemap on Squarespace Commerce stores</li>
        <li>Built-in system pages like /cart, /checkout, and /account slipping into the sitemap</li>
        <li>Duplicate content from built-in .squarespace.com preview domain being indexable</li>
        <li>No lastmod granularity - Squarespace uses the page publish date, not the most recent edit</li>
      </ul>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Step-by-Step Fix Guide</h2>
      <ol style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li style={{ marginBottom: 12 }}>Open Pages - Not Linked and delete or unpublish any legacy pages you no longer want indexed</li>
        <li style={{ marginBottom: 12 }}>For pages you want to keep but hide from search, open Page Settings - SEO and toggle Hide from search engine results (adds noindex)</li>
        <li style={{ marginBottom: 12 }}>In Settings - Advanced - Code Injection, add a robots.txt block via the Home Header to disallow crawling of /tag and /category if those pages are thin</li>
        <li style={{ marginBottom: 12 }}>Connect your custom domain and set it to primary under Settings - Domains so the .squarespace.com preview URL redirects</li>
        <li style={{ marginBottom: 12 }}>On Commerce stores, consolidate product variants with canonical tags so variant slugs do not create duplicate listings</li>
        <li style={{ marginBottom: 12 }}>Rename blog post URL slugs to short, keyword-rich paths before publishing - Squarespace preserves old slugs via redirects</li>
        <li style={{ marginBottom: 12 }}>Run Sitemap Fixer against yourdomain.com/sitemap.xml and resubmit to Google Search Console</li>
      </ol>

      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Analyze your Squarespace sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Find all issues in your sitemap - free, no credit card needed</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>
          Analyze My Sitemap Free
        </a>
      </div>

      <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
        <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Other platform guides</div>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <li><a href="/fix-sitemap-for/wordpress" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>WordPress</a></li>
          <li><a href="/fix-sitemap-for/webflow" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Webflow</a></li>
          <li><a href="/fix-sitemap-for/wix" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Wix</a></li>
          <li><a href="/fix-sitemap-for/shopify" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Shopify</a></li>
          <li><a href="/learn/squarespace-sitemap" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Squarespace Sitemap Guide</a></li>
        </ul>
      </div>
    </div>
  );
}
