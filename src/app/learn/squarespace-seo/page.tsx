import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Squarespace SEO: Optimize for Google',
  description: "Squarespace handles some SEO automatically but leaves others to you. How to configure titles, meta descriptions, sitemap, and maximize SEO.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/squarespace-seo' },
  openGraph: {
    title: 'Squarespace SEO: Optimize for Google',
    description: 'Squarespace handles some SEO automatically but leaves others to you. How to configure titles, meta descriptions, and your sitemap.',
    url: 'https://sitemapfixer.com/learn/squarespace-seo',
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
  { h: "What Squarespace Handles Automatically", d: "Squarespace generates a sitemap at yoursite.com/sitemap.xml automatically, including all pages, posts, products, and gallery items. It adds canonical tags, SSL is included on all plans, and pages are server-rendered (no JavaScript rendering delay). Open Graph tags are added automatically. The sitemap updates when you publish or delete content - you do not need to manually regenerate it." },
  { h: "Setting SEO Titles and Descriptions", d: "For each page, click the gear icon in the Pages panel to open Page Settings. Under the SEO tab, set a custom SEO title and description. Squarespace uses the page title as the default SEO title - always customize it. For blog posts, click the gear icon on a specific post and find the SEO section. For product pages, go to the product editor and look for the SEO fields. The site-level SEO title format (pagename - sitename) is set under Settings, then SEO, then SEO Site Title Format." },
  { h: "URL Slugs and Structure", d: "In Squarespace, URLs use your page name as the slug by default. You can customize the URL slug in Page Settings under the General tab. Keep slugs short and keyword-rich. Squarespace uses a flat URL structure - all pages are at yoursite.com/page-name rather than nested directories, which is actually fine for SEO. Blog posts are at /blog/post-slug by default, which is clean and consistent." },
  { h: "Squarespace Sitemap Configuration", d: "You can control which content types appear in your sitemap in Settings, then SEO, then Sitemap Settings. Disable indexing for gallery images, user account pages, and other non-SEO content. To exclude a specific page, go to that page in the editor, open Page Settings, then SEO, and toggle off Appear in Search Results. This adds a noindex tag and removes the page from the sitemap. Submit your sitemap.xml to Google Search Console." },
  { h: "Squarespace Page Speed", d: "Squarespace sites tend to have slower Core Web Vitals than custom-built sites due to Squarespace's template-based rendering and JavaScript framework overhead. The most impactful fix: optimize images. Squarespace serves images at the resolution you upload - do not upload 4000px wide images if they display at 800px. Use the Squarespace image editor or compress images before uploading. Disable unused features and blocks - every active block adds load time." },
  { h: "Squarespace SEO Limitations", d: "You cannot inject custom schema markup easily without workarounds via code injection (Settings, then Advanced, then Code Injection). You cannot fully customize your sitemap structure. Blog post archives (/blog) can have thin content if posts are short. Custom header tag structures are limited to what the template provides. For most small business, portfolio, and lifestyle sites, these limitations are not blocking - but for advanced SEO strategies, Squarespace constrains what is possible." },
];
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"Article","headline":"Squarespace SEO: Optimize for Google","description":"Squarespace handles some SEO automatically but leaves others to you. How to configure titles, meta descriptions, and your sitemap.","url":"https://sitemapfixer.com/learn/squarespace-seo","author":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com"},"publisher":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com","logo":{"@type":"ImageObject","url":"https://sitemapfixer.com/opengraph-image"}},"datePublished":"2025-01-15","mainEntityOfPage":{"@type":"WebPage","@id":"https://sitemapfixer.com/learn/squarespace-seo"}}' }} />
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Squarespace SEO</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Squarespace SEO: Optimize Your Site for Google</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Validate your Squarespace sitemap free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Check My Sitemap</a>
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
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Validate your Squarespace sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free - checks all URLs in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Check My Sitemap Free</a>
      </div>

        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/learn/wordpress-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>WordPress SEO: Complete Optimization Guide for 2025</a></li>
            <li><a href="/learn/shopify-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Shopify SEO: Optimize Your Store for Google</a></li>
            <li><a href="/learn/wix-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Wix SEO: How to Optimize Your Wix Website for Google</a></li>
            <li><a href="/learn/webflow-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Webflow SEO: Optimize for Google</a></li>
            <li><a href="/learn/ghost-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Ghost SEO: Optimize Your Publication</a></li>
          </ul>
        </div>
    </div>
  );
}
