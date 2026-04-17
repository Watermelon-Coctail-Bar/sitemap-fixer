import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sitemap Too Large: 50MB/50k URL Limit Fix Guide',
  description: 'Fix sitemaps that exceed Google\u2019s 50MB uncompressed or 50,000 URL limits. Split oversized sitemaps into a sitemap index with chunked files.',
  keywords: 'sitemap 50mb limit, sitemap 50000 URL limit, sitemap index file, split sitemap, sitemap size Google, large sitemap error, sitemap too big GSC',
  alternates: { canonical: 'https://sitemapfixer.com/sitemap-errors/sitemap-too-large' },
  openGraph: {
    title: 'Sitemap Too Large - Fix 50MB/50k URL Limit',
    description: 'Fix sitemaps that exceed Google\u2019s 50MB uncompressed or 50,000 URL limits. Split oversized sitemaps into a sitemap index with chunked files.',
    url: 'https://sitemapfixer.com/sitemap-errors/sitemap-too-large',
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
  const faqSchema = "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"What are Google's sitemap size limits?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Each sitemap file can contain up to 50,000 URLs and must not exceed 50MB uncompressed. Gzipped size doesn't count - it's the decompressed file size that matters. Hit either limit and Google stops processing the file.\"}},{\"@type\":\"Question\",\"name\":\"How do I split a sitemap that's too large?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Create a sitemap index file (sitemap_index.xml) that points to multiple child sitemaps, each under 50k URLs. Organize children by content type (posts, products, categories) so you can also see indexing coverage per segment in Search Console.\"}},{\"@type\":\"Question\",\"name\":\"Can I submit a sitemap index to Google Search Console?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes. Submit just the index URL - Google will discover and fetch all child sitemaps automatically. The Sitemaps report in Search Console shows aggregated coverage plus per-child breakdowns.\"}}]}";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqSchema }}
      />
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px', fontFamily: 'Geist, sans-serif' }}>
        <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
          <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>
          {' / '}
          <a href="/sitemap-errors" style={{ color: '#2d5be3', textDecoration: 'none' }}>Sitemap Errors</a>
          {' / '}
          <span>Sitemap Too Large</span>
        </nav>

        <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>
          Sitemap Exceeds 50MB / 50,000 URL Limit
        </h1>

        <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 40 }}>
          Google enforces two hard limits on sitemap files: 50,000 URLs and 50MB uncompressed. When your sitemap crosses either threshold, Google logs "Sitemap is too large" in Search Console and processes none of the URLs inside - your entire content catalog becomes invisible until you split the file.
        </p>

        <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 4 }}>Check your sitemap against Google limits</div>
            <div style={{ fontSize: 13, color: '#6b6b7d' }}>We report URL count, uncompressed size, and recommended split strategy</div>
          </div>
          <a href="/" style={{ background: '#0a0a0f', color: 'white', padding: '12px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 14, whiteSpace: 'nowrap' }}>
            Analyze My Sitemap
          </a>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>What is this error?</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>A sitemap exceeds Google&apos;s limits when it contains more than 50,000 <code>&lt;url&gt;</code> entries or is larger than 50MB uncompressed (the gzipped size doesn&apos;t matter - the decompressed bytes are what count). Search Console reports "Sitemap is too large" or "Sitemap is too big." The file is rejected entirely - Google does not partially process it.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Why does it happen?</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>This hits e-commerce sites with large catalogs (100k+ SKUs), marketplaces with many user-generated listings, news publishers with deep archives, and documentation sites with many versioned pages. Often the sitemap stays under 50k URLs but crosses 50MB because of long URLs, image/video extensions, or detailed <code>&lt;news:news&gt;</code> metadata that inflates per-entry size.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Why does it hurt SEO?</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>Complete rejection: if Google can&apos;t process the sitemap, every URL inside loses its discovery and lastmod boost. For large sites this is catastrophic - tens of thousands of pages suddenly rely only on internal link discovery, which is slower and less reliable. Indexing coverage gradually decays over weeks as Google&apos;s internal index of the site goes stale.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How to detect it</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>Check your sitemap&apos;s URL count with <code>grep -c &quot;&lt;loc&gt;&quot; sitemap.xml</code> and its size with <code>ls -lh sitemap.xml</code> (uncompressed). Sitemap Fixer reports both metrics automatically, and if you&apos;re over either limit, it computes an optimal split into balanced child sitemaps you can pass to your generator.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How to fix it</h2>
        <div style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
          <pre style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: '#1c1c26', whiteSpace: 'pre-wrap', fontFamily: 'DM Mono, monospace' }}>1. Split the URLs into multiple child sitemaps (e.g., sitemap-posts-1.xml, sitemap-posts-2.xml).
