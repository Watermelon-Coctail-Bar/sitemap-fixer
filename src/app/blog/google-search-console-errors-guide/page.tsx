import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Google Search Console Errors: Meanings & Fixes',
  description: "Every error in Google Search Console means something specific. This guide explains the most common GSC errors and the exact steps to fix each one.",
  alternates: { canonical: 'https://sitemapfixer.com/blog/google-search-console-errors-guide' },
  openGraph: { title: 'Google Search Console Errors: Complete Fix Guide', description: 'What every GSC error means and exactly how to fix it.', url: 'https://sitemapfixer.com/blog/google-search-console-errors-guide', type: 'article',
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
const errors = [
  { e: "Submitted URL blocked by robots.txt", fix: "Your sitemap contains a URL that robots.txt prevents Googlebot from crawling. Either remove the URL from your sitemap (if the block is intentional) or update robots.txt to allow the URL (if it should be indexed). Check your robots.txt at yoursite.com/robots.txt and look for Disallow rules matching the affected URLs." },
  { e: "Submitted URL has noindex tag", fix: "Your sitemap includes a URL with a noindex meta tag on the page. These directly contradict each other - your sitemap says index this, the tag says do not. Either remove the URL from your sitemap or remove the noindex tag from the page. Check the page source for meta name=robots content=noindex." },
  { e: "Submitted URL returns 404", fix: "A URL in your sitemap does not exist - it returns a 404 error. Either restore the page, create a 301 redirect to the current URL, or remove it from your sitemap. Sitemaps should only contain URLs that return 200 status codes." },
  { e: "Submitted URL has redirect", fix: "A URL in your sitemap redirects to a different URL. Update your sitemap to contain the final destination URL directly. Sitemaps should never contain redirecting URLs - only the canonical final destinations." },
  { e: "Crawled - currently not indexed", fix: "Google crawled the page but decided not to index it. Common reasons: content is too thin or too similar to other indexed pages, the page has no meaningful unique content, or Google chose a different canonical URL. Improve the content quality and depth, add internal links pointing to the page, and verify canonical tags are set correctly." },
  { e: "Discovered - currently not indexed", fix: "Google knows the page exists but has not crawled it yet. This usually resolves on its own within a few weeks. Speed it up by: submitting the URL via URL Inspection and clicking Request Indexing, adding internal links from well-linked pages, and ensuring the page is in your sitemap with an accurate lastmod date." },
  { e: "Page with redirect", fix: "This URL in your Coverage report redirects to another page. This is usually informational, not an error. However, if these are URLs you submitted in your sitemap, remove them and replace with the final destination URLs." },
  { e: "Duplicate without user-selected canonical", fix: "Google found duplicate content and chose its own canonical - not necessarily the one you prefer. Explicitly add a canonical tag to the page pointing to your preferred URL: link rel=canonical href=https://yoursite.com/preferred-url." },
  { e: "Server error (5xx)", fix: "Google got a 5xx server error when crawling the page. Check your server logs for the specific error. Common causes: server overload during crawl, PHP errors, database timeouts. Fix the underlying server issue, then use URL Inspection to request re-crawling." },
];
export default function Page() {
  return (
    <article style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/blog" style={{ color: '#2d5be3', textDecoration: 'none' }}>Blog</a>{' / '}
        <span>Google Search Console Errors Guide</span>
      </nav>
      <div style={{ fontSize: 13, color: '#9ca3af', marginBottom: 12 }}>April 2025 · 10 min read</div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, lineHeight: 1.15 }}>Google Search Console Errors: Meanings & Fixes</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Auto-detect sitemap errors free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Sitemap Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        <p style={{ marginBottom: 32 }}>Google Search Console shows errors that directly explain why pages are not ranking. Here is every major error with its precise fix.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {errors.map(({ e, fix }) => (
            <div key={e} style={{ border: '1px solid #e4e4ed', borderRadius: 12, padding: '20px 24px', background: '#fafafa' }}>
              <div style={{ fontWeight: 700, color: '#0a0a0f', marginBottom: 8, fontSize: 16 }}>"{e}"</div>
              <p style={{ margin: 0, fontSize: 15, color: '#3d3d4f', lineHeight: 1.7 }}>{fix}</p>
            </div>
          ))}
        </div>
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Fix your sitemap errors automatically</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free analysis - detects all sitemap and indexing errors</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Sitemap Free</a>
  
        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/blog/schema-markup-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Schema Markup: Add Structured Data to Your Site</a></li>
            <li><a href="/blog/structured-data-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Structured Data: Add Schema Markup</a></li>
            <li><a href="/blog/google-search-console-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Google Search Console: Fix Your SEO</a></li>
            <li><a href="/learn/technical-seo-checklist" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Technical SEO Checklist 2025</a></li>
            <li><a href="/learn/seo-audit-checklist" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>SEO Audit Checklist: 25 Checks to Run on Any Website</a></li>
          </ul>
        </div>
    </div>
    </article>
  );
}
