import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fix Sitemap for Ruby on Rails - Complete Guide',
  description: 'Optimize your Rails sitemap: configure the sitemap_generator gem, upload to S3, refresh lastmod, and handle sitemap indexes for large apps.',
  alternates: { canonical: 'https://sitemapfixer.com/fix-sitemap-for/rails' },
  openGraph: {
    title: 'Fix Sitemap for Ruby on Rails - Complete Guide',
    description: 'Optimize your Rails sitemap: configure the sitemap_generator gem, upload to S3, refresh lastmod, and handle sitemap indexes for large apps.',
    url: 'https://sitemapfixer.com/fix-sitemap-for/rails',
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
  const faqSchema = "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Why does my Rails sitemap disappear on Heroku?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Heroku dynos use an ephemeral filesystem - anything you write to public/ is gone on restart. Configure SitemapGenerator with an S3 adapter so files are uploaded to durable storage, then serve them via a CloudFront distribution or an Rails redirect.\"}},{\"@type\":\"Question\",\"name\":\"Should I use sitemap_generator or build sitemap in a controller?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Use the gem. Generating on-request from a controller action burns compute on every crawler hit. sitemap_generator writes .xml.gz files on a schedule, which Rack serves directly - orders of magnitude faster.\"}},{\"@type\":\"Question\",\"name\":\"How do I handle Rails 50k URL split?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"sitemap_generator shards automatically at 50,000 URLs per file and generates a sitemap index referencing each shard. You don't need to manage this - just ensure default_host is set and find_each is used for large queries.\"}}]}";

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px', fontFamily: 'Geist, sans-serif' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'Fix Sitemap for Ruby on Rails - Complete Guide', description: 'Optimize your Rails sitemap: configure the sitemap_generator gem, upload to S3, refresh lastmod, and handle sitemap indexes for large apps.', url: 'https://sitemapfixer.com/fix-sitemap-for/rails', author: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com' }, publisher: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com', logo: { '@type': 'ImageObject', url: 'https://sitemapfixer.com/opengraph-image' } }, datePublished: '2026-04-17', mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://sitemapfixer.com/fix-sitemap-for/rails' } }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sitemapfixer.com/' }, { '@type': 'ListItem', position: 2, name: 'Fix by Platform', item: 'https://sitemapfixer.com/fix-sitemap-for' }, { '@type': 'ListItem', position: 3, name: 'Fix Sitemap for Ruby on Rails - Complete Guide', item: 'https://sitemapfixer.com/fix-sitemap-for/rails' }] }),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />

      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>
        {'  /  '}
        <a href="/fix-sitemap-for" style={{ color: '#2d5be3', textDecoration: 'none' }}>Platform Guides</a>
        {'  /  '}
        <span>Ruby on Rails</span>
      </nav>

      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>
        Fix Your Sitemap for Ruby on Rails
      </h1>
      <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        Rails apps almost always use the <code>sitemap_generator</code> gem to emit <code>sitemap.xml.gz</code>. Incorrect <code>default_host</code>, missing <code>updated_at</code> on ActiveRecord models, and forgetting to upload to S3 or CDN on ephemeral-filesystem hosts are the usual failure points.
      </p>

      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Analyze your Rails sitemap now</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>
          Try Sitemap Fixer Free
        </a>
      </div>

      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 24 }}>
        The canonical Rails sitemap pattern: a <code>config/sitemap.rb</code> file that uses <code>find_each</code> over your ActiveRecord models, a <code>rake sitemap:refresh</code> task run on cron (or Sidekiq Cron), and the output stored either on disk or in S3. Each piece is simple. Skip one and you ship a broken sitemap.
      </p>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 32 }}>
        Debugged a Rails SaaS on Heroku last year. Sitemap was empty, returning just the index with two shards that didn't exist. The rake task was running fine - in the release dyno, which immediately got torn down. The generated files went with it. Switched to the S3 adapter, kept files in a bucket, added a CloudFront in front. Problem vanished.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Working config/sitemap.rb</h2>
      <div style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
        <pre style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: '#1c1c26', whiteSpace: 'pre-wrap', fontFamily: 'DM Mono, monospace' }}>{`SitemapGenerator::Sitemap.default_host = 'https://example.com'
SitemapGenerator::Sitemap.sitemaps_host = 'https://d1234.cloudfront.net'
SitemapGenerator::Sitemap.adapter = SitemapGenerator::AwsSdkAdapter.new(
  ENV['S3_BUCKET'],
  aws_access_key_id: ENV['AWS_KEY'],
  aws_secret_access_key: ENV['AWS_SECRET'],
  aws_region: 'us-east-1',
  acl: 'public-read'
)

SitemapGenerator::Sitemap.create do
  add '/', changefreq: 'daily', priority: 1.0
  add '/about', changefreq: 'monthly'
  add '/pricing', changefreq: 'monthly'

  # Blog posts
  Post.where(published: true)
      .where('published_at <= ?', Time.current)
      .find_each(batch_size: 1000) do |post|
    add post_path(post),
        lastmod: post.updated_at,
        changefreq: 'weekly',
        priority: 0.7
  end

  # Products with images
  Product.active.find_each(batch_size: 1000) do |product|
    add product_path(product),
        lastmod: product.updated_at,
        images: product.images.map { |img|
          { loc: img.url, title: product.name }
        }
  end
end`}</pre>
      </div>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common Rails Sitemap Issues</h2>
      <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li><code>default_host</code> not set, sitemap emits relative URLs</li>
        <li>Missing <code>updated_at</code> so <code>lastmod</code> falls back to nil or <code>Time.now</code></li>
        <li>Heroku deploys losing <code>sitemap.xml.gz</code> on dyno restart (ephemeral FS)</li>
        <li>Scoped queries missing <code>published_at &lt;= Time.current</code> - drafts leak out</li>
        <li>Admin/internal routes exposed because they weren't excluded from the sitemap</li>
        <li>Non-batched queries (<code>.each</code> instead of <code>.find_each</code>) causing OOM on large tables</li>
        <li>Sitemap generator crashing because an image URL was nil and the gem expected a string</li>
        <li>Robots.txt pointing at <code>/sitemap.xml</code> but actual file served at <code>/sitemaps/sitemap.xml.gz</code></li>
      </ul>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Heroku, Fly.io, and ephemeral filesystems</h2>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        If you're on any platform where the filesystem doesn't persist between restarts (Heroku, Fly.io, Render without a volume), you must upload generated files somewhere durable. <code>sitemap_generator</code> has built-in adapters for AWS S3, Google Cloud Storage, and WasabiSys. Configure one of them, point <code>sitemaps_host</code> at your CDN, and add a redirect in <code>routes.rb</code> from <code>/sitemap.xml</code> to the CDN URL so Google can find it at the canonical location.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Scheduling</h2>
      <div style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
        <pre style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: '#1c1c26', whiteSpace: 'pre-wrap', fontFamily: 'DM Mono, monospace' }}>{`# Sidekiq Cron (config/schedule.yml or initializer)
sitemap_refresh:
  cron: "0 * * * *"   # hourly
  class: "SitemapRefreshJob"
  queue: low

# Or with whenever gem (config/schedule.rb)
every 1.hour do
  rake "sitemap:refresh"
end

# Or a plain system cron on a worker dyno / server
0 * * * * cd /app && bundle exec rake sitemap:refresh`}</pre>
      </div>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Step-by-Step Fix Guide</h2>
      <ol style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li style={{ marginBottom: 12 }}>Add <code>gem &apos;sitemap_generator&apos;</code>, bundle, run <code>rails generate sitemap:install</code></li>
        <li style={{ marginBottom: 12 }}>Set <code>default_host</code> in <code>config/sitemap.rb</code></li>
        <li style={{ marginBottom: 12 }}>Ensure every model has <code>updated_at</code>; pass <code>lastmod: obj.updated_at</code> to every <code>add</code></li>
        <li style={{ marginBottom: 12 }}>Scope queries to published records and use <code>find_each(batch_size: 1000)</code></li>
        <li style={{ marginBottom: 12 }}>On ephemeral hosts, configure the S3 (or GCS) adapter and a CDN</li>
        <li style={{ marginBottom: 12 }}>Schedule <code>rake sitemap:refresh</code> hourly via Sidekiq Cron, whenever, or system cron</li>
        <li style={{ marginBottom: 12 }}>Verify with <code>curl -L https://yoursite.com/sitemap.xml.gz | zcat | head</code></li>
        <li style={{ marginBottom: 12 }}>Submit to Google Search Console</li>
      </ol>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, marginTop: 40 }}>Frequently Asked Questions</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
        <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Why does my Rails sitemap disappear on Heroku?</div>
          <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Heroku dynos use an ephemeral filesystem - anything written to public/ is gone on restart. Configure SitemapGenerator with an S3 adapter so files go to durable storage, then serve via CloudFront or a Rails redirect.</div>
        </div>
        <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Should I use sitemap_generator or build sitemap in a controller?</div>
          <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Use the gem. Generating on-request from a controller burns compute on every crawler hit. sitemap_generator writes .xml.gz files on schedule, which Rack serves directly.</div>
        </div>
        <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>How do I handle Rails 50k URL split?</div>
          <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>sitemap_generator shards automatically at 50,000 URLs per file and generates a sitemap index. Just ensure default_host is set and find_each is used for large queries.</div>
        </div>
      </div>

      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Analyze your Rails sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Find all issues in your sitemap - free, no credit card needed</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>
          Analyze My Sitemap Free
        </a>
      </div>

      <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
        <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Other platform guides</div>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <li><a href="/fix-sitemap-for/django" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Django</a></li>
          <li><a href="/fix-sitemap-for/laravel" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Laravel</a></li>
          <li><a href="/fix-sitemap-for/wordpress" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>WordPress</a></li>
          <li><a href="/fix-sitemap-for/drupal" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Drupal</a></li>
          <li><a href="/learn/rails-sitemap" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Rails Sitemap Guide</a></li>
        </ul>
      </div>
    </div>
  );
}
