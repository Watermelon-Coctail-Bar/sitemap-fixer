import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Google Search Console Indexing Errors - Fix Guide',
  description: 'Browse every Google Search Console indexing error and "Page indexing" status: noindex, canonical, 404, 5xx, robots.txt, Discovered - currently not indexed, and more. Learn how to diagnose and fix each one.',
  keywords: 'google search console errors, gsc indexing errors, page indexing report, why is my page not indexed, crawled currently not indexed, discovered currently not indexed',
  alternates: { canonical: 'https://sitemapfixer.com/gsc-errors' },
  openGraph: {
    title: 'Google Search Console Indexing Errors - Fix Guide',
    description: 'Browse every Google Search Console indexing error and "Page indexing" status: noindex, canonical, 404, 5xx, robots.txt, Discovered - currently not indexed, and more. Learn how to diagnose and fix each one.',
    url: 'https://sitemapfixer.com/gsc-errors',
    type: 'website',
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

const ERRORS = [
  { slug: 'page-with-redirect', title: 'Page with redirect', desc: 'URL is a redirect, so Google drops it from the index and follows the redirect chain to the target page.' },
  { slug: 'excluded-by-noindex-tag', title: 'Excluded by noindex tag', desc: 'Google sees a noindex meta tag or X-Robots-Tag header and deliberately keeps the page out of the index.' },
  { slug: 'alternate-page-with-canonical', title: 'Alternate page with proper canonical tag', desc: 'This URL points at another canonical, so Google indexes the canonical instead. Usually fine but worth auditing.' },
  { slug: 'duplicate-without-canonical', title: 'Duplicate without user-selected canonical', desc: 'Google found duplicates, you did not declare a canonical, and Google chose a different URL than this one.' },
  { slug: 'discovered-not-indexed', title: 'Discovered - currently not indexed', desc: 'Google knows the URL exists but has not crawled it yet - usually a crawl budget, quality, or server load signal.' },
  { slug: 'crawled-not-indexed', title: 'Crawled - currently not indexed', desc: 'Google crawled the page but decided not to index it - almost always a content quality or duplication problem.' },
  { slug: 'not-found-404', title: 'Not found (404)', desc: 'Server returned 404 Not Found. Google drops the URL from the index after repeated 404 responses.' },
  { slug: 'server-error-5xx', title: 'Server error (5xx)', desc: 'Server returned 500, 502, 503 or similar. Sustained 5xx errors cause deindexing and crawl rate drops.' },
  { slug: 'soft-404', title: 'Soft 404', desc: 'Page returns 200 OK but looks empty or like an error page. Google treats it as 404 and excludes it.' },
  { slug: 'blocked-by-robots-txt', title: 'Blocked by robots.txt', desc: 'Your robots.txt file disallows Googlebot from crawling the URL, so it cannot be indexed with content.' },
  { slug: 'blocked-unauthorized-401', title: 'Blocked due to unauthorized request (401)', desc: 'Server returned 401 Unauthorized. Googlebot cannot authenticate, so the page never gets fetched.' },
  { slug: 'blocked-forbidden-403', title: 'Blocked due to access forbidden (403)', desc: 'Server returned 403 Forbidden. Typically a firewall, WAF, or permission issue blocking Googlebot.' },
];

export default function GscErrorsIndex() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px', fontFamily: 'Geist, sans-serif' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>
        {'  '}
        <span>GSC Errors</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Google Search Console Indexing Errors</h1>
      <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 48 }}>
        The Page indexing report in Google Search Console groups every non-indexed URL under a specific reason.
        Each reason means something very different - from a harmless canonical match to a server error that is actively costing you traffic.
        Browse every status below with a full explanation, diagnosis steps, and exact fixes.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 16, marginBottom: 48 }}>
        {ERRORS.map(e => (
          <a key={e.slug} href={'/gsc-errors/' + e.slug} style={{ display: 'block', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px', textDecoration: 'none', transition: 'border-color 0.15s', background: 'white' }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 6, fontSize: 16 }}>{e.title}</div>
            <div style={{ color: '#6b6b7d', fontSize: 14, lineHeight: 1.5 }}>{e.desc}</div>
            <div style={{ color: '#2d5be3', fontSize: 13, marginTop: 12 }}>Read guide </div>
          </a>
        ))}
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center' }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>See which of these errors affect your site</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free sitemap and indexing analysis - results in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>
          Analyze My Sitemap
        </a>
      </div>
    </div>
  );
}
