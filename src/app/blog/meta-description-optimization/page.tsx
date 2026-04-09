import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Meta Description Optimization: Write Click-Worthy Copy',
  description: "Meta descriptions are your billboard in search results. Here is how to write meta descriptions that improve click-through rates and drive more organic traffic.",
  alternates: { canonical: 'https://sitemapfixer.com/blog/meta-description-optimization' },
  openGraph: {
    title: 'Meta Description Optimization: Write Click-Worthy Copy',
    description: 'Meta descriptions are your billboard in search results. Here is how to write meta descriptions that improve click-through rates and drive more organic traffic.',
    url: 'https://sitemapfixer.com/blog/meta-description-optimization',
    type: 'article',
    images: [{
      url: 'https://sitemapfixer.com/opengraph-image',
      width: 1200,
      height: 630,
      alt: 'SitemapFixer - AI Sitemap Checker and SEO Fix Tool',
    }],
    siteName: 'SitemapFixer',
    locale: 'en_US',
  },
};
const tips = [
  { t: "Length: 120-155 characters", d: "Meta descriptions are truncated in search results at approximately 155-160 characters on desktop and around 120 on mobile. Write your most important content in the first 120 characters and use the remaining space for additional context. Check length with a character counter - descriptions that get cut off mid-sentence look unprofessional and reduce click-through rate." },
  { t: "Include the primary keyword naturally", d: "Google bolds keywords in meta descriptions that match the search query - visually highlighting your result for searchers. Include your primary keyword once, naturally within a compelling sentence. Do not keyword-stuff the description - users read these, and a description that reads like a list of keywords performs worse than a genuinely compelling one-sentence summary." },
  { t: "Write a compelling value proposition", d: "Your meta description competes with 9 other results on the page for the click. Answer: what does the user get from this page? Common high-converting patterns: How-to framing (Learn how to X in Y minutes), specific outcomes (Fix your sitemap errors in 60 seconds), social proof (Join 50,000 webmasters who use...), and question-answer (Wondering why Google is not indexing your site? Here are the 8 most common reasons)." },
  { t: "Every page needs a unique description", d: "Duplicate meta descriptions across pages is a missed opportunity - each page targets different queries and searchers, so each needs a tailored description. In WordPress: your SEO plugin sets this per page. In Next.js: set description in each page's metadata object. Use Google Search Console HTML Improvements report (under Legacy Tools) to find pages with missing or duplicate descriptions." },
];
export default function Page() {
  return (
    <article style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/blog" style={{ color: '#2d5be3', textDecoration: 'none' }}>Blog</a>{' / '}
        <span>Meta Description Optimization</span>
      </nav>
      <div style={{ fontSize: 13, color: '#9ca3af', marginBottom: 12 }}>April 2025 · 5 min read</div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, lineHeight: 1.15 }}>Meta Description Optimization: Write Descriptions That Get Clicks</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your site technical SEO free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Site Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        {tips.map(({ t, d }) => (
          <div key={t} style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12 }}>{t}</h2>
            <p style={{ margin: 0 }}>{d}</p>
          </div>
        ))}
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Check your meta tags and technical SEO</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
  
        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/blog/page-title-optimization" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Page Title Optimization: Write Tags That Rank</a></li>
            <li><a href="/blog/meta-tags-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Meta Tags Guide: Title, Description & Robots Tags</a></li>
            <li><a href="/blog/heading-tags-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Heading Tags SEO: How H1-H3 Affect Rankings</a></li>
            <li><a href="/blog/image-alt-text-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Image Alt Text: How to Write Alt Text for SEO</a></li>
            <li><a href="/blog/on-page-seo-checklist" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>On-Page SEO Checklist: Optimize Before Publishing</a></li>
          </ul>
        </div>
    </div>
    </article>
  );
}
