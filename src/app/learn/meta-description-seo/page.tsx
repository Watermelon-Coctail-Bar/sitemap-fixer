import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Meta Descriptions: How to Write Them for SEO',
  description: "Meta descriptions don't directly affect rankings but they determine whether users click your result. Here is how to write them, how long they should be, and what Google does with them.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/meta-description-seo' },
  openGraph: {
    title: 'Meta Descriptions: How to Write Them for SEO',
    description: 'Meta descriptions don',
    url: 'https://sitemapfixer.com/learn/meta-description-seo',
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
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"Article","headline":"Meta Descriptions: How to Write Them for SEO","description":"Meta descriptions don","url":"https://sitemapfixer.com/learn/meta-description-seo","author":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com"},"publisher":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com","logo":{"@type":"ImageObject","url":"https://sitemapfixer.com/opengraph-image"}},"datePublished":"2025-01-15","mainEntityOfPage":{"@type":"WebPage","@id":"https://sitemapfixer.com/learn/meta-description-seo"}}' }} />
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Meta Description SEO</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Meta Description SEO: What Works and What Does Not</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Analyze your site SEO free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Try SitemapFixer Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        <p style={{ marginBottom: 24 }}>Meta descriptions are HTML tags that provide a short summary of a page. They appear in search results beneath the page title and URL. Google confirmed they are not a direct ranking factor - the words in your meta description do not help you rank for those words. However, they have a significant indirect effect on rankings: a compelling meta description increases click-through rate, which is a user signal Google monitors.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Optimal Length</h2>
        <p style={{ marginBottom: 24 }}>Google displays approximately 120-160 characters of meta description in desktop search results and around 100-120 characters on mobile. Anything beyond 160 characters gets cut off with an ellipsis. Aim for 140-155 characters to use the available space without getting truncated. Google measures in pixels, not characters, so the exact cutoff varies slightly depending on which characters are used - wide characters like W and M take more space than narrow ones like i and l.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>What Google Does With Your Meta Description</h2>
        <p style={{ marginBottom: 24 }}>Google frequently rewrites meta descriptions. Studies show Google uses the meta description you write only about 37% of the time - the rest of the time it generates its own snippet from the page content. Google tends to rewrite when your meta description does not match the user's search query, is too short or too long, or is generic. This does not mean you should skip writing meta descriptions - when Google does use yours, having a well-written one significantly improves CTR.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>How to Write Effective Meta Descriptions</h2>
        <p style={{ marginBottom: 12 }}><strong>Be specific and honest:</strong> Describe exactly what the user will find on the page. Vague descriptions like "Learn more about our products" tell the user nothing and get rewritten by Google. Specific descriptions like "Complete guide to fixing the 6 most common XML sitemap errors in Google Search Console" tell the user exactly what they are getting.</p>
        <p style={{ marginBottom: 12 }}><strong>Include the primary keyword naturally:</strong> Google bolds words in the snippet that match the user's search query. If your description contains the queried keyword, it visually stands out in results, which improves CTR. Do not keyword-stuff - write for the human reader.</p>
        <p style={{ marginBottom: 12 }}><strong>Include a soft call to action:</strong> Phrases like "Learn how to...", "Find out why...", "Get a free analysis..." give the user a reason to click. This is especially effective on informational queries.</p>
        <p style={{ marginBottom: 24 }}><strong>Differentiate from competitors:</strong> Before writing, search your target keyword and read the meta descriptions of the top 5 results. Write a description that stands out - different angle, more specific promise, or clearer benefit statement.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Duplicate Meta Descriptions</h2>
        <p style={{ marginBottom: 24 }}>Duplicate meta descriptions across multiple pages are a signal to Google that those pages may have duplicate content. Google Search Console reports pages with duplicate meta descriptions under Enhancements. Fix them by writing unique descriptions for every page - particularly your most important pages. For large sites with thousands of pages, use dynamic meta description templates that pull from page-specific content rather than using a site-wide generic description.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>The meta description Tag Format</h2>
        <p style={{ marginBottom: 24 }}>Add meta descriptions in the head section of every page: {"<"}meta name="description" content="Your description here."{">"}. In Next.js, use the metadata API: description: "Your description here." In WordPress, your SEO plugin (Yoast, RankMath) handles this in each post or page editor. Never leave pages without a meta description - Google will generate one from whatever text it finds, which may be navigation text or boilerplate copy rather than useful content.</p>
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Find missing and duplicate meta descriptions</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free sitemap analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>

        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/learn/title-tag-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Title Tag SEO: Write Titles That Rank</a></li>
            <li><a href="/learn/image-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Image SEO: Optimize Images for Google Search</a></li>
            <li><a href="/learn/video-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Video SEO: Get Videos to Rank in Google</a></li>
            <li><a href="/learn/anchor-text-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Anchor Text SEO: Types & Best Practices</a></li>
            <li><a href="/learn/breadcrumbs-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Breadcrumbs SEO: How They Help Rankings</a></li>
          
            <li><a href="/learn/open-graph-tags" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Open Graph Tags: Control Page Appearance on Social</a></li></ul>
        </div>
    </div>
  );
}
