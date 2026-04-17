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
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px', fontFamily: 'Geist, sans-serif' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>
        {'  '}
        <a href="/fix-sitemap-for" style={{ color: '#2d5be3', textDecoration: 'none' }}>Platform Guides</a>
        {'  '}
        <span>Ruby on Rails</span>
      </nav>

      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>
        Fix Your Sitemap for Ruby on Rails
      </h1>
      <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        Rails apps almost always use the sitemap_generator gem to emit sitemap.xml.gz. Incorrect default_host, missing lastmod on ActiveRecord models, and forgetting to upload to S3 or CDN are the usual failure points.
      </p>

      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Analyze your Rails sitemap now </span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>
          Try Sitemap Fixer Free
        </a>
      </div>

      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 24 }}>
        The canonical Rails pattern is a config/sitemap.rb file and a rake sitemap:refresh task run on schedule.
        This guide covers the configuration and deployment patterns that keep the sitemap fast and accurate.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common Ruby on Rails Sitemap Issues</h2>
      <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li>SitemapGenerator::Sitemap.default_host not set, generating sitemap with relative URLs</li>
        <li>ActiveRecord models without updated_at so lastmod falls back to nil or Time.now</li>
        <li>Heroku deploys losing sitemap.xml.gz on dyno restart because it writes to ephemeral filesystem</li>
        <li>Scoped queries missing default_scope where(&apos;published_at &lt;= ?&apos;, Time.now) - unpublished content leaks out</li>
        <li>ActionController routes exposed that should be noindex (admin, internal tools)</li>
        <li>Sitemap index not rebuilt when the app crosses the 50,000 URL threshold</li>
      </ul>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Step-by-Step Fix Guide</h2>
      <ol style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li style={{ marginBottom: 12 }}>Add gem &apos;sitemap_generator&apos; to Gemfile, bundle install, then run rails generate sitemap:install</li>
        <li style={{ marginBottom: 12 }}>In config/sitemap.rb, set SitemapGenerator::Sitemap.default_host = &apos;https://yourdomain.com&apos;</li>
        <li style={{ marginBottom: 12 }}>Add updated_at columns via migration and pass lastmod: obj.updated_at to every add call</li>
        <li style={{ marginBottom: 12 }}>Scope every query to published records: Post.where(published: true).find_each(batch_size: 1000)</li>
        <li style={{ marginBottom: 12 }}>For Heroku or other ephemeral environments, configure SitemapGenerator::S3Adapter and upload to S3 with a CloudFront in front</li>
        <li style={{ marginBottom: 12 }}>Schedule refresh with a cron job: rake sitemap:refresh (or sidekiq-cron) so sitemap rebuilds hourly</li>
        <li style={{ marginBottom: 12 }}>Run Sitemap Fixer against yourdomain.com/sitemap.xml.gz and submit to Google Search Console</li>
      </ol>

      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Analyze your Rails sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Find all issues in your sitemap - free, no signup required</div>
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
