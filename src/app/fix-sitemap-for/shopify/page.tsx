import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fix Sitemap for Shopify - Complete Guide',
  description: 'Optimize your Shopify sitemap: manage product variants, fix duplicate URLs from collections, and improve indexing of your store pages.',
  alternates: { canonical: 'https://sitemapfixer.com/fix-sitemap-for/shopify' },
  openGraph: {
    title: 'Fix Sitemap for Shopify - Complete Guide',
    description: 'Optimize your Shopify sitemap: manage product variants, fix duplicate URLs from collections, and improve indexing of your store pages.',
    url: 'https://sitemapfixer.com/fix-sitemap-for/shopify',
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
  const faqSchema = "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Where is the Shopify sitemap?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"At yourstore.com/sitemap.xml. It's an index file that references sitemap_products_1.xml, sitemap_collections_1.xml, sitemap_pages_1.xml, and sitemap_blogs_1.xml. Shopify generates and caches this automatically - you can't edit it directly.\"}},{\"@type\":\"Question\",\"name\":\"Can I exclude products from the Shopify sitemap?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Only by unpublishing them from the Online Store sales channel. There's no per-product sitemap exclude toggle. If a product is published, it's in the sitemap. Archive or unpublish it to remove it.\"}},{\"@type\":\"Question\",\"name\":\"Do collection filters show up in Shopify's sitemap?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"No, Shopify's sitemap only contains canonical collection URLs, not filtered variants. But Google may still crawl filter URLs if they're linked from your site - block them in robots.txt if you don't want them crawled.\"}}]}";

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px', fontFamily: 'Geist, sans-serif' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'Fix Sitemap for Shopify - Complete Guide', description: 'Optimize your Shopify sitemap: manage product variants, fix duplicate URLs from collections, and improve indexing of your store pages.', url: 'https://sitemapfixer.com/fix-sitemap-for/shopify', author: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com' }, publisher: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com', logo: { '@type': 'ImageObject', url: 'https://sitemapfixer.com/opengraph-image' } }, datePublished: '2026-04-17', mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://sitemapfixer.com/fix-sitemap-for/shopify' } }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sitemapfixer.com/' }, { '@type': 'ListItem', position: 2, name: 'Fix by Platform', item: 'https://sitemapfixer.com/fix-sitemap-for' }, { '@type': 'ListItem', position: 3, name: 'Fix Sitemap for Shopify - Complete Guide', item: 'https://sitemapfixer.com/fix-sitemap-for/shopify' }] }),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />

      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>
        {'  /  '}
        <a href="/fix-sitemap-for" style={{ color: '#2d5be3', textDecoration: 'none' }}>Platform Guides</a>
        {'  /  '}
        <span>Shopify</span>
      </nav>

      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>
        Fix Your Sitemap for Shopify
      </h1>
      <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        Shopify generates <code>/sitemap.xml</code> automatically as a sitemap index referencing products, collections, pages, and blogs. The default is mostly fine - except when it isn't. Product variants, unpublished-but-linked items, and the myshopify.com preview domain all produce subtle indexing problems.
      </p>

      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Analyze your Shopify sitemap now</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>
          Try Sitemap Fixer Free
        </a>
      </div>

      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 24 }}>
        Shopify's sitemap is the most restrictive of any ecom platform: you can't edit the file, can't add fields, can't mark individual products for exclusion. What you do have is product visibility, collection settings, and robots.txt.liquid - and those three levers cover 95% of real problems.
      </p>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 32 }}>
        Audited a Shopify Plus jewelry store last quarter. 4,200 active products, <code>sitemap_products_1.xml</code> showing 4,200 (good), but GSC reported 7,800 URLs under "Crawled - currently not indexed". The culprit: product variants at <code>?variant=123456</code> were linked internally from the product gallery, crawled, and self-canonicalized to the parent - but Google still counted them as crawl budget. A robots.txt rule fixed it.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Shopify sitemap structure</h2>
      <div style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
        <pre style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: '#1c1c26', whiteSpace: 'pre-wrap', fontFamily: 'DM Mono, monospace' }}>{`https://yourstore.com/sitemap.xml           # index
  |- sitemap_products_1.xml                  # first 5,000 products
  |- sitemap_products_2.xml                  # next 5,000
  |- sitemap_collections_1.xml
  |- sitemap_pages_1.xml
  |- sitemap_blogs_1.xml`}</pre>
      </div>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        Each sub-sitemap caps at 5,000 URLs. Shopify paginates automatically past that. You submit the index URL to GSC; it handles the rest.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common Shopify Sitemap Issues</h2>
      <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li>Product variant URLs (<code>?variant=</code>) crawled but not in sitemap - crawl budget waste</li>
        <li>Collection filter URLs (<code>?pf_st_color=red</code>) crawled and producing duplicate content</li>
        <li>Archived products still accessible via old links, returning 404 when crawled</li>
        <li>The <code>*.myshopify.com</code> preview URL indexed alongside the custom domain</li>
        <li>Draft blog posts hitting the sitemap on Shopify 2.0 themes if the blog is set to public before content is ready</li>
        <li>Alternate language markets each emitting their own sitemap without hreflang coordination</li>
        <li>Pages excluded from navigation but still indexable (e.g., <code>/policies/privacy-policy</code> clones)</li>
      </ul>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>robots.txt.liquid for filter and variant URLs</h2>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 16 }}>
        Shopify lets you edit <code>robots.txt.liquid</code> in the theme code. This is the only way to block crawling of specific URL patterns. Example:
      </p>
      <div style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
        <pre style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: '#1c1c26', whiteSpace: 'pre-wrap', fontFamily: 'DM Mono, monospace' }}>{`{% for group in robots.default_groups %}
  {{- group.user_agent }}

  {%- for rule in group.rules -%}
    {{ rule }}
  {% endfor -%}

  {# Block variant and filter URLs #}
  Disallow: /*?variant=
  Disallow: /*?pf_st_
  Disallow: /*?pf_pt_
  Disallow: /*?_pos=
  Disallow: /*?_sid=
  Disallow: /*?_ss=

  {%- if group.sitemap != blank %}
    Sitemap: {{ group.sitemap }}
  {%- endif %}
{% endfor %}`}</pre>
      </div>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        Edit at Online Store &gt; Themes &gt; Code &gt; Templates &gt; <code>robots.txt.liquid</code> (you may need to create it). Changes apply immediately.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Unpublishing and the myshopify.com domain</h2>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        To remove a product from the sitemap, set its Online Store sales channel to inactive or archive the product entirely. Both take effect on the next cache cycle (usually within an hour). For the <code>*.myshopify.com</code> preview domain, Shopify automatically adds <code>X-Robots-Tag: noindex</code> - you don't need to do anything, but verify with <code>curl -I https://yourstore.myshopify.com/</code> and look for the header. If it's missing, open a Shopify support ticket.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Markets and hreflang</h2>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        Shopify Markets gives you separate URLs per region (<code>yourstore.com/en-gb/</code>, <code>yourstore.com/en-au/</code>). Each market gets its own sitemap index, and Shopify emits <code>hreflang</code> alternates in the HTML head automatically. What it does <em>not</em> do: emit <code>xhtml:link</code> alternates inside the sitemap XML. For large multi-market stores, consider a supplemental sitemap with explicit alternates submitted separately in GSC.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Step-by-Step Fix Guide</h2>
      <ol style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li style={{ marginBottom: 12 }}>Submit <code>yourstore.com/sitemap.xml</code> to GSC (not <code>.myshopify.com</code>)</li>
        <li style={{ marginBottom: 12 }}>Edit <code>robots.txt.liquid</code> to block variant and filter parameter URLs</li>
        <li style={{ marginBottom: 12 }}>Archive or unpublish products you don't want indexed</li>
        <li style={{ marginBottom: 12 }}>Review blog posts set to "Visible" - anything not ready should be a draft</li>
        <li style={{ marginBottom: 12 }}>For Markets, confirm hreflang is emitted in HTML head via <code>view-source:</code> inspection</li>
        <li style={{ marginBottom: 12 }}>Check that <code>*.myshopify.com</code> returns <code>X-Robots-Tag: noindex</code></li>
        <li style={{ marginBottom: 12 }}>Verify the sitemap with <code>curl https://yourstore.com/sitemap.xml</code></li>
        <li style={{ marginBottom: 12 }}>Monitor GSC coverage per sub-sitemap</li>
      </ol>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, marginTop: 40 }}>Frequently Asked Questions</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
        <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Where is the Shopify sitemap?</div>
          <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>At yourstore.com/sitemap.xml. It&apos;s an index file that references sitemap_products_1.xml, sitemap_collections_1.xml, sitemap_pages_1.xml, and sitemap_blogs_1.xml. Shopify generates and caches this automatically.</div>
        </div>
        <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Can I exclude products from the Shopify sitemap?</div>
          <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Only by unpublishing them from the Online Store sales channel. There&apos;s no per-product sitemap exclude toggle. If a product is published, it&apos;s in the sitemap. Archive or unpublish it to remove it.</div>
        </div>
        <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Do collection filters show up in Shopify&apos;s sitemap?</div>
          <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>No, Shopify&apos;s sitemap only contains canonical collection URLs, not filtered variants. But Google may still crawl filter URLs if they&apos;re linked from your site - block them in robots.txt if you don&apos;t want them crawled.</div>
        </div>
      </div>

      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Analyze your Shopify sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Find all issues in your sitemap - free, no credit card needed</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>
          Analyze My Sitemap Free
        </a>
      </div>

      <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
        <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Other platform guides</div>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <li><a href="/fix-sitemap-for/wordpress" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>WordPress</a></li>
          <li><a href="/fix-sitemap-for/bigcommerce" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>BigCommerce</a></li>
          <li><a href="/fix-sitemap-for/ecommerce" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>E-commerce Sites</a></li>
          <li><a href="/fix-sitemap-for/large-sites" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Large Sites (10k+ pages)</a></li>
          <li><a href="/learn/shopify-sitemap" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Shopify Sitemap Guide</a></li>
        </ul>
      </div>
    </div>
  );
}
