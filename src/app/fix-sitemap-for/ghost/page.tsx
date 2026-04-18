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

      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>
        {'  '}
        <a href="/fix-sitemap-for" style={{ color: '#2d5be3', textDecoration: 'none' }}>Platform Guides</a>
        {'  '}
        <span>Ghost</span>
      </nav>

      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>
        Fix Your Sitemap for Ghost
      </h1>
      <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        Ghost generates a sitemap index at /sitemap.xml with separate children for posts, pages, tags, authors, and AMP. Each of these sub-sitemaps has its own gotchas that can surface thin or duplicate content.
      </p>

      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Analyze your Ghost sitemap now </span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>
          Try Sitemap Fixer Free
        </a>
      </div>

      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 24 }}>
        Because Ghost publishes sitemap-posts.xml, sitemap-pages.xml, sitemap-tags.xml, sitemap-authors.xml, and sitemap-amp.xml,
        a single bad record or stale author can put hundreds of low-value URLs in front of Googlebot. This guide covers how to clean each one.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common Ghost Sitemap Issues</h2>
      <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li>sitemap-tags.xml exposing internal or empty tags (like #hidden tags with no posts)</li>
        <li>sitemap-authors.xml listing staff members who have never published, creating thin author archives</li>
        <li>sitemap-amp.xml still live after AMP was deprecated, competing with canonical URLs</li>
        <li>Members-only and paid-only posts appearing in sitemap-posts.xml with partial content</li>
        <li>RSS feed URLs (/rss, /feed) inconsistently reflected in sitemap and robots.txt</li>
        <li>Paginated index pages (/page/2/) mixing into sitemap generation on custom themes</li>
      </ul>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Step-by-Step Fix Guide</h2>
      <ol style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li style={{ marginBottom: 12 }}>In Ghost Admin - Tags, delete or merge internal tags prefixed with # and remove tags with zero posts</li>
        <li style={{ marginBottom: 12 }}>Under Staff, demote or remove inactive authors so sitemap-authors.xml only lists real contributors</li>
        <li style={{ marginBottom: 12 }}>Disable AMP in Settings - Apps - AMP, then add a 410 or 301 rule at the reverse proxy for /*/amp paths</li>
        <li style={{ marginBottom: 12 }}>For members-only posts, set Access to Members or Paid and add a canonical URL pointing to the public teaser if applicable</li>
        <li style={{ marginBottom: 12 }}>Edit robots.txt through your hosting config (Ghost Pro lets you via support) to disallow /page/ and /p/ preview routes</li>
        <li style={{ marginBottom: 12 }}>In routes.yaml, restrict taxonomies to only the ones you want publicly crawlable and redeploy the theme</li>
        <li style={{ marginBottom: 12 }}>Run Sitemap Fixer against yourdomain.com/sitemap.xml, fix reported issues, then submit each sub-sitemap to Google Search Console</li>
      </ol>

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
