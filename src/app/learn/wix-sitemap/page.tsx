import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Wix Sitemap: How It Works and How to Submit It | SitemapFixer',
  description: "Wix automatically generates your sitemap. Learn where to find it, how to control what gets included, common problems, and how to submit it to Google.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/wix-sitemap' },
};
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Wix Sitemap</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Wix Sitemap: How It Works and How to Fix It</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Validate your Wix sitemap free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Check My Sitemap</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        <p style={{ marginBottom: 24 }}>Wix generates your sitemap automatically and hosts it at yoursite.com/sitemap.xml. You do not need to create or manage it manually. The sitemap updates when you add, remove, or publish pages in your Wix editor.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Where to Find Your Wix Sitemap</h2>
        <p style={{ marginBottom: 24 }}>Your sitemap is at yoursite.com/sitemap.xml. If you have a connected custom domain, use that domain, not the wixsite.com subdomain URL. You can also find it by going to your Wix dashboard, clicking Marketing and SEO, then SEO Tools, and looking for the sitemap section.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Controlling What Wix Includes in the Sitemap</h2>
        <p style={{ marginBottom: 24 }}>In the Wix editor, you can control which individual pages appear in the sitemap. Click on any page in the Pages panel, then go to the SEO settings for that page. You will see a toggle for indexing - turning this off removes the page from the sitemap and adds a noindex tag. For blog posts, go to Blog in your dashboard and manage the SEO settings per post.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>How to Submit Your Wix Sitemap to Google</h2>
        <p style={{ marginBottom: 24 }}>The simplest way is to connect your site directly through Wix. Go to your Wix dashboard, click Marketing and SEO, then SEO Setup Checklist. Wix walks you through connecting to Google Search Console and submitting your sitemap automatically. If you prefer to do it manually, add yoursite.com/sitemap.xml in Google Search Console under Sitemaps.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Common Wix Sitemap Problems</h2>

        <h3 style={{ fontSize: 20, fontWeight: 700, color: '#0a0a0f', marginTop: 32, marginBottom: 10 }}>Wix subdomain instead of custom domain</h3>
        <p style={{ marginBottom: 24 }}>If you submit your wixsite.com URL instead of your custom domain, Google may index the wrong version of your site. Always use your custom domain in Search Console and when submitting your sitemap. If you see your wixsite.com URL being indexed, set up a 301 redirect from the subdomain to your custom domain in your Wix domain settings.</p>

        <h3 style={{ fontSize: 20, fontWeight: 700, color: '#0a0a0f', marginTop: 32, marginBottom: 10 }}>Hidden pages included in sitemap</h3>
        <p style={{ marginBottom: 24 }}>Pages hidden from your site navigation may still appear in the sitemap if they are set to be indexed. Hidden in navigation does not mean noindex. Check each page you want excluded and explicitly turn off indexing in the page SEO settings.</p>

        <h3 style={{ fontSize: 20, fontWeight: 700, color: '#0a0a0f', marginTop: 32, marginBottom: 10 }}>Dynamic pages not appearing</h3>
        <p style={{ marginBottom: 24 }}>If you use Wix dynamic pages connected to a database, not all items may appear in the sitemap by default. Go to your dynamic page settings and make sure SEO indexing is enabled for your collection items. You may also need to manually trigger a sitemap refresh by making a small edit to any page and republishing.</p>

        <h3 style={{ fontSize: 20, fontWeight: 700, color: '#0a0a0f', marginTop: 32, marginBottom: 10 }}>Sitemap not updating after changes</h3>
        <p style={{ marginBottom: 24 }}>Wix sitemaps can take time to reflect changes, especially after publishing or unpublishing pages. If your sitemap is outdated, republish your site by clicking Publish in the Wix editor. This forces a sitemap refresh. Google typically recrawls sitemaps within a few days of resubmission in Search Console.</p>
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Check your Wix sitemap for errors</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free - finds issues in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Sitemap Free</a>
      </div>
    </div>
  );
}
