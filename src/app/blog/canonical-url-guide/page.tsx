import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Canonical URL: What It Is and How to Set It Correctly',
  description: "Canonical URLs tell Google which page version to index. Misusing them causes duplicate content. How they work and how to implement them correctly.",
  alternates: { canonical: 'https://sitemapfixer.com/blog/canonical-url-guide' },
  openGraph: { title: 'Canonical URL Guide: How to Use rel=canonical Correctly', url: 'https://sitemapfixer.com/blog/canonical-url-guide', type: 'article',
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
const sections = [
  { t: "What a Canonical Tag Does", d: "A canonical tag is an HTML element in a page's head section that tells search engines which URL is the 'preferred' or 'master' version of that page. When Google sees link rel=canonical href=https://example.com/page, it treats that URL as the one to index and rank, even if it crawled the page from a different URL. Canonical tags are the primary tool for managing duplicate content without 301 redirects." },
  { t: "Self-Referencing Canonicals", d: "Best practice is to add a self-referencing canonical to every page - a canonical tag that points to the page's own URL. This prevents Google from picking an unexpected canonical if it discovers your page through a different URL (e.g., with UTM parameters appended). In Next.js, set alternates.canonical in every metadata object. In WordPress with Yoast or RankMath, the plugin adds self-referencing canonicals automatically." },
  { t: "Common Canonical Tag Mistakes", d: "Canonical pointing to wrong domain: after a site migration, old canonical tags pointing to the previous domain may persist. Google indexes the old domain. Always audit canonicals after any migration. Canonical on paginated pages pointing to page 1: this tells Google pages 2, 3, 4 are all duplicates of page 1 and deindexes them. Paginated pages should have self-referencing canonicals, not page-1 canonicals. Noindex + canonical conflict: a page with both noindex and a canonical tag sends contradictory signals - Google may choose to respect noindex and ignore the canonical entirely." },
  { t: "Canonical vs 301 Redirect", d: "A 301 redirect is a stronger signal than a canonical. When you genuinely want to consolidate two pages into one, use a 301 redirect from the unwanted URL to the preferred URL. Canonical tags are for managing which version Google indexes when you need both URLs to remain accessible - for example, keeping filtered URLs accessible for users while canonicalizing them to the main category page for SEO. If you can use a 301, prefer it over a canonical." },
  { t: "Checking Canonical Tags at Scale", d: "Use Screaming Frog to crawl your site and export all canonical tags. Look for: pages where the canonical points to a different domain, pages where the canonical is empty, pages where the canonical and URL do not match but you expect them to, and paginated pages where the canonical should be self-referencing but is not. SitemapFixer analyzes URLs in your sitemap and flags patterns suggesting canonical tag issues." },
];
export default function Page() {
  return (
    <article style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/blog" style={{ color: '#2d5be3', textDecoration: 'none' }}>Blog</a>{' / '}
        <span>Canonical URL Guide</span>
      </nav>
      <div style={{ fontSize: 13, color: '#9ca3af', marginBottom: 12 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"Article","headline":"Canonical URL: What It Is and How to Set It Correctly","description":"Canonical URLs tell Google which version of a page to index. Misusing them is one of the most common causes of duplicate content. Here is exactly how they work and how to use them.","url":"https://sitemapfixer.com/blog/canonical-url-guide","author":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com"},"publisher":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com","logo":{"@type":"ImageObject","url":"https://sitemapfixer.com/opengraph-image"}},"datePublished":"2025-01-15","mainEntityOfPage":{"@type":"WebPage","@id":"https://sitemapfixer.com/blog/canonical-url-guide"}}' }} />April 2025 · 7 min read</div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, lineHeight: 1.15 }}>Canonical URL: What It Is and How to Set It Correctly</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check canonical issues in your sitemap free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Site Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        {sections.map(({ t, d }) => (
          <div key={t} style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12 }}>{t}</h2>
            <p style={{ margin: 0 }}>{d}</p>
          </div>
        ))}
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Check your canonical configuration</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free sitemap analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
  
        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/blog/ecommerce-seo-tips" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Ecommerce SEO: Get Product Pages to Rank</a></li>
            <li><a href="/blog/social-media-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Social Media SEO: Do Social Signals Matter?</a></li>
            <li><a href="/blog/mobile-seo-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Mobile SEO Guide: Optimize Your Site for Mobile Search</a></li>
            <li><a href="/blog/video-seo-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Video SEO: Rank Videos on Google and YouTube</a></li>
            <li><a href="/blog/url-structure-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>URL Structure SEO: How to Create SEO-Friendly URLs</a></li>
          </ul>
        </div>
    </div>
    </article>
  );
}
