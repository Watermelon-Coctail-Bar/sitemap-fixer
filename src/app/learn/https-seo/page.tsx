import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'HTTPS SEO: Why It Matters and How to Migrate Correctly | SitemapFixer',
  description: "HTTPS is a confirmed Google ranking signal. Here is how HTTPS affects SEO, how to migrate from HTTP to HTTPS without losing rankings, and common migration mistakes.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/https-seo' },
};
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>HTTPS SEO</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>HTTPS SEO: Why It Matters and How to Migrate Without Losing Rankings</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your site for HTTPS issues</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Site Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        <p style={{ marginBottom: 24 }}>Google confirmed HTTPS as a ranking signal in 2014 and has steadily increased its weight since. In 2018, Chrome began marking HTTP sites as "Not Secure" in the address bar. Today, virtually every site that wants to rank well needs HTTPS. The good news: migrating is straightforward on most hosting platforms, and when done correctly, you should see no ranking loss.</p>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>How HTTPS Affects SEO</h2>
        <p style={{ marginBottom: 24 }}>HTTPS is a lightweight ranking signal - it gives a slight boost over equivalent HTTP pages. More important for SEO are the indirect effects: Chrome's "Not Secure" warning reduces click-through rate on HTTP sites in search results, users are less likely to complete forms or purchases on non-secure pages (higher bounce rate), and some browsers block HTTP resources loaded on HTTPS pages (mixed content), which can break functionality and deter links.</p>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>How to Migrate from HTTP to HTTPS</h2>
        <p style={{ marginBottom: 12 }}><strong>Step 1 - Install SSL certificate:</strong> Most hosts offer free SSL via Let's Encrypt. In cPanel, find SSL/TLS and install. On Cloudflare, enable HTTPS in SSL settings. On Vercel, Netlify, and similar platforms, HTTPS is automatic.</p>
        <p style={{ marginBottom: 12 }}><strong>Step 2 - Set up 301 redirects:</strong> Redirect every HTTP URL to its HTTPS equivalent. In Apache, add to .htaccess: RewriteEngine On / RewriteCond %{"{HTTPS}"} off / RewriteRule ^ https://%{"{HTTP_HOST}"}%{"{REQUEST_URI}"} [L,R=301]. In Nginx, add a server block that returns 301 for all HTTP requests.</p>
        <p style={{ marginBottom: 12 }}><strong>Step 3 - Update your canonical tags:</strong> Change all canonical tags from http:// to https://. Update your sitemap to use HTTPS URLs only. Update your Google Search Console property - add a new HTTPS property and resubmit your sitemap.</p>
        <p style={{ marginBottom: 24 }}><strong>Step 4 - Fix mixed content:</strong> After migrating, check for HTTP resources (images, scripts, stylesheets) still loaded over HTTP on your now-HTTPS pages. Use Chrome DevTools Network tab and filter by http:// to find them. Update each reference to HTTPS.</p>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Common HTTPS Migration Mistakes</h2>
        <p style={{ marginBottom: 12 }}><strong>Using 302 instead of 301:</strong> A 302 redirect from HTTP to HTTPS tells Google the move is temporary. Use 301 - permanent. This is the single most common mistake and it means PageRank from HTTP backlinks does not fully transfer.</p>
        <p style={{ marginBottom: 12 }}><strong>Not updating internal links:</strong> Internal links still pointing to HTTP create redirect hops and slow crawl. Do a find-and-replace across your database or CMS to update all internal links to HTTPS.</p>
        <p style={{ marginBottom: 24 }}><strong>Forgetting Search Console:</strong> Google Search Console treats http:// and https:// as completely different sites. Add your HTTPS property, verify it, and resubmit your sitemap. Check the HTTPS property for any crawl errors after migration.</p>
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Check your sitemap for HTTPS issues</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free - finds mixed content and HTTP URLs in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>
    </div>
  );
}
