import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fix Sitemap for Squarespace - Complete Guide',
  description: 'Optimize your Squarespace sitemap at /sitemap.xml: handle blog paginations, exclude hidden pages, and improve indexing despite limited customization.',
  alternates: { canonical: 'https://sitemapfixer.com/fix-sitemap-for/squarespace' },
  openGraph: {
    title: 'Fix Sitemap for Squarespace - Complete Guide',
    description: 'Optimize your Squarespace sitemap at /sitemap.xml: handle blog paginations, exclude hidden pages, and improve indexing despite limited customization.',
    url: 'https://sitemapfixer.com/fix-sitemap-for/squarespace',
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
  const faqSchema = "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Can I edit the Squarespace sitemap directly?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"No. Squarespace generates /sitemap.xml automatically and there's no override. The fix workflow runs through page visibility, 'Hide from search engine results', and custom robots.txt via Code Injection.\"}},{\"@type\":\"Question\",\"name\":\"Are Not Linked pages in the Squarespace sitemap?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes, Not Linked pages are still public and still appear in sitemap.xml. To exclude them, either unpublish the page or enable 'Hide from search engine results' in Page Settings > SEO. Moving a page to Not Linked alone doesn't hide it from Google.\"}},{\"@type\":\"Question\",\"name\":\"Does Squarespace include product variants in the sitemap?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Only the canonical product URL is listed - Squarespace handles variants via URL parameters that canonicalize back to the parent. That said, Google may still crawl and index variant URLs if they're internally linked with clean URLs, so spot-check your product pages.\"}}]}";

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px', fontFamily: 'Geist, sans-serif' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'Fix Sitemap for Squarespace - Complete Guide', description: 'Optimize your Squarespace sitemap at /sitemap.xml: handle blog paginations, exclude hidden pages, and improve indexing despite limited customization.', url: 'https://sitemapfixer.com/fix-sitemap-for/squarespace', author: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com' }, publisher: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com', logo: { '@type': 'ImageObject', url: 'https://sitemapfixer.com/opengraph-image' } }, datePublished: '2026-04-17', mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://sitemapfixer.com/fix-sitemap-for/squarespace' } }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sitemapfixer.com/' }, { '@type': 'ListItem', position: 2, name: 'Fix by Platform', item: 'https://sitemapfixer.com/fix-sitemap-for' }, { '@type': 'ListItem', position: 3, name: 'Fix Sitemap for Squarespace - Complete Guide', item: 'https://sitemapfixer.com/fix-sitemap-for/squarespace' }] }),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />

      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>
        {'  /  '}
        <a href="/fix-sitemap-for" style={{ color: '#2d5be3', textDecoration: 'none' }}>Platform Guides</a>
        {'  /  '}
        <span>Squarespace</span>
      </nav>

      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>
        Fix Your Sitemap for Squarespace
      </h1>
      <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        Squarespace publishes a sitemap automatically at <code>/sitemap.xml</code> and gives you almost no direct control. That forces you to fix issues through page settings, URL slugs, and limited robots.txt overrides.
      </p>

      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Analyze your Squarespace sitemap now</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>
          Try Sitemap Fixer Free
        </a>
      </div>

      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 24 }}>
        Squarespace is the most closed of the major site builders. You can't edit <code>sitemap.xml</code>, can't edit <code>robots.txt</code> through a setting (though there are workarounds), can't exclude individual blog tags. What you have is per-page SEO toggles and URL slug control. That's actually enough to fix most issues - you just have to know which levers to pull.
      </p>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 32 }}>
        Cleaned up a Squarespace portfolio site with 120 real pages and 840 URLs in the sitemap. The padding came from blog tag pages (one per tag ever used), a Not Linked folder full of old landing pages someone had forgotten about, and a <code>.squarespace.com</code> preview URL indexed as a mirror. After the fixes below, it dropped to 145 URLs.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common Squarespace Sitemap Issues</h2>
      <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li><em>Not Linked</em> pages appearing in sitemap because they're still public, just hidden from nav</li>
        <li>Blog tag and category archives competing with the main blog for keywords</li>
        <li>Product variant URLs on Commerce stores when internally linked with clean slugs</li>
        <li>System pages (<code>/cart</code>, <code>/checkout</code>, <code>/account</code>) occasionally slipping in</li>
        <li><code>.squarespace.com</code> preview URL indexable alongside the custom domain</li>
        <li>No <code>lastmod</code> granularity - Squarespace uses publish date, not latest edit</li>
        <li>Hidden pages ticked "Hide from search engine results" but still in sitemap (toggle applies noindex to the page but Squarespace still lists it)</li>
        <li>Legacy events (Events collection) staying in the sitemap after the event has passed</li>
      </ul>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>What most tutorials get wrong</h2>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        Every Squarespace SEO guide says "use the Hide from search engines toggle". That toggle adds a <code>noindex</code> meta tag but does <em>not</em> remove the page from <code>sitemap.xml</code>. Which means Google still crawls the URL, sees the noindex, and reports it as "Excluded by noindex tag" in GSC. If you truly want a page gone, unpublish it or delete it. The noindex toggle is for pages you want crawlable (e.g., gated content at a known URL) but not in search results.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Robots.txt via Code Injection</h2>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 16 }}>
        Squarespace doesn't let you edit robots.txt directly, but you can influence crawling by blocking specific patterns through the hosting-level robots.txt that Squarespace serves. The only supported customization is through the Squarespace Developer Platform (for 7.0 sites) or by submitting a request to Squarespace support. For most users, the practical approach is: use per-page noindex for anything that shouldn't rank, and rely on Squarespace's default robots rules (which block <code>/config</code>, <code>/commerce</code> admin, etc.).
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Blog tags and categories</h2>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        Every tag you apply to a blog post creates a tag archive page at <code>/blog/tag/tag-name</code>, and these all go into the sitemap. Small sites end up with hundreds of thin tag pages. There's no bulk-exclude option, so the fix is either: use fewer tags (stick to 5-10 broad ones), or open each tag page individually in Pages and toggle "Hide from search engine results". Tedious but it works.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Step-by-Step Fix Guide</h2>
      <ol style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li style={{ marginBottom: 12 }}>Open Pages &gt; Not Linked and delete or unpublish legacy pages you don't want indexed</li>
        <li style={{ marginBottom: 12 }}>For pages you want crawlable but not indexable, toggle "Hide from search engine results" in Page Settings &gt; SEO</li>
        <li style={{ marginBottom: 12 }}>Consolidate blog tags down to 5-10; hide-from-search any remaining thin tag archives</li>
        <li style={{ marginBottom: 12 }}>Connect your custom domain and set it to primary under Settings &gt; Domains; the <code>.squarespace.com</code> URL should redirect</li>
        <li style={{ marginBottom: 12 }}>On Commerce stores, verify product URLs resolve to canonical parent, not variant slugs</li>
        <li style={{ marginBottom: 12 }}>Rename blog post slugs to short, keyword-rich paths before publishing (Squarespace keeps old slugs via 301)</li>
        <li style={{ marginBottom: 12 }}>For past events, delete or unpublish once they're no longer relevant</li>
        <li style={{ marginBottom: 12 }}>Verify with <code>curl https://yourdomain.com/sitemap.xml</code></li>
        <li style={{ marginBottom: 12 }}>Submit the sitemap to Google Search Console under the custom-domain property</li>
      </ol>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, marginTop: 40 }}>Frequently Asked Questions</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
        <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Can I edit the Squarespace sitemap directly?</div>
          <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>No. Squarespace generates /sitemap.xml automatically and there&apos;s no override. The fix workflow runs through page visibility, "Hide from search engine results", and URL slug control.</div>
        </div>
        <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Are Not Linked pages in the Squarespace sitemap?</div>
          <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Yes, Not Linked pages are still public and appear in sitemap.xml. Unpublish the page or enable "Hide from search engine results" to exclude them. Moving to Not Linked alone doesn&apos;t hide from Google.</div>
        </div>
        <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Does Squarespace include product variants in the sitemap?</div>
          <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Only the canonical product URL is listed. Squarespace handles variants via URL parameters that canonicalize back to the parent. Spot-check product pages to confirm.</div>
        </div>
      </div>

      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Analyze your Squarespace sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Find all issues in your sitemap - free, no credit card needed</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>
          Analyze My Sitemap Free
        </a>
      </div>

      <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
        <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Other platform guides</div>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <li><a href="/fix-sitemap-for/wordpress" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>WordPress</a></li>
          <li><a href="/fix-sitemap-for/webflow" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Webflow</a></li>
          <li><a href="/fix-sitemap-for/wix" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Wix</a></li>
          <li><a href="/fix-sitemap-for/shopify" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Shopify</a></li>
          <li><a href="/learn/squarespace-sitemap" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Squarespace Sitemap Guide</a></li>
        </ul>
      </div>
    </div>
  );
}
