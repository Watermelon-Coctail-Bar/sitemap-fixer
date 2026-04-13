import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Shopify SEO: Optimize Your Store for Google',
  description: "Shopify has SEO limitations built in. Learn what you can control and the highest-impact optimizations for ranking your Shopify store in Google.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/shopify-seo' },
  openGraph: {
    title: 'Shopify SEO: Optimize Your Store for Google',
    description: 'Shopify has SEO limitations built in. Learn what you can control and the highest-impact optimizations for ranking your Shopify store in Google.',
    url: 'https://sitemapfixer.com/learn/shopify-seo',
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
  { h: "What Shopify Controls Automatically", d: "Shopify handles canonical tags (preventing collection-path duplicate URLs), sitemap generation at /sitemap.xml, robots.txt (with limited customization), 301 redirects when you change a product URL, and basic SSL. These defaults are correct and you should not fight them. The canonical tag pointing /collections/shoes/products/sneaker to /products/sneaker is intentional - Shopify handles product URL duplication correctly." },
  { h: "Title Tags and Meta Descriptions", d: "Every product, collection, page, and blog post in Shopify has an SEO section at the bottom of the edit screen (Edit website SEO). Always fill in the SEO title and description - do not rely on defaults which often use your store name repeatedly or truncate. For products: include the product name, key feature, and brand in the title. For collections: describe what is in the collection and include the category keyword. Use 50-60 characters for titles and 120-155 for descriptions." },
  { h: "Product Page SEO", d: "Product descriptions are the most impactful SEO element on Shopify. Avoid using manufacturer descriptions verbatim - they create duplicate content across thousands of stores. Write unique descriptions that include relevant keywords naturally, describe the product specifically, and answer buyer questions. Add product schema automatically via your theme (most modern Shopify themes include Product schema). For high-value products, add reviews to get AggregateRating schema and star ratings in search results." },
  { h: "Collection Pages", d: "Collection pages are your most valuable SEO asset on Shopify - they target category-level keywords with high purchase intent. Add a description to every collection using the Description field. Include 150-300 words covering what the collection contains, key attributes, and use cases. Use H2 headings within the description to add keyword-rich subheadings. Collections with no description rank poorly because Google sees them as thin pages." },
  { h: "Shopify Speed Optimization", d: "Shopify is generally fast but can slow significantly with too many apps. Every installed app adds JavaScript that loads on every page. Audit your apps quarterly and remove any you do not actively use. Use a lightweight, fast theme - avoid themes with heavy animation. Compress all product images before uploading - Shopify does some optimization but starts from whatever you upload. Use the PageSpeed Insights report specifically for your product pages and collection pages, not just the homepage." },
  { h: "Shopify SEO Limitations", d: "You cannot fully customize your robots.txt (only limited customization since 2021). You cannot edit the URL structure for products outside collections. Blog post URLs include /blogs/news/ which is not ideal for SEO. You cannot easily create custom page templates for different content types without theme code changes. These limitations are real but manageable - focus your efforts on what you can control: content quality, meta tags, speed, and structured data." },
];
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"Article","headline":"Shopify SEO: Optimize Your Store for Google","description":"Shopify has SEO limitations built in. Learn what you can control and the highest-impact optimizations for ranking your Shopify store in Google.","url":"https://sitemapfixer.com/learn/shopify-seo","author":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com"},"publisher":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com","logo":{"@type":"ImageObject","url":"https://sitemapfixer.com/opengraph-image"}},"datePublished":"2025-01-15","mainEntityOfPage":{"@type":"WebPage","@id":"https://sitemapfixer.com/learn/shopify-seo"}}' }} />
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Shopify SEO</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Shopify SEO: Optimize Your Store for Google Rankings</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your Shopify sitemap free</span>
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
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Analyze your Shopify sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free - checks all URLs in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>

        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/learn/wordpress-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>WordPress SEO: Complete Optimization Guide for 2025</a></li>
            <li><a href="/learn/wix-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Wix SEO: How to Optimize Your Wix Website for Google</a></li>
            <li><a href="/learn/squarespace-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Squarespace SEO: Optimize for Google</a></li>
            <li><a href="/learn/webflow-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Webflow SEO: Optimize for Google</a></li>
            <li><a href="/learn/ghost-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Ghost SEO: Optimize Your Publication</a></li>
          
            <li><a href="/learn/woocommerce-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>WooCommerce SEO: Optimize Your Store</a></li></ul>
        </div>
    </div>
  );
}
