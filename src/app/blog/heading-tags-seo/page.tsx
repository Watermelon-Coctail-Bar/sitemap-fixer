import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Heading Tags SEO: How H1, H2, H3 Tags Affect Your Rankings | SitemapFixer',
  description: "Heading tags structure your content for both users and search engines. Here is how to use H1, H2, and H3 tags correctly to improve your page rankings.",
  alternates: { canonical: 'https://sitemapfixer.com/blog/heading-tags-seo' },
};
const rules = [
  { t: "One H1 per page, always", d: "Your H1 is the primary heading - it tells Google and users what the page is about. Use exactly one H1 per page. It should contain your primary keyword and match (or closely reflect) your title tag. In most CMS systems, the page or post title automatically becomes the H1. If your theme renders the title as a different heading level, fix it - an H1-less page wastes its strongest on-page keyword signal." },
  { t: "H2s structure your content sections", d: "H2 headings divide your content into major sections. Each H2 should naturally contain keyword phrases related to the section topic. Google uses heading structure to understand content hierarchy and identify sub-topics on the page. For long-form content, H2s also become the chapters Google may display as jump links in featured snippets, significantly expanding your SERP real estate." },
  { t: "Never skip heading levels", d: "Use headings in order: H1, then H2, then H3. Do not jump from H1 to H3. Skipped heading levels confuse both screen readers (accessibility) and search engine crawlers parsing your page structure. H3s appear inside H2 sections as sub-topics. In practice: your page has one H1, several H2s for major sections, and H3s within those sections for sub-points that need their own heading." },
];
export default function Page() {
  return (
    <article style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/blog" style={{ color: '#2d5be3', textDecoration: 'none' }}>Blog</a>{' / '}
        <span>Heading Tags SEO</span>
      </nav>
      <div style={{ fontSize: 13, color: '#9ca3af', marginBottom: 12 }}>April 2025 · 4 min read</div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, lineHeight: 1.15 }}>Heading Tags SEO: How to Use H1, H2, H3 Correctly</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your site structure free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Site Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        {rules.map(({ t, d }) => (
          <div key={t} style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12 }}>{t}</h2>
            <p style={{ margin: 0 }}>{d}</p>
          </div>
        ))}
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Analyze your site structure free</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free sitemap and SEO analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>
    </article>
  );
}
