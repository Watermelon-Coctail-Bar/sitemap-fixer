import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Google Search Console: Fix Your SEO',
  description: "Google Search Console is free and shows you exactly what Google sees on your site. Here is how to use each section to find and fix real SEO problems.",
  alternates: { canonical: 'https://sitemapfixer.com/blog/google-search-console-guide' },
  openGraph: { title: 'Google Search Console Guide', description: 'How to use every section of Google Search Console to improve your SEO.', url: 'https://sitemapfixer.com/blog/google-search-console-guide', type: 'article',
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
const sections = [
  { t: "Setting Up Google Search Console", d: "Go to search.google.com/search-console and add your site as a property. Choose Domain property (covers all subdomains, HTTP and HTTPS) over URL prefix if possible. Verify ownership using your DNS provider - add the TXT record Google gives you to your domain registrar. Once verified, Google starts collecting data. It takes 24-48 hours for data to start appearing and a few days for Search Console to run its first crawl of your submitted sitemap." },
  { t: "The Performance Report: Find Your Real Traffic", d: "The Performance report shows queries your site appeared for, clicks, impressions, click-through rate, and average position. Sort by impressions descending to find queries where you rank but nobody clicks - these are opportunities where you can improve titles and meta descriptions to increase CTR. Filter by page to see which of your pages drive the most traffic. Look for pages with high impressions but low clicks - they rank but lose users to competitors. Use this data to rewrite your title tags to be more compelling." },
  { t: "The Pages Report: Fix Your Indexing", d: "Under Indexing, then Pages, you see every URL Google knows about and their status. The breakdown is: Indexed (good), Not indexed (needs investigation), and Excluded (intentional or needs review). Click each Not indexed reason to see the affected URLs. Prioritize fixing: crawled currently not indexed (content quality issue), discovered currently not indexed (crawl budget or authority issue), page with redirect (update sitemap URLs), and submitted URL has noindex tag (remove the noindex or remove from sitemap)." },
  { t: "The Sitemaps Report: Monitor Your Submission", d: "Under Indexing, then Sitemaps, submit your sitemap.xml and monitor its status. After submission, Google shows how many URLs it discovered from your sitemap and how many errors it found. Click on your submitted sitemap to see a breakdown by URL type and any specific errors. Resubmit your sitemap after making significant changes to your site structure or after fixing crawl errors." },
  { t: "Core Web Vitals Report: Fix Page Experience", d: "Under Experience, then Core Web Vitals, you see your real-user performance data for LCP, INP, and CLS. Pages are grouped into Good, Needs improvement, and Poor. Click on each group to see which specific pages are affected. Click on an individual URL to see the specific metrics and get suggestions. Fix Poor pages first - they have a confirmed negative ranking impact. Common fixes: optimize LCP by compressing hero images and using next-gen formats, fix CLS by adding explicit width and height to images, improve INP by reducing JavaScript execution time." },
  { t: "URL Inspection: Debug Individual Pages", d: "The URL Inspection tool is the most powerful diagnostic in Search Console. Enter any URL from your site to see: whether it is indexed, the last crawl date, any issues Google found, and a rendered screenshot of what Googlebot actually sees. Use Test Live URL to trigger a fresh render in real time. If the rendered screenshot looks blank or is missing content your users see, you have a JavaScript rendering problem. Use Request Indexing after fixing issues to push the page back into the crawl queue quickly." },
  { t: "Manual Actions: Fix Penalties First", d: "Under Security and Manual Actions, check for any manual penalties applied by a Google reviewer. Manual actions are rare but severe - they can suppress your entire site or specific pages. Common reasons: unnatural links, thin content with little or no added value, cloaking or sneaky redirects, user-generated spam. If you have a manual action, read the description carefully, fix the root cause, then submit a reconsideration request with a detailed explanation of what you changed." },
];
export default function Page() {
  return (
    <article style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/blog" style={{ color: '#2d5be3', textDecoration: 'none' }}>Blog</a>{' / '}
        <span>Google Search Console Guide</span>
      </nav>
      <div style={{ fontSize: 13, color: '#9ca3af', marginBottom: 12 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"Article","headline":"Google Search Console: Fix Your SEO","description":"Google Search Console is free and shows you exactly what Google sees on your site. Here is how to use each section to find and fix real SEO problems.","url":"https://sitemapfixer.com/blog/google-search-console-guide","author":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com"},"publisher":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com","logo":{"@type":"ImageObject","url":"https://sitemapfixer.com/opengraph-image"}},"datePublished":"2025-01-15","mainEntityOfPage":{"@type":"WebPage","@id":"https://sitemapfixer.com/blog/google-search-console-guide"}}' }} />April 2025 · 11 min read</div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, lineHeight: 1.15 }}>Google Search Console: Fix Your SEO</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Get a full site analysis in 60 seconds</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Site Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        <p style={{ marginBottom: 32 }}>Google Search Console is the most important free SEO tool available. It shows you exactly what Google sees, what it has indexed, what errors it found, and how your pages perform in search. Most site owners ignore it until something goes wrong. Here is how to use it proactively to find and fix SEO problems before they cost you traffic.</p>
        {sections.map(({ t, d }) => (
          <div key={t} style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 10 }}>{t}</h2>
            <p style={{ margin: 0 }}>{d}</p>
          </div>
        ))}
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Complement Search Console with sitemap analysis</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free - finds sitemap errors and indexing issues in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Sitemap Free</a>
  
        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/blog/schema-markup-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Schema Markup: Add Structured Data to Your Site</a></li>
            <li><a href="/blog/structured-data-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Structured Data: Add Schema Markup</a></li>
            <li><a href="/blog/google-search-console-errors-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Google Search Console Errors: Meanings & Fixes</a></li>
            <li><a href="/learn/technical-seo-checklist" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Technical SEO Checklist 2025</a></li>
            <li><a href="/learn/seo-audit-checklist" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>SEO Audit Checklist: 25 Checks to Run on Any Website</a></li>
          
            <li><a href="/blog/free-seo-tools" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Free SEO Tools: The Best Free Tools for Every SEO Task</a></li></ul>
        </div>
    </div>
    </article>
  );
}
