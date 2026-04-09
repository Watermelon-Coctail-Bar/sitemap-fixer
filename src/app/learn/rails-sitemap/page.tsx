import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Ruby on Rails Sitemap: Using sitemap_generator Gem',
  description: "How to generate an XML sitemap in Ruby on Rails using the sitemap_generator gem. Configuration, dynamic content, pinging Google, and common fixes.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/rails-sitemap' },
  openGraph: {
    title: 'Ruby on Rails Sitemap: Using sitemap_generator Gem',
    description: 'How to generate an XML sitemap in Ruby on Rails using the sitemap_generator gem. Configuration, dynamic content, pinging Google, and common fixes.',
    url: 'https://sitemapfixer.com/learn/rails-sitemap',
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
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Rails Sitemap</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Ruby on Rails Sitemap: Using sitemap_generator</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Validate your Rails sitemap free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Check My Sitemap</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        <p style={{ marginBottom: 24 }}>Rails does not include sitemap generation in the framework. The most widely used gem is sitemap_generator, which integrates with Rails routing helpers, ActiveRecord models, and supports automatic pinging of Google and Bing when the sitemap is regenerated.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Setup</h2>
        <p style={{ marginBottom: 16 }}>Add gem "sitemap_generator" to your Gemfile and run bundle install. Then generate the config file: rake sitemap:install. This creates config/sitemap.rb:</p>
        <div style={{ background: '#0a0a0f', borderRadius: 10, padding: '20px 24px', marginBottom: 24, fontFamily: 'monospace', fontSize: 13, color: '#e5e7eb', lineHeight: 1.7, overflowX: 'auto' }}>
          <div style={{ color: '#9ca3af', marginBottom: 8 }}># config/sitemap.rb</div>
          <div>SitemapGenerator::Sitemap.default_host = "https://yoursite.com"</div>
          <div>SitemapGenerator::Sitemap.create do</div>
          <div style={{ paddingLeft: 20 }}>add root_path, priority: 1.0, changefreq: "daily"</div>
          <div style={{ paddingLeft: 20 }}>add about_path, priority: 0.8</div>
          <div style={{ paddingLeft: 20 }}>Post.find_each do |post|</div>
          <div style={{ paddingLeft: 40 }}>add post_path(post),</div>
          <div style={{ paddingLeft: 60 }}>lastmod: post.updated_at,</div>
          <div style={{ paddingLeft: 60 }}>priority: 0.7</div>
          <div style={{ paddingLeft: 20 }}>end</div>
          <div>end</div>
        </div>
        <p style={{ marginBottom: 24 }}>Generate the sitemap with rake sitemap:refresh. This creates public/sitemap.xml.gz (compressed by default). Add public/sitemap.xml.gz and public/sitemap.xml to your .gitignore - sitemaps should be generated as part of deployment, not committed to source control.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Regenerating on Deploy</h2>
        <p style={{ marginBottom: 24 }}>Add sitemap generation to your deployment pipeline. With Capistrano, add after "deploy:published", "sitemap:refresh" to your deploy.rb. With Heroku, add a Procfile release command or use the Heroku Scheduler add-on to run rake sitemap:refresh on a schedule. The gem can also ping Google and Bing automatically after generation - add SitemapGenerator::Sitemap.ping_search_engines after create to enable this.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Common Rails Sitemap Issues</h2>
        <p style={{ marginBottom: 12 }}><strong>default_host not set:</strong> Without default_host, the gem cannot generate absolute URLs and will raise a RuntimeError. Always set it to your production domain. Use ENV to manage this across environments: SitemapGenerator::Sitemap.default_host = ENV.fetch("SITE_URL", "https://yoursite.com").</p>
        <p style={{ marginBottom: 12 }}><strong>Memory issues with large datasets:</strong> Using Post.all.each loads all records into memory. Use find_each or find_in_batches which processes records in chunks of 1,000 by default, keeping memory usage flat regardless of dataset size.</p>
        <p style={{ marginBottom: 24 }}><strong>Sitemap hosted on S3:</strong> sitemap_generator supports uploading directly to S3 instead of the public/ directory. Configure SitemapGenerator::Sitemap.adapter with an S3 adapter if your Rails app does not serve static files directly (common with Heroku ephemeral filesystem).</p>
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Validate your Rails sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free - checks every URL in 60 seconds</div>
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
          </ul>
        </div>
    </div>
  );
}
