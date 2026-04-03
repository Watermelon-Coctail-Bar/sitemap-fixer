import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Squarespace Sitemap: How It Works and Common Fixes | SitemapFixer',
  description: "Squarespace generates your sitemap automatically. Learn where it is, what it includes, why pages might be missing, and how to submit it to Google.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/squarespace-sitemap' },
};
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Squarespace Sitemap</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Squarespace Sitemap: Location, Contents, and Fixes</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Validate your Squarespace sitemap free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Check My Sitemap</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        <p style={{ marginBottom: 24 }}>Squarespace automatically generates a sitemap for every site and keeps it updated as you add or remove content. Your sitemap is always at yoursite.com/sitemap.xml. You do not need to install anything or configure it manually.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>What Squarespace Includes in the Sitemap</h2>
        <p style={{ marginBottom: 24 }}>Squarespace includes all published pages, blog posts, products (if you have a store), and portfolio items. It excludes pages that are set to not be indexed in their SEO settings. Draft pages are excluded. Password-protected pages are excluded. Squarespace also excludes some system pages like your checkout and order confirmation pages.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>How to Control What Squarespace Indexes</h2>
        <p style={{ marginBottom: 24 }}>For individual pages: in the Pages panel, click the three dots next to any page, go to SEO, and toggle Hide Page from Search Results. This adds a noindex tag and removes the page from the sitemap. For blog posts, open the post and go to Options, then SEO, and disable indexing there. For entire page types, go to Settings, then SEO, where you can disable indexing for categories like galleries or events if you do not want them indexed.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Submitting Your Squarespace Sitemap to Google</h2>
        <p style={{ marginBottom: 24 }}>Go to Google Search Console, select your property, and click Sitemaps. Enter sitemap.xml and submit. Squarespace also has a built-in Google Search Console connection - go to Marketing, then Google Search Keywords in Squarespace to connect your account and track impressions directly in the platform.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Common Squarespace Sitemap Problems</h2>

        <h3 style={{ fontSize: 20, fontWeight: 700, color: '#0a0a0f', marginTop: 32, marginBottom: 10 }}>Pages not appearing in sitemap</h3>
        <p style={{ marginBottom: 24 }}>If a published page is missing from your sitemap, check two things: first, that the page is not set to Hide Page from Search Results in its SEO settings; second, that it is not in a folder or navigation section that is hidden. Also check that the page URL is not a duplicate of another page - Squarespace will not add duplicate paths to the sitemap.</p>

        <h3 style={{ fontSize: 20, fontWeight: 700, color: '#0a0a0f', marginTop: 32, marginBottom: 10 }}>Site under password protection</h3>
        <p style={{ marginBottom: 24 }}>If your Squarespace site has a site-wide password (Settings, then Site Availability), the entire site is blocked from Google. The sitemap will return a redirect to the password page. Remove the site-wide password before submitting to Google. This is separate from page-level passwords, which only affect individual pages.</p>

        <h3 style={{ fontSize: 20, fontWeight: 700, color: '#0a0a0f', marginTop: 32, marginBottom: 10 }}>Old URLs still being indexed after URL changes</h3>
        <p style={{ marginBottom: 24 }}>When you change a page URL in Squarespace, it automatically creates a 301 redirect from the old URL to the new one. However, the old URL stays in Google index until the next crawl. Squarespace handles this correctly, but it can take weeks for Google to update. You can speed this up by requesting reindexing of the new URL in Google Search Console URL Inspection.</p>
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Check your Squarespace sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free - finds errors in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Sitemap Free</a>
      </div>
    </div>
  );
}
