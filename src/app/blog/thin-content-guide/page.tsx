import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Thin Content Guide: What It Is and How to Fix It for SEO | SitemapFixer',
  description: "Thin content pages drag down your entire site's quality scores. Here is what counts as thin content, how to find it, and the three options to fix it.",
  alternates: { canonical: 'https://sitemapfixer.com/blog/thin-content-guide' },
};
const sections = [
  { t: "What thin content is", d: "Thin content is pages that provide little or no unique value to users. Types: pages with very few words that barely cover a topic, pages that duplicate or closely paraphrase other pages, auto-generated pages with templated content where only a variable changes, affiliate pages that just repost product descriptions, and pages that exist for internal navigation but get indexed. Google's Helpful Content system evaluates site quality holistically - having 30% thin pages penalizes your entire site, not just those pages." },
  { t: "How to find thin content on your site", d: "Run a Screaming Frog crawl and export all pages with word count under 300. Cross-reference with Google Search Console Pages report to find pages marked as Crawled - currently not indexed (often thin content Google chose not to index). Use the site: operator in Google Search to browse your indexed pages and spot obviously thin ones. Ahrefs Site Audit has a thin content report that flags pages with low word count and no backlinks." },
  { t: "The three fixes", d: "Option 1 - Improve: add substantial, genuinely helpful content that serves the page's purpose. For product pages: add original descriptions, use cases, FAQs. For location pages: add local-specific information. Option 2 - Consolidate: if you have multiple thin pages on the same topic, merge them into one comprehensive page with a 301 redirect from the removed pages. Option 3 - Remove: if a page has no traffic, no backlinks, and no reason to exist, add noindex or redirect to the homepage. Removing thin content often produces site-wide ranking improvements within 4-8 weeks." },
];
export default function Page() {
  return (
    <article style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/blog" style={{ color: '#2d5be3', textDecoration: 'none' }}>Blog</a>{' / '}
        <span>Thin Content Guide</span>
      </nav>
      <div style={{ fontSize: 13, color: '#9ca3af', marginBottom: 12 }}>April 2025 · 5 min read</div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, lineHeight: 1.15 }}>Thin Content Guide: Find It and Fix It for Better Rankings</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your sitemap for thin URL patterns free</span>
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
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Audit your sitemap for thin content signals</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Sitemap Free</a>
      </div>
    </article>
  );
}
