import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Incorrect Priority Values in Sitemap – Fix, Examples & Best Practices | SitemapFixer',
  description: 'Sitemap priority values are often misused. Learn the correct way to set priority in your XML sitemap and how it affects Googlebot's crawl decisions.',
  alternates: { canonical: 'https://sitemapfixer.com/sitemap-errors/incorrect-priority' },
  openGraph: {
    title: 'Incorrect Priority Values in Sitemap – Fix & Best Practices',
    description: 'Sitemap priority values are often misused. Learn the correct way to set priority in your XML sitemap and how it affects Googlebot's crawl decisions.',
    url: 'https://sitemapfixer.com/sitemap-errors/incorrect-priority',
    type: 'article',
  },
};

export default function Page() {
  const faqSchema = "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Does Google actually use sitemap priority?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Google has stated priority is \\\"used as hints\\\" and doesn't guarantee crawl order. But meaningful differentiation is better than uniform values.\"}},{\"@type\":\"Question\",\"name\":\"What priority should my homepage be?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Always 1.0. Your homepage is the most important page on your site.\"}},{\"@type\":\"Question\",\"name\":\"Should I include pages with priority 0.0?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"If a page has such low value it gets a 0.0 priority, consider whether it should be in the sitemap at all.\"}}]}";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqSchema }}
      />
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px', fontFamily: 'Geist, sans-serif' }}>
        {/* Breadcrumb */}
        <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
          <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>
          {' → '}
          <a href="/sitemap-errors" style={{ color: '#2d5be3', textDecoration: 'none' }}>Sitemap Errors</a>
          {' → '}
          <span>Incorrect Priority Values in Sitemap</span>
        </nav>

        <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>
          Incorrect Priority Values in Your Sitemap
        </h1>

        <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 40 }}>
          The <priority> tag in XML sitemaps is one of the most misunderstood and misused elements in technical SEO. Setting all pages to priority 1.0 is not a trick to get more crawls — it's a signal that tells Google your priority system is meaningless.
        </p>

        {/* CTA Box */}
        <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 4 }}>Find this error in your sitemap</div>
            <div style={{ fontSize: 13, color: '#6b6b7d' }}>Analyze your sitemap for free — get a full report in 60 seconds</div>
          </div>
          <a href="/" style={{ background: '#0a0a0f', color: 'white', padding: '12px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 14, whiteSpace: 'nowrap' }}>
            Analyze My Sitemap →
          </a>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>What is this error?</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>The <priority> tag indicates the relative importance of a URL compared to other URLs on your site. Valid values range from 0.0 to 1.0. The key word is "relative" — it's only meaningful when you differentiate between page types.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Why does it happen?</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>Most CMS plugins default to 1.0 for all pages, or set priorities randomly without strategic logic. Many site owners never review or configure priority settings after initial setup.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Why does it hurt SEO?</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>When every page has the same priority, Google ignores the tag entirely. Worse, if you set all pages to 1.0, you miss the opportunity to signal that your homepage and core conversion pages are more important than blog posts or tag pages.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How to detect it</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>Sitemap Fixer analyzes the distribution of priority values across your sitemap and flags sites where 90%+ of pages share the same priority value.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How to fix it</h2>
        <div style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
          <pre style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: '#1c1c26', whiteSpace: 'pre-wrap', fontFamily: 'DM Mono, monospace' }}>1. Homepage: 1.0
2. Core tool/product/service pages: 0.9
3. Blog posts and guides: 0.8
4. Category/tag pages: 0.6
5. Paginated pages: 0.4
6. Never use 1.0 for more than 5-10% of your pages.</pre>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Real-world example</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>An e-commerce site had all 15,000 product pages set to priority 1.0. After implementing a tiered system (bestsellers 0.9, regular products 0.7, out-of-stock 0.3), crawl distribution improved measurably within 8 weeks.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common mistakes</h2>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 32 }}>
          <li style={{ marginBottom: 8 }}>Setting all pages to priority 1.0</li>
          <li style={{ marginBottom: 8 }}>Setting homepage to less than 1.0</li>
          <li style={{ marginBottom: 8 }}>Using random or auto-generated priority values</li>
        </ul>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, marginTop: 40 }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Does Google actually use sitemap priority?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Google has stated priority is "used as hints" and doesn't guarantee crawl order. But meaningful differentiation is better than uniform values.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>What priority should my homepage be?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Always 1.0. Your homepage is the most important page on your site.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Should I include pages with priority 0.0?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>If a page has such low value it gets a 0.0 priority, consider whether it should be in the sitemap at all.</div>
          </div>
        </div>

        {/* Final CTA */}
        <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
          <div style={{ fontSize: 22, fontWeight: 700, color: 'white', marginBottom: 8 }}>Fix this in your sitemap now</div>
          <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Enter your domain and get a full sitemap audit in 60 seconds</div>
          <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 32px', borderRadius: 8, textDecoration: 'none', fontWeight: 700, fontSize: 15 }}>
            Analyze My Sitemap Free →
          </a>
        </div>

        {/* Related */}
        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Related sitemap errors</div>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <li><a href="/sitemap-errors/changefreq-misuse" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Changefreq Misuse</a></li>
            <li><a href="/sitemap-errors/too-many-urls" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Too Many Urls</a></li>
            <li><a href="/sitemap-errors/duplicate-urls" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Duplicate Urls</a></li>
          </ul>
          <div style={{ marginTop: 16 }}>
            <a href="/sitemap-errors" style={{ color: '#2d5be3', fontSize: 13 }}>← All sitemap errors</a>
          </div>
        </div>
      </div>
    </>
  );
}
