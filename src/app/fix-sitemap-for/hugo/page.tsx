import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fix Sitemap for Hugo - Complete Guide',
  description: 'Optimize your Hugo sitemap: tune sitemap.xml template, handle taxonomies, multilingual output, and exclude draft or future content.',
  alternates: { canonical: 'https://sitemapfixer.com/fix-sitemap-for/hugo' },
  openGraph: {
    title: 'Fix Sitemap for Hugo - Complete Guide',
    description: 'Optimize your Hugo sitemap: tune sitemap.xml template, handle taxonomies, multilingual output, and exclude draft or future content.',
    url: 'https://sitemapfixer.com/fix-sitemap-for/hugo',
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
  const faqSchema = "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Where is Hugo's default sitemap template?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"It's embedded in the Hugo binary and outputs /sitemap.xml. Override it by creating layouts/sitemap.xml in your project. For multilingual sites, add layouts/sitemapindex.xml for the index file.\"}},{\"@type\":\"Question\",\"name\":\"Why are _index.md pages missing from my Hugo sitemap?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"They're included by default - you might be excluding them by accident. Check that your custom sitemap template doesn't filter on .Kind and confirm the section page has no draft: true or sitemap_exclude: true in front matter.\"}},{\"@type\":\"Question\",\"name\":\"How do I handle multilingual sitemaps in Hugo?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Hugo generates one sitemap per language when you enable [languages] config. Ship a sitemapindex.xml template that references each /en/sitemap.xml, /de/sitemap.xml, etc., and submit the index to Google Search Console.\"}}]}";

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px', fontFamily: 'Geist, sans-serif' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'Fix Sitemap for Hugo - Complete Guide', description: 'Optimize your Hugo sitemap: tune sitemap.xml template, handle taxonomies, multilingual output, and exclude draft or future content.', url: 'https://sitemapfixer.com/fix-sitemap-for/hugo', author: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com' }, publisher: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com', logo: { '@type': 'ImageObject', url: 'https://sitemapfixer.com/opengraph-image' } }, datePublished: '2026-04-17', mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://sitemapfixer.com/fix-sitemap-for/hugo' } }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sitemapfixer.com/' }, { '@type': 'ListItem', position: 2, name: 'Fix by Platform', item: 'https://sitemapfixer.com/fix-sitemap-for' }, { '@type': 'ListItem', position: 3, name: 'Fix Sitemap for Hugo - Complete Guide', item: 'https://sitemapfixer.com/fix-sitemap-for/hugo' }] }),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />

      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>
        {'  /  '}
        <a href="/fix-sitemap-for" style={{ color: '#2d5be3', textDecoration: 'none' }}>Platform Guides</a>
        {'  /  '}
        <span>Hugo</span>
      </nav>

      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>
        Fix Your Sitemap for Hugo
      </h1>
      <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        Hugo ships a default <code>sitemap.xml</code> template, but taxonomies, section pages, future-dated posts, and multilingual mounts quickly create a sitemap that doesn't match what you actually want indexed.
      </p>

      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Analyze your Hugo sitemap now</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>
          Try Sitemap Fixer Free
        </a>
      </div>

      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 24 }}>
        Hugo's sitemap gets it mostly right by default, but "mostly right" includes every taxonomy term page, every pagination URL, and sometimes drafts. The fix is template-level: override <code>layouts/sitemap.xml</code> and filter what gets emitted.
      </p>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 32 }}>
        Reviewed a Hugo docs site last month. 420 content pages, 1,800 URLs in the sitemap. The padding was every tag page (290), every author page (14), and every pagination URL for the blog section (<code>/blog/page/2</code> through <code>/blog/page/47</code>). A 20-line template override cut the sitemap to 435 URLs.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common Hugo Sitemap Issues</h2>
      <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li>Taxonomy list pages (<code>/tags/</code>, <code>/categories/</code>) inflating the sitemap with thin aggregates</li>
        <li>Draft and future-dated posts included when building with <code>--buildDrafts</code> or <code>--buildFuture</code></li>
        <li>Pagination URLs (<code>/page/2/</code>) treated as unique pages</li>
        <li>Multilingual builds creating one sitemap per language without a parent index</li>
        <li>Missing <code>lastmod</code> because <code>enableGitInfo</code> is off and <code>.Lastmod</code> falls back to <code>.Date</code></li>
        <li><code>_index.md</code> section pages emitted but accidentally filtered out by a custom template</li>
        <li>Default priority of 0.5 on everything - Google ignores it, but it confuses humans reading the file</li>
        <li>Sitemap published at <code>/sitemap.xml</code> but robots.txt pointing at <code>/sitemap_index.xml</code> (or vice versa)</li>
      </ul>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>hugo.toml sitemap config</h2>
      <div style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
        <pre style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: '#1c1c26', whiteSpace: 'pre-wrap', fontFamily: 'DM Mono, monospace' }}>{`baseURL = 'https://example.com/'
enableGitInfo = true
disableKinds = ['taxonomy', 'term']  # drop tag/category list pages

[sitemap]
  changefreq = 'weekly'
  filename = 'sitemap.xml'
  priority = 0.5

[languages]
  [languages.en]
    weight = 1
    languageName = 'English'
    contentDir = 'content/en'
  [languages.de]
    weight = 2
    languageName = 'Deutsch'
    contentDir = 'content/de'

defaultContentLanguage = 'en'`}</pre>
      </div>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Custom layouts/sitemap.xml</h2>
      <div style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
        <pre style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: '#1c1c26', whiteSpace: 'pre-wrap', fontFamily: 'DM Mono, monospace' }}>{`<?xml version="1.0" encoding="utf-8" standalone="yes"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  {{ range where .Data.Pages "Params.sitemap_exclude" "ne" true }}
    {{ if not (in .RelPermalink "/page/") }}
      <url>
        <loc>{{ .Permalink }}</loc>
        {{ if not .Lastmod.IsZero }}
          <lastmod>{{ safeHTML (.Lastmod.Format "2006-01-02T15:04:05-07:00") }}</lastmod>
        {{ end }}
        {{ with .Sitemap.ChangeFreq }}
          <changefreq>{{ . }}</changefreq>
        {{ end }}
        {{ if ge .Sitemap.Priority 0.0 }}
          <priority>{{ .Sitemap.Priority }}</priority>
        {{ end }}
        {{ if .IsTranslated }}
          {{ range .AllTranslations }}
            <xhtml:link rel="alternate" hreflang="{{ .Lang }}" href="{{ .Permalink }}"/>
          {{ end }}
        {{ end }}
      </url>
    {{ end }}
  {{ end }}
</urlset>`}</pre>
      </div>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        This version skips anything with <code>sitemap_exclude: true</code> in front matter and any pagination URL. The <code>xhtml:link</code> block emits hreflang alternates for translated content.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Multilingual sitemap index</h2>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        With multiple languages configured, Hugo generates <code>/en/sitemap.xml</code>, <code>/de/sitemap.xml</code>, etc. Add a <code>layouts/sitemapindex.xml</code> template so you have a single URL to submit to Google Search Console. Some Hugo versions need an explicit output format declaration in <code>hugo.toml</code> under <code>[outputs]</code> to actually render the index - check with <code>hugo list --output</code> if the file isn't appearing in <code>public/</code>.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Deployment pipeline notes</h2>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        Production builds should be plain <code>hugo</code> or <code>hugo --minify</code>. Never ship with <code>--buildDrafts</code> or <code>--buildFuture</code> - that's how draft posts leak into live sitemaps. If you use a preview environment, put it on a separate domain with its own robots.txt that blocks everything. Netlify and Vercel preview deploys are usually fine because the preview URL is randomized and not linked to your production domain.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Step-by-Step Fix Guide</h2>
      <ol style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li style={{ marginBottom: 12 }}>Set <code>enableGitInfo = true</code> in <code>hugo.toml</code> so <code>.Lastmod</code> reflects actual commit times</li>
        <li style={{ marginBottom: 12 }}>Disable unused kinds (<code>disableKinds = [&apos;taxonomy&apos;, &apos;term&apos;]</code>) if tag/category pages shouldn't exist</li>
        <li style={{ marginBottom: 12 }}>Create <code>layouts/sitemap.xml</code> and filter on <code>sitemap_exclude</code> and pagination URLs</li>
        <li style={{ marginBottom: 12 }}>Add <code>sitemap_exclude: true</code> to thank-you pages, legal notices, and any near-duplicate landing pages</li>
        <li style={{ marginBottom: 12 }}>Never run <code>--buildDrafts</code> or <code>--buildFuture</code> in production</li>
        <li style={{ marginBottom: 12 }}>For multilingual, set <code>[languages]</code> with <code>weight</code> and <code>defaultContentLanguage</code>, and add <code>layouts/sitemapindex.xml</code></li>
        <li style={{ marginBottom: 12 }}>Deploy, verify with <code>curl https://yourdomain.com/sitemap.xml | grep -c "&lt;url&gt;"</code></li>
        <li style={{ marginBottom: 12 }}>Submit to Google Search Console and monitor coverage</li>
      </ol>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, marginTop: 40 }}>Frequently Asked Questions</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
        <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Where is Hugo&apos;s default sitemap template?</div>
          <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>It&apos;s embedded in the Hugo binary and outputs /sitemap.xml. Override it by creating layouts/sitemap.xml in your project. For multilingual sites, add layouts/sitemapindex.xml for the index file.</div>
        </div>
        <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Why are _index.md pages missing from my Hugo sitemap?</div>
          <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>They&apos;re included by default - you might be excluding them by accident. Check that your custom sitemap template doesn&apos;t filter on .Kind and confirm the section page has no draft: true or sitemap_exclude: true in front matter.</div>
        </div>
        <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>How do I handle multilingual sitemaps in Hugo?</div>
          <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Hugo generates one sitemap per language when you enable [languages] config. Ship a sitemapindex.xml template that references each /en/sitemap.xml, /de/sitemap.xml, etc., and submit the index to Google Search Console.</div>
        </div>
      </div>

      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Analyze your Hugo sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Find all issues in your sitemap - free, no credit card needed</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>
          Analyze My Sitemap Free
        </a>
      </div>

      <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
        <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Other platform guides</div>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <li><a href="/fix-sitemap-for/astro" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Astro</a></li>
          <li><a href="/fix-sitemap-for/gatsby" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Gatsby</a></li>
          <li><a href="/fix-sitemap-for/nextjs" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Next.js</a></li>
          <li><a href="/fix-sitemap-for/nuxt" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Nuxt</a></li>
          <li><a href="/learn/hugo-sitemap" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Hugo Sitemap Guide</a></li>
        </ul>
      </div>
    </div>
  );
}
