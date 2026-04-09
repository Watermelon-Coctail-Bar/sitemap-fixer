import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Pages in Sitemap But Not Indexed: How to Fix', description: 'Your pages are in your sitemap but Google is not indexing them. Here are the real reasons this happens and exactly how to fix each one.', alternates: { canonical: 'https://sitemapfixer.com/learn/pages-in-sitemap-not-indexed' }, openGraph: { title: 'Pages in Sitemap But Not Indexed by Google', description: 'Your pages are in your sitemap but Google is not indexing them. Here are the real reasons this happens and exactly how to fix each one.', url: 'https://sitemapfixer.com/learn/pages-in-sitemap-not-indexed', type: 'article',
    images: [{
      url: 'https://sitemapfixer.com/opengraph-image',
      width: 1200,
      height: 630,
      alt: 'SitemapFixer - AI Sitemap Checker and SEO Fix Tool',
    }],
    siteName: 'SitemapFixer',
    locale: 'en_US',
  } };
export default function Page() { return (
  <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
    <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}><a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}<a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}<span>Pages in Sitemap But Not Indexed by Google</span></nav>
    <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Pages in Sitemap But Not Indexed by Google</h1>
    <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}><span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Diagnose your sitemap free</span><a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze Free</a></div>
    <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>Having a URL in Your Sitemap Does Not Guarantee Indexing</h2>
        <p style={{ marginBottom: 20 }}>Google reviews each page and makes its own quality judgment. Pages with thin content, duplicate content, or low-value information will be listed in your sitemap but skipped. Fix the underlying content issues first.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>Canonical Tags Are Pointing Elsewhere</h2>
        <p style={{ marginBottom: 20 }}>If your pages have canonical tags pointing to different URLs, Google will index the canonical target instead. Check every page in your sitemap and confirm the canonical tag matches the URL exactly.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>Pages Are Behind a Login or Require Special Access</h2>
        <p style={{ marginBottom: 20 }}>If Googlebot cannot access your pages without logging in or accepting cookies in a specific way, it will crawl a broken version. Use the URL Inspection tool to see what Google actually sees when it visits your page.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>Sitemap Contains Paginated or Faceted URLs</h2>
        <p style={{ marginBottom: 20 }}>Filter pages, sort pages, and paginated archives often end up in sitemaps accidentally. Google typically will not index these as they offer no unique content. Remove all faceted navigation and pagination URLs from your sitemap.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>Low Domain Authority and Limited Crawl Budget</h2>
        <p style={{ marginBottom: 20 }}>New or low-authority sites get limited crawl budget. Even with a perfect sitemap, Google may deprioritize your pages. Build backlinks, improve internal linking, and reduce crawl waste to get more budget for important pages.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>Fix and Resubmit Your Sitemap</h2>
        <p style={{ marginBottom: 20 }}>After fixing content and technical issues, resubmit your sitemap in Google Search Console. Go to Sitemaps, delete the existing submission, and submit fresh. Then use the URL Inspection tool to request indexing for priority pages.</p>

        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/learn/pages-not-indexed-google" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Pages Not Indexed by Google: Causes and Fixes</a></li>
            <li><a href="/learn/submitted-url-not-indexed" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Submitted URL Not Indexed: How to Fix in GSC</a></li>
            <li><a href="/learn/crawled-currently-not-indexed" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Crawled Not Indexed: How to Fix It | SitemapFixer</a></li>
            <li><a href="/learn/discovered-currently-not-indexed" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Discovered Not Indexed: Why It Happens & Fixes | SitemapFixer</a></li>
            <li><a href="/learn/why-pages-not-indexed" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Why Are My Pages Not Indexed by Google?</a></li>
          </ul>
        </div>
    </div>
    <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}><div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Fix your sitemap now</div><div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free analysis in 60 seconds</div><a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Sitemap</a></div>
    <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}><div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Related guides</div><ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <li><a href="/learn/submitted-url-not-indexed" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Submitted URL Not Indexed</a></li>
          <li><a href="/learn/crawled-currently-not-indexed" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Crawled Currently Not Indexed</a></li>
          <li><a href="/learn/sitemap-not-working" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Sitemap Not Working</a></li>
    </ul></div>
  </div>); }
