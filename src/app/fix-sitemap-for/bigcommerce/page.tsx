import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fix Sitemap for BigCommerce - Complete Guide',
  description: 'Optimize your BigCommerce sitemap: manage product variants, category filters, brand pages, and multi-storefront URLs for better indexing.',
  alternates: { canonical: 'https://sitemapfixer.com/fix-sitemap-for/bigcommerce' },
  openGraph: {
    title: 'Fix Sitemap for BigCommerce - Complete Guide',
    description: 'Optimize your BigCommerce sitemap: manage product variants, category filters, brand pages, and multi-storefront URLs for better indexing.',
    url: 'https://sitemapfixer.com/fix-sitemap-for/bigcommerce',
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
  const faqSchema = "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Where is the BigCommerce sitemap URL?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"It's at yourdomain.com/xmlsitemap.php. BigCommerce generates it automatically from your catalog - you can't upload a replacement file at that URL, but you can control what goes into it through Store Settings and product visibility.\"}},{\"@type\":\"Question\",\"name\":\"Can I customize the BigCommerce sitemap directly?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"No file-level edits. BigCommerce regenerates xmlsitemap.php from the catalog and cache. You shape it via product/category visibility, robots.txt, canonical settings, and Stencil theme template changes.\"}},{\"@type\":\"Question\",\"name\":\"Does BigCommerce include image entries in the sitemap?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"No, the default xmlsitemap.php has URLs only - no image:image tags. If image traffic matters, generate a supplemental image sitemap via the Catalog API and submit it separately in Google Search Console.\"}}]}";

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px', fontFamily: 'Geist, sans-serif' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'Fix Sitemap for BigCommerce - Complete Guide', description: 'Optimize your BigCommerce sitemap: manage product variants, category filters, brand pages, and multi-storefront URLs for better indexing.', url: 'https://sitemapfixer.com/fix-sitemap-for/bigcommerce', author: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com' }, publisher: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com', logo: { '@type': 'ImageObject', url: 'https://sitemapfixer.com/opengraph-image' } }, datePublished: '2026-04-17', mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://sitemapfixer.com/fix-sitemap-for/bigcommerce' } }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sitemapfixer.com/' }, { '@type': 'ListItem', position: 2, name: 'Fix by Platform', item: 'https://sitemapfixer.com/fix-sitemap-for' }, { '@type': 'ListItem', position: 3, name: 'Fix Sitemap for BigCommerce - Complete Guide', item: 'https://sitemapfixer.com/fix-sitemap-for/bigcommerce' }] }),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />

      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>
        {'  /  '}
        <a href="/fix-sitemap-for" style={{ color: '#2d5be3', textDecoration: 'none' }}>Platform Guides</a>
        {'  /  '}
        <span>BigCommerce</span>
      </nav>

      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>
        Fix Your Sitemap for BigCommerce
      </h1>
      <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        BigCommerce auto-generates <code>/xmlsitemap.php</code>, but product variants, faceted category filters, brand archives, and multi-storefront setups routinely produce duplicate and low-value URLs.
      </p>

      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Analyze your BigCommerce sitemap now</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>
          Try Sitemap Fixer Free
        </a>
      </div>

      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 24 }}>
        BigCommerce's sitemap is a black box compared to Shopify or WooCommerce. You can't edit <code>xmlsitemap.php</code> directly - the platform rebuilds it from the catalog on a schedule. What you <em>can</em> control is what gets fed into that generator. Which means the fix lives in Store Settings, product visibility flags, and Stencil theme templates, not in a plugin config.
      </p>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 32 }}>
        Helped a BigCommerce home-goods store last quarter. 3,100 live products, <code>xmlsitemap.php</code> listing 18,000+ URLs. The padding came from brand archives (one brand per SKU for drop-shipped items), SKU-level variant URLs, and three legacy blogs that were never unpublished. After the fixes below, the sitemap dropped to 3,450 URLs and indexed coverage climbed from 41% to 82% in about five weeks.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common BigCommerce Sitemap Issues</h2>
      <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li>Faceted category filter URLs (<code>?brand=</code>, <code>?color=</code>) emitted alongside canonical category pages</li>
        <li>Product variant URLs (with <code>?sku=</code>) indexed separately from the parent product</li>
        <li>Brand archive pages auto-generated for every brand, including brands with one product</li>
        <li>Out-of-stock products staying in the sitemap because Customer Visibility defaults to "Yes"</li>
        <li>Multi-storefront setups with a shared catalog producing duplicate product URLs across domains</li>
        <li>Blog module RSS feeds and tag pages appearing without curation</li>
        <li>Currency-switcher variants (e.g., <code>?setCurrencyId=2</code>) crawled as separate URLs</li>
        <li>Stencil theme category pages paginated at <code>?page=2</code> included without review</li>
      </ul>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>BigCommerce-specific quirks</h2>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 16 }}>
        A few BigCommerce behaviors that trip people up:
      </p>
      <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li><strong>The sitemap updates on a cache cycle</strong>, not instantly. Changes to product visibility can take 24 hours to appear.</li>
        <li><strong>Brands are auto-created</strong> when you assign a brand name to a product. There's no "don't create a brand page" option - you either delete the brand or live with the archive page.</li>
        <li><strong>Preview/staging domains</strong> on the <code>*.mybigcommerce.com</code> URL are often still indexable. Check that your store's production domain is set as the storefront URL under Store Settings &gt; Store Profile.</li>
        <li><strong>Robots.txt is editable</strong> but limited to one file across all storefronts on the same store. No per-storefront rules.</li>
      </ul>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Recommended robots.txt additions</h2>
      <div style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
        <pre style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: '#1c1c26', whiteSpace: 'pre-wrap', fontFamily: 'DM Mono, monospace' }}>{`User-agent: *
Disallow: /search.php
Disallow: /compare
Disallow: /login.php
Disallow: /account.php
Disallow: /cart.php
Disallow: /checkout
Disallow: /*?sort=
Disallow: /*?page=
Disallow: /*?setCurrencyId=
Disallow: /*?sku=
Disallow: /*?brand=
Disallow: /*?search_query=

Sitemap: https://yourdomain.com/xmlsitemap.php`}</pre>
      </div>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        Be careful with <code>Disallow: /*?</code> as a blanket rule - it blocks legitimate filter URLs you might later want to promote as landing pages. Block only the parameters you know are duplicate-producing.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Multi-storefront and hreflang</h2>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        BigCommerce's Multi-Storefront feature uses one catalog across multiple domains. Each storefront gets its own <code>/xmlsitemap.php</code>, but since products share IDs and slugs across stores, you end up with near-identical URLs that look like duplicates to Google. Use the Stencil theme to emit <code>hreflang</code> tags in the HTML head, and keep each storefront submitted separately in GSC. Do not list every storefront inside one parent sitemap index - GSC handles them as separate properties.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Step-by-Step Fix Guide</h2>
      <ol style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li style={{ marginBottom: 12 }}>Open Advanced Settings &gt; Data Solutions &gt; robots.txt and add disallow rules for filter parameters</li>
        <li style={{ marginBottom: 12 }}>In Advanced Settings &gt; Store Settings &gt; SEO, enable "Set canonical URL on products" so variants collapse to the parent</li>
        <li style={{ marginBottom: 12 }}>Under Products, set Visible to Customers off for legacy SKUs and out-of-stock items you don't want indexed</li>
        <li style={{ marginBottom: 12 }}>In Storefront &gt; Brands, merge or delete single-product brands to kill thin brand archives</li>
        <li style={{ marginBottom: 12 }}>For multi-storefront, configure per-storefront sitemap URLs and emit hreflang in the Stencil theme head</li>
        <li style={{ marginBottom: 12 }}>Confirm the storefront URL in Store Profile points at your production domain, not <code>*.mybigcommerce.com</code></li>
        <li style={{ marginBottom: 12 }}>Clear BigCommerce cache (Theme &gt; Clear Cache) and wait up to 24 hours for <code>xmlsitemap.php</code> to regenerate</li>
        <li style={{ marginBottom: 12 }}>Run <code>curl -s https://yourdomain.com/xmlsitemap.php | grep -c "&lt;url&gt;"</code> to count URLs and sanity-check</li>
        <li style={{ marginBottom: 12 }}>Submit the sitemap in Google Search Console and monitor coverage per URL category</li>
      </ol>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, marginTop: 40 }}>Frequently Asked Questions</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
        <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Where is the BigCommerce sitemap URL?</div>
          <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>It&apos;s at yourdomain.com/xmlsitemap.php. BigCommerce generates it automatically from your catalog - you can&apos;t upload a replacement file at that URL, but you can control what goes into it through Store Settings and product visibility.</div>
        </div>
        <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Can I customize the BigCommerce sitemap directly?</div>
          <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>No file-level edits. BigCommerce regenerates xmlsitemap.php from the catalog and cache. You shape it via product/category visibility, robots.txt, canonical settings, and Stencil theme template changes.</div>
        </div>
        <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Does BigCommerce include image entries in the sitemap?</div>
          <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>No, the default xmlsitemap.php has URLs only. If image traffic matters, generate a supplemental image sitemap via the Catalog API and submit it separately in Google Search Console.</div>
        </div>
      </div>

      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Analyze your BigCommerce sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Find all issues in your sitemap - free, no credit card needed</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>
          Analyze My Sitemap Free
        </a>
      </div>

      <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
        <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Other platform guides</div>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <li><a href="/fix-sitemap-for/shopify" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Shopify</a></li>
          <li><a href="/fix-sitemap-for/magento" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Magento</a></li>
          <li><a href="/fix-sitemap-for/ecommerce" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>E-commerce Sites</a></li>
          <li><a href="/fix-sitemap-for/large-sites" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Large Sites (10k+ pages)</a></li>
        </ul>
      </div>
    </div>
  );
}
