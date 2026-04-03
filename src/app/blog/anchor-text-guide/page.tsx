import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Anchor Text Guide: How to Use Link Anchor Text for SEO | SitemapFixer',
  description: "Anchor text tells Google what the linked page is about. Here is how to optimize anchor text for internal and external links to maximize SEO impact without triggering penalties.",
  alternates: { canonical: 'https://sitemapfixer.com/blog/anchor-text-guide' },
};
const types = [
  { name: "Exact match", example: "keyword research guide", d: "Anchor text that exactly matches the target page's primary keyword. Powerful SEO signal when used sparingly. Using exact match anchor text at scale across many external links is a Penguin penalty trigger. For internal links: use naturally where it fits, but vary your anchor text." },
  { name: "Partial match", example: "comprehensive guide to keyword research", d: "Contains the keyword within a longer phrase. More natural-sounding than exact match and lower risk. Partial match anchors are the workhorse of effective internal linking - descriptive and keyword-relevant without being repetitive." },
  { name: "Branded", example: "SitemapFixer", d: "Uses your brand name as the anchor. Branded anchors are the safest and most natural for external links - they do not trigger spam filters and contribute to brand entity building in Google's Knowledge Graph. Most high-quality backlink profiles are dominated by branded anchor text." },
  { name: "Generic", example: "click here, read more, learn more", d: "Provides no topical signal to Google and wastes the SEO value of the link. Replace generic anchor text in your internal links with descriptive phrases. For external links you cannot control, generic anchors are still counted as links but contribute minimal topical relevance." },
  { name: "Naked URL", example: "sitemapfixer.com/blog/sitemap-guide", d: "The URL itself as anchor text. Common in natural citation patterns. Provides domain-level brand signal but minimal page-level keyword relevance. Fine for external links as part of a diverse profile." },
  { name: "Image links", example: "[image alt text]", d: "When an image is the link, Google uses the alt text as the anchor text signal. This is why every linked image must have a descriptive alt text - it is the anchor text for that link. An image with empty alt text linked to another page passes zero topical signal." },
];
export default function Page() {
  return (
    <article style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/blog" style={{ color: '#2d5be3', textDecoration: 'none' }}>Blog</a>{' / '}
        <span>Anchor Text Guide</span>
      </nav>
      <div style={{ fontSize: 13, color: '#9ca3af', marginBottom: 12 }}>April 2025 · 5 min read</div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, lineHeight: 1.15 }}>Anchor Text Guide: Optimize Links for Maximum SEO Impact</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your site technical SEO free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Site Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        {types.map(({ name, example, d }) => (
          <div key={name} style={{ marginBottom: 28, borderLeft: '3px solid #e4e4ed', paddingLeft: 16 }}>
            <div style={{ fontWeight: 700, fontSize: 16, color: '#0a0a0f', marginBottom: 4 }}>{name}</div>
            <div style={{ fontSize: 13, fontFamily: 'monospace', color: '#2d5be3', marginBottom: 8, background: '#f0f4ff', display: 'inline-block', padding: '2px 8px', borderRadius: 4 }}>{example}</div>
            <p style={{ margin: 0, fontSize: 15 }}>{d}</p>
          </div>
        ))}
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Analyze your site for technical SEO issues</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free sitemap analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>
    </article>
  );
}
