import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Hreflang Sitemap: International SEO Setup',
  description: "Hreflang tells Google which language and region each page targets. Learn how to implement it in your sitemap correctly and avoid the most common mistakes.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/hreflang-sitemap' },
  openGraph: {
    title: 'Hreflang Sitemap: International SEO Setup',
    description: 'Hreflang tells Google which language and region each page targets. Learn how to implement it in your sitemap correctly and avoid the most common mistakes.',
    url: 'https://sitemapfixer.com/learn/hreflang-sitemap',
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
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Hreflang Sitemap</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Hreflang in Your Sitemap: International SEO Done Right</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Validate your international sitemap free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Check My Sitemap</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        <p style={{ marginBottom: 24 }}>Hreflang is an HTML attribute that tells Google which language and regional audience a page is intended for. If your site has content in multiple languages or targets different countries with the same language (like US English vs UK English), hreflang prevents the wrong version from appearing in search results for users in each region.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Three Ways to Implement Hreflang</h2>
        <p style={{ marginBottom: 24 }}>You can implement hreflang in three places: in the HTML head of each page, in the HTTP headers, or in your XML sitemap. The sitemap approach is often easiest for large sites since you manage it in one place rather than on every page. All three methods work equally well - choose one and be consistent.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Hreflang in Your XML Sitemap</h2>
        <p style={{ marginBottom: 16 }}>Add xhtml:link tags inside each url entry. Every language version of a page must include hreflang entries for all other language versions, including itself:</p>
        <div style={{ background: '#0a0a0f', borderRadius: 10, padding: '20px 24px', marginBottom: 24, fontFamily: 'monospace', fontSize: 12, color: '#e5e7eb', lineHeight: 1.7, overflowX: 'auto' }}>
          <div>{'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"'}</div>
          <div style={{ paddingLeft: 20 }}>{'xmlns:xhtml="http://www.w3.org/1999/xhtml">'}</div>
          <div style={{ paddingLeft: 20 }}>{'<url>'}</div>
          <div style={{ paddingLeft: 40 }}>{'<loc>https://yoursite.com/en/page</loc>'}</div>
          <div style={{ paddingLeft: 40 }}>{'<xhtml:link rel="alternate" hreflang="en" href="https://yoursite.com/en/page"/>'}</div>
          <div style={{ paddingLeft: 40 }}>{'<xhtml:link rel="alternate" hreflang="de" href="https://yoursite.com/de/page"/>'}</div>
          <div style={{ paddingLeft: 40 }}>{'<xhtml:link rel="alternate" hreflang="x-default" href="https://yoursite.com/en/page"/>'}</div>
          <div style={{ paddingLeft: 20 }}>{'</url>'}</div>
          <div style={{ paddingLeft: 20 }}>{'<url>'}</div>
          <div style={{ paddingLeft: 40 }}>{'<loc>https://yoursite.com/de/page</loc>'}</div>
          <div style={{ paddingLeft: 40 }}>{'<xhtml:link rel="alternate" hreflang="en" href="https://yoursite.com/en/page"/>'}</div>
          <div style={{ paddingLeft: 40 }}>{'<xhtml:link rel="alternate" hreflang="de" href="https://yoursite.com/de/page"/>'}</div>
          <div style={{ paddingLeft: 40 }}>{'<xhtml:link rel="alternate" hreflang="x-default" href="https://yoursite.com/en/page"/>'}</div>
          <div style={{ paddingLeft: 20 }}>{'</url>'}</div>
          <div>{'</urlset>'}</div>
        </div>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>The x-default Tag</h2>
        <p style={{ marginBottom: 24 }}>The x-default hreflang value specifies the fallback page for users who do not match any of your specific language or region targets. Point it to your most general version - usually your English homepage or a language selection page. Every set of hreflang annotations should include x-default.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Common Hreflang Mistakes</h2>
        <p style={{ marginBottom: 12 }}><strong>Missing return tags:</strong> If your English page points to your German page but your German page does not point back to the English page, Google ignores the entire hreflang setup. Every page in a group must reference every other page in the group.</p>
        <p style={{ marginBottom: 12 }}><strong>Wrong language codes:</strong> Use ISO 639-1 language codes (en, de, fr, es) and ISO 3166-1 Alpha-2 region codes (US, GB, DE). The format is language-REGION, for example en-US or en-GB. Using incorrect codes means Google silently ignores your annotations.</p>
        <p style={{ marginBottom: 24 }}><strong>Pages returning non-200:</strong> If a page referenced in hreflang redirects or returns an error, Google may ignore the entire hreflang group for that page. All hreflang URLs must return 200 status codes.</p>
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Check your international sitemap setup</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Sitemap Free</a>
      </div>

        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/learn/what-is-an-xml-sitemap" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>What Is an XML Sitemap?</a></li>
            <li><a href="/learn/xml-sitemap-format" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>XML Sitemap Format: Complete Reference with Examples</a></li>
            <li><a href="/learn/xml-sitemap-generator" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>XML Sitemap Generator: Create Your Sitemap Free</a></li>
            <li><a href="/learn/sitemap-best-practices" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>XML Sitemap Best Practices</a></li>
            <li><a href="/learn/how-to-create-a-sitemap" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>How to Create a Sitemap: WordPress, Shopify, Next.js</a></li>
          </ul>
        </div>
    </div>
  );
}
