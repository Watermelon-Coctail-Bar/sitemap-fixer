import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fix Sitemap for Nuxt - Complete Guide',
  description: 'Optimize your Nuxt sitemap: configure @nuxtjs/sitemap, wire up dynamic routes, add i18n, and handle SSR vs prerendered pages correctly.',
  alternates: { canonical: 'https://sitemapfixer.com/fix-sitemap-for/nuxt' },
  openGraph: {
    title: 'Fix Sitemap for Nuxt - Complete Guide',
    description: 'Optimize your Nuxt sitemap: configure @nuxtjs/sitemap, wire up dynamic routes, add i18n, and handle SSR vs prerendered pages correctly.',
    url: 'https://sitemapfixer.com/fix-sitemap-for/nuxt',
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
  const faqSchema = "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"How do I add dynamic routes to a Nuxt sitemap?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Create a server route at server/api/__sitemap__/urls.ts that returns your slugs, then add sources: ['/api/__sitemap__/urls'] in the sitemap config. The module fetches those URLs at build time and merges them in.\"}},{\"@type\":\"Question\",\"name\":\"Does @nuxtjs/sitemap work with SSR routes?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes, but only if you list them explicitly through sources or urls. The module can't introspect which SSR routes exist - you have to tell it. Static routes (pages/) and prerendered routes are detected automatically.\"}},{\"@type\":\"Question\",\"name\":\"How do I exclude private routes from a Nuxt sitemap?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Use defineRouteRules({ sitemap: false }) in the page component, or set routeRules in nuxt.config.ts to apply noindex to patterns like '/dashboard/**'.\"}}]}";

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px', fontFamily: 'Geist, sans-serif' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'Fix Sitemap for Nuxt - Complete Guide', description: 'Optimize your Nuxt sitemap: configure @nuxtjs/sitemap, wire up dynamic routes, add i18n, and handle SSR vs prerendered pages correctly.', url: 'https://sitemapfixer.com/fix-sitemap-for/nuxt', author: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com' }, publisher: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com', logo: { '@type': 'ImageObject', url: 'https://sitemapfixer.com/opengraph-image' } }, datePublished: '2026-04-17', mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://sitemapfixer.com/fix-sitemap-for/nuxt' } }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sitemapfixer.com/' }, { '@type': 'ListItem', position: 2, name: 'Fix by Platform', item: 'https://sitemapfixer.com/fix-sitemap-for' }, { '@type': 'ListItem', position: 3, name: 'Fix Sitemap for Nuxt - Complete Guide', item: 'https://sitemapfixer.com/fix-sitemap-for/nuxt' }] }),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />

      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>
        {'  /  '}
        <a href="/fix-sitemap-for" style={{ color: '#2d5be3', textDecoration: 'none' }}>Platform Guides</a>
        {'  /  '}
        <span>Nuxt</span>
      </nav>

      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>
        Fix Your Sitemap for Nuxt
      </h1>
      <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        Nuxt 3 uses the <code>@nuxtjs/sitemap</code> module to generate <code>sitemap.xml</code>. Dynamic route params, server routes, and <code>@nuxtjs/i18n</code> integration often need explicit configuration or the sitemap ships with only the static pages.
      </p>

      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Analyze your Nuxt sitemap now</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>
          Try Sitemap Fixer Free
        </a>
      </div>

      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 24 }}>
        Nuxt 3 has a really solid sitemap story via <code>@nuxtjs/sitemap</code> - better than what's in Next.js core, honestly. But it assumes you'll wire up your content source. The module can see <code>pages/*.vue</code> automatically. It can't see your Nuxt Content markdown files, your Strapi API, or your Supabase rows unless you tell it.
      </p>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 32 }}>
        Reviewed a Nuxt 3 marketing site with 2,100 blog posts stored in Nuxt Content. The sitemap listed 8 URLs - just the static pages. The dev had installed <code>@nuxtjs/sitemap</code>, pointed <code>site.url</code> at production, and shipped. Nobody had written the <code>sources</code> config, so dynamic routes were invisible. A 20-line <code>server/api/__sitemap__/urls.ts</code> fixed it.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Working nuxt.config.ts</h2>
      <div style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
        <pre style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: '#1c1c26', whiteSpace: 'pre-wrap', fontFamily: 'DM Mono, monospace' }}>{`export default defineNuxtConfig({
  modules: ['@nuxtjs/sitemap', '@nuxtjs/i18n'],

  site: {
    url: 'https://example.com',
  },

  sitemap: {
    sources: ['/api/__sitemap__/urls'],
    exclude: ['/admin/**', '/dashboard/**', '/preview/**'],
    autoI18n: true,
    defaults: {
      changefreq: 'weekly',
      priority: 0.7,
    },
  },

  routeRules: {
    '/admin/**': { robots: 'noindex' },
    '/api/**': { robots: 'noindex' },
  },

  i18n: {
    locales: [
      { code: 'en', language: 'en-US' },
      { code: 'de', language: 'de-DE' },
    ],
    defaultLocale: 'en',
  },
});`}</pre>
      </div>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Dynamic routes via server API</h2>
      <div style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
        <pre style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: '#1c1c26', whiteSpace: 'pre-wrap', fontFamily: 'DM Mono, monospace' }}>{`// server/api/__sitemap__/urls.ts
import { serverQueryContent } from '#content/server';

export default defineSitemapEventHandler(async (event) => {
  const posts = await serverQueryContent(event, 'blog')
    .where({ _draft: false, published: { $lte: new Date() } })
    .find();

  return posts.map((p) => ({
    loc: \`/blog/\${p._path.replace('/blog/', '')}\`,
    lastmod: p.updatedAt,
    changefreq: 'weekly',
    priority: 0.7,
  }));
});`}</pre>
      </div>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common Nuxt Sitemap Issues</h2>
      <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li>Dynamic routes (<code>/blog/[slug]</code>) missing because no <code>sources</code> config</li>
        <li><code>@nuxtjs/i18n</code> creating locale paths without hreflang when <code>autoI18n</code> is off</li>
        <li>SSR routes missing - the module only sees prerendered or explicitly-listed URLs</li>
        <li>Private routes leaking because <code>defineRouteRules</code> wasn't applied</li>
        <li><code>site.url</code> resolving to a preview or Vercel branch domain</li>
        <li>Nuxt Content posts excluded when the server handler filters wrong</li>
        <li>Sitemap XML cached too long by Nitro, serving stale URLs for days</li>
        <li>Module version mismatch - v5 has different config keys than v4</li>
      </ul>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>i18n handling</h2>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        With <code>autoI18n: true</code>, the sitemap module picks up your i18n locales automatically and emits <code>xhtml:link</code> alternates inside each URL entry. Verify the output by requesting <code>/sitemap.xml</code> and looking for the <code>xhtml:link</code> tags. If they're missing, check that <code>@nuxtjs/i18n</code> is listed before <code>@nuxtjs/sitemap</code> in the <code>modules</code> array - order matters for module detection.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Step-by-Step Fix Guide</h2>
      <ol style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li style={{ marginBottom: 12 }}>Install with <code>npx nuxi module add sitemap</code></li>
        <li style={{ marginBottom: 12 }}>Set <code>site.url</code> to production at the top level of <code>nuxt.config.ts</code></li>
        <li style={{ marginBottom: 12 }}>Create <code>server/api/__sitemap__/urls.ts</code> for dynamic routes</li>
        <li style={{ marginBottom: 12 }}>Set <code>sitemap.sources</code> to include your API handler</li>
        <li style={{ marginBottom: 12 }}>Add <code>exclude</code> patterns for admin, dashboard, preview</li>
        <li style={{ marginBottom: 12 }}>Enable <code>autoI18n: true</code> if using <code>@nuxtjs/i18n</code></li>
        <li style={{ marginBottom: 12 }}>Use <code>routeRules</code> or <code>defineRouteRules</code> for noindex on private pages</li>
        <li style={{ marginBottom: 12 }}>Verify with <code>curl https://yoursite.com/sitemap.xml</code></li>
        <li style={{ marginBottom: 12 }}>Submit to Google Search Console</li>
      </ol>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, marginTop: 40 }}>Frequently Asked Questions</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
        <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>How do I add dynamic routes to a Nuxt sitemap?</div>
          <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Create a server route at server/api/__sitemap__/urls.ts that returns your slugs, then add sources: [&apos;/api/__sitemap__/urls&apos;] in the sitemap config. The module fetches those URLs at build time and merges them in.</div>
        </div>
        <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Does @nuxtjs/sitemap work with SSR routes?</div>
          <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Yes, but only if you list them explicitly through sources or urls. The module can&apos;t introspect which SSR routes exist - you have to tell it. Static pages/ and prerendered routes are detected automatically.</div>
        </div>
        <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>How do I exclude private routes from a Nuxt sitemap?</div>
          <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Use defineRouteRules({`{ sitemap: false }`}) in the page component, or set routeRules in nuxt.config.ts to apply noindex to patterns like &apos;/dashboard/**&apos;.</div>
        </div>
      </div>

      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Analyze your Nuxt sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Find all issues in your sitemap - free, no credit card needed</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>
          Analyze My Sitemap Free
        </a>
      </div>

      <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
        <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Other platform guides</div>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <li><a href="/fix-sitemap-for/nextjs" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Next.js</a></li>
          <li><a href="/fix-sitemap-for/astro" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Astro</a></li>
          <li><a href="/fix-sitemap-for/gatsby" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Gatsby</a></li>
          <li><a href="/fix-sitemap-for/hugo" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Hugo</a></li>
          <li><a href="/learn/nuxt-sitemap" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Nuxt Sitemap Guide</a></li>
        </ul>
      </div>
    </div>
  );
}
