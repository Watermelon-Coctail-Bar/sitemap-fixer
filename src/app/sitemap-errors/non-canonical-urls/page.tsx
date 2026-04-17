import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Non-Canonical URLs in Sitemap: Fix Guide',
  description: 'Find URLs in your sitemap whose canonical tag points elsewhere. Non-canonical entries split ranking signals and confuse Google about which version to index.',
  keywords: 'non-canonical URLs sitemap, rel canonical sitemap conflict, canonical mismatch sitemap, GSC alternate page with proper canonical tag, sitemap canonical URL rules',
  alternates: { canonical: 'https://sitemapfixer.com/sitemap-errors/non-canonical-urls' },
  openGraph: {
    title: 'Non-Canonical URLs in Sitemap - Fix & Best Practices',
    description: 'Find URLs in your sitemap whose canonical tag points elsewhere. Non-canonical entries split ranking signals and confuse Google about which version to index.',
    url: 'https://sitemapfixer.com/sitemap-errors/non-canonical-urls',
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
  const faqSchema = "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"What's the difference between a canonical URL and a sitemap URL?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"The canonical tag (rel=canonical) tells Google which version of a duplicate page is the 'master.' A sitemap URL tells Google which pages to discover. These two lists should match exactly - every sitemap URL should be self-canonical.\"}},{\"@type\":\"Question\",\"name\":\"Why does GSC say 'Alternate page with proper canonical tag'?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"That status means Google found the URL (often from your sitemap) but chose a different page as the canonical. Google is telling you: remove this URL from your sitemap and list the canonical version instead.\"}},{\"@type\":\"Question\",\"name\":\"Should parameter URLs ever be in a sitemap?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Only if the parameterized URL is self-canonical and has unique content. Sorting, filtering, and tracking parameters (utm_, fbclid, sort=) should never be in a sitemap - list only the clean canonical URL.\"}}]}";

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
          <span>Non-canonical URLs</span>
        </nav>

        <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>
          Non-Canonical URLs in Your Sitemap
        </h1>

        <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 40 }}>
          Every URL in your sitemap should be self-canonical - meaning the <code>&lt;link rel="canonical"&gt;</code> tag on the page points to the same URL that appears in the sitemap. When the two disagree, you&apos;re telling Google "discover this URL, but actually index that one instead" - a mixed signal that dilutes ranking authority.
        </p>

        <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 4 }}>Detect canonical mismatches</div>
            <div style={{ fontSize: 13, color: '#6b6b7d' }}>We fetch every URL and compare it to its canonical tag - mismatches get flagged</div>
          </div>
          <a href="/" style={{ background: '#0a0a0f', color: 'white', padding: '12px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 14, whiteSpace: 'nowrap' }}>
            Analyze My Sitemap
          </a>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>What is this error?</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>A non-canonical URL error happens when a page listed in your sitemap has a <code>&lt;link rel="canonical" href="..."&gt;</code> tag pointing to a different URL. For example, your sitemap lists <code>/product?color=red</code>, but the page&apos;s canonical tag says <code>/product</code>. Google Search Console surfaces these as "Alternate page with proper canonical tag" in the Pages report.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Why does it happen?</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>This commonly occurs on e-commerce sites where variant URLs (color, size, sort order) all canonical to the base product page but still end up in the sitemap. It also happens after URL migrations when the sitemap still lists old URLs that now canonical to new ones, or on paginated pages where /page/2 canonicals to /page/1 but is listed separately in the sitemap.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Why does it hurt SEO?</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>Google will not index a non-canonical URL - it processes the signal and drops the URL from candidacy. That wastes a slot in your sitemap and wastes crawl budget. Worse, Google tracks the ratio of self-canonical to non-canonical URLs in your sitemap as a quality signal. A sitemap where 30%+ of URLs are non-canonical gets treated with less trust overall.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How to detect it</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>Search Console&apos;s Pages report under "Alternate page with proper canonical tag" is the authoritative source. Sitemap Fixer fetches each sitemap URL, parses the <code>&lt;link rel="canonical"&gt;</code> tag (including HTTP Link headers), and reports every mismatch - so you can see the problems before Google does.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How to fix it</h2>
        <div style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
          <pre style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: '#1c1c26', whiteSpace: 'pre-wrap', fontFamily: 'DM Mono, monospace' }}>1. For each non-canonical URL in the sitemap, note what its canonical points to.
2. If the canonical target is already in the sitemap: just remove the non-canonical duplicate.
3. If the canonical target is missing: replace the non-canonical URL with the canonical one.
4. Update your sitemap generator to only include pages where URL === canonical.
5. Regenerate, resubmit in Search Console, and validate the fix in the Pages report.
6. Long-term: add a build-time validator that blocks non-canonical URLs from entering the sitemap.</pre>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Real-world example</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>A fashion retailer had 45,000 URLs in their sitemap - but 28,000 were size/color variants that canonicalled to the parent product. After filtering to only self-canonical URLs, the sitemap shrank to 17,000 entries and Google&apos;s "Indexed" count for products jumped 19% within 3 weeks.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common mistakes</h2>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 32 }}>
          <li style={{ marginBottom: 8 }}>Listing paginated pages like /blog/page/2 when they canonical to /blog</li>
          <li style={{ marginBottom: 8 }}>Including faceted filter URLs where the canonical strips the filter parameters</li>
          <li style={{ marginBottom: 8 }}>Forgetting that canonical tags are case-sensitive on the path</li>
        </ul>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, marginTop: 40 }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>What&apos;s the difference between a canonical URL and a sitemap URL?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>The canonical tag (rel=canonical) tells Google which version of a duplicate page is the &apos;master.&apos; A sitemap URL tells Google which pages to discover. These two lists should match exactly - every sitemap URL should be self-canonical.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Why does GSC say &apos;Alternate page with proper canonical tag&apos;?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>That status means Google found the URL (often from your sitemap) but chose a different page as the canonical. Google is telling you: remove this URL from your sitemap and list the canonical version instead.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Should parameter URLs ever be in a sitemap?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Only if the parameterized URL is self-canonical and has unique content. Sorting, filtering, and tracking parameters (utm_, fbclid, sort=) should never be in a sitemap - list only the clean canonical URL.</div>
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
            <li><a href="/sitemap-errors/duplicate-urls" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Duplicate URLs</a></li>
            <li><a href="/sitemap-errors/noindex-urls" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Noindex URLs</a></li>
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
