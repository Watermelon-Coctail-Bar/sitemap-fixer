import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Nuxt Sitemap: How to Add and Configure @nuxtjs/sitemap | SitemapFixer',
  description: "How to generate an XML sitemap in Nuxt 3 using the @nuxtjs/sitemap module. Configuration, dynamic routes, and common problems explained.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/nuxt-sitemap' },
};
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Nuxt Sitemap</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Nuxt Sitemap: Using @nuxtjs/sitemap in Nuxt 3</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Validate your Nuxt sitemap free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Check My Sitemap</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        <p style={{ marginBottom: 24 }}>Nuxt does not include a sitemap by default. The standard solution is the @nuxtjs/sitemap module, which integrates tightly with Nuxt 3 and automatically discovers your routes, including dynamic ones. It serves the sitemap at runtime (not just at build time), which means it stays current with CMS content without requiring a rebuild.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Installation and Basic Setup</h2>
        <p style={{ marginBottom: 16 }}>Install: npx nuxi module add sitemap. Then configure in nuxt.config.ts:</p>
        <div style={{ background: '#0a0a0f', borderRadius: 10, padding: '20px 24px', marginBottom: 24, fontFamily: 'monospace', fontSize: 13, color: '#e5e7eb', lineHeight: 1.7, overflowX: 'auto' }}>
          <div style={{ color: '#9ca3af', marginBottom: 8 }}>// nuxt.config.ts</div>
          <div>export default defineNuxtConfig({"{"}</div>
          <div style={{ paddingLeft: 20 }}>modules: ["@nuxtjs/sitemap"],</div>
          <div style={{ paddingLeft: 20 }}>site: {"{"}</div>
          <div style={{ paddingLeft: 40 }}>url: "https://yoursite.com",</div>
          <div style={{ paddingLeft: 40 }}>name: "Your Site Name",</div>
          <div style={{ paddingLeft: 20 }}>{"}"},</div>
          <div>{"}"});</div>
        </div>
        <p style={{ marginBottom: 24 }}>The module reads the site.url config to generate absolute URLs. Static routes from your pages/ directory are discovered automatically. The sitemap is served at /sitemap.xml (or /sitemap_index.xml for multi-sitemap setups).</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Adding Dynamic Routes</h2>
        <p style={{ marginBottom: 16 }}>For dynamic routes (like /blog/[slug]), provide a sources array pointing to your data source:</p>
        <div style={{ background: '#0a0a0f', borderRadius: 10, padding: '20px 24px', marginBottom: 24, fontFamily: 'monospace', fontSize: 13, color: '#e5e7eb', lineHeight: 1.7, overflowX: 'auto' }}>
          <div>sitemap: {"{"}</div>
          <div style={{ paddingLeft: 20 }}>sources: ["/api/__sitemap__/urls"],</div>
          <div>{"}"}</div>
        </div>
        <p style={{ marginBottom: 24 }}>Then create a server route at server/routes/__sitemap__/urls.ts that returns an array of URL objects. The module fetches this endpoint at runtime to get dynamic URLs, merges them with static routes, and outputs the complete sitemap. This is more flexible than build-time generation — your sitemap updates without rebuilding when you add new blog posts or products.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Common Nuxt Sitemap Issues</h2>
        <p style={{ marginBottom: 12 }}><strong>Missing site.url:</strong> Without site.url configured, the module cannot generate absolute URLs. All URLs in the sitemap will be relative paths, which is invalid XML sitemap format and will fail Google validation. Always set site.url to your production domain.</p>
        <p style={{ marginBottom: 12 }}><strong>Dynamic routes not appearing:</strong> If CMS content is missing from the sitemap, verify your API endpoint is returning the correct URL format. Each URL object should have a loc property with the full path: {"{"} loc: '/blog/my-post' {"}"}.</p>
        <p style={{ marginBottom: 24 }}><strong>Nuxt 2 vs Nuxt 3:</strong> The @nuxtjs/sitemap module for Nuxt 2 and Nuxt 3 are different packages with different APIs. If you migrated from Nuxt 2, reinstall the module fresh rather than just upgrading — the configuration structure changed significantly.</p>
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Validate your Nuxt sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free — checks all URLs in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Check My Sitemap Free</a>
      </div>
    </div>
  );
}
