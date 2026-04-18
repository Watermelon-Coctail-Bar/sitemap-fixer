import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Ecommerce Sitemap: Structure for Max Indexing',
  description: "Ecommerce sites have unique sitemap challenges - faceted navigation, variants, seasonal products, and large catalogs. How to handle each.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/ecommerce-sitemap' },
  openGraph: {
    title: 'Ecommerce Sitemap: Structure for Max Indexing',
    description: 'Ecommerce sites have unique sitemap challenges - faceted navigation, variants, seasonal products, and large catalogs. Here is how to handle each one correctly.',
    url: 'https://sitemapfixer.com/learn/ecommerce-sitemap',
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
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"Article","headline":"Ecommerce Sitemap: Structure for Max Indexing","description":"Ecommerce sites have unique sitemap challenges - faceted navigation, variants, seasonal products, and large catalogs. Here is how to handle each one correctly.","url":"https://sitemapfixer.com/learn/ecommerce-sitemap","author":{"@type":"Person","name":"Arnoldas Arny","url":"https://sitemapfixer.com/about"},"publisher":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com","logo":{"@type":"ImageObject","url":"https://sitemapfixer.com/opengraph-image"}},"datePublished":"2025-01-15","mainEntityOfPage":{"@type":"WebPage","@id":"https://sitemapfixer.com/learn/ecommerce-sitemap"}}' }} />
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Ecommerce Sitemap</span>
      </nav>
      <div style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 16 }}>By <a href="/about" style={{ color: '#2d5be3', textDecoration: 'none' }}>Arnoldas Arny</a></div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Ecommerce Sitemap: Structure for Max Indexing</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Validate your ecommerce sitemap free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Check My Sitemap</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        <p style={{ marginBottom: 24 }}>Ecommerce sites have more complex sitemap needs than content sites. You have products, categories, filtered views, variants, seasonal availability, and user-generated content to manage. A well-structured ecommerce sitemap helps Google index your most valuable pages while keeping crawl budget away from pages that should not be indexed.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>What to Include in Your Ecommerce Sitemap</h2>
        <p style={{ marginBottom: 12 }}><strong>Include:</strong> All product pages with clear, unique content. All category and subcategory pages. Blog posts and buying guides. Brand pages if they have unique content. Key landing pages.</p>
        <p style={{ marginBottom: 24 }}><strong>Exclude:</strong> Faceted navigation URLs (filters like /shoes?color=red&size=10). Cart, checkout, account, and order pages. Search results pages. Duplicate product URLs from multiple category paths (use canonical tags on those pages instead). Out-of-stock products that are permanently discontinued (redirect these to alternatives before removing from sitemap).</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>The Faceted Navigation Problem</h2>
        <p style={{ marginBottom: 24 }}>Faceted navigation is the single biggest source of URL bloat and crawl waste for ecommerce sites. A catalog of 1,000 products with color, size, material, and price filters can generate millions of URLs. The solution is to block faceted URLs via robots.txt (Disallow: /*?*) or noindex them, keeping only canonical category URLs and product URLs in your sitemap. For very popular filter combinations that drive significant search traffic - like "red running shoes size 10" - create dedicated landing pages with their own canonical URLs instead.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Managing Product Variants</h2>
        <p style={{ marginBottom: 24 }}>Product variants (size, color, material) can be handled two ways: as a single product page with all variants, or as separate URLs per variant. For most stores, a single product page with a canonical URL and variant selection via JavaScript is correct. Only create separate URLs for variants when: the variants are genuinely distinct products searched for independently (e.g., "red widget" vs "blue widget" have separate search demand), and you have enough unique content to justify each page.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Handling Seasonal and Out-of-Stock Products</h2>
        <p style={{ marginBottom: 24 }}>For temporarily out-of-stock products: keep the page indexed with current inventory status and availability date if known. For permanently discontinued products: create a 301 redirect to the most relevant replacement or parent category, then remove from your sitemap. Never just delete a product page without a redirect if it had any backlinks or search traffic - you lose all that equity.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Sitemap Index Structure for Large Catalogs</h2>
        <p style={{ marginBottom: 24 }}>If you have more than 50,000 URLs, use a sitemap index with separate child sitemaps by category: sitemap-products.xml, sitemap-categories.xml, sitemap-blog.xml. This makes it easy to monitor crawl stats in Google Search Console by content type. It also lets you update specific sitemaps without regenerating the entire index. Set the lastmod date on each child sitemap to the most recent change date for any URL in that file.</p>
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Validate your ecommerce sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free - finds crawl waste and indexing issues</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Check My Sitemap Free</a>
      </div>

        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/learn/what-is-an-xml-sitemap" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>What Is an XML Sitemap?</a></li>
            <li><a href="/learn/xml-sitemap-format" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>XML Sitemap Format: Complete Reference with Examples</a></li>
            <li><a href="/learn/xml-sitemap-generator" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>XML Sitemap Generator: Create Your Sitemap Free</a></li>
            <li><a href="/learn/sitemap-best-practices" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>XML Sitemap Best Practices</a></li>
            <li><a href="/learn/how-to-create-a-sitemap" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>How to Create a Sitemap: WordPress, Shopify, Next.js</a></li>
          
            <li><a href="/learn/sitemap-size-limit" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Sitemap Size Limit: What to Do at 50K URLs</a></li></ul>
        </div>
    </div>
  );
}
