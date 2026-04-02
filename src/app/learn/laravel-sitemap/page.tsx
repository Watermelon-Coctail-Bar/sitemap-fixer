import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Laravel Sitemap: How to Generate One with spatie/laravel-sitemap | SitemapFixer',
  description: "How to add an XML sitemap to a Laravel application using the spatie/laravel-sitemap package. Includes dynamic generation, caching, and submission to Google.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/laravel-sitemap' },
};
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Laravel Sitemap</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Laravel Sitemap: Generating One with spatie/laravel-sitemap</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Validate your Laravel sitemap free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Check My Sitemap</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        <p style={{ marginBottom: 24 }}>Laravel does not generate a sitemap automatically. The most widely used solution is the spatie/laravel-sitemap package, which provides a fluent API for building sitemaps programmatically. You can define static URLs manually, generate URLs from your database models, or crawl your own site to discover all pages.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Installation and Basic Usage</h2>
        <p style={{ marginBottom: 16 }}>Install via Composer: composer require spatie/laravel-sitemap. Then create a route and controller to generate the sitemap:</p>
        <div style={{ background: '#0a0a0f', borderRadius: 10, padding: '20px 24px', marginBottom: 24, fontFamily: 'monospace', fontSize: 13, color: '#e5e7eb', lineHeight: 1.7, overflowX: 'auto' }}>
          <div style={{ color: '#9ca3af', marginBottom: 8 }}>// routes/web.php</div>
          <div>Route::get("/sitemap.xml", SitemapController::class);</div>
          <div style={{ marginTop: 16, color: '#9ca3af' }}>// app/Http/Controllers/SitemapController.php</div>
          <div>use Spatie{"\"}Sitemap{"\"}Sitemap;</div>
          <div>use Spatie{"\"}Sitemap{"\"}Tags{"\"}Url;</div>
          <div style={{ marginTop: 8 }}>public function __invoke()</div>
          <div>{"{"}</div>
          <div style={{ paddingLeft: 20 }}>return Sitemap::create()</div>
          <div style={{ paddingLeft: 40 }}>-{">"} add(Url::create("/"){"->"}setPriority(1.0))</div>
          <div style={{ paddingLeft: 40 }}>-{">"} add(Url::create("/about"){"->"}setPriority(0.8))</div>
          <div style={{ paddingLeft: 40 }}>-{">"} renderResponse();</div>
          <div>{"}"}</div>
        </div>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Generating URLs from Database Models</h2>
        <p style={{ marginBottom: 16 }}>For dynamic content like blog posts, loop over your models and add a URL for each:</p>
        <div style={{ background: '#0a0a0f', borderRadius: 10, padding: '20px 24px', marginBottom: 24, fontFamily: 'monospace', fontSize: 13, color: '#e5e7eb', lineHeight: 1.7, overflowX: 'auto' }}>
          <div>$sitemap = Sitemap::create()</div>
          <div style={{ paddingLeft: 20 }}>-{">"} add(Url::create("/"));</div>
          <div>Post::published()-{">"} each(function ($post) use ($sitemap) {"{"}</div>
          <div style={{ paddingLeft: 20 }}>$sitemap-{">"} add(</div>
          <div style={{ paddingLeft: 40 }}>Url::create("/blog/" . $post-{">"} slug)</div>
          <div style={{ paddingLeft: 60 }}>-{">"} setLastModificationDate($post-{">"} updated_at)</div>
          <div style={{ paddingLeft: 60 }}>-{">"} setPriority(0.7)</div>
          <div style={{ paddingLeft: 40 }}>);</div>
          <div>{"}"});</div>
        </div>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Caching the Sitemap</h2>
        <p style={{ marginBottom: 24 }}>For large sites, generating the sitemap on every request is expensive. Cache the sitemap output using Laravel cache. Wrap your sitemap generation in Cache::remember with a TTL of several hours or a day. Invalidate the cache when content changes using model observers — when a post is published or updated, clear the sitemap cache so it regenerates fresh on the next request.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Common Laravel Sitemap Issues</h2>
        <p style={{ marginBottom: 12 }}><strong>APP_URL not set correctly:</strong> If APP_URL in your .env is set to localhost or a staging URL, all sitemap URLs will use the wrong base domain. Set APP_URL to your production domain in your production environment configuration.</p>
        <p style={{ marginBottom: 24 }}><strong>Memory limit on large catalogs:</strong> Fetching millions of product URLs in one query will exhaust memory. Use chunk() or lazy() instead of all() when iterating over large model collections to build the sitemap.</p>
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Validate your Laravel sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free — checks all URLs in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Check My Sitemap Free</a>
      </div>
    </div>
  );
}
