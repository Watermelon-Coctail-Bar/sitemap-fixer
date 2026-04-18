import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fix Sitemap for Large Sites (10k+ Pages)',
  description: 'Sitemap strategy for enterprise sites: sitemap indexes, crawl budget optimization, priority tiers, and monitoring at scale.',
  alternates: { canonical: 'https://sitemapfixer.com/fix-sitemap-for/large-sites' },
  openGraph: {
    title: 'Fix Sitemap for Large Sites (10k+ Pages)',
    description: 'Sitemap strategy for enterprise sites: sitemap indexes, crawl budget optimization, priority tiers, and monitoring at scale.',
    url: 'https://sitemapfixer.com/fix-sitemap-for/large-sites',
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
  const faqSchema = "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"What's the sitemap file size and URL limit?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"50,000 URLs or 50MB uncompressed per file. A sitemap index can reference up to 50,000 sub-sitemaps, giving a theoretical limit of 2.5 billion URLs. In practice, you want each shard well under 40,000 URLs for headroom and faster regeneration.\"}},{\"@type\":\"Question\",\"name\":\"How do I optimize crawl budget on a large site?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Accurate lastmod dates are the single biggest lever - Google uses them to prioritize re-crawls. Remove dead URLs from the sitemap promptly, shard by content type so coverage reports are readable, and block low-value URL patterns (filters, search, session IDs) in robots.txt so they don't eat budget.\"}},{\"@type\":\"Question\",\"name\":\"Should I regenerate the entire sitemap on every change?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"On sites over 500k URLs, no - regenerate only the shards containing changed content. Full regeneration on every publish is a common bottleneck for news sites and ecom stores with high update velocity. Structure your generator to rewrite one shard at a time, triggered by content events.\"}}]}";

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px', fontFamily: 'Geist, sans-serif' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'Fix Sitemap for Large Sites (10k+ Pages)', description: 'Sitemap strategy for enterprise sites: sitemap indexes, crawl budget optimization, priority tiers, and monitoring at scale.', url: 'https://sitemapfixer.com/fix-sitemap-for/large-sites', author: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com' }, publisher: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com', logo: { '@type': 'ImageObject', url: 'https://sitemapfixer.com/opengraph-image' } }, datePublished: '2026-04-17', mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://sitemapfixer.com/fix-sitemap-for/large-sites' } }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sitemapfixer.com/' }, { '@type': 'ListItem', position: 2, name: 'Fix by Platform', item: 'https://sitemapfixer.com/fix-sitemap-for' }, { '@type': 'ListItem', position: 3, name: 'Fix Sitemap for Large Sites (10k+ Pages)', item: 'https://sitemapfixer.com/fix-sitemap-for/large-sites' }] }),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />

      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>
        {'  /  '}
        <a href="/fix-sitemap-for" style={{ color: '#2d5be3', textDecoration: 'none' }}>Platform Guides</a>
        {'  /  '}
        <span>Large Sites (10k+ pages)</span>
      </nav>

      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>
        Fix Your Sitemap for Large Sites (10k+ pages)
      </h1>
      <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        Sitemap strategy for sites over 10,000 pages: sitemap indexes, crawl budget optimization, priority tiers, and monitoring at scale. Everything gets harder when the sitemap stops fitting in a single file.
      </p>

      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Analyze your large site sitemap now</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>
          Try Sitemap Fixer Free
        </a>
      </div>

      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 24 }}>
        At 10k URLs you can still get away with a single file. At 50k you hit the hard cap and need an index. At 500k you need to rethink regeneration: full rebuilds take longer than your content update cycle, and you start shipping stale sitemaps. At 5M+, sitemap architecture becomes a serious engineering problem.
      </p>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 32 }}>
        Worked on a news publisher with 4.2M article URLs. Full sitemap regeneration took 47 minutes. They were running it hourly, and the previous run was still finishing when the next one started. CPU was pegged 24/7 for a job that should complete in minutes. Switching to shard-level regeneration (only rewrite files containing changed articles) dropped the per-update time to under 30 seconds.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Hard limits to know</h2>
      <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li><strong>50,000 URLs per sitemap file.</strong> Hard cap. File is rejected if exceeded.</li>
        <li><strong>50 MB uncompressed per file.</strong> Usually hit first on sites with long URLs or lots of image entries.</li>
        <li><strong>50,000 sub-sitemaps per index.</strong> So the theoretical max is 2.5 billion URLs from one index.</li>
        <li><strong>Indexes can't reference other indexes.</strong> You get one level of nesting: one index → up to 50k leaf files.</li>
      </ul>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Recommended sharding strategy</h2>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 16 }}>
        Shard by content type first, then by ID range within each type:
      </p>
      <div style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
        <pre style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: '#1c1c26', whiteSpace: 'pre-wrap', fontFamily: 'DM Mono, monospace' }}>{`/sitemap.xml                 # sitemap index
  /sitemap-static.xml         # ~50 URLs, static marketing pages
  /sitemap-categories.xml     # ~1,500 URLs, category pages
  /sitemap-articles-0.xml     # articles ID 1-40000
  /sitemap-articles-1.xml     # articles ID 40001-80000
  ...
  /sitemap-articles-104.xml   # most recent articles
  /sitemap-users-0.xml        # public user profiles
  /sitemap-images-0.xml       # image sitemap for galleries`}</pre>
      </div>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        Why this structure: GSC shows coverage per file. When articles shard 47 drops from 100% indexed to 62%, you know exactly which ID range has the problem. You wouldn't get that signal from one giant file.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Lastmod is the most important field</h2>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        Google publicly said priority and changefreq are ignored, but it uses <code>lastmod</code> to prioritize re-crawls. On a large site, accurate lastmod is the single highest-leverage optimization. If every URL has the same lastmod (generator time), Google can't tell which pages changed and falls back to its own scheduling - which is less efficient than your ground truth. Derive lastmod from the actual content update timestamp, not the generation time.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Incremental regeneration</h2>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        Stop regenerating the whole sitemap on every content change. Track which shard a given URL lives in (ID-based sharding makes this trivial: <code>floor(post_id / 40000)</code>), and rewrite only that shard when a post changes. Regenerate the index only when shard filenames change (new shard added, old one removed). For very large sites, a queue-based approach works well: content changes enqueue "shard N dirty" jobs that batch into regenerations.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Monitoring at scale</h2>
      <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li><strong>GSC coverage per sub-sitemap</strong> - check weekly; drops below 80% warrant investigation</li>
        <li><strong>Server log analysis</strong> - what's Googlebot actually crawling? If it's burning budget on filter URLs, your robots.txt needs work</li>
        <li><strong>Generation time</strong> - if your sitemap build starts taking longer than your update cycle, something will break silently</li>
        <li><strong>File size per shard</strong> - if any shard approaches 40MB, split it</li>
        <li><strong>Lastmod distribution</strong> - plot the histogram. If everything has today's date, your generator is lying</li>
      </ul>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common large-site mistakes</h2>
      <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li>Single sitemap file over 50MB or 50k URLs - Google rejects it entirely</li>
        <li>Full regeneration on every update when incremental would work</li>
        <li>No <code>lastmod</code>, or generator-time <code>lastmod</code> on every URL</li>
        <li>Sub-sitemap URLs mixed across domains (sitemap must reference only URLs on the same host)</li>
        <li>Robots.txt not updated to point at the sitemap index</li>
        <li>CDN caching the sitemap too aggressively so crawlers see stale content</li>
        <li>Sharding by hash instead of by ID range, making incremental regen impossible</li>
        <li>No monitoring - first sign of trouble is GSC rankings dropping weeks later</li>
      </ul>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Step-by-Step Fix Guide</h2>
      <ol style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li style={{ marginBottom: 12 }}>Shard by content type, then by ID range. Target ~40k URLs per file</li>
        <li style={{ marginBottom: 12 }}>Implement accurate <code>lastmod</code> from content update timestamps</li>
        <li style={{ marginBottom: 12 }}>Move to incremental regeneration: rewrite only the shard containing changed content</li>
        <li style={{ marginBottom: 12 }}>Block low-value URL patterns in robots.txt (filters, search, sessions, trackers)</li>
        <li style={{ marginBottom: 12 }}>Submit the sitemap index (not individual shards) to GSC for per-shard coverage data</li>
        <li style={{ marginBottom: 12 }}>Monitor per-shard coverage weekly. Flag drops below 80%</li>
        <li style={{ marginBottom: 12 }}>Audit Googlebot server logs monthly to confirm crawl budget spends match your priorities</li>
        <li style={{ marginBottom: 12 }}>Set alerts on generation time, file size, and coverage drops</li>
      </ol>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, marginTop: 40 }}>Frequently Asked Questions</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
        <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>What&apos;s the sitemap file size and URL limit?</div>
          <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>50,000 URLs or 50MB uncompressed per file. A sitemap index can reference up to 50,000 sub-sitemaps. Keep each shard well under 40,000 URLs for headroom and faster regeneration.</div>
        </div>
        <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>How do I optimize crawl budget on a large site?</div>
          <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Accurate lastmod is the single biggest lever - Google uses it to prioritize re-crawls. Remove dead URLs promptly, shard by content type so coverage reports are readable, and block low-value URL patterns in robots.txt.</div>
        </div>
        <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Should I regenerate the entire sitemap on every change?</div>
          <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>On sites over 500k URLs, no - regenerate only the shards containing changed content. Structure your generator to rewrite one shard at a time, triggered by content events.</div>
        </div>
      </div>

      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Analyze your large-site sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Find all issues in your sitemap - free, no credit card needed</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>
          Analyze My Sitemap Free
        </a>
      </div>

      <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
        <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Other platform guides</div>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <li><a href="/fix-sitemap-for/wordpress" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>WordPress</a></li>
          <li><a href="/fix-sitemap-for/shopify" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Shopify</a></li>
          <li><a href="/fix-sitemap-for/nextjs" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Next.js</a></li>
          <li><a href="/fix-sitemap-for/ecommerce" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>E-commerce Sites</a></li>
        </ul>
      </div>
    </div>
  );
}
