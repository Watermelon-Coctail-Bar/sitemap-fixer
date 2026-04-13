import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Laravel Sitemap: Using spatie/laravel-sitemap',
  description: "How to add an XML sitemap to a Laravel application using the spatie/laravel-sitemap package. Includes dynamic generation, caching, and submission to Google.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/laravel-sitemap' },
  openGraph: {
    title: 'Laravel Sitemap: Using spatie/laravel-sitemap',
    description: 'How to add an XML sitemap to a Laravel application using the spatie/laravel-sitemap package. Includes dynamic generation, caching, and submission to Google.',
    url: 'https://sitemapfixer.com/learn/laravel-sitemap',
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
const installBlock = [
  '// routes/web.php',
  'Route::get("/sitemap.xml", SitemapController::class);',
  '',
  '// app/Http/Controllers/SitemapController.php',
  'use Spatie\\Sitemap\\Sitemap;',
  'use Spatie\\Sitemap\\Tags\\Url;',
  '',
  'public function __invoke()',
  '{',
  '    return Sitemap::create()',
  '        ->add(Url::create("/")->setPriority(1.0))',
  '        ->add(Url::create("/about")->setPriority(0.8))',
  '        ->renderResponse();',
  '}',
];
const dynamicBlock = [
  '$sitemap = Sitemap::create()',
  '    ->add(Url::create("/"));',
  '',
  'Post::published()->each(function ($post) use ($sitemap) {',
  '    $sitemap->add(',
  '        Url::create("/blog/" . $post->slug)',
  '            ->setLastModificationDate($post->updated_at)',
  '            ->setPriority(0.7)',
  '    );',
  '});',
];
const CodeBlock = ({ lines }: { lines: string[] }) => (
  <div style={{ background: '#0a0a0f', borderRadius: 10, padding: '20px 24px', marginBottom: 24, fontFamily: 'monospace', fontSize: 13, color: '#e5e7eb', lineHeight: 1.8, overflowX: 'auto' }}>
    {lines.map((line, i) => (
      <div key={i}>{line || '\u00a0'}</div>
    ))}
  </div>
);
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"Article","headline":"Laravel Sitemap: Using spatie/laravel-sitemap","description":"How to add an XML sitemap to a Laravel application using the spatie/laravel-sitemap package. Includes dynamic generation, caching, and submission to Google.","url":"https://sitemapfixer.com/learn/laravel-sitemap","author":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com"},"publisher":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com","logo":{"@type":"ImageObject","url":"https://sitemapfixer.com/opengraph-image"}},"datePublished":"2025-01-15","mainEntityOfPage":{"@type":"WebPage","@id":"https://sitemapfixer.com/learn/laravel-sitemap"}}' }} />
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>
        {' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>
        {' / '}
        <span>Laravel Sitemap</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>
        Laravel Sitemap: Generate One with spatie/laravel-sitemap
      </h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Validate your Laravel sitemap free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Check My Sitemap</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        <p style={{ marginBottom: 24 }}>Laravel does not generate a sitemap automatically. The most widely used solution is the spatie/laravel-sitemap package, which provides a fluent API for building sitemaps programmatically. Install via Composer: <code style={{ fontFamily: 'monospace', background: '#f3f4f6', padding: '2px 6px', borderRadius: 4, fontSize: 14 }}>composer require spatie/laravel-sitemap</code></p>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Installation and Basic Usage</h2>
        <p style={{ marginBottom: 16 }}>Create a controller that builds and returns the sitemap as an XML response:</p>
        <CodeBlock lines={installBlock} />
        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Generating URLs from Database Models</h2>
        <p style={{ marginBottom: 16 }}>For dynamic content like blog posts, loop over your models and add a URL for each:</p>
        <CodeBlock lines={dynamicBlock} />
        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Caching the Sitemap</h2>
        <p style={{ marginBottom: 24 }}>For large sites, generating the sitemap on every request is expensive. Wrap sitemap generation in <code style={{ fontFamily: 'monospace', background: '#f3f4f6', padding: '2px 6px', borderRadius: 4, fontSize: 14 }}>Cache::remember</code> with a TTL of several hours. Invalidate the cache in model observers when content is published or updated so the sitemap stays fresh.</p>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Common Laravel Sitemap Issues</h2>
        <p style={{ marginBottom: 12 }}><strong>APP_URL not set correctly:</strong> If APP_URL in your .env is set to localhost or a staging URL, all sitemap URLs will use the wrong base domain. Set APP_URL to your production domain in your production environment configuration.</p>
        <p style={{ marginBottom: 24 }}><strong>Memory limit on large catalogs:</strong> Fetching millions of product URLs in one query will exhaust memory. Use <code style={{ fontFamily: 'monospace', background: '#f3f4f6', padding: '2px 6px', borderRadius: 4, fontSize: 14 }}>chunk()</code> or <code style={{ fontFamily: 'monospace', background: '#f3f4f6', padding: '2px 6px', borderRadius: 4, fontSize: 14 }}>lazy()</code> instead of <code style={{ fontFamily: 'monospace', background: '#f3f4f6', padding: '2px 6px', borderRadius: 4, fontSize: 14 }}>all()</code> when iterating over large model collections.</p>
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Validate your Laravel sitemap</div>
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
          
            <li><a href="/learn/drupal-sitemap" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Drupal Sitemap: XML Sitemap Module Setup Guide</a></li></ul>
        </div>
    </div>
  );
}
