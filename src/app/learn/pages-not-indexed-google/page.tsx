import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Pages Not Indexed by Google: Causes and Fixes',
  description: "Why Google is not indexing your pages and how to fix each cause - robots.txt blocks, noindex tags, crawl budget issues, and more.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/pages-not-indexed-google' },
  openGraph: {
    title: 'Pages Not Indexed by Google: Causes and Fixes',
    description: 'Why Google is not indexing your pages and how to fix each cause - robots.txt blocks, noindex tags, crawl budget issues, and more.',
    url: 'https://sitemapfixer.com/learn/pages-not-indexed-google',
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"Article","headline":"Pages Not Indexed by Google: Causes and Fixes","description":"Why Google is not indexing your pages and how to fix each cause - robots.txt blocks, noindex tags, crawl budget issues, and more.","url":"https://sitemapfixer.com/learn/pages-not-indexed-google","author":{"@type":"Person","name":"Arnoldas Arny","url":"https://sitemapfixer.com/about"},"publisher":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com","logo":{"@type":"ImageObject","url":"https://sitemapfixer.com/opengraph-image"}},"datePublished":"2025-01-15","mainEntityOfPage":{"@type":"WebPage","@id":"https://sitemapfixer.com/learn/pages-not-indexed-google"}}' }} />
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Pages Not Indexed by Google</span>
      </nav>
      <div style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 16 }}>By <a href="/about" style={{ color: '#2d5be3', textDecoration: 'none' }}>Arnoldas Arny</a></div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Pages Not Indexed by Google: Causes and Fixes</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Find your indexing issues free in 60 seconds</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Try SitemapFixer Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8 }}>
        <p style={{ marginBottom: 20 }}>When Google is not indexing your pages, it means they will not appear in search results. There are several distinct reasons this happens - and each has a specific fix. The first step is to check Google Search Console under Index, then Pages to see exactly which pages are excluded and why.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>Check Google Search Console First</h2>
        <p style={{ marginBottom: 20 }}>Open Google Search Console and navigate to Indexing, then Pages. You will see a breakdown of pages by status: Indexed, Not indexed, and Excluded. Click on each status to see the affected URLs and the reason Google gives. This is your primary diagnostic tool and tells you exactly which of the following causes applies to your site.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>Common Reasons Pages Are Not Indexed</h2>
        <p style={{ marginBottom: 12 }}><strong>Crawled - currently not indexed:</strong> Google crawled the page but decided not to index it, usually due to thin content, duplicate content, or low perceived value.</p>
        <p style={{ marginBottom: 12 }}><strong>Discovered - currently not indexed:</strong> Google knows the page exists but has not crawled it yet, often due to crawl budget constraints on larger sites.</p>
        <p style={{ marginBottom: 12 }}><strong>Excluded by noindex tag:</strong> The page has a meta robots noindex tag or an X-Robots-Tag noindex header. Remove the tag if you want the page indexed.</p>
        <p style={{ marginBottom: 12 }}><strong>Blocked by robots.txt:</strong> Your robots.txt is preventing Googlebot from crawling the page. Update robots.txt to allow crawling of pages you want indexed.</p>
        <p style={{ marginBottom: 12 }}><strong>Alternate page with proper canonical tag:</strong> The page has a canonical tag pointing to a different URL. Google is indexing the canonical version instead.</p>
        <p style={{ marginBottom: 20 }}><strong>Page with redirect:</strong> The URL in your sitemap redirects to another URL. Update your sitemap to use the final destination URL.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>How to Fix Indexing Issues</h2>
        <p style={{ marginBottom: 20 }}>Once you have identified the cause in Search Console, use the URL Inspection tool to inspect individual pages and request indexing after making fixes. For bulk issues like noindex tags across many pages, use a site crawler to find all affected pages. SitemapFixer checks your sitemap URLs for noindex tags, robots.txt blocks, and status code issues automatically.</p>
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Find all indexing issues on your site</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free sitemap analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>
      <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
        <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Related guides</div>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <li><a href="/learn/why-pages-not-indexed" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Why Pages Not Indexed</a></li>
          <li><a href="/learn/submitted-url-not-indexed" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Submitted URL Not Indexed</a></li>
          <li><a href="/learn/noindex-tag" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Noindex Tag Guide</a></li>
        </ul>
      </div>

        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/learn/submitted-url-not-indexed" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Submitted URL Not Indexed: How to Fix in GSC</a></li>
            <li><a href="/learn/crawled-currently-not-indexed" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Crawled Not Indexed: How to Fix It | SitemapFixer</a></li>
            <li><a href="/learn/discovered-currently-not-indexed" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Discovered Not Indexed: Why It Happens & Fixes | SitemapFixer</a></li>
            <li><a href="/learn/why-pages-not-indexed" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Why Are My Pages Not Indexed by Google?</a></li>
            <li><a href="/learn/index-coverage-report" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Index Coverage Report in Google Search Console</a></li>
          
            <li><a href="/learn/soft-404-errors" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Soft 404 Errors: What They Are and How to Fix Them</a></li></ul>
        </div>
    </div>
  );
}
