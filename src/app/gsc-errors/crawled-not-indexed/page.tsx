import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Crawled - Currently Not Indexed: GSC Fix Guide',
  description: 'The "Crawled - currently not indexed" status means Google fetched your page but chose not to index it - almost always a content quality issue.',
  keywords: 'crawled currently not indexed, gsc crawled not indexed, google decided not to index, content quality indexing, thin content google',
  alternates: { canonical: 'https://sitemapfixer.com/gsc-errors/crawled-not-indexed' },
  openGraph: {
    title: 'Crawled - Currently Not Indexed: GSC Fix Guide',
    description: 'The "Crawled - currently not indexed" status means Google fetched your page but chose not to index it - almost always a content quality issue.',
    url: 'https://sitemapfixer.com/gsc-errors/crawled-not-indexed',
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
  const faqSchema = "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"What is the difference between 'Crawled - not indexed' and 'Discovered - not indexed'?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"'Discovered' means Google knows the URL but has not fetched it. 'Crawled' means Google fetched it, looked at the content, and deliberately chose not to index it. Crawled-not-indexed is almost always a content quality signal, while Discovered is more about crawl priority.\"}},{\"@type\":\"Question\",\"name\":\"Will Google index my page eventually?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Sometimes yes - Google says the page 'may or may not be indexed in the future' and this status is explicitly 'final decision pending'. But in practice, pages that stay here for weeks without changes rarely flip to indexed on their own. Content improvement is usually required.\"}},{\"@type\":\"Question\",\"name\":\"My page has unique content - why is it crawled-not-indexed?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Uniqueness is not enough. Google weighs search demand, topical authority of the domain, depth and usefulness of the content, and whether better pages already exist for the same queries. A technically unique page with low search demand and no topical backing can still be rejected.\"}}]}";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'Crawled - Currently Not Indexed: GSC Fix Guide', description: 'The "Crawled - currently not indexed" status means Google fetched your page but chose not to index it - almost always a content quality issue.', url: 'https://sitemapfixer.com/gsc-errors/crawled-not-indexed', author: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com' }, publisher: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com', logo: { '@type': 'ImageObject', url: 'https://sitemapfixer.com/opengraph-image' } }, datePublished: '2026-04-17', mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://sitemapfixer.com/gsc-errors/crawled-not-indexed' } }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sitemapfixer.com/' }, { '@type': 'ListItem', position: 2, name: 'GSC Errors', item: 'https://sitemapfixer.com/gsc-errors' }, { '@type': 'ListItem', position: 3, name: 'Crawled - Currently Not Indexed: GSC Fix Guide', item: 'https://sitemapfixer.com/gsc-errors/crawled-not-indexed' }] }),
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
          <span>Crawled - currently not indexed</span>
        </nav>

        <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>
          Crawled - currently not indexed
        </h1>

        <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 40 }}>
          &quot;Crawled - currently not indexed&quot; is Google&apos;s way of saying &quot;I fetched your page, I looked at it, and I decided not to include it in my index.&quot; There is no tag to remove or server error to fix - Google just did not think the page was worth indexing. This status is almost always a signal that the content needs to be better, more unique, or backed by stronger demand signals.
        </p>

        <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 4 }}>Identify low-value URLs dragging your site down</div>
            <div style={{ fontSize: 13, color: '#6b6b7d' }}>We flag thin and duplicate patterns hurting your overall index coverage</div>
          </div>
          <a href="/" style={{ background: '#0a0a0f', color: 'white', padding: '12px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 14, whiteSpace: 'nowrap' }}>
            Analyze My Sitemap
          </a>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>What this GSC status means</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>Googlebot successfully fetched the URL (HTTP 200, crawlable, no noindex). It rendered the page, analyzed the content, and concluded that the page does not add enough value to warrant indexing. Google&apos;s documentation describes it as &quot;may or may not be indexed in the future&quot; - essentially a pending or rejected verdict. The decision is based on perceived content quality, demand for the topic, uniqueness, and how the URL fits into the broader site.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common causes</h2>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 32 }}>
          <li style={{ marginBottom: 8 }}>Thin content - under ~300 words, mostly boilerplate, or template-generated pages with little unique value.</li>
          <li style={{ marginBottom: 8 }}>Near-duplicate content - pages that are 80%+ similar to other indexed pages on the same or other domains.</li>
          <li style={{ marginBottom: 8 }}>Low-demand topics - nobody searches for this, so Google sees no point in indexing it.</li>
          <li style={{ marginBottom: 8 }}>AI-generated or spun content that lacks original insight, examples, or data.</li>
          <li style={{ marginBottom: 8 }}>Pages with zero or very few internal links - Google interprets this as you not valuing the page either.</li>
          <li style={{ marginBottom: 8 }}>Auto-generated tag, filter, or archive pages that list other pages without unique narrative.</li>
          <li style={{ marginBottom: 8 }}>Localized or translated pages that just reshuffle the same content without real localization.</li>
        </ul>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How it affects indexing</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>The affected URLs are not indexed, do not rank, and receive zero organic traffic. Worse, a large number of crawled-not-indexed URLs acts as a negative signal about overall site quality - Google may start deprioritizing related URLs too. Sites with thousands of URLs in this bucket often see general ranking decay across the entire domain until the thin content is pruned or improved.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How to diagnose</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>Open the report in GSC and export the URL list. Group the URLs by pattern - are they all from one template, category, or content type? Pick 10 samples and open each: is the unique on-page content under 300 words? Does it repeat large blocks from other pages? Is there search demand for the primary query? Check for scraped or AI-generated patterns. URL Inspection confirms the crawl happened successfully and rules out other issues.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How to fix</h2>
        <div style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
          <pre style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: '#1c1c26', whiteSpace: 'pre-wrap', fontFamily: 'DM Mono, monospace' }}>1. Audit the URL list - decide for each: keep and improve, consolidate, noindex, or 301 redirect.
