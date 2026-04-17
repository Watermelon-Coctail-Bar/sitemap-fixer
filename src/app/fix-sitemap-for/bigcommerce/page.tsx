import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fix Sitemap for BigCommerce - Complete Guide',
  description: 'Optimize your BigCommerce sitemap: manage product variants, category filters, brand pages, and multi-storefront URLs for better indexing.',
  alternates: { canonical: 'https://sitemapfixer.com/fix-sitemap-for/bigcommerce' },
  openGraph: {
    title: 'Fix Sitemap for BigCommerce - Complete Guide',
    description: 'Optimize your BigCommerce sitemap: manage product variants, category filters, brand pages, and multi-storefront URLs for better indexing.',
    url: 'https://sitemapfixer.com/fix-sitemap-for/bigcommerce',
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
        <span>BigCommerce</span>
      </nav>

      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>
        Fix Your Sitemap for BigCommerce
      </h1>
      <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        BigCommerce auto-generates /xmlsitemap.php, but product variants, faceted category filters, brand archives, and multi-storefront setups routinely produce duplicate and low-value URLs.
      </p>

      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Analyze your BigCommerce sitemap now </span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>
          Try Sitemap Fixer Free
        </a>
      </div>

      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 24 }}>
        BigCommerce stores hit common sitemap issues around Product Filtering (faceted nav), SKU-level variants,
        and multiple storefronts tied to the same catalog. This guide covers the Store Settings changes to make.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common BigCommerce Sitemap Issues</h2>
      <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li>Faceted category filter URLs (?brand=, ?color=) emitted alongside canonical category pages</li>
        <li>Product variant URLs indexed separately from the parent product because of SKU-level routes</li>
        <li>Brand archive pages auto-generated for every brand, including brands with only one product</li>
        <li>Hidden and out-of-stock products remaining in sitemap due to default Customer Visibility settings</li>
        <li>Multi-storefront setups using shared catalogs generate duplicate product URLs across domains</li>
        <li>Default Stencil theme blog URLs and RSS feeds appearing without curation</li>
      </ul>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Step-by-Step Fix Guide</h2>
      <ol style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li style={{ marginBottom: 12 }}>Open Advanced Settings - Data Solutions - robots.txt and add Disallow: /*? to block faceted filter parameter URLs</li>
        <li style={{ marginBottom: 12 }}>In Advanced Settings - Store Settings - SEO, enable Set canonical URL on products so variant URLs collapse to the parent</li>
        <li style={{ marginBottom: 12 }}>Under Products, set Visible to Customers off for legacy SKUs and out-of-stock items you do not want indexed</li>
        <li style={{ marginBottom: 12 }}>In Storefront - Brands, merge or delete single-product brands so thin brand archives disappear</li>
        <li style={{ marginBottom: 12 }}>For multi-storefront setups, configure per-storefront sitemap URLs and add hreflang through the Stencil theme handlebars</li>
        <li style={{ marginBottom: 12 }}>Clear BigCommerce cache (Theme - Clear Cache) and wait up to 24 hours for /xmlsitemap.php to regenerate</li>
        <li style={{ marginBottom: 12 }}>Run Sitemap Fixer against yourdomain.com/xmlsitemap.php and submit to Google Search Console</li>
      </ol>

      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Analyze your BigCommerce sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Find all issues in your sitemap - free, no credit card needed</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>
          Analyze My Sitemap Free
        </a>
      </div>

      <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
        <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Other platform guides</div>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <li><a href="/fix-sitemap-for/shopify" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Shopify</a></li>
          <li><a href="/fix-sitemap-for/magento" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Magento</a></li>
          <li><a href="/fix-sitemap-for/ecommerce" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>E-commerce Sites</a></li>
          <li><a href="/fix-sitemap-for/large-sites" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Large Sites (10k+ pages)</a></li>
        </ul>
      </div>
    </div>
  );
}
