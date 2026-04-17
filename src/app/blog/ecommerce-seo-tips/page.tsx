import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Ecommerce SEO: Get Product Pages to Rank',
  description: "Ecommerce SEO has unique challenges - product pages, category pages, faceted navigation, and duplicate content. The most impactful fixes.",
  alternates: { canonical: 'https://sitemapfixer.com/blog/ecommerce-seo-tips' },
  openGraph: {
    title: 'Ecommerce SEO: Get Product Pages to Rank',
    description: 'Ecommerce SEO has unique challenges - product pages, category pages, faceted navigation, and duplicate content. The most impactful fixes.',
    url: 'https://sitemapfixer.com/blog/ecommerce-seo-tips',
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
const tips = [
  { t: "Write unique product descriptions", d: "The single most common ecommerce SEO mistake is using the manufacturer's product descriptions verbatim. Every other retailer has the same text. Google treats these as duplicate content and picks one page to rank - usually not yours. Write original descriptions that cover the product's benefits, real-world use cases, specifications, and who it is for. Even 200-300 words of genuine original content differentiates your product pages significantly." },
  { t: "Fix faceted navigation crawl waste", d: "Faceted navigation (filter by color, size, price, brand) creates thousands of URL variants - /shoes?color=red&size=10&brand=nike. These pages have near-identical content and waste crawl budget. Standard fix: use URL parameters in Google Search Console to tell Google which parameters to ignore, add noindex to low-value filter combination pages, and use canonical tags pointing filter pages to the main category page. Only create indexable filtered pages for high-demand combinations that have real search volume." },
  { t: "Optimize category pages for commercial keywords", d: "Category pages target your highest-volume commercial keywords - running shoes, wireless headphones, kitchen knives. These pages often underperform because they contain only a product grid with no text. Add a descriptive introduction paragraph (150-300 words) above the product grid covering what the category includes, key features to look for, and who each type is for. This content gives Google something to index and helps category pages rank for informational queries in addition to transactional ones." },
  { t: "Add Product schema markup", d: "Product schema tells Google the product name, description, image, price, availability, and review data. Pages with valid Product schema qualify for rich results in Google Shopping and search - showing star ratings and price directly in the SERP. This improves click-through rate significantly. Shopify adds basic Product schema automatically; verify it is complete and valid using the Rich Results Test. Ensure review schema includes aggregate rating with the required reviewCount or ratingCount." },
  { t: "Handle out-of-stock products correctly", d: "Do not delete product pages when items go out of stock - those pages have built up link equity and historical rankings. Instead: keep the page live with an out-of-stock signal in schema (availability: OutOfStock), suggest similar in-stock products, and if the product is permanently discontinued, 301 redirect to the most relevant category or similar product page. Deleting pages loses all accumulated SEO value." },
];
export default function Page() {
  return (
    <article style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/blog" style={{ color: '#2d5be3', textDecoration: 'none' }}>Blog</a>{' / '}
        <span>Ecommerce SEO Tips</span>
      </nav>
      <div style={{ fontSize: 13, color: '#9ca3af', marginBottom: 12 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"Article","headline":"Ecommerce SEO: Get Product Pages to Rank","description":"Ecommerce SEO has unique challenges - product pages, category pages, faceted navigation, and duplicate content. The most impactful fixes.","url":"https://sitemapfixer.com/blog/ecommerce-seo-tips","author":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com"},"publisher":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com","logo":{"@type":"ImageObject","url":"https://sitemapfixer.com/opengraph-image"}},"datePublished":"2025-01-15","mainEntityOfPage":{"@type":"WebPage","@id":"https://sitemapfixer.com/blog/ecommerce-seo-tips"}}' }} />April 2025 · 8 min read</div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, lineHeight: 1.15 }}>Ecommerce SEO Tips: Get Product Pages Ranking on Google</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your store sitemap and indexing free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Site Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        {tips.map(({ t, d }) => (
          <div key={t} style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12 }}>{t}</h2>
            <p style={{ margin: 0 }}>{d}</p>
          </div>
        ))}
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Audit your ecommerce site sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free - checks URLs, crawlability, and indexing</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
  
        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/blog/social-media-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Social Media SEO: Do Social Signals Matter?</a></li>
            <li><a href="/blog/mobile-seo-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Mobile SEO Guide: Optimize Your Site for Mobile Search</a></li>
            <li><a href="/blog/video-seo-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Video SEO: Rank Videos on Google and YouTube</a></li>
            <li><a href="/blog/canonical-url-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Canonical URL: What It Is and How to Set It Correctly</a></li>
            <li><a href="/blog/url-structure-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>URL Structure SEO: How to Create SEO-Friendly URLs</a></li>
          
            <li><a href="/learn/product-page-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Product Page SEO: Rank Ecommerce Pages in Google</a></li></ul>
        </div>
    </div>
    </article>
  );
}
