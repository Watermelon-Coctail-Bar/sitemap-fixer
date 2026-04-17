import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fix Sitemap for Gatsby - Complete Guide',
  description: 'Optimize your Gatsby sitemap: configure gatsby-plugin-sitemap, resolve pages from GraphQL, add exclude patterns, and handle i18n.',
  alternates: { canonical: 'https://sitemapfixer.com/fix-sitemap-for/gatsby' },
  openGraph: {
    title: 'Fix Sitemap for Gatsby - Complete Guide',
    description: 'Optimize your Gatsby sitemap: configure gatsby-plugin-sitemap, resolve pages from GraphQL, add exclude patterns, and handle i18n.',
    url: 'https://sitemapfixer.com/fix-sitemap-for/gatsby',
    type: 'article',
    images: [{
      url: 'https://sitemapfixer.com/opengraph-image',
      width: 1200,
      height: 630,
      alt: 'SitemapFixer - AI Sitemap Checker and SEO Fix Tool',
    }],
    siteName: 'SitemapFixer',
    locale: 'en_US',
  },
};

export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px', fontFamily: 'Geist, sans-serif' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>
        {'  '}
        <a href="/fix-sitemap-for" style={{ color: '#2d5be3', textDecoration: 'none' }}>Platform Guides</a>
        {'  '}
        <span>Gatsby</span>
      </nav>

      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>
        Fix Your Sitemap for Gatsby
      </h1>
      <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        Gatsby emits sitemap-index.xml at build via gatsby-plugin-sitemap, but sitemap quality depends entirely on the GraphQL query, resolveSiteUrl, and exclude patterns you set in gatsby-config.js.
      </p>

      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Analyze your Gatsby sitemap now </span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>
          Try Sitemap Fixer Free
        </a>
      </div>

      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 24 }}>
        Gatsby builds sitemap from the allSitePage GraphQL node, so any page not showing up in allSitePage will not land in sitemap.
        This guide covers the common misconfigurations and how to fix them at the node level.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common Gatsby Sitemap Issues</h2>
      <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li>siteUrl missing from siteMetadata in gatsby-config.js, producing relative URLs in sitemap-0.xml</li>
        <li>Dev-only routes like /dev-404-page/, /offline-plugin-app-shell-fallback/ slipping into production sitemap</li>
        <li>Paginated Gatsby nodes (/blog/2, /blog/3) included without thin-content review</li>
        <li>Preview pages from gatsby-source-contentful drafts being emitted when draft filtering is missing</li>
        <li>Client-only routes (matchPath) not appearing since they have no page node at build</li>
        <li>i18n locales generating /en and /de without hreflang in sitemap unless explicitly added</li>
      </ul>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Step-by-Step Fix Guide</h2>
      <ol style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li style={{ marginBottom: 12 }}>Install with npm install gatsby-plugin-sitemap and add it to plugins in gatsby-config.js</li>
        <li style={{ marginBottom: 12 }}>Set siteMetadata.siteUrl to your production origin - the plugin prepends it to every path</li>
        <li style={{ marginBottom: 12 }}>Pass excludes: [&apos;/dev-404-page&apos;, &apos;/offline-plugin-app-shell-fallback&apos;, &apos;/404&apos;, &apos;/404.html&apos;] in plugin options</li>
        <li style={{ marginBottom: 12 }}>Override the query option to filter allSitePage by path regex, skipping private routes and drafts</li>
        <li style={{ marginBottom: 12 }}>Implement resolvePages to merge in client-only routes (matchPath) that would otherwise be skipped</li>
        <li style={{ marginBottom: 12 }}>Run gatsby build and inspect public/sitemap-index.xml plus each sitemap-&#123;n&#125;.xml shard to verify the URL list</li>
        <li style={{ marginBottom: 12 }}>Run Sitemap Fixer against yourdomain.com/sitemap-index.xml and submit to Google Search Console</li>
      </ol>

      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Analyze your Gatsby sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Find all issues in your sitemap - free, no signup required</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>
          Analyze My Sitemap Free
        </a>
      </div>

      <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
        <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Other platform guides</div>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <li><a href="/fix-sitemap-for/nextjs" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Next.js</a></li>
          <li><a href="/fix-sitemap-for/nuxt" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Nuxt</a></li>
          <li><a href="/fix-sitemap-for/astro" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Astro</a></li>
          <li><a href="/fix-sitemap-for/hugo" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Hugo</a></li>
          <li><a href="/learn/gatsby-sitemap" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Gatsby Sitemap Guide</a></li>
        </ul>
      </div>
    </div>
  );
}
