import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Anchor Text SEO: Types, Best Practices, and Over-Optimization Risks | SitemapFixer',
  description: "Anchor text tells Google what the linked page is about. Here is how to use exact match, partial match, branded, and generic anchors in the right proportions — and what to avoid.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/anchor-text-seo' },
};
const sections = [
  { h: "What Anchor Text Tells Google", d: "Anchor text is the visible, clickable text in a hyperlink. When sites link to you with anchor text, Google uses that text as a signal about what your linked page covers. A link with anchor text 'best sitemap checker' signals to Google that the destination page is relevant to sitemap checking. This is one of the reasons anchor text is a key part of how backlinks pass topical relevance, not just authority." },
  { h: "Types of Anchor Text", d: "Exact match anchors use your precise target keyword — 'xml sitemap generator' linking to your sitemap generator page. Partial match anchors include the keyword plus other words — 'the best xml sitemap generator tool'. Branded anchors use your brand name — 'SitemapFixer'. Generic anchors use non-descriptive text — 'click here', 'read more', 'this page'. Naked URL anchors are the URL itself — 'https://sitemapfixer.com'. Image anchors use alt text as the anchor." },
  { h: "Natural Anchor Text Distribution", d: "A natural backlink profile has a mix of all anchor types. Real websites linking to you naturally will use your brand name most often, generic anchors frequently, and exact match keywords occasionally. If your backlink profile is dominated by exact match anchors all targeting the same keyword, it looks manipulative to Google and can trigger algorithmic or manual penalties. The target ratio for a healthy profile: branded 40-50%, generic 20-30%, partial match 10-20%, exact match 5-10%, naked URLs 5-10%." },
  { h: "Internal Link Anchor Text", d: "You have full control over internal link anchor text and it is a significant on-page SEO signal. Use descriptive, keyword-rich anchor text for internal links — not 'click here' or 'read more'. Link from relevant pages using anchors that describe the destination. For example, from your blog post about sitemaps, link to your sitemap checker with the anchor text 'check your sitemap' or 'sitemap validation tool'. Consistent, descriptive internal linking reinforces topical relevance across your site." },
  { h: "Over-Optimization: The Penalty Risk", d: "Exact match anchor text over-optimization is one of the clearest patterns Google's Penguin algorithm targets. If 80% of your external backlinks say 'buy cheap widgets' pointing to your widgets page, that is a red flag. Google expects natural language variation. If you are doing outreach or guest posting, vary your anchor text deliberately. Use your brand name in some placements, partial match in others, generic in others. Never ask for specific exact-match anchor text in link exchanges — it is both manipulative and detectable." },
  { h: "Checking Your Anchor Text Profile", d: "Use Ahrefs or Semrush to audit your anchor text distribution under backlinks. Look for over-concentration of exact match anchors. If you have a manual penalty for unnatural links, anchor text manipulation is often a contributing factor. You can disavow links with spammy anchors using Google Search Console's Disavow tool — but use this as a last resort after attempting to have links removed manually, as disavow only works for manual penalty recovery." },
];
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Anchor Text SEO</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Anchor Text SEO: Types, Ratios, and Over-Optimization Risks</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Analyze your site SEO free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Try SitemapFixer Free</a>
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
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Analyze your site technical SEO</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free sitemap analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>
    </div>
  );
}
