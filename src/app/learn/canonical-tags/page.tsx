import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Canonical Tags: How to Use Them Correctly for SEO | SitemapFixer',
  description: 'Learn how canonical tags work, when to use them, and the most common mistakes that hurt your SEO. Complete guide with examples.',
  alternates: { canonical: 'https://sitemapfixer.com/learn/canonical-tags' },
  openGraph: { title: 'Canonical Tags Guide', description: 'How to use canonical tags correctly for SEO.', url: 'https://sitemapfixer.com/learn/canonical-tags', type: 'article' },
};
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Canonical Tags</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Canonical Tags: How to Use Them Correctly for SEO</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Find canonical issues on your site free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Try SitemapFixer Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8 }}>
        <p style={{ marginBottom: 20 }}>A canonical tag tells search engines which version of a page is the preferred one when multiple URLs contain similar or identical content. It prevents duplicate content issues and consolidates ranking signals to the URL you want indexed.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>What a Canonical Tag Looks Like</h2>
        <p style={{ marginBottom: 20 }}>The canonical tag is placed in the head section of your HTML: &lt;link rel="canonical" href="https://example.com/preferred-url" /&gt;. Every page should have a canonical tag — either pointing to itself (self-referencing canonical) or pointing to the preferred version if the page is a duplicate.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>When to Use Canonical Tags</h2>
        <p style={{ marginBottom: 20 }}>Use canonicals when your site has duplicate content from URL parameters such as tracking codes or sorting filters. Use them for printer-friendly versions of pages, mobile versions at different URLs, and syndicated content that appears on multiple sites. Also use self-referencing canonicals on all pages to prevent accidental duplication issues.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>Canonical Tags and Sitemaps</h2>
        <p style={{ marginBottom: 20 }}>Every URL in your sitemap must be the canonical version. If a page in your sitemap has a canonical pointing to a different URL, Google will index the canonical target instead. This is one of the most common causes of submitted URL not indexed status in Search Console. Audit your sitemap regularly to ensure all listed URLs are canonical.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>Common Canonical Tag Mistakes</h2>
        <p style={{ marginBottom: 20 }}>Pointing canonicals to redirecting URLs: always canonical to the final destination. Using relative URLs in canonicals: always use absolute URLs with protocol. Canonical chains where page A canonicals to B which canonicals to C: point directly to the final preferred URL. Blocking canonical targets with robots.txt: if Googlebot cannot crawl the canonical, it cannot process the signal. Having no canonical on important pages: every indexable page needs a self-referencing canonical at minimum.</p>
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Find canonical issues on your site</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Sitemap</a>
      </div>
      <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
        <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Related guides</div>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <li><a href="/learn/pages-in-sitemap-not-indexed" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Pages in Sitemap Not Indexed</a></li>
          <li><a href="/learn/submitted-url-not-indexed" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Submitted URL Not Indexed</a></li>
          <li><a href="/learn/sitemap-best-practices" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Sitemap Best Practices</a></li>
        </ul>
      </div>
    </div>
  );
}
