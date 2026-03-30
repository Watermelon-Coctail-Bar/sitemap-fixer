import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is an XML Sitemap? | SitemapFixer',
  description: 'An XML sitemap is a file that lists all important URLs on your website to help search engines discover and index your content. Learn what it is, how it works, and why it matters.',
  alternates: { canonical: 'https://sitemapfixer.com/learn/what-is-an-xml-sitemap' },
  openGraph: {
    title: 'What Is an XML Sitemap?',
    description: 'An XML sitemap is a file that lists all important URLs on your website to help search engines discover and index your content. Learn what it is, how it works, and why it matters.',
    url: 'https://sitemapfixer.com/learn/what-is-an-xml-sitemap',
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
        <span>What Is an XML Sitemap?</span>
      </nav>

      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>
        What Is an XML Sitemap?
      </h1>

      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Analyze your sitemap for free →</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>
          Try Sitemap Fixer
        </a>
      </div>

      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8 }}>
        <p style={{ marginBottom: 20 }}>An XML sitemap is a structured file — formatted in XML — that lists the URLs on your website you want search engines to crawl and index. Think of it as a roadmap you hand directly to Google, Bing, and other search engines to help them discover all the important pages on your site.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>Why XML Sitemaps Matter for SEO</h2>
        <p style={{ marginBottom: 20 }}>Search engines discover pages primarily through links. If a page has no links pointing to it, the crawler may never find it. Your sitemap solves this by explicitly listing every URL you want indexed, along with optional metadata:</p>
        <ul style={{ paddingLeft: 24, marginBottom: 16 }}><li style={{ marginBottom: 6 }}>**lastmod**: when the page was last modified</li><li style={{ marginBottom: 6 }}>**changefreq**: how often the page changes</li><li style={{ marginBottom: 6 }}>**priority**: the relative importance of the page</li></ul>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>What a Sitemap Looks Like</h2>
        <p style={{ marginBottom: 20 }}>A basic XML sitemap entry looks like this:</p>
        <pre style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 8, padding: '16px', overflow: 'auto', fontSize: 13, lineHeight: 1.6, fontFamily: 'DM Mono, monospace' }}><code>&lt;url&gt;
  &lt;loc&gt;https://example.com/about&lt;/loc&gt;
  &lt;lastmod&gt;2024-01-15&lt;/lastmod&gt;
  &lt;changefreq&gt;monthly&lt;/changefreq&gt;
  &lt;priority&gt;0.8&lt;/priority&gt;
&lt;/url&gt;</code></pre>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>When You Need a Sitemap</h2>
        <p style={{ marginBottom: 20 }}>You need a sitemap if your site has more than 500 pages, has pages with few or no internal links, is new and has limited backlinks, or uses JavaScript rendering that makes discovery difficult.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>How to Submit Your Sitemap</h2>
        <p style={{ marginBottom: 20 }}>Submit your sitemap URL in Google Search Console under Sitemaps. Also reference it in your robots.txt file: `Sitemap: https://yoursite.com/sitemap.xml`</p>
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
