import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Image Alt Text: How to Write Alt Text for SEO',
  description: "Alt text serves both accessibility and SEO. Here is how to write effective alt text that helps Google understand your images and improves your search visibility.",
  alternates: { canonical: 'https://sitemapfixer.com/blog/image-alt-text-guide' },
  openGraph: {
    title: 'Image Alt Text: How to Write Alt Text for SEO',
    description: 'Alt text serves both accessibility and SEO. Here is how to write effective alt text that helps Google understand your images and improves your search visibility.',
    url: 'https://sitemapfixer.com/blog/image-alt-text-guide',
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
  { t: "What alt text does", d: "Alt text (the alt attribute on img tags) serves two purposes: it describes images to screen readers for accessibility, and it tells Google what an image shows - since Google cannot see images the way humans do. Google uses alt text as a primary signal for image search rankings and as supporting keyword context for the surrounding page content. Every image on every indexed page should have descriptive alt text." },
  { t: "How to write good alt text", d: "Describe what is actually in the image specifically and concisely. For a photo of a person using a laptop: woman using laptop to analyze website analytics data. For a product photo: Nike Air Max 90 running shoes in blue and white, side view. For an infographic: infographic showing 5 steps to fix a sitemap error. Bad alt text: image1.jpg, photo, logo. Good alt text uses the primary keyword of the page naturally when it accurately describes the image - not keyword-stuffed, just accurate." },
  { t: "Common alt text mistakes", d: "Leaving alt text empty on non-decorative images: every meaningful image needs alt text. Using the filename as alt text (alt=IMG_4521): no keyword signal, no accessibility value. Keyword stuffing: alt=best SEO tools cheap SEO software buy SEO tool online - triggers spam signals. Same alt text on multiple images: Google needs unique descriptions. Decorative images (spacers, borders, purely visual elements) should have empty alt text (alt=) to signal they are intentionally empty, not forgotten." },
];
export default function Page() {
  return (
    <article style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/blog" style={{ color: '#2d5be3', textDecoration: 'none' }}>Blog</a>{' / '}
        <span>Image Alt Text Guide</span>
      </nav>
      <div style={{ fontSize: 13, color: '#9ca3af', marginBottom: 12 }}>April 2025 · 4 min read</div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, lineHeight: 1.15 }}>Image Alt Text Guide: Write Alt Text That Boosts SEO</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your site technical SEO free</span>
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
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Check your site for technical SEO issues</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free sitemap and indexing analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
  
        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/blog/page-title-optimization" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Page Title Optimization: Write Tags That Rank</a></li>
            <li><a href="/blog/meta-description-optimization" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Meta Description Optimization: Write Click-Worthy Copy</a></li>
            <li><a href="/blog/meta-tags-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Meta Tags Guide: Title, Description & Robots Tags</a></li>
            <li><a href="/blog/heading-tags-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Heading Tags SEO: How H1-H3 Affect Rankings</a></li>
            <li><a href="/blog/on-page-seo-checklist" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>On-Page SEO Checklist: Optimize Before Publishing</a></li>
          </ul>
        </div>
    </div>
    </article>
  );
}