2. For keep-and-improve: expand the content with unique data, examples, images, original research, or expert quotes.
3. For near-duplicates: consolidate with 301 redirects to the strongest version and strengthen that page.
4. For thin archive/tag/filter pages: add noindex, follow if they should not rank but help navigation.
5. Add internal links from high-authority pages to signal that the URL matters to you.
6. Improve E-E-A-T signals: author bio, publication date, sourcing, schema markup.
7. Target queries with actual search volume - use keyword tools to confirm demand before publishing.
8. Request Indexing on the improved pages and wait 2-4 weeks for Google to reassess.
9. If it is a large pattern (thousands of URLs), prune aggressively - Google values 500 great pages over 5,000 mediocre ones.</pre>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, marginTop: 40 }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>What is the difference between &quot;Crawled - not indexed&quot; and &quot;Discovered - not indexed&quot;?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>&quot;Discovered&quot; means Google knows the URL but has not fetched it. &quot;Crawled&quot; means Google fetched it, looked at the content, and deliberately chose not to index it. Crawled-not-indexed is almost always a content quality signal, while Discovered is more about crawl priority.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Will Google index my page eventually?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Sometimes yes - Google says the page &quot;may or may not be indexed in the future&quot; and this status is explicitly &quot;final decision pending&quot;. But in practice, pages that stay here for weeks without changes rarely flip to indexed on their own. Content improvement is usually required.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>My page has unique content - why is it crawled-not-indexed?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Uniqueness is not enough. Google weighs search demand, topical authority of the domain, depth and usefulness of the content, and whether better pages already exist for the same queries. A technically unique page with low search demand and no topical backing can still be rejected.</div>
          </div>
        </div>

        <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
          <div style={{ fontSize: 22, fontWeight: 700, color: 'white', marginBottom: 8 }}>Turn rejected pages into indexed pages</div>
          <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Find thin and duplicate patterns in your sitemap in 60 seconds</div>
          <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 32px', borderRadius: 8, textDecoration: 'none', fontWeight: 700, fontSize: 15 }}>
            Analyze My Sitemap Free
          </a>
        </div>

        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Related GSC indexing statuses</div>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <li><a href="/gsc-errors/discovered-not-indexed" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Discovered - not indexed</a></li>
            <li><a href="/gsc-errors/soft-404" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Soft 404</a></li>
            <li><a href="/gsc-errors/duplicate-without-canonical" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Duplicate without canonical</a></li>
          </ul>
          <div style={{ marginTop: 16 }}>
            <a href="/gsc-errors" style={{ color: '#2d5be3', fontSize: 13 }}>All GSC indexing errors</a>
          </div>
        </div>
      </div>
    </>
  );
}
