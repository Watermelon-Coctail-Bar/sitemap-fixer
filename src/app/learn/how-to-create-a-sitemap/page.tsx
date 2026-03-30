import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Create an XML Sitemap | SitemapFixer',
  description: 'Learn how to create an XML sitemap for any type of website. Step-by-step instructions for WordPress, Shopify, Next.js, and manual creation.',
  alternates: { canonical: 'https://sitemapfixer.com/learn/how-to-create-a-sitemap' },
  openGraph: {
    title: 'How to Create an XML Sitemap',
    description: 'Learn how to create an XML sitemap for any type of website. Step-by-step instructions for WordPress, Shopify, Next.js, and manual creation.',
    url: 'https://sitemapfixer.com/learn/how-to-create-a-sitemap',
    type: 'article',
  },
};

export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px', fontFamily: 'Geist, sans-serif' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>
        {' → '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>
        {' → '}
        <span>How to Create an XML Sitemap</span>
      </nav>

      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>
        How to Create an XML Sitemap
      </h1>

      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Analyze your sitemap for free →</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>
          Try Sitemap Fixer
        </a>
      </div>

      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8 }}>
        <p style={{ marginBottom: 20 }}>Creating an XML sitemap is a foundational technical SEO task. The approach varies by platform, but the principles are the same: list every URL you want indexed, add accurate metadata, and keep it updated.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>Option 1: WordPress (with Yoast or Rank Math)</h2>
        <p style={{ marginBottom: 20 }}>Both Yoast SEO and Rank Math auto-generate sitemaps. In Yoast: SEO → General → Features → XML Sitemaps → On. Your sitemap will be at yoursite.com/sitemap.xml.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>Option 2: Shopify</h2>
        <p style={{ marginBottom: 20 }}>Shopify auto-generates a sitemap at yourstore.com/sitemap.xml. You can't directly edit it, but you can control what's included via your theme and product visibility settings.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>Option 3: Next.js</h2>
        <p style={{ marginBottom: 20 }}>In Next.js 13+ with the App Router, create a sitemap.ts file in your app directory:</p>
        <pre style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 8, padding: '16px', overflow: 'auto', fontSize: 13, lineHeight: 1.6, fontFamily: 'DM Mono, monospace' }}><code>export default function sitemap() {
  return [
    { url: 'https://yoursite.com', lastModified: new Date(), priority: 1 },
    { url: 'https://yoursite.com/about', lastModified: new Date(), priority: 0.8 },
  ];
}</code></pre>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>Option 4: Manual XML Creation</h2>
        <p style={{ marginBottom: 20 }}>For small sites, create sitemap.xml manually:</p>
        <pre style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 8, padding: '16px', overflow: 'auto', fontSize: 13, lineHeight: 1.6, fontFamily: 'DM Mono, monospace' }}><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"&gt;
  &lt;url&gt;
    &lt;loc&gt;https://yoursite.com/&lt;/loc&gt;
    &lt;lastmod&gt;2024-01-01&lt;/lastmod&gt;
    &lt;priority&gt;1.0&lt;/priority&gt;
  &lt;/url&gt;
&lt;/urlset&gt;</code></pre>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>After Creating Your Sitemap</h2>
        <p style={{ marginBottom: 20 }}>1. Submit it in Google Search Console
2. Add it to robots.txt: Sitemap: https://yoursite.com/sitemap.xml
3. Verify it with Sitemap Fixer to catch errors before Google does</p>
      </div>

      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Check your sitemap now</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>
          Analyze My Sitemap →
        </a>
      </div>

      <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
        <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>More guides</div>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <li><a href="/learn/sitemap-best-practices" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Best Practices</a></li>
          <li><a href="/learn/sitemap-vs-robots-txt" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Sitemap vs robots.txt</a></li>
          <li><a href="/learn/why-pages-not-indexed" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Why Pages Not Indexed</a></li>
        </ul>
      </div>
    </div>
  );
}
