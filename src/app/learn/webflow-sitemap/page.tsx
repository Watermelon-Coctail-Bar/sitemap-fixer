import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Webflow Sitemap: How It Works and How to Submit It | SitemapFixer',
  description: "Webflow automatically generates your sitemap. Learn where to find it, how to exclude pages, and how to submit it to Google Search Console.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/webflow-sitemap' },
};
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Webflow Sitemap</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Webflow Sitemap: Setup, Control, and Submission</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Validate your Webflow sitemap free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Check My Sitemap</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        <p style={{ marginBottom: 24 }}>Webflow generates your sitemap automatically and serves it at yoursite.com/sitemap.xml. It updates whenever you publish changes to your site. The sitemap includes all pages that are set to be indexed, including CMS collection pages if you use Webflow CMS.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>How to Control What Webflow Puts in the Sitemap</h2>
        <p style={{ marginBottom: 24 }}>In the Webflow Designer, select any page in the Pages panel. Click the gear icon next to the page name to open Page Settings. Scroll down to SEO Settings, where you will find an option to Exclude from sitemap. Checking this removes the page from the sitemap and adds a noindex tag. For CMS collection pages, you can set the indexing behavior at the collection level - open your Collection Settings and look for the SEO section.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Submitting Your Webflow Sitemap to Google</h2>
        <p style={{ marginBottom: 24 }}>Go to Google Search Console and add your Webflow site as a property. The easiest verification method for Webflow is the HTML tag method - copy the verification meta tag from Search Console, open your Webflow project settings, go to the Custom Code tab, and paste the meta tag in the Head Code field. Once verified, go to Sitemaps and submit sitemap.xml.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Common Webflow Sitemap Problems</h2>

        <h3 style={{ fontSize: 20, fontWeight: 700, color: '#0a0a0f', marginTop: 32, marginBottom: 10 }}>Site using webflow.io subdomain instead of custom domain</h3>
        <p style={{ marginBottom: 24 }}>If you have not connected a custom domain, your site is at yourname.webflow.io and the sitemap uses that subdomain. Connect a custom domain in your Webflow project settings before submitting to Search Console. Once you connect a domain and publish, Webflow automatically updates the sitemap URLs to use your custom domain.</p>

        <h3 style={{ fontSize: 20, fontWeight: 700, color: '#0a0a0f', marginTop: 32, marginBottom: 10 }}>CMS items not appearing in sitemap</h3>
        <p style={{ marginBottom: 24 }}>CMS collection items (blog posts, products, portfolio items) only appear in the sitemap if: the collection has a template page, the items are published (not draft), and indexing is not disabled at the collection level. Check your Collection Settings and make sure SEO indexing is enabled. Also verify that your CMS template page is not set to be excluded from the sitemap.</p>

        <h3 style={{ fontSize: 20, fontWeight: 700, color: '#0a0a0f', marginTop: 32, marginBottom: 10 }}>Sitemap not updating after publishing</h3>
        <p style={{ marginBottom: 24 }}>Webflow regenerates your sitemap when you click Publish in the Designer. If you add new content via the Webflow CMS editor (not the Designer), the sitemap should update automatically within a few minutes. If you notice the sitemap is outdated, try making a minor change in the Designer and republishing - this forces a full sitemap regeneration.</p>

        <h3 style={{ fontSize: 20, fontWeight: 700, color: '#0a0a0f', marginTop: 32, marginBottom: 10 }}>Password-protected pages in sitemap</h3>
        <p style={{ marginBottom: 24 }}>If you use Webflow Memberships or password-protect specific pages, those pages may still appear in the sitemap with a noindex tag. Google should honor the noindex tag, but it is cleaner to also exclude them from the sitemap in your page SEO settings to avoid any contradiction.</p>
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Check your Webflow sitemap for issues</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free - finds errors in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Sitemap Free</a>
      </div>
    </div>
  );
}
