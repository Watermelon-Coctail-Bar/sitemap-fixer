import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Page Title Optimization: Write Tags That Rank',
  description: "Title tags are the single most important on-page SEO element. How to write title tags that rank for target keywords and earn clicks from SERPs.",
  alternates: { canonical: 'https://sitemapfixer.com/blog/page-title-optimization' },
  openGraph: {
    title: 'Page Title Optimization: Write Tags That Rank',
    description: 'Title tags are the single most important on-page SEO element. Here is how to write title tags that rank for target keywords and earn clicks from search results.',
    url: 'https://sitemapfixer.com/blog/page-title-optimization',
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
const rules = [
  { t: "Include the primary keyword near the start", d: "Google gives more weight to words that appear early in the title tag. Put your primary keyword in the first 3-4 words wherever it reads naturally. Keyword Research Guide: How to Find Keywords That Drive Traffic is better than How to Find Keywords That Drive Traffic: A Keyword Research Guide. The keyword-first version also ensures the keyword is visible even if the title is truncated." },
  { t: "Keep it under 60 characters", d: "Google displays approximately 600 pixels of title width, which fits roughly 55-65 characters depending on letter width. Titles that exceed this are truncated with an ellipsis, cutting off your message. Aim for 50-60 characters. Count characters while drafting using any online character counter. If you must choose between including a keyword and staying under 60 chars, prioritize the keyword." },
  { t: "Make it compelling to click", d: "Your title competes with 9 other results for the click. Add specificity: numbers (7 Ways..., 2025 Guide...), outcome-focus (Fix X in Y Minutes), or qualifier words (Complete, Ultimate, Free, Beginner's, Step-by-Step). Avoid generic titles like SEO Tips or Guide to SEO - be specific about exactly what value the reader gets from clicking." },
  { t: "Every page needs a unique title", d: "Duplicate title tags are missed opportunities and a signal to Google that your pages may have duplicate content. Every indexed page needs a title that describes its specific content. Use Google Search Console Legacy Tools, HTML Improvements to find duplicate titles at scale. In a CMS, generate titles from the post/page title automatically rather than using a global template." },
];
export default function Page() {
  return (
    <article style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/blog" style={{ color: '#2d5be3', textDecoration: 'none' }}>Blog</a>{' / '}
        <span>Page Title Optimization</span>
      </nav>
      <div style={{ fontSize: 13, color: '#9ca3af', marginBottom: 12 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"Article","headline":"Page Title Optimization: Write Tags That Rank","description":"Title tags are the single most important on-page SEO element. Here is how to write title tags that rank for target keywords and earn clicks from search results.","url":"https://sitemapfixer.com/blog/page-title-optimization","author":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com"},"publisher":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com","logo":{"@type":"ImageObject","url":"https://sitemapfixer.com/opengraph-image"}},"datePublished":"2025-01-15","mainEntityOfPage":{"@type":"WebPage","@id":"https://sitemapfixer.com/blog/page-title-optimization"}}' }} />April 2025 · 5 min read</div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, lineHeight: 1.15 }}>Page Title Optimization: Write Title Tags That Rank and Get Clicked</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your site for duplicate titles free</span>
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
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Check your title tags and indexing</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free sitemap analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
  
        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/blog/meta-description-optimization" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Meta Description Optimization: Write Click-Worthy Copy</a></li>
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
