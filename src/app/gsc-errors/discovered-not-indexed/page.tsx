import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Discovered - Currently Not Indexed: GSC Fix Guide',
  description: 'The "Discovered - currently not indexed" status in Google Search Console means Google knows about your URL but has not crawled it yet. Learn what triggers this and how to get pages crawled.',
  keywords: 'discovered currently not indexed, gsc discovered not indexed, google not crawling pages, crawl budget issue, google indexing delay',
  alternates: { canonical: 'https://sitemapfixer.com/gsc-errors/discovered-not-indexed' },
  openGraph: {
    title: 'Discovered - Currently Not Indexed: GSC Fix Guide',
    description: 'The "Discovered - currently not indexed" status in Google Search Console means Google knows about your URL but has not crawled it yet. Learn what triggers this and how to get pages crawled.',
    url: 'https://sitemapfixer.com/gsc-errors/discovered-not-indexed',
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
  const faqSchema = "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"How long can a page stay in 'Discovered - currently not indexed'?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Weeks to months. Google explicitly says it delayed crawling to avoid overloading your server, or because its internal priority for the URL is low. Pages can sit here indefinitely - the fix is to raise the URL's priority through internal linking and demonstrate server capacity.\"}},{\"@type\":\"Question\",\"name\":\"Does 'Discovered' mean my page is low quality?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Not necessarily. Google has not even crawled the page yet, so it has no opinion on quality. It is more often a crawl-budget or site-authority issue. That said, if Google has deprioritized the URL based on surrounding signals (thin neighboring pages, poor internal links), content quality can indirectly contribute.\"}},{\"@type\":\"Question\",\"name\":\"Will Request Indexing fix this?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Sometimes for a single URL. But if hundreds or thousands of URLs are stuck in 'Discovered', Request Indexing is a band-aid. The real fix is improving site architecture, internal linking, server response time, and overall site authority so Google prioritizes your URLs during normal crawling.\"}}]}";

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
          <span>Discovered - currently not indexed</span>
        </nav>

        <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>
          Discovered - currently not indexed
        </h1>

        <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 40 }}>
          &quot;Discovered - currently not indexed&quot; is one of the most frustrating Google Search Console statuses because it means Google knows your URL exists (it found it in your sitemap or through a link) but has deliberately chosen not to crawl it yet. Google typically explains this by saying it delayed the request to avoid overloading your site. In practice, it almost always signals a crawl budget, site quality, or server capacity problem.
        </p>

        <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 4 }}>Fix sitemap issues that slow Google down</div>
            <div style={{ fontSize: 13, color: '#6b6b7d' }}>Clean sitemap = better crawl priority. Free analysis in 60 seconds</div>
          </div>
          <a href="/" style={{ background: '#0a0a0f', color: 'white', padding: '12px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 14, whiteSpace: 'nowrap' }}>
            Analyze My Sitemap
          </a>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>What this GSC status means</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>Google knows about the URL - it is in Google&apos;s known URLs list - but it has not been fetched yet. Google explicitly states: &quot;Typically, Google wanted to crawl the URL but this was expected to overload the site; therefore Google rescheduled the crawl.&quot; In reality, the rescheduling signal also correlates with low internal URL priority, poor site authority, and template-heavy or thin content patterns. Google is making a deliberate decision to not spend crawl budget on this URL right now.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common causes</h2>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 32 }}>
          <li style={{ marginBottom: 8 }}>Slow server response times (TTFB over 600ms) that make Google throttle crawl rate.</li>
          <li style={{ marginBottom: 8 }}>Bloated sitemaps listing thousands of URLs, many of which are thin or duplicative.</li>
          <li style={{ marginBottom: 8 }}>Weak internal linking - the URL is in the sitemap but has zero or few internal links.</li>
          <li style={{ marginBottom: 8 }}>Low overall site authority (new domain, few backlinks) - Google crawl budget is partly a function of PageRank.</li>
          <li style={{ marginBottom: 8 }}>A burst of new URLs that exceeds your normal publishing volume, signaling a potential spam pattern.</li>
          <li style={{ marginBottom: 8 }}>URLs that look like auto-generated patterns (tag/filter/search parameters).</li>
        </ul>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How it affects indexing</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>The URLs do not rank at all - they are not in the index. If it is a temporary queue, they will be crawled and likely indexed in the coming days or weeks. But when the bucket is large and stagnant (hundreds or thousands of URLs sitting there for months) it indicates Google has deprioritized most of your content. New publishing without authority growth will just add to the queue.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How to diagnose</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>In GSC, open the Page indexing report and click &quot;Discovered - currently not indexed&quot;. Look at the count and the URLs - are they your highest-value pages or low-priority ones? Check Settings &gt; Crawl stats for average response time and host issues. Run a crawl of your site with a tool and check for orphan pages (URLs in the sitemap with zero internal links). Verify server response time is under 500ms on a representative sample.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How to fix</h2>
        <div style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
          <pre style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: '#1c1c26', whiteSpace: 'pre-wrap', fontFamily: 'DM Mono, monospace' }}>1. Clean your sitemap - remove thin, duplicate, redirecting, and non-canonical URLs. Only submit high-quality canonicals.
