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
  const faqSchema = "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"gatsby-plugin-sitemap vs gatsby-plugin-advanced-sitemap - which one?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"gatsby-plugin-sitemap is the default, maintained by the Gatsby team, and produces a sitemap index with sharded files automatically. gatsby-plugin-advanced-sitemap is Ghost's fork, tuned for Ghost/Contentful-style source plugins and gives per-type sitemaps (posts, pages, authors). If you want grouped sitemaps out of the box, use advanced. Otherwise the official plugin is fine.\"}},{\"@type\":\"Question\",\"name\":\"Why is my Gatsby sitemap missing client-only routes?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Because client-only routes defined with matchPath in gatsby-node.js do not have a page node in allSitePage. Use the resolvePages option to merge them in manually.\"}},{\"@type\":\"Question\",\"name\":\"Where is my Gatsby sitemap after build?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"In the public/ directory after gatsby build. The index is public/sitemap-index.xml and shards are public/sitemap-0.xml, public/sitemap-1.xml, etc. Confirm your build step uploads the entire public/ folder, not just HTML.\"}}]}";

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px', fontFamily: 'Geist, sans-serif' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'Fix Sitemap for Gatsby - Complete Guide', description: 'Optimize your Gatsby sitemap: configure gatsby-plugin-sitemap, resolve pages from GraphQL, add exclude patterns, and handle i18n.', url: 'https://sitemapfixer.com/fix-sitemap-for/gatsby', author: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com' }, publisher: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com', logo: { '@type': 'ImageObject', url: 'https://sitemapfixer.com/opengraph-image' } }, datePublished: '2026-04-17', mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://sitemapfixer.com/fix-sitemap-for/gatsby' } }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sitemapfixer.com/' }, { '@type': 'ListItem', position: 2, name: 'Fix by Platform', item: 'https://sitemapfixer.com/fix-sitemap-for' }, { '@type': 'ListItem', position: 3, name: 'Fix Sitemap for Gatsby - Complete Guide', item: 'https://sitemapfixer.com/fix-sitemap-for/gatsby' }] }),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />

      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>
        {'  /  '}
        <a href="/fix-sitemap-for" style={{ color: '#2d5be3', textDecoration: 'none' }}>Platform Guides</a>
        {'  /  '}
        <span>Gatsby</span>
      </nav>

      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>
        Fix Your Sitemap for Gatsby
      </h1>
      <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        Gatsby emits <code>sitemap-index.xml</code> at build via gatsby-plugin-sitemap, but sitemap quality depends entirely on the GraphQL query, <code>resolveSiteUrl</code>, and exclude patterns you set in <code>gatsby-config.js</code>.
      </p>

      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Analyze your Gatsby sitemap now</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>
          Try Sitemap Fixer Free
        </a>
      </div>

      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 24 }}>
        Gatsby builds its sitemap from the <code>allSitePage</code> GraphQL node, so any page not in <code>allSitePage</code> won't land in the sitemap. Any page you didn't want in there, but that got created by a source plugin, will. This guide covers what breaks at the node level and how to fix it.
      </p>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 32 }}>
        Audited a Gatsby + Contentful site earlier this year with 2,400 published entries. The sitemap had 7,800 URLs. The culprit: draft entries from Contentful's preview API plus paginated tag archives the team had forgotten existed. Fixing the GraphQL filter dropped the sitemap to 2,390 URLs - closer to what actually deserves indexing.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>gatsby-plugin-sitemap vs gatsby-plugin-advanced-sitemap</h2>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 16 }}>
        <strong>gatsby-plugin-sitemap</strong> is the official one. It produces one index plus sharded files, respects your siteUrl, and accepts query, resolvePages, and serialize hooks. Good default.
      </p>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        <strong>gatsby-plugin-advanced-sitemap</strong> is the Ghost fork. It splits into per-type sitemaps automatically (pages, posts, authors, tags) and includes image entries when your source plugin exposes them. Use it if you want typed sitemaps without writing the serialize logic yourself. The trade-off: slower release cadence and a query shape that assumes Ghost/Contentful conventions.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common Gatsby Sitemap Issues</h2>
      <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li><code>siteUrl</code> missing from <code>siteMetadata</code>, producing relative URLs in <code>sitemap-0.xml</code></li>
        <li>Dev-only routes like <code>/dev-404-page/</code> and <code>/offline-plugin-app-shell-fallback/</code> slipping into production</li>
        <li>Paginated archive nodes (<code>/blog/2</code>, <code>/blog/3</code>) included without review</li>
        <li>Contentful or Sanity drafts leaking in because no filter on <code>node_locale</code> or publish status</li>
        <li>Client-only routes (defined with <code>matchPath</code>) missing entirely - they have no page node at build</li>
        <li>i18n locales generating <code>/en</code> and <code>/de</code> with no <code>hreflang</code> alternates</li>
        <li>Trailing-slash mismatch between sitemap output and actual page URLs, triggering 301s on every crawl</li>
        <li>The plugin running at <code>onPostBuild</code> but your CI uploading <code>public/</code> before the build finishes</li>
      </ul>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Working gatsby-config.js example</h2>
      <div style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
        <pre style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: '#1c1c26', whiteSpace: 'pre-wrap', fontFamily: 'DM Mono, monospace' }}>{`module.exports = {
  siteMetadata: {
    siteUrl: 'https://example.com',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        output: '/sitemap-index.xml',
        excludes: [
          '/dev-404-page',
          '/offline-plugin-app-shell-fallback',
          '/404',
          '/404.html',
          '/preview/*',
          '/admin/*',
        ],
        query: \`{
          allSitePage(filter: {path: {regex: "/^(?!/draft)/"}}) {
            nodes { path }
          }
          allContentfulPost(filter: {node_locale: {eq: "en-US"}}) {
            nodes { slug updatedAt }
          }
        }\`,
        resolveSiteUrl: () => 'https://example.com',
        resolvePages: ({ allSitePage, allContentfulPost }) => {
          const postMap = Object.fromEntries(
            allContentfulPost.nodes.map(p => [\`/blog/\${p.slug}/\`, p.updatedAt])
          );
          return allSitePage.nodes.map(page => ({
            ...page,
            lastmod: postMap[page.path] || undefined,
          }));
        },
        serialize: ({ path, lastmod }) => ({
          url: path,
          lastmod,
          changefreq: 'weekly',
        }),
      },
    },
  ],
};`}</pre>
      </div>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Handling i18n locales</h2>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 16 }}>
        gatsby-plugin-react-i18next (or gatsby-plugin-intl) creates one page node per locale prefix. The default sitemap lists all of them but without <code>hreflang</code> alternates, which means Google treats them as separate pages with duplicate content.
      </p>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        Use the <code>serialize</code> hook to emit an <code>xhtml:link</code> alternate array per URL, or generate one sitemap file per locale and reference them all from <code>sitemap-index.xml</code>. The per-locale approach is easier to debug: when French pages drop out of the index, you see which file they came from.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Client-only routes</h2>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        Routes you created in <code>gatsby-node.js</code> with <code>createPage({`{ matchPath: '/app/*' }`})</code> don't show up in <code>allSitePage</code> because they render fully client-side. If these routes need indexing (rare for /app/, common for /profile/[id]), use <code>resolvePages</code> to inject them manually from your data source. Most Gatsby /app/ dashboards should <em>not</em> be in the sitemap anyway.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Deployment pipeline notes</h2>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        The sitemap runs in <code>onPostBuild</code>, which fires after HTML generation. If your CI pipeline starts the deploy before the build completes, you can ship HTML without the sitemap. Confirm your deploy step waits for <code>gatsby build</code> to exit cleanly, and include <code>public/sitemap-*.xml</code> in your artifact upload. On Gatsby Cloud and Netlify this is automatic; on custom pipelines it is the #1 reason "the sitemap didn't deploy".
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Step-by-Step Fix Guide</h2>
      <ol style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li style={{ marginBottom: 12 }}>Run <code>npm install gatsby-plugin-sitemap</code> and add it to the plugins array</li>
        <li style={{ marginBottom: 12 }}>Set <code>siteMetadata.siteUrl</code> to your production origin - the plugin prepends it to every path</li>
        <li style={{ marginBottom: 12 }}>Add <code>excludes</code> for dev routes, 404, preview paths, and staging-only patterns</li>
        <li style={{ marginBottom: 12 }}>Override <code>query</code> to filter source plugin nodes by publish status and locale</li>
        <li style={{ marginBottom: 12 }}>Use <code>resolvePages</code> to merge client-only routes or inject real <code>lastmod</code> from your CMS</li>
        <li style={{ marginBottom: 12 }}>Run <code>gatsby build</code> and inspect <code>public/sitemap-index.xml</code> plus each shard</li>
        <li style={{ marginBottom: 12 }}>Verify with <code>curl https://yoursite.com/sitemap-index.xml</code> that the file is deployed and returns 200</li>
        <li style={{ marginBottom: 12 }}>Submit <code>sitemap-index.xml</code> to Google Search Console and watch the per-shard coverage</li>
      </ol>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, marginTop: 40 }}>Frequently Asked Questions</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
        <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>gatsby-plugin-sitemap vs gatsby-plugin-advanced-sitemap?</div>
          <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>gatsby-plugin-sitemap is the default, maintained by the Gatsby team, and produces a sitemap index with sharded files automatically. gatsby-plugin-advanced-sitemap is Ghost&apos;s fork, tuned for Ghost/Contentful-style source plugins and gives per-type sitemaps. If you want grouped sitemaps out of the box, use advanced. Otherwise the official plugin is fine.</div>
        </div>
        <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Why is my Gatsby sitemap missing client-only routes?</div>
          <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Because client-only routes defined with matchPath in gatsby-node.js do not have a page node in allSitePage. Use the resolvePages option to merge them in manually.</div>
        </div>
        <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Where is my Gatsby sitemap after build?</div>
          <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>In the public/ directory after gatsby build. The index is public/sitemap-index.xml and shards are public/sitemap-0.xml, public/sitemap-1.xml, etc. Confirm your build step uploads the entire public/ folder, not just HTML.</div>
        </div>
      </div>

      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Analyze your Gatsby sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Find all issues in your sitemap - free, no credit card needed</div>
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
