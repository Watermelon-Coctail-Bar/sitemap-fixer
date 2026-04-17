import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fix Sitemap for Astro - Complete Guide',
  description: 'Optimize your Astro sitemap: configure @astrojs/sitemap, exclude dynamic routes, add i18n, and ensure every page is indexable on build.',
  alternates: { canonical: 'https://sitemapfixer.com/fix-sitemap-for/astro' },
  openGraph: {
    title: 'Fix Sitemap for Astro - Complete Guide',
    description: 'Optimize your Astro sitemap: configure @astrojs/sitemap, exclude dynamic routes, add i18n, and ensure every page is indexable on build.',
    url: 'https://sitemapfixer.com/fix-sitemap-for/astro',
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
        <span>Astro</span>
      </nav>

      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>
        Fix Your Sitemap for Astro
      </h1>
      <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        Astro uses the @astrojs/sitemap integration to emit sitemap-index.xml and sitemap-0.xml at build time. Misconfigured site URLs, missing getStaticPaths entries, and SSR routes commonly cause empty or incomplete sitemaps.
      </p>

      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Analyze your Astro sitemap now </span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>
          Try Sitemap Fixer Free
        </a>
      </div>

      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 24 }}>
        Astro sites usually break sitemap generation when they mix static and SSR routes, forget to register dynamic slugs in getStaticPaths,
        or ship without the site key in astro.config.mjs. This guide walks through fixing each case.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common Astro Sitemap Issues</h2>
      <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li>Missing site field in astro.config.mjs causing @astrojs/sitemap to emit localhost URLs</li>
        <li>Dynamic routes ([slug].astro) producing empty sitemaps because getStaticPaths is not exhaustive</li>
        <li>SSR/server-rendered routes skipped entirely since sitemap is built only for statically prerendered pages</li>
        <li>i18n routes /en and /de emitted separately without hreflang annotations</li>
        <li>Draft posts from content collections leaking into build when draft: true is missing in the schema</li>
        <li>Preview and 404 pages included without an explicit filter callback</li>
      </ul>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Step-by-Step Fix Guide</h2>
      <ol style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li style={{ marginBottom: 12 }}>Install with npm install @astrojs/sitemap and add it to integrations in astro.config.mjs</li>
        <li style={{ marginBottom: 12 }}>Set site: &apos;https://yourdomain.com&apos; in astro.config.mjs - without it, sitemap generation fails silently</li>
        <li style={{ marginBottom: 12 }}>Pass a filter callback to sitemap(): filter: (page) =&gt; !page.includes(&apos;/admin&apos;) &amp;&amp; !page.includes(&apos;/preview&apos;)</li>
        <li style={{ marginBottom: 12 }}>For dynamic routes, ensure getStaticPaths returns every slug. For SSR routes you want indexed, use customPages to inject them manually</li>
        <li style={{ marginBottom: 12 }}>Configure i18n: &#123; defaultLocale: &apos;en&apos;, locales: [&apos;en&apos;, &apos;de&apos;] &#125; in the sitemap integration options so it emits hreflang</li>
        <li style={{ marginBottom: 12 }}>In your content collection schema, add draft: z.boolean().optional() and filter drafts at render time</li>
        <li style={{ marginBottom: 12 }}>Run npm run build, inspect dist/sitemap-index.xml, then run Sitemap Fixer against yourdomain.com/sitemap-index.xml and submit to Google Search Console</li>
      </ol>

      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Analyze your Astro sitemap</div>
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
          <li><a href="/fix-sitemap-for/gatsby" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Gatsby</a></li>
          <li><a href="/fix-sitemap-for/hugo" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Hugo</a></li>
          <li><a href="/learn/astro-sitemap" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Astro Sitemap Guide</a></li>
        </ul>
      </div>
    </div>
  );
}
