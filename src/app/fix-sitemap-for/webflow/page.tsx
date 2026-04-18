import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fix Sitemap for Webflow - Complete Guide',
  description: 'Optimize your Webflow sitemap: manage CMS collection pagination, prevent staging subdomain leaks, and improve indexing of dynamic pages.',
  alternates: { canonical: 'https://sitemapfixer.com/fix-sitemap-for/webflow' },
  openGraph: {
    title: 'Fix Sitemap for Webflow - Complete Guide',
    description: 'Optimize your Webflow sitemap: manage CMS collection pagination, prevent staging subdomain leaks, and improve indexing of dynamic pages.',
    url: 'https://sitemapfixer.com/fix-sitemap-for/webflow',
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
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'Fix Sitemap for Webflow - Complete Guide', description: 'Optimize your Webflow sitemap: manage CMS collection pagination, prevent staging subdomain leaks, and improve indexing of dynamic pages.', url: 'https://sitemapfixer.com/fix-sitemap-for/webflow', author: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com' }, publisher: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com', logo: { '@type': 'ImageObject', url: 'https://sitemapfixer.com/opengraph-image' } }, datePublished: '2026-04-17', mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://sitemapfixer.com/fix-sitemap-for/webflow' } }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sitemapfixer.com/' }, { '@type': 'ListItem', position: 2, name: 'Fix by Platform', item: 'https://sitemapfixer.com/fix-sitemap-for' }, { '@type': 'ListItem', position: 3, name: 'Fix Sitemap for Webflow - Complete Guide', item: 'https://sitemapfixer.com/fix-sitemap-for/webflow' }] }),
        }}
      />

      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>
        {'  '}
        <a href="/fix-sitemap-for" style={{ color: '#2d5be3', textDecoration: 'none' }}>Platform Guides</a>
        {'  '}
        <span>Webflow</span>
      </nav>

      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>
        Fix Your Sitemap for Webflow
      </h1>
      <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        Webflow auto-generates a sitemap, but CMS collections, paginated collection lists, and staging subdomains routinely cause issues that hurt indexing and crawl efficiency.
      </p>

      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Analyze your Webflow sitemap now </span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>
          Try Sitemap Fixer Free
        </a>
      </div>

      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 24 }}>
        Webflow sites have specific sitemap challenges tied to how CMS collections, dynamic templates, and the
        webflow.io staging domain interact with auto-generation. This guide covers the most common issues and exactly how to fix them.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common Webflow Sitemap Issues</h2>
      <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li>Staging subdomain (yoursite.webflow.io) URLs leaking into sitemap and competing with the custom domain</li>
        <li>CMS Collection pagination URLs (?page=2) included or excluded inconsistently</li>
        <li>Draft or unpublished CMS items appearing in the auto-generated sitemap</li>
        <li>Utility pages (404, password, search) incorrectly listed despite being noindex</li>
        <li>Missing or inaccurate lastmod values since Webflow uses publish time, not item update time</li>
        <li>Collection template pages listed without their parent list, breaking crawl flow</li>
      </ul>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Step-by-Step Fix Guide</h2>
      <ol style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li style={{ marginBottom: 12 }}>In Project Settings - SEO tab, enable Auto-generate sitemap.xml and verify your custom domain is set as the primary</li>
        <li style={{ marginBottom: 12 }}>Disable subdomain indexing by adding a robots.txt rule blocking webflow.io crawling (Project Settings - SEO - robots.txt)</li>
        <li style={{ marginBottom: 12 }}>For full control, switch to a custom sitemap.xml pasted into the sitemap field and exclude paginated Collection List URLs</li>
        <li style={{ marginBottom: 12 }}>Mark utility pages (404, password, style guide) as Exclude from sitemap in Page Settings - SEO</li>
        <li style={{ marginBottom: 12 }}>For each CMS Collection template, toggle Exclude from sitemap on individual items you do not want indexed</li>
        <li style={{ marginBottom: 12 }}>Publish the site to apply sitemap changes - Webflow only regenerates sitemap.xml on publish</li>
        <li style={{ marginBottom: 12 }}>Run Sitemap Fixer against yourdomain.com/sitemap.xml and submit the validated URL to Google Search Console</li>
      </ol>

      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Analyze your Webflow sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Find all issues in your sitemap - free, no credit card needed</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>
          Analyze My Sitemap Free
        </a>
      </div>

      <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
        <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Other platform guides</div>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <li><a href="/fix-sitemap-for/wordpress" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>WordPress</a></li>
          <li><a href="/fix-sitemap-for/shopify" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Shopify</a></li>
          <li><a href="/fix-sitemap-for/squarespace" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Squarespace</a></li>
          <li><a href="/fix-sitemap-for/framer" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Framer</a></li>
          <li><a href="/learn/webflow-sitemap" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Webflow Sitemap Guide</a></li>
        </ul>
      </div>
    </div>
  );
}
