import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'XML Sitemap Not Working? 9 Common Reasons and Fixes',
  description: 'Your XML sitemap not working? Here are the 9 most common reasons sitemaps fail in Google Search Console and the exact step-by-step fixes for each one.',
  alternates: { canonical: 'https://sitemapfixer.com/blog/xml-sitemap-not-working' },
  openGraph: {
    title: 'XML Sitemap Not Working? 9 Common Reasons and Fixes',
    description: 'Your XML sitemap not working? Here are the 9 most common reasons sitemaps fail in Google Search Console and the exact step-by-step fixes for each one.',
    url: 'https://sitemapfixer.com/blog/xml-sitemap-not-working',
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
const reasons = [
  { n: '1', t: 'Sitemap Returns a Non-200 Status Code', d: "Visit your sitemap URL directly. If you get a 404, 500, or any non-200 response, Google cannot access it. Check your server configuration, verify the sitemap file exists at that exact URL, and confirm there are no authentication requirements blocking access." },
  { n: '2', t: 'Wrong Content-Type Header', d: "Your server must return your sitemap with a content-type of application/xml or text/xml. Some servers return text/html which causes parsing failures. Check your headers using curl or httpstatus.io. On Apache, add a .htaccess rule: AddType application/xml .xml." },
  { n: '3', t: 'Invalid XML or Parse Errors', d: "Even a single invalid character breaks the entire sitemap. Common causes: unescaped ampersands (use &amp; not &), non-UTF-8 characters, or a server error message printed before the XML declaration. Validate your sitemap at validator.w3.org." },
  { n: '4', t: 'URLs Blocked or Redirecting', d: "Google Search Console will report errors for sitemap URLs that return non-200 status codes, redirect to other URLs, or are blocked by robots.txt. Clean your sitemap so it only contains canonical, final-destination URLs that return 200." },
  { n: '5', t: 'Sitemap Exceeds Size Limits', d: "A single XML sitemap cannot exceed 50,000 URLs or 50MB uncompressed. If your site is large, split into multiple sitemaps and reference them from a sitemap index file at your root URL." },
  { n: '6', t: 'Not Referenced in Robots.txt', d: "Add Sitemap: https://yourdomain.com/sitemap.xml to your robots.txt file. This helps search engines find your sitemap even if they have not been told about it via Search Console. Use an absolute URL, not a relative one." },
  { n: '7', t: 'Not Submitted to Google Search Console', d: "Just publishing a sitemap is not enough. Submit it explicitly in Google Search Console under Sitemaps. This triggers an immediate fetch and gives you error reports. After submission, wait 24-48 hours and check the status." },
  { n: '8', t: 'Incorrect Domain or Protocol in URLs', d: "All URLs in your sitemap must match your canonical domain exactly. If your site uses HTTPS, all sitemap URLs must use HTTPS. If your site uses www, all URLs must include www. Mixed protocols or domains cause indexing inconsistencies." },
  { n: '9', t: 'CMS Plugin Generating a Broken Sitemap', d: "In WordPress, conflicts between multiple active sitemap plugins, or plugin updates introducing bugs, can break your sitemap. Deactivate all but one sitemap plugin and re-validate your sitemap after each change." },
];
export default function Page() {
  return (
    <article style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/blog" style={{ color: '#2d5be3', textDecoration: 'none' }}>Blog</a>{' / '}
        <span>XML Sitemap Not Working</span>
      </nav>
      <div style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 16 }}>By <a href="/about" style={{ color: '#2d5be3', textDecoration: 'none' }}>Arnoldas Arny</a></div>
      <div style={{ fontSize: 13, color: '#9ca3af', marginBottom: 12 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"Article","headline":"XML Sitemap Not Working? 9 Common Reasons and Fixes","description":"Your XML sitemap not working? Here are the 9 most common reasons sitemaps fail in Google Search Console and the exact step-by-step fixes for each one.","url":"https://sitemapfixer.com/blog/xml-sitemap-not-working","author":{"@type":"Person","name":"Arnoldas Arny","url":"https://sitemapfixer.com/about"},"publisher":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com","logo":{"@type":"ImageObject","url":"https://sitemapfixer.com/opengraph-image"}},"datePublished":"2025-01-15","mainEntityOfPage":{"@type":"WebPage","@id":"https://sitemapfixer.com/blog/xml-sitemap-not-working"}}' }} />April 2025 · 7 min read</div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, lineHeight: 1.15 }}>XML Sitemap Not Working? 9 Common Reasons and Fixes</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Validate your sitemap free in 60 seconds</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Check My Sitemap</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        <p style={{ marginBottom: 24 }}>An XML sitemap that is not working will prevent Google from discovering and indexing your pages. Here are the 9 most common reasons a sitemap fails and exactly how to fix each one.</p>
        {reasons.map(({ n, t, d }) => (
          <div key={n} style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12 }}>{n}. {t}</h2>
            <p style={{ margin: 0 }}>{d}</p>
          </div>
        ))}
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Validate your sitemap instantly</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free - checks every URL for errors</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Check My Sitemap Free</a>
      </div>
      <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
        <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Related guides</div>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <li><a href="/learn/sitemap-not-working" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Sitemap Not Working Guide</a></li>
          <li><a href="/blog/how-to-fix-sitemap-errors" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Fix Sitemap Errors in GSC</a></li>
          <li><a href="/learn/sitemap-best-practices" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Sitemap Best Practices</a></li>
        </ul>
  
        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/blog/how-to-fix-sitemap-errors" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>How to Fix Sitemap Errors in Google Search Console</a></li>
            <li><a href="/blog/submit-sitemap-google" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>How to Submit a Sitemap to Google: Step-by-Step Guide</a></li>
            <li><a href="/blog/xml-sitemap-submission" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>XML Sitemap Submission: Submit to Google & Bing</a></li>
            <li><a href="/blog/sitemap-blocked-robots-txt" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Sitemap Blocked by Robots.txt: How to Find and Fix It</a></li>
            <li><a href="/blog/sitemap-vs-robots-txt" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Sitemap vs Robots.txt: How They Work Together</a></li>
          </ul>
        </div>
    </div>
    </article>
  );
}
