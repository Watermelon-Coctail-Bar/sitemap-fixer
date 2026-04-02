import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Content Audit Guide: How to Audit Your Site Content for SEO | SitemapFixer',
  description: "A content audit identifies which pages to keep, update, consolidate, or remove. Here is a step-by-step process for auditing your site content to improve SEO performance.",
  alternates: { canonical: 'https://sitemapfixer.com/blog/content-audit-guide' },
};
const steps = [
  { t: "Export all your URLs", d: "Start with your sitemap — it should contain all indexable pages. Supplement with a Screaming Frog crawl and a Google Search Console Performance export. Your goal is a complete list of every URL on your site, tagged with: organic traffic (from GSC), backlinks (from Ahrefs or Semrush), and last published or updated date." },
  { t: "Categorize each URL", d: "For each URL, assign one of four outcomes. Keep: strong organic traffic, good rankings, solid content quality, no issues. Update: declining traffic or rankings, outdated information, weaker than current top-ranking competitors, but the topic is valuable. Consolidate: thin content on a topic covered better by another page — redirect this page into the stronger one. Remove: no traffic, no backlinks, thin content on a topic with no redemption path — noindex or 301 redirect to homepage or related category." },
  { t: "Prioritize by impact", d: "Focus update efforts on pages that: have some traffic and keywords but are declining (highest recovery potential), rank positions 5-15 for target keywords (closest to meaningful traffic improvements), and have at least one backlink worth preserving. Do not spend time updating pages with zero organic visibility and zero backlinks — those belong in the consolidate or remove bucket." },
  { t: "Execute by category", d: "Process removals and consolidations first — they clean up your index and concentrate authority. Then tackle updates in priority order. For each update: refresh statistics, deepen coverage of underserved angles, improve the title and meta description, update internal links, and set lastmod to today in your sitemap. For consolidations: copy any unique valuable content from the page being removed, set up the 301 redirect, update all internal links pointing to the old URL." },
  { t: "Monitor results", d: "After completing a content audit, give Google 4-8 weeks to recrawl and reprocess the changes. Monitor Google Search Console weekly for: changes in indexed page count, improvements in average position for updated pages, and crawl errors from any redirects that were misconfigured. A well-executed content audit typically results in improved site-wide quality signals and ranking improvements for retained content within 2-3 months." },
];
export default function Page() {
  return (
    <article style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/blog" style={{ color: '#2d5be3', textDecoration: 'none' }}>Blog</a>{' / '}
        <span>Content Audit Guide</span>
      </nav>
      <div style={{ fontSize: 13, color: '#9ca3af', marginBottom: 12 }}>April 2025 · 8 min read</div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, lineHeight: 1.15 }}>Content Audit Guide: Keep, Update, Consolidate, or Remove</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Start with your sitemap — check it free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Sitemap Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        {steps.map(({ t, d }) => (
          <div key={t} style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12 }}>{t}</h2>
            <p style={{ margin: 0 }}>{d}</p>
          </div>
        ))}
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Start your content audit with your sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free sitemap analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Sitemap Free</a>
      </div>
    </article>
  );
}
