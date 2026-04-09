import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Crawl Errors: Types, Causes, and How to Fix Each One',
  description: "Crawl errors prevent Google from accessing your pages. Here is every crawl error type from Google Search Console, what causes each, and the exact fix.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/crawl-errors-guide' },
  openGraph: {
    title: 'Crawl Errors: Types, Causes, and How to Fix Each One',
    description: 'Crawl errors prevent Google from accessing your pages. Here is every crawl error type from Google Search Console, what causes each, and the exact fix.',
    url: 'https://sitemapfixer.com/learn/crawl-errors-guide',
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
const errors = [
  { code: "404 Not Found", cause: "The URL does not exist on your server.", fix: "If the page was deleted: create a 301 redirect to the most relevant existing page. If the URL was changed: redirect old URL to new. If it is linked from another site: set up a redirect to capture that link equity. Remove 404 URLs from your sitemap immediately. Do not leave important pages returning 404 - you lose all backlink value." },
  { code: "403 Forbidden", cause: "Server is blocking Googlebot from accessing the URL due to access restrictions.", fix: "Check your server configuration (.htaccess, nginx config) for IP blocks or authentication requirements. Ensure Googlebot's IP ranges are not blocked. If the page requires authentication, add a noindex tag and remove from your sitemap - authenticated content should not be indexed." },
  { code: "500 Server Error", cause: "Your server crashed or errored when Googlebot requested the page.", fix: "Check your server error logs for the specific error during the crawl time. Common causes: database connection failures, PHP memory limits exceeded, plugin conflicts in WordPress, or timeouts on slow database queries. Fix the underlying server issue, then use URL Inspection to request re-crawl." },
  { code: "DNS Errors", cause: "Google cannot resolve your domain name - your DNS is unreachable or misconfigured.", fix: "Check your DNS settings at your registrar. Verify nameservers are correctly pointing to your hosting provider. DNS propagation can take up to 48 hours after changes. Use tools like whatsmydns.net to check DNS propagation across global locations." },
  { code: "Connection Timeout", cause: "Your server is too slow to respond within Google's crawl timeout window.", fix: "Improve server response time (TTFB). Enable server-side caching, upgrade hosting if chronically overloaded, use a CDN. Check if timeouts correlate with high traffic periods - you may need auto-scaling or better infrastructure." },
  { code: "Robots.txt Fetch Failure", cause: "Google cannot retrieve your robots.txt file.", fix: "Verify your robots.txt is accessible at yoursite.com/robots.txt. Check it returns a 200 status (not 404 or 500). Ensure your server is not blocking requests to /robots.txt. If robots.txt is unavailable, Google defaults to allowing all crawling." },
];
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Crawl Errors Guide</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Crawl Errors: Every Type Explained and Fixed</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Find crawl errors in your sitemap free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Site Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        <p style={{ marginBottom: 32 }}>Find your crawl errors in Google Search Console under Settings, then Crawl Stats, then By Response. Click each error type to see affected URLs. Fix in priority order: 404s from your sitemap first, then 5xx server errors, then access errors.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {errors.map(({ code, cause, fix }) => (
            <div key={code} style={{ border: '1px solid #e4e4ed', borderRadius: 12, padding: '20px 24px', background: '#fafafa' }}>
              <div style={{ fontWeight: 700, color: '#dc2626', fontSize: 16, marginBottom: 8, fontFamily: 'monospace' }}>{code}</div>
              <p style={{ margin: '0 0 8px', fontSize: 14, color: '#6b6b7d' }}><strong>Cause:</strong> {cause}</p>
              <p style={{ margin: 0, fontSize: 14, color: '#3d3d4f', lineHeight: 1.7 }}><strong>Fix:</strong> {fix}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 48 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>How to Monitor Crawl Errors Proactively</h2>
          <p>In Google Search Console under Settings, then Crawl Stats, check the Crawl Requests Breakdown by Response table weekly. A healthy site should have the vast majority of responses as 200 (success). More than 5-10% of crawl requests returning errors signals a structural problem worth investigating. Set up email alerts in Search Console for new coverage issues so you are notified of crawl problems before they affect rankings.</p>
        </div>
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Find crawl errors in your sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free - checks all URLs in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>

        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/learn/robots-txt-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Robots.txt Guide: How to Write and Test Your Robots.txt</a></li>
            <li><a href="/learn/robots-txt-examples" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Robots.txt Examples: WordPress, Shopify & More</a></li>
            <li><a href="/learn/crawl-budget" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Crawl Budget: What It Is and How to Optimize It</a></li>
            <li><a href="/learn/google-not-crawling-my-site" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Google Not Crawling My Site? Here Are the Fixes</a></li>
            <li><a href="/learn/mobile-first-indexing-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Mobile-First Indexing: How to Prepare Your Site</a></li>
          </ul>
        </div>
    </div>
  );
}
