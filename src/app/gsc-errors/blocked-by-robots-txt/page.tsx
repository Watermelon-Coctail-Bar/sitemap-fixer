import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blocked by robots.txt in Google Search Console: Fix Guide',
  description: 'The "Blocked by robots.txt" status in Google Search Console means your robots.txt file is stopping Googlebot from crawling the URL. Learn how to audit and fix robots.txt rules.',
  keywords: 'blocked by robots.txt, robots.txt error, gsc robots.txt blocked, fix robots.txt, googlebot disallow, robots.txt directive',
  alternates: { canonical: 'https://sitemapfixer.com/gsc-errors/blocked-by-robots-txt' },
  openGraph: {
    title: 'Blocked by robots.txt - GSC Indexing Status Explained',
    description: 'The "Blocked by robots.txt" status in Google Search Console means your robots.txt file is stopping Googlebot from crawling the URL. Learn how to audit and fix robots.txt rules.',
    url: 'https://sitemapfixer.com/gsc-errors/blocked-by-robots-txt',
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
  const faqSchema = "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Can a page be indexed even if it is blocked by robots.txt?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes - weirdly. If Google finds links to the URL elsewhere, it can index the URL without ever crawling the content. You will see a search result with just the URL and no description. The separate status 'Indexed, though blocked by robots.txt' covers that case. If you truly want the page out of search results, use noindex, not robots.txt disallow.\"}},{\"@type\":\"Question\",\"name\":\"Should I use robots.txt or noindex?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Use noindex when you want a page fully excluded from search results - Google needs to crawl the page to see the noindex tag, so the URL must not be blocked by robots.txt. Use robots.txt disallow only to prevent crawling of large, resource-heavy sections (admin panels, internal search, filter parameters) where you do not care if URLs appear URL-only.\"}},{\"@type\":\"Question\",\"name\":\"How do I test my robots.txt rules?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"In Google Search Console, open the robots.txt report under Settings. You can see the parsed version Google uses and test specific URLs. You can also use the URL Inspection tool - if a page is blocked, it will tell you and show which robots.txt rule triggered the block.\"}}]}";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqSchema }}
      />
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px', fontFamily: 'Geist, sans-serif' }}>
        <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
          <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>
          {'  /  '}
          <a href="/gsc-errors" style={{ color: '#2d5be3', textDecoration: 'none' }}>GSC Errors</a>
          {'  /  '}
          <span>Blocked by robots.txt</span>
        </nav>

        <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>
          Blocked by robots.txt
        </h1>

        <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 40 }}>
          The &quot;Blocked by robots.txt&quot; status in Google Search Console means Googlebot wanted to crawl the URL, checked your robots.txt file first, and found a Disallow rule that matched the URL path. So it stopped before making the request. Without crawling the content, Google cannot index the page with any real information. This is a common intentional block for admin pages - but it is also one of the most common accidental traffic killers.
        </p>

        <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 4 }}>Check your robots.txt against your sitemap</div>
            <div style={{ fontSize: 13, color: '#6b6b7d' }}>We flag URLs in your sitemap that are blocked by robots.txt - free scan</div>
          </div>
          <a href="/" style={{ background: '#0a0a0f', color: 'white', padding: '12px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 14, whiteSpace: 'nowrap' }}>
            Analyze My Sitemap
          </a>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>What this GSC status means</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>Googlebot followed its normal process: fetch /robots.txt, check the rules for the User-agent: Googlebot section (or * catch-all), and compare against the target URL. Because a Disallow directive matches the URL path, Google respects it and does not crawl the page. The URL is kept out of the index because Google has no content to evaluate. Note this is different from noindex - with robots.txt blocking, Google never sees the page content at all.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common causes</h2>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 32 }}>
          <li style={{ marginBottom: 8 }}>Staging or development robots.txt (Disallow: /) accidentally pushed to production.</li>
          <li style={{ marginBottom: 8 }}>A CMS default robots.txt blocking wp-admin, /cart, /checkout, /search, or /api paths.</li>
          <li style={{ marginBottom: 8 }}>Overly broad Disallow rules like Disallow: /p or Disallow: /c that block intended content folders.</li>
          <li style={{ marginBottom: 8 }}>Wildcard rules (Disallow: /*?*) that unintentionally catch valid parameterized URLs.</li>
          <li style={{ marginBottom: 8 }}>Disallow rules for entire subdirectories (Disallow: /blog/) blocking valuable content.</li>
          <li style={{ marginBottom: 8 }}>Conflicting User-agent rules where the order-of-specificity matters.</li>
          <li style={{ marginBottom: 8 }}>Intentional blocks on filter parameters, internal search, and faceted navigation - usually correct.</li>
        </ul>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How it affects indexing</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>Blocked URLs are not crawled, which means Google has no content to index and cannot rank the page for any query. However, Google may still index the URL itself if it finds external links pointing to it - showing just the URL in search results with no snippet. For pages you want out entirely, robots.txt is actually the wrong tool (use noindex instead). For pages you want to rank, any robots.txt block is a direct traffic killer.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How to diagnose</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>Open /robots.txt directly (example.com/robots.txt) and read every Disallow rule. In GSC, go to Settings &gt; robots.txt to see the file Google last fetched and parsed. Run URL Inspection on an affected URL - it reports the specific robots.txt rule blocking it. Check the User-agent directive: rules under User-agent: * apply to Googlebot, but more specific User-agent: Googlebot rules override them. Look for Disallow: / (blocks everything) or Disallow: /* (blocks paths under root).</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How to fix</h2>
        <div style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
          <pre style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: '#1c1c26', whiteSpace: 'pre-wrap', fontFamily: 'DM Mono, monospace' }}>1. View your robots.txt at https://example.com/robots.txt and audit every Disallow line.
2. Check for Disallow: / entries under User-agent: * or User-agent: Googlebot - remove if unintended (common staging leak).
3. In WordPress: Settings &gt; Reading &gt; uncheck &quot;Discourage search engines from indexing this site&quot; - it controls robots.txt.
4. Narrow overly broad rules: change Disallow: /blog/ to Disallow: /blog/admin/ if only the admin section should be blocked.
5. Add Allow: rules for specific URLs inside a blocked directory if needed.
6. If you want the page hidden from search, replace the robots.txt block with a &lt;meta name=&quot;robots&quot; content=&quot;noindex&quot;&gt; tag instead - Google needs to crawl to see noindex.
7. Save changes, upload the new robots.txt, and submit it in GSC &gt; Settings &gt; robots.txt &gt; Request recrawl.
8. Run URL Inspection to confirm the URL is no longer blocked.</pre>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, marginTop: 40 }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Can a page be indexed even if it is blocked by robots.txt?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Yes - weirdly. If Google finds links to the URL elsewhere, it can index the URL without ever crawling the content. You will see a search result with just the URL and no description. The separate status &quot;Indexed, though blocked by robots.txt&quot; covers that case. If you truly want the page out of search results, use noindex, not robots.txt disallow.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Should I use robots.txt or noindex?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Use noindex when you want a page fully excluded from search results - Google needs to crawl the page to see the noindex tag, so the URL must not be blocked by robots.txt. Use robots.txt disallow only to prevent crawling of large, resource-heavy sections (admin panels, internal search, filter parameters) where you do not care if URLs appear URL-only.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>How do I test my robots.txt rules?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>In Google Search Console, open the robots.txt report under Settings. You can see the parsed version Google uses and test specific URLs. You can also use the URL Inspection tool - if a page is blocked, it will tell you and show which robots.txt rule triggered the block.</div>
          </div>
        </div>

        <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
          <div style={{ fontSize: 22, fontWeight: 700, color: 'white', marginBottom: 8 }}>Find sitemap URLs blocked by robots.txt</div>
          <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free scan - we test every sitemap URL against your live robots.txt rules</div>
          <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 32px', borderRadius: 8, textDecoration: 'none', fontWeight: 700, fontSize: 15 }}>
            Analyze My Sitemap Free
          </a>
        </div>

        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Related GSC indexing statuses</div>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <li><a href="/gsc-errors/excluded-by-noindex-tag" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Excluded by noindex</a></li>
            <li><a href="/gsc-errors/blocked-unauthorized-401" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Blocked 401</a></li>
            <li><a href="/gsc-errors/blocked-forbidden-403" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Blocked 403</a></li>
          </ul>
          <div style={{ marginTop: 16 }}>
            <a href="/gsc-errors" style={{ color: '#2d5be3', fontSize: 13 }}>All GSC indexing errors</a>
          </div>
        </div>
      </div>
    </>
  );
}
