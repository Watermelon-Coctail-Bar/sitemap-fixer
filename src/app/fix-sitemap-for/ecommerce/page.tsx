import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fix Sitemap for E-commerce Sites - Complete Guide',
  description: 'E-commerce sitemap best practices: handling product variants, out-of-stock pages, faceted navigation, and seasonal content.',
  alternates: { canonical: 'https://sitemapfixer.com/fix-sitemap-for/ecommerce' },
  openGraph: {
    title: 'Fix Sitemap for E-commerce Sites - Complete Guide',
    description: 'E-commerce sitemap best practices: handling product variants, out-of-stock pages, faceted navigation, and seasonal content.',
    url: 'https://sitemapfixer.com/fix-sitemap-for/ecommerce',
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
  const faqSchema = "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Should out-of-stock products be in the sitemap?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Keep them if the URL stays live and you plan to restock. Drop them if you 404 or redirect. An out-of-stock product with steady backlinks still deserves to be crawled so rankings hold for when inventory returns.\"}},{\"@type\":\"Question\",\"name\":\"Should product variants be in the sitemap?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Only the canonical parent URL. If each color or size has its own indexable page with unique content, include it. Otherwise one entry per product - variants usually canonicalize back to the parent.\"}},{\"@type\":\"Question\",\"name\":\"Do I need a separate image sitemap for products?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes if Google Images drives meaningful traffic. Embed image:image entries inside your product sitemap so each product URL lists its gallery images. Most ecom platforms do not do this by default.\"}}]}";

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px', fontFamily: 'Geist, sans-serif' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'Fix Sitemap for E-commerce Sites - Complete Guide', description: 'E-commerce sitemap best practices: handling product variants, out-of-stock pages, faceted navigation, and seasonal content.', url: 'https://sitemapfixer.com/fix-sitemap-for/ecommerce', author: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com' }, publisher: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com', logo: { '@type': 'ImageObject', url: 'https://sitemapfixer.com/opengraph-image' } }, datePublished: '2026-04-17', mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://sitemapfixer.com/fix-sitemap-for/ecommerce' } }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sitemapfixer.com/' }, { '@type': 'ListItem', position: 2, name: 'Fix by Platform', item: 'https://sitemapfixer.com/fix-sitemap-for' }, { '@type': 'ListItem', position: 3, name: 'Fix Sitemap for E-commerce Sites - Complete Guide', item: 'https://sitemapfixer.com/fix-sitemap-for/ecommerce' }] }),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />

      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>
        {'  /  '}
        <a href="/fix-sitemap-for" style={{ color: '#2d5be3', textDecoration: 'none' }}>Platform Guides</a>
        {'  /  '}
        <span>E-commerce Sites</span>
      </nav>

      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>
        Fix Your Sitemap for E-commerce Sites
      </h1>
      <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        E-commerce sitemap best practices: handling product variants, out-of-stock pages, faceted navigation, and seasonal content without blowing up your crawl budget.
      </p>

      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Analyze your ecommerce sitemap now</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>
          Try Sitemap Fixer Free
        </a>
      </div>

      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 24 }}>
        Ecommerce sitemaps fail in a very particular way. You start with 2,000 products and end up with a sitemap claiming 87,000 URLs because every size, color, sort order, and filter got its own entry. Google crawls all of it, wastes the budget, and then stops crawling your actual new arrivals.
      </p>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 24 }}>
        Recently audited a mid-size fashion store on a custom Magento build. 14,000 real products, sitemap reporting 412,000 URLs. Every faceted URL (<code>?color=red&amp;size=m&amp;sort=price-asc</code>) was in there. GSC coverage was a mess - 63% "crawled, currently not indexed". The fix took one afternoon and coverage climbed to 89% within six weeks.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common E-commerce Sitemap Issues</h2>
      <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li>Faceted navigation URLs (filters, sort orders) bloating the sitemap with near-duplicates</li>
        <li>Every product variant listed instead of the canonical parent</li>
        <li>Out-of-stock or discontinued products left in the sitemap pointing at 404s or soft-404s</li>
        <li>Tag, search, and wishlist URLs included by default</li>
        <li>Missing image sitemap entries for product galleries</li>
        <li>Paginated category pages (?page=2, ?page=3) either all included or all excluded - neither is right</li>
        <li><code>lastmod</code> set to the sitemap generation time instead of the actual product update time</li>
        <li>No split by content type - one giant sitemap with products, categories, and CMS pages jumbled together</li>
      </ul>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>What most tutorials get wrong</h2>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 16 }}>
        Every generic ecommerce SEO guide says "exclude faceted URLs". That is correct but incomplete. The real question is which facets deserve their own indexable page. <strong>Brand</strong> and <strong>category + brand</strong> combinations usually do - users search "nike running shoes" and you want a landing page for it. <strong>Color</strong> and <strong>size</strong> filters almost never do.
      </p>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        The lazy fix is <code>noindex, follow</code> on all filter combinations. The better fix is to promote a short list of high-intent facet URLs to real landing pages, canonicalize the rest to the unfiltered category, and only list the promoted ones in the sitemap.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Recommended sitemap split</h2>
      <div style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
        <pre style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: '#1c1c26', whiteSpace: 'pre-wrap', fontFamily: 'DM Mono, monospace' }}>{`https://store.com/sitemap.xml           # index file
https://store.com/sitemap-products.xml   # canonical product URLs only
https://store.com/sitemap-categories.xml # top-level + promoted facets
https://store.com/sitemap-pages.xml      # about, shipping, policies
https://store.com/sitemap-blog.xml       # editorial content
https://store.com/sitemap-images.xml     # product gallery images`}</pre>
      </div>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        Splitting by type matters because GSC reports coverage per sitemap file. When your product sitemap shows 71% indexed but your category sitemap shows 98%, you know where to dig.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Handling out-of-stock products</h2>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 16 }}>
        Three options, pick one consistently:
      </p>
      <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 16, fontSize: 16 }}>
        <li><strong>Keep the page live</strong> with an "out of stock" message and a restock signup. Leave it in the sitemap. Best for items you will restock.</li>
        <li><strong>Redirect (301)</strong> to the closest equivalent product or the parent category. Remove from sitemap. Best for discontinued items with a clear successor.</li>
        <li><strong>410 Gone</strong> for truly discontinued items with no equivalent. Remove from sitemap. Tells Google to drop the URL faster than a 404.</li>
      </ul>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        What you should not do: leave a 404 live and keep the URL in your sitemap. That is a coverage error in GSC and kills the sitemap's trust signal.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Image sitemap for product galleries</h2>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 16 }}>
        Product image traffic from Google Images is underrated. Embed image entries inside the product sitemap so each URL lists its gallery:
      </p>
      <div style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
        <pre style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: '#1c1c26', whiteSpace: 'pre-wrap', fontFamily: 'DM Mono, monospace' }}>{`<url>
  <loc>https://store.com/products/running-shoe-x1</loc>
  <lastmod>2026-04-10</lastmod>
  <image:image>
    <image:loc>https://store.com/img/x1-main.jpg</image:loc>
    <image:title>Running Shoe X1 - Black</image:title>
  </image:image>
  <image:image>
    <image:loc>https://store.com/img/x1-side.jpg</image:loc>
  </image:image>
</url>`}</pre>
      </div>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Large catalogs (50k+ URLs)</h2>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        Sitemap files cap at 50,000 URLs or 50 MB uncompressed. For large catalogs, chunk by category or by product ID range. Keep each chunk under 40k URLs for headroom, and gzip them. Regenerate only the chunks containing changed products rather than rebuilding the entire sitemap on every publish - that nightly full regen is often what breaks CI pipelines on stores with 200k+ SKUs.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Step-by-Step Fix Guide</h2>
      <ol style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li style={{ marginBottom: 12 }}>Run a full sitemap audit to list every URL currently included</li>
        <li style={{ marginBottom: 12 }}>Strip filter, sort, and search parameters - anything matching <code>?color=</code>, <code>?sort=</code>, <code>?q=</code></li>
        <li style={{ marginBottom: 12 }}>Keep only canonical product URLs - drop variant URLs that canonicalize elsewhere</li>
        <li style={{ marginBottom: 12 }}>Decide your out-of-stock policy and apply it consistently</li>
        <li style={{ marginBottom: 12 }}>Split into product, category, page, blog, and image sitemaps via an index file</li>
        <li style={{ marginBottom: 12 }}>Set <code>lastmod</code> from actual product/category update timestamps, not the build time</li>
        <li style={{ marginBottom: 12 }}>Exclude tag, search, wishlist, cart, account, and login URLs</li>
        <li style={{ marginBottom: 12 }}>Verify with <code>curl -I https://store.com/sitemap.xml</code> that it returns 200 and not gzip without the right Content-Encoding</li>
        <li style={{ marginBottom: 12 }}>Submit each sub-sitemap to Google Search Console and monitor coverage per file</li>
      </ol>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, marginTop: 40 }}>Frequently Asked Questions</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
        <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Should out-of-stock products be in the sitemap?</div>
          <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Keep them if the URL stays live and you plan to restock. Drop them if you 404 or redirect. An out-of-stock product with steady backlinks still deserves to be crawled so rankings hold for when inventory returns.</div>
        </div>
        <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Should product variants be in the sitemap?</div>
          <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Only the canonical parent URL. If each color or size has its own indexable page with unique content, include it. Otherwise one entry per product - variants usually canonicalize back to the parent.</div>
        </div>
        <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Do I need a separate image sitemap for products?</div>
          <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Yes if Google Images drives meaningful traffic. Embed image:image entries inside your product sitemap so each product URL lists its gallery images. Most ecom platforms do not do this by default.</div>
        </div>
      </div>

      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Analyze your ecommerce sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Find all issues in your sitemap - free, no credit card needed</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>
          Analyze My Sitemap Free
        </a>
      </div>

      <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
        <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Other platform guides</div>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <li><a href="/fix-sitemap-for/shopify" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Shopify</a></li>
          <li><a href="/fix-sitemap-for/bigcommerce" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>BigCommerce</a></li>
          <li><a href="/fix-sitemap-for/magento" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Magento</a></li>
          <li><a href="/fix-sitemap-for/wordpress" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>WordPress</a></li>
          <li><a href="/fix-sitemap-for/large-sites" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Large Sites (10k+ pages)</a></li>
        </ul>
      </div>
    </div>
  );
}
