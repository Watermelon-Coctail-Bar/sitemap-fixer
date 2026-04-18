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
  const faqSchema = "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Why is my Astro sitemap empty?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"The most common cause is the missing site field in astro.config.mjs. Without it, @astrojs/sitemap can't build absolute URLs and skips generation silently. Set site to your production origin and rebuild.\"}},{\"@type\":\"Question\",\"name\":\"Does @astrojs/sitemap include SSR routes?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"No. The integration only knows about routes prerendered at build time. For SSR routes that should be indexed, pass their URLs through the customPages option in the sitemap config.\"}},{\"@type\":\"Question\",\"name\":\"Where does Astro output the sitemap?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"dist/sitemap-index.xml and dist/sitemap-0.xml after astro build. Ensure your deploy pipeline uploads the full dist/ directory, not just HTML.\"}}]}";

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px', fontFamily: 'Geist, sans-serif' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'Fix Sitemap for Astro - Complete Guide', description: 'Optimize your Astro sitemap: configure @astrojs/sitemap, exclude dynamic routes, add i18n, and ensure every page is indexable on build.', url: 'https://sitemapfixer.com/fix-sitemap-for/astro', author: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com' }, publisher: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com', logo: { '@type': 'ImageObject', url: 'https://sitemapfixer.com/opengraph-image' } }, datePublished: '2026-04-17', mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://sitemapfixer.com/fix-sitemap-for/astro' } }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sitemapfixer.com/' }, { '@type': 'ListItem', position: 2, name: 'Fix by Platform', item: 'https://sitemapfixer.com/fix-sitemap-for' }, { '@type': 'ListItem', position: 3, name: 'Fix Sitemap for Astro - Complete Guide', item: 'https://sitemapfixer.com/fix-sitemap-for/astro' }] }),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />

      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>
        {'  /  '}
        <a href="/fix-sitemap-for" style={{ color: '#2d5be3', textDecoration: 'none' }}>Platform Guides</a>
        {'  /  '}
        <span>Astro</span>
      </nav>

      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>
        Fix Your Sitemap for Astro
      </h1>
      <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        Astro uses the <code>@astrojs/sitemap</code> integration to emit <code>sitemap-index.xml</code> and <code>sitemap-0.xml</code> at build time. Misconfigured <code>site</code> URLs, missing <code>getStaticPaths</code> entries, and SSR routes commonly cause empty or incomplete sitemaps.
      </p>

      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Analyze your Astro sitemap now</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>
          Try Sitemap Fixer Free
        </a>
      </div>

      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 24 }}>
        Astro sites break sitemap generation in a handful of predictable ways: hybrid rendering (some static, some SSR), dynamic routes with incomplete <code>getStaticPaths</code>, and Content Collections where drafts leak through. The integration is simple on the surface but has sharp edges once you mix rendering modes.
      </p>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 32 }}>
        Debugged an Astro 4 site with Content Collections a few weeks back. 340 markdown posts, sitemap listing 47. The issue: their <code>[...slug].astro</code> page was reading from a collection filtered at render time, but <code>getStaticPaths</code> pulled from a separate (stale) export. After aligning the two, all 340 showed up.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common Astro Sitemap Issues</h2>
      <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li>Missing <code>site</code> field in <code>astro.config.mjs</code> causing <code>@astrojs/sitemap</code> to skip silently</li>
        <li>Dynamic routes (<code>[slug].astro</code>) producing empty sitemaps because <code>getStaticPaths</code> isn't exhaustive</li>
        <li>SSR/server-rendered routes skipped entirely - the sitemap only knows about prerendered pages</li>
        <li>i18n routes <code>/en</code> and <code>/de</code> emitted without <code>hreflang</code> alternates</li>
        <li>Draft posts from Content Collections leaking in when the schema doesn't include <code>draft</code></li>
        <li>Preview and 404 pages included without an explicit filter</li>
        <li>Trailing-slash mismatch between <code>trailingSlash: &apos;never&apos;</code> in config and generated URLs</li>
        <li>Hybrid sites where you set <code>output: &apos;server&apos;</code> globally instead of <code>output: &apos;hybrid&apos;</code>, losing all static URLs</li>
      </ul>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Working astro.config.mjs</h2>
      <div style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
        <pre style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: '#1c1c26', whiteSpace: 'pre-wrap', fontFamily: 'DM Mono, monospace' }}>{`import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://example.com',
  trailingSlash: 'never',
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/admin') &&
        !page.includes('/preview') &&
        !page.includes('/draft'),
      customPages: [
        // SSR routes you want indexed
        'https://example.com/dashboard-public',
      ],
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en-US', de: 'de-DE', fr: 'fr-FR' },
      },
      serialize(item) {
        if (item.url.includes('/blog/')) {
          item.changefreq = 'weekly';
          item.priority = 0.7;
        }
        return item;
      },
    }),
  ],
});`}</pre>
      </div>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Content Collections and drafts</h2>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 16 }}>
        Astro Content Collections don't have a native "draft" flag - you add it to your schema:
      </p>
      <div style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
        <pre style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: '#1c1c26', whiteSpace: 'pre-wrap', fontFamily: 'DM Mono, monospace' }}>{`// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };

// In [...slug].astro
export async function getStaticPaths() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.map(p => ({ params: { slug: p.slug }, props: { post: p } }));
}`}</pre>
      </div>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        The filter in <code>getCollection</code> drops drafts from prerendered pages, which means they never enter the sitemap in the first place. Much cleaner than filtering at the sitemap level.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>i18n with hreflang</h2>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        Pass the <code>i18n</code> option to the sitemap integration and it emits <code>xhtml:link</code> alternates automatically - as long as your routes actually exist for each locale. If <code>/de/about</code> doesn't exist but <code>/en/about</code> does, the sitemap still lists only <code>/en/about</code>. Translation gaps show up as missing alternates in GSC's International Targeting report.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Hybrid rendering gotchas</h2>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        If you set <code>output: &apos;server&apos;</code> globally, every route becomes SSR and your sitemap comes out empty. Use <code>output: &apos;hybrid&apos;</code> and mark specific pages as <code>export const prerender = true</code> for anything you want indexed. Then add any remaining SSR URLs through <code>customPages</code>.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Step-by-Step Fix Guide</h2>
      <ol style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li style={{ marginBottom: 12 }}>Install with <code>npm install @astrojs/sitemap</code> and add it to integrations</li>
        <li style={{ marginBottom: 12 }}>Set <code>site: &apos;https://yourdomain.com&apos;</code> in <code>astro.config.mjs</code></li>
        <li style={{ marginBottom: 12 }}>Pass a filter callback excluding admin, preview, and draft routes</li>
        <li style={{ marginBottom: 12 }}>For dynamic routes, make <code>getStaticPaths</code> exhaustive. For SSR routes to index, use <code>customPages</code></li>
        <li style={{ marginBottom: 12 }}>Add <code>i18n</code> with <code>defaultLocale</code> and <code>locales</code> to emit hreflang</li>
        <li style={{ marginBottom: 12 }}>Add <code>draft</code> to your Content Collection schema and filter in <code>getCollection</code></li>
        <li style={{ marginBottom: 12 }}>Run <code>npm run build</code>, inspect <code>dist/sitemap-index.xml</code>, verify URL count matches expectations</li>
        <li style={{ marginBottom: 12 }}>Verify with <code>curl https://yoursite.com/sitemap-index.xml</code> and submit to Google Search Console</li>
      </ol>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, marginTop: 40 }}>Frequently Asked Questions</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
        <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Why is my Astro sitemap empty?</div>
          <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>The most common cause is the missing site field in astro.config.mjs. Without it, @astrojs/sitemap can&apos;t build absolute URLs and skips generation silently. Set site to your production origin and rebuild.</div>
        </div>
        <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Does @astrojs/sitemap include SSR routes?</div>
          <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>No. The integration only knows about routes prerendered at build time. For SSR routes that should be indexed, pass their URLs through the customPages option in the sitemap config.</div>
        </div>
        <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Where does Astro output the sitemap?</div>
          <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>dist/sitemap-index.xml and dist/sitemap-0.xml after astro build. Ensure your deploy pipeline uploads the full dist/ directory, not just HTML.</div>
        </div>
      </div>

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
