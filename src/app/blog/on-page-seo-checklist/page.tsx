import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'On-Page SEO Checklist: Every Element to Optimize Before Publishing | SitemapFixer',
  description: "On-page SEO covers everything you control on the page itself. This checklist ensures every element is optimized before you publish any new content.",
  alternates: { canonical: 'https://sitemapfixer.com/blog/on-page-seo-checklist' },
};
const items = [
  { cat: "Title tag", checks: ["Contains the primary keyword near the start", "Under 60 characters", "Unique - not duplicated on any other page", "Accurately describes the page content", "Includes a compelling reason to click"] },
  { cat: "Meta description", checks: ["Contains the primary keyword naturally", "Between 120-155 characters", "Summarizes what the page delivers", "Includes a call to action or unique value", "Unique - not copied from page body"] },
  { cat: "Headings", checks: ["One H1 per page matching the primary keyword", "H2s break content into logical sections", "H3s used for sub-sections where needed", "Keywords appear naturally in headings without stuffing", "Heading hierarchy is logical (H2s under H1, H3s under H2s)"] },
  { cat: "Content", checks: ["Fully answers the search intent for the target keyword", "At least 300 words for any indexed page", "First paragraph addresses the topic directly", "No keyword stuffing - keywords appear naturally", "LSI/semantic keywords used throughout", "Content is original and not copied from other pages"] },
  { cat: "Images", checks: ["All images have descriptive alt text", "Images are compressed (under 100KB ideally)", "Image filenames are descriptive (not img1234.jpg)", "Width and height attributes set on all images"] },
  { cat: "Internal links", checks: ["At least 2-3 internal links to related pages", "Descriptive anchor text (not click here)", "No broken internal links"] },
  { cat: "URL and technical", checks: ["URL is short and descriptive", "URL contains primary keyword", "Canonical tag is self-referencing", "Page loads under 2.5 seconds on mobile"] },
];
export default function Page() {
  return (
    <article style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/blog" style={{ color: '#2d5be3', textDecoration: 'none' }}>Blog</a>{' / '}
        <span>On-Page SEO Checklist</span>
      </nav>
      <div style={{ fontSize: 13, color: '#9ca3af', marginBottom: 12 }}>April 2025 · 5 min read</div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, lineHeight: 1.15 }}>On-Page SEO Checklist: Every Element to Optimize</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your technical SEO free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Site Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        {items.map(({ cat, checks }) => (
          <div key={cat} style={{ marginBottom: 32 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: '#0a0a0f', marginBottom: 12 }}>{cat}</h2>
            {checks.map((c, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '8px 0', borderBottom: '1px solid #f0f0f5', alignItems: 'flex-start' }}>
                <div style={{ width: 18, height: 18, border: '2px solid #d1d5db', borderRadius: 4, flexShrink: 0, marginTop: 3 }} />
                <span style={{ fontSize: 14 }}>{c}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Check your technical SEO automatically</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free sitemap and indexing analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>
    </article>
  );
}
