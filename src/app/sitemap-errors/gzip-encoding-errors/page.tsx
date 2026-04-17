import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gzip/Compression Errors in Sitemap: Fix Guide',
  description: 'Fix gzip and compression errors in your XML sitemap. Broken .gz files return empty content to Googlebot and block indexing.',
  keywords: 'gzip sitemap error, sitemap.xml.gz broken, compression error sitemap, sitemap gzip decode failed, Content-Encoding gzip sitemap, corrupted gz sitemap',
  alternates: { canonical: 'https://sitemapfixer.com/sitemap-errors/gzip-encoding-errors' },
  openGraph: {
    title: 'Gzip/Compression Errors in Sitemap - Fix & Best Practices',
    description: 'Fix gzip and compression errors in your XML sitemap. Broken .gz files return empty content to Googlebot and block indexing.',
    url: 'https://sitemapfixer.com/sitemap-errors/gzip-encoding-errors',
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
  const faqSchema = "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Do I need to gzip my sitemap?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"No. Gzip is optional. It reduces bandwidth for large sitemaps (over 10MB), but an uncompressed sitemap.xml is perfectly valid and often easier to debug.\"}},{\"@type\":\"Question\",\"name\":\"Why does Googlebot see my sitemap as empty when I gzip it?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Usually because the file is double-compressed (gzipped twice), has an incorrect .gz header, or your server is also setting Content-Encoding: gzip on top of the pre-compressed file - confusing the crawler.\"}},{\"@type\":\"Question\",\"name\":\"Should I use sitemap.xml or sitemap.xml.gz in robots.txt?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Either works for Google, but reference the exact filename you serve. If you serve both, pick one as the canonical entry in robots.txt and Search Console to avoid duplicate processing.\"}}]}";

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
          {' / '}
          <a href="/sitemap-errors" style={{ color: '#2d5be3', textDecoration: 'none' }}>Sitemap Errors</a>
          {' / '}
          <span>Gzip/Compression Errors</span>
        </nav>

        <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>
          Gzip/Compression Errors in Your Sitemap
        </h1>

        <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 40 }}>
          When your sitemap.xml.gz is corrupted, double-compressed, or served with mismatched Content-Encoding headers, Googlebot cannot decode it and logs "Couldn&apos;t fetch" in Search Console. Every URL inside becomes invisible to search engines, even if the rest of your site is healthy.
        </p>

        {/* CTA Box */}
        <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 4 }}>Check your gzip sitemap in seconds</div>
            <div style={{ fontSize: 13, color: '#6b6b7d' }}>We decode your .gz file the same way Googlebot does and report any errors</div>
          </div>
          <a href="/" style={{ background: '#0a0a0f', color: 'white', padding: '12px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 14, whiteSpace: 'nowrap' }}>
            Analyze My Sitemap
          </a>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>What is this error?</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>A gzip/compression error occurs when a crawler requests your sitemap.xml.gz and either (a) receives data that cannot be inflated with the DEFLATE algorithm, (b) gets a file whose magic bytes (1F 8B) are missing or truncated, or (c) receives a Content-Encoding: gzip header on top of an already-compressed .gz body, triggering double-decode failure. Google Search Console typically reports "Sitemap could not be read" or "General HTTP error" for these cases.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Why does it happen?</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>The most common cause is misconfigured servers that apply gzip transport compression to a pre-gzipped static file. Nginx gzip_static, Apache mod_deflate, and Cloudflare auto-minify all have edge cases that can corrupt .gz sitemaps. Other causes include FTP transfers in ASCII mode (which alters line endings inside the gzip stream), CMS plugins that write incomplete .gz trailers, and build pipelines that truncate files over 10MB.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Why does it hurt SEO?</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>A gzip error is catastrophic: Google treats the entire sitemap as empty, so none of its URLs receive the discovery boost sitemaps provide. Fresh content can take weeks longer to get crawled, and existing pages lose the lastmod signal entirely. Sites with 10,000+ URLs often see indexed-page counts collapse within two to three weeks of a gzip break.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How to detect it</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>Run <code>curl -I https://yoursite.com/sitemap.xml.gz</code> and check the Content-Encoding header. Then run <code>curl https://yoursite.com/sitemap.xml.gz | gunzip</code> - if it errors with "unexpected end of file" or "not in gzip format", you have a problem. Sitemap Fixer automates this check and shows you the exact byte position where decoding fails.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How to fix it</h2>
        <div style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
          <pre style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: '#1c1c26', whiteSpace: 'pre-wrap', fontFamily: 'DM Mono, monospace' }}>1. Regenerate the .gz file locally with `gzip -9 sitemap.xml` and upload it in binary mode.
2. Disable server-level gzip for .gz files (Nginx: `gzip off` in a `location ~ \.gz$` block).
3. Verify the response: `Content-Type: application/x-gzip` with NO `Content-Encoding: gzip` header.
4. If your sitemap is under 10MB, drop gzip entirely - serve plain sitemap.xml instead.
5. In Search Console, resubmit the sitemap and watch for the "Success" status within 24 hours.
6. Add a weekly cron that fetches and decodes the .gz file to catch future regressions.</pre>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Real-world example</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>A WordPress publisher moved to Cloudflare and lost 40% of their indexed pages in three weeks. The culprit: Cloudflare&apos;s Auto Minify re-compressed their already-gzipped sitemap, producing a file with two gzip headers that Googlebot rejected. Disabling Auto Minify for .gz paths restored indexing within two weeks.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common mistakes</h2>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 32 }}>
          <li style={{ marginBottom: 8 }}>Letting the server apply Content-Encoding: gzip to an already-gzipped file</li>
          <li style={{ marginBottom: 8 }}>Uploading .gz files via FTP in ASCII mode instead of binary</li>
          <li style={{ marginBottom: 8 }}>Using `zip` instead of `gzip` - they produce different, incompatible formats</li>
        </ul>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, marginTop: 40 }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Do I need to gzip my sitemap?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>No. Gzip is optional. It reduces bandwidth for large sitemaps (over 10MB), but an uncompressed sitemap.xml is perfectly valid and often easier to debug.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Why does Googlebot see my sitemap as empty when I gzip it?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Usually because the file is double-compressed (gzipped twice), has an incorrect .gz header, or your server is also setting Content-Encoding: gzip on top of the pre-compressed file - confusing the crawler.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Should I use sitemap.xml or sitemap.xml.gz in robots.txt?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Either works for Google, but reference the exact filename you serve. If you serve both, pick one as the canonical entry in robots.txt and Search Console to avoid duplicate processing.</div>
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
            <li><a href="/sitemap-errors/invalid-xml-syntax" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Invalid XML Syntax</a></li>
            <li><a href="/sitemap-errors/sitemap-too-large" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Sitemap Too Large</a></li>
            <li><a href="/sitemap-errors/utf8-encoding-issues" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>UTF-8 Encoding Issues</a></li>
          </ul>
          <div style={{ marginTop: 16 }}>
            <a href="/sitemap-errors" style={{ color: '#2d5be3', fontSize: 13 }}> All sitemap errors</a>
          </div>
        </div>
      </div>
    </>
  );
}
