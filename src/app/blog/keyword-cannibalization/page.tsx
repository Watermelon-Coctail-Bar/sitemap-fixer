import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Keyword Cannibalization: How to Find and Fix It',
  description: "Keyword cannibalization is when multiple pages compete for the same keyword. How to detect it, which pages to consolidate, and when to keep them.",
  alternates: { canonical: 'https://sitemapfixer.com/blog/keyword-cannibalization' },
  openGraph: { title: 'Keyword Cannibalization: Find and Fix Guide', url: 'https://sitemapfixer.com/blog/keyword-cannibalization', type: 'article',
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
  { t: "What Keyword Cannibalization Costs You", d: "When two pages on your site target the same keyword, Google has to pick one to rank. It often picks the wrong one. Link equity from external links gets split between the two pages rather than concentrated on one. Google may shuffle which page it shows in search results, causing unpredictable ranking fluctuations. The combined performance of two competing pages is almost always worse than one strong, consolidated page would be." },
  { t: "How to Find Cannibalization", d: "Method 1: Google Search Console Performance report. Add a filter for a specific query, then go to the Pages tab. If multiple pages appear for the same query, you have cannibalization. Method 2: site:yoursite.com keyword in Google Search. If multiple pages from your site appear for the same search, they are competing. Method 3: Screaming Frog or Ahrefs Site Audit - both can identify pages with overlapping title tags and keyword targets." },
  { t: "When to Consolidate", d: "Consolidate when two pages are covering the same topic for the same search intent. Best approach: keep the page with more links, traffic, or authority as the canonical version. Copy any unique valuable content from the weaker page. Redirect the weaker page to the stronger page with a 301. Update all internal links to point to the remaining page." },
  { t: "When to Keep Both Pages", d: "Not all similar pages are cannibalization problems. Keep both pages when: they serve genuinely different search intents (informational vs. transactional), they target different stages of the funnel (beginner guide vs. advanced tutorial), or they cover meaningfully different aspects of a topic. The test: would a user searching each keyword be satisfied by the same page? If yes, consolidate. If no, differentiate more clearly." },
];
export default function Page() {
  return (
    <article style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/blog" style={{ color: '#2d5be3', textDecoration: 'none' }}>Blog</a>{' / '}
        <span>Keyword Cannibalization</span>
      </nav>
      <div style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 16 }}>By <a href="/about" style={{ color: '#2d5be3', textDecoration: 'none' }}>Arnoldas Arny</a></div>
      <div style={{ fontSize: 13, color: '#9ca3af', marginBottom: 12 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"Article","headline":"Keyword Cannibalization: How to Find and Fix It","description":"Keyword cannibalization is when multiple pages on your site compete for the same keyword. Here is how to detect it, which pages to consolidate, and when to keep them separate.","url":"https://sitemapfixer.com/blog/keyword-cannibalization","author":{"@type":"Person","name":"Arnoldas Arny","url":"https://sitemapfixer.com/about"},"publisher":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com","logo":{"@type":"ImageObject","url":"https://sitemapfixer.com/opengraph-image"}},"datePublished":"2025-01-15","mainEntityOfPage":{"@type":"WebPage","@id":"https://sitemapfixer.com/blog/keyword-cannibalization"}}' }} />April 2025 · 6 min read</div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, lineHeight: 1.15 }}>Keyword Cannibalization: Find It and Fix It</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your sitemap for URL duplication patterns</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Site Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        {sections.map(({ t, d }) => (
          <div key={t} style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12 }}>{t}</h2>
            <p style={{ margin: 0 }}>{d}</p>
          </div>
        ))}
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Analyze your site for content duplication</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free sitemap analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
  
        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/blog/content-audit-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Content Audit: How to Audit Your Site for SEO</a></li>
            <li><a href="/blog/content-marketing-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Content Marketing SEO: Drive Organic Growth</a></li>
            <li><a href="/blog/thin-content-fix" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Thin Content: Find It, Fix It, Recover Rankings</a></li>
            <li><a href="/blog/thin-content-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Thin Content: What It Is and How to Fix It</a></li>
            <li><a href="/blog/duplicate-content-seo-fix" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Duplicate Content SEO: How to Find and Fix It</a></li>
          </ul>
        </div>
    </div>
    </article>
  );
}
