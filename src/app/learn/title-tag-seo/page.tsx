import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Title Tag SEO: How to Write Titles That Rank and Get Clicks | SitemapFixer',
  description: "The title tag is the most important on-page SEO element. Here is the exact format that works, common mistakes to avoid, and how Google rewrites titles.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/title-tag-seo' },
};
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Title Tag SEO</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Title Tag SEO: How to Write Titles That Rank and Get Clicks</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your site for title tag issues</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Site Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        <p style={{ marginBottom: 24 }}>The title tag is the clickable headline in search results and the most important on-page SEO element. Google uses it to understand what a page is about and to match it to search queries. A poorly written title tag means Google may not rank you for the right searches - or may rank you but not get clicked.</p>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Optimal Length and Format</h2>
        <p style={{ marginBottom: 24 }}>Google displays approximately 50-60 characters (around 600 pixels) of title in desktop search results. Titles longer than this get truncated with ellipsis. Keep titles under 60 characters. The proven format for most pages: Primary Keyword - Secondary Context | Brand Name. For example: "WordPress Sitemap Guide: Setup, Errors, and Submission | SitemapFixer". Put the most important keyword first - early placement carries more weight and users scan left to right.</p>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>How Google Rewrites Title Tags</h2>
        <p style={{ marginBottom: 24 }}>Google rewrites title tags in about 33% of cases. It rewrites most often when: your title is too long (truncation), your title does not match the page content, your title is stuffed with keywords and reads unnaturally, or the page has a more descriptive H1 that better represents the content. Google may use your H1 tag, anchor text from links pointing to the page, or text extracted from the page body. You cannot prevent rewriting, but you can minimize it by keeping titles concise, accurate, and matching your H1.</p>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Common Title Tag Mistakes</h2>
        <p style={{ marginBottom: 12 }}><strong>Duplicate titles:</strong> Every page needs a unique title. Duplicate titles tell Google the pages are duplicates. Check for duplicates in Google Search Console under Enhancements.</p>
        <p style={{ marginBottom: 12 }}><strong>Missing titles:</strong> Pages without a title tag get an auto-generated title from Google, which is usually less relevant than what you would write. Check for missing titles in a site crawl.</p>
        <p style={{ marginBottom: 12 }}><strong>Keyword stuffing:</strong> "Sitemap Fixer | Fix Sitemap | Sitemap Checker | Sitemap Tool" is spam. Google ignores over-optimized titles. Write for humans.</p>
        <p style={{ marginBottom: 24 }}><strong>Brand name in every page title:</strong> Adding "| Brand Name" at the end of every page title is fine and recommended - it builds brand recognition in search results. But adding it at the beginning of every title wastes the most valuable real estate.</p>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Title Tag vs H1 Tag</h2>
        <p style={{ marginBottom: 24 }}>The title tag (in the HTML head) and the H1 (the visible heading on the page) should be related but do not need to be identical. The title tag is optimized for search - it includes brand and is under 60 characters. The H1 is for the reader - it can be longer and more descriptive. For example, title tag: "WordPress Sitemap Guide | SitemapFixer" and H1: "WordPress Sitemap: How to Create, Fix, and Submit It in 2025".</p>
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Find title tag issues across your site</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free sitemap and SEO analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>
    </div>
  );
}
