import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Why Is Google Not Indexing My Site? 11 Causes and Fixes',
  description: 'Google not indexing your website? Here are the 11 most common reasons and exactly how to fix each one.',
  alternates: { canonical: 'https://sitemapfixer.com/blog/why-is-google-not-indexing-my-site' },
  openGraph: {
    title: 'Why Is Google Not Indexing My Site? 11 Causes and Fixes',
    description: 'Google not indexing your website? Here are the 11 most common reasons and exactly how to fix each one.',
    url: 'https://sitemapfixer.com/blog/why-is-google-not-indexing-my-site',
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
const reasons = [
  { n: '1', t: 'Site Blocked by Robots.txt', d: "Check your robots.txt at yourdomain.com/robots.txt. If it contains Disallow: / under User-agent: *, Googlebot cannot crawl any page. This is often enabled during development and forgotten. Remove the blanket disallow and verify crawlability in Google Search Console." },
  { n: '2', t: 'Pages Have a Noindex Tag', d: "Check your pages for a meta tag with content=noindex. This tells Google not to index the page. In WordPress, the Discourage search engines setting adds this to all pages. Use SitemapFixer to bulk-identify noindex pages across your site." },
  { n: '3', t: 'Site Is Too New', d: "Google needs time to discover new sites. A brand new domain typically takes 2-4 weeks before pages appear in search. Speed this up by submitting your sitemap to Google Search Console, requesting indexing for key pages, and building backlinks to help Google discover your site." },
  { n: '4', t: 'Sitemap Has Errors', d: "A malformed or missing sitemap means Google cannot discover your pages efficiently. Check your sitemap at yourdomain.com/sitemap.xml. Submit it in Google Search Console under Sitemaps. SitemapFixer automatically validates your sitemap and reports any errors." },
  { n: '5', t: 'Thin or Duplicate Content', d: "Google avoids indexing pages with little unique value. Pages under 300 words, duplicate content, or pages nearly identical to others on your site often do not get indexed. Improve content depth, use canonical tags to consolidate duplicates, and use noindex on low-value pages." },
  { n: '6', t: 'Slow Page Load Speed', d: "Very slow pages may get crawled infrequently or skipped during crawl budget allocation. Use PageSpeed Insights to identify performance issues. Core Web Vitals failures can also reduce how often Google revisits your pages." },
  { n: '7', t: 'Canonical Tags Pointing Elsewhere', d: "If your canonical tag points to a different URL, Google will index that URL instead. Check all your canonical tags are self-referencing unless you intentionally want to consolidate to another URL." },
  { n: '8', t: 'JavaScript-Rendered Content', d: "If page content only appears after JavaScript executes, Google may not see it. Googlebot processes JavaScript but with a delay. Use the URL Inspection tool in Search Console and click Test Live URL to see how Google renders your page." },
  { n: '9', t: 'Server Returning Non-200 Status', d: "Pages returning 4xx or 5xx status codes will not be indexed. Use Google Search Console to find pages with server errors. Check that your server returns 200 for all indexable pages." },
  { n: '10', t: 'Low Crawl Budget', d: "Large sites may not get all pages crawled within budget. Reduce waste by noindexing low-value pages like pagination and filter pages, fixing redirect chains, and keeping your sitemap focused on important pages only." },
  { n: '11', t: 'Google Sandbox Effect on New Domains', d: "New domains sometimes see reduced visibility even after indexing. This typically resolves within 3-6 months as your site earns links, generates user signals, and demonstrates it is a legitimate resource." },
];
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
        <p style={{ marginBottom: 24 }}>If Google is not indexing your site or specific pages, something is blocking crawling, blocking indexing, or sending a signal that the content is not worth indexing. Here are the 11 most common causes and how to fix each one.</p>
        {reasons.map(({ n, t, d }) => (
          <div key={n} style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12 }}>{n}. {t}</h2>
            <p style={{ margin: 0 }}>{d}</p>
          </div>
        ))}
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Find all your indexing issues in 60 seconds</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free sitemap analysis</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
  
        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/blog/how-to-check-if-site-is-indexed" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>How to Check If Your Website Is Indexed by Google</a></li>
            <li><a href="/blog/website-not-showing-google" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Website Not Showing in Google: 8 Fixes</a></li>
            <li><a href="/blog/indexing-speed-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Indexing Speed: Get Pages Indexed Faster</a></li>
            <li><a href="/blog/noindex-fix-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Noindex Fix: Remove Noindex from Pages That Should Rank</a></li>
            <li><a href="/learn/pages-not-indexed-google" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Pages Not Indexed by Google: Causes and Fixes</a></li>
          </ul>
        </div>
    </div>
    </article>
  );
}
