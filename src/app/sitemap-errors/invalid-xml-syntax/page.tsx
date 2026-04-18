import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Invalid XML Syntax in Sitemap: Fix Guide',
  description: 'Fix XML parsing errors in your sitemap - unclosed tags, invalid characters, missing namespaces. Malformed XML stops Googlebot from reading a single URL.',
  keywords: 'invalid XML sitemap, XML parse error sitemap, malformed sitemap XML, sitemap xmlns error, XML syntax error, sitemap validation, XML escape characters',
  alternates: { canonical: 'https://sitemapfixer.com/sitemap-errors/invalid-xml-syntax' },
  openGraph: {
    title: 'Invalid XML Syntax in Sitemap - Fix & Best Practices',
    description: 'Fix XML parsing errors in your sitemap - unclosed tags, invalid characters, missing namespaces. Malformed XML stops Googlebot from reading a single URL.',
    url: 'https://sitemapfixer.com/sitemap-errors/invalid-xml-syntax',
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
  const faqSchema = "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Why does Search Console say 'Could not read sitemap'?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Most often it's an XML parse error: an unclosed tag, an invalid character like an unescaped ampersand (&), or a missing xmlns namespace declaration. Google's XML parser stops at the first error and reports the entire sitemap as unreadable.\"}},{\"@type\":\"Question\",\"name\":\"What characters must be escaped in sitemap XML?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Five characters need escaping inside URL values: & becomes &amp;, ' becomes &apos;, \\\" becomes &quot;, < becomes &lt;, and > becomes &gt;. Query strings with & are the #1 cause of sitemap XML errors.\"}},{\"@type\":\"Question\",\"name\":\"Does my sitemap need an XML declaration?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes. Every sitemap must start with <?xml version=\\\"1.0\\\" encoding=\\\"UTF-8\\\"?> on line 1 with no whitespace or BOM characters before it. Missing declarations and stray BOM bytes are the two most common top-of-file errors.\"}}]}";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'Invalid XML Syntax in Sitemap: Fix Guide', description: 'Fix XML parsing errors in your sitemap - unclosed tags, invalid characters, missing namespaces. Malformed XML stops Googlebot from reading a single URL.', url: 'https://sitemapfixer.com/sitemap-errors/invalid-xml-syntax', author: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com' }, publisher: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com', logo: { '@type': 'ImageObject', url: 'https://sitemapfixer.com/opengraph-image' } }, datePublished: '2026-04-17', mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://sitemapfixer.com/sitemap-errors/invalid-xml-syntax' } }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sitemapfixer.com/' }, { '@type': 'ListItem', position: 2, name: 'Sitemap Errors', item: 'https://sitemapfixer.com/sitemap-errors' }, { '@type': 'ListItem', position: 3, name: 'Invalid XML Syntax in Sitemap: Fix Guide', item: 'https://sitemapfixer.com/sitemap-errors/invalid-xml-syntax' }] }),
        }}
      />

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
          <span>Invalid XML Syntax</span>
        </nav>

        <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>
          Invalid XML Syntax in Your Sitemap
        </h1>

        <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 40 }}>
          XML is strict: a single unescaped ampersand, an unclosed tag, or a stray byte-order mark at the start of the file is enough to make Googlebot reject your entire sitemap. When this happens, none of the URLs inside are processed - they&apos;re all invisible to search engines until the syntax error is fixed.
        </p>

        <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 4 }}>Validate your sitemap XML</div>
            <div style={{ fontSize: 13, color: '#6b6b7d' }}>We parse your sitemap the same way Googlebot does and point to the exact line of any error</div>
          </div>
          <a href="/" style={{ background: '#0a0a0f', color: 'white', padding: '12px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 14, whiteSpace: 'nowrap' }}>
            Analyze My Sitemap
          </a>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>What is this error?</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>An invalid XML syntax error occurs when your sitemap.xml fails XML well-formedness rules. Common cases include: unescaped special characters in URLs (<code>&amp;</code>, <code>&lt;</code>, <code>&gt;</code>, <code>&quot;</code>, <code>&apos;</code>), unclosed tags (<code>&lt;loc&gt;</code> without <code>&lt;/loc&gt;</code>), missing xmlns namespace declaration, incorrect declaration order, or a UTF-8 byte-order mark (BOM) before the XML declaration. Search Console reports "Sitemap could not be read."</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Why does it happen?</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>The most common cause is URLs containing query strings with <code>&amp;</code> characters that weren&apos;t escaped to <code>&amp;amp;</code>. Other causes: CMS plugins that concatenate strings instead of using a real XML library, template engines that emit unclosed tags when a field is null, file editors that save with a BOM, and copy-paste edits that break tag matching. Files written in Windows sometimes mix CRLF and LF line endings in ways that break parsers too.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Why does it hurt SEO?</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>It&apos;s the worst possible sitemap error: total failure. Google&apos;s XML parser stops at the first syntax error and treats the file as unreadable, meaning zero URLs in the sitemap contribute to discovery or lastmod signals. A single malformed ampersand in URL #2,847 out of 50,000 can nullify the other 49,999. Every day the error persists, fresh content accumulates without any discovery boost.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How to detect it</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>Run your sitemap through <code>xmllint --noout sitemap.xml</code> on the command line - it prints exact line and column numbers of any parse error. Google Search Console&apos;s sitemap report also shows "Sitemap could not be read" with a generic error message. Sitemap Fixer runs a full XML parse and reports the first error location plus any schema violations (missing xmlns, wrong element nesting).</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How to fix it</h2>
        <div style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
          <pre style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: '#1c1c26', whiteSpace: 'pre-wrap', fontFamily: 'DM Mono, monospace' }}>1. Run `xmllint --noout sitemap.xml` to get the exact line number of the first error.
