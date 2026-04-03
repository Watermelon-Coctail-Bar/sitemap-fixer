import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Noindex Tag: How to Use It and When to Avoid It | SitemapFixer',
  description: 'Learn how the noindex tag works, when to use it, and critical mistakes to avoid. Includes how noindex interacts with your sitemap.',
  alternates: { canonical: 'https://sitemapfixer.com/learn/noindex-tag' },
  openGraph: { title: 'Noindex Tag Guide', description: 'How the noindex tag works and when to use it.', url: 'https://sitemapfixer.com/learn/noindex-tag', type: 'article' },
};
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Noindex Tag</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Noindex Tag: How to Use It and When to Avoid It</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Find accidental noindex tags on your site</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Try SitemapFixer Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8 }}>
        <p style={{ marginBottom: 20 }}>The noindex tag tells search engines not to include a page in their search results. It is placed in the HTML head as a meta tag: &lt;meta name="robots" content="noindex"&gt;. When Google sees this tag, it will eventually remove the page from its index even if the page was previously indexed.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>When to Use Noindex</h2>
        <p style={{ marginBottom: 20 }}>Use noindex on pages you deliberately do not want in search results: admin and login pages, internal search result pages, shopping cart and checkout pages, thank you and confirmation pages, duplicate content pages you cannot consolidate with canonicals, staging or preview pages accessible to crawlers, and paginated archives beyond page 2.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>Noindex vs Canonical vs Robots.txt</h2>
        <p style={{ marginBottom: 20 }}>Noindex removes a page from the index but allows crawling. Canonical consolidates duplicate pages by pointing to a preferred version. Robots.txt blocks crawling entirely but does not prevent indexing via external links. Use noindex when you want Google to crawl but not index. Use robots.txt when you want to conserve crawl budget on pages you are confident do not need indexing. Use canonicals to manage duplicate content.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>Noindex and Your Sitemap - Critical Rule</h2>
        <p style={{ marginBottom: 20 }}>Never include noindex pages in your XML sitemap. Your sitemap signals to Google which pages you want indexed. Including a noindex page creates a contradiction - you are telling Google to index it via the sitemap but not to index it via the meta tag. Google will honor the noindex directive, but this conflict wastes crawl budget and creates Search Console errors. SitemapFixer automatically detects pages in your sitemap that have a noindex tag.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>Common Noindex Mistakes</h2>
        <p style={{ marginBottom: 20 }}>Accidentally noindexing your entire site during development and forgetting to remove it before launch. Including noindex pages in your sitemap. Using noindex instead of canonicals for duplicate content - canonicals pass PageRank, noindex does not. Noindexing important pages because of thin content instead of improving the content. Forgetting that noindex takes time to take effect - Google must recrawl the page to process the directive.</p>
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Find noindex issues on your site</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Sitemap</a>
      </div>
      <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
        <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Related guides</div>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <li><a href="/learn/canonical-tags" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Canonical Tags</a></li>
          <li><a href="/learn/robots-txt-guide" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Robots.txt Guide</a></li>
          <li><a href="/learn/pages-in-sitemap-not-indexed" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Pages in Sitemap Not Indexed</a></li>
        </ul>
      </div>
    </div>
  );
}
