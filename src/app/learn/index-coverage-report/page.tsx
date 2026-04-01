import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Index Coverage Report in Google Search Console | SitemapFixer',
  description: 'Learn how to read and fix the Index Coverage report in Google Search Console. Understand every status type and how to resolve indexing issues.',
  alternates: { canonical: 'https://sitemapfixer.com/learn/index-coverage-report' },
  openGraph: { title: 'Index Coverage Report Guide', description: 'How to read and fix every status in the Search Console Index Coverage report.', url: 'https://sitemapfixer.com/learn/index-coverage-report', type: 'article' },
};
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Index Coverage Report</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Index Coverage Report in Google Search Console: Complete Guide</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Analyze your indexing issues free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Try SitemapFixer Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8 }}>
        <p style={{ marginBottom: 20 }}>The Index Coverage report in Google Search Console shows which pages from your site are indexed and which are not, along with the specific reason for each status. Understanding this report is essential for diagnosing and fixing indexing problems.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>The Four Status Categories</h2>
        <p style={{ marginBottom: 20 }}>Error: Pages that could not be indexed due to a technical problem. These need immediate attention. Valid with warnings: Pages that are indexed but have issues that may affect their performance. Valid: Pages that are successfully indexed with no problems. Excluded: Pages that are not indexed, usually intentionally via noindex tags, canonical tags, or robots.txt.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>Common Error Statuses</h2>
        <p style={{ marginBottom: 20 }}>Server error (5xx): Your server returned an error when Googlebot tried to access the page. Fix your server configuration. Redirect error: The page has too many redirects, a redirect loop, or a redirect chain that is too long. Submitted URL blocked by robots.txt: A URL in your sitemap is blocked from crawling. Remove it from your sitemap or fix robots.txt. Submitted URL marked noindex: Your sitemap includes a page with a noindex directive. Remove it from the sitemap.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>Common Excluded Statuses</h2>
        <p style={{ marginBottom: 20 }}>Crawled - currently not indexed: Google crawled but chose not to index. Improve content quality. Discovered - currently not indexed: Google found the URL but has not crawled it yet. Duplicate without canonical: Multiple pages with the same content and no canonical tag indicating the preferred version. Alternate page with proper canonical tag: A non-canonical page that is correctly pointing to its canonical. This is expected and not a problem.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>How to Use the Report to Fix Issues</h2>
        <p style={{ marginBottom: 20 }}>Click on any status to see the affected URLs. For each URL, use the URL Inspection tool to understand exactly what Google sees. Fix the underlying issue, validate the fix in Search Console, and monitor the report over the following weeks to confirm improvement. Prioritize Errors first, then Valid with warnings, then investigate Excluded pages to ensure they are excluded intentionally.</p>
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Fix your indexing issues now</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Sitemap</a>
      </div>
      <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
        <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Related guides</div>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <li><a href="/learn/crawled-currently-not-indexed" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Crawled Currently Not Indexed</a></li>
          <li><a href="/learn/sitemap-errors-google-search-console" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Sitemap Errors in Search Console</a></li>
          <li><a href="/learn/pages-not-indexed-google" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Pages Not Indexed</a></li>
        </ul>
      </div>
    </div>
  );
}
