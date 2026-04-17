import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Alternate Page with Proper Canonical Tag: GSC Status Explained',
  description: 'The "Alternate page with proper canonical tag" status in Google Search Console means Google indexed the canonical version instead of this URL. Learn when this is healthy and when it signals a problem.',
  keywords: 'alternate page with proper canonical tag, gsc canonical, canonical tag error, duplicate pages google, canonical not indexed',
  alternates: { canonical: 'https://sitemapfixer.com/gsc-errors/alternate-page-with-canonical' },
  openGraph: {
    title: 'Alternate Page with Proper Canonical Tag - GSC Status',
    description: 'The "Alternate page with proper canonical tag" status in Google Search Console means Google indexed the canonical version instead of this URL. Learn when this is healthy and when it signals a problem.',
    url: 'https://sitemapfixer.com/gsc-errors/alternate-page-with-canonical',
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
  const faqSchema = "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Is 'Alternate page with proper canonical tag' an error?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"No. It is confirmation that canonicalization is working correctly - Google sees this URL as a duplicate and is indexing the canonical version you specified. It is only a problem if the canonical target is wrong or if the URL should be standalone.\"}},{\"@type\":\"Question\",\"name\":\"Should alternate pages be in my sitemap?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"No. Only canonical URLs should be in your sitemap. Including alternate versions wastes crawl budget and sends mixed signals - Google will still honor the canonical tag but it is cleaner to omit them entirely.\"}},{\"@type\":\"Question\",\"name\":\"How is this different from 'Duplicate without user-selected canonical'?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"In this status you declared a canonical and Google agreed with it. In 'Duplicate without user-selected canonical' you did not declare one, so Google picked its own - which may not be the URL you want ranked.\"}}]}";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqSchema }}
      />
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px', fontFamily: 'Geist, sans-serif' }}>
        <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
          <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>
          {'  /  '}
          <a href="/gsc-errors" style={{ color: '#2d5be3', textDecoration: 'none' }}>GSC Errors</a>
          {'  /  '}
          <span>Alternate page with proper canonical tag</span>
        </nav>

        <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>
          Alternate page with proper canonical tag
        </h1>

        <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 40 }}>
          This GSC status means you have two or more URLs serving similar or identical content, and on this particular URL you declared a rel=&quot;canonical&quot; pointing at a different page. Google respected the directive and indexed the canonical instead. It is the &quot;well behaved duplicate&quot; bucket - usually healthy, but always worth auditing to make sure the canonical target is actually the URL you want ranking.
        </p>

        <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 4 }}>Audit your canonical tags</div>
            <div style={{ fontSize: 13, color: '#6b6b7d' }}>We check every URL in your sitemap for mismatched canonical targets</div>
          </div>
          <a href="/" style={{ background: '#0a0a0f', color: 'white', padding: '12px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 14, whiteSpace: 'nowrap' }}>
            Analyze My Sitemap
          </a>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>What this GSC status means</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>Googlebot crawled this URL, found a &lt;link rel=&quot;canonical&quot; href=&quot;...&quot;&gt; tag pointing to a different URL, and selected that target as the canonical version. Signals like PageRank and content freshness are consolidated onto the canonical. This URL is classified as an &quot;alternate&quot; and is excluded from the index - it will not appear in search results, but the declared canonical will. This is exactly how canonicalization is supposed to work for duplicate content.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common causes</h2>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 32 }}>
          <li style={{ marginBottom: 8 }}>Tracking URLs with query strings (utm_source, gclid, fbclid) canonicalizing to the clean URL.</li>
          <li style={{ marginBottom: 8 }}>Product variants (color, size, SKU) canonicalizing to the master product URL.</li>
          <li style={{ marginBottom: 8 }}>Paginated pages (?page=2, ?page=3) canonicalizing to page 1.</li>
          <li style={{ marginBottom: 8 }}>Printer-friendly or AMP versions canonicalizing to the main page.</li>
          <li style={{ marginBottom: 8 }}>Mobile-specific URLs (m.example.com/page) canonicalizing to the responsive desktop URL.</li>
          <li style={{ marginBottom: 8 }}>Category or tag archive pages pointing to a main hub page.</li>
        </ul>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How it affects indexing</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>By itself, no negative impact - this is the intended outcome of using canonicals. The alternate URL is excluded but your canonical target gets all the ranking signals consolidated. Problems arise only if (a) the wrong URL is set as canonical, (b) the canonical target is excluded for another reason (noindex, 404, or redirect), or (c) alternate URLs sit inside your sitemap and waste crawl budget.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How to diagnose</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>Open GSC Page indexing and click &quot;Alternate page with proper canonical tag&quot;. For any URL, run URL Inspection - the &quot;User-declared canonical&quot; and &quot;Google-selected canonical&quot; fields will both show the target. Confirm they match and that the target URL is actually indexed and ranking. If a valuable URL is being canonicalized away unintentionally, that is the real issue.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How to fix</h2>
        <div style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
          <pre style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: '#1c1c26', whiteSpace: 'pre-wrap', fontFamily: 'DM Mono, monospace' }}>1. For healthy cases (tracking URLs, paginated pages, variants): do nothing - it is working.
2. Remove alternate URLs from your sitemap.xml - only submit canonicals.
3. If a URL should be standalone (unique content, not a duplicate), remove its rel=&quot;canonical&quot; tag pointing elsewhere, or change it to self-referential.
4. If the canonical target is wrong, update the &lt;link rel=&quot;canonical&quot; href=&quot;CORRECT_URL&quot;&gt; tag in the alternate page&apos;s head.
5. Make sure the canonical target returns 200 OK, has no noindex, and is not itself being redirected.
6. Keep canonical URLs absolute (https://example.com/page), not relative, to avoid resolution ambiguity.
7. Use URL Inspection &gt; Request Indexing on the canonical to refresh Google&apos;s view.</pre>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, marginTop: 40 }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Is &quot;Alternate page with proper canonical tag&quot; an error?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>No. It is confirmation that canonicalization is working correctly - Google sees this URL as a duplicate and is indexing the canonical version you specified. It is only a problem if the canonical target is wrong or if the URL should be standalone.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Should alternate pages be in my sitemap?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>No. Only canonical URLs should be in your sitemap. Including alternate versions wastes crawl budget and sends mixed signals - Google will still honor the canonical tag but it is cleaner to omit them entirely.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>How is this different from &quot;Duplicate without user-selected canonical&quot;?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>In this status you declared a canonical and Google agreed with it. In &quot;Duplicate without user-selected canonical&quot; you did not declare one, so Google picked its own - which may not be the URL you want ranked.</div>
          </div>
        </div>

        <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
          <div style={{ fontSize: 22, fontWeight: 700, color: 'white', marginBottom: 8 }}>Audit your canonical configuration</div>
          <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free scan - find pages being canonicalized to the wrong URL</div>
          <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 32px', borderRadius: 8, textDecoration: 'none', fontWeight: 700, fontSize: 15 }}>
            Analyze My Sitemap Free
          </a>
        </div>

        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Related GSC indexing statuses</div>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <li><a href="/gsc-errors/duplicate-without-canonical" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Duplicate without canonical</a></li>
            <li><a href="/gsc-errors/page-with-redirect" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Page with redirect</a></li>
            <li><a href="/gsc-errors/excluded-by-noindex-tag" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Excluded by noindex</a></li>
          </ul>
          <div style={{ marginTop: 16 }}>
            <a href="/gsc-errors" style={{ color: '#2d5be3', fontSize: 13 }}>All GSC indexing errors</a>
          </div>
        </div>
      </div>
    </>
  );
}
