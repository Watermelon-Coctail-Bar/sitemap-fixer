import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Sitemap Index File: What It Is and When You Need One | SitemapFixer',
  description: "A sitemap index file points to multiple individual sitemaps. Learn when you need one, how to create it, and how it differs from a regular sitemap.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/sitemap-index-file' },
};
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Sitemap Index File</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Sitemap Index File: What It Is and When You Need One</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your sitemap index free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Validate My Sitemap</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        <p style={{ marginBottom: 24 }}>A sitemap index file is a special XML file that points to multiple individual sitemaps instead of listing URLs directly. Think of it as a table of contents for your sitemaps. A single XML sitemap is limited to 50,000 URLs and 50MB. If your site exceeds either limit, you need to split your URLs across multiple sitemaps and use an index file to tie them together.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>When You Need a Sitemap Index</h2>
        <p style={{ marginBottom: 24 }}>You need a sitemap index when your site has more than 50,000 URLs, when you want to organize different types of content into separate sitemaps (posts vs products vs images), or when your sitemap file exceeds 50MB. Even with fewer URLs, many large sites use a sitemap index to organize content by type - it makes it easier to see which sections are crawled well and which are not in Google Search Console.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Sitemap Index Format</h2>
        <p style={{ marginBottom: 16 }}>A sitemap index uses the sitemapindex XML tag instead of urlset. Each entry uses sitemap and loc tags:</p>
        <div style={{ background: '#0a0a0f', borderRadius: 10, padding: '20px 24px', marginBottom: 24, fontFamily: 'monospace', fontSize: 13, color: '#e5e7eb', lineHeight: 1.7, overflowX: 'auto' }}>
          <div>{'<?xml version="1.0" encoding="UTF-8"?>'}</div>
          <div>{'<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'}</div>
          <div style={{ paddingLeft: 20 }}>{'<sitemap>'}</div>
          <div style={{ paddingLeft: 40 }}>{'<loc>https://yoursite.com/sitemap-posts.xml</loc>'}</div>
          <div style={{ paddingLeft: 40 }}>{'<lastmod>2025-04-01</lastmod>'}</div>
          <div style={{ paddingLeft: 20 }}>{'</sitemap>'}</div>
          <div style={{ paddingLeft: 20 }}>{'<sitemap>'}</div>
          <div style={{ paddingLeft: 40 }}>{'<loc>https://yoursite.com/sitemap-pages.xml</loc>'}</div>
          <div style={{ paddingLeft: 40 }}>{'<lastmod>2025-04-01</lastmod>'}</div>
          <div style={{ paddingLeft: 20 }}>{'</sitemap>'}</div>
          <div>{'</sitemapindex>'}</div>
        </div>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Submitting a Sitemap Index to Google</h2>
        <p style={{ marginBottom: 24 }}>Submit only the index file URL in Google Search Console - you do not need to submit each child sitemap individually. Google reads the index and discovers all the child sitemaps automatically. In Search Console you can see the crawl status of each child sitemap listed under the index, which makes it easy to diagnose which sections have problems.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Sitemap Index vs Regular Sitemap</h2>
        <p style={{ marginBottom: 24 }}>A regular sitemap (urlset) lists URLs directly. A sitemap index (sitemapindex) lists other sitemaps. The key difference: a sitemap index cannot contain URLs - only references to other sitemap files. If you mistakenly put URL entries inside a sitemapindex tag, Google will report a parse error. Conversely, putting sitemap references inside a urlset tag also causes an error.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>How CMSs Handle Sitemap Indexes</h2>
        <p style={{ marginBottom: 24 }}>WordPress with Yoast SEO creates a sitemap index at /sitemap_index.xml that links to separate sitemaps for posts, pages, categories, and tags. Shopify creates sitemap.xml as a sitemap index linking to product, page, collection, and blog sitemaps. Ghost splits into posts, pages, tags, and authors. If you are building a custom site, generate the index file automatically on deploy or on a schedule, updating the lastmod date each time a child sitemap changes.</p>
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Validate your sitemap index</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free - checks the index and all child sitemaps</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Check My Sitemap Free</a>
      </div>
    </div>
  );
}
