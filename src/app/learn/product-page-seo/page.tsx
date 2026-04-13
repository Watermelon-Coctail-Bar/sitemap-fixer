import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Product Page SEO: Rank Ecommerce Pages in Google',
  description: "Product pages are the highest-value SEO real estate on ecommerce sites. Here is how to write titles, descriptions, structured data, and content that ranks and converts.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/product-page-seo' },
  openGraph: {
    title: 'Product Page SEO: Rank Ecommerce Pages in Google',
    description: 'Product pages are the highest-value SEO real estate on ecommerce sites. Here is how to write titles, descriptions, structured data, and content that ranks and converts.',
    url: 'https://sitemapfixer.com/learn/product-page-seo',
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
  { h: "Title Tags for Product Pages", d: "The best-performing product page title format: [Product Name] - [Key Attribute] | [Brand]. For example: 'Merino Wool Running Socks - Cushioned, Odor-Resistant | BrandName'. Include the product name first (most important), then the most searched attribute, then your brand. Keep under 60 characters. Include the primary keyword users search - usually the product type and key feature. Check what your top competitors use for title structure and differentiate." },
  { h: "Product Descriptions That Rank", d: "Never use manufacturer descriptions. Every competitor using the same product has the same copy - this is duplicate content at scale. Write unique descriptions that describe the product in terms of user benefit, not just specs. Include the primary keyword naturally in the first 100 words. Cover key purchase decision points: materials, dimensions, use cases, who it is for. Aim for 200-400 words minimum for important products. Thin descriptions (under 100 words) are a common reason product pages fail to rank." },
  { h: "Product Structured Data", d: "Product schema is one of the highest-ROI structured data implementations. It enables price, availability, and star rating to appear directly in search results - increasing CTR by 20-40% compared to plain results. Required properties: name, image, description, offers (price, priceCurrency, availability). Add aggregateRating if you have reviews. Add brand. Test with Google Rich Results Test after implementation. Check Google Search Console under Enhancements for product schema coverage and errors." },
  { h: "Images and Alt Text", d: "Product images directly affect SEO in two ways: they appear in Google Image search (a significant traffic source for visual products) and they affect page speed (the most common LCP bottleneck on product pages). Use descriptive filenames (blue-merino-wool-running-socks.jpg not IMG_4521.jpg). Write specific alt text: 'Merino wool running socks in blue showing cushioned sole' not 'socks'. Compress all images - product pages often have 5-10 images and uncompressed images commonly cause 3-5 second LCP delays." },
  { h: "Out-of-Stock and Discontinued Products", d: "Never 404 a product page that had backlinks or traffic. For temporarily out-of-stock: keep the page live, update availability in schema to OutOfStock, and optionally add an email notification form. For permanently discontinued: 301 redirect to the most relevant replacement or parent category. For seasonal products: keep the page year-round, updating availability and messaging rather than taking it down each season. Deleted product pages with backlinks permanently destroy the link equity." },
  { h: "Internal Linking to Product Pages", d: "Most ecommerce sites have strong category pages and weak product page internal linking. Link to key products from blog content, homepage featured sections, related products widgets, and comparison pages. Products only accessible through category navigation are isolated - they receive less crawl frequency and less PageRank than products linked from multiple places across the site. Identify your highest-margin products and ensure they have at least 3-5 internal links pointing to them." },
];
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"Article","headline":"Product Page SEO: Rank Ecommerce Pages in Google","description":"Product pages are the highest-value SEO real estate on ecommerce sites. Here is how to write titles, descriptions, structured data, and content that ranks and converts.","url":"https://sitemapfixer.com/learn/product-page-seo","author":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com"},"publisher":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com","logo":{"@type":"ImageObject","url":"https://sitemapfixer.com/opengraph-image"}},"datePublished":"2025-01-15","mainEntityOfPage":{"@type":"WebPage","@id":"https://sitemapfixer.com/learn/product-page-seo"}}' }} />
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Product Page SEO</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Product Page SEO: Rank and Convert</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your product sitemap free</span>
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
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Analyze your product page sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free - checks all product URLs in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>

        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/learn/title-tag-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Title Tag SEO: Write Titles That Rank</a></li>
            <li><a href="/learn/meta-description-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Meta Descriptions: How to Write Them for SEO</a></li>
            <li><a href="/learn/image-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Image SEO: Optimize Images for Google Search</a></li>
            <li><a href="/learn/video-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Video SEO: Get Videos to Rank in Google</a></li>
            <li><a href="/learn/anchor-text-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Anchor Text SEO: Types & Best Practices</a></li>
          
            <li><a href="/learn/ecommerce-sitemap" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Ecommerce Sitemap: Structure for Max Indexing</a></li></ul>
        </div>
    </div>
  );
}
