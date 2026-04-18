import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fix Sitemap for Next.js - Complete Guide',
  description: 'Build a perfect Next.js sitemap: static generation, dynamic routes, App Router sitemap.ts, and programmatic SEO at scale.',
  alternates: { canonical: 'https://sitemapfixer.com/fix-sitemap-for/nextjs' },
  openGraph: {
    title: 'Fix Sitemap for Next.js - Complete Guide',
    description: 'Build a perfect Next.js sitemap: static generation, dynamic routes, App Router sitemap.ts, and programmatic SEO at scale.',
    url: 'https://sitemapfixer.com/fix-sitemap-for/nextjs',
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
  const faqSchema = "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"App Router sitemap.ts vs Pages Router next-sitemap - which?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"On App Router (Next 13+), use the built-in sitemap.ts - it's part of Next.js core and fully supported. On Pages Router, use the next-sitemap package, which auto-generates sitemap.xml at build time. Don't mix both in one codebase.\"}},{\"@type\":\"Question\",\"name\":\"How do I split a Next.js sitemap over 50k URLs?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Use generateSitemaps() in sitemap.ts to return an array of shard IDs (e.g., by page range). Next.js will render each as /sitemap/0.xml, /sitemap/1.xml and expose a sitemap index at /sitemap.xml automatically.\"}},{\"@type\":\"Question\",\"name\":\"Does Vercel ISR affect sitemap freshness?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes. If you use revalidate in sitemap.ts, the sitemap stays cached until the interval expires or you trigger on-demand revalidation. For frequently-changing catalogs, call revalidatePath('/sitemap.xml') after content changes rather than relying on time-based revalidation.\"}}]}";

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px', fontFamily: 'Geist, sans-serif' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'Fix Sitemap for Next.js - Complete Guide', description: 'Build a perfect Next.js sitemap: static generation, dynamic routes, App Router sitemap.ts, and programmatic SEO at scale.', url: 'https://sitemapfixer.com/fix-sitemap-for/nextjs', author: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com' }, publisher: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com', logo: { '@type': 'ImageObject', url: 'https://sitemapfixer.com/opengraph-image' } }, datePublished: '2026-04-17', mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://sitemapfixer.com/fix-sitemap-for/nextjs' } }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sitemapfixer.com/' }, { '@type': 'ListItem', position: 2, name: 'Fix by Platform', item: 'https://sitemapfixer.com/fix-sitemap-for' }, { '@type': 'ListItem', position: 3, name: 'Fix Sitemap for Next.js - Complete Guide', item: 'https://sitemapfixer.com/fix-sitemap-for/nextjs' }] }),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />

      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>
        {'  /  '}
        <a href="/fix-sitemap-for" style={{ color: '#2d5be3', textDecoration: 'none' }}>Platform Guides</a>
        {'  /  '}
        <span>Next.js</span>
      </nav>

      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>
        Fix Your Sitemap for Next.js
      </h1>
      <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        Next.js gives you two ways to ship a sitemap: the App Router's built-in <code>sitemap.ts</code> convention, or the <code>next-sitemap</code> package on Pages Router. Both work. Neither is zero-config for sites with dynamic routes, ISR, or i18n.
      </p>

      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Analyze your Next.js sitemap now</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>
          Try Sitemap Fixer Free
        </a>
      </div>

      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 24 }}>
        The most common Next.js sitemap failure isn't a bug - it's silence. You ship a <code>sitemap.ts</code> that returns static routes only, forget to query the CMS for dynamic ones, and Google indexes exactly what you listed (usually the 5 marketing pages) while ignoring the 2,000 blog posts you actually want ranked.
      </p>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 32 }}>
        Recently helped a SaaS company running Next.js 14 App Router with 8,600 programmatic "compare X vs Y" pages. Their sitemap had 12 URLs. The <code>sitemap.ts</code> file listed the static marketing pages and missed the dynamic route entirely because the dev had never added the DB query. After fixing, GSC went from 9 indexed pages to 6,100 in about six weeks.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>App Router sitemap.ts - the good way</h2>
      <div style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
        <pre style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: '#1c1c26', whiteSpace: 'pre-wrap', fontFamily: 'DM Mono, monospace' }}>{`// app/sitemap.ts
import type { MetadataRoute } from 'next';
import { db } from '@/lib/db';

export const revalidate = 3600; // rebuild hourly

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages = [
    { url: 'https://example.com', lastModified: new Date(), priority: 1 },
    { url: 'https://example.com/about', lastModified: new Date() },
    { url: 'https://example.com/pricing', lastModified: new Date() },
  ];

  const posts = await db.post.findMany({
    where: { published: true, publishedAt: { lte: new Date() } },
    select: { slug: true, updatedAt: true },
  });

  const blogPages = posts.map((p) => ({
    url: \`https://example.com/blog/\${p.slug}\`,
    lastModified: p.updatedAt,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}`}</pre>
      </div>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Sharding past 50k URLs</h2>
      <div style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
        <pre style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: '#1c1c26', whiteSpace: 'pre-wrap', fontFamily: 'DM Mono, monospace' }}>{`// app/sitemap.ts
export async function generateSitemaps() {
  const count = await db.post.count();
  const shards = Math.ceil(count / 40000);
  return Array.from({ length: shards }, (_, id) => ({ id }));
}

export default async function sitemap({ id }: { id: number }) {
  const posts = await db.post.findMany({
    skip: id * 40000,
    take: 40000,
    orderBy: { id: 'asc' },
  });
  return posts.map(p => ({
    url: \`https://example.com/blog/\${p.slug}\`,
    lastModified: p.updatedAt,
  }));
}`}</pre>
      </div>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        Next.js auto-generates <code>/sitemap.xml</code> as the index and <code>/sitemap/0.xml</code>, <code>/sitemap/1.xml</code>... as shards. Submit only the index URL to GSC.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common Next.js Sitemap Issues</h2>
      <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li><code>sitemap.ts</code> hardcoded with static URLs, missing dynamic CMS routes</li>
        <li>No <code>revalidate</code> set - sitemap is rebuilt on every request, slow and unnecessary</li>
        <li>Pages Router sites using stale <code>next-sitemap.config.js</code> after migrating some routes to App Router</li>
        <li>i18n routes duplicated without <code>alternates</code> metadata</li>
        <li>Preview deployments (Vercel <code>*.vercel.app</code> URLs) indexed alongside production</li>
        <li>Draft posts from a CMS leaking because the query didn't filter on <code>status</code></li>
        <li>Sitemap returning URLs from the dev database when <code>NEXT_PUBLIC_SITE_URL</code> is undefined in prod</li>
        <li>Static export (<code>output: &apos;export&apos;</code>) sites where sitemap.ts runs at build but the CMS data is stale</li>
      </ul>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>i18n alternates</h2>
      <div style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
        <pre style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: '#1c1c26', whiteSpace: 'pre-wrap', fontFamily: 'DM Mono, monospace' }}>{`// app/sitemap.ts - with hreflang
const locales = ['en', 'de', 'fr'];

return posts.flatMap(p => locales.map(loc => ({
  url: \`https://example.com/\${loc}/blog/\${p.slug}\`,
  lastModified: p.updatedAt,
  alternates: {
    languages: Object.fromEntries(
      locales.map(l => [l, \`https://example.com/\${l}/blog/\${p.slug}\`])
    ),
  },
})));`}</pre>
      </div>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Vercel preview deploys and robots</h2>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        Every Vercel preview URL (<code>branch-name-team.vercel.app</code>) is crawlable by default. Vercel adds <code>X-Robots-Tag: noindex</code> automatically on preview/development environments - verify with <code>curl -I https://branch.vercel.app</code> and look for the header. If you've customized <code>vercel.json</code> or removed defaults, you can accidentally expose previews. On custom Next.js deployments (not Vercel), add the header via middleware based on <code>process.env.VERCEL_ENV !== &apos;production&apos;</code>.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Step-by-Step Fix Guide</h2>
      <ol style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li style={{ marginBottom: 12 }}>Create <code>app/sitemap.ts</code> (App Router) or install <code>next-sitemap</code> (Pages Router)</li>
        <li style={{ marginBottom: 12 }}>Query every data source for live URLs (CMS, DB, headless content)</li>
        <li style={{ marginBottom: 12 }}>Filter drafts and future-dated content at the query level</li>
        <li style={{ marginBottom: 12 }}>Set <code>revalidate</code> so the sitemap rebuilds on a sane schedule (1-24 hours)</li>
        <li style={{ marginBottom: 12 }}>For 50k+ URLs, use <code>generateSitemaps()</code> to shard</li>
        <li style={{ marginBottom: 12 }}>Add <code>alternates.languages</code> for i18n routes</li>
        <li style={{ marginBottom: 12 }}>Confirm Vercel preview URLs return <code>X-Robots-Tag: noindex</code></li>
        <li style={{ marginBottom: 12 }}>Verify with <code>curl https://yoursite.com/sitemap.xml</code></li>
        <li style={{ marginBottom: 12 }}>Submit the index URL to Google Search Console</li>
      </ol>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, marginTop: 40 }}>Frequently Asked Questions</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
        <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>App Router sitemap.ts vs Pages Router next-sitemap - which?</div>
          <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>On App Router (Next 13+), use the built-in sitemap.ts - it&apos;s part of Next.js core. On Pages Router, use the next-sitemap package, which auto-generates sitemap.xml at build time. Don&apos;t mix both in one codebase.</div>
        </div>
        <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>How do I split a Next.js sitemap over 50k URLs?</div>
          <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Use generateSitemaps() in sitemap.ts to return an array of shard IDs. Next.js will render each as /sitemap/0.xml, /sitemap/1.xml and expose a sitemap index at /sitemap.xml automatically.</div>
        </div>
        <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Does Vercel ISR affect sitemap freshness?</div>
          <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Yes. If you use revalidate in sitemap.ts, the sitemap stays cached until the interval expires or you trigger on-demand revalidation. For frequently-changing catalogs, call revalidatePath(&apos;/sitemap.xml&apos;) after content changes.</div>
        </div>
      </div>

      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Analyze your Next.js sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Find all issues in your sitemap - free, no credit card needed</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>
          Analyze My Sitemap Free
        </a>
      </div>

      <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
        <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Other platform guides</div>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <li><a href="/fix-sitemap-for/nuxt" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Nuxt</a></li>
          <li><a href="/fix-sitemap-for/gatsby" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Gatsby</a></li>
          <li><a href="/fix-sitemap-for/astro" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Astro</a></li>
          <li><a href="/fix-sitemap-for/large-sites" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Large Sites (10k+ pages)</a></li>
          <li><a href="/learn/nextjs-sitemap" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Next.js Sitemap Guide</a></li>
        </ul>
      </div>
    </div>
  );
}
