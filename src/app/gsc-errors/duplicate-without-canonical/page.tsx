import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Duplicate Without User-Selected Canonical: GSC Fix Guide',
  description: 'The "Duplicate without user-selected canonical" status in GSC means you have duplicate content and no canonical tag - Google picked its own. Fix it.',
  keywords: 'duplicate without user-selected canonical, google selected canonical, duplicate content gsc, canonical tag missing, fix duplicate pages',
  alternates: { canonical: 'https://sitemapfixer.com/gsc-errors/duplicate-without-canonical' },
  openGraph: {
    title: 'Duplicate Without User-Selected Canonical - GSC Fix',
    description: 'The "Duplicate without user-selected canonical" status in GSC means you have duplicate content and no canonical tag - Google picked its own. Fix it.',
    url: 'https://sitemapfixer.com/gsc-errors/duplicate-without-canonical',
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
  const faqSchema = "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Why is this happening even on pages I think are unique?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Google detects duplication based on rendered HTML similarity, not just URL. Thin pages, templated content, near-identical descriptions, or boilerplate-heavy pages can all look duplicative even if the URLs differ. Check if your unique content is visible before JavaScript runs.\"}},{\"@type\":\"Question\",\"name\":\"What did Google pick as the canonical?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Use the URL Inspection tool on the affected URL. The 'Google-selected canonical' field shows the URL Google chose. If it is not the one you want ranking, that is the signal you need to declare an explicit canonical.\"}},{\"@type\":\"Question\",\"name\":\"Will adding a canonical tag fix it immediately?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Not immediately - Google has to recrawl the URL and re-evaluate. It usually takes days to a few weeks. Request indexing on the canonical URL to speed things up, but patience is the bigger requirement.\"}}]}";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'Duplicate Without User-Selected Canonical: GSC Fix Guide', description: 'The "Duplicate without user-selected canonical" status in GSC means you have duplicate content and no canonical tag - Google picked its own. Fix it.', url: 'https://sitemapfixer.com/gsc-errors/duplicate-without-canonical', author: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com' }, publisher: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com', logo: { '@type': 'ImageObject', url: 'https://sitemapfixer.com/opengraph-image' } }, datePublished: '2026-04-17', mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://sitemapfixer.com/gsc-errors/duplicate-without-canonical' } }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sitemapfixer.com/' }, { '@type': 'ListItem', position: 2, name: 'GSC Errors', item: 'https://sitemapfixer.com/gsc-errors' }, { '@type': 'ListItem', position: 3, name: 'Duplicate Without User-Selected Canonical: GSC Fix Guide', item: 'https://sitemapfixer.com/gsc-errors/duplicate-without-canonical' }] }),
        }}
      />

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
          <span>Duplicate without user-selected canonical</span>
        </nav>

        <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>
          Duplicate without user-selected canonical
        </h1>

        <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 40 }}>
          This status means Google found duplicate content across multiple URLs and you did not declare a rel=&quot;canonical&quot; tag telling it which one to prefer. So Google picked its own canonical - which is sometimes the URL you wanted and sometimes not. This is one of the more impactful indexing statuses because it means you are losing control over which URL shows in search results.
        </p>

        <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 4 }}>Find pages missing canonical tags</div>
            <div style={{ fontSize: 13, color: '#6b6b7d' }}>We scan your sitemap and flag URLs without self-referential or custom canonicals</div>
          </div>
          <a href="/" style={{ background: '#0a0a0f', color: 'white', padding: '12px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 14, whiteSpace: 'nowrap' }}>
            Analyze My Sitemap
          </a>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>What this GSC status means</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>Google clustered this URL together with one or more duplicate URLs and had to pick one to index. Because you did not specify a canonical in the HTML (or the canonical was invalid), Google used its own heuristics - inbound links, URL length, cleanliness, HTTPS, hostname preference - to select the canonical. This URL ended up on the losing side of that selection and is excluded from the index.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common causes</h2>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 32 }}>
          <li style={{ marginBottom: 8 }}>No rel=&quot;canonical&quot; tag on pages that are accessible via multiple URLs (with/without trailing slash, with/without query params, capital vs lowercase).</li>
          <li style={{ marginBottom: 8 }}>E-commerce stores serving the same product under multiple category paths (example.com/shoes/nike-air and example.com/nike/nike-air).</li>
          <li style={{ marginBottom: 8 }}>Faceted navigation creating URLs that render the same product list.</li>
          <li style={{ marginBottom: 8 }}>Syndicated content republished without canonicals pointing back to the original.</li>
          <li style={{ marginBottom: 8 }}>Thin or near-empty pages that look identical to other thin pages on your site.</li>
          <li style={{ marginBottom: 8 }}>Pagination implemented without rel=&quot;canonical&quot; self-references and without prev/next hints.</li>
        </ul>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How it affects indexing</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>The affected URLs are not indexed and do not rank. If Google selected a different URL than the one you consider primary, your link equity and rankings can get split or consolidated on the wrong page. It also means future content updates, internal linking improvements, and backlinks may be attributed to the wrong URL - a real commercial cost over time.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How to diagnose</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>Open the report in GSC and pick a sample URL. Run URL Inspection - the &quot;Google-selected canonical&quot; field reveals which URL Google chose. Compare it with the URL you intended to rank. Then view source on both URLs and confirm neither has a canonical tag (or that they conflict). Use a crawler to check how many other URLs serve near-identical content.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How to fix</h2>
        <div style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
          <pre style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: '#1c1c26', whiteSpace: 'pre-wrap', fontFamily: 'DM Mono, monospace' }}>1. Decide which URL should be the canonical - the one with the best backlinks, cleanest URL, and strongest signals.
