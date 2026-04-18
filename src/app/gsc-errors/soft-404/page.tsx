import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Soft 404 in Google Search Console: How to Fix',
  description: 'The "Soft 404" status in GSC means a page returns 200 OK but looks like a not-found or empty page. What triggers soft 404s and how to fix them.',
  keywords: 'soft 404, soft 404 error, google soft 404, gsc soft 404, empty page indexing, thin page 404',
  alternates: { canonical: 'https://sitemapfixer.com/gsc-errors/soft-404' },
  openGraph: {
    title: 'Soft 404 - GSC Indexing Status Explained',
    description: 'The "Soft 404" status in GSC means a page returns 200 OK but looks like a not-found or empty page. What triggers soft 404s and how to fix them.',
    url: 'https://sitemapfixer.com/gsc-errors/soft-404',
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
  const faqSchema = "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Why does Google think my real page is a soft 404?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Most common reasons: the content is too thin (under a few hundred words), the page is JavaScript-rendered and Google sees mostly an empty shell, or the text literally contains phrases like 'not found', 'sorry', or 'page does not exist' that Google reads as error signals.\"}},{\"@type\":\"Question\",\"name\":\"Is a soft 404 worse than a regular 404?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"For indexing purposes, yes - a regular 404 lets Google cleanly drop the URL and move on. A soft 404 wastes crawl budget because Google has to render the page only to decide it is not worth indexing, and the incorrect 200 status code confuses its quality signals.\"}},{\"@type\":\"Question\",\"name\":\"How do I fix a JavaScript-rendered soft 404?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Make sure the server-rendered HTML contains the real content, not just a loading shell. Implement SSR, SSG, or dynamic rendering so Googlebot receives a fully-populated response. Test by using the URL Inspection tool and checking the rendered HTML view.\"}}]}";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'Soft 404 in Google Search Console: How to Fix', description: 'The "Soft 404" status in GSC means a page returns 200 OK but looks like a not-found or empty page. What triggers soft 404s and how to fix them.', url: 'https://sitemapfixer.com/gsc-errors/soft-404', author: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com' }, publisher: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com', logo: { '@type': 'ImageObject', url: 'https://sitemapfixer.com/opengraph-image' } }, datePublished: '2026-04-17', mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://sitemapfixer.com/gsc-errors/soft-404' } }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sitemapfixer.com/' }, { '@type': 'ListItem', position: 2, name: 'GSC Errors', item: 'https://sitemapfixer.com/gsc-errors' }, { '@type': 'ListItem', position: 3, name: 'Soft 404 in Google Search Console: How to Fix', item: 'https://sitemapfixer.com/gsc-errors/soft-404' }] }),
        }}
      />

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
          <span>Soft 404</span>
        </nav>

        <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>
          Soft 404
        </h1>

        <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 40 }}>
          A &quot;Soft 404&quot; in Google Search Console means the page returns HTTP 200 OK - so technically the server says &quot;here&apos;s the page&quot; - but the actual content looks like an error page, empty template, or placeholder. Google detects the mismatch and treats the URL as if it were a real 404, excluding it from the index. Soft 404s are especially common on e-commerce out-of-stock pages, JavaScript apps, and generic redirect-to-homepage setups.
        </p>

        <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 4 }}>Find soft 404s in your sitemap</div>
            <div style={{ fontSize: 13, color: '#6b6b7d' }}>We detect thin and empty pages masquerading as real content - free</div>
          </div>
          <a href="/" style={{ background: '#0a0a0f', color: 'white', padding: '12px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 14, whiteSpace: 'nowrap' }}>
            Analyze My Sitemap
          </a>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>What this GSC status means</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>Google fetched the URL and received an HTTP 200 response, but the rendered page content looks empty, nearly empty, or explicitly signals &quot;not found&quot; (phrases like &quot;Sorry, the page you requested&quot;, &quot;Page not found&quot;, &quot;We couldn&apos;t find what you&apos;re looking for&quot;). Google&apos;s algorithm concludes the URL does not actually represent meaningful content and excludes it from the index - the same outcome as a real 404, but achieved through content analysis rather than status code.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common causes</h2>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 32 }}>
          <li style={{ marginBottom: 8 }}>Out-of-stock or discontinued products returning 200 with a &quot;no longer available&quot; message instead of 404/410.</li>
          <li style={{ marginBottom: 8 }}>A custom 404 page that returns HTTP 200 instead of a proper 404 status.</li>
          <li style={{ marginBottom: 8 }}>Category or search result pages with zero matching items, showing &quot;No results found&quot; at 200.</li>
          <li style={{ marginBottom: 8 }}>JavaScript-rendered pages where Googlebot sees an empty div shell before hydration.</li>
          <li style={{ marginBottom: 8 }}>URLs that redirect via JavaScript (window.location) rather than a proper 301 redirect.</li>
          <li style={{ marginBottom: 8 }}>Thin pages with fewer than ~100 words of unique content - Google treats them like error pages.</li>
          <li style={{ marginBottom: 8 }}>Auto-generated pages (paginated empties, tag pages with no posts, expired events) that should not exist.</li>
        </ul>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How it affects indexing</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>Soft 404 URLs are excluded from the index and get no organic traffic. They also waste crawl budget every time Google revisits them, and at scale they lower the site-level quality signal - sites with many soft 404s often see suppressed rankings on other pages too. For e-commerce, soft 404s on out-of-stock items specifically drain visibility from product inventory that never returns.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How to diagnose</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>Open Page indexing in GSC, click &quot;Soft 404&quot;, and look at the URL pattern - are they all from the same template (product pages, category archives, search results)? Run URL Inspection on a sample and view the rendered HTML. Check: does the page have real content? Does it say &quot;not found&quot; or similar error phrases? Test with curl to confirm the HTTP status is 200 and not a proper 404. Fetch the page in an incognito browser and count the unique visible text.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How to fix</h2>
        <div style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
          <pre style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: '#1c1c26', whiteSpace: 'pre-wrap', fontFamily: 'DM Mono, monospace' }}>1. Pages that genuinely do not exist: return HTTP 404 (or 410 Gone for permanent removal), not 200.
