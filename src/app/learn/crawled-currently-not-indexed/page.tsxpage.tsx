import type { Metadata } from 'next';
export const metadata: Metadata = { title: '"Crawled - Currently Not Indexed" Fix Guide | SitemapFixer', description: 'Google says crawled currently not indexed for your pages? Here is exactly what this status means and proven steps to get those pages indexed.', alternates: { canonical: 'https://sitemapfixer.com/learn/crawled-currently-not-indexed' }, openGraph: { title: 'Crawled Currently Not Indexed: Causes and Fixes', description: 'Google says crawled currently not indexed for your pages? Here is exactly what this status means and proven steps to get those pages indexed.', url: 'https://sitemapfixer.com/learn/crawled-currently-not-indexed', type: 'article' } };
export default function Page() { return (
  <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
    <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}><a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}<a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}<span>Crawled Currently Not Indexed: Causes and Fixes</span></nav>
    <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Crawled Currently Not Indexed: Causes and Fixes</h1>
    <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}><span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Diagnose your sitemap free</span><a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze Free</a></div>
    <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>What This Status Means</h2>
        <p style={{ marginBottom: 20 }}>Google crawled your page and saw the content but made a quality decision not to add it to the index. This is different from pages Google has not discovered yet.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>Improve Content Depth and Uniqueness</h2>
        <p style={{ marginBottom: 20 }}>Pages that are too short, too similar to others on your site, or that simply aggregate information without unique insight are frequent victims. Expand content significantly with original analysis.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>Fix Duplicate Content Issues</h2>
        <p style={{ marginBottom: 20 }}>If multiple pages cover the same topic with similar content, Google indexes only the one it deems most authoritative. Consolidate thin pages, use canonical tags, and eliminate near-duplicate content.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>Improve Page Speed and Core Web Vitals</h2>
        <p style={{ marginBottom: 20 }}>Extremely slow pages can contribute to this status. Run your page through PageSpeed Insights and fix critical performance issues. Aim for under 2.5 seconds Largest Contentful Paint.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>Add More Internal Links</h2>
        <p style={{ marginBottom: 20 }}>Google uses internal link equity as a proxy for importance. Pages with few internal links are seen as low-priority. Link to affected pages from your most authoritative pages.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>Re-request Indexing After Fixing</h2>
        <p style={{ marginBottom: 20 }}>Use the URL Inspection tool to request indexing after making improvements. Google typically re-crawls within 1-2 weeks. Monitor Search Console to confirm the status changes.</p>
    </div>
    <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}><div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Fix your sitemap now</div><div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free analysis in 60 seconds</div><a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Sitemap</a></div>
    <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}><div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Related guides</div><ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <li><a href="/learn/submitted-url-not-indexed" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Submitted URL Not Indexed</a></li>
          <li><a href="/learn/pages-in-sitemap-not-indexed" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Pages in Sitemap Not Indexed</a></li>
          <li><a href="/learn/pages-not-indexed-google" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Pages Not Indexed Google</a></li>
    </ul></div>
  </div>); }
