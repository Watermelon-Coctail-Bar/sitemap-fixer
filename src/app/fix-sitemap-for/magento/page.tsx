import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fix Sitemap for Magento - Complete Guide',
  description: 'Optimize your Magento 2 sitemap: handle catalog URLs, layered navigation, multi-store views, and large product feeds for better indexing.',
  alternates: { canonical: 'https://sitemapfixer.com/fix-sitemap-for/magento' },
  openGraph: {
    title: 'Fix Sitemap for Magento - Complete Guide',
    description: 'Optimize your Magento 2 sitemap: handle catalog URLs, layered navigation, multi-store views, and large product feeds for better indexing.',
    url: 'https://sitemapfixer.com/fix-sitemap-for/magento',
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
        <span>Magento</span>
      </nav>

      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>
        Fix Your Sitemap for Magento
      </h1>
      <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        Magento 2 generates sitemaps via the Catalog XML Sitemap feature, but layered navigation, configurable product children, and multi-store views routinely balloon the sitemap to millions of low-value URLs.
      </p>

      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Analyze your Magento sitemap now </span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>
          Try Sitemap Fixer Free
        </a>
      </div>

      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 24 }}>
        A typical enterprise Magento store has CMS pages, categories, and products across many store views and currencies.
        Without careful configuration of Stores - Configuration - Catalog - XML Sitemap, Google ends up crawling faceted URLs instead of money pages.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common Magento Sitemap Issues</h2>
      <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li>Layered navigation URLs with ?price= or ?color= parameters inflating category sitemaps</li>
        <li>Configurable product children (simple products) indexed separately from the parent</li>
        <li>Multi-store views generating duplicate product URLs without proper hreflang annotations</li>
        <li>Out-of-stock or disabled products staying in sitemap long after they are hidden</li>
        <li>Category grid and list view duplicates (?product_list_mode=list) appearing as separate URLs</li>
        <li>Session IDs (?SID=) or tracking parameters (utm_source) appended in legacy deployments</li>
      </ul>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Step-by-Step Fix Guide</h2>
      <ol style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li style={{ marginBottom: 12 }}>In Stores - Configuration - Catalog - XML Sitemap, set frequency and priority per entity (Categories, Products, CMS Pages) and generate per store view</li>
        <li style={{ marginBottom: 12 }}>Under Catalog - SEO, enable Canonical Meta Tag for Products and Categories so configurable children point to the parent</li>
        <li style={{ marginBottom: 12 }}>Disable Use Categories Path for Product URLs if you are generating duplicate /category/subcategory/product paths</li>
        <li style={{ marginBottom: 12 }}>In System - Configuration - General - Web, add ?price, ?color, ?size, ?p to the URL Rewrite exclusion list or block them via robots.txt</li>
        <li style={{ marginBottom: 12 }}>Run bin/magento sitemap:generate from CLI or schedule it via cron so new products land in sitemap within 24 hours</li>
        <li style={{ marginBottom: 12 }}>For multi-store setups, generate a separate sitemap.xml per store view, reference them in a root sitemap_index.xml, and add hreflang at page level</li>
        <li style={{ marginBottom: 12 }}>Run Sitemap Fixer against the generated sitemap index and submit each store-view sitemap in Google Search Console</li>
      </ol>

      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Analyze your Magento sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Find all issues in your sitemap - free, no signup required</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>
          Analyze My Sitemap Free
        </a>
      </div>

      <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
        <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Other platform guides</div>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <li><a href="/fix-sitemap-for/shopify" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Shopify</a></li>
          <li><a href="/fix-sitemap-for/bigcommerce" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>BigCommerce</a></li>
          <li><a href="/fix-sitemap-for/ecommerce" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>E-commerce Sites</a></li>
          <li><a href="/fix-sitemap-for/large-sites" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Large Sites (10k+ pages)</a></li>
          <li><a href="/learn/magento-seo" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Magento SEO Guide</a></li>
        </ul>
      </div>
    </div>
  );
}
