import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Duplicate Content SEO: How to Find and Fix It',
  description: "Duplicate content confuses Google about which page to rank. How to find it, which fixes to use (canonical vs 301 vs noindex), and when each applies.",
  alternates: { canonical: 'https://sitemapfixer.com/blog/duplicate-content-seo-fix' },
  openGraph: { title: 'Duplicate Content SEO: Find and Fix Guide', description: 'How to identify duplicate content and choose the right fix: canonical, 301, or noindex.', url: 'https://sitemapfixer.com/blog/duplicate-content-seo-fix', type: 'article',
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
const items = [
  { t: "What duplicate content actually costs you", d: "When Google finds multiple pages with identical or very similar content, it has to choose which one to show in search results. It often chooses the wrong one. Your preferred page may be demoted in favor of a parameter-based URL, a printer-friendly version, or a category path variant. Link equity from backlinks pointing to either version is split rather than consolidated. The result: neither page ranks as well as it would if the duplicate issue were resolved." },
  { t: "The most common sources of duplicate content", d: "HTTP vs HTTPS versions of your site still both loading. www and non-www both accessible. URL parameters creating variants: /products?sort=price, /products?color=red, /products?ref=newsletter. Trailing slash vs no trailing slash: /about vs /about/. Product pages accessible through multiple category paths: /category-a/product and /category-b/product. Print-friendly pages. Syndicated content published on multiple sites. Pagination: /page/1 duplicating the main category URL." },
  { t: "Fix 1: Canonical tags - tell Google which page is preferred", d: "Add a canonical tag to every duplicate pointing to the preferred version: link rel=canonical href=https://yoursite.com/preferred-url. Use canonicals when you need both URLs to exist for functional reasons (different faceted navigation states, tracking parameters) but want Google to index only one. The canonical tag is a strong hint to Google but not an absolute directive - Google may still crawl duplicates and occasionally ignore the canonical if it disagrees." },
  { t: "Fix 2: 301 redirect - consolidate permanently", d: "When a URL serves no unique purpose and is purely a duplicate, 301 redirect it to the canonical version. Use 301s for: HTTP to HTTPS migration, www to non-www consolidation, old URLs after restructuring, and any URL that should simply not exist independently. A 301 is a stronger signal than a canonical - Google follows it and transfers essentially full PageRank to the destination. Always prefer a 301 over a canonical when the duplicate URL has no legitimate reason to exist." },
  { t: "Fix 3: Noindex - exclude from index but keep crawlable", d: "Use noindex (meta name=robots content=noindex) for pages that need to exist and be crawlable but should not be indexed: search results pages, filter pages with low-value content, paginated pages beyond page 2-3, admin-facing pages, and tag archives. Noindex tells Google to exclude the page from search results but does not prevent crawling (unlike robots.txt Disallow). Use noindex when you want Google to follow links on the page but not index the page itself." },
  { t: "Checking your sitemap for duplicate signals", d: "A well-configured sitemap only contains canonical URLs - the single preferred version of each page. If your sitemap contains both yoursite.com/product and yoursite.com/category/product, or both http:// and https:// versions, or trailing and non-trailing slash variants, these are signals of duplicate content issues. SitemapFixer analyzes your sitemap for duplicate URL patterns and flags them automatically." },
];
export default function Page() {
  return (
    <article style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/blog" style={{ color: '#2d5be3', textDecoration: 'none' }}>Blog</a>{' / '}
        <span>Duplicate Content SEO Fix</span>
      </nav>
      <div style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 16 }}>By <a href="/about" style={{ color: '#2d5be3', textDecoration: 'none' }}>Arnoldas Arny</a></div>
      <div style={{ fontSize: 13, color: '#9ca3af', marginBottom: 12 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"Article","headline":"Duplicate Content SEO: How to Find and Fix It","description":"Duplicate content confuses Google about which page to rank and dilutes your authority. Here is how to find it, which fixes to use (canonical vs 301 vs noindex), and when each applies.","url":"https://sitemapfixer.com/blog/duplicate-content-seo-fix","author":{"@type":"Person","name":"Arnoldas Arny","url":"https://sitemapfixer.com/about"},"publisher":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com","logo":{"@type":"ImageObject","url":"https://sitemapfixer.com/opengraph-image"}},"datePublished":"2025-01-15","mainEntityOfPage":{"@type":"WebPage","@id":"https://sitemapfixer.com/blog/duplicate-content-seo-fix"}}' }} />April 2025 · 8 min read</div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, lineHeight: 1.15 }}>Duplicate Content SEO: How to Find and Fix It</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Find duplicate URL patterns in your sitemap</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Sitemap Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        {items.map(({ t, d }) => (
          <div key={t} style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12 }}>{t}</h2>
            <p style={{ margin: 0 }}>{d}</p>
          </div>
        ))}
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Check your sitemap for duplicate URL patterns</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free - detects duplicates and canonical issues</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Sitemap Free</a>
  
        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/blog/content-audit-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Content Audit: How to Audit Your Site for SEO</a></li>
            <li><a href="/blog/content-marketing-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Content Marketing SEO: Drive Organic Growth</a></li>
            <li><a href="/blog/thin-content-fix" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Thin Content: Find It, Fix It, Recover Rankings</a></li>
            <li><a href="/blog/thin-content-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Thin Content: What It Is and How to Fix It</a></li>
            <li><a href="/blog/keyword-cannibalization" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Keyword Cannibalization: How to Find and Fix It</a></li>
          
            <li><a href="/learn/duplicate-content-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Duplicate Content SEO: Causes, Impact, and Fixes</a></li></ul>
        </div>
    </div>
    </article>
  );
}
