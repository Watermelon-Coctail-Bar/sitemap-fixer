import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Gatsby Sitemap: How to Generate and Configure It | SitemapFixer',
  description: "Gatsby doesn't include a sitemap by default. Here is how to add gatsby-plugin-sitemap, configure it for dynamic content, and fix common issues.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/gatsby-sitemap' },
};
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Gatsby Sitemap</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Gatsby Sitemap: Setup and Configuration Guide</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Validate your Gatsby sitemap free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Check My Sitemap</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        <p style={{ marginBottom: 24 }}>Gatsby does not generate a sitemap out of the box. You need to add the gatsby-plugin-sitemap plugin, which hooks into the build process and generates your sitemap.xml from all the pages Gatsby knows about. The sitemap is generated at build time and served as a static file.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Installing gatsby-plugin-sitemap</h2>
        <p style={{ marginBottom: 16 }}>Install the plugin: npm install gatsby-plugin-sitemap. Then add it to gatsby-config.js:</p>
        <div style={{ background: '#0a0a0f', borderRadius: 10, padding: '20px 24px', marginBottom: 24, fontFamily: 'monospace', fontSize: 13, color: '#e5e7eb', lineHeight: 1.7, overflowX: 'auto' }}>
          <div style={{ color: '#9ca3af', marginBottom: 8 }}>// gatsby-config.js</div>
          <div>module.exports = {"{"}</div>
          <div style={{ paddingLeft: 20 }}>siteMetadata: {"{"}</div>
          <div style={{ paddingLeft: 40 }}>siteUrl: {"'https://yoursite.com'"},</div>
          <div style={{ paddingLeft: 20 }}>{"}"} ,</div>
          <div style={{ paddingLeft: 20 }}>plugins: [</div>
          <div style={{ paddingLeft: 40 }}>"gatsby-plugin-sitemap",</div>
          <div style={{ paddingLeft: 20 }}>],</div>
          <div>{"}"}</div>
        </div>
        <p style={{ marginBottom: 24 }}>After adding the plugin and running gatsby build, your sitemap will be at yoursite.com/sitemap-index.xml. The siteUrl in siteMetadata is required - without it the plugin cannot construct absolute URLs and will fail silently or use relative paths.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Excluding Pages from the Sitemap</h2>
        <p style={{ marginBottom: 16 }}>To exclude specific pages, use the excludes option in the plugin config:</p>
        <div style={{ background: '#0a0a0f', borderRadius: 10, padding: '20px 24px', marginBottom: 24, fontFamily: 'monospace', fontSize: 13, color: '#e5e7eb', lineHeight: 1.7, overflowX: 'auto' }}>
          <div>{"{"}</div>
          <div style={{ paddingLeft: 20 }}>resolve: "gatsby-plugin-sitemap",</div>
          <div style={{ paddingLeft: 20 }}>options: {"{"}</div>
          <div style={{ paddingLeft: 40 }}>excludes: ["/admin/*", "/thank-you", "/404"],</div>
          <div style={{ paddingLeft: 20 }}>{"}"}</div>
          <div>{"}"}</div>
        </div>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Including Dynamic Pages</h2>
        <p style={{ marginBottom: 24 }}>Pages created programmatically using createPage in gatsby-node.js are automatically included in the sitemap if they are in the pages query. For pages sourced from a CMS like Contentful or Sanity, the plugin queries all pages via GraphQL and includes them. If your dynamic pages are missing from the sitemap, check that the GraphQL query in the plugin config includes those page types. You may need to customize the query option to explicitly include CMS-sourced pages.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Common Gatsby Sitemap Problems</h2>
        <p style={{ marginBottom: 12 }}><strong>Sitemap only generated in production build:</strong> gatsby-plugin-sitemap only runs during gatsby build, not gatsby develop. You cannot test the sitemap locally in dev mode. Run gatsby build and gatsby serve to check the sitemap locally.</p>
        <p style={{ marginBottom: 12 }}><strong>Wrong siteUrl:</strong> If your siteUrl in gatsby-config.js points to localhost or a staging URL, your sitemap will contain the wrong base URL. Set it to your production domain and use environment variables for local development.</p>
        <p style={{ marginBottom: 24 }}><strong>Plugin version mismatch:</strong> gatsby-plugin-sitemap v5+ (for Gatsby v4+) has a different API than earlier versions. If you upgraded Gatsby, check the plugin documentation for API changes - the output file changed from sitemap.xml to sitemap-index.xml in v5.</p>
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Validate your Gatsby sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free - checks every URL in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Check My Sitemap Free</a>
      </div>
    </div>
  );
}
