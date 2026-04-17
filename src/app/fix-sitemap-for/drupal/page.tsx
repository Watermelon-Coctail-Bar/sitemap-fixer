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
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px', fontFamily: 'Geist, sans-serif' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>
        {'  '}
        <a href="/fix-sitemap-for" style={{ color: '#2d5be3', textDecoration: 'none' }}>Platform Guides</a>
        {'  '}
        <span>Drupal</span>
      </nav>

      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>
        Fix Your Sitemap for Drupal
      </h1>
      <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        Drupal 9 and 10 sites rely on the Simple XML Sitemap module to generate sitemap.xml. Content type settings, taxonomy term bundles, and language variants determine what gets indexed and what gets buried.
      </p>

      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Analyze your Drupal sitemap now </span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>
          Try Sitemap Fixer Free
        </a>
      </div>

      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 24 }}>
        Drupal sitemaps go wrong when content type settings are left at defaults, when taxonomy pages are exposed without curation,
        or when Views-generated listings bloat the feed. This guide walks through the Simple XML Sitemap configuration you should run.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common Drupal Sitemap Issues</h2>
      <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li>Every content type added to sitemap by default, including internal blocks and basic pages used as components</li>
        <li>Taxonomy term pages (/taxonomy/term/42) indexed instead of their pathauto aliases</li>
        <li>Views pages (admin listings, search results) leaking into sitemap through the core Views module</li>
        <li>Multilingual nodes emitting duplicate URLs without hreflang annotations</li>
        <li>Anonymous user cache making sitemap return stale data for hours</li>
        <li>Node priority and changefreq defaults unchanged, so every URL has priority 0.5</li>
      </ul>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Step-by-Step Fix Guide</h2>
      <ol style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li style={{ marginBottom: 12 }}>Install with composer require drupal/simple_sitemap and enable the module via drush en simple_sitemap</li>
        <li style={{ marginBottom: 12 }}>Go to /admin/config/search/simplesitemap/entities and enable sitemap output only for content types meant for public landing pages (Article, Product, Landing)</li>
        <li style={{ marginBottom: 12 }}>Set per-bundle priority and changefreq - for example, Article at 0.8 weekly, Taxonomy at 0.3 monthly</li>
        <li style={{ marginBottom: 12 }}>Under Views, disable sitemap inclusion for admin views and any internal listing that should not be indexed</li>
        <li style={{ marginBottom: 12 }}>For multilingual, enable the Simple XML Sitemap: Hreflang submodule so hreflang tags are added per language variant</li>
        <li style={{ marginBottom: 12 }}>Clear Drupal cache after every configuration change (drush cr) and regenerate sitemap with drush simple-sitemap:generate</li>
        <li style={{ marginBottom: 12 }}>Run Sitemap Fixer against yourdomain.com/sitemap.xml and submit to Google Search Console</li>
      </ol>

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
