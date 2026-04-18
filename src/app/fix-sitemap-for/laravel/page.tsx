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
  const faqSchema = "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Should I use spatie/laravel-sitemap or write my own?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Use spatie/laravel-sitemap. It handles edge cases (large files, sitemap indexes, lastmod) that you'll otherwise reimplement badly. For sites over 5M URLs, you might outgrow it and write a custom streaming generator - but that's a small percentage of Laravel apps.\"}},{\"@type\":\"Question\",\"name\":\"Why am I getting out of memory when generating a Laravel sitemap?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"You're probably calling ::all() or a non-chunked ->get() on a table with thousands of rows. Switch to ->chunkById(1000) so PHP's memory stays bounded regardless of catalog size.\"}},{\"@type\":\"Question\",\"name\":\"How do I handle multi-tenant sitemaps in Laravel?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Run the generator per tenant via stancl/tenancy's tenancy()->runForMultiple() or equivalent. Each tenant writes its own sitemap file to its domain's public path. Don't share cached sitemaps across tenants.\"}}]}";

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />

      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>
        {'  /  '}
        <a href="/fix-sitemap-for" style={{ color: '#2d5be3', textDecoration: 'none' }}>Platform Guides</a>
        {'  /  '}
        <span>Laravel</span>
      </nav>

      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>
        Fix Your Sitemap for Laravel
      </h1>
      <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        Laravel doesn't ship a built-in sitemap generator, so most teams use <code>spatie/laravel-sitemap</code>. Memory blowups from loading entire Eloquent collections, stale sitemaps, and missing multi-tenant domains are the typical failure modes.
      </p>

      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Analyze your Laravel sitemap now</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>
          Try Sitemap Fixer Free
        </a>
      </div>

      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 24 }}>
        The standard Laravel sitemap pattern: an Artisan command runs on cron, builds a sitemap index, writes per-entity files to <code>public/sitemaps/</code>. When it goes wrong, it goes wrong predictably: someone loads <code>::all()</code> on a 400k-row table, PHP OOMs, the cron job stops firing, and the sitemap slowly rots until somebody notices rankings have tanked.
      </p>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 32 }}>
        Debugged a Laravel marketplace app last month. <code>GenerateSitemap</code> command had been failing silently for six weeks because a developer swapped <code>chunkById(500)</code> for <code>get()</code> "to make it simpler". The sitemap was frozen at 38k URLs while the actual catalog grew to 62k. GSC coverage dropped 18% during that window. Switching back to <code>chunkById</code> fixed the OOM; running once caught everything up.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Working Artisan command</h2>
      <div style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
        <pre style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: '#1c1c26', whiteSpace: 'pre-wrap', fontFamily: 'DM Mono, monospace' }}>{`// app/Console/Commands/GenerateSitemap.php
use Spatie\\Sitemap\\Sitemap;
use Spatie\\Sitemap\\SitemapIndex;
use Spatie\\Sitemap\\Tags\\Url;

public function handle(): int
{
    $index = SitemapIndex::create();
    $shardSize = 40000;

    // Static pages
    $static = Sitemap::create()
        ->add('/')
        ->add('/about')
        ->add('/pricing');
    $static->writeToFile(public_path('sitemaps/static.xml'));
    $index->add('/sitemaps/static.xml');

    // Posts, chunked to avoid OOM
    $shard = 0;
    $sitemap = Sitemap::create();
    $count = 0;

    Post::where('published', true)
        ->whereNull('deleted_at')
        ->orderBy('id')
        ->chunkById(1000, function ($posts) use (&$sitemap, &$count, &$shard, &$index, $shardSize) {
            foreach ($posts as $post) {
                $sitemap->add(
                    Url::create(route('posts.show', $post))
                        ->setLastModificationDate($post->updated_at)
                        ->setChangeFrequency(Url::CHANGE_FREQUENCY_WEEKLY)
                        ->setPriority(0.7)
                );
                if (++$count >= $shardSize) {
                    $sitemap->writeToFile(public_path("sitemaps/posts-{$shard}.xml"));
                    $index->add("/sitemaps/posts-{$shard}.xml");
                    $shard++;
                    $sitemap = Sitemap::create();
                    $count = 0;
                }
            }
        });

    if ($count > 0) {
        $sitemap->writeToFile(public_path("sitemaps/posts-{$shard}.xml"));
        $index->add("/sitemaps/posts-{$shard}.xml");
    }

    $index->writeToFile(public_path('sitemap.xml'));
    return self::SUCCESS;
}`}</pre>
      </div>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common Laravel Sitemap Issues</h2>
      <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li><code>::all()</code> or non-chunked <code>-&gt;get()</code> on large tables causing OOM</li>
        <li>Soft-deleted records leaking in when SoftDeletes global scope is bypassed</li>
        <li><code>APP_URL</code> pointing at localhost in production <code>.env</code></li>
        <li>Single sitemap file over 50MB because pagination isn't used</li>
        <li>Multi-tenant apps serving one tenant's sitemap to every domain</li>
        <li>Sitemap regenerating on every request via a controller route, instead of being cached to a file</li>
        <li>Cron not running (or running as the wrong user) so regeneration silently stops</li>
        <li>Laravel's <code>route()</code> helper returning localhost URLs in scheduled commands because of missing <code>URL::forceRootUrl()</code></li>
      </ul>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Scheduling and cron</h2>
      <div style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
        <pre style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: '#1c1c26', whiteSpace: 'pre-wrap', fontFamily: 'DM Mono, monospace' }}>{`// app/Console/Kernel.php (or routes/console.php in Laravel 11)
$schedule->command('sitemap:generate')
    ->hourly()
    ->onOneServer()
    ->withoutOverlapping()
    ->appendOutputTo(storage_path('logs/sitemap.log'));

// Verify scheduler is running
* * * * * cd /path/to/app && php artisan schedule:run >> /dev/null 2>&1`}</pre>
      </div>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Multi-tenant sites</h2>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        For <code>stancl/tenancy</code> or <code>hyn/multi-tenant</code> setups, wrap the generator in the tenant context and write the file to that tenant's public path. Don't try to share a single sitemap.xml across tenants - each tenant has different URLs, and Google treats each domain as a separate property. Cron the command once per tenant, or use a scheduled loop that iterates active tenants.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Step-by-Step Fix Guide</h2>
      <ol style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li style={{ marginBottom: 12 }}>Install <code>composer require spatie/laravel-sitemap</code> and publish its config</li>
        <li style={{ marginBottom: 12 }}>Verify <code>APP_URL</code> in <code>.env</code> matches your production domain</li>
        <li style={{ marginBottom: 12 }}>Create a <code>GenerateSitemap</code> command that builds an index and per-entity shards</li>
        <li style={{ marginBottom: 12 }}>Use <code>chunkById(1000)</code> on any Eloquent query that might exceed 10k rows</li>
        <li style={{ marginBottom: 12 }}>Cap shards at 40k URLs so you stay under the 50k sitemap limit with headroom</li>
        <li style={{ marginBottom: 12 }}>Schedule hourly with <code>-&gt;onOneServer()</code> and <code>-&gt;withoutOverlapping()</code></li>
        <li style={{ marginBottom: 12 }}>Verify cron is firing: <code>tail -f storage/logs/sitemap.log</code></li>
        <li style={{ marginBottom: 12 }}>Test with <code>curl https://yoursite.com/sitemap.xml</code> - should return 200 and an index</li>
        <li style={{ marginBottom: 12 }}>Submit to Google Search Console</li>
      </ol>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, marginTop: 40 }}>Frequently Asked Questions</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
        <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Should I use spatie/laravel-sitemap or write my own?</div>
          <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Use spatie/laravel-sitemap. It handles edge cases (large files, indexes, lastmod) that you&apos;d otherwise reimplement badly. For sites over 5M URLs you might outgrow it, but that&apos;s rare.</div>
        </div>
        <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Why am I getting out of memory when generating a Laravel sitemap?</div>
          <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>You&apos;re probably calling ::all() or a non-chunked -&gt;get() on a large table. Switch to -&gt;chunkById(1000) so PHP&apos;s memory stays bounded regardless of catalog size.</div>
        </div>
        <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>How do I handle multi-tenant sitemaps in Laravel?</div>
          <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Run the generator per tenant via stancl/tenancy&apos;s tenancy()-&gt;runForMultiple() or equivalent. Each tenant writes its own sitemap to its public path.</div>
        </div>
      </div>

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
