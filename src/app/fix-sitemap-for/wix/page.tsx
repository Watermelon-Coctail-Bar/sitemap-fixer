import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fix Sitemap for Wix - Complete Guide',
  description: 'Optimize your Wix sitemap: handle dynamic pages, member-only URLs, locale duplication, and improve indexing across Wix SEO Patterns.',
  alternates: { canonical: 'https://sitemapfixer.com/fix-sitemap-for/wix' },
  openGraph: {
    title: 'Fix Sitemap for Wix - Complete Guide',
    description: 'Optimize your Wix sitemap: handle dynamic pages, member-only URLs, locale duplication, and improve indexing across Wix SEO Patterns.',
    url: 'https://sitemapfixer.com/fix-sitemap-for/wix',
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
        <span>Wix</span>
      </nav>

      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>
        Fix Your Sitemap for Wix
      </h1>
      <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        Wix generates sitemap.xml automatically, but dynamic pages from Wix Data, Wix Stores product collections, and Multilingual site locales often pollute the feed with duplicates and private URLs.
      </p>

      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Analyze your Wix sitemap now </span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>
          Try Sitemap Fixer Free
        </a>
      </div>

      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 24 }}>
        Wix sites hit recurring sitemap problems because dynamic pages are auto-generated from datasets and
        Wix SEO Patterns can emit URL variants you did not intend to expose. This guide walks through the fixes that matter.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common Wix Sitemap Issues</h2>
      <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li>Member-only and private pages leaking into sitemap.xml because they are technically published</li>
        <li>Wix Multilingual creating duplicate URLs per locale without correct hreflang or language filtering</li>
        <li>Dynamic pages generated from Wix Data collections with placeholder or empty records</li>
        <li>Blog tag pages and category filters adding hundreds of thin URLs to the sitemap</li>
        <li>Wix Stores category and product variant URLs appearing without canonical signals</li>
        <li>Free plan sites using a Wix subdomain (username.wixsite.com/slug) polluting the sitemap alongside the custom domain</li>
      </ul>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Step-by-Step Fix Guide</h2>
      <ol style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li style={{ marginBottom: 12 }}>Open Wix SEO Settings - Advanced SEO and confirm sitemap.xml is enabled with your connected custom domain</li>
        <li style={{ marginBottom: 12 }}>Mark member-only pages as Hidden from search engines in each page SEO panel - Wix adds noindex and removes them from sitemap</li>
        <li style={{ marginBottom: 12 }}>In Wix Multilingual, set the primary language and enable Use a sitemap per language so each locale is isolated</li>
        <li style={{ marginBottom: 12 }}>Under Wix Data - Content Manager, filter out draft and empty records so dynamic pages do not generate for them</li>
        <li style={{ marginBottom: 12 }}>Use Wix SEO Patterns to set a canonical URL for product variants and blog filters, pointing back to the parent page</li>
        <li style={{ marginBottom: 12 }}>Customize robots.txt in SEO Tools to disallow /account, /cart, /thank-you and internal widgets</li>
        <li style={{ marginBottom: 12 }}>Republish the site, then run Sitemap Fixer against yourdomain.com/sitemap.xml and submit to Google Search Console</li>
      </ol>

      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Analyze your Wix sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Find all issues in your sitemap - free, no credit card needed</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>
          Analyze My Sitemap Free
        </a>
      </div>

      <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
        <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Other platform guides</div>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <li><a href="/fix-sitemap-for/wordpress" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>WordPress</a></li>
          <li><a href="/fix-sitemap-for/squarespace" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Squarespace</a></li>
          <li><a href="/fix-sitemap-for/webflow" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Webflow</a></li>
          <li><a href="/fix-sitemap-for/shopify" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Shopify</a></li>
          <li><a href="/learn/wix-sitemap" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Wix Sitemap Guide</a></li>
        </ul>
      </div>
    </div>
  );
}
