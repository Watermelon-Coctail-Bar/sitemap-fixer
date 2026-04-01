import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Why Is Google Not Indexing My Site? 11 Causes and Fixes | SitemapFixer',
  description: 'Google not indexing your website? Here are the 11 most common reasons and exactly how to fix each one — from robots.txt blocks to noindex tags.',
  alternates: { canonical: 'https://sitemapfixer.com/blog/why-is-google-not-indexing-my-site' },
  openGraph: { title: 'Why Is Google Not Indexing My Site? 11 Fixes', description: 'The 11 most common reasons Google ignores your site and how to fix them.', url: 'https://sitemapfixer.com/blog/why-is-google-not-indexing-my-site', type: 'article' },
};
export default function Page() {
  return (
    <article style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/blog" style={{ color: '#2d5be3', textDecoration: 'none' }}>Blog</a>{' / '}
        <span>Why Is Google Not Indexing My Site</span>
      </nav>
      <div style={{ fontSize: 13, color: '#9ca3af', marginBottom: 12 }}>April 2025 · 9 min read</div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, lineHeight: 1.15 }}>Why Is Google Not Indexing My Site? 11 Causes and Fixes</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Diagnose your indexing issues free in 60 seconds</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Site</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        <p style={{ marginBottom: 24 }}>If Google is not indexing your site or specific pages, something is either blocking crawling, blocking indexing, or sending a signal that the content is not worth indexing. Here are the 11 most common causes and how to fix each one.</p>
        {[
          { n: '1', t: 'Your Site Is Blocked by Robots.txt', d: 'Check your robots.txt file at yourdomain.com/robots.txt. If it contains Disallow: / under User-agent: *, Googlebot cannot crawl any page. This often gets accidentally enabled during development and forgotten. Remove the blanket disallow and verify Google can crawl your pages using Google Search Console's URL Inspection tool.' },
          { n: '2', t: 'Pages Have a Noindex Tag', d: 'Check your pages for a meta tag with content="noindex". This directly tells Google not to index the page. In WordPress, the "Discourage search engines" setting adds this to all pages. In custom builds, check your page templates. Use a site crawler or SitemapFixer to bulk-identify noindex pages across your site.' },
          { n: '3', t: 'The Site Is Too New', d: 'Google needs time to discover and crawl new sites. A brand new domain typically takes 2-4 weeks before pages start appearing in search. Speed this up by submitting your sitemap to Google Search Console, requesting indexing for key pages using URL Inspection, and building at least a few backlinks to help Google discover your site.' },
          { n: '4', t: 'Your Sitemap Has Errors', d: 'A malformed or missing sitemap means Google cannot discover your pages efficiently. Check your sitemap at yourdomain.com/sitemap.xml — it should load as valid XML. Submit it in Google Search Console under Sitemaps. SitemapFixer automatically validates your sitemap and reports any errors.' },
          { n: '5', t: 'Thin or Duplicate Content', d: 'Google deliberately avoids indexing pages with little unique value. Pages under 300 words, duplicate content across multiple URLs, or pages that are nearly identical to other pages on your site will often not be indexed. Fix it by improving content depth, using canonical tags to consolidate duplicates, and using noindex on truly low-value pages like search results and tag archives.' },
          { n: '6', t: 'Slow Page Load Speed', d: 'Very slow pages (over 3-4 seconds to first byte) may get crawled infrequently or skipped during crawl budget allocation. Use PageSpeed Insights to identify performance issues. Core Web Vitals failures can also reduce how often Google revisits your pages.' },
          { n: '7', t: 'Canonical Tags Pointing Elsewhere', d: 'If your canonical tag points to a different URL, Google will index that URL instead of the current page. Check all your canonical tags are self-referencing (pointing to the current page URL) unless you intentionally want to consolidate to another URL.' },
          { n: '8', t: 'JavaScript-Rendered Content', d: 'If your page content only appears after JavaScript executes, Google may not see it. Googlebot processes JavaScript but with a delay. Use Google's URL Inspection tool and click "Test Live URL" to see how Google actually renders your page. Consider server-side rendering for important content.' },
          { n: '9', t: 'Server Returning Non-200 Status', d: 'Pages returning 4xx or 5xx status codes will not be indexed. Use Google Search Console's Pages report to find pages with server errors. Check that your server returns a 200 status for all indexable pages.' },
          { n: '10', t: 'Low Crawl Budget for Large Sites', d: 'Large sites with thousands of pages may not get all pages crawled within Google's crawl budget. Reduce crawl budget waste by noindexing low-value pages (pagination, filtered views, admin pages), fixing redirect chains, and keeping your sitemap focused on important pages only.' },
          { n: '11', t: 'Google Sandbox Effect on New Domains', d: 'New domains sometimes experience a period of reduced visibility in search results even after indexing. This is informally called the sandbox effect. It typically resolves within 3-6 months as your site earns links, generates user signals, and demonstrates it is a legitimate resource.' },
        ].map(({ n, t, d }) => (
          <div key={n} style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12 }}>{n}. {t}</h2>
            <p style={{ margin: 0 }}>{d}</p>
          </div>
        ))}
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Find all your indexing issues in 60 seconds</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free sitemap analysis — no account needed</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>
    </article>
  );
}
