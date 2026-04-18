import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Submitted URL Not Indexed: How to Fix in GSC', description: 'Seeing submitted URL not indexed in Google Search Console? Here is what it means and the exact steps to fix it.', alternates: { canonical: 'https://sitemapfixer.com/learn/submitted-url-not-indexed' }, openGraph: { title: 'Submitted URL Not Indexed: Why and How to Fix', description: 'Seeing submitted URL not indexed in Google Search Console? Here is what it means and the exact steps to fix it.', url: 'https://sitemapfixer.com/learn/submitted-url-not-indexed', type: 'article',
    images: [{
      url: 'https://sitemapfixer.com/opengraph-image',
      width: 1200,
      height: 630,
      alt: 'SitemapFixer - AI Sitemap Checker and SEO Fix Tool',
    }],
    siteName: 'SitemapFixer',
    locale: 'en_US',
  } };
export default function Page() { return (
  <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"Article","headline":"Submitted URL Not Indexed: How to Fix in GSC","description":"Seeing submitted URL not indexed in Google Search Console? Here is what it means and the exact steps to fix it.","url":"https://sitemapfixer.com/learn/submitted-url-not-indexed","author":{"@type":"Person","name":"Arnoldas Arny","url":"https://sitemapfixer.com/about"},"publisher":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com","logo":{"@type":"ImageObject","url":"https://sitemapfixer.com/opengraph-image"}},"datePublished":"2025-01-15","mainEntityOfPage":{"@type":"WebPage","@id":"https://sitemapfixer.com/learn/submitted-url-not-indexed"}}' }} />
    <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}><a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}<a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}<span>Submitted URL Not Indexed: Why and How to Fix</span></nav>
    <div style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 16 }}>By <a href="/about" style={{ color: '#2d5be3', textDecoration: 'none' }}>Arnoldas Arny</a></div>
    <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Submitted URL Not Indexed: Why and How to Fix</h1>
    <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}><span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Diagnose your sitemap free</span><a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze Free</a></div>
    <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>What This Status Actually Means</h2>
        <p style={{ marginBottom: 20 }}>Submitted URL not indexed means Google crawled your URL from your sitemap but decided not to include it in its index. Google visited the page and made a deliberate quality decision not to index it.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>Check the Page Quality</h2>
        <p style={{ marginBottom: 20 }}>The most common reason is low content quality. Pages with thin content, near-duplicate content, or little unique value will be crawled but skipped. Ensure the page has at least 500 words of original, useful content.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>Look for a noindex Directive</h2>
        <p style={{ marginBottom: 20 }}>Check the page source for meta name robots content noindex or X-Robots-Tag headers. If Google sees a noindex signal, it crawls but does not index - exactly matching this status.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>Fix Canonical Tag Issues</h2>
        <p style={{ marginBottom: 20 }}>If your page has a canonical tag pointing to a different URL, Google will index the canonical target instead. Confirm the canonical tag on your page points to itself.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>Verify the Page Loads Correctly</h2>
        <p style={{ marginBottom: 20 }}>Use the URL Inspection tool in Search Console to fetch and render the page as Google sees it. If the rendered version looks broken or shows missing content, fix those issues first.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>Build Internal Links to the Page</h2>
        <p style={{ marginBottom: 20 }}>Pages with no internal links get deprioritized. Link to the affected pages from your most visited, most authoritative pages to signal importance to Google.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>Request Indexing After Fixing Issues</h2>
        <p style={{ marginBottom: 20 }}>Use the URL Inspection tool to request indexing after making improvements. Click the URL, then click Request Indexing. Google typically re-crawls within a few days.</p>

        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/learn/pages-not-indexed-google" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Pages Not Indexed by Google: Causes and Fixes</a></li>
            <li><a href="/learn/crawled-currently-not-indexed" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Crawled Not Indexed: How to Fix It | SitemapFixer</a></li>
            <li><a href="/learn/discovered-currently-not-indexed" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Discovered Not Indexed: Why It Happens & Fixes | SitemapFixer</a></li>
            <li><a href="/learn/why-pages-not-indexed" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Why Are My Pages Not Indexed by Google?</a></li>
            <li><a href="/learn/index-coverage-report" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Index Coverage Report in Google Search Console</a></li>
          </ul>
        </div>
    </div>
    <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}><div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Fix your sitemap now</div><div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free analysis in 60 seconds</div><a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Sitemap</a></div>
    <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}><div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Related guides</div><ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <li><a href="/learn/crawled-currently-not-indexed" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Crawled Currently Not Indexed</a></li>
          <li><a href="/learn/pages-in-sitemap-not-indexed" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Pages in Sitemap Not Indexed</a></li>
          <li><a href="/learn/pages-not-indexed-google" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Pages Not Indexed</a></li>
    </ul></div>
  </div>); }
