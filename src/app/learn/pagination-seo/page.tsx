import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Pagination SEO: How to Handle Paginated Content Without Losing Rankings | SitemapFixer',
  description: "Pagination creates multiple pages for the same content - blog archives, product listings, search results. Here is the correct SEO approach and what to avoid.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/pagination-seo' },
};
const sections = [
  { h: "The Pagination SEO Problem", d: "When content is split across multiple pages (/page/1, /page/2, /page/3), each page is a separate URL with a small portion of the full content. Google needs to understand these are all part of the same series. The main risks: thin content on individual pages, crawl budget spent on low-value pages, and link equity diluted across page variants instead of concentrated on the main URL." },
  { h: "The Recommended Approach: Self-Referencing Canonicals", d: "Since Google deprecated the rel=prev/next standard in 2019, the current best practice is straightforward: each paginated page should have a self-referencing canonical tag pointing to itself (not page 1). This tells Google each page is its own canonical URL, not a duplicate. Do not use a canonical pointing all paginated pages to page 1 - this tells Google pages 2, 3, 4 are duplicates of page 1 and they may be deindexed." },
  { h: "Sitemaps and Pagination", d: "Include paginated URLs selectively in your sitemap. For blog archives: include page 1 (yoursite.com/blog) and optionally the first 2-3 pages. Deeper pages (page 10, page 20) have no SEO value and waste crawl budget - exclude them. For product listing pages with filters: never include filter/sort variants (?sort=price, ?color=red) in your sitemap. Use canonical tags on these filtered pages pointing back to the main category URL." },
  { h: "Infinite Scroll and SEO", d: "Infinite scroll without paginated URLs is invisible to Google - Googlebot cannot scroll. If you use infinite scroll, implement paginated fallback URLs in parallel. Each scroll segment should have a corresponding discrete URL (/page/2, /page/3) that Googlebot can access directly. Link between paginated pages with standard anchor tags. This is how major news sites handle endless feeds while still getting content indexed." },
  { h: "Deep Pagination and Crawl Budget", d: "For large sites with hundreds of paginated pages, Googlebot will exhaust crawl budget long before reaching the deeper pages. Implement a smart pagination strategy: ensure your most important content (newest products, highest-value posts) appears as close to page 1 as possible. Use sort-by-date or relevance as default so the first page always contains your freshest content. Consider reducing page size to show more items per page, reducing total page depth." },
  { h: "Noindexing Deep Pagination", d: "For sites where paginated pages beyond page 2-3 have no realistic ranking potential, add a noindex meta tag to these deep pages. This prevents Google from indexing thin, low-value archive pages while still allowing Googlebot to follow the links on them to discover content. Keep the pages crawlable (do not block in robots.txt) but mark them noindex so they do not dilute your index quality." },
];
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Pagination SEO</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Pagination SEO: Handle Paginated Content Correctly</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your sitemap for pagination issues</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Site Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        {sections.map(({ h, d }) => (
          <div key={h} style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 10 }}>{h}</h2>
            <p style={{ margin: 0 }}>{d}</p>
          </div>
        ))}
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Find pagination issues in your sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free - detects paginated URLs and crawl waste</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>
    </div>
  );
}
