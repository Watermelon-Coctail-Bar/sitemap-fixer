import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Redirect SEO Guide: 301 vs 302, Redirect Chains, and Best Practices | SitemapFixer',
  description: "Redirects affect crawl budget, link equity, and indexing. Here is how 301 and 302 redirects work for SEO, how to avoid redirect chains, and common redirect mistakes.",
  alternates: { canonical: 'https://sitemapfixer.com/blog/redirect-seo-guide' },
};
const sections = [
  { t: "301 vs 302: which to use when", d: "A 301 redirect is permanent - it tells search engines the old URL is gone forever and passes nearly all link equity to the new URL. Use 301 for: content you have permanently moved, URL restructuring, HTTPS migration, domain migrations, and consolidating duplicate pages. A 302 redirect is temporary - it tells search engines the old URL still exists and to return later. Use 302 only when you genuinely intend to restore the original URL, such as during temporary maintenance. In practice, most SEO redirects should be 301." },
  { t: "How much PageRank do redirects pass?", d: "Google has confirmed that 301 redirects pass essentially the same link equity as a direct link - the previously cited 15% loss is no longer accurate for modern crawlers. Chain your redirects wisely: A to B to C is still less efficient than A directly to C. Each hop in a redirect chain introduces additional crawl cost and slight inefficiency. Always redirect to the final destination directly when possible." },
  { t: "Redirect chains: finding and fixing them", d: "A redirect chain is when URL A redirects to B which redirects to C. Chains longer than 2 hops waste crawl budget, slow down page delivery for users, and dilute the efficiency of link equity transfer. Find chains using Screaming Frog - it traces all redirect hops and shows the full chain length. Fix by updating each redirect to point directly to the final destination URL. After fixing, resubmit your sitemap so Google discovers the consolidated paths." },
  { t: "Redirect loops", d: "A redirect loop is when A redirects to B which redirects back to A, causing an infinite loop that returns an error. They are almost always caused by misconfigured server rules during migrations or plugin conflicts in WordPress. Find them in Screaming Frog (they appear as redirect loop errors) or in Google Search Console Coverage report. Fix by tracing the redirect chain manually in your server configuration or .htaccess file." },
  { t: "Sitemaps and redirects", d: "Your sitemap should never contain URLs that redirect. Only include the final destination canonical URLs. If a URL in your sitemap returns a 301 redirect, Google Search Console reports it as Submitted URL has redirect. Update your sitemap to contain the redirected-to URL instead. After any significant redirect work, audit your sitemap for redirect URLs using SitemapFixer or Screaming Frog." },
];
export default function Page() {
  return (
    <article style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/blog" style={{ color: '#2d5be3', textDecoration: 'none' }}>Blog</a>{' / '}
        <span>Redirect SEO Guide</span>
      </nav>
      <div style={{ fontSize: 13, color: '#9ca3af', marginBottom: 12 }}>April 2025 · 7 min read</div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, lineHeight: 1.15 }}>Redirect SEO Guide: 301 vs 302, Chains, and Best Practices</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Find redirect issues in your sitemap free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Sitemap Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        {sections.map(({ t, d }) => (
          <div key={t} style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12 }}>{t}</h2>
            <p style={{ margin: 0 }}>{d}</p>
          </div>
        ))}
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Find redirect URLs in your sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free - detects 3xx URLs in your sitemap instantly</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Sitemap Free</a>
      </div>
    </article>
  );
}
