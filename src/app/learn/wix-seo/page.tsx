import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Wix SEO: How to Optimize Your Wix Website for Google',
  description: "Wix has improved its SEO significantly. How to use Wix SEO Wiz, configure your sitemap, add structured data, and maximize Google rankings.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/wix-seo' },
  openGraph: {
    title: 'Wix SEO: How to Optimize Your Wix Website for Google',
    description: 'Wix has improved its SEO significantly. How to use Wix SEO Wiz, configure your sitemap, and add structured data for Google rankings.',
    url: 'https://sitemapfixer.com/learn/wix-seo',
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
  { h: "Wix SEO in 2025: What Has Changed", d: "Wix used to have a poor reputation for SEO due to JavaScript-heavy rendering and poor URL structures. Since 2020, Wix has made major improvements: server-side rendering for all pages, clean URL structures, automatic sitemap generation, structured data support, and a dedicated SEO settings panel. For most small business and personal websites, Wix's SEO capabilities are now sufficient. The remaining limitations are in advanced customization rather than fundamentals." },
  { h: "Wix SEO Wiz", d: "Wix SEO Wiz is a guided setup tool that walks you through the most important SEO configurations for your site. Access it from the Wix dashboard under Marketing and SEO, then SEO. It covers: connecting to Google Search Console, setting your site name and description, optimizing key pages, and submitting your sitemap. Complete all Wix SEO Wiz steps before any other SEO work - it handles the technical foundation automatically." },
  { h: "Configuring Page Titles and Meta Descriptions", d: "For each page in Wix, go to Page Settings (the three dots next to a page in the editor), then SEO. Set a unique SEO title under 60 characters and a meta description of 120-155 characters. For blog posts, set these in the blog post editor under the SEO tab. Wix uses the page title as the default SEO title - always override this with a keyword-optimized title. For product pages in Wix Stores, edit SEO settings in the product editor." },
  { h: "Wix Sitemap", d: "Wix generates your sitemap automatically at yoursite.com/sitemap.xml. It updates when you add, delete, or modify pages. You cannot directly edit the sitemap, but you can control which pages appear by toggling page indexing on or off. In the Wix editor, go to a page, click the three dots, select Settings, then SEO, and use the 'Let search engines index this page' toggle. Submit your sitemap URL to Google Search Console via the Sitemaps section." },
  { h: "Wix Structured Data and Schema", d: "Wix adds basic structured data automatically for certain content types: Organization, WebSite, BreadcrumbList, and BlogPosting for blog content. For ecommerce, Wix Stores adds Product schema automatically. For more advanced schema types (FAQ, HowTo, Review), you need to add custom code via Wix's HTML embed widget or Velo (Wix's development platform). Add custom JSON-LD via Settings, then Custom Code, injecting code into the page head." },
  { h: "Wix SEO Limitations", d: "True custom URL slugs are limited - Wix uses /page-name format and you cannot create directory-based URL structures like /category/subcategory/page. Wix blogs use /blog/post-name which is acceptable. JavaScript rendering, while improved, may still cause slight indexing delays for complex dynamic content. If you need full URL control, complex schema, or advanced technical SEO capabilities, WordPress or a headless CMS gives you more flexibility." },
];
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"Article","headline":"Wix SEO: How to Optimize Your Wix Website for Google","description":"Wix has improved its SEO significantly. How to use Wix SEO Wiz, configure your sitemap, and add structured data for Google rankings.","url":"https://sitemapfixer.com/learn/wix-seo","author":{"@type":"Person","name":"Arnoldas Arny","url":"https://sitemapfixer.com/about"},"publisher":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com","logo":{"@type":"ImageObject","url":"https://sitemapfixer.com/opengraph-image"}},"datePublished":"2025-01-15","mainEntityOfPage":{"@type":"WebPage","@id":"https://sitemapfixer.com/learn/wix-seo"}}' }} />
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Wix SEO</span>
      </nav>
      <div style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 16 }}>By <a href="/about" style={{ color: '#2d5be3', textDecoration: 'none' }}>Arnoldas Arny</a></div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Wix SEO: Optimize Your Wix Website for Google</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Validate your Wix sitemap free</span>
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
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Validate your Wix sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free - checks all URLs in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Check My Sitemap Free</a>
      </div>

        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/learn/wordpress-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>WordPress SEO: Complete Optimization Guide for 2025</a></li>
            <li><a href="/learn/shopify-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Shopify SEO: Optimize Your Store for Google</a></li>
            <li><a href="/learn/squarespace-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Squarespace SEO: Optimize for Google</a></li>
            <li><a href="/learn/webflow-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Webflow SEO: Optimize for Google</a></li>
            <li><a href="/learn/ghost-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Ghost SEO: Optimize Your Publication</a></li>
          </ul>
        </div>
    </div>
  );
}
