import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Hugo Sitemap: How It Works and How to Configure It | SitemapFixer',
  description: "Hugo generates a sitemap automatically at build time. Learn how to configure the baseURL, exclude pages, customize the output, and submit it to Google.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/hugo-sitemap' },
};
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Hugo Sitemap</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Hugo Sitemap: Built-in Generation and Configuration</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Validate your Hugo sitemap free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Check My Sitemap</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        <p style={{ marginBottom: 24 }}>Hugo generates a sitemap.xml automatically when you run hugo to build your site. No plugins or additional packages are needed. The sitemap is placed in the root of your public/ directory and includes all pages and posts by default. The critical requirement is that your baseURL in hugo.toml (or config.toml) must be set to your production domain - without it, Hugo generates relative URLs which are invalid in sitemaps.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Setting Your baseURL</h2>
        <div style={{ background: '#0a0a0f', borderRadius: 10, padding: '20px 24px', marginBottom: 24, fontFamily: 'monospace', fontSize: 13, color: '#e5e7eb', lineHeight: 1.7 }}>
          <div style={{ color: '#9ca3af', marginBottom: 8 }}># hugo.toml</div>
          <div>baseURL = "https://yoursite.com/"</div>
          <div>languageCode = "en-us"</div>
          <div>title = "Your Site"</div>
        </div>
        <p style={{ marginBottom: 24 }}>The trailing slash in baseURL is important - Hugo concatenates paths directly, so without it you get malformed URLs like https://yoursite.comsomepage instead of https://yoursite.com/somepage.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Configuring Sitemap Options</h2>
        <div style={{ background: '#0a0a0f', borderRadius: 10, padding: '20px 24px', marginBottom: 24, fontFamily: 'monospace', fontSize: 13, color: '#e5e7eb', lineHeight: 1.7 }}>
          <div style={{ color: '#9ca3af', marginBottom: 8 }}># hugo.toml</div>
          <div>[sitemap]</div>
          <div style={{ paddingLeft: 20 }}>changefreq = "weekly"</div>
          <div style={{ paddingLeft: 20 }}>priority = 0.5</div>
          <div style={{ paddingLeft: 20 }}>filename = "sitemap.xml"</div>
        </div>
        <p style={{ marginBottom: 24 }}>You can override changefreq and priority at the page level by adding them to a page front matter. For example, adding priority = 1.0 to your homepage front matter gives it the highest priority in the sitemap regardless of the global default.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Excluding Pages from the Hugo Sitemap</h2>
        <p style={{ marginBottom: 24 }}>To exclude a specific page, add sitemap to the page front matter and set disable to true. In YAML front matter: sitemap: disable: true. In TOML front matter: [sitemap] disable = true. For draft pages, Hugo automatically excludes them from the sitemap (drafts are not built in production unless you pass --buildDrafts). For entire sections, you can customize the sitemap template in layouts/sitemap.xml to filter out specific section types.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Common Hugo Sitemap Issues</h2>
        <p style={{ marginBottom: 12 }}><strong>Sitemap showing localhost URLs:</strong> Your baseURL is set to localhost or empty. Always set baseURL to your production URL before deploying. Use environment variables or build flags: HUGO_BASEURL=https://yoursite.com hugo.</p>
        <p style={{ marginBottom: 24 }}><strong>Taxonomy pages bloating the sitemap:</strong> Hugo includes tag and category pages in the sitemap by default. If you have hundreds of tags, this creates a large number of thin pages in your sitemap. Either noindex taxonomy pages using a custom robots meta in your taxonomy templates, or disable taxonomy sitemap entries in your sitemap template.</p>
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Validate your Hugo sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free - checks every URL in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Check My Sitemap Free</a>
      </div>
    </div>
  );
}
