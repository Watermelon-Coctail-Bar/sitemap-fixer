import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Soft 404 Errors: What They Are and How to Fix Them | SitemapFixer',
  description: "A soft 404 is a page that returns a 200 status code but displays content that looks like a 404 page. Here is why Google flags them and exactly how to fix each type.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/soft-404-errors' },
};
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Soft 404 Errors</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Soft 404 Errors: What They Are and How to Fix Them</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Find soft 404s in your sitemap free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Site</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        <p style={{ marginBottom: 24 }}>A soft 404 happens when a page returns an HTTP 200 (success) status code but shows content that indicates the page does not really exist - like "product not found," "no results," or a generic error message. Googlebot sees the 200 status, fetches the page, reads it, and determines the content is not meaningful. In Google Search Console you will see these listed as "Soft 404" under the Pages report.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Why Soft 404s Are a Problem</h2>
        <p style={{ marginBottom: 24 }}>Soft 404s waste crawl budget - Googlebot spends time on pages with no real content. They can also dilute your site quality signals. If Google consistently finds empty or low-value pages on your site, it may start crawling your good pages less frequently. They also create a poor user experience: someone searching finds your page, clicks, and lands on a "not found" message.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Common Causes of Soft 404 Errors</h2>

        <h3 style={{ fontSize: 20, fontWeight: 700, color: '#0a0a0f', marginTop: 32, marginBottom: 10 }}>Empty search results pages</h3>
        <p style={{ marginBottom: 24 }}>A URL like yoursite.com/search?q=xyzabc returns 200 with "no results found." Google crawls thousands of these. Fix: block search result pages in robots.txt with Disallow: /search or add a noindex tag to all search result pages. Either works - robots.txt is better for crawl budget, noindex is better if you want Google to understand the page exists but not index it.</p>

        <h3 style={{ fontSize: 20, fontWeight: 700, color: '#0a0a0f', marginTop: 32, marginBottom: 10 }}>Deleted products or posts still accessible at old URLs</h3>
        <p style={{ marginBottom: 24 }}>Your CMS might display "this product is no longer available" at the original URL with a 200 status. Fix: when you delete or discontinue content, configure your server to return a 404 or 410 (gone) status code, or redirect the URL to the most relevant replacement page with a 301 redirect. A 410 tells Google the page is intentionally gone, which removes it from the index faster than a 404.</p>

        <h3 style={{ fontSize: 20, fontWeight: 700, color: '#0a0a0f', marginTop: 32, marginBottom: 10 }}>Empty category or tag pages</h3>
        <p style={{ marginBottom: 24 }}>A category page with zero posts, or a tag page with one post, returns 200 but has almost no content. Google may classify these as soft 404s. Fix: either add content to those pages to make them genuinely useful, noindex them, or redirect them to the parent category if they are too thin to stand alone.</p>

        <h3 style={{ fontSize: 20, fontWeight: 700, color: '#0a0a0f', marginTop: 32, marginBottom: 10 }}>Out-of-stock product pages showing minimal content</h3>
        <p style={{ marginBottom: 24 }}>A product page that is out of stock but still live, with no description, no images, and just "out of stock" text, may be flagged as a soft 404. Fix: keep out-of-stock pages with full product content and clear availability messaging, or redirect them if the product is permanently discontinued.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>How to Find Soft 404s on Your Site</h2>
        <p style={{ marginBottom: 24 }}>Check Google Search Console under Indexing, then Pages, and look for the Soft 404 status. You can click on it to see all affected URLs. Download the full list and prioritize fixing pages that were previously indexed and may have had traffic. Use the URL Inspection tool to check individual pages and see exactly what Google sees when it crawls them.</p>
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Find indexing issues across your site</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free sitemap analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>
    </div>
  );
}
