import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'SSL and HTTPS SEO: Impact on Rankings and Migration Guide | SitemapFixer',
  description: "SSL certificates and HTTPS are required for competitive SEO in 2025. Here is how SSL affects rankings, how to migrate correctly, and how to fix mixed content issues.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/ssl-seo' },
};
const sections = [
  { h: "SSL as a Ranking Signal", d: "Google confirmed HTTPS as a ranking signal in 2014 and has steadily increased its weight. Today, an HTTP site without SSL is at a competitive disadvantage in nearly all niches. Chrome marks HTTP pages as Not Secure, which reduces user trust and CTR from search results. For ecommerce and any site collecting user data, SSL is also a legal and compliance requirement beyond SEO. Free SSL certificates via Let's Encrypt are available from most hosting providers, eliminating cost as a barrier." },
  { h: "SSL Certificate Types and SEO", d: "For SEO purposes, all SSL certificate types provide the same ranking signal: DV (Domain Validated, the most common free type), OV (Organization Validated), and EV (Extended Validation). Google does not give ranking preference to EV over DV. The padlock appears regardless of certificate type. Choose DV/Let's Encrypt for blogs and content sites, OV for business sites, and EV only if your industry has compliance requirements for it." },
  { h: "Mixed Content: The Hidden SSL Problem", d: "Mixed content occurs when an HTTPS page loads resources (images, scripts, stylesheets) over HTTP. Chrome blocks mixed content by default, which can break functionality and show security warnings. Mixed content also undermines the SEO benefit of HTTPS. Find mixed content using Chrome DevTools Console (filter for mixed content warnings), browser extension HTTPS Everywhere, or run your URLs through Why No Padlock. Fix by updating all resource URLs to HTTPS in your CMS, templates, and database." },
  { h: "HTTPS Migration Checklist", d: "Install SSL certificate. Set up 301 redirects from HTTP to HTTPS for all URLs. Update all internal links to HTTPS. Update canonical tags to HTTPS. Update sitemap to contain only HTTPS URLs. Update your Google Search Console property (add the HTTPS property). Update Bing Webmaster Tools. Update any CDN configurations to serve content over HTTPS. Update hardcoded resource URLs in your CMS database. Test for mixed content on all page templates. Update your robots.txt if it references your sitemap URL." },
  { h: "SSL and Your Sitemap", d: "After migrating to HTTPS, your sitemap must contain only HTTPS URLs. A sitemap with http:// URLs after migration causes Google to report errors in Search Console. Update your sitemap generator or CMS to use your production HTTPS domain for all URLs. If you self-generate your sitemap, verify the base URL configuration is using https:// not http://. After updating, resubmit your sitemap in Google Search Console. Check the Sitemaps report a few days later to confirm no errors." },
];
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>SSL SEO</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>SSL and HTTPS SEO: Ranking Impact and Migration Guide</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your HTTPS sitemap configuration free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Site Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        {sections.map(({ h, d }) => (
          <div key={h} style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 10 }}>{h}</h2>
            <p style={{ margin: 0 }}>{d}</p>
          </div>
        ))}
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Verify your HTTPS sitemap configuration</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free - checks all URLs for HTTP vs HTTPS issues</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Sitemap Free</a>
      </div>
    </div>
  );
}
