import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Pagination SEO: Handle Page 2, 3, 4 Right',
  description: "Pagination creates duplicate content risks and crawl budget waste. Here is how to correctly handle paginated content with canonical tags, rel=next/prev, and sitemap strategy.",
  alternates: { canonical: 'https://sitemapfixer.com/blog/pagination-seo-guide' },
  openGraph: {
    title: 'Pagination SEO: Handle Page 2, 3, 4 Right',
    description: 'Pagination creates duplicate content risks and crawl budget waste. Here is how to correctly handle paginated content with canonical tags, rel=next/prev, and sitemap strategy.',
    url: 'https://sitemapfixer.com/blog/pagination-seo-guide',
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
const sections = [
  { t: "The pagination problem for SEO", d: "Paginated pages (category/page/2, blog/page/3) create multiple pages with very similar content - each page shows the same type of content just at different offsets. This can dilute ranking signals across many pages instead of concentrating them. Google may choose to index paginated pages over your main category page if signals are mixed. Crawl budget is also spent on pagination pages that rarely receive meaningful organic traffic." },
  { t: "The correct modern approach: self-referencing canonicals", d: "After Google deprecated rel=next/prev support in 2019, the recommended approach is: each paginated page (page/2, page/3) should have a self-referencing canonical pointing to itself - not to page/1. This tells Google each page is unique and the correct canonical for itself. Do NOT canonical all paginated pages to page/1 - this tells Google pages 2, 3, 4 are duplicates of page/1 and causes them to be deindexed." },
  { t: "What to include in your sitemap", d: "Include paginated pages in your sitemap only if they receive organic traffic or have a legitimate reason to be indexed. For most blog or category pagination: only include page/1 (the main category) in your sitemap and let Google discover later pages through internal links. For large e-commerce catalogs where later pages have unique products: include all pages. Monitor in Search Console which paginated pages actually receive impressions before deciding." },
  { t: "Infinite scroll SEO", d: "Infinite scroll (content loading as users scroll) makes content inaccessible to Googlebot unless implemented correctly. Googlebot does not scroll pages - it only sees the initial page load. To make infinite scroll SEO-friendly: provide a paginated version at numbered URLs that Googlebot can crawl, and use pushState to update the URL as the user scrolls. This is called progressive loading and ensures Googlebot sees all your content." },
];
export default function Page() {
  return (
    <article style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/blog" style={{ color: '#2d5be3', textDecoration: 'none' }}>Blog</a>{' / '}
        <span>Pagination SEO Guide</span>
      </nav>
      <div style={{ fontSize: 13, color: '#9ca3af', marginBottom: 12 }}>April 2025 · 6 min read</div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, lineHeight: 1.15 }}>Pagination SEO Guide: Handle Page 2, 3, 4 Correctly</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your sitemap for pagination URL issues free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Sitemap Free</a>
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
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Check your sitemap for pagination issues</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free - detects /page/N patterns and URL duplicates</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Sitemap Free</a>
  
        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/blog/javascript-seo-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>JavaScript SEO: Make JS Sites Crawlable</a></li>
            <li><a href="/blog/https-migration-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>HTTPS Migration: Switch Without Losing Rankings</a></li>
            <li><a href="/blog/redirect-seo-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Redirect SEO: 301 vs 302 & Best Practices</a></li>
            <li><a href="/blog/crawl-budget-seo-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Crawl Budget SEO: Stop Wasting Crawls on Bad Pages</a></li>
            <li><a href="/blog/crawl-budget-optimization" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Crawl Budget Optimization: Get More Crawl Value</a></li>
          </ul>
        </div>
    </div>
    </article>
  );
}
