import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Orphan Pages: What They Are and How to Fix Them | SitemapFixer',
  description: "Orphan pages have no internal links pointing to them, making them nearly invisible to Google. Here is how to find every orphan page on your site and fix them efficiently.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/orphan-pages' },
};
const sections = [
  { h: "What Orphan Pages Are", d: "An orphan page is a page on your site that has no internal links pointing to it from any other page. Google discovers most pages by following links from other pages. When a page has no internal links, Google may still find it via your sitemap, but it accumulates no internal PageRank and receives far less crawl frequency than linked pages. Even great content on an orphan page ranks poorly because Google has no context for how it fits into your site structure." },
  { h: "Why Orphan Pages Happen", d: "Common causes: content published without being linked from related posts, old content whose linking posts were deleted, product pages added to a store without being linked from category pages, blog posts never added to a hub or resource page, pages created for a campaign and then forgotten, and pages migrated from an old site where the internal link structure was not recreated. Every site accumulates orphans over time without active internal linking audits." },
  { h: "Finding Orphan Pages", d: "The most reliable method: crawl your site with Screaming Frog to get the complete list of URLs it can reach by following links. Then compare this crawl list against your sitemap. URLs in your sitemap that do not appear in the crawl results are likely orphans. Screaming Frog also has a dedicated orphan pages report if you crawl from your sitemap. Google Search Console shows pages that are indexed but may have low internal link count in the Links report." },
  { h: "Fixing Orphan Pages", d: "For each orphan page, add at least 3 internal links from relevant existing pages. Start with your most authoritative pages — hub pages, high-traffic posts, and navigation pages. If you have a hub page on the topic, add the orphan to it. If not, update 2-3 topically related posts to include a link. After adding internal links, update the page's lastmod date in your sitemap so Google re-crawls it with its new link context. Rankings often improve within weeks." },
  { h: "Preventing Future Orphans", d: "Build internal linking into your content workflow. Before publishing any new page, identify which 2-3 existing pages will link to it and update those pages. Create hub pages for your main topics and add every new cluster page to the relevant hub. Audit for orphans quarterly using Screaming Frog vs sitemap comparison. A page with no path to it from your homepage is a page Google will struggle to value appropriately." },
];
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Orphan Pages</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Orphan Pages: Find Them and Fix Them</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Find orphan pages in your sitemap free</span>
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
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Find orphan pages in your sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free sitemap analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>
    </div>
  );
}
