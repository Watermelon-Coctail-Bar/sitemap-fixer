import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'changefreq Misuse in Sitemap – Fix, Examples & Best Practices | SitemapFixer',
  description: 'Is your sitemap using changefreq correctly? Setting everything to "daily" or "always" is a common mistake that hurts crawl efficiency. Learn the correct approach.',
  alternates: { canonical: 'https://sitemapfixer.com/sitemap-errors/changefreq-misuse' },
  openGraph: {
    title: 'changefreq Misuse in Sitemap – Fix & Best Practices',
    description: 'Is your sitemap using changefreq correctly? Setting everything to "daily" or "always" is a common mistake that hurts crawl efficiency. Learn the correct approach.',
    url: 'https://sitemapfixer.com/sitemap-errors/changefreq-misuse',
    type: 'article',
  },
};

export default function Page() {
  const faqSchema = "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Does Google use changefreq to decide crawl frequency?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Partially. Google treats it as a hint. Bing follows it more strictly. Accurate signals build crawler trust over time.\"}},{\"@type\":\"Question\",\"name\":\"What is the difference between always and hourly?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"\\\"Always\\\" means the page changes every time it is accessed (dynamic content). \\\"Hourly\\\" means it updates roughly once an hour. Most sites should never use \\\"always\\\".\"}},{\"@type\":\"Question\",\"name\":\"Can incorrect changefreq hurt crawl budget?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes. Overestimating change frequency teaches crawlers your signals are unreliable, reducing the weight they assign to your sitemap hints.\"}}]}";

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
          <span>changefreq Misuse in Sitemap</span>
        </nav>

        <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>
          changefreq Misuse in Your Sitemap
        </h1>

        <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 40 }}>
          Setting every page in your sitemap to changefreq="daily" might seem like a way to get Googlebot to crawl more frequently. In reality, it's a signal Google largely ignores — and setting it inaccurately can reduce your credibility with the crawler.
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
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>The <changefreq> tag in XML sitemaps hints to search engines how often page content changes. Valid values are: always, hourly, daily, weekly, monthly, yearly, never. Google has confirmed it treats this as a hint, not a directive.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Why does it happen?</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>CMS plugins often default to "daily" for all content. Many site owners set high change frequencies hoping for more frequent crawling, without understanding that inaccurate signals reduce crawler trust.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Why does it hurt SEO?</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>If your pages are set to "daily" but only change monthly, Googlebot learns your changefreq signals are unreliable and discounts them. This can result in less frequent crawling of pages that actually do change frequently.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How to detect it</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>Sitemap Fixer analyzes your changefreq distribution. A red flag is when 90%+ of pages share the same changefreq value, especially "daily" or "always".</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How to fix it</h2>
        <div style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
          <pre style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: '#1c1c26', whiteSpace: 'pre-wrap', fontFamily: 'DM Mono, monospace' }}>1. Homepage: daily (it changes with new content)
2. Blog/news posts: monthly (after initial publication)
3. Core tool pages: weekly
4. Evergreen guides: monthly
5. Archive/old pages: yearly
6. Retired pages you're keeping: never</pre>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Real-world example</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>A blog had 2,400 articles all set to changefreq="daily". After correcting to "monthly" for evergreen posts and "weekly" for recently updated content, crawl behavior aligned more closely with actual publication schedule.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common mistakes</h2>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 32 }}>
          <li style={{ marginBottom: 8 }}>Setting all pages to daily or always</li>
          <li style={{ marginBottom: 8 }}>Using "always" for pages that rarely change</li>
          <li style={{ marginBottom: 8 }}>Ignoring changefreq entirely and leaving defaults</li>
        </ul>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, marginTop: 40 }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Does Google use changefreq to decide crawl frequency?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Partially. Google treats it as a hint. Bing follows it more strictly. Accurate signals build crawler trust over time.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>What is the difference between always and hourly?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>"Always" means the page changes every time it is accessed (dynamic content). "Hourly" means it updates roughly once an hour. Most sites should never use "always".</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Can incorrect changefreq hurt crawl budget?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Yes. Overestimating change frequency teaches crawlers your signals are unreliable, reducing the weight they assign to your sitemap hints.</div>
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
            <li><a href="/sitemap-errors/incorrect-priority" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Incorrect Priority</a></li>
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
