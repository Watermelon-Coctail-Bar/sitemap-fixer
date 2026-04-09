import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Sitemap Not Working? 9 Common Fixes',
  description: 'Is your sitemap not working? Learn the 9 most common reasons sitemaps fail in Google Search Console and exactly how to fix each one.',
  alternates: { canonical: 'https://sitemapfixer.com/learn/sitemap-not-working' },
  openGraph: { title: 'Sitemap Not Working? 9 Common Fixes', description: 'The most common reasons sitemaps fail and how to fix them.', url: 'https://sitemapfixer.com/learn/sitemap-not-working', type: 'article',
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
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Sitemap Not Working</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Sitemap Not Working? 9 Common Causes and Fixes</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Diagnose your sitemap in 60 seconds</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8 }}>
        <p style={{ marginBottom: 20 }}>If your sitemap is not working, Google Search Console will show errors, your pages will not be indexed, and your organic traffic will suffer. Here are the 9 most common causes and exactly how to fix them.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>1. Sitemap Returns a 404 Error</h2>
        <p style={{ marginBottom: 20 }}>The most obvious problem: your sitemap URL does not exist. Check that your sitemap is accessible at yourdomain.com/sitemap.xml. If it returns a 404, you need to generate one using your CMS plugin, framework, or manually.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>2. Sitemap Has Invalid XML</h2>
        <p style={{ marginBottom: 20 }}>Google will reject sitemaps with malformed XML. Common causes include special characters like ampersands not encoded as &amp;amp;, missing closing tags, and incorrect namespace declarations. Validate your sitemap at a sitemap validator tool before submitting.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>3. URLs Are Blocked by robots.txt</h2>
        <p style={{ marginBottom: 20 }}>If your robots.txt disallows Googlebot from crawling the URLs in your sitemap, Google will see the URLs but not be able to visit them. Check your robots.txt for Disallow rules that conflict with your sitemap URLs.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>4. Sitemap Contains Non-Canonical URLs</h2>
        <p style={{ marginBottom: 20 }}>Every URL in your sitemap must be the canonical version. If you list both HTTP and HTTPS versions, or both www and non-www, Google gets confused. Only include the canonical URL that has the rel=canonical tag pointing to itself.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>5. Sitemap Exceeds 50,000 URLs or 50MB</h2>
        <p style={{ marginBottom: 20 }}>A single sitemap file can contain at most 50,000 URLs and must be under 50MB uncompressed. If you exceed these limits, split your sitemap into multiple files and create a sitemap index file that references each one.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>6. Sitemap Not Submitted to Google Search Console</h2>
        <p style={{ marginBottom: 20 }}>Google will eventually find your sitemap via robots.txt, but submitting it in Search Console speeds up discovery significantly. Go to Search Console, click Sitemaps in the sidebar, enter your sitemap URL, and click Submit.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>7. Sitemap Contains Redirecting URLs</h2>
        <p style={{ marginBottom: 20 }}>Do not include URLs in your sitemap that redirect to other pages. Sitemaps should only contain final destination URLs. Redirected URLs waste crawl budget and confuse Google about which version of a page to index.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>8. Missing lastmod or Incorrect Dates</h2>
        <p style={{ marginBottom: 20 }}>If your lastmod dates are wrong - all the same date, future dates, or dates that never update - Google will start ignoring your lastmod signals entirely. Only use lastmod when the page content genuinely changed, and use the actual date.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>9. Sitemap Contains Noindex Pages</h2>
        <p style={{ marginBottom: 20 }}>Pages with a noindex meta tag or X-Robots-Tag header should never appear in your sitemap. Including them sends conflicting signals to Google: your sitemap says index this page, but the page itself says do not. Remove all noindex pages from your sitemap.</p>
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Find what is wrong with your sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Sitemap</a>
      </div>
      <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
        <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Related guides</div>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <li><a href="/learn/sitemap-errors-google-search-console" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Sitemap Errors in Search Console</a></li>
          <li><a href="/learn/pages-not-indexed-google" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Pages Not Indexed</a></li>
          <li><a href="/learn/sitemap-checker" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Sitemap Checker</a></li>
        </ul>
      </div>

        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/learn/what-is-an-xml-sitemap" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>What Is an XML Sitemap?</a></li>
            <li><a href="/learn/xml-sitemap-format" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>XML Sitemap Format: Complete Reference with Examples</a></li>
            <li><a href="/learn/xml-sitemap-generator" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>XML Sitemap Generator: Create Your Sitemap Free</a></li>
            <li><a href="/learn/sitemap-best-practices" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>XML Sitemap Best Practices</a></li>
            <li><a href="/learn/how-to-create-a-sitemap" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>How to Create a Sitemap: WordPress, Shopify, Next.js</a></li>
          </ul>
        </div>
    </div>
  );
}