2. Check Crawl Stats in GSC and work on server TTFB - aim for under 500ms average.
3. Add internal links from high-traffic, high-authority pages to each stuck URL (not just from the footer).
4. Consolidate or noindex thin pages so they do not dilute the quality signal for the whole site.
5. For critical URLs, use URL Inspection &gt; Request Indexing (limit ~10/day).
6. Build topical clusters - a hub page linking to related posts lifts every URL in the cluster.
7. Earn external backlinks to the site overall - higher authority = bigger crawl budget.
8. Split very large sitemaps by content type (products vs blog vs categories) to help Google prioritize.</pre>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, marginTop: 40 }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>How long can a page stay in &quot;Discovered - currently not indexed&quot;?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Weeks to months. Google explicitly says it delayed crawling to avoid overloading your server, or because its internal priority for the URL is low. Pages can sit here indefinitely - the fix is to raise the URL&apos;s priority through internal linking and demonstrate server capacity.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Does &quot;Discovered&quot; mean my page is low quality?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Not necessarily. Google has not even crawled the page yet, so it has no opinion on quality. It is more often a crawl-budget or site-authority issue. That said, if Google has deprioritized the URL based on surrounding signals (thin neighboring pages, poor internal links), content quality can indirectly contribute.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Will Request Indexing fix this?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Sometimes for a single URL. But if hundreds or thousands of URLs are stuck in &quot;Discovered&quot;, Request Indexing is a band-aid. The real fix is improving site architecture, internal linking, server response time, and overall site authority so Google prioritizes your URLs during normal crawling.</div>
          </div>
        </div>

        <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
          <div style={{ fontSize: 22, fontWeight: 700, color: 'white', marginBottom: 8 }}>Get Google to crawl your stuck URLs</div>
          <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Start with a clean sitemap - we flag the issues slowing your crawl rate</div>
          <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 32px', borderRadius: 8, textDecoration: 'none', fontWeight: 700, fontSize: 15 }}>
            Analyze My Sitemap Free
          </a>
        </div>

        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Related GSC indexing statuses</div>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <li><a href="/gsc-errors/crawled-not-indexed" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Crawled - not indexed</a></li>
            <li><a href="/gsc-errors/duplicate-without-canonical" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Duplicate without canonical</a></li>
            <li><a href="/gsc-errors/server-error-5xx" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Server error (5xx)</a></li>
          </ul>
          <div style={{ marginTop: 16 }}>
            <a href="/gsc-errors" style={{ color: '#2d5be3', fontSize: 13 }}>All GSC indexing errors</a>
          </div>
        </div>
      </div>
    </>
  );
}
