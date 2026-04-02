import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Ghost SEO: How to Optimize Your Ghost Publication for Google | SitemapFixer',
  description: "Ghost is built with SEO in mind. Here is how to configure Ghost meta tags, use its automatic sitemap, set up structured data, and optimize for Google rankings.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/ghost-seo' },
};
const sections = [
  { h: "Ghost SEO Defaults", d: "Ghost comes with strong SEO defaults out of the box. It generates a sitemap.xml automatically at yourpublication.com/sitemap.xml (and sitemap-authors.xml, sitemap-tags.xml, sitemap-pages.xml as sub-sitemaps). It adds canonical tags, Article schema for posts, structured data for the publication, and Open Graph tags on every page. Ghost uses a sitemap index file that references all child sitemaps — submit the index at /sitemap.xml to Google Search Console." },
  { h: "Configuring Post and Page SEO", d: "For each post or page, click the settings gear in the editor (top right). Under Meta data, set a custom Meta title (under 60 characters) and Meta description (under 155 characters). Under Facebook card and Twitter card, customize the social sharing preview title, description, and image. If you leave Meta data blank, Ghost uses the post title and excerpt automatically — these are usually good defaults, but custom meta tags give you more control." },
  { h: "Tags, Authors, and Archive SEO", d: "Ghost creates index pages for tags (/tag/tag-name) and authors (/author/author-name) automatically. These can be valuable SEO pages if they have enough content, or thin pages that dilute your index if they are sparse. Add descriptions to important tags (in Staff, then Tags, click a tag and add a description) — this creates unique content for the tag archive page. For low-value tags with few posts, consider noindexing them via Ghost settings or a custom theme." },
  { h: "Ghost Sitemap Customization", d: "Ghost sitemaps are automatic and well-structured. The main limitation is you cannot exclude individual pages from the sitemap through the admin interface without a theme modification. To exclude a page or post, you need to add a noindex meta tag via a theme template edit or a custom code injection. In Ghost Admin under Settings, then Code injection, you can add head code globally or per-post. Add a noindex meta tag in the post-specific head code injection for any page you want excluded." },
  { h: "Ghost Speed and Performance", d: "Ghost is built on Node.js and is significantly faster than WordPress for most publishing use cases. Ghost on Ghost Pro (managed hosting) delivers excellent Core Web Vitals performance. Self-hosted Ghost speed depends on your server configuration. Key optimizations: enable image optimization in Ghost settings (automatic resizing and WebP conversion), use a CDN for static assets, and choose a lightweight theme — complex themes with heavy JavaScript degrade Ghost's baseline performance." },
];
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Ghost SEO</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Ghost SEO: Built-in Features and How to Get the Most From Them</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Validate your Ghost sitemap free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Check My Sitemap</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        {sections.map(({ h, d }) => (
          <div key={h} style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 10 }}>{h}</h2>
            <p style={{ margin: 0 }}>{d}</p>
          </div>
        ))}
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Validate your Ghost sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free — checks all URLs in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Check My Sitemap Free</a>
      </div>
    </div>
  );
}
