import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Duplicate URLs in Sitemap – Fix, Examples & Best Practices | SitemapFixer',
  description: 'Find and fix duplicate URLs in your XML sitemap. Duplicate entries waste crawl budget and confuse search engines. Detect and remove them in seconds.',
  alternates: { canonical: 'https://sitemapfixer.com/sitemap-errors/duplicate-urls' },
  openGraph: {
    title: 'Duplicate URLs in Sitemap – Fix & Best Practices',
    description: 'Find and fix duplicate URLs in your XML sitemap. Duplicate entries waste crawl budget and confuse search engines. Detect and remove them in seconds.',
    url: 'https://sitemapfixer.com/sitemap-errors/duplicate-urls',
    type: 'article',
  },
};

export default function Page() {
  const faqSchema = "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Do duplicate URLs hurt rankings directly?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Not directly, but they dilute crawl budget and can create canonicalization confusion that indirectly hurts rankings.\"}},{\"@type\":\"Question\",\"name\":\"Should I include paginated pages in my sitemap?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Only if each page has unique, indexable content. Paginated listing pages are often better excluded or canonicalized to the first page.\"}},{\"@type\":\"Question\",\"name\":\"How many duplicate URLs are too many?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Any duplicate is unnecessary. Even one duplicate wastes crawl budget. Clean sitemaps have zero duplicate entries.\"}}]}";

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
          <span>Duplicate URLs in Sitemap</span>
        </nav>

        <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>
          Duplicate URLs in Your Sitemap
        </h1>

        <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 40 }}>
          Duplicate URLs in your sitemap are one of the most common — and most damaging — sitemap errors. When Google crawls your sitemap and finds the same URL listed multiple times, it wastes precious crawl budget and sends confusing signals about which version of your content matters.
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
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>A duplicate URL error occurs when the same page appears more than once in your sitemap.xml file. This includes exact duplicates (same URL listed twice) and near-duplicates (HTTP vs HTTPS, trailing slash vs no trailing slash, www vs non-www).</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Why does it happen?</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>Duplicate URLs typically occur when sitemap generators merge multiple sources without deduplication, when CMS plugins auto-generate sitemaps from multiple content types, or when URL canonicalization issues exist across your site.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Why does it hurt SEO?</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>Google has a limited crawl budget per site. When your sitemap lists URLs twice, you force Google to "waste" crawl requests on pages it has already processed. This means new or important pages get crawled less frequently.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How to detect it</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>Upload your sitemap.xml to Sitemap Fixer — our analyzer counts every URL and flags any that appear more than once. We also detect near-duplicates caused by protocol or trailing slash inconsistencies.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How to fix it</h2>
        <div style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
          <pre style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: '#1c1c26', whiteSpace: 'pre-wrap', fontFamily: 'DM Mono, monospace' }}>1. Remove all duplicate &lt;url&gt; entries from your sitemap.
2. Standardize all URLs: always use HTTPS, pick one trailing slash style and stick to it.
3. Ensure your sitemap generator has deduplication enabled.
4. Set a canonical URL structure and redirect all variants.</pre>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Real-world example</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>A Shopify store had 12,000 URLs in their sitemap — but 3,200 were duplicates from product variants and collection pages. After deduplication, crawl coverage improved by 28% within 6 weeks.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common mistakes</h2>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 32 }}>
          <li style={{ marginBottom: 8 }}>Keeping both HTTP and HTTPS versions of the same URL</li>
          <li style={{ marginBottom: 8 }}>Not removing paginated versions that should be canonicalized</li>
          <li style={{ marginBottom: 8 }}>Using sitemap plugins that aggregate without deduplication</li>
        </ul>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, marginTop: 40 }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Do duplicate URLs hurt rankings directly?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Not directly, but they dilute crawl budget and can create canonicalization confusion that indirectly hurts rankings.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Should I include paginated pages in my sitemap?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Only if each page has unique, indexable content. Paginated listing pages are often better excluded or canonicalized to the first page.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>How many duplicate URLs are too many?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Any duplicate is unnecessary. Even one duplicate wastes crawl budget. Clean sitemaps have zero duplicate entries.</div>
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
            <li><a href="/sitemap-errors/invalid-urls" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Invalid Urls</a></li>
            <li><a href="/sitemap-errors/too-many-urls" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Too Many Urls</a></li>
            <li><a href="/sitemap-errors/orphan-pages" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Orphan Pages</a></li>
          </ul>
          <div style={{ marginTop: 16 }}>
            <a href="/sitemap-errors" style={{ color: '#2d5be3', fontSize: 13 }}>← All sitemap errors</a>
          </div>
        </div>
      </div>
    </>
  );
}
