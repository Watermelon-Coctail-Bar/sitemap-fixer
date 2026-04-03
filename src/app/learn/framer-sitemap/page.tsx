import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Framer Sitemap: How It Works and How to Submit It | SitemapFixer',
  description: "Framer automatically generates your sitemap. Here is where to find it, how to exclude pages from indexing, and how to submit it to Google Search Console.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/framer-sitemap' },
};
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Framer Sitemap</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Framer Sitemap: Automatic Generation and SEO Control</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Validate your Framer sitemap free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Check My Sitemap</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        <p style={{ marginBottom: 24 }}>Framer generates your sitemap automatically and keeps it updated as you publish changes. Your sitemap is at yoursite.com/sitemap.xml. You do not need to configure anything for the sitemap to work - Framer handles it as part of its publishing infrastructure.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>What Framer Includes in the Sitemap</h2>
        <p style={{ marginBottom: 24 }}>Framer includes all published pages in the sitemap by default. This includes your main pages, CMS collection pages (if you use Framer CMS), and any pages added through the Pages panel. Hidden pages in the navigation are still included if they are set to be indexed. Draft pages are excluded.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Controlling Page Indexing in Framer</h2>
        <p style={{ marginBottom: 24 }}>To exclude a page from the sitemap and search engines, open the page in Framer, go to Page Settings (click the gear icon on the page in the Pages panel), and scroll to the SEO section. Toggle off Search Engine Indexing. This adds a noindex tag to the page and removes it from the sitemap. For CMS collection items, you can set the indexing behavior in the CMS collection settings.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Submitting to Google Search Console</h2>
        <p style={{ marginBottom: 24 }}>Framer has a built-in Google Search Console integration. Go to your Framer project settings, then the SEO tab, and connect your Google Search Console account. This verifies your site and lets Framer submit your sitemap automatically. Alternatively, verify your site manually using the HTML tag method - add the verification meta tag in Framer under Site Settings, then Custom Code, in the head section.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Framer CMS and Sitemap</h2>
        <p style={{ marginBottom: 24 }}>If you use Framer CMS for blog posts or other content, each published CMS item gets its own URL and appears in the sitemap automatically. When you publish or unpublish a CMS item, the sitemap updates within a few minutes. The sitemap uses the canonical URL of each page, which respects any custom URL slugs you have set in the CMS.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Common Framer Sitemap Issues</h2>
        <p style={{ marginBottom: 12 }}><strong>Using framer.app subdomain instead of custom domain:</strong> If you have not connected a custom domain, your site runs on yourname.framer.app. Sitemaps on subdomain URLs are valid, but for SEO you should always use a custom domain. Connect your domain in Framer project settings before submitting to Google Search Console.</p>
        <p style={{ marginBottom: 24 }}><strong>Sitemap not updating after publish:</strong> Framer updates the sitemap when you publish. If you have just connected a custom domain or made structural changes, republish your site from the Framer editor. The sitemap regenerates as part of the publish process and typically updates within a few minutes.</p>
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Validate your Framer sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free - checks every URL in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Check My Sitemap Free</a>
      </div>
    </div>
  );
}
