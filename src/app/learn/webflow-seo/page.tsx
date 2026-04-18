import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Webflow SEO: Optimize for Google',
  description: "Webflow gives designers strong SEO control. How to configure meta tags, sitemap, structured data, and page speed to maximize Google rankings.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/webflow-seo' },
  openGraph: {
    title: 'Webflow SEO: Optimize for Google',
    description: 'Webflow gives designers strong SEO control. Here is how to configure meta tags, sitemap, structured data, and page speed in Webflow to maximize Google rankings.',
    url: 'https://sitemapfixer.com/learn/webflow-seo',
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
  { h: "Webflow SEO Strengths", d: "Webflow is one of the best no-code platforms for SEO. It generates clean semantic HTML, server-renders all pages (no JS rendering delay), gives full control over meta tags and canonical URLs, auto-generates sitemap.xml, supports custom code injection for schema markup, and has excellent Core Web Vitals baseline performance. Webflow sites consistently score well in technical SEO audits compared to other website builders." },
  { h: "Configuring Page SEO Settings", d: "In the Webflow Designer, select any page and click the gear icon to open Page Settings. Under the SEO tab, set the Title Tag and Meta Description. Enable or disable indexing with the Exclude from Search Results toggle - this adds a noindex tag and removes the page from your sitemap. For Collection pages (blog posts, products, CMS items), configure SEO settings in the Collection Settings, using dynamic fields to pull titles and descriptions from your CMS content." },
  { h: "Webflow Sitemap", d: "Webflow generates your sitemap automatically at yoursite.com/sitemap.xml and updates it on publish. The sitemap includes all indexed static pages and CMS collection items. Configure which content types appear by controlling their indexing settings. In Project Settings, under the SEO tab, you can set global meta tags and add robots.txt rules. Submit your sitemap at yoursite.com/sitemap.xml to Google Search Console after connecting your custom domain." },
  { h: "Custom Code and Schema Markup", d: "Webflow supports custom code injection at the site level (Project Settings, then Custom Code) and at the page level (Page Settings, then Custom Code). Inject JSON-LD schema markup in the Head Code section. For CMS-driven pages, use Webflow dynamic fields within your custom code: the script tag stays static but values like product name, price, and description can be pulled dynamically from your CMS fields. Test your schema with Google Rich Results Test after publishing." },
  { h: "Image SEO in Webflow", d: "Webflow serves images through its own CDN and performs some automatic optimization. However: always set descriptive alt text for every image in the Designer (click an image, then the settings gear). Use descriptive file names before uploading. Webflow compresses images but does not convert to WebP by default for all browsers. For best Core Web Vitals performance, upload already-compressed images and use the lazy loading option on below-fold images (available in image settings)." },
  { h: "Webflow vs WordPress for SEO", d: "Webflow gives you superior baseline performance, cleaner code, and better default Core Web Vitals than WordPress. WordPress gives you more flexibility with SEO plugins, programmatic content at scale, and deeper customization. For design-forward marketing sites and portfolios, Webflow's SEO capabilities are excellent. For content-heavy sites (large blogs, large ecommerce), WordPress with proper SEO plugins may be more practical due to content management at scale." },
];
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"Article","headline":"Webflow SEO: Optimize for Google","description":"Webflow gives designers strong SEO control. Here is how to configure meta tags, sitemap, structured data, and page speed in Webflow to maximize Google rankings.","url":"https://sitemapfixer.com/learn/webflow-seo","author":{"@type":"Person","name":"Arnoldas Arny","url":"https://sitemapfixer.com/about"},"publisher":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com","logo":{"@type":"ImageObject","url":"https://sitemapfixer.com/opengraph-image"}},"datePublished":"2025-01-15","mainEntityOfPage":{"@type":"WebPage","@id":"https://sitemapfixer.com/learn/webflow-seo"}}' }} />
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Webflow SEO</span>
      </nav>
      <div style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 16 }}>By <a href="/about" style={{ color: '#2d5be3', textDecoration: 'none' }}>Arnoldas Arny</a></div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Webflow SEO: Optimize Your Webflow Site for Google</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Validate your Webflow sitemap free</span>
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
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Validate your Webflow sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free - checks all URLs in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Check My Sitemap Free</a>
      </div>

        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/learn/wordpress-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>WordPress SEO: Complete Optimization Guide for 2025</a></li>
            <li><a href="/learn/shopify-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Shopify SEO: Optimize Your Store for Google</a></li>
            <li><a href="/learn/wix-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Wix SEO: How to Optimize Your Wix Website for Google</a></li>
            <li><a href="/learn/squarespace-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Squarespace SEO: Optimize for Google</a></li>
            <li><a href="/learn/ghost-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Ghost SEO: Optimize Your Publication</a></li>
          </ul>
        </div>
    </div>
  );
}
