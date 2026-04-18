import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Indexed, though blocked by robots.txt (GSC)',
  description: 'What "Indexed, though blocked by robots.txt" means in GSC, why it happens (including WordPress), and three clean ways to fix it.',
  keywords: 'indexed though blocked by robots.txt, indexed though blocked by robots.txt wordpress, indexed but blocked, gsc indexed blocked robots, indexed blocked robots txt fix',
  alternates: { canonical: 'https://sitemapfixer.com/gsc-errors/indexed-though-blocked-by-robots-txt' },
  openGraph: {
    title: 'Indexed, though blocked by robots.txt (GSC)',
    description: 'What "Indexed, though blocked by robots.txt" means in GSC, why it happens (including WordPress), and three clean ways to fix it.',
    url: 'https://sitemapfixer.com/gsc-errors/indexed-though-blocked-by-robots-txt',
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
  const faqSchema = "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Why is my page indexed though blocked by robots.txt?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Robots.txt blocks crawling, not indexing. If another site links to your URL, Google can still add it to its index based on the anchor text and external context - even without crawling the page content. The result is a URL in search results with no description.\"}},{\"@type\":\"Question\",\"name\":\"How do I remove a page that is indexed though blocked?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Remove the Disallow rule from robots.txt so Googlebot can crawl the page, then add a noindex meta tag to the page itself. Once Google recrawls and sees the noindex, it will drop the URL from the index. You can then re-block with robots.txt if you want to save crawl budget.\"}},{\"@type\":\"Question\",\"name\":\"Is 'Indexed though blocked' the same as 'Blocked by robots.txt'?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"No. 'Blocked by robots.txt' means Google respected your rule and did not index the URL. 'Indexed though blocked' means Google indexed it anyway because of external signals, even though it could not crawl the content. They are different statuses with different fixes.\"}}]}";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'Indexed, though blocked by robots.txt (GSC)', description: 'What "Indexed, though blocked by robots.txt" means in GSC, why it happens (including WordPress), and three clean ways to fix it.', url: 'https://sitemapfixer.com/gsc-errors/indexed-though-blocked-by-robots-txt', author: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com' }, publisher: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com', logo: { '@type': 'ImageObject', url: 'https://sitemapfixer.com/opengraph-image' } }, datePublished: '2026-04-17', mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://sitemapfixer.com/gsc-errors/indexed-though-blocked-by-robots-txt' } }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sitemapfixer.com/' }, { '@type': 'ListItem', position: 2, name: 'GSC Errors', item: 'https://sitemapfixer.com/gsc-errors' }, { '@type': 'ListItem', position: 3, name: 'Indexed, though blocked by robots.txt (GSC)', item: 'https://sitemapfixer.com/gsc-errors/indexed-though-blocked-by-robots-txt' }] }),
        }}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px', fontFamily: 'Geist, sans-serif' }}>
        <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
          <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{'  /  '}
          <a href="/gsc-errors" style={{ color: '#2d5be3', textDecoration: 'none' }}>GSC Errors</a>{'  /  '}
          <span>Indexed, though blocked by robots.txt</span>
        </nav>

        <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Indexed, though blocked by robots.txt (GSC)</h1>

        <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 40 }}>
          &quot;Indexed, though blocked by robots.txt&quot; is one of the most confusing GSC statuses. It means Google added your URL to its index even though your robots.txt file told Googlebot not to crawl it. This happens because robots.txt controls <em>crawling</em>, not <em>indexing</em> - and Google can index a URL based on external links alone, without ever fetching the page content. The result is a URL in search with no description and no way for Google to see your content.
        </p>

        <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 4 }}>Find URLs blocked by robots.txt on your site</div>
            <div style={{ fontSize: 13, color: '#6b6b7d' }}>We surface every Disallow conflict in your sitemap in 60 seconds</div>
          </div>
          <a href="/" style={{ background: '#0a0a0f', color: 'white', padding: '12px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 14, whiteSpace: 'nowrap' }}>Analyze My Sitemap</a>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>What this GSC status means</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
          Google discovered your URL through an external signal - usually a backlink from another site, a mention in a sitemap, or an internal link - but your robots.txt file includes a Disallow rule that matches the URL. Googlebot obeyed the rule and did not crawl the page. However, Google decided the URL was significant enough to include in its index anyway. In search results, the listing appears with the URL, no description (&quot;A description for this result is not available because of this site&apos;s robots.txt&quot;), and no title beyond what external anchors suggest. This is different from <a href="/gsc-errors/blocked-by-robots-txt" style={{ color: '#2d5be3' }}>&quot;Blocked by robots.txt&quot;</a> - that status means Google respected the block and did not index the URL.
        </p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Why this is bad</h2>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 32 }}>
          <li style={{ marginBottom: 8 }}><strong>No description in search results</strong> - dramatically lowers click-through rate compared to a normal snippet.</li>
          <li style={{ marginBottom: 8 }}><strong>You lose control over the title</strong> - Google builds the displayed title from external anchor text and URL tokens, which may be unflattering or outdated.</li>
          <li style={{ marginBottom: 8 }}><strong>Cannot use noindex</strong> - because Google cannot crawl the page, it never sees any noindex meta tag you add. You are stuck.</li>
          <li style={{ marginBottom: 8 }}><strong>Sensitive URLs leak</strong> - admin login pages, staging URLs, or paywalled content may appear in results if robots.txt was the only protection.</li>
          <li style={{ marginBottom: 8 }}><strong>Confuses crawl budget reports</strong> - these URLs show up as indexed but provide zero value, polluting coverage metrics.</li>
        </ul>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common causes (including WordPress)</h2>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 32 }}>
          <li style={{ marginBottom: 8 }}><strong>External inbound links</strong> - another site linked to a URL you blocked. Very common for legacy URLs that moved but still attract backlinks.</li>
          <li style={{ marginBottom: 8 }}><strong>Accidental Disallow</strong> - a WordPress plugin or manual edit added an overly broad Disallow rule that matches real content URLs.</li>
          <li style={{ marginBottom: 8 }}><strong>WordPress-specific: /wp-content/ or query-string blocks</strong> - sites that block <code>/?*</code> end up blocking paginated or filtered URLs that have external links.</li>
          <li style={{ marginBottom: 8 }}><strong>Legacy URLs from an old CMS</strong> - you migrated from Joomla or Drupal, blocked old paths in robots.txt, but backlinks still point at them.</li>
          <li style={{ marginBottom: 8 }}><strong>Blocking admin, login, or search result pages</strong> - these often get linked externally by accident and then indexed.</li>
          <li style={{ marginBottom: 8 }}><strong>Staging environment exposed</strong> - a staging URL blocked in robots.txt was linked from social or a forum post and got indexed.</li>
        </ul>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How to fix it - three options</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 12 }}><strong>Option A: Allow crawling + add noindex (recommended).</strong> Remove the Disallow rule so Googlebot can fetch the page, then add <code>&lt;meta name=&quot;robots&quot; content=&quot;noindex&quot;&gt;</code> or an X-Robots-Tag header. Once Google recrawls and sees the noindex, it drops the URL from the index within 1-4 weeks.</p>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 12 }}><strong>Option B: Remove the external links pointing to the URL.</strong> Only realistic if you control the linking sites or the links are internal. Not practical for organic backlinks.</p>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}><strong>Option C: Leave it and do nothing.</strong> Valid if the URL should never appear in search and you don&apos;t care about the description-less snippet. For truly sensitive URLs, use password protection or HTTP auth instead - robots.txt was never meant for security.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Step-by-step fix</h2>
        <div style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
          <pre style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: '#1c1c26', whiteSpace: 'pre-wrap', fontFamily: 'DM Mono, monospace' }}>1. Open GSC &gt; Pages and export the list of URLs with this status.
