import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Incorrect Priority in Sitemap: Fix Guide',
  description: 'Sitemap priority values are often misused. Learn the correct way to set priority in your XML sitemap and how it affects crawl decisions.',
  alternates: { canonical: 'https://sitemapfixer.com/sitemap-errors/incorrect-priority' },
  openGraph: {
    title: 'Incorrect Priority Values in Sitemap - Fix and Best Practices',
    description: 'Sitemap priority values are often misused. Learn the correct way to set priority in your XML sitemap and how it affects crawl decisions.',
    url: 'https://sitemapfixer.com/sitemap-errors/incorrect-priority',
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
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'Incorrect Priority in Sitemap: Fix Guide', description: 'Sitemap priority values are often misused. Learn the correct way to set priority in your XML sitemap and how it affects crawl decisions.', url: 'https://sitemapfixer.com/sitemap-errors/incorrect-priority', author: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com' }, publisher: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com', logo: { '@type': 'ImageObject', url: 'https://sitemapfixer.com/opengraph-image' } }, datePublished: '2026-04-17', mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://sitemapfixer.com/sitemap-errors/incorrect-priority' } }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sitemapfixer.com/' }, { '@type': 'ListItem', position: 2, name: 'Sitemap Errors', item: 'https://sitemapfixer.com/sitemap-errors' }, { '@type': 'ListItem', position: 3, name: 'Incorrect Priority in Sitemap: Fix Guide', item: 'https://sitemapfixer.com/sitemap-errors/incorrect-priority' }] }),
        }}
      />

      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>
        {' / '}
        <a href="/sitemap-errors" style={{ color: '#2d5be3', textDecoration: 'none' }}>Sitemap Errors</a>
        {' / '}
        <span>Incorrect Priority Values</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>
        Incorrect Priority Values in Your Sitemap
      </h1>
      <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 40 }}>
        The priority tag in XML sitemaps is one of the most misunderstood elements in technical SEO. Setting all pages to priority 1.0 does not help - it tells Google your priority system is meaningless.
      </p>
      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How to fix it</h2>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        Set priority based on page importance: Homepage 1.0, core pages 0.9, blog posts 0.7, tag pages 0.5.
      </p>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
        <div style={{ fontSize: 22, fontWeight: 700, color: 'white', marginBottom: 8 }}>Fix this in your sitemap now</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 32px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Sitemap Free</a>
      </div>
    </div>
  );
}
