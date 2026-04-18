import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SitemapFixer for E-commerce Stores - Shopify, WooCommerce, Magento',
  description: 'E-commerce stores use SitemapFixer to clean up product catalog bloat, SKU variants, out-of-stock URLs, and faceted navigation duplicates.',
  keywords: 'ecommerce sitemap tool, shopify sitemap fix, woocommerce sitemap, magento sitemap, product sitemap audit, sku sitemap, faceted navigation sitemap',
  alternates: { canonical: 'https://sitemapfixer.com/for/ecommerce' },
  openGraph: {
    title: 'SitemapFixer for E-commerce Stores - Shopify, WooCommerce, Magento',
    description: 'E-commerce stores use SitemapFixer to clean up product catalog bloat, SKU variants, out-of-stock URLs, and faceted navigation duplicates.',
    url: 'https://sitemapfixer.com/for/ecommerce',
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
  const faqSchema = "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Should out-of-stock products stay in my sitemap?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"If the product will be restocked, yes - keep it in the sitemap with a noindex tag until it returns. If it is permanently discontinued, remove it from the sitemap and return a 410 or redirect to a replacement category.\"}},{\"@type\":\"Question\",\"name\":\"How do I handle product variant URLs without duplicating everything?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Only include the canonical product URL in your sitemap, not every color or size variant. Each variant should point its canonical tag at the main product page to avoid diluting crawl budget.\"}},{\"@type\":\"Question\",\"name\":\"Why does my Shopify sitemap have so many duplicate URLs?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Shopify often includes products under each collection they belong to, producing multiple URLs for the same product. Faceted navigation filters add more. SitemapFixer detects these patterns and shows which URLs should be removed.\"}}]}";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'SitemapFixer for E-commerce Stores - Shopify, WooCommerce, Magento', description: 'E-commerce stores use SitemapFixer to clean up product catalog bloat, SKU variants, out-of-stock URLs, and faceted navigation duplicates.', url: 'https://sitemapfixer.com/for/ecommerce', author: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com' }, publisher: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com', logo: { '@type': 'ImageObject', url: 'https://sitemapfixer.com/opengraph-image' } }, datePublished: '2026-04-17', mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://sitemapfixer.com/for/ecommerce' } }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sitemapfixer.com/' }, { '@type': 'ListItem', position: 2, name: 'For', item: 'https://sitemapfixer.com/for' }, { '@type': 'ListItem', position: 3, name: 'SitemapFixer for E-commerce Stores - Shopify, WooCommerce, Magento', item: 'https://sitemapfixer.com/for/ecommerce' }] }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqSchema }}
      />
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px', fontFamily: 'Geist, sans-serif' }}>
        <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
          <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>
          {'  '}
          <a href="/for" style={{ color: '#2d5be3', textDecoration: 'none' }}>For</a>
          {'  '}
          <span>E-commerce</span>
        </nav>

        <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>
          SitemapFixer for E-commerce Stores
        </h1>

        <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
          If you run a Shopify, WooCommerce, or Magento store, your sitemap is probably bloated
          with SKU duplicates, retired products, and faceted navigation permutations. That bloat
          quietly eats crawl budget that should be going to the product detail pages and
          collections that actually drive revenue. SitemapFixer finds the bloat, ranks it by
          severity, and tells you exactly what to drop.
        </p>

        <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 4 }}>Audit your store sitemap</div>
            <div style={{ fontSize: 13, color: '#6b6b7d' }}>Find duplicate SKUs, dead variants, and crawl waste in seconds.</div>
          </div>
          <a href="/" style={{ background: '#0a0a0f', color: 'white', padding: '12px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 14, whiteSpace: 'nowrap' }}>
            Audit Store Sitemap
          </a>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>The sitemap challenges e-commerce stores face</h2>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
          <li>Product catalog bloat - thousands of SKUs that dilute crawl budget on high-value collection pages</li>
          <li>Product variants (size, color, material) generating multiple URLs for a single product</li>
          <li>Out-of-stock and discontinued products lingering in the sitemap months after being delisted</li>
          <li>Faceted navigation filters generating near-infinite URL permutations</li>
          <li>Shopify collection structure listing the same product under multiple collection paths</li>
          <li>WooCommerce and Magento plugins regenerating sitemaps with inconsistent rules each release</li>
        </ul>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How SitemapFixer helps</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 16 }}>
          SitemapFixer reads your store sitemap the same way Googlebot would. It flags every SKU
          duplicate, every faceted navigation permutation that leaked in, and every URL that
          returns a non-200 - so out-of-stock pages that should have been pulled show up instantly.
        </p>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 16 }}>
          For stores with large catalogs, the bigger win is pattern detection: instead of a list
          of 40,000 individual URL issues, you see the underlying pattern (for example, "12,000
          product-variant URLs" or "8,000 filter-permutation URLs") and can fix the rule rather
          than the symptoms.
        </p>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
          Run it after every catalog sync or plugin update to catch regressions before Google
          starts wasting crawl budget on the noise.
        </p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Key features for e-commerce</h2>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
          <li>SKU and product variant duplicate detection across the full catalog</li>
          <li>Out-of-stock and 404 URL flagging so retired products get pulled from the sitemap</li>
          <li>Faceted navigation pattern detection to catch filter-based URL explosions</li>
          <li>Platform-aware checks for Shopify, WooCommerce, and Magento sitemap conventions</li>
          <li>Collection-level duplicate detection for products listed under multiple collections</li>
          <li>Crawl budget impact estimates so you can prioritize the fixes that move revenue URLs</li>
        </ul>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Real example</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
          A mid-size Shopify store selling outdoor gear had 47,000 URLs in their sitemap. After
          running SitemapFixer, they discovered 18,000 were product variant duplicates (each
          color and size combination getting its own URL) and another 6,000 were retired
          seasonal SKUs that should have been removed after the previous winter. Dropping those
          19,000 of real URLs, their category pages were recrawled about 40 percent more often
          within two months.
        </p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, marginTop: 40 }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Should out-of-stock products stay in my sitemap?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>If the product will be restocked, yes - keep it in the sitemap with a noindex tag until it returns. If it is permanently discontinued, remove it from the sitemap and return a 410 or redirect to a replacement category.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>How do I handle product variant URLs without duplicating everything?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Only include the canonical product URL in your sitemap, not every color or size variant. Each variant should point its canonical tag at the main product page to avoid diluting crawl budget.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Why does my Shopify sitemap have so many duplicate URLs?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Shopify often includes products under each collection they belong to, producing multiple URLs for the same product. Faceted navigation filters add more. SitemapFixer detects these patterns and shows which URLs should be removed.</div>
          </div>
        </div>

        <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
          <div style={{ fontSize: 22, fontWeight: 700, color: 'white', marginBottom: 8 }}>Stop wasting crawl budget on dead SKUs</div>
          <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Get a full sitemap audit for your store in 60 seconds.</div>
          <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 32px', borderRadius: 8, textDecoration: 'none', fontWeight: 700, fontSize: 15 }}>
            Audit Store Sitemap Free
          </a>
        </div>

        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Other use cases</div>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <li><a href="/for/agencies" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Agencies</a></li>
            <li><a href="/for/news-publishers" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>News Publishers</a></li>
            <li><a href="/for/enterprise" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Enterprise</a></li>
            <li><a href="/for/saas" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>SaaS</a></li>
          </ul>
        </div>
      </div>
    </>
  );
}
