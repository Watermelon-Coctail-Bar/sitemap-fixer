import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'How to Create a Sitemap: WordPress, Shopify, Next.js',
  description: "How to create an XML sitemap for any website - step-by-step instructions for WordPress, Shopify, Next.js, and manual creation.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/how-to-create-a-sitemap' },
  openGraph: {
    title: 'How to Create a Sitemap: WordPress, Shopify, Next.js',
    description: 'How to create an XML sitemap for any website - step-by-step instructions for WordPress, Shopify, Next.js, and manual creation.',
    url: 'https://sitemapfixer.com/learn/how-to-create-a-sitemap',
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
const methods = [
  { t: "WordPress", d: "Install the Yoast SEO or Rank Math plugin. Both automatically generate a sitemap at yoursite.com/sitemap_index.xml and keep it updated as you publish content. In Yoast: go to SEO then General then Features and enable XML sitemaps. In Rank Math: go to Rank Math then Sitemap settings. Submit the sitemap URL to Google Search Console after setup." },
  { t: "Shopify", d: "Shopify generates your sitemap automatically at yourstore.com/sitemap.xml. No setup required. The sitemap updates when you add products, pages, blog posts, or collections. Submit the sitemap URL directly to Google Search Console. If you need to exclude certain URLs, use the Shopify sitemap apps from the App Store." },
  { t: "Next.js", d: "In Next.js 13+ with App Router, create src/app/sitemap.ts that exports a default function returning an array of sitemap entries. Each entry needs a url and optionally lastModified, changeFrequency, and priority. Next.js serves this at /sitemap.xml automatically. For large sites, use generateSitemaps to create multiple sitemap files." },
  { t: "Static or custom sites", d: "For static sites or frameworks without built-in sitemap support, use the free online XML Sitemap Generator or SitemapFixer to crawl your site and generate a sitemap automatically. Download the generated sitemap.xml and place it in your site root directory. Update it manually when you add significant new pages, or automate generation in your deployment pipeline." },
  { t: "After creating your sitemap", d: "Submit your sitemap to Google Search Console by going to Indexing then Sitemaps, entering your sitemap URL, and clicking Submit. Also declare your sitemap in your robots.txt file by adding Sitemap: https://yoursite.com/sitemap.xml at the bottom. Verify the sitemap was processed without errors in Search Console within 24-48 hours." },
];
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>
        {' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>
        {' / '}
        <span>How to Create a Sitemap</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>
        How to Create a Sitemap: Step-by-Step Guide
      </h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Validate your sitemap after creation - free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Check My Sitemap</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        {methods.map(({ t, d }) => (
          <div key={t} style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12 }}>{t}</h2>
            <p style={{ margin: 0 }}>{d}</p>
          </div>
        ))}
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Validate your sitemap after creating it</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free - checks all URLs in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Check My Sitemap Free</a>
      </div>

        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/learn/what-is-an-xml-sitemap" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>What Is an XML Sitemap?</a></li>
            <li><a href="/learn/xml-sitemap-format" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>XML Sitemap Format: Complete Reference with Examples</a></li>
            <li><a href="/learn/xml-sitemap-generator" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>XML Sitemap Generator: Create Your Sitemap Free</a></li>
            <li><a href="/learn/sitemap-best-practices" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>XML Sitemap Best Practices</a></li>
            <li><a href="/learn/sitemap-checker" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Sitemap Checker: Validate and Fix Your XML Sitemap</a></li>
          </ul>
        </div>
    </div>
  );
}
