import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Ghost Sitemap: Where to Find It and How to Fix Problems | SitemapFixer',
  description: "Ghost CMS generates your sitemap automatically at /sitemap.xml. Learn what it includes, how to control indexing, and how to submit it to Google.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/ghost-sitemap' },
};
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Ghost Sitemap</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Ghost Sitemap: How It Works and How to Submit It</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Validate your Ghost sitemap free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Check My Sitemap</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        <p style={{ marginBottom: 24 }}>Ghost CMS includes a built-in sitemap that is generated automatically and updated in real time as you publish content. Your sitemap is at yoursite.com/sitemap.xml and is a sitemap index that links to separate sitemaps for posts, pages, tags, and authors.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>What the Ghost Sitemap Includes</h2>
        <p style={{ marginBottom: 24 }}>Ghost generates four child sitemaps linked from the index: sitemap-posts.xml (all published posts), sitemap-pages.xml (static pages), sitemap-tags.xml (tag archive pages), and sitemap-authors.xml (author pages). Each is automatically updated when content is added, edited, or deleted. Draft posts and scheduled posts that have not published yet are excluded.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Controlling What Ghost Indexes</h2>
        <p style={{ marginBottom: 24 }}>For individual posts and pages: in the Ghost editor, open the Post Settings panel on the right side. Scroll down to find the Meta Data section. If you want to exclude a specific post from search engines, add a custom meta tag via Code Injection in the post header: meta name="robots" content="noindex". Ghost does not have a built-in noindex toggle in the admin UI for individual posts, so this requires code injection or a theme-level solution. For tag and author pages: if you want to prevent all tag pages from being indexed, you can add a noindex tag to your theme template files.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Submitting to Google Search Console</h2>
        <p style={{ marginBottom: 24 }}>Go to Google Search Console and verify ownership of your Ghost site. The easiest verification method is the HTML tag - add it to your Ghost settings under Code Injection in the Site Header field. Once verified, go to Sitemaps and submit sitemap.xml. Google will discover all child sitemaps automatically from the index.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Common Ghost Sitemap Problems</h2>

        <h3 style={{ fontSize: 20, fontWeight: 700, color: '#0a0a0f', marginTop: 32, marginBottom: 10 }}>Ghost Pro vs self-hosted differences</h3>
        <p style={{ marginBottom: 24 }}>Ghost Pro (the hosted service) handles everything automatically including sitemap generation and SSL. Self-hosted Ghost requires you to ensure your Ghost instance is properly configured with the correct URL in config.production.json. If your config URL does not match your actual domain, all sitemap URLs will be wrong. Check your Ghost config and make sure url matches your live domain exactly including https://.</p>

        <h3 style={{ fontSize: 20, fontWeight: 700, color: '#0a0a0f', marginTop: 32, marginBottom: 10 }}>Author and tag pages creating thin content issues</h3>
        <p style={{ marginBottom: 24 }}>Ghost indexes author and tag pages by default. On smaller sites, these pages may have very little unique content, which can hurt your overall site quality score in Google. Consider whether you want author and tag pages indexed. If not, add a noindex directive to those template files in your Ghost theme, or use the Ghost Code Injection settings at the site level to add a canonical tag pointing to your homepage for these pages.</p>

        <h3 style={{ fontSize: 20, fontWeight: 700, color: '#0a0a0f', marginTop: 32, marginBottom: 10 }}>Sitemap not updating after content changes</h3>
        <p style={{ marginBottom: 24 }}>Ghost sitemaps update in real time - when you publish or update a post, the sitemap reflects this immediately. If your sitemap appears outdated, first check that your Ghost instance is running correctly with ghost status (self-hosted). On Ghost Pro, changes take effect immediately after publishing. If the issue persists, try restarting Ghost with ghost restart on self-hosted instances.</p>
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Validate your Ghost sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free - checks all URLs in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Sitemap Free</a>
      </div>
    </div>
  );
}
