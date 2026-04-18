import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fix Sitemap for WordPress - Complete Guide',
  description: 'Fix your WordPress sitemap: configure Yoast or Rank Math correctly, exclude low-value pages, and optimize for crawl efficiency.',
  alternates: { canonical: 'https://sitemapfixer.com/fix-sitemap-for/wordpress' },
  openGraph: {
    title: 'Fix Sitemap for WordPress - Complete Guide',
    description: 'Fix your WordPress sitemap: configure Yoast or Rank Math correctly, exclude low-value pages, and optimize for crawl efficiency.',
    url: 'https://sitemapfixer.com/fix-sitemap-for/wordpress',
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
  const faqSchema = "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Yoast vs Rank Math vs All-in-One SEO vs WordPress core - which sitemap?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"WordPress core (5.5+) ships a basic sitemap at /wp-sitemap.xml. It works but has no per-post-type exclusion. Yoast and Rank Math both produce richer sitemaps with image entries, per-type splits, and exclude toggles. Rank Math's UI is better for technical users; Yoast has more third-party compatibility. All-in-One SEO is the third most popular and comparable to Yoast. Pick one - don't run two SEO plugins simultaneously.\"}},{\"@type\":\"Question\",\"name\":\"Does WordPress multisite have per-site sitemaps?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes, each site in a multisite network generates its own sitemap at site1.example.com/sitemap_index.xml. If you're on a subdirectory multisite, each subdirectory has its own sitemap. Don't try to combine them into a network-wide sitemap - submit each site separately in GSC.\"}},{\"@type\":\"Question\",\"name\":\"How do I exclude custom post types from the WordPress sitemap?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"In Yoast: SEO > Search Appearance > Content Types, toggle 'Show in search results' off. In Rank Math: Titles & Meta > [Post Type], set 'Include in Sitemap' to No. With core only, use the wp_sitemaps_post_types filter in a small plugin or theme function.\"}}]}";

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px', fontFamily: 'Geist, sans-serif' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'Fix Sitemap for WordPress - Complete Guide', description: 'Fix your WordPress sitemap: configure Yoast or Rank Math correctly, exclude low-value pages, and optimize for crawl efficiency.', url: 'https://sitemapfixer.com/fix-sitemap-for/wordpress', author: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com' }, publisher: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com', logo: { '@type': 'ImageObject', url: 'https://sitemapfixer.com/opengraph-image' } }, datePublished: '2026-04-17', mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://sitemapfixer.com/fix-sitemap-for/wordpress' } }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sitemapfixer.com/' }, { '@type': 'ListItem', position: 2, name: 'Fix by Platform', item: 'https://sitemapfixer.com/fix-sitemap-for' }, { '@type': 'ListItem', position: 3, name: 'Fix Sitemap for WordPress - Complete Guide', item: 'https://sitemapfixer.com/fix-sitemap-for/wordpress' }] }),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />

      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>
        {'  /  '}
        <a href="/fix-sitemap-for" style={{ color: '#2d5be3', textDecoration: 'none' }}>Platform Guides</a>
        {'  /  '}
        <span>WordPress</span>
      </nav>

      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>
        Fix Your Sitemap for WordPress
      </h1>
      <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        WordPress sitemap issues come from four plugin options, overlapping defaults, and custom post types that nobody remembers creating. This guide walks through Yoast, Rank Math, All-in-One SEO, and the WordPress core sitemap - and when to use each.
      </p>

      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Analyze your WordPress sitemap now</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>
          Try Sitemap Fixer Free
        </a>
      </div>

      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 24 }}>
        WordPress core added a built-in sitemap at <code>/wp-sitemap.xml</code> in version 5.5 (2020). It's basic but functional. Most real sites still run Yoast, Rank Math, or All-in-One SEO because those plugins expose per-type exclusions, image sitemaps, and integration with the rest of the SEO config. If you have two of them installed at once, you'll have conflicting sitemaps and Google will crawl both. Pick one.
      </p>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 32 }}>
        Saw a WP agency site with 180 real blog posts. Yoast sitemap showed 4,200 URLs. The reason: an old "Documentation" custom post type from a plugin they'd deactivated (but not deleted) still had 3,900 orphaned posts in the database, and Yoast was happily listing them. Deleting the post type via WP-CLI cleared it instantly.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Plugin comparison</h2>
      <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li><strong>WordPress core</strong> (<code>/wp-sitemap.xml</code>): good default for brochure sites. No image entries. No per-type exclusions without a code filter.</li>
        <li><strong>Yoast SEO</strong> (<code>/sitemap_index.xml</code>): per-type toggles in Search Appearance, image sitemap integrated, solid for non-technical users.</li>
        <li><strong>Rank Math</strong> (<code>/sitemap_index.xml</code>): better UI, more granular controls, stronger for technical SEOs. Free tier covers most use cases.</li>
        <li><strong>All-in-One SEO</strong> (<code>/sitemap.xml</code>): similar feature set to Yoast, good for WooCommerce stores thanks to dedicated product sitemap support.</li>
      </ul>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common WordPress Sitemap Issues</h2>
      <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li>Two SEO plugins both emitting sitemaps, double-submitted to GSC</li>
        <li>Tag and category archives included for taxonomies with 2-3 posts each (thin content)</li>
        <li>Author archives listing contributors who never published</li>
        <li>Attachment pages (<code>/attachment/image-name/</code>) indexable by default</li>
        <li>Orphaned custom post types from deactivated plugins</li>
        <li>WooCommerce product variations, <code>?orderby=</code>, and <code>?filter_</code> URLs appearing in search</li>
        <li>Multisite networks with each subsite's sitemap submitted to the wrong GSC property</li>
        <li>Yoast sitemap cache not rebuilding after bulk imports</li>
      </ul>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Attachment pages - the silent bloater</h2>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 16 }}>
        Every image uploaded to WordPress gets its own URL like <code>/attachment/photo-name/</code>. By default these are indexable, and on a site with years of media uploads you can have thousands of them. Yoast disables them via: SEO &gt; Search Appearance &gt; Media &gt; "Redirect attachment URLs to the attachment itself" = Yes. Rank Math: Titles &amp; Meta &gt; Media &gt; Redirect Attachments to Parent = On.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Excluding custom post types</h2>
      <div style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
        <pre style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: '#1c1c26', whiteSpace: 'pre-wrap', fontFamily: 'DM Mono, monospace' }}>{`// Core sitemap: exclude a post type
add_filter('wp_sitemaps_post_types', function ($post_types) {
    unset($post_types['product_variation']);
    unset($post_types['acf-field']);
    return $post_types;
});

// Core sitemap: exclude specific posts
add_filter('wp_sitemaps_posts_query_args', function ($args, $post_type) {
    if ($post_type === 'post') {
        $args['post__not_in'] = [123, 456];
    }
    return $args;
}, 10, 2);

// Yoast: exclude a post type entirely
add_filter('wpseo_sitemap_exclude_post_type', function ($excluded, $post_type) {
    if ($post_type === 'attachment') return true;
    return $excluded;
}, 10, 2);`}</pre>
      </div>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>WooCommerce quirks</h2>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        WooCommerce registers <code>product_variation</code> as a public post type, which can leak variation URLs into core and some plugin sitemaps. Also: <code>?orderby=popularity</code>, <code>?filter_color=red</code>, and <code>/page/2/</code> on shop archives. Add robots.txt rules for the parameters, and use the filter above to drop <code>product_variation</code>.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Multisite</h2>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        On a multisite network, each site has its own sitemap. Subdomain multisites: <code>site1.example.com/sitemap_index.xml</code>. Subdirectory: <code>example.com/site1/sitemap_index.xml</code>. Each subsite should be a separate property in GSC. Don't build a "network sitemap" that combines them - GSC treats them as separate domains anyway, and you lose per-site coverage data.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Step-by-Step Fix Guide</h2>
      <ol style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li style={{ marginBottom: 12 }}>Pick one SEO plugin (Yoast, Rank Math, or AIOSEO). Deactivate and delete any others</li>
        <li style={{ marginBottom: 12 }}>In that plugin, toggle off taxonomy archives with thin content (tags with &lt;5 posts)</li>
        <li style={{ marginBottom: 12 }}>Disable author archives if only 1-2 authors have published</li>
        <li style={{ marginBottom: 12 }}>Turn on "Redirect attachment URLs to the attachment itself"</li>
        <li style={{ marginBottom: 12 }}>Audit custom post types via WP-CLI: <code>wp post-type list</code>. Remove orphans.</li>
        <li style={{ marginBottom: 12 }}>For WooCommerce, exclude <code>product_variation</code> and block filter parameters in robots.txt</li>
        <li style={{ marginBottom: 12 }}>Clear Yoast/Rank Math sitemap cache (Tools &gt; Clear sitemap cache or <code>wp rewrite flush</code>)</li>
        <li style={{ marginBottom: 12 }}>Verify with <code>curl https://yoursite.com/sitemap_index.xml</code> and spot-check URLs</li>
        <li style={{ marginBottom: 12 }}>Submit the sitemap index (not individual sub-sitemaps) to Google Search Console</li>
      </ol>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, marginTop: 40 }}>Frequently Asked Questions</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
        <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Yoast vs Rank Math vs All-in-One SEO vs WordPress core - which sitemap?</div>
          <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>WordPress core (5.5+) ships a basic sitemap. Yoast and Rank Math both produce richer sitemaps with image entries, per-type splits, and exclude toggles. Rank Math&apos;s UI is better for technical users; Yoast has more third-party compatibility. Pick one - don&apos;t run two SEO plugins simultaneously.</div>
        </div>
        <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Does WordPress multisite have per-site sitemaps?</div>
          <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Yes, each site in a multisite network generates its own sitemap. Don&apos;t try to combine them into a network-wide sitemap - submit each site separately in GSC.</div>
        </div>
        <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>How do I exclude custom post types from the WordPress sitemap?</div>
          <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>In Yoast: SEO &gt; Search Appearance &gt; Content Types. In Rank Math: Titles &amp; Meta &gt; [Post Type]. With core only, use the wp_sitemaps_post_types filter.</div>
        </div>
      </div>

      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Analyze your WordPress sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Find all issues in your sitemap - free, no credit card needed</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>
          Analyze My Sitemap Free
        </a>
      </div>

      <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
        <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Other platform guides</div>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <li><a href="/fix-sitemap-for/shopify" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Shopify</a></li>
          <li><a href="/fix-sitemap-for/drupal" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Drupal</a></li>
          <li><a href="/fix-sitemap-for/ecommerce" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>E-commerce Sites</a></li>
          <li><a href="/fix-sitemap-for/large-sites" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Large Sites (10k+ pages)</a></li>
          <li><a href="/learn/wordpress-seo" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>WordPress SEO Guide</a></li>
        </ul>
      </div>
    </div>
  );
}
