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
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px', fontFamily: 'Geist, sans-serif' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>
        {'  '}
        <a href="/fix-sitemap-for" style={{ color: '#2d5be3', textDecoration: 'none' }}>Platform Guides</a>
        {'  '}
        <span>Nuxt</span>
      </nav>

      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>
        Fix Your Sitemap for Nuxt
      </h1>
      <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        Nuxt 3 uses the @nuxtjs/sitemap module to generate sitemap.xml. Dynamic route params, server routes, and @nuxtjs/i18n integration often need explicit configuration or the sitemap ships with only the static pages.
      </p>

      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Analyze your Nuxt sitemap now </span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>
          Try Sitemap Fixer Free
        </a>
      </div>

      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 24 }}>
        Nuxt teams commonly hit sitemap problems when they use content-driven dynamic routes like /blog/[slug] or /products/[id]
        and forget to expose them through the module. This guide covers every integration point you need to configure.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common Nuxt Sitemap Issues</h2>
      <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li>Dynamic routes like /blog/[slug] excluded because getRouteRules does not enumerate them</li>
        <li>@nuxtjs/i18n generating /en and /fr paths without hreflang annotations in sitemap</li>
        <li>Server-side rendered routes (not prerendered) missing because sitemap is emitted at build</li>
        <li>Private routes (/dashboard, /settings) leaking in because defineRouteRules noindex was not set</li>
        <li>siteUrl resolving to a preview or Vercel branch domain instead of production</li>
        <li>Nuxt Content sources not wired up to the sitemap module, leaving posts out</li>
      </ul>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Step-by-Step Fix Guide</h2>
      <ol style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li style={{ marginBottom: 12 }}>Install the module with npx nuxi module add sitemap and add &apos;@nuxtjs/sitemap&apos; to modules in nuxt.config.ts</li>
        <li style={{ marginBottom: 12 }}>Set site: &#123; url: &apos;https://yourdomain.com&apos; &#125; at the top level of nuxt.config.ts so all absolute URLs resolve correctly</li>
        <li style={{ marginBottom: 12 }}>For dynamic routes, create server/api/__sitemap__/urls.ts that returns your slugs from the database or Nuxt Content</li>
        <li style={{ marginBottom: 12 }}>In sitemap config, set sources: [&apos;/api/__sitemap__/urls&apos;] so the module fetches dynamic URLs at build time</li>
        <li style={{ marginBottom: 12 }}>Use defineRouteRules(&#123; sitemap: false &#125;) or robots: &apos;noindex&apos; on private and admin pages to exclude them</li>
        <li style={{ marginBottom: 12 }}>For i18n, install @nuxtjs/i18n and ensure sitemap module picks it up - it auto-emits hreflang and locale variants</li>
        <li style={{ marginBottom: 12 }}>Deploy, then run Sitemap Fixer against yourdomain.com/sitemap.xml and submit to Google Search Console</li>
      </ol>

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
