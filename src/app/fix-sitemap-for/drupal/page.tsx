import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fix Sitemap for Drupal - Complete Guide',
  description: 'Optimize your Drupal sitemap: configure Simple XML Sitemap, handle content types, taxonomy terms, multilingual variants, and large node counts.',
  alternates: { canonical: 'https://sitemapfixer.com/fix-sitemap-for/drupal' },
  openGraph: {
    title: 'Fix Sitemap for Drupal - Complete Guide',
    description: 'Optimize your Drupal sitemap: configure Simple XML Sitemap, handle content types, taxonomy terms, multilingual variants, and large node counts.',
    url: 'https://sitemapfixer.com/fix-sitemap-for/drupal',
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
  const faqSchema = "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Simple XML Sitemap vs XML Sitemap - which Drupal module?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Simple XML Sitemap (drupal/simple_sitemap) is actively maintained and Drupal 10 compatible. The older XML Sitemap module (drupal/xmlsitemap) is legacy and only recommended if you're on Drupal 7 or have existing config you can't migrate. Start with Simple XML Sitemap on any new site.\"}},{\"@type\":\"Question\",\"name\":\"Why are /taxonomy/term/42 URLs in my sitemap instead of aliases?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Pathauto isn't applied to the sitemap generation. Ensure pathauto module is enabled and that your taxonomy term patterns are set. Then regenerate with drush simple-sitemap:generate so aliased URLs replace the raw entity paths.\"}},{\"@type\":\"Question\",\"name\":\"How do I split a Drupal sitemap over 50k URLs?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Simple XML Sitemap shards automatically at 2,000 URLs per file by default, but you can raise it. For very large sites, create multiple sitemap variants (one per content type) under /admin/config/search/simplesitemap/variants. Each gets its own URL and its own coverage report in GSC.\"}}]}";

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px', fontFamily: 'Geist, sans-serif' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'Fix Sitemap for Drupal - Complete Guide', description: 'Optimize your Drupal sitemap: configure Simple XML Sitemap, handle content types, taxonomy terms, multilingual variants, and large node counts.', url: 'https://sitemapfixer.com/fix-sitemap-for/drupal', author: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com' }, publisher: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com', logo: { '@type': 'ImageObject', url: 'https://sitemapfixer.com/opengraph-image' } }, datePublished: '2026-04-17', mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://sitemapfixer.com/fix-sitemap-for/drupal' } }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sitemapfixer.com/' }, { '@type': 'ListItem', position: 2, name: 'Fix by Platform', item: 'https://sitemapfixer.com/fix-sitemap-for' }, { '@type': 'ListItem', position: 3, name: 'Fix Sitemap for Drupal - Complete Guide', item: 'https://sitemapfixer.com/fix-sitemap-for/drupal' }] }),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />

      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>
        {'  /  '}
        <a href="/fix-sitemap-for" style={{ color: '#2d5be3', textDecoration: 'none' }}>Platform Guides</a>
        {'  /  '}
        <span>Drupal</span>
      </nav>

      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>
        Fix Your Sitemap for Drupal
      </h1>
      <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        Drupal 9 and 10 sites rely on the Simple XML Sitemap module to generate <code>sitemap.xml</code>. Content type settings, taxonomy term bundles, and language variants determine what gets indexed and what gets buried.
      </p>

      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Analyze your Drupal sitemap now</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>
          Try Sitemap Fixer Free
        </a>
      </div>

      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 24 }}>
        Drupal sitemaps go wrong when content types are enabled by default, when taxonomy pages are exposed without curation, or when Views-generated listings bloat the feed. And unlike WordPress, Drupal doesn't ship a sitemap with core - you pick a module, configure it per-bundle, and remember to regenerate on content changes.
      </p>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 32 }}>
        Audited a Drupal 10 publisher last month with 9,200 articles. The sitemap had 31,000 URLs. Breakdown: 9,200 articles (expected), 6,800 taxonomy term pages (mostly empty tag pages), 11,000 "Basic page" nodes that had been used as components inside other pages, and 4,000 Views listing URLs. Turning off everything except Article and Product content types dropped the sitemap to 9,800 URLs overnight.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Simple XML Sitemap vs XML Sitemap</h2>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 16 }}>
        Two modules, similar names:
      </p>
      <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li><strong>Simple XML Sitemap</strong> (<code>drupal/simple_sitemap</code>) - Drupal 9/10 compatible, actively maintained, per-bundle config, multi-variant support. Use this on new sites.</li>
        <li><strong>XML Sitemap</strong> (<code>drupal/xmlsitemap</code>) - older, more granular node-level control, but Drupal 10 support has been patchy. Mostly legacy D7 sites still on it.</li>
      </ul>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common Drupal Sitemap Issues</h2>
      <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li>Every content type added to the sitemap by default, including Basic pages used as components</li>
        <li>Taxonomy term pages (<code>/taxonomy/term/42</code>) indexed instead of pathauto aliases</li>
        <li>Views pages (admin listings, facet pages) leaking in</li>
        <li>Multilingual nodes emitting duplicate URLs without hreflang</li>
        <li>Anonymous cache returning stale sitemap for hours after regeneration</li>
        <li>Node priority unchanged from 0.5 default - Google ignores it but it's a signal the config was never touched</li>
        <li>Sitemap regenerated only on cron, so fresh content takes up to an hour to appear</li>
        <li>Unpublished nodes leaking because the "Include unpublished" flag got toggled during content editing</li>
      </ul>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Install and configure Simple XML Sitemap</h2>
      <div style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
        <pre style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: '#1c1c26', whiteSpace: 'pre-wrap', fontFamily: 'DM Mono, monospace' }}>{`# Install
composer require drupal/simple_sitemap
drush en simple_sitemap -y

# Regenerate
drush simple-sitemap:generate

# Generate a specific variant only
drush simple-sitemap:generate --variants=default

# Clear cache so the new sitemap is served
drush cr

# View counts per URL (sanity check)
curl -s https://yoursite.com/sitemap.xml | grep -c '<url>'`}</pre>
      </div>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Content type filtering and path aliases</h2>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 16 }}>
        Go to <em>/admin/config/search/simplesitemap/entities</em> and enable only the bundles that should be indexable. Typical choices:
      </p>
      <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 16, fontSize: 16 }}>
        <li><strong>Enable:</strong> Article, Product, Landing page, Taxonomy terms <em>with content</em></li>
        <li><strong>Disable:</strong> Basic page (if used as components), Webform submissions, Comments, User profiles</li>
      </ul>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        Path aliases: install <code>drupal/pathauto</code> and set patterns for each bundle. Simple XML Sitemap uses the aliased URL if pathauto is active - otherwise it emits <code>/node/123</code> which is awful for rankings and worse for crawlability.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Multilingual and hreflang</h2>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        With <code>locale</code> and <code>content_translation</code> enabled, Simple XML Sitemap emits one URL per language variant. To add <code>xhtml:link</code> alternates, enable the hreflang submodule shipped in <code>simple_sitemap</code>. Each translated node then lists all its language alternates inside the same <code>&lt;url&gt;</code> element. Verify in GSC's International Targeting report that alternates are detected without errors.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Step-by-Step Fix Guide</h2>
      <ol style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li style={{ marginBottom: 12 }}>Install via <code>composer require drupal/simple_sitemap</code> and enable with drush</li>
        <li style={{ marginBottom: 12 }}>At <code>/admin/config/search/simplesitemap/entities</code>, enable only public-landing-page bundles</li>
        <li style={{ marginBottom: 12 }}>Set per-bundle priority and changefreq (Article 0.8 weekly, Term 0.3 monthly, Product 0.7 weekly)</li>
        <li style={{ marginBottom: 12 }}>Install pathauto and configure patterns so entity URLs use aliases</li>
        <li style={{ marginBottom: 12 }}>Under Views, disable sitemap inclusion on admin and internal listings</li>
        <li style={{ marginBottom: 12 }}>For multilingual, enable the hreflang submodule</li>
        <li style={{ marginBottom: 12 }}>Run <code>drush simple-sitemap:generate</code> then <code>drush cr</code></li>
        <li style={{ marginBottom: 12 }}>Verify with <code>curl https://yourdomain.com/sitemap.xml</code> and inspect a few URLs</li>
        <li style={{ marginBottom: 12 }}>Submit to Google Search Console</li>
      </ol>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, marginTop: 40 }}>Frequently Asked Questions</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
        <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Simple XML Sitemap vs XML Sitemap - which Drupal module?</div>
          <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Simple XML Sitemap (drupal/simple_sitemap) is actively maintained and Drupal 10 compatible. The older XML Sitemap module (drupal/xmlsitemap) is legacy and only recommended if you&apos;re on Drupal 7. Start with Simple XML Sitemap on any new site.</div>
        </div>
        <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Why are /taxonomy/term/42 URLs in my sitemap instead of aliases?</div>
          <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Pathauto isn&apos;t applied. Ensure pathauto is enabled and taxonomy term patterns are set. Then regenerate with drush simple-sitemap:generate so aliased URLs replace raw entity paths.</div>
        </div>
        <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>How do I split a Drupal sitemap over 50k URLs?</div>
          <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Simple XML Sitemap shards automatically at 2,000 URLs per file by default, but you can raise it. For very large sites, create multiple sitemap variants under /admin/config/search/simplesitemap/variants. Each gets its own URL and its own coverage report in GSC.</div>
        </div>
      </div>

      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Analyze your Drupal sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Find all issues in your sitemap - free, no credit card needed</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>
          Analyze My Sitemap Free
        </a>
      </div>

      <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
        <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Other platform guides</div>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <li><a href="/fix-sitemap-for/wordpress" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>WordPress</a></li>
          <li><a href="/fix-sitemap-for/django" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Django</a></li>
          <li><a href="/fix-sitemap-for/laravel" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Laravel</a></li>
          <li><a href="/fix-sitemap-for/rails" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Ruby on Rails</a></li>
          <li><a href="/learn/drupal-sitemap" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Drupal Sitemap Guide</a></li>
        </ul>
      </div>
    </div>
  );
}