2. Add &lt;link rel=&quot;canonical&quot; href=&quot;https://example.com/canonical-url&quot;&gt; to the &lt;head&gt; of every duplicate.
3. On the canonical itself, include a self-referential canonical tag pointing to its own URL.
4. If the duplicates should not exist at all, 301 redirect them to the canonical instead of just tagging.
5. Differentiate the content if the pages should remain separate - add unique text, titles, and metadata.
6. For pagination, use self-referential canonicals on each page (not rel=&quot;canonical&quot; to page 1).
7. Remove duplicate URLs from sitemap.xml - only list canonicals.
8. Use URL Inspection &gt; Request Indexing on the canonical to get it re-crawled.</pre>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, marginTop: 40 }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Why is this happening even on pages I think are unique?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Google detects duplication based on rendered HTML similarity, not just URL. Thin pages, templated content, near-identical descriptions, or boilerplate-heavy pages can all look duplicative even if the URLs differ. Check if your unique content is visible before JavaScript runs.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>What did Google pick as the canonical?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Use the URL Inspection tool on the affected URL. The &quot;Google-selected canonical&quot; field shows the URL Google chose. If it is not the one you want ranking, that is the signal you need to declare an explicit canonical.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Will adding a canonical tag fix it immediately?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Not immediately - Google has to recrawl the URL and re-evaluate. It usually takes days to a few weeks. Request indexing on the canonical URL to speed things up, but patience is the bigger requirement.</div>
          </div>
        </div>

        <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
          <div style={{ fontSize: 22, fontWeight: 700, color: 'white', marginBottom: 8 }}>Take back control of which URLs get indexed</div>
          <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free audit - find missing canonicals and duplicate content across your site</div>
          <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 32px', borderRadius: 8, textDecoration: 'none', fontWeight: 700, fontSize: 15 }}>
            Analyze My Sitemap Free
          </a>
        </div>

        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Related GSC indexing statuses</div>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <li><a href="/gsc-errors/alternate-page-with-canonical" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Alternate page with canonical</a></li>
            <li><a href="/gsc-errors/crawled-not-indexed" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Crawled - not indexed</a></li>
            <li><a href="/gsc-errors/page-with-redirect" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Page with redirect</a></li>
          </ul>
          <div style={{ marginTop: 16 }}>
            <a href="/gsc-errors" style={{ color: '#2d5be3', fontSize: 13 }}>All GSC indexing errors</a>
          </div>
        </div>
      </div>
    </>
  );
}