2. Identify which Disallow rule in robots.txt matches each URL (use GSC's robots.txt Tester).
3. Remove or narrow the Disallow rule in robots.txt so Googlebot can crawl the URL.
4. Add a noindex meta tag to each affected page:
   &lt;meta name=&quot;robots&quot; content=&quot;noindex, follow&quot;&gt;
   Or send an X-Robots-Tag: noindex HTTP header at the server/CDN level.
5. Verify with GSC URL Inspection that the page is now crawlable and noindex is detected.
6. Click &quot;Request Indexing&quot; to speed up the recrawl.
7. Wait 1-4 weeks for Google to drop the URL from its index.
8. Once the URL is deindexed, you can re-add the Disallow rule if you want to save crawl budget.
9. For sensitive URLs, also add HTTP auth or IP allowlisting - robots.txt is not a security control.</pre>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, marginTop: 40 }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Why is my page indexed though blocked by robots.txt?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Robots.txt blocks crawling, not indexing. If another site links to your URL, Google can still add it to its index based on the anchor text and external context - even without crawling the page content. The result is a URL in search results with no description.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>How do I remove a page that is indexed though blocked?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Remove the Disallow rule from robots.txt so Googlebot can crawl the page, then add a noindex meta tag to the page itself. Once Google recrawls and sees the noindex, it will drop the URL from the index. You can then re-block with robots.txt if you want to save crawl budget.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Is &quot;Indexed though blocked&quot; the same as &quot;Blocked by robots.txt&quot;?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>No. &quot;Blocked by robots.txt&quot; means Google respected your rule and did not index the URL. &quot;Indexed though blocked&quot; means Google indexed it anyway because of external signals, even though it could not crawl the content. They are different statuses with different fixes.</div>
          </div>
        </div>

        <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
          <div style={{ fontSize: 22, fontWeight: 700, color: 'white', marginBottom: 8 }}>Find every robots.txt conflict on your site</div>
          <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free sitemap and indexing analysis in 60 seconds</div>
          <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 32px', borderRadius: 8, textDecoration: 'none', fontWeight: 700, fontSize: 15 }}>Analyze My Sitemap Free</a>
        </div>

        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Related GSC indexing statuses</div>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <li><a href="/gsc-errors/blocked-by-robots-txt" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Blocked by robots.txt</a></li>
            <li><a href="/gsc-errors/excluded-by-noindex-tag" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Excluded by noindex tag</a></li>
            <li><a href="/gsc-errors/crawled-not-indexed" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Crawled - not indexed</a></li>
            <li><a href="/learn/wordpress-robots-txt-guide" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>WordPress Robots.txt Guide</a></li>
          </ul>
          <div style={{ marginTop: 16 }}>
            <a href="/gsc-errors" style={{ color: '#2d5be3', fontSize: 13 }}>All GSC indexing errors</a>
          </div>
        </div>
      </div>
    </>
  );
}
