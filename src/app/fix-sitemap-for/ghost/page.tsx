import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fix Sitemap for Ghost - Complete Guide',
  description: 'Optimize your Ghost sitemap: manage sitemap-pages.xml, tag and author indexes, AMP variants, and RSS feed interactions for better indexing.',
  alternates: { canonical: 'https://sitemapfixer.com/fix-sitemap-for/ghost' },
  openGraph: {
    title: 'Fix Sitemap for Ghost - Complete Guide',
    description: 'Optimize your Ghost sitemap: manage sitemap-pages.xml, tag and author indexes, AMP variants, and RSS feed interactions for better indexing.',
    url: 'https://sitemapfixer.com/fix-sitemap-for/ghost',
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
  const faqSchema = "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"What are Ghost's default sitemap URLs?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"/sitemap.xml is the index, and it references /sitemap-posts.xml, /sitemap-pages.xml, /sitemap-tags.xml, /sitemap-authors.xml, and on older versions /sitemap-amp.xml. Ghost generates all of them automatically - you can't add custom sub-sitemaps.\"}},{\"@type\":\"Question\",\"name\":\"Can I hide tags from the Ghost sitemap?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes. Prefix a tag with # to make it an internal tag - internal tags don't appear in sitemap-tags.xml or anywhere public. Use them for editorial categorization that shouldn't produce a URL.\"}},{\"@type\":\"Question\",\"name\":\"Does Ghost sitemap work with a subdirectory install?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes, but the URL shifts. If Ghost is at /blog/, the sitemap is at yourdomain.com/blog/sitemap.xml and all URLs inside include the /blog/ prefix. Submit that URL to GSC, not the root one.\"}}]}";

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px', fontFamily: 'Geist, sans-serif' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'Fix Sitemap for Ghost - Complete Guide', description: 'Optimize your Ghost sitemap: manage sitemap-pages.xml, tag and author indexes, AMP variants, and RSS feed interactions for better indexing.', url: 'https://sitemapfixer.com/fix-sitemap-for/ghost', author: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com' }, publisher: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com', logo: { '@type': 'ImageObject', url: 'https://sitemapfixer.com/opengraph-image' } }, datePublished: '2026-04-17', mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://sitemapfixer.com/fix-sitemap-for/ghost' } }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sitemapfixer.com/' }, { '@type': 'ListItem', position: 2, name: 'Fix by Platform', item: 'https://sitemapfixer.com/fix-sitemap-for' }, { '@type': 'ListItem', position: 3, name: 'Fix Sitemap for Ghost - Complete Guide', item: 'https://sitemapfixer.com/fix-sitemap-for/ghost' }] }),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />

      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>
        {'  /  '}
        <a href="/fix-sitemap-for" style={{ color: '#2d5be3', textDecoration: 'none' }}>Platform Guides</a>
        {'  /  '}
        <span>Ghost</span>
      </nav>

      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>
        Fix Your Sitemap for Ghost
      </h1>
      <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        Ghost generates a sitemap index at <code>/sitemap.xml</code> with separate children for posts, pages, tags, and authors. Each of these sub-sitemaps has its own quirks that can surface thin or duplicate content.
      </p>

      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Analyze your Ghost sitemap now</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>
          Try Sitemap Fixer Free
        </a>
      </div>

      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 24 }}>
        Ghost splits its sitemap into sub-files automatically, which is great - you get per-category coverage data in Google Search Console. The flip side: each sub-file is generated without user input, so a stale author or abandoned tag silently ends up in search results. And Ghost won't let you edit the sitemap directly. All fixes happen upstream, in your Ghost Admin dashboard.
      </p>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 32 }}>
        Looked at a Ghost newsletter site with 480 posts. The sitemap index showed 480 posts, 14 pages, 312 tags, and 9 authors. Turns out the 312 tags included every guest-post tag the team had ever used (one tag per guest), and only 2 of the 9 authors had published anything in the past year. Cleaning both brought GSC's "crawled, not indexed" bucket down from 38% to 11%.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common Ghost Sitemap Issues</h2>
      <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li><code>sitemap-tags.xml</code> exposing empty or guest-only tags</li>
        <li><code>sitemap-authors.xml</code> listing staff who've never published, creating thin author archives</li>
        <li><code>sitemap-amp.xml</code> still live on older Ghost installs after AMP was deprecated</li>
        <li>Members-only and paid-only posts appearing with partial content in <code>sitemap-posts.xml</code></li>
        <li>RSS feeds (<code>/rss</code>, <code>/feed</code>) inconsistent with sitemap URL structure</li>
        <li>Paginated index pages (<code>/page/2/</code>) leaking in via custom themes using the pagination helper</li>
        <li>Subdirectory installs (Ghost at <code>/blog/</code>) submitted as root-level sitemaps in GSC by mistake</li>
        <li>Custom domain changes leaving old domain URLs in the sitemap until cache rebuilds</li>
      </ul>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Tag and author hygiene</h2>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 16 }}>
        Ghost has an underused feature: <strong>internal tags</strong>. Any tag prefixed with <code>#</code> is internal-only - it doesn't render on the site, doesn't appear in <code>sitemap-tags.xml</code>, and doesn't get its own URL. Use them liberally for editorial categorization that shouldn't produce public pages.
      </p>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        For authors: every staff member with login access gets an author page, whether they've published or not. In Ghost Admin &gt; Staff, remove people who'll never write, or demote them to Contributor and reassign their posts to the owner. The author archive disappears as soon as the account is removed.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>AMP cleanup on older installs</h2>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 16 }}>
        Ghost 4.x and earlier shipped AMP output and emitted <code>sitemap-amp.xml</code>. AMP has been deprecated, but the sitemap entry can linger after upgrade. Disable AMP in Settings &gt; Integrations &gt; AMP, then 410 the old paths at the reverse proxy:
      </p>
      <div style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
        <pre style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: '#1c1c26', whiteSpace: 'pre-wrap', fontFamily: 'DM Mono, monospace' }}>{`# nginx
location ~ /amp/?$ {
  return 410;
}

# Caddy
@amp path_regexp /amp/?$
respond @amp 410

# Also verify
curl -I https://yoursite.com/some-post/amp/
# HTTP/2 410`}</pre>
      </div>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Members-only posts and canonicals</h2>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        Posts set to Members or Paid access still render a public teaser and still go into <code>sitemap-posts.xml</code>. That's usually fine - Google indexes the teaser and users click through. But if you have two versions of the same content (a public teaser and a members-only full post at a different URL), set the canonical on both to the same URL so they don't compete. Ghost lets you set a Canonical URL in each post's metadata panel.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Subdirectory installs</h2>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        If Ghost runs at <code>yourdomain.com/blog/</code>, the sitemap URL is <code>yourdomain.com/blog/sitemap.xml</code>, and every URL inside has the <code>/blog/</code> prefix. Submit this URL, not the root one. In GSC, if your site uses the root domain as a property, the blog sitemap will show up fine - but make sure your Ghost <code>url</code> config in <code>config.production.json</code> includes the subdirectory, or internal links will be broken.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Step-by-Step Fix Guide</h2>
      <ol style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li style={{ marginBottom: 12 }}>In Ghost Admin &gt; Tags, delete or merge empty and guest-only tags. Prefix internal-only tags with <code>#</code></li>
        <li style={{ marginBottom: 12 }}>Under Staff, remove inactive authors so <code>sitemap-authors.xml</code> lists only real contributors</li>
        <li style={{ marginBottom: 12 }}>Disable AMP and 410 the <code>/*/amp</code> paths at the reverse proxy if on Ghost 4 or earlier</li>
        <li style={{ marginBottom: 12 }}>Set canonical URLs on members-only posts that duplicate public content</li>
        <li style={{ marginBottom: 12 }}>Edit robots.txt via hosting config (Ghost Pro: ask support) to disallow <code>/p/</code> preview routes</li>
        <li style={{ marginBottom: 12 }}>Restart Ghost or wait for cache rebuild, then verify with <code>curl https://yoursite.com/sitemap.xml</code></li>
        <li style={{ marginBottom: 12 }}>Submit each sub-sitemap to Google Search Console to get per-type coverage reports</li>
        <li style={{ marginBottom: 12 }}>Monitor the tags and authors sub-sitemaps monthly - they're the ones that rot quietly</li>
      </ol>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, marginTop: 40 }}>Frequently Asked Questions</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
        <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>What are Ghost&apos;s default sitemap URLs?</div>
          <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>/sitemap.xml is the index, and it references /sitemap-posts.xml, /sitemap-pages.xml, /sitemap-tags.xml, /sitemap-authors.xml, and on older versions /sitemap-amp.xml. Ghost generates all of them automatically - you can&apos;t add custom sub-sitemaps.</div>
        </div>
        <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Can I hide tags from the Ghost sitemap?</div>
          <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Yes. Prefix a tag with # to make it an internal tag - internal tags don&apos;t appear in sitemap-tags.xml or anywhere public. Use them for editorial categorization that shouldn&apos;t produce a URL.</div>
        </div>
        <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Does Ghost sitemap work with a subdirectory install?</div>
          <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Yes, but the URL shifts. If Ghost is at /blog/, the sitemap is at yourdomain.com/blog/sitemap.xml and all URLs inside include the /blog/ prefix. Submit that URL to GSC, not the root one.</div>
        </div>
      </div>

      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Analyze your Ghost sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Find all issues in your sitemap - free, no credit card needed</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>
          Analyze My Sitemap Free
        </a>
      </div>

      <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
        <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Other platform guides</div>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <li><a href="/fix-sitemap-for/wordpress" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>WordPress</a></li>
          <li><a href="/fix-sitemap-for/hugo" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Hugo</a></li>
          <li><a href="/fix-sitemap-for/gatsby" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Gatsby</a></li>
          <li><a href="/fix-sitemap-for/nextjs" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Next.js</a></li>
          <li><a href="/learn/ghost-sitemap" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Ghost Sitemap Guide</a></li>
        </ul>
      </div>
    </div>
  );
}
