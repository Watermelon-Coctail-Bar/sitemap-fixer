import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Sitemap Errors Google Search Console: Fix Every Error | SitemapFixer', description: 'Getting sitemap errors in Google Search Console? A complete guide to every sitemap error type and exactly how to fix each one.', alternates: { canonical: 'https://sitemapfixer.com/learn/sitemap-errors-google-search-console' }, openGraph: { title: 'Sitemap Errors in Google Search Console: Complete Fix Guide', description: 'Getting sitemap errors in Google Search Console? A complete guide to every sitemap error type and exactly how to fix each one.', url: 'https://sitemapfixer.com/learn/sitemap-errors-google-search-console', type: 'article' } };
export default function Page() { return (
  <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
    <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}><a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}<a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}<span>Sitemap Errors in Google Search Console: Complete Fix Guide</span></nav>
    <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Sitemap Errors in Google Search Console: Complete Fix Guide</h1>
    <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}><span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Diagnose your sitemap free</span><a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze Free</a></div>
    <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>Could Not Fetch Sitemap</h2>
        <p style={{ marginBottom: 20 }}>Googlebot could not download your sitemap file. Check your sitemap URL returns a 200 status, is not blocked by robots.txt, requires no authentication, and loads in under 10 seconds.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>Sitemap is an HTML Page</h2>
        <p style={{ marginBottom: 20 }}>Your sitemap URL returns an HTML page instead of XML. Common cause: your CMS returns a 404 error page at /sitemap.xml. Ensure your sitemap generation plugin is active and generating valid XML.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>Invalid XML</h2>
        <p style={{ marginBottom: 20 }}>Your sitemap contains malformed XML. Common causes: unencoded special characters, missing closing tags, incorrect encoding. Validate with an XML validator before submitting.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>URLs in Sitemap Cannot Be Crawled</h2>
        <p style={{ marginBottom: 20 }}>Google can reach your sitemap but cannot crawl the listed URLs. Check robots.txt rules blocking the URLs, server errors when fetching individual pages, and pages behind authentication.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>Submitted URL Blocked by robots.txt</h2>
        <p style={{ marginBottom: 20 }}>A URL in your sitemap is blocked by your robots.txt. Either remove the URL from your sitemap or fix your robots.txt to allow Googlebot access.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>Sitemap Indexed Count vs Submitted Count Gap</h2>
        <p style={{ marginBottom: 20 }}>A large gap between URLs submitted and URLs indexed is not an error but a warning. It means Google is choosing not to index many of your submitted pages. Focus on content quality improvements for the non-indexed pages.</p>
    </div>
    <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}><div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Fix your sitemap now</div><div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free analysis in 60 seconds</div><a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Sitemap</a></div>
    <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}><div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Related guides</div><ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <li><a href="/learn/sitemap-not-working" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Sitemap Not Working</a></li>
          <li><a href="/learn/sitemap-checker" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Sitemap Checker</a></li>
          <li><a href="/learn/sitemap-validator" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Sitemap Validator</a></li>
    </ul></div>
  </div>); }
