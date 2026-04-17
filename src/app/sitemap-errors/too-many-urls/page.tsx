import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Too Many URLs in Sitemap: Fix Guide',
  description: 'Is your sitemap too large? Google recommends a max of 50,000 URLs per sitemap file. How to split, optimize, and prioritize your sitemap.',
  alternates: { canonical: 'https://sitemapfixer.com/sitemap-errors/too-many-urls' },
  openGraph: {
    title: 'Too Many URLs in Sitemap - Fix & Best Practices',
    description: 'Is your sitemap too large? Google recommends a maximum of 50,000 URLs per sitemap file. Learn how to split, optimize, and prioritize your sitemap correctly.',
    url: 'https://sitemapfixer.com/sitemap-errors/too-many-urls',
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
  const faqSchema = "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"What is Google's sitemap size limit?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"50,000 URLs and 50MB uncompressed per sitemap file. Use a sitemap index to manage larger sites.\"}},{\"@type\":\"Question\",\"name\":\"Should I include every page on my site in the sitemap?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"No. Only include pages you want indexed and that provide unique value. Thin, duplicate, or low-quality pages should be excluded.\"}},{\"@type\":\"Question\",\"name\":\"How do I split a large sitemap?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Create a sitemap index file at /sitemap.xml that references child sitemaps like /sitemaps/blog.xml and /sitemaps/products.xml.\"}}]}";

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
          {'  '}
          <a href="/sitemap-errors" style={{ color: '#2d5be3', textDecoration: 'none' }}>Sitemap Errors</a>
          {'  '}
          <span>Too Many URLs in Sitemap</span>
        </nav>

        <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>
          Too Many URLs in Your Sitemap
        </h1>

        <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 40 }}>
          Google sets a hard limit of 50,000 URLs and 50MB per sitemap file. But even well under that limit, bloated sitemaps with low-value URLs actively harm your SEO by diluting crawl budget across pages that shouldn't be indexed at all.
        </p>

        {/* CTA Box */}
        <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 4 }}>Find this error in your sitemap</div>
            <div style={{ fontSize: 13, color: '#6b6b7d' }}>Analyze your sitemap for free - get a full report in 60 seconds</div>
          </div>
          <a href="/" style={{ background: '#0a0a0f', color: 'white', padding: '12px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 14, whiteSpace: 'nowrap' }}>
            Analyze My Sitemap 
          </a>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>What is this error?</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>A "too many URLs" sitemap problem has two dimensions: technical (exceeding Google's 50,000 URL limit) and strategic (including URLs that have no business being in your sitemap, such as thin pages, duplicate content, or faceted navigation URLs).</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Why does it happen?</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>Sitemap bloat occurs when CMS systems auto-generate sitemaps for every URL on the site without filtering, when faceted navigation creates thousands of URL variants, or when tag/category pages are all included without evaluation.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Why does it hurt SEO?</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>Every low-quality URL in your sitemap is a vote for Google to spend crawl budget on worthless content. Google's John Mueller has confirmed that including poor-quality URLs in your sitemap can lower the crawl priority of your entire site.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How to detect it</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>Sitemap Fixer analyzes your sitemap and flags when you exceed recommended thresholds. We also identify clusters of similar URLs that suggest faceted navigation or thin content issues.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How to fix it</h2>
        <div style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
          <pre style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: '#1c1c26', whiteSpace: 'pre-wrap', fontFamily: 'DM Mono, monospace' }}>1. Split large sitemaps into a sitemap index with child sitemaps by content type.
2. Exclude: tag pages, author archives, search result pages, filtered/faceted URLs.
3. Include only pages with unique, valuable content.
4. Use robots.txt to disallow crawling of low-value URL patterns.
5. Implement pagination controls (rel=prev/next or canonical) instead of including all paginated pages.</pre>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Real-world example</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>A news site had 180,000 URLs in a single sitemap. After splitting into a sitemap index and removing tag pages and author archives, their top articles saw a 35% increase in crawl frequency.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common mistakes</h2>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 32 }}>
          <li style={{ marginBottom: 8 }}>Including every URL on the site without strategic filtering</li>
          <li style={{ marginBottom: 8 }}>Not using sitemap index files for sites over 10,000 pages</li>
          <li style={{ marginBottom: 8 }}>Adding faceted navigation URLs that create duplicate content</li>
        </ul>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, marginTop: 40 }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>What is Google's sitemap size limit?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>50,000 URLs and 50MB uncompressed per sitemap file. Use a sitemap index to manage larger sites.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Should I include every page on my site in the sitemap?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>No. Only include pages you want indexed and that provide unique value. Thin, duplicate, or low-quality pages should be excluded.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>How do I split a large sitemap?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Create a sitemap index file at /sitemap.xml that references child sitemaps like /sitemaps/blog.xml and /sitemaps/products.xml.</div>
          </div>
        </div>

        {/* Final CTA */}
        <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
          <div style={{ fontSize: 22, fontWeight: 700, color: 'white', marginBottom: 8 }}>Fix this in your sitemap now</div>
          <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Enter your domain and get a full sitemap audit in 60 seconds</div>
          <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 32px', borderRadius: 8, textDecoration: 'none', fontWeight: 700, fontSize: 15 }}>
            Analyze My Sitemap Free 
          </a>
        </div>

        {/* Related */}
        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Related sitemap errors</div>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <li><a href="/sitemap-errors/duplicate-urls" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Duplicate Urls</a></li>
            <li><a href="/sitemap-errors/incorrect-priority" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Incorrect Priority</a></li>
            <li><a href="/sitemap-errors/changefreq-misuse" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Changefreq Misuse</a></li>
          </ul>
          <div style={{ marginTop: 16 }}>
            <a href="/sitemap-errors" style={{ color: '#2d5be3', fontSize: 13 }}> All sitemap errors</a>
          </div>
        </div>
      </div>
    </>
  );
}
