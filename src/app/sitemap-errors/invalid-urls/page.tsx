import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Invalid URLs in Sitemap: Fix Guide',
  description: 'Detect and remove invalid URLs from your XML sitemap. Broken or malformed URLs waste crawl budget and hurt your SEO. Fix them instantly with Sitemap Fixer.',
  alternates: { canonical: 'https://sitemapfixer.com/sitemap-errors/invalid-urls' },
  openGraph: {
    title: 'Invalid URLs in Sitemap - Fix & Best Practices',
    description: 'Detect and remove invalid URLs from your XML sitemap. Broken or malformed URLs waste crawl budget and hurt your SEO. Fix them instantly with Sitemap Fixer.',
    url: 'https://sitemapfixer.com/sitemap-errors/invalid-urls',
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
  const faqSchema = "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Should I include redirect URLs in my sitemap?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"No. Your sitemap should only contain canonical, final destination URLs that return 200 status codes.\"}},{\"@type\":\"Question\",\"name\":\"How often should I audit my sitemap for invalid URLs?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Monthly for active sites, and immediately after any site migration or significant content changes.\"}},{\"@type\":\"Question\",\"name\":\"Can invalid URLs cause deindexing?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Not directly, but they signal poor site maintenance and can reduce the crawl priority Google assigns to your domain.\"}}]}";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqSchema }}
      />
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px', fontFamily: 'Geist, sans-serif' }}>
        {/* Breadcrumb */}
        <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
          <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>
          {'  '}
          <a href="/sitemap-errors" style={{ color: '#2d5be3', textDecoration: 'none' }}>Sitemap Errors</a>
          {'  '}
          <span>Invalid URLs in Sitemap</span>
        </nav>

        <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>
          Invalid URLs in Your Sitemap
        </h1>

        <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 40 }}>
          Invalid URLs in your sitemap tell Google your site is poorly maintained. When Googlebot follows a URL from your sitemap and hits a 404, a redirect chain, or a malformed address, it wastes crawl budget and reduces the authority signals for your entire domain.
        </p>

        {/* CTA Box */}
        <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 4 }}>Find this error in your sitemap</div>
            <div style={{ fontSize: 13, color: '#6b6b7d' }}>Analyze your sitemap for free - get a full report in 60 seconds</div>
          </div>
          <a href="/" style={{ background: '#0a0a0f', color: 'white', padding: '12px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 14, whiteSpace: 'nowrap' }}>
            Analyze My Sitemap 
          </a>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>What is this error?</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>An invalid URL in a sitemap is any URL that returns a non-200 status code, contains malformed syntax (spaces, special characters), uses HTTP when HTTPS is available, or points to a page that has been deleted or moved.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Why does it happen?</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>Invalid URLs appear when pages are deleted without updating the sitemap, when URLs are manually entered with typos, when site migrations happen without redirects, or when CMS themes generate URLs with encoding errors.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Why does it hurt SEO?</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>Every invalid URL Googlebot crawls is a wasted crawl request. On large sites, hundreds of invalid URLs can cause Google to crawl important pages less frequently, delaying indexing of new content.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How to detect it</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>Sitemap Fixer validates every URL in your sitemap against HTTP status codes, checks for malformed syntax, and flags URLs that return 3xx, 4xx, or 5xx responses.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How to fix it</h2>
        <div style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
          <pre style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: '#1c1c26', whiteSpace: 'pre-wrap', fontFamily: 'DM Mono, monospace' }}>1. Run a full sitemap audit to identify all invalid URLs.
2. For deleted pages: remove from sitemap immediately.
3. For moved pages: update the sitemap URL to the new location.
4. For redirect chains: update to point to the final destination URL.
5. Fix any URL encoding issues (spaces  %20, etc.).</pre>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Real-world example</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>An e-commerce site with 8,000 product pages had 340 invalid URLs from discontinued products still in their sitemap. Removing them increased crawl coverage of active products by 22%.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common mistakes</h2>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 32 }}>
          <li style={{ marginBottom: 8 }}>Leaving 301 redirect targets in sitemap instead of final URLs</li>
          <li style={{ marginBottom: 8 }}>Including URLs with query parameters that create duplicate content</li>
          <li style={{ marginBottom: 8 }}>Not updating sitemap after major site restructuring</li>
        </ul>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, marginTop: 40 }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Should I include redirect URLs in my sitemap?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>No. Your sitemap should only contain canonical, final destination URLs that return 200 status codes.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>How often should I audit my sitemap for invalid URLs?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Monthly for active sites, and immediately after any site migration or significant content changes.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Can invalid URLs cause deindexing?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Not directly, but they signal poor site maintenance and can reduce the crawl priority Google assigns to your domain.</div>
          </div>
        </div>

        {/* Final CTA */}
        <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
          <div style={{ fontSize: 22, fontWeight: 700, color: 'white', marginBottom: 8 }}>Fix this in your sitemap now</div>
          <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Enter your domain and get a full sitemap audit in 60 seconds</div>
          <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 32px', borderRadius: 8, textDecoration: 'none', fontWeight: 700, fontSize: 15 }}>
            Analyze My Sitemap Free 
          </a>
        </div>

        {/* Related */}
        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Related sitemap errors</div>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <li><a href="/sitemap-errors/duplicate-urls" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Duplicate Urls</a></li>
            <li><a href="/sitemap-errors/too-many-urls" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Too Many Urls</a></li>
            <li><a href="/sitemap-errors/orphan-pages" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Orphan Pages</a></li>
          </ul>
          <div style={{ marginTop: 16 }}>
            <a href="/sitemap-errors" style={{ color: '#2d5be3', fontSize: 13 }}> All sitemap errors</a>
          </div>
        </div>
      </div>
    </>
  );
}