2. Keep each child under 45,000 URLs and 45MB to leave safety headroom.
3. Create a sitemap_index.xml that lists each child with its own &lt;loc&gt; and &lt;lastmod&gt;.
4. Organize children by type (products, categories, posts) for easier per-segment monitoring.
5. Reference the index (not individual children) in robots.txt and Search Console.
6. Automate splitting in your build pipeline so growth doesn&apos;t re-trigger the limit.</pre>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Real-world example</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>A marketplace had 128,000 listings in a single sitemap.xml and saw "Sitemap is too large" in GSC for 3 weeks. After splitting into 3 child sitemaps under an index (sitemap-listings-1/2/3.xml), Google began processing all 128,000 URLs within 48 hours and indexed coverage rose from 41,000 to 98,000 over the following 6 weeks.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common mistakes</h2>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 32 }}>
          <li style={{ marginBottom: 8 }}>Confusing compressed vs uncompressed size - gzipping a 100MB sitemap to 12MB doesn&apos;t help</li>
          <li style={{ marginBottom: 8 }}>Creating nested sitemap indexes (indexes pointing to indexes) - not allowed</li>
          <li style={{ marginBottom: 8 }}>Splitting alphabetically by URL, causing one segment to grow faster than others over time</li>
        </ul>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, marginTop: 40 }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>What are Google&apos;s sitemap size limits?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Each sitemap file can contain up to 50,000 URLs and must not exceed 50MB uncompressed. Gzipped size doesn&apos;t count - it&apos;s the decompressed file size that matters. Hit either limit and Google stops processing the file.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>How do I split a sitemap that&apos;s too large?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Create a sitemap index file (sitemap_index.xml) that points to multiple child sitemaps, each under 50k URLs. Organize children by content type (posts, products, categories) so you can also see indexing coverage per segment in Search Console.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Can I submit a sitemap index to Google Search Console?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Yes. Submit just the index URL - Google will discover and fetch all child sitemaps automatically. The Sitemaps report in Search Console shows aggregated coverage plus per-child breakdowns.</div>
          </div>
        </div>

        <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
          <div style={{ fontSize: 22, fontWeight: 700, color: 'white', marginBottom: 8 }}>Fix this in your sitemap now</div>
          <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Enter your domain and get a full sitemap audit in 60 seconds</div>
          <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 32px', borderRadius: 8, textDecoration: 'none', fontWeight: 700, fontSize: 15 }}>
            Analyze My Sitemap Free
          </a>
        </div>

        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Related sitemap errors</div>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <li><a href="/sitemap-errors/gzip-encoding-errors" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Gzip Errors</a></li>
            <li><a href="/sitemap-errors/invalid-xml-syntax" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Invalid XML Syntax</a></li>
            <li><a href="/sitemap-errors/duplicate-urls" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Duplicate URLs</a></li>
          </ul>
          <div style={{ marginTop: 16 }}>
            <a href="/sitemap-errors" style={{ color: '#2d5be3', fontSize: 13 }}> All sitemap errors</a>
          </div>
        </div>
      </div>
    </>
  );
}
