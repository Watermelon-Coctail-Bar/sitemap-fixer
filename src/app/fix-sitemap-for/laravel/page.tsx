import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fix Sitemap for Laravel - Complete Guide',
  description: 'Optimize your Laravel sitemap: configure spatie/laravel-sitemap, chunk Eloquent queries, schedule regeneration, and handle multi-tenant sites.',
  alternates: { canonical: 'https://sitemapfixer.com/fix-sitemap-for/laravel' },
  openGraph: {
    title: 'Fix Sitemap for Laravel - Complete Guide',
    description: 'Optimize your Laravel sitemap: configure spatie/laravel-sitemap, chunk Eloquent queries, schedule regeneration, and handle multi-tenant sites.',
    url: 'https://sitemapfixer.com/fix-sitemap-for/laravel',
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'Fix Sitemap for Laravel - Complete Guide', description: 'Optimize your Laravel sitemap: configure spatie/laravel-sitemap, chunk Eloquent queries, schedule regeneration, and handle multi-tenant sites.', url: 'https://sitemapfixer.com/fix-sitemap-for/laravel', author: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com' }, publisher: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com', logo: { '@type': 'ImageObject', url: 'https://sitemapfixer.com/opengraph-image' } }, datePublished: '2026-04-17', mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://sitemapfixer.com/fix-sitemap-for/laravel' } }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sitemapfixer.com/' }, { '@type': 'ListItem', position: 2, name: 'Fix by Platform', item: 'https://sitemapfixer.com/fix-sitemap-for' }, { '@type': 'ListItem', position: 3, name: 'Fix Sitemap for Laravel - Complete Guide', item: 'https://sitemapfixer.com/fix-sitemap-for/laravel' }] }),
        }}
      />

      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>
        {'  '}
        <a href="/fix-sitemap-for" style={{ color: '#2d5be3', textDecoration: 'none' }}>Platform Guides</a>
        {'  '}
        <span>Laravel</span>
      </nav>

      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>
        Fix Your Sitemap for Laravel
      </h1>
      <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        Laravel does not ship a built-in sitemap generator, so most teams use spatie/laravel-sitemap. Memory blowups from loading entire Eloquent collections, stale sitemaps, and missing multi-tenant domains are the typical failure modes.
      </p>

      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Analyze your Laravel sitemap now </span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>
          Try Sitemap Fixer Free
        </a>
      </div>

      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 24 }}>
        The standard pattern is a GenerateSitemap artisan command running on cron that writes public/sitemap.xml.
        This guide covers how to make that command fast, correct, and safe for sites with hundreds of thousands of URLs.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common Laravel Sitemap Issues</h2>
      <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li>Running ::all() on large Eloquent models causing out-of-memory errors during generation</li>
        <li>Soft-deleted records leaking into sitemap because SoftDeletes global scope was bypassed</li>
        <li>APP_URL pointing at localhost in production .env, producing wrong absolute URLs</li>
        <li>Single sitemap file over 50MB because pagination and chunked writes are not used</li>
        <li>Multi-tenant apps emitting the same sitemap for every tenant domain</li>
        <li>Sitemap regenerating on every request (via route) instead of being cached to a file</li>
      </ul>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Step-by-Step Fix Guide</h2>
      <ol style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li style={{ marginBottom: 12 }}>Install with composer require spatie/laravel-sitemap and publish the config with php artisan vendor:publish</li>
        <li style={{ marginBottom: 12 }}>Create a GenerateSitemap artisan command that builds a SitemapIndex and writes shards to public/sitemaps/</li>
        <li style={{ marginBottom: 12 }}>Use Post::where(&apos;published&apos;, true)-&gt;chunkById(1000, fn($posts) =&gt; $posts-&gt;each(...)) so memory stays bounded for large tables</li>
        <li style={{ marginBottom: 12 }}>Verify APP_URL in .env matches your production domain so url()-&gt;to() produces canonical absolute URLs</li>
        <li style={{ marginBottom: 12 }}>Split into sub-sitemaps per entity (posts, products, categories) and reference them from sitemap.xml (the index)</li>
        <li style={{ marginBottom: 12 }}>Schedule the command in app/Console/Kernel.php: $schedule-&gt;command(&apos;sitemap:generate&apos;)-&gt;hourly()</li>
        <li style={{ marginBottom: 12 }}>Run Sitemap Fixer against yourdomain.com/sitemap.xml and submit to Google Search Console</li>
      </ol>

      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Analyze your Laravel sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Find all issues in your sitemap - free, no credit card needed</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>
          Analyze My Sitemap Free
        </a>
      </div>

      <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
        <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Other platform guides</div>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <li><a href="/fix-sitemap-for/django" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Django</a></li>
          <li><a href="/fix-sitemap-for/rails" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Ruby on Rails</a></li>
          <li><a href="/fix-sitemap-for/wordpress" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>WordPress</a></li>
          <li><a href="/fix-sitemap-for/drupal" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Drupal</a></li>
          <li><a href="/learn/laravel-sitemap" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Laravel Sitemap Guide</a></li>
        </ul>
      </div>
    </div>
  );
}
