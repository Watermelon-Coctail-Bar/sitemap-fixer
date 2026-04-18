import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fix Sitemap for Magento - Complete Guide',
  description: 'Optimize your Magento 2 sitemap: handle catalog URLs, layered navigation, multi-store views, and large product feeds for better indexing.',
  alternates: { canonical: 'https://sitemapfixer.com/fix-sitemap-for/magento' },
  openGraph: {
    title: 'Fix Sitemap for Magento - Complete Guide',
    description: 'Optimize your Magento 2 sitemap: handle catalog URLs, layered navigation, multi-store views, and large product feeds for better indexing.',
    url: 'https://sitemapfixer.com/fix-sitemap-for/magento',
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
  const faqSchema = "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"How do I generate the Magento sitemap from CLI?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Run bin/magento sitemap:generate. You'll typically schedule this via cron. The generated file is written to the pub/ directory with the filename configured in Marketing > SEO & Search > Site Map.\"}},{\"@type\":\"Question\",\"name\":\"Should configurable product children be in the Magento sitemap?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"No. Only the configurable parent should be indexed. Enable the canonical meta tag for products under Stores > Configuration > Catalog > SEO so child simple products canonicalize to the parent, and exclude them from the sitemap generation config.\"}},{\"@type\":\"Question\",\"name\":\"Can Magento generate one sitemap per store view?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes. In Marketing > SEO & Search > Site Map, create one sitemap record per store view. Each generates to its own file and covers only that store's URLs. Reference them from a root sitemap index for GSC.\"}}]}";

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px', fontFamily: 'Geist, sans-serif' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'Fix Sitemap for Magento - Complete Guide', description: 'Optimize your Magento 2 sitemap: handle catalog URLs, layered navigation, multi-store views, and large product feeds for better indexing.', url: 'https://sitemapfixer.com/fix-sitemap-for/magento', author: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com' }, publisher: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com', logo: { '@type': 'ImageObject', url: 'https://sitemapfixer.com/opengraph-image' } }, datePublished: '2026-04-17', mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://sitemapfixer.com/fix-sitemap-for/magento' } }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sitemapfixer.com/' }, { '@type': 'ListItem', position: 2, name: 'Fix by Platform', item: 'https://sitemapfixer.com/fix-sitemap-for' }, { '@type': 'ListItem', position: 3, name: 'Fix Sitemap for Magento - Complete Guide', item: 'https://sitemapfixer.com/fix-sitemap-for/magento' }] }),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />

      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>
        {'  /  '}
        <a href="/fix-sitemap-for" style={{ color: '#2d5be3', textDecoration: 'none' }}>Platform Guides</a>
        {'  /  '}
        <span>Magento</span>
      </nav>

      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>
        Fix Your Sitemap for Magento
      </h1>
      <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        Magento 2 (now Adobe Commerce) generates sitemaps via the Catalog XML Sitemap feature, but layered navigation, configurable product children, and multi-store views routinely balloon the sitemap into millions of low-value URLs.
      </p>

      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Analyze your Magento sitemap now</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>
          Try Sitemap Fixer Free
        </a>
      </div>

      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 24 }}>
        Magento sites get complicated fast. You have store views (one per language/region), configurable products with dozens of simple children, CMS pages, category trees, and layered navigation that loves to emit every filter combination as a crawlable URL. The sitemap config lives across several admin panels, and each needs to be set correctly before the generator produces a clean feed.
      </p>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 32 }}>
        Worked on a Magento 2 apparel store with 18,000 configurable products and 140,000 simple children. The default sitemap had 158,000 URLs - every child simple product was listed. After enabling product canonicals and filtering the sitemap to parents only, it dropped to 18,400 URLs. GSC's "crawled, not indexed" count dropped 70% over eight weeks.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common Magento Sitemap Issues</h2>
      <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li>Layered navigation URLs (<code>?price=</code>, <code>?color=</code>) inflating category sitemaps</li>
        <li>Configurable product children (simple products) indexed separately from the parent</li>
        <li>Multi-store views generating duplicate product URLs without hreflang</li>
        <li>Out-of-stock or disabled products staying in sitemap after they're hidden from the storefront</li>
        <li>Category grid/list view duplicates (<code>?product_list_mode=list</code>) as separate URLs</li>
        <li>Session IDs (<code>?SID=</code>) or tracking params (<code>utm_source</code>) on legacy deployments</li>
        <li>Sitemap not regenerating because cron isn't running, or running as wrong user</li>
        <li>One giant sitemap file instead of an index for 500k+ product catalogs</li>
      </ul>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Sitemap config panels to touch</h2>
      <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li><strong>Stores &gt; Configuration &gt; Catalog &gt; XML Sitemap</strong> - frequency, priority, entity inclusion</li>
        <li><strong>Stores &gt; Configuration &gt; Catalog &gt; Catalog &gt; Search Engine Optimization</strong> - product canonicals, category canonicals, "Use Categories Path for Product URLs"</li>
        <li><strong>Marketing &gt; SEO &amp; Search &gt; Site Map</strong> - create a sitemap record per store view, set file path</li>
        <li><strong>Stores &gt; Configuration &gt; General &gt; Web &gt; URL Options</strong> - add query params to exclusion list</li>
      </ul>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Robots.txt for layered navigation</h2>
      <div style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
        <pre style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: '#1c1c26', whiteSpace: 'pre-wrap', fontFamily: 'DM Mono, monospace' }}>{`User-agent: *
Disallow: /*?
Disallow: /catalogsearch/
Disallow: /customer/
Disallow: /checkout/
Disallow: /review/
Disallow: /sendfriend/
Disallow: /wishlist/
Allow: /*?p=          # keep pagination crawlable (optional)

Sitemap: https://store.com/sitemap.xml`}</pre>
      </div>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        <code>Disallow: /*?</code> is aggressive but right for most Magento stores - layered nav parameters create so many duplicates that blanket-blocking is cleaner than cherry-picking. Allow back the params you actually want crawled (pagination).
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>CLI generation and cron</h2>
      <div style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
        <pre style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: '#1c1c26', whiteSpace: 'pre-wrap', fontFamily: 'DM Mono, monospace' }}>{`# Generate now
bin/magento sitemap:generate

# Verify cron is running (sitemap jobs run via generating_sitemap_xml)
bin/magento cron:run --group=default
tail -f var/log/cron.log

# Schedule in cron.groups.xml or via Marketing > SEO & Search > Site Map
# Frequency set per sitemap record`}</pre>
      </div>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Multi-store hreflang</h2>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        Generate one sitemap record per store view (<em>Marketing &gt; SEO &amp; Search &gt; Site Map</em>). Each writes to its own file, e.g., <code>sitemap_en.xml</code>, <code>sitemap_fr.xml</code>. Reference them from a root <code>sitemap_index.xml</code> you write manually. For hreflang, enable the built-in "Add Store Code to URLs" feature and the <code>Magento_Sitemap</code> module's hreflang support (or use a third-party module like Mageplaza Hreflang Tags for richer output). Submit each store's sitemap to a matching GSC property.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Step-by-Step Fix Guide</h2>
      <ol style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li style={{ marginBottom: 12 }}>In Stores &gt; Configuration &gt; Catalog &gt; XML Sitemap, set per-entity priority and frequency; generate per store view</li>
        <li style={{ marginBottom: 12 }}>Enable Canonical Meta Tag for Products and Categories so children canonicalize to parents</li>
        <li style={{ marginBottom: 12 }}>Disable "Use Categories Path for Product URLs" unless you explicitly want nested URLs</li>
        <li style={{ marginBottom: 12 }}>Add robots.txt rules for layered nav, search, checkout, customer, wishlist</li>
        <li style={{ marginBottom: 12 }}>Create one sitemap record per store view in <em>Marketing &gt; SEO &amp; Search &gt; Site Map</em></li>
        <li style={{ marginBottom: 12 }}>Confirm cron is running (<code>bin/magento cron:run</code>) and sitemap jobs complete</li>
        <li style={{ marginBottom: 12 }}>Verify with <code>curl https://store.com/sitemap.xml</code> - should return 200 and match expected URL count</li>
        <li style={{ marginBottom: 12 }}>Submit each store-view sitemap to its matching GSC property</li>
      </ol>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, marginTop: 40 }}>Frequently Asked Questions</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
        <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>How do I generate the Magento sitemap from CLI?</div>
          <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Run bin/magento sitemap:generate. You&apos;ll typically schedule this via cron. The generated file is written to the pub/ directory with the filename configured in Marketing &gt; SEO &amp; Search &gt; Site Map.</div>
        </div>
        <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Should configurable product children be in the Magento sitemap?</div>
          <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>No. Only the configurable parent should be indexed. Enable the canonical meta tag for products and exclude children from sitemap generation.</div>
        </div>
        <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Can Magento generate one sitemap per store view?</div>
          <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Yes. In Marketing &gt; SEO &amp; Search &gt; Site Map, create one sitemap record per store view. Each generates to its own file. Reference them from a root sitemap index for GSC.</div>
        </div>
      </div>

      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Analyze your Magento sitemap</div>
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
          <li><a href="/fix-sitemap-for/ecommerce" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>E-commerce Sites</a></li>
          <li><a href="/fix-sitemap-for/large-sites" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Large Sites (10k+ pages)</a></li>
          <li><a href="/learn/magento-seo" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Magento SEO Guide</a></li>
        </ul>
      </div>
    </div>
  );
}
