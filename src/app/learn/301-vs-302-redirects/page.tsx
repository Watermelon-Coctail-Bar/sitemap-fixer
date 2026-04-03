import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: '301 vs 302 Redirects: The Difference and When to Use Each | SitemapFixer',
  description: "301 is permanent, 302 is temporary. Using the wrong one costs you PageRank and confuses Google. Here is when to use each type and what happens to SEO value.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/301-vs-302-redirects' },
};
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>301 vs 302 Redirects</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>301 vs 302 Redirects: When to Use Each and Why It Matters for SEO</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Find redirect issues in your sitemap</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Site Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        <p style={{ marginBottom: 24 }}>Redirects tell the browser and search engines that a URL has moved. The difference between 301 and 302 tells Google whether the move is permanent or temporary - and this has significant SEO implications for how PageRank is transferred.</p>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>301 Moved Permanently</h2>
        <p style={{ marginBottom: 24 }}>A 301 tells Google the page has permanently moved to a new URL. Google transfers almost all the PageRank (link equity) from the old URL to the new URL. Google deindexes the old URL and indexes the new one. This is what you should use for: URL restructuring, migrating from HTTP to HTTPS, changing a page slug permanently, moving a site to a new domain, and consolidating duplicate content. Use 301 for any redirect you intend to keep permanently - more than a few weeks.</p>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>302 Found (Temporary Redirect)</h2>
        <p style={{ marginBottom: 24 }}>A 302 tells Google the page has temporarily moved. Google keeps the original URL in its index and does not fully transfer PageRank to the destination. Use 302 for: A/B testing where you temporarily redirect users to a test page, maintenance pages, temporarily redirecting a seasonal page during off-season, and short-term promotional redirects. The key word is temporary - if the redirect will exist for more than a few weeks, use 301.</p>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>What Happens If You Use 302 Instead of 301</h2>
        <p style={{ marginBottom: 24 }}>If you use a 302 for a permanent move, Google keeps indexing the original URL instead of the destination. Any PageRank from links pointing to the original URL stays on the original page rather than flowing to the new destination. Over time Google may treat a long-standing 302 as a 301 (this behavior varies), but relying on this is risky. Using 302 for HTTP to HTTPS migration is a particularly common mistake that prevents the full transfer of link equity to the HTTPS version.</p>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Other Redirect Types Worth Knowing</h2>
        <p style={{ marginBottom: 12 }}><strong>307 Temporary Redirect:</strong> The modern equivalent of 302, preserves the HTTP method (POST stays POST). Use for temporary API redirects. Google treats it the same as 302.</p>
        <p style={{ marginBottom: 12 }}><strong>308 Permanent Redirect:</strong> The modern equivalent of 301, preserves the HTTP method. Use for permanent API redirects. Google treats it the same as 301.</p>
        <p style={{ marginBottom: 24 }}><strong>410 Gone:</strong> Not a redirect - tells Google the page was intentionally deleted and is not coming back. Google removes 410 pages from the index faster than 404 pages. Use 410 for permanently deleted content that had backlinks or indexed status.</p>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Sitemaps and Redirects</h2>
        <p style={{ marginBottom: 24 }}>Your sitemap should never contain URLs that redirect. If a URL in your sitemap returns a 301 or 302, Google Search Console reports it as an error under "Submitted URL has redirect." Update your sitemap to contain only the final destination URLs that return 200. After any URL migration, audit your sitemap to replace all old URLs with their new canonical destinations.</p>
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Check your sitemap for redirect issues</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free - finds redirecting URLs in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Sitemap Free</a>
      </div>
    </div>
  );
}
