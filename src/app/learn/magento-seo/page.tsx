import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Magento SEO: Optimize Adobe Commerce for Google',
  description: "Magento (Adobe Commerce) has powerful SEO features but also common pitfalls. How to configure sitemaps, handle duplicate URLs, and boost traffic.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/magento-seo' },
  openGraph: {
    title: 'Magento SEO: Optimize Adobe Commerce for Google',
    description: 'Magento (Adobe Commerce) has powerful built-in SEO features but also common pitfalls. How to configure sitemaps and handle duplicate URLs.',
    url: 'https://sitemapfixer.com/learn/magento-seo',
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
const sections = [
  { h: "Magento Sitemap Configuration", d: "Magento generates XML sitemaps automatically via a built-in sitemap module. Go to Marketing, then SEO and Search, then Site Map to configure and generate your sitemap. Set the sitemap to include products, categories, and CMS pages. Configure the cron job to regenerate the sitemap regularly - daily for sites with frequently changing inventory. After generation, find your sitemap at the root of your store (usually yourstore.com/sitemap.xml) and submit it to Google Search Console." },
  { h: "The Duplicate URL Problem in Magento", d: "Magento is notorious for generating multiple URLs for the same product. A product in three categories creates: /product-name.html, /category-1/product-name.html, /category-2/product-name.html, /category-3/product-name.html. This is severe duplicate content. Fix in Stores, then Configuration, then Catalog, then Search Engine Optimization: set Use Categories Path for Product URLs to No, and enable the canonical link meta tag for both products and categories. Magento will then add canonical tags pointing all category-path variants to the root product URL." },
  { h: "URL Rewrites and SEO", d: "Magento URL rewrites map clean URLs to internal router paths. Go to Marketing, then SEO and Search, then URL Rewrites to manage them. When you change a product or category name, Magento creates a 301 redirect from the old URL automatically - verify this is working correctly after URL changes. Remove the .html suffix from URLs if possible for cleaner links (configure in Stores, then Configuration, then Catalog SEO, then Product URL Suffix - set to empty). Ensure no redirect chains exist." },
  { h: "Category Layered Navigation", d: "Magento's layered navigation (faceted filters) creates massive URL bloat by default. Every filter combination generates a unique indexable URL: /shoes/color/red/size/10. Configure your store to use AJAX-based filtering that updates product listings without changing the URL - this requires a compatible theme or extension. Alternatively, configure robots.txt to disallow layered navigation parameters. In your sitemap settings, ensure filtered URLs are excluded." },
  { h: "Page Speed for Magento", d: "Magento stores can be very slow without proper infrastructure. Key configurations: enable Varnish cache as the full-page cache solution, enable Redis for session and cache storage, enable JavaScript and CSS bundling in Production mode, use a CDN for static assets and product images, enable Gzip compression at the server level. Target under 2.5 seconds LCP - Magento stores commonly fail Core Web Vitals due to large image catalogs and complex page assembly. Check Google Search Console Core Web Vitals for your specific URLs." },
  { h: "Magento SEO Extensions", d: "While Magento has solid built-in SEO features, extensions can improve coverage. Recommended: an SEO extension that adds automated meta description templates (Magento defaults are often blank), structured data enhancement for Product and BreadcrumbList schema, and canonical URL management. Popular extensions include MageWorx SEO Suite and Amasty SEO Toolkit. For most stores, the built-in features plus correct canonical configuration handles the most critical issues without additional extensions." },
];
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"Article","headline":"Magento SEO: Optimize Adobe Commerce for Google","description":"Magento (Adobe Commerce) has powerful built-in SEO features but also common pitfalls. How to configure sitemaps and handle duplicate URLs.","url":"https://sitemapfixer.com/learn/magento-seo","author":{"@type":"Person","name":"Arnoldas Arny","url":"https://sitemapfixer.com/about"},"publisher":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com","logo":{"@type":"ImageObject","url":"https://sitemapfixer.com/opengraph-image"}},"datePublished":"2025-01-15","mainEntityOfPage":{"@type":"WebPage","@id":"https://sitemapfixer.com/learn/magento-seo"}}' }} />
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Magento SEO</span>
      </nav>
      <div style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 16 }}>By <a href="/about" style={{ color: '#2d5be3', textDecoration: 'none' }}>Arnoldas Arny</a></div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Magento SEO: Optimize Adobe Commerce for Google</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your Magento sitemap free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Site Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        {sections.map(({ h, d }) => (
          <div key={h} style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 10 }}>{h}</h2>
            <p style={{ margin: 0 }}>{d}</p>
          </div>
        ))}
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Validate your Magento sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free - checks all product and category URLs</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>

        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/learn/wordpress-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>WordPress SEO: Complete Optimization Guide for 2025</a></li>
            <li><a href="/learn/shopify-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Shopify SEO: Optimize Your Store for Google</a></li>
            <li><a href="/learn/wix-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Wix SEO: How to Optimize Your Wix Website for Google</a></li>
            <li><a href="/learn/squarespace-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Squarespace SEO: Optimize for Google</a></li>
            <li><a href="/learn/webflow-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Webflow SEO: Optimize for Google</a></li>
          </ul>
        </div>
    </div>
  );
}
