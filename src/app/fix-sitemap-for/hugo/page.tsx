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

      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>
        {'  '}
        <a href="/fix-sitemap-for" style={{ color: '#2d5be3', textDecoration: 'none' }}>Platform Guides</a>
        {'  '}
        <span>Hugo</span>
      </nav>

      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>
        Fix Your Sitemap for Hugo
      </h1>
      <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        Hugo ships a default sitemap.xml template, but taxonomies, section pages, future-dated posts, and multilingual mounts quickly create a sitemap that does not match what you actually want indexed.
      </p>

      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Analyze your Hugo sitemap now </span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>
          Try Sitemap Fixer Free
        </a>
      </div>

      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 24 }}>
        Hugo site builders often forget to override the default sitemap.xml template or adjust taxonomies in hugo.toml,
        which leaves term pages and auto-generated tag lists competing with real content. This guide covers the exact configuration changes that matter.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common Hugo Sitemap Issues</h2>
      <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li>Taxonomy list pages (/tags/, /categories/) appearing alongside content, inflating sitemap with thin aggregates</li>
        <li>Draft and future-dated posts included when building with --buildDrafts or --buildFuture flags</li>
        <li>Pagination URLs (/page/2/) treated as unique pages and emitted by default sitemap.xml</li>
        <li>Hugo Multilingual creating one sitemap per language without a parent sitemap index</li>
        <li>sitemap.filename or sitemap.changefreq in hugo.toml pointing at the wrong output format</li>
        <li>Missing lastmod because enableGitInfo is disabled and .Lastmod falls back to .Date</li>
      </ul>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Step-by-Step Fix Guide</h2>
      <ol style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li style={{ marginBottom: 12 }}>In hugo.toml, set enableGitInfo = true so .Lastmod reflects actual git commit times</li>
        <li style={{ marginBottom: 12 }}>Disable unused taxonomies (example: disableKinds = ["taxonomy", "term"]) if you do not want tag and category pages in sitemap</li>
        <li style={{ marginBottom: 12 }}>Override layouts/sitemap.xml to loop over .Site.Pages and skip pages where .Params.sitemap_exclude is true</li>
        <li style={{ marginBottom: 12 }}>In each section front matter, add sitemap_exclude: true on thank-you, legal, and duplicate landing pages</li>
        <li style={{ marginBottom: 12 }}>Do not pass --buildDrafts or --buildFuture in your production hugo build command; keep them for local previews only</li>
        <li style={{ marginBottom: 12 }}>For multilingual sites, set [languages] with weight and defaultContentLanguage, and add a sitemap_index.xml template that references each /en/sitemap.xml</li>
        <li style={{ marginBottom: 12 }}>Deploy, then run Sitemap Fixer against yourdomain.com/sitemap.xml and submit to Google Search Console</li>
      </ol>

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
