import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'How to Fix Sitemap Errors in Google Search Console | SitemapFixer',
  description: 'Step-by-step guide to fixing every sitemap error in Google Search Console: couldn\'t fetch, submitted URL blocked by robots.txt, redirect errors, and more.',
  alternates: { canonical: 'https://sitemapfixer.com/blog/how-to-fix-sitemap-errors' },
  openGraph: { title: 'How to Fix Sitemap Errors in Google Search Console', description: 'Fix every sitemap error in Google Search Console with this step-by-step guide.', url: 'https://sitemapfixer.com/blog/how-to-fix-sitemap-errors', type: 'article' },
};
export default function Page() {
  return (
    <article style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/blog" style={{ color: '#2d5be3', textDecoration: 'none' }}>Blog</a>{' / '}
        <span>How to Fix Sitemap Errors</span>
      </nav>
      <div style={{ fontSize: 13, color: '#9ca3af', marginBottom: 12 }}>April 2025 · 8 min read</div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, lineHeight: 1.15 }}>How to Fix Sitemap Errors in Google Search Console</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Automatically detect and fix sitemap errors</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Try SitemapFixer Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        <p style={{ marginBottom: 24 }}>Google Search Console reports sitemap errors under Index, then Sitemaps. These errors stop Google from crawling and indexing your pages. This guide covers every common error and exactly how to fix it.</p>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>1. Could Not Fetch Sitemap</h2>
        <p style={{ marginBottom: 24 }}>This means Google cannot access your sitemap URL. Common causes: the sitemap file does not exist at that URL, the server returned a non-200 status code, authentication is required, or a firewall is blocking Googlebot. Fix it by visiting your sitemap URL directly in a browser. If it loads for you but fails for Google, check your server logs for Googlebot requests and confirm you are not blocking it via IP restrictions or your robots.txt.</p>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>2. Submitted URL Blocked by Robots.txt</h2>
        <p style={{ marginBottom: 24 }}>One or more URLs in your sitemap are blocked by your robots.txt file. Googlebot cannot crawl blocked URLs, so including them in your sitemap creates a contradiction. Fix it by checking your robots.txt at /robots.txt and removing any Disallow rules that match the URLs in question. If the URLs should be blocked from crawling, remove them from your sitemap instead. Never have a URL in your sitemap that is also blocked in robots.txt.</p>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>3. Submitted URL Has Redirect</h2>
        <p style={{ marginBottom: 24 }}>Your sitemap contains a URL that redirects to another URL. Sitemaps should only contain canonical, final destination URLs. Fix it by updating the sitemap to use the destination URL after the redirect. If you have URLs redirecting from HTTP to HTTPS, update them to HTTPS. If you have URLs with trailing slash redirects, standardize them.</p>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>4. Submitted URL Returns 404</h2>
        <p style={{ marginBottom: 24 }}>A URL in your sitemap no longer exists. Fix it by either restoring the page, redirecting the URL to its replacement, or removing it from the sitemap. Stale 404 URLs in your sitemap waste crawl budget and create errors in Search Console.</p>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>5. Submitted URL Marked Noindex</h2>
        <p style={{ marginBottom: 24 }}>A URL in your sitemap has a noindex tag. This is a contradiction - your sitemap tells Google to index the page but the noindex tag tells Google not to. Fix it by either removing the noindex tag if you want the page indexed, or removing the URL from the sitemap if you intentionally do not want it indexed.</p>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>6. Sitemap Could Not Be Read (Parse Error)</h2>
        <p style={{ marginBottom: 24 }}>Your sitemap XML is malformed. Common causes: special characters not properly encoded (use &amp;amp; not &amp;), incorrect XML structure, or a PHP/server error printing before the XML. Validate your sitemap using the XML Sitemap Validator or paste it into an XML validator. Fix any encoding errors or structural issues.</p>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>How to Fix Sitemap Errors Faster</h2>
        <p style={{ marginBottom: 24 }}>SitemapFixer automatically detects all of these errors - it fetches your sitemap, checks every URL for status codes, redirect chains, noindex tags, and robots.txt conflicts, and gives you a prioritized fix list. Try it free at sitemapfixer.com.</p>
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Fix all your sitemap errors automatically</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free analysis - no account needed</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Sitemap Free</a>
      </div>
      <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
        <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Related guides</div>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <li><a href="/learn/sitemap-errors-google-search-console" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Sitemap Errors Guide</a></li>
          <li><a href="/learn/submitted-url-not-indexed" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Submitted URL Not Indexed</a></li>
          <li><a href="/learn/robots-txt-guide" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Robots.txt Guide</a></li>
        </ul>
      </div>
    </article>
  );
}