2. Out-of-stock products: keep the page with real content and a status message, or 301 to a related product/category.
3. Custom error pages: make sure the server returns 404, not 200. Configure Apache, nginx, or your framework accordingly.
4. JavaScript apps: implement server-side rendering (SSR) or static generation (SSG) so Googlebot sees real content.
5. Remove phrases like &quot;not found&quot;, &quot;sorry&quot;, &quot;does not exist&quot; from live pages that are not actually error pages.
6. For thin pages: expand the unique content, or noindex, or consolidate with 301.
7. Empty category/search pages: noindex them or return 404 when no results exist.
8. Remove soft 404 URLs from sitemap.xml - only submit pages with real content.
9. In GSC Page indexing, after fixing, click &quot;Validate Fix&quot; to trigger Google recheck.</pre>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, marginTop: 40 }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Why does Google think my real page is a soft 404?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Most common reasons: the content is too thin (under a few hundred words), the page is JavaScript-rendered and Google sees mostly an empty shell, or the text literally contains phrases like &quot;not found&quot;, &quot;sorry&quot;, or &quot;page does not exist&quot; that Google reads as error signals.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Is a soft 404 worse than a regular 404?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>For indexing purposes, yes - a regular 404 lets Google cleanly drop the URL and move on. A soft 404 wastes crawl budget because Google has to render the page only to decide it is not worth indexing, and the incorrect 200 status code confuses its quality signals.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>How do I fix a JavaScript-rendered soft 404?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Make sure the server-rendered HTML contains the real content, not just a loading shell. Implement SSR, SSG, or dynamic rendering so Googlebot receives a fully-populated response. Test by using the URL Inspection tool and checking the rendered HTML view.</div>
          </div>
        </div>

        <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
          <div style={{ fontSize: 22, fontWeight: 700, color: 'white', marginBottom: 8 }}>Uncover soft 404s hiding in your sitemap</div>
          <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free scan - we detect thin, empty, and error-like pages masquerading as 200s</div>
          <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 32px', borderRadius: 8, textDecoration: 'none', fontWeight: 700, fontSize: 15 }}>
            Analyze My Sitemap Free
          </a>
        </div>

        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Related GSC indexing statuses</div>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <li><a href="/gsc-errors/not-found-404" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Not found (404)</a></li>
            <li><a href="/gsc-errors/crawled-not-indexed" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Crawled - not indexed</a></li>
            <li><a href="/gsc-errors/page-with-redirect" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Page with redirect</a></li>
          </ul>
          <div style={{ marginTop: 16 }}>
            <a href="/gsc-errors" style={{ color: '#2d5be3', fontSize: 13 }}>All GSC indexing errors</a>
          </div>
        </div>
      </div>
    </>
  );
}
