import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why Are My Pages Not Indexed by Google? | SitemapFixer',
  description: 'Pages not getting indexed? This comprehensive guide covers every reason Google might not index your pages and exactly how to fix each one.',
  alternates: { canonical: 'https://sitemapfixer.com/learn/why-pages-not-indexed' },
  openGraph: {
    title: 'Why Are My Pages Not Indexed by Google?',
    description: 'Pages not getting indexed? This comprehensive guide covers every reason Google might not index your pages and exactly how to fix each one.',
    url: 'https://sitemapfixer.com/learn/why-pages-not-indexed',
    type: 'article',
  },
};

export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px', fontFamily: 'Geist, sans-serif' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>
        {'  '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>
        {'  '}
        <span>Why Are My Pages Not Indexed by Google?</span>
      </nav>

      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>
        Why Are My Pages Not Indexed by Google?
      </h1>

      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Analyze your sitemap for free </span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>
          Try Sitemap Fixer
        </a>
      </div>

      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8 }}>
        <p style={{ marginBottom: 20 }}>Discovering that pages you care about aren't in Google's index is one of the most frustrating technical SEO problems. The cause is almost always one of a handful of issues - and your sitemap is a key diagnostic tool.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>Reason 1: Page Not in Sitemap</h2>
        <p style={{ marginBottom: 20 }}>If a page isn't in your sitemap and has no internal links, Google may never discover it. Always ensure new content is added to your sitemap immediately upon publication.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>Reason 2: Blocked by robots.txt</h2>
        <p style={{ marginBottom: 20 }}>Check your robots.txt file. If your disallow rules are too broad, they may be blocking pages you want indexed.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>Reason 3: Canonical Tag Points Elsewhere</h2>
        <p style={{ marginBottom: 20 }}>If your page has a canonical tag pointing to a different URL, Google will index the canonical target, not the page itself.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>Reason 4: Page Returns Non-200 Status</h2>
        <p style={{ marginBottom: 20 }}>Google only indexes pages that return a 200 status code. Check for 404s, 301 redirects in the chain, or 503 errors.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>Reason 5: Thin or Duplicate Content</h2>
        <p style={{ marginBottom: 20 }}>Google algorithmically filters pages with very thin content or content that duplicates other indexed pages.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>Reason 6: New Site with Low Authority</h2>
        <p style={{ marginBottom: 20 }}>Brand new domains with few backlinks are crawled less frequently. Patience and link building are required.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>How to Diagnose</h2>
        <p style={{ marginBottom: 20 }}>1. Submit the URL in Google Search Console's URL Inspection tool
2. Check your sitemap includes the URL
3. Check robots.txt isn't blocking it
4. Check canonical tags
5. Use Sitemap Fixer to identify structural issues</p>
      </div>

      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Check your sitemap now</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>
          Analyze My Sitemap 
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
