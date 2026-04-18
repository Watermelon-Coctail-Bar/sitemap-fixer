import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'How to Check If Your Website Is Indexed by Google',
  description: "There are 5 ways to check if Google has indexed your pages. Each method, what it tells you, and what to do if important pages are missing.",
  alternates: { canonical: 'https://sitemapfixer.com/blog/how-to-check-if-site-is-indexed' },
  openGraph: { title: 'How to Check If Your Website Is Indexed by Google', description: '5 methods to check Google indexing status and what to do about missing pages.', url: 'https://sitemapfixer.com/blog/how-to-check-if-site-is-indexed', type: 'article',
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
const methods = [
  { n: "Method 1", t: "Google Search Console (most accurate)", d: "Go to search.google.com/search-console, select your property, then Indexing, then Pages. This shows the definitive list of what Google has and has not indexed on your site, with specific reasons for any non-indexed pages. For individual pages, use URL Inspection - type any URL and see its exact indexing status, last crawl date, and whether there are any issues. This is the gold standard for indexing checks." },
  { n: "Method 2", t: "site: operator in Google Search", d: "Type site:yoursite.com in Google Search. Google shows a count of indexed pages (not precise but directionally useful) and you can scan through them. To check a specific page: site:yoursite.com/specific-page - if it appears, it is indexed. If no results show, it is either not indexed or there is a canonicalization issue. Note: the site: operator underreports compared to actual index counts, so use Search Console for precise data." },
  { n: "Method 3", t: "URL Inspection in Search Console", d: "For any individual page, go to Google Search Console, click the search bar at the top, and paste the full URL. Click Inspect. This shows: whether the URL is indexed or not, the last crawl date, any crawl errors, the canonical URL Google chose, and a screenshot of what Googlebot rendered. Click Test Live URL to force a fresh check in real time rather than seeing cached data." },
  { n: "Method 4", t: "Check your sitemap submission status", d: "In Google Search Console under Indexing, then Sitemaps, you can see how many URLs from your submitted sitemap have been indexed versus discovered. If you submitted a sitemap with 150 URLs but Google only indexed 80, the Pages report shows what happened to the other 70 - whether they are crawled but not indexed, blocked, or have errors. This is the fastest way to find indexing gaps at scale." },
  { n: "Method 5", t: "Third-party tools", d: "Tools like Ahrefs Site Audit, Semrush Site Audit, and Screaming Frog can supplement Google Search Console by identifying pages that are crawlable but might have indexing issues - pages with thin content, duplicate content, noindex tags, or canonicalization problems that are likely to be excluded from Google's index. These are diagnostic tools rather than definitive indexing status checks." },
];
export default function Page() {
  return (
    <article style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/blog" style={{ color: '#2d5be3', textDecoration: 'none' }}>Blog</a>{' / '}
        <span>How to Check If Site Is Indexed</span>
      </nav>
      <div style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 16 }}>By <a href="/about" style={{ color: '#2d5be3', textDecoration: 'none' }}>Arnoldas Arny</a></div>
      <div style={{ fontSize: 13, color: '#9ca3af', marginBottom: 12 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"Article","headline":"How to Check If Your Website Is Indexed by Google","description":"There are 5 ways to check if Google has indexed your pages. Here is each method, what it tells you, and what to do if important pages are missing from Google","url":"https://sitemapfixer.com/blog/how-to-check-if-site-is-indexed","author":{"@type":"Person","name":"Arnoldas Arny","url":"https://sitemapfixer.com/about"},"publisher":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com","logo":{"@type":"ImageObject","url":"https://sitemapfixer.com/opengraph-image"}},"datePublished":"2025-01-15","mainEntityOfPage":{"@type":"WebPage","@id":"https://sitemapfixer.com/blog/how-to-check-if-site-is-indexed"}}' }} />April 2025 · 7 min read</div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, lineHeight: 1.15 }}>How to Check If Your Website Is Indexed by Google (5 Methods)</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>See what Google has indexed from your sitemap</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Sitemap Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        <p style={{ marginBottom: 32 }}>Not all pages get indexed - and pages that are not indexed cannot rank. Checking your indexing status regularly catches problems early. Here are the five most reliable ways to check, from quickest to most comprehensive.</p>
        {methods.map(({ n, t, d }) => (
          <div key={n} style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 10 }}>{n}: {t}</h2>
            <p style={{ margin: 0 }}>{d}</p>
          </div>
        ))}
        <div style={{ marginTop: 48 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>What to Do If Important Pages Are Not Indexed</h2>
          <p style={{ marginBottom: 0 }}>The most common reasons pages are not indexed: noindex tag present (check page source for meta name=robots content=noindex), blocked by robots.txt (check URL Inspection), thin or duplicate content (Google chose a canonical different from yours), crawl errors on the page, or the page is too new (can take days to weeks for new content). Use URL Inspection to diagnose the specific reason, fix it, then use Request Indexing to push the page back into the crawl queue.</p>
        </div>
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Check all your sitemap URLs at once</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free - finds indexing issues across your entire sitemap</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Sitemap Free</a>
  
        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/blog/why-is-google-not-indexing-my-site" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Why Is Google Not Indexing My Site? 11 Causes and Fixes</a></li>
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
