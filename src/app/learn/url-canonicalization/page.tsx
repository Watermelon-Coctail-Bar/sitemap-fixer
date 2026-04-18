import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'URL Canonicalization: Fix Duplicate URLs',
  description: "URL canonicalization solves duplicate content by telling Google which URL version to index. How canonicalization works and every implementation method.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/url-canonicalization' },
  openGraph: {
    title: 'URL Canonicalization: Fix Duplicate URLs',
    description: 'URL canonicalization solves duplicate content by telling Google which version of a URL to index. How it works and how to implement it.',
    url: 'https://sitemapfixer.com/learn/url-canonicalization',
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
  { h: "What URL Canonicalization Is", d: "Canonicalization is the process of selecting the preferred URL when multiple URLs serve identical or very similar content. Common examples: https://yoursite.com and https://www.yoursite.com, http://yoursite.com and https://yoursite.com, yoursite.com/page and yoursite.com/page/, yoursite.com/page?utm_source=newsletter and yoursite.com/page. When Google encounters multiple URLs with the same content, it picks one to index - called the canonical URL. Without explicit signals from you, Google may choose incorrectly." },
  { h: "Method 1: rel=canonical Link Tag", d: "Add a link rel=canonical href=https://yoursite.com/preferred-url in the head section of every page. This is the primary canonicalization signal. Every page should have a canonical tag - either self-referencing (canonical points to itself) for non-duplicate pages, or pointing to the canonical version for duplicate pages. In Next.js: set alternates.canonical in the metadata object. In WordPress: Yoast and RankMath add canonical tags automatically." },
  { h: "Method 2: 301 Redirects", d: "For pages that should not exist as separate URLs at all, use a 301 redirect to send users and search engines directly to the canonical URL. 301 redirects are stronger than canonical tags - they are instructions rather than hints. Use 301s for: consolidating www vs non-www, HTTP to HTTPS, trailing slash vs no trailing slash, and any permanently redundant URLs. A page receiving a 301 redirect passes nearly all its link equity to the destination." },
  { h: "Method 3: URL Parameters in Search Console", d: "For URL parameters that do not change page content (tracking parameters, session IDs, sort orders), you can instruct Google to ignore them in Google Search Console under Legacy Tools and Reports then URL Parameters. This tells Google that yoursite.com/page?ref=email is the same as yoursite.com/page. This approach is useful for parameters you cannot easily canonical-tag or redirect." },
  { h: "Canonical Tags and Sitemaps Working Together", d: "Your sitemap and canonical tags should always agree. Only include canonical URLs in your sitemap - never include URLs that have a canonical tag pointing somewhere else. If yoursite.com/page?color=red has a canonical pointing to yoursite.com/page, only include yoursite.com/page in your sitemap. Including both sends contradictory signals. SitemapFixer analyzes your sitemap for URLs that conflict with canonical tags found on the actual pages." },
  { h: "Common Canonicalization Mistakes", d: "Canonicalizing to a noindexed page: a canonical pointing to a page with noindex causes both pages to be excluded from the index. Canonicalizing to a 404: Google discovers the canonical destination returns an error and may ignore the canonical entirely. Cross-domain canonicalization without proper setup: canonicalizing to a different domain requires specific configuration and is handled differently by Google. Pagination canonicalization: do not canonical paginated pages (page/2, page/3) to page/1 - use self-referencing canonicals on paginated pages instead." },
];
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"Article","headline":"URL Canonicalization: Fix Duplicate URLs","description":"URL canonicalization solves duplicate content by telling Google which version of a URL to index. How it works and how to implement it.","url":"https://sitemapfixer.com/learn/url-canonicalization","author":{"@type":"Person","name":"Arnoldas Arny","url":"https://sitemapfixer.com/about"},"publisher":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com","logo":{"@type":"ImageObject","url":"https://sitemapfixer.com/opengraph-image"}},"datePublished":"2025-01-15","mainEntityOfPage":{"@type":"WebPage","@id":"https://sitemapfixer.com/learn/url-canonicalization"}}' }} />
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>URL Canonicalization</span>
      </nav>
      <div style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 16 }}>By <a href="/about" style={{ color: '#2d5be3', textDecoration: 'none' }}>Arnoldas Arny</a></div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>URL Canonicalization: Consolidate Duplicates and Protect Rankings</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Find canonical conflicts in your sitemap free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Sitemap Free</a>
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
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Check your sitemap for canonical conflicts</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free - detects duplicate URL patterns in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Sitemap Free</a>
      </div>

        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/learn/technical-seo-checklist" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Technical SEO Checklist 2025</a></li>
            <li><a href="/learn/canonical-tags" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Canonical Tags: How to Use Them Correctly for SEO</a></li>
            <li><a href="/learn/structured-data" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Structured Data & Schema Markup: Complete Guide</a></li>
            <li><a href="/learn/core-web-vitals" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Core Web Vitals: LCP, INP, CLS Explained</a></li>
            <li><a href="/learn/page-speed-optimization" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Page Speed Optimization: Make Your Site Faster</a></li>
          
            <li><a href="/learn/url-structure-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>URL Structure for SEO: Best Practices</a></li></ul>
        </div>
    </div>
  );
}
