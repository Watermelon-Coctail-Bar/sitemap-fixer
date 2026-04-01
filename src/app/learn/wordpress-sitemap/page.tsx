import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'WordPress Sitemap: Setup, Fix, and Submit Guide | SitemapFixer',
  description: 'Everything about WordPress sitemaps — how to enable them with Yoast, RankMath, or built-in WordPress, fix common errors, and submit to Google Search Console.',
  alternates: { canonical: 'https://sitemapfixer.com/learn/wordpress-sitemap' },
  openGraph: { title: 'WordPress Sitemap Guide', description: 'How to set up, fix, and submit your WordPress sitemap.', url: 'https://sitemapfixer.com/learn/wordpress-sitemap', type: 'article' },
};
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>WordPress Sitemap</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>WordPress Sitemap: Complete Setup and Fix Guide</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Validate your WordPress sitemap free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Check My Sitemap</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        <p style={{ marginBottom: 24 }}>WordPress generates an XML sitemap automatically if you are using a modern version (5.5 or newer) or an SEO plugin. The default location is yoursite.com/wp-sitemap.xml. If you use Yoast SEO, it is at yoursite.com/sitemap_index.xml. RankMath also uses /sitemap_index.xml.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Option 1: WordPress Built-in Sitemap (No Plugin)</h2>
        <p style={{ marginBottom: 24 }}>Since WordPress 5.5, a basic sitemap is included by default. Go to yoursite.com/wp-sitemap.xml to check if it exists. It is automatically updated when you publish or update content. The limitation is that it does not give you control over what is included — it includes all public post types and taxonomies. If you need to exclude pages or prioritize certain content, use a plugin instead.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Option 2: Yoast SEO Sitemap</h2>
        <p style={{ marginBottom: 24 }}>Yoast is the most popular WordPress SEO plugin and its sitemap is more configurable than the built-in one. After installing Yoast, go to Yoast SEO in your WordPress dashboard, then select Features, and make sure XML Sitemaps is toggled on. Your sitemap will be at yoursite.com/sitemap_index.xml. This is a sitemap index that links to individual sitemaps for posts, pages, categories, and other post types. In Yoast settings you can exclude specific post types, taxonomies, or individual pages from the sitemap.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Option 3: RankMath Sitemap</h2>
        <p style={{ marginBottom: 24 }}>RankMath is a newer SEO plugin that many users prefer for its interface. Go to RankMath in your dashboard, then Sitemap Settings. You can configure which post types and taxonomies to include, set the number of links per sitemap, and enable image sitemaps and video sitemaps. Your sitemap will be at yoursite.com/sitemap_index.xml.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Common WordPress Sitemap Problems</h2>

        <h3 style={{ fontSize: 20, fontWeight: 700, color: '#0a0a0f', marginTop: 32, marginBottom: 10 }}>Sitemap returns 404</h3>
        <p style={{ marginBottom: 24 }}>If your sitemap URL returns a 404, the most common cause is a permalink structure issue. Go to Settings, then Permalinks in your WordPress dashboard, and click Save Changes without changing anything. This flushes the rewrite rules and often fixes the 404. If you are using a plugin, deactivate and reactivate it.</p>

        <h3 style={{ fontSize: 20, fontWeight: 700, color: '#0a0a0f', marginTop: 32, marginBottom: 10 }}>Multiple sitemaps conflicting</h3>
        <p style={{ marginBottom: 24 }}>If you have both Yoast and RankMath installed, or Yoast and the WordPress built-in sitemap both active, Google gets conflicting signals. Only use one sitemap source. Disable the WordPress core sitemap if you are using a plugin by adding this to your functions.php: add_filter( "wp_sitemaps_enabled", "__return_false" );</p>

        <h3 style={{ fontSize: 20, fontWeight: 700, color: '#0a0a0f', marginTop: 32, marginBottom: 10 }}>Noindex pages appearing in sitemap</h3>
        <p style={{ marginBottom: 24 }}>Pages with a noindex meta tag should not appear in your sitemap. Yoast excludes noindex pages from the sitemap by default. If you are using the built-in sitemap, noindex pages may still appear — this is a known limitation. Use a plugin to control this properly.</p>

        <h3 style={{ fontSize: 20, fontWeight: 700, color: '#0a0a0f', marginTop: 32, marginBottom: 10 }}>Sitemap too large</h3>
        <p style={{ marginBottom: 24 }}>If your site has thousands of URLs, your sitemap will automatically be split into multiple files linked from a sitemap index. This is handled automatically by Yoast and RankMath. The default limit is 1,000 URLs per sitemap file in Yoast (configurable in settings).</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>How to Submit Your WordPress Sitemap to Google</h2>
        <p style={{ marginBottom: 24 }}>Go to Google Search Console (search.google.com/search-console). Select your property, then click Sitemaps in the left menu. Enter your sitemap URL — typically sitemap_index.xml or wp-sitemap.xml — and click Submit. Google will fetch and process the sitemap within 24-48 hours. Check back to see the status and any errors it found.</p>
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Check your WordPress sitemap for errors</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free analysis — checks every URL in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Sitemap Free</a>
      </div>
      <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
        <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Related guides</div>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <li><a href="/learn/sitemap-not-working" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Sitemap Not Working</a></li>
          <li><a href="/learn/google-search-console-sitemap" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Submit to Google</a></li>
          <li><a href="/learn/sitemap-best-practices" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Sitemap Best Practices</a></li>
        </ul>
      </div>
    </div>
  );
}
