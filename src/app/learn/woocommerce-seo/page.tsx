import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'WooCommerce SEO: Optimize Your Store',
  description: "WooCommerce gives you full control over store SEO. How to configure your sitemap, product schema, faceted navigation, and fix common SEO issues.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/woocommerce-seo' },
  openGraph: {
    title: 'WooCommerce SEO: Optimize Your Store',
    description: 'WooCommerce gives you full control over your store SEO. How to configure your sitemap, product schema, and faceted navigation.',
    url: 'https://sitemapfixer.com/learn/woocommerce-seo',
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
  { h: "WooCommerce + Yoast or RankMath", d: "WooCommerce on its own has no SEO management features - you need an SEO plugin. Both Yoast SEO and RankMath have dedicated WooCommerce integrations that handle: automatic sitemap generation including products, categories, and tags; product schema markup (Product, Review, AggregateRating); breadcrumb schema; open graph tags for product sharing. Install one of these plugins before any other SEO work." },
  { h: "Sitemap Configuration for WooCommerce", d: "Yoast and RankMath generate sitemaps covering products, product categories, and pages automatically. In Yoast, go to SEO, then General, then Features, and enable XML Sitemaps. Then go to SEO, then XML Sitemaps to configure which post types are included. Exclude: product tags (usually thin), shop page variations, and any custom post types you do not want indexed. Include: products, product categories, pages, and blog posts. Submit your sitemap at yoursite.com/sitemap_index.xml to Google Search Console." },
  { h: "Faceted Navigation: The Biggest WooCommerce SEO Problem", d: "WooCommerce filter plugins (like WooCommerce Product Filters or AJAX-based layered navigation) generate massive URL bloat. Filtering by color, size, price, and brand creates combinatorial URL explosions. Fix: configure your filter plugin to use AJAX without URL changes (filters change products shown but not the URL), or add noindex to filtered pages, or use canonical tags pointing filtered URLs back to the parent category. Check your sitemap for parameter-heavy URLs - these should not be included." },
  { h: "Product Schema and Rich Results", d: "RankMath and Yoast both add Product schema to WooCommerce product pages automatically. Verify it is working with Google Rich Results Test. For the best rich result coverage ensure: product images are high quality (Google requires 1200x1200px for product rich results), prices are up to date (stale prices in schema cause warnings), availability is accurate (InStock, OutOfStock, PreOrder), and reviews are enabled if you collect them - AggregateRating in schema enables star ratings in search results." },
  { h: "WooCommerce Speed Optimization", d: "WooCommerce stores are notorious for being slow due to cart fragment loading, session handling, and checkout scripts loading on every page. Key fixes: use a caching plugin with WooCommerce mode (WP Rocket has a dedicated WooCommerce option), exclude cart, checkout, and my-account pages from caching, enable async loading for WooCommerce scripts on non-shop pages, use a CDN for product images, compress all product images before upload. Test speed specifically on category and product pages, not just the homepage." },
  { h: "Common WooCommerce SEO Mistakes", d: "Cart and checkout pages indexed: WooCommerce /cart and /checkout pages should be noindexed. Yoast and RankMath handle this automatically - verify they are excluded from your sitemap. Shop page duplication: the /shop page and the homepage may contain identical featured products, creating duplication. Add a self-referencing canonical to /shop. Out-of-stock products in sitemap: permanently out-of-stock products should be removed from the sitemap after setting up appropriate 301 redirects to replacements." },
];
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"Article","headline":"WooCommerce SEO: Optimize Your Store","description":"WooCommerce gives you full control over your store SEO. How to configure your sitemap, product schema, and faceted navigation.","url":"https://sitemapfixer.com/learn/woocommerce-seo","author":{"@type":"Person","name":"Arnoldas Arny","url":"https://sitemapfixer.com/about"},"publisher":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com","logo":{"@type":"ImageObject","url":"https://sitemapfixer.com/opengraph-image"}},"datePublished":"2025-01-15","mainEntityOfPage":{"@type":"WebPage","@id":"https://sitemapfixer.com/learn/woocommerce-seo"}}' }} />
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>WooCommerce SEO</span>
      </nav>
      <div style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 16 }}>By <a href="/about" style={{ color: '#2d5be3', textDecoration: 'none' }}>Arnoldas Arny</a></div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>WooCommerce SEO: Optimize Your Store for Google</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your WooCommerce sitemap free</span>
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
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Analyze your WooCommerce sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free - finds crawl waste and indexing issues in 60 seconds</div>
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
          
            <li><a href="/learn/product-page-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Product Page SEO: Rank Ecommerce Pages in Google</a></li></ul>
        </div>
    </div>
  );
}
