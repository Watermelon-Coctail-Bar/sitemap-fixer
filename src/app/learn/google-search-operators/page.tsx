import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Google Search Operators for SEO Research',
  description: "Google search operators let you run advanced searches that reveal SEO insights about any site. The operators SEOs use most and what each shows.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/google-search-operators' },
  openGraph: {
    title: 'Google Search Operators for SEO Research',
    description: 'Google search operators let you run advanced searches that reveal SEO insights about any site. Here are the operators SEOs use most and what each one shows you.',
    url: 'https://sitemapfixer.com/learn/google-search-operators',
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
const operators = [
  { op: "site:yoursite.com", use: "Index check", d: "Shows all pages Google has indexed from your domain. Use it as a quick check of approximate indexed page count and to spot unexpected URLs in Google's index (staging pages, admin pages, duplicate URLs). Combine with a keyword to check if a specific topic is covered: site:yoursite.com sitemap returns all indexed pages mentioning sitemap." },
  { op: "site:yoursite.com/section/", use: "Section indexing", d: "Narrow site: to a specific directory to see how many pages from that section are indexed. Useful for checking if a content category is well-indexed or if a directory is accidentally over-indexed (like /tag/ pages or /page/2 pagination)." },
  { op: "intitle:keyword", use: "Title tag research", d: "Returns pages with the keyword in the title tag. Use intitle:your-target-keyword site:yoursite.com to confirm your page is indexed with the correct title, or intitle:keyword without site: to research what competitors are targeting. Also useful for finding cannibalization: intitle:keyword site:yoursite.com returning multiple pages indicates potential keyword targeting overlap." },
  { op: "inurl:keyword", use: "URL research", d: "Returns pages with the keyword in the URL. Use inurl:keyword site:yoursite.com to find your own pages with that URL pattern, or without site: to research how competitors structure their URLs for specific topics." },
  { op: "cache:yoursite.com/page", use: "Cached version check", d: "Shows Google's last cached version of a page and the date it was cached. If the cached version is significantly out of date or shows an old version of your page, it signals Google is not recrawling that page frequently. Useful for checking if recent content changes have been discovered by Google." },
  { op: "related:yoursite.com", use: "Competitor research", d: "Shows sites Google considers related or similar to yours. Useful for finding competitor sites, potential link building targets, and sites targeting similar topics." },
  { op: "-site:yoursite.com keyword", use: "Content gap research", d: "The minus operator excludes your site from results. Searching for a topic with -site:yoursite.com shows all competitors ranking for that topic without your own site cluttering the results. Excellent for gap analysis." },
];
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"Article","headline":"Google Search Operators for SEO Research","description":"Google search operators let you run advanced searches that reveal SEO insights about any site. Here are the operators SEOs use most and what each one shows you.","url":"https://sitemapfixer.com/learn/google-search-operators","author":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com"},"publisher":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com","logo":{"@type":"ImageObject","url":"https://sitemapfixer.com/opengraph-image"}},"datePublished":"2025-01-15","mainEntityOfPage":{"@type":"WebPage","@id":"https://sitemapfixer.com/learn/google-search-operators"}}' }} />
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Google Search Operators</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Google Search Operators for SEO Research</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your indexing status free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Site Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        {operators.map(({ op, use, d }) => (
          <div key={op} style={{ marginBottom: 32, borderLeft: '3px solid #e4e4ed', paddingLeft: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8, flexWrap: 'wrap' }}>
              <code style={{ fontFamily: 'monospace', fontWeight: 700, fontSize: 15, background: '#f3f4f6', padding: '3px 8px', borderRadius: 6, color: '#0a0a0f' }}>{op}</code>
              <span style={{ fontSize: 12, padding: '2px 8px', borderRadius: 20, background: '#dbeafe', color: '#1e40af', fontWeight: 600 }}>{use}</span>
            </div>
            <p style={{ margin: 0 }}>{d}</p>
          </div>
        ))}
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Check your full indexing status</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free sitemap and indexing analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>

        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/learn/technical-seo-checklist" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Technical SEO Checklist 2025</a></li>
            <li><a href="/learn/canonical-tags" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Canonical Tags: How to Use Them Correctly for SEO</a></li>
            <li><a href="/learn/structured-data" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Structured Data & Schema Markup: Complete Guide</a></li>
            <li><a href="/learn/core-web-vitals" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Core Web Vitals: LCP, INP, CLS Explained</a></li>
            <li><a href="/learn/page-speed-optimization" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Page Speed Optimization: Make Your Site Faster</a></li>
          </ul>
        </div>
    </div>
  );
}
