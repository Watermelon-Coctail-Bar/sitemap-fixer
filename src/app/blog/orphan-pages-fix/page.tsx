import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Orphan Pages: What They Are and How to Fix Them | SitemapFixer',
  description: "Orphan pages have no internal links pointing to them. Google rarely discovers them, they rank poorly, and they waste crawl budget. Here is how to find and fix all orphan pages.",
  alternates: { canonical: 'https://sitemapfixer.com/blog/orphan-pages-fix' },
};
const sections = [
  { t: "Why orphan pages hurt your SEO", d: "An orphan page is a page with zero internal links pointing to it. Googlebot discovers pages primarily by following links. If no page on your site links to a page, Googlebot may only discover it via your sitemap - and even then, it receives no PageRank from your site because PageRank flows through internal links. Orphan pages rank significantly worse than equivalent pages with internal links. On large sites, orphan pages also waste crawl budget on pages that are not contributing to SEO." },
  { t: "How to find orphan pages", d: "Method 1: Compare your sitemap URLs against your internal link graph. Export all pages from your sitemap, then run a Screaming Frog crawl and export the list of pages discovered by following internal links. URLs in your sitemap that do not appear in the Screaming Frog crawl (because no page linked to them) are orphans. Method 2: In Ahrefs Site Audit, the Orphaned Pages report shows pages with zero internal links. Method 3: Export all pages with zero internal links from Screaming Frog via Reports then Bulk Export then All Inlinks." },
  { t: "Fixing orphan pages with internal links", d: "For pages that are genuinely valuable and should rank: find 2-3 topically related pages on your site and add contextual links to the orphan page. Link from your highest-authority, most-crawled pages for maximum impact. Use descriptive anchor text matching the orphan page's target keyword. Update your sitemap with an accurate lastmod date to prompt recrawling. Most orphan pages see ranking improvement within 2-4 weeks of receiving their first internal links." },
  { t: "Removing or consolidating orphan pages", d: "For orphan pages that are thin, outdated, or cover topics you are not actively targeting: if they have no backlinks, add noindex or 301 redirect to the most relevant existing page. If they have backlinks worth preserving, redirect to a relevant page to capture the link equity. Remove orphan pages from your sitemap immediately - your sitemap should only contain pages with a genuine path to organic traffic." },
];
export default function Page() {
  return (
    <article style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/blog" style={{ color: '#2d5be3', textDecoration: 'none' }}>Blog</a>{' / '}
        <span>Orphan Pages Fix</span>
      </nav>
      <div style={{ fontSize: 13, color: '#9ca3af', marginBottom: 12 }}>April 2025 · 6 min read</div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, lineHeight: 1.15 }}>Orphan Pages: Find Them and Fix Them</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your sitemap for orphan page patterns free</span>
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
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Audit your sitemap for orphan and low-authority pages</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Sitemap Free</a>
      </div>
    </article>
  );
}
