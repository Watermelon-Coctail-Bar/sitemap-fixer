import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Drupal Sitemap: XML Sitemap Module Setup Guide',
  description: "How to generate an XML sitemap in Drupal using the Simple XML Sitemap module. Installation, configuration, fixing common errors, and submitting to Google.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/drupal-sitemap' },
  openGraph: {
    title: 'Drupal Sitemap: XML Sitemap Module Setup Guide',
    description: 'How to generate an XML sitemap in Drupal using the Simple XML Sitemap module. Installation, configuration, fixing common errors, and submitting to Google.',
    url: 'https://sitemapfixer.com/learn/drupal-sitemap',
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
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"Article","headline":"Drupal Sitemap: XML Sitemap Module Setup Guide","description":"How to generate an XML sitemap in Drupal using the Simple XML Sitemap module. Installation, configuration, fixing common errors, and submitting to Google.","url":"https://sitemapfixer.com/learn/drupal-sitemap","author":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com"},"publisher":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com","logo":{"@type":"ImageObject","url":"https://sitemapfixer.com/opengraph-image"}},"datePublished":"2025-01-15","mainEntityOfPage":{"@type":"WebPage","@id":"https://sitemapfixer.com/learn/drupal-sitemap"}}' }} />
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Drupal Sitemap</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Drupal Sitemap: Simple XML Sitemap Module Guide</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Validate your Drupal sitemap free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Check My Sitemap</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        <p style={{ marginBottom: 24 }}>Drupal does not include XML sitemap generation in its core. The standard module is Simple XML Sitemap, which is widely used and well-maintained. It integrates with Drupals content types, taxonomy, views, and custom routes to generate comprehensive sitemaps automatically.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Installing Simple XML Sitemap</h2>
        <p style={{ marginBottom: 24 }}>Install via Composer: composer require drupal/simple_sitemap. Then enable the module: drush en simple_sitemap. Or go to Extend in the Drupal admin and search for Simple XML Sitemap. After enabling, go to Configuration, then XML Sitemap to access the settings. Your sitemap will be available at yoursite.com/sitemap.xml immediately after configuration.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Configuring Which Content Gets Included</h2>
        <p style={{ marginBottom: 24 }}>In the Simple XML Sitemap settings, you configure inclusion at the entity type level. Go to Configuration, then XML Sitemap, then the Entities tab. For each content type (Article, Basic page, etc.) you can set whether it should be included, the priority, and the change frequency. You can also override these settings on a per-node basis in the node edit form - scroll to the XML Sitemap section and adjust the settings for that specific piece of content. For taxonomy terms, user profiles, and custom entities, the same configuration interface applies.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Regenerating the Sitemap</h2>
        <p style={{ marginBottom: 24 }}>Simple XML Sitemap regenerates automatically when content is created or updated, provided cron is running. You can also manually regenerate using Drush: drush simple-sitemap:generate or the short version drush ssg. On the settings page there is also a Rebuild button. If your sitemap appears stale, check that your cron jobs are running correctly - go to Reports, then Status Report in Drupal admin and look for the Last run time under Cron maintenance tasks.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Common Drupal Sitemap Issues</h2>

        <h3 style={{ fontSize: 20, fontWeight: 700, color: '#0a0a0f', marginTop: 32, marginBottom: 10 }}>Site base URL incorrect</h3>
        <p style={{ marginBottom: 24 }}>Simple XML Sitemap uses Drupals configured base URL to build absolute URLs. If your settings.php or Drupal admin has an incorrect trusted host or base URL configured, all sitemap URLs will be wrong. Check Configuration, then System, then Site information, and verify the site URL is your production domain. On hosting platforms, this is sometimes set via environment variables.</p>

        <h3 style={{ fontSize: 20, fontWeight: 700, color: '#0a0a0f', marginTop: 32, marginBottom: 10 }}>Unpublished content appearing in sitemap</h3>
        <p style={{ marginBottom: 24 }}>Simple XML Sitemap respects Drupals published/unpublished status - only published content is included by default. If you see unpublished content in the sitemap, check whether you have an entity-level override setting. In the node edit form, the XML sitemap section may have been manually set to include that specific node regardless of status.</p>

        <h3 style={{ fontSize: 20, fontWeight: 700, color: '#0a0a0f', marginTop: 32, marginBottom: 10 }}>Sitemap timeout on large sites</h3>
        <p style={{ marginBottom: 24 }}>On sites with thousands of nodes, sitemap generation can time out or consume excessive memory during cron. Simple XML Sitemap handles this by chunking the generation across multiple cron runs. If you need faster generation, configure a dedicated cron command or increase PHP memory limits for CLI. The module also supports chunked sitemaps automatically - if you exceed the URL limit per file, it creates multiple sitemap files linked from an index.</p>
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Validate your Drupal sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free - checks all URLs in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Check My Sitemap Free</a>
      </div>

        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/learn/wordpress-sitemap" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>WordPress Sitemap: Setup, Fix, and Submit Guide</a></li>
            <li><a href="/learn/shopify-sitemap" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Shopify Sitemap: Location, Errors, and How to Submit It</a></li>
            <li><a href="/learn/wix-sitemap" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Wix Sitemap: How It Works and How to Submit It</a></li>
            <li><a href="/learn/squarespace-sitemap" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Squarespace Sitemap: How It Works and Common Fixes</a></li>
            <li><a href="/learn/webflow-sitemap" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Webflow Sitemap: How It Works and How to Submit It</a></li>
          
            <li><a href="/learn/django-sitemap" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Django Sitemap: Using the Built-in Sitemaps Framework</a></li></ul>
        </div>
    </div>
  );
}
