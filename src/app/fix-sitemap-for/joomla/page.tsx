import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fix Sitemap for Joomla - Complete Guide',
  description: 'Fix your Joomla sitemap: OSMap vs JSitemap vs XMap, menu configuration, multi-language hreflang, and submitting to GSC.',
  keywords: 'joomla sitemap, joomla xml sitemap, osmap, jsitemap, xmap joomla, joomla sitemap extension, joomla sitemap generator',
  alternates: { canonical: 'https://sitemapfixer.com/fix-sitemap-for/joomla' },
  openGraph: {
    title: 'Fix Sitemap for Joomla - Complete Guide',
    description: 'Fix your Joomla sitemap: OSMap vs JSitemap vs XMap, menu configuration, multi-language hreflang, and submitting to GSC.',
    url: 'https://sitemapfixer.com/fix-sitemap-for/joomla',
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
  const faqSchema = "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Which Joomla sitemap extension is best?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"OSMap (free and pro versions) is the most widely used and actively maintained. JSitemap Pro is more feature-rich with built-in Google News, video, and image sitemaps. XMap is the legacy option still used on older Joomla 3 sites. For most new Joomla 4+ sites, start with OSMap.\"}},{\"@type\":\"Question\",\"name\":\"Does Joomla have a built-in sitemap generator?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"No. Joomla core does not generate an XML sitemap out of the box - you need an extension like OSMap, JSitemap, or XMap. This is different from WordPress, where SEO plugins include a sitemap by default.\"}},{\"@type\":\"Question\",\"name\":\"Where do I find my Joomla sitemap URL?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"After installing OSMap or JSitemap, the XML sitemap is usually at yoursite.com/index.php?option=com_osmap&view=xml&tmpl=component&id=1 or a friendlier URL like /sitemap.xml if you have enabled SEF URLs and configured the extension's menu item.\"}}]}";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'Fix Sitemap for Joomla - Complete Guide', description: 'Fix your Joomla sitemap: OSMap vs JSitemap vs XMap, menu configuration, multi-language hreflang, and submitting to GSC.', url: 'https://sitemapfixer.com/fix-sitemap-for/joomla', author: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com' }, publisher: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com', logo: { '@type': 'ImageObject', url: 'https://sitemapfixer.com/opengraph-image' } }, datePublished: '2026-04-17', mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://sitemapfixer.com/fix-sitemap-for/joomla' } }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sitemapfixer.com/' }, { '@type': 'ListItem', position: 2, name: 'Fix by Platform', item: 'https://sitemapfixer.com/fix-sitemap-for' }, { '@type': 'ListItem', position: 3, name: 'Fix Sitemap for Joomla - Complete Guide', item: 'https://sitemapfixer.com/fix-sitemap-for/joomla' }] }),
        }}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px', fontFamily: 'Geist, sans-serif' }}>
        <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
          <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{'  /  '}
          <a href="/fix-sitemap-for" style={{ color: '#2d5be3', textDecoration: 'none' }}>Platform Guides</a>{'  /  '}
          <span>Joomla</span>
        </nav>

        <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Fix Your Sitemap for Joomla</h1>
        <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
          Optimize your Joomla sitemap: choose between OSMap, JSitemap, and XMap, configure menu coverage, handle multi-language hreflang, and stop unpublished articles from leaking into search.
        </p>

        <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Analyze your Joomla sitemap now</span>
          <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Try Sitemap Fixer Free</a>
        </div>

        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 24 }}>
          Joomla sites have unique sitemap challenges because Joomla core does not generate a sitemap - every site relies on an extension, and each extension behaves differently. This guide covers the most common Joomla sitemap issues and exactly how to fix them.
        </p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common Joomla Sitemap Issues</h2>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
          <li>Extension differences: OSMap, JSitemap, and XMap output slightly different XML and pick URLs differently</li>
          <li>Category and menu items over-represented - the sitemap lists every menu item including duplicates</li>
          <li>Component-generated URLs (com_content, com_k2, com_virtuemart) producing duplicate entries</li>
          <li>Multi-language sites missing hreflang annotations or splitting languages across separate sitemaps without an index</li>
          <li>Unpublished or archived articles leaking into the sitemap when state filters are misconfigured</li>
          <li>SEF (Search Engine Friendly) URLs disabled - sitemap contains ugly index.php?option=com_content URLs</li>
          <li>Priority and changefreq defaults not adjusted per content type</li>
        </ul>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Understanding OSMap, JSitemap, and XMap</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 16 }}>
          <strong>OSMap</strong> (by Joomlashack) is the most popular free option. It is a fork of XMap that is actively maintained for Joomla 4 and 5. Pro version adds priority settings and news/image/video sitemaps.
        </p>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 16 }}>
          <strong>JSitemap Pro</strong> (by joomlatools) is a paid commercial extension with Google News, video, image, and geo sitemaps built in, plus real-time content analysis.
        </p>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
          <strong>XMap</strong> is the original but has not been updated in years and is not Joomla 4 compatible. Legacy sites only.
        </p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Step-by-Step Fix Guide</h2>
        <ol style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
          <li style={{ marginBottom: 12 }}>Install OSMap (or JSitemap Pro) via <em>System &gt; Install &gt; Extensions</em> and enable the system plugin</li>
          <li style={{ marginBottom: 12 }}>Go to <em>Components &gt; OSMap</em> and create a new sitemap - select only the menu items you want indexed, typically Main Menu and any language-specific menus</li>
          <li style={{ marginBottom: 12 }}>Uncheck irrelevant menu items: login forms, search, tag pages with no content, and legacy menus</li>
          <li style={{ marginBottom: 12 }}>Enable SEF URLs in <em>System &gt; Global Configuration &gt; SEO</em> so the sitemap contains clean URLs instead of index.php?option=com_content&amp;view=article&amp;id=42</li>
          <li style={{ marginBottom: 12 }}>For multi-language sites, enable the language plugin and configure OSMap to include hreflang alternate links - each language gets its own URL entry with alternates</li>
          <li style={{ marginBottom: 12 }}>Configure state filter to include only Published articles - exclude Unpublished, Archived, and Trashed</li>
          <li style={{ marginBottom: 12 }}>Exclude unwanted components like com_users login pages, com_search results, and com_tags dynamic pages from the sitemap configuration</li>
          <li style={{ marginBottom: 12 }}>Set sensible priority per content type (or skip - Google ignores priority) and configure changefreq based on actual update cadence</li>
          <li style={{ marginBottom: 12 }}>Create a menu item of type "OSMap - XML Sitemap" aliased to <code>sitemap.xml</code> so your sitemap is accessible at yoursite.com/sitemap.xml</li>
          <li style={{ marginBottom: 12 }}>Add a Sitemap line to robots.txt: <code>Sitemap: https://yoursite.com/sitemap.xml</code></li>
          <li style={{ marginBottom: 12 }}>Submit the sitemap URL in Google Search Console under <em>Indexing &gt; Sitemaps</em> and monitor coverage</li>
        </ol>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Example Joomla sitemap URL structure</h2>
        <div style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
          <pre style={{ margin: 0, fontSize: 13, lineHeight: 1.7, color: '#1c1c26', whiteSpace: 'pre-wrap', fontFamily: 'DM Mono, monospace' }}>{`# With OSMap and a SEF menu alias
https://yoursite.com/sitemap.xml

# Multi-language (language-prefixed)
https://yoursite.com/en/sitemap.xml
https://yoursite.com/fr/sitemap.xml

# Sitemap index referencing each language
https://yoursite.com/sitemap_index.xml`}</pre>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Multi-language hreflang in Joomla sitemaps</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
          Joomla's multi-language feature associates each article with a language, and OSMap/JSitemap can emit xhtml:link alternate entries inside each URL. Enable the "Include hreflang" option in OSMap Pro or JSitemap Pro. Verify in GSC's International Targeting report that alternate URLs are detected without errors. If your alternates are missing, check that each article has a content association set up under <em>Content &gt; Articles &gt; Associations</em>.
        </p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, marginTop: 40 }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Which Joomla sitemap extension is best?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>OSMap (free and pro versions) is the most widely used and actively maintained. JSitemap Pro is more feature-rich with built-in Google News, video, and image sitemaps. XMap is the legacy option still used on older Joomla 3 sites. For most new Joomla 4+ sites, start with OSMap.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Does Joomla have a built-in sitemap generator?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>No. Joomla core does not generate an XML sitemap out of the box - you need an extension like OSMap, JSitemap, or XMap. This is different from WordPress, where SEO plugins include a sitemap by default.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Where do I find my Joomla sitemap URL?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>After installing OSMap or JSitemap, the XML sitemap is usually at yoursite.com/index.php?option=com_osmap&amp;view=xml&amp;tmpl=component&amp;id=1 or a friendlier URL like /sitemap.xml if you have enabled SEF URLs and configured the extension's menu item.</div>
          </div>
        </div>

        <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
          <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Analyze your Joomla sitemap</div>
          <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Find all issues in your sitemap - free, no credit card needed</div>
          <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Sitemap Free</a>
        </div>

        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Other platform guides</div>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <li><a href="/fix-sitemap-for/wordpress" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>WordPress</a></li>
            <li><a href="/fix-sitemap-for/drupal" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Drupal</a></li>
            <li><a href="/fix-sitemap-for/shopify" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Shopify</a></li>
            <li><a href="/fix-sitemap-for/magento" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Magento</a></li>
            <li><a href="/learn/how-to-create-a-sitemap" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>How to Create a Sitemap</a></li>
          </ul>
        </div>
      </div>
    </>
  );
}
