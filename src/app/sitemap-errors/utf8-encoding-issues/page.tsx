import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UTF-8 Encoding Issues in Sitemap: Fix Guide',
  description: 'Fix UTF-8 encoding problems in your sitemap - BOM bytes, mojibake characters, percent-encoding errors. Broken encoding makes Googlebot reject entire sitemaps.',
  keywords: 'UTF-8 sitemap error, sitemap BOM byte order mark, mojibake sitemap, percent encoding sitemap URLs, non-ASCII URLs sitemap, character encoding sitemap',
  alternates: { canonical: 'https://sitemapfixer.com/sitemap-errors/utf8-encoding-issues' },
  openGraph: {
    title: 'UTF-8 Encoding Issues in Sitemap - Fix & Best Practices',
    description: 'Fix UTF-8 encoding problems in your sitemap - BOM bytes, mojibake characters, percent-encoding errors. Broken encoding makes Googlebot reject entire sitemaps.',
    url: 'https://sitemapfixer.com/sitemap-errors/utf8-encoding-issues',
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
  const faqSchema = "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"How should non-ASCII characters appear in sitemap URLs?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Non-ASCII characters in URLs must be percent-encoded (e.g., 'caf\u00e9' becomes 'caf%C3%A9'). The sitemap file itself must be saved in UTF-8, but the URL values inside should use percent-encoding for any character above ASCII 127.\"}},{\"@type\":\"Question\",\"name\":\"What is a BOM and why does it break sitemaps?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"A Byte Order Mark (BOM) is three hidden bytes (EF BB BF) that some editors add to the start of UTF-8 files. XML parsers expect the very first character to be '<', so a BOM before the XML declaration causes an instant parse error.\"}},{\"@type\":\"Question\",\"name\":\"Why do I see weird characters like \u00c3\u00a9 in my sitemap?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"That's mojibake - the symptom of UTF-8 bytes being interpreted as Latin-1 (or vice versa). It happens when the database encoding doesn't match the connection encoding or when a file is converted between encodings without declaring the source correctly.\"}}]}";

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
          <span>UTF-8 Encoding Issues</span>
        </nav>

        <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>
          UTF-8 Encoding Issues in Your Sitemap
        </h1>

        <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 40 }}>
          Sitemaps must be UTF-8 encoded with percent-encoded URLs for any non-ASCII characters. When the file is actually ISO-8859-1 masquerading as UTF-8, or when it starts with a hidden BOM, or when URLs contain raw accented characters, Googlebot either rejects the file or silently skips malformed entries - costing you indexing coverage without any obvious symptom.
        </p>

        <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 4 }}>Check your encoding in seconds</div>
            <div style={{ fontSize: 13, color: '#6b6b7d' }}>We detect BOM bytes, invalid UTF-8 sequences, and unencoded URL characters</div>
          </div>
          <a href="/" style={{ background: '#0a0a0f', color: 'white', padding: '12px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 14, whiteSpace: 'nowrap' }}>
            Analyze My Sitemap
          </a>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>What is this error?</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>UTF-8 encoding issues split into three categories: (1) the sitemap file itself declares <code>encoding=&quot;UTF-8&quot;</code> but contains bytes that aren&apos;t valid UTF-8 sequences, (2) the file starts with a byte-order mark (BOM: EF BB BF) before the XML declaration, or (3) URL values contain raw non-ASCII characters that should be percent-encoded (e.g., <code>https://example.com/caf\u00e9</code> instead of <code>https://example.com/caf%C3%A9</code>).</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Why does it happen?</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>The classic cause is a database that stores URLs as Latin-1 (ISO-8859-1) while the sitemap generator assumes UTF-8. Windows editors like Notepad and older versions of Visual Studio add a BOM when saving UTF-8 files. PHP applications often emit raw Unicode when the developer forgets <code>urlencode()</code>. Sites in French, Spanish, Chinese, Japanese, Korean, Arabic, and Cyrillic-script languages are most affected.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Why does it hurt SEO?</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>A BOM causes the entire sitemap to fail parsing - zero URLs processed. Invalid UTF-8 sequences cause Google to either reject the file or drop individual malformed entries. Unencoded characters in URLs often get rewritten by Google into URLs that don&apos;t match your canonical structure, creating duplicate content. Localized sites (French, Spanish, Chinese, Japanese) often lose 10-30% of indexing coverage when these issues aren&apos;t caught.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How to detect it</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>Run <code>file sitemap.xml</code> on the command line - it reports encoding and whether a BOM is present. Use <code>iconv -f UTF-8 -t UTF-8 sitemap.xml &gt; /dev/null</code> to validate UTF-8 sequences. Sitemap Fixer combines all three checks: BOM detection, UTF-8 sequence validation, and URL percent-encoding compliance in a single scan.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How to fix it</h2>
        <div style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
          <pre style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: '#1c1c26', whiteSpace: 'pre-wrap', fontFamily: 'DM Mono, monospace' }}>1. Strip the BOM: `sed -i &apos;1s/^\\xEF\\xBB\\xBF//&apos; sitemap.xml` (or save as UTF-8 without BOM).
2. Percent-encode all non-ASCII characters in URLs: use your language&apos;s equivalent of encodeURI() or urlencode().
3. Verify your database connection uses UTF-8: `SET NAMES utf8mb4` in MySQL, `SET client_encoding TO &apos;UTF8&apos;` in Postgres.
4. Configure your sitemap generator to emit UTF-8 without BOM (most XML libraries have a writer option for this).
5. Validate with `iconv -f UTF-8 -t UTF-8 sitemap.xml &gt; /dev/null` - no errors means valid UTF-8.
6. Resubmit the sitemap in Search Console and check coverage over the next 2 weeks.</pre>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Real-world example</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>A French blog with article URLs like <code>/articles/caf\u00e9-parisien</code> saw only 12% of articles indexed. Their sitemap listed URLs with raw accented characters. After percent-encoding (<code>/articles/caf%C3%A9-parisien</code>) and adding the same redirect at the server level, indexed pages rose from 340 to 2,600 over 4 weeks.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common mistakes</h2>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 32 }}>
          <li style={{ marginBottom: 8 }}>Saving the sitemap in a text editor that silently adds a UTF-8 BOM</li>
          <li style={{ marginBottom: 8 }}>Mixing percent-encoded and raw Unicode URLs in the same sitemap</li>
          <li style={{ marginBottom: 8 }}>Forgetting to urlencode() URLs built from database strings in PHP/Python</li>
        </ul>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, marginTop: 40 }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>How should non-ASCII characters appear in sitemap URLs?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Non-ASCII characters in URLs must be percent-encoded (e.g., &apos;caf\u00e9&apos; becomes &apos;caf%C3%A9&apos;). The sitemap file itself must be saved in UTF-8, but the URL values inside should use percent-encoding for any character above ASCII 127.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>What is a BOM and why does it break sitemaps?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>A Byte Order Mark (BOM) is three hidden bytes (EF BB BF) that some editors add to the start of UTF-8 files. XML parsers expect the very first character to be &apos;&lt;&apos;, so a BOM before the XML declaration causes an instant parse error.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Why do I see weird characters like \u00c3\u00a9 in my sitemap?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>That&apos;s mojibake - the symptom of UTF-8 bytes being interpreted as Latin-1 (or vice versa). It happens when the database encoding doesn&apos;t match the connection encoding or when a file is converted between encodings without declaring the source correctly.</div>
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
            <li><a href="/sitemap-errors/invalid-xml-syntax" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Invalid XML Syntax</a></li>
            <li><a href="/sitemap-errors/gzip-encoding-errors" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Gzip Errors</a></li>
            <li><a href="/sitemap-errors/trailing-slash-inconsistency" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Trailing Slash Inconsistency</a></li>
          </ul>
          <div style={{ marginTop: 16 }}>
            <a href="/sitemap-errors" style={{ color: '#2d5be3', fontSize: 13 }}> All sitemap errors</a>
          </div>
        </div>
      </div>
    </>
  );
}
