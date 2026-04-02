import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Redirect Chains: How They Hurt SEO and How to Fix Them | SitemapFixer',
  description: "A redirect chain is when URL A redirects to URL B which redirects to URL C. This wastes crawl budget, dilutes PageRank, and slows page load. Here is how to find and fix them.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/redirect-chains' },
};
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Redirect Chains</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Redirect Chains: How They Hurt SEO and How to Fix Them</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Find redirect issues in your sitemap</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Site</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        <p style={{ marginBottom: 24 }}>A redirect chain happens when a URL redirects to another URL, which redirects to yet another URL, creating a sequence of hops before reaching the final destination. For example: /old-page redirects to /temp-page which redirects to /new-page. Each hop adds latency, consumes crawl budget, and leaks a small amount of PageRank. Google recommends keeping redirects to a single hop wherever possible.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Why Redirect Chains Are a Problem</h2>
        <p style={{ marginBottom: 24 }}>Each redirect in a chain adds around 100-300ms of load time. For users on mobile or slow connections, a 3-hop chain can add nearly a second to page load. More critically for SEO: Google has historically reduced the PageRank passed through each redirect hop, meaning a long chain dilutes the link equity from external links. Google also stops following redirect chains that exceed about 5 hops — anything beyond that may not get indexed. Googlebot spends extra crawl budget following each redirect, leaving less for your actual content.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Common Causes</h2>
        <p style={{ marginBottom: 24 }}>Redirect chains usually accumulate over time. You migrate from HTTP to HTTPS — that is one redirect. Later you add www to non-www standardization — that is another. Later you restructure URLs — another hop added on top. The result is HTTP/old-url redirects to HTTPS/old-url redirects to HTTPS/new-url. Each migration adds a layer without anyone cleaning up the previous ones. CMS platforms can also create chains: a WordPress category rename creates a redirect, and if you had previous redirects to that category, you now have a chain.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>How to Find Redirect Chains</h2>
        <p style={{ marginBottom: 24 }}>The fastest method is Screaming Frog — run a crawl and filter by redirect chains in the Response Codes tab. You can also use curl to follow redirects manually: curl -L -s -o /dev/null -w "%{url_effective}
%{num_redirects}" yoursite.com/old-url. If you get a num_redirects value greater than 1, you have a chain. In Google Search Console, the Pages report under "Page with redirect" shows URLs in your sitemap that redirect, which is a signal to check for chains.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>How to Fix Redirect Chains</h2>
        <p style={{ marginBottom: 24 }}>The fix is to update every redirect in the chain to point directly to the final destination. Instead of A to B to C, make A go directly to C. Update your redirect rules in your .htaccess file, nginx config, or CDN redirect rules. Also update any internal links still pointing to intermediate URLs — link directly to the final URL. Check your sitemap: if any URLs in your sitemap redirect, update the sitemap to use the final destination URL directly. Sitemaps should never contain redirecting URLs.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Redirect Loops</h2>
        <p style={{ marginBottom: 24 }}>A redirect loop is when URL A redirects to URL B which redirects back to URL A. Browsers show an error like "The page is not redirecting properly." Loops usually happen due to misconfigured HTTPS redirects — for example, when both HTTP and HTTPS versions of the same URL redirect to each other. Fix by checking your SSL configuration and ensuring only the non-secure version redirects to the secure version, never the other way around.</p>
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Check your sitemap for redirect issues</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free — finds chains and loops in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>
    </div>
  );
}
