import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Meta Tags Guide: Title, Description & Robots Tags',
  description: "Meta tags communicate page intent to search engines. Here is every important meta tag, what each does, how to write them, and common mistakes to avoid.",
  alternates: { canonical: 'https://sitemapfixer.com/blog/meta-tags-guide' },
  openGraph: {
    title: 'Meta Tags Guide: Title, Description & Robots Tags',
    description: 'Meta tags communicate page intent to search engines. Here is every important meta tag, what each does, how to write them, and common mistakes to avoid.',
    url: 'https://sitemapfixer.com/blog/meta-tags-guide',
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
const tags = [
  { t: "Title tag", d: "The clickable headline shown in search results. Write your primary keyword near the start, keep it under 60 characters, and make it compelling enough to earn a click. Every page must have a unique title tag. In Next.js: set the title in the metadata object. In WordPress: your SEO plugin sets this in the title field on each post. Google rewrites title tags it considers too long, too short, or keyword-stuffed - so write for users first." },
  { t: "Meta description", d: "The snippet shown under the title in search results. Not a direct ranking factor but strongly influences click-through rate. Write 120-155 characters that summarize what the user gets from the page and include a reason to click. Include the primary keyword naturally. Google rewrites meta descriptions about 70% of the time, so think of it as a default suggestion rather than a guarantee." },
  { t: "Meta robots", d: "Controls indexing and crawling behavior. Common values: index, follow (default - index and follow links), noindex, follow (exclude from index but follow links), index, nofollow (index but do not follow links), noindex, nofollow (exclude entirely). Add noindex to pages you do not want in Google's index: checkout pages, login pages, internal search results, duplicate content pages. Do not add noindex to pages you want to rank." },
  { t: "Canonical tag", d: "Specifies the preferred URL when multiple URLs have the same or very similar content. Every page should have a self-referencing canonical (pointing to itself) by default. Override the canonical on duplicate or near-duplicate pages to point to the preferred version. In Next.js: set alternates.canonical in the metadata object. This is the single most important tag for managing duplicate content." },
  { t: "Open Graph tags", d: "Control how your page appears when shared on social media - specifically title, description, and image. The og:image tag determines the preview image shown when someone shares a link on Facebook, LinkedIn, Twitter, and Slack. Use a high-quality image at least 1200x630 pixels. Without OG tags, social platforms pick random content from your page, often producing poor-looking previews that reduce social sharing engagement." },
];
export default function Page() {
  return (
    <article style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/blog" style={{ color: '#2d5be3', textDecoration: 'none' }}>Blog</a>{' / '}
        <span>Meta Tags Guide</span>
      </nav>
      <div style={{ fontSize: 13, color: '#9ca3af', marginBottom: 12 }}>April 2025 · 6 min read</div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, lineHeight: 1.15 }}>Meta Tags Guide: Every Important Tag Explained</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your site meta tags free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Site Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        {tags.map(({ t, d }) => (
          <div key={t} style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: '#0a0a0f', marginBottom: 10 }}>{t}</h2>
            <p style={{ margin: 0 }}>{d}</p>
          </div>
        ))}
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Check your site for meta tag issues</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free - checks noindex, canonical, and sitemap conflicts</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
  
        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/blog/page-title-optimization" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Page Title Optimization: Write Tags That Rank</a></li>
            <li><a href="/blog/meta-description-optimization" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Meta Description Optimization: Write Click-Worthy Copy</a></li>
            <li><a href="/blog/heading-tags-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Heading Tags SEO: How H1-H3 Affect Rankings</a></li>
            <li><a href="/blog/image-alt-text-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Image Alt Text: How to Write Alt Text for SEO</a></li>
            <li><a href="/blog/on-page-seo-checklist" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>On-Page SEO Checklist: Optimize Before Publishing</a></li>
          </ul>
        </div>
    </div>
    </article>
  );
}
