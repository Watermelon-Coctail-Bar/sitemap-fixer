import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Internal Linking Strategy: How to Build Authority Across Your Site | SitemapFixer',
  description: "Internal links pass authority, help Google discover content, and guide users to conversion pages. Here is the exact internal linking strategy that maximizes all three.",
  alternates: { canonical: 'https://sitemapfixer.com/blog/internal-linking-strategy' },
  openGraph: { title: 'Internal Linking Strategy Guide', description: 'Build authority with strategic internal links across your site.', url: 'https://sitemapfixer.com/blog/internal-linking-strategy', type: 'article' },
};
const sections = [
  { t: "Why Internal Links Are Underrated", d: "External backlinks get all the attention in SEO, but internal links are fully within your control and deliver compounding results. Every internal link you add passes PageRank from one page to another, creates crawl paths for Google to follow, and establishes topical relationships between your content. A well-linked site distributes authority efficiently - your best-linked pages rank better because their authority flows to important pages rather than sitting isolated." },
  { t: "The Rule: Every Page Needs 3-5 Incoming Links", d: "Orphan pages - pages with no internal links pointing to them - are invisible to Googlebot beyond what the sitemap provides. They accumulate no PageRank and rank poorly regardless of content quality. Set a minimum: every published page must have at least 3 internal links pointing to it from other relevant pages within 30 days of publishing. Build a habit of updating 2-3 older posts whenever you publish something new, adding links to the new content." },
  { t: "Use Descriptive Anchor Text", d: "Generic anchor text like click here, read more, and learn more wastes the opportunity to send a topical signal. Use descriptive anchor text containing the target keyword of the destination page. Instead of 'click here to learn about sitemaps,' write 'our XML sitemap guide covers all the configuration options.' This gives Google keyword context about the linked page and strengthens that page's relevance for those terms." },
  { t: "Link from High-Authority Pages to Important Pages", d: "Your homepage has the most external links and therefore the most PageRank. Pages linked from your homepage get more authority than deep interior pages. Map your most important pages - money pages, high-converting guides, key product pages - and ensure they have links from your homepage or from pages that get lots of traffic and links. Internal links from your most powerful pages carry the most weight." },
  { t: "Audit for Orphan Pages Regularly", d: "Export all URLs from your sitemap and compare them against your internal link graph using a crawler like Screaming Frog. Pages that appear in your sitemap but have zero internal links pointing to them are orphans. Prioritize fixing orphans on your highest-value pages. For low-value pages with no path to improvement, consider whether they should be in your sitemap at all - or whether they should be consolidated with a 301 redirect." },
];
export default function Page() {
  return (
    <article style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/blog" style={{ color: '#2d5be3', textDecoration: 'none' }}>Blog</a>{' / '}
        <span>Internal Linking Strategy</span>
      </nav>
      <div style={{ fontSize: 13, color: '#9ca3af', marginBottom: 12 }}>April 2025 · 7 min read</div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, lineHeight: 1.15 }}>Internal Linking Strategy: Build Authority Across Your Entire Site</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Find orphan pages in your sitemap free</span>
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
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Find orphan pages and linking gaps</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free sitemap analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>
    </article>
  );
}