2. Escape all special characters: replace & with &amp;, &quot; with &quot; in URL attributes.
3. Confirm the file starts with &lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt; with no BOM before it.
4. Verify the root &lt;urlset xmlns=&quot;http://www.sitemaps.org/schemas/sitemap/0.9&quot;&gt; is present.
5. Switch your generator from string concatenation to a proper XML library (lxml, xml.etree, xmlbuilder2).
6. Re-validate, upload, and resubmit the sitemap in Search Console.</pre>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Real-world example</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>A media site&apos;s sitemap broke after they added query-string-based article URLs like <code>/article?id=123&amp;author=jane</code>. The ampersand wasn&apos;t escaped. Their sitemap with 12,000 URLs dropped from &quot;22 URLs discovered&quot; (their home page links) back to 22 indexed pages overall. After escaping to <code>&amp;amp;</code>, coverage recovered to 11,800 within 2 weeks.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common mistakes</h2>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 32 }}>
          <li style={{ marginBottom: 8 }}>Building sitemaps with string concatenation instead of a real XML library</li>
          <li style={{ marginBottom: 8 }}>Saving the sitemap in a text editor that adds a UTF-8 BOM</li>
          <li style={{ marginBottom: 8 }}>Forgetting that XML is case-sensitive - <code>&lt;Url&gt;</code> and <code>&lt;url&gt;</code> are different tags</li>
        </ul>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, marginTop: 40 }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Why does Search Console say &apos;Could not read sitemap&apos;?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Most often it&apos;s an XML parse error: an unclosed tag, an invalid character like an unescaped ampersand (&amp;), or a missing xmlns namespace declaration. Google&apos;s XML parser stops at the first error and reports the entire sitemap as unreadable.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>What characters must be escaped in sitemap XML?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Five characters need escaping inside URL values: &amp; becomes &amp;amp;, &apos; becomes &amp;apos;, &quot; becomes &amp;quot;, &lt; becomes &amp;lt;, and &gt; becomes &amp;gt;. Query strings with &amp; are the #1 cause of sitemap XML errors.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Does my sitemap need an XML declaration?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Yes. Every sitemap must start with &lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt; on line 1 with no whitespace or BOM characters before it. Missing declarations and stray BOM bytes are the two most common top-of-file errors.</div>
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
            <li><a href="/sitemap-errors/utf8-encoding-issues" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>UTF-8 Encoding Issues</a></li>
            <li><a href="/sitemap-errors/gzip-encoding-errors" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Gzip Errors</a></li>
            <li><a href="/sitemap-errors/missing-lastmod" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Missing Lastmod</a></li>
          </ul>
          <div style={{ marginTop: 16 }}>
            <a href="/sitemap-errors" style={{ color: '#2d5be3', fontSize: 13 }}> All sitemap errors</a>
          </div>
        </div>
      </div>
    </>
  );
}
