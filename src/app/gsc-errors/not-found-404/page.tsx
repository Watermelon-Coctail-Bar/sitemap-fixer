import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Not Found (404) in Google Search Console: Fix Guide',
  description: 'The "Not found (404)" status in Google Search Console means Google requested a URL and the server returned a 404. Learn when 404s are harmful, when they are fine, and how to fix them.',
  keywords: 'not found 404, 404 error google search console, gsc 404 error, fix 404 errors, soft 404 vs 404',
  alternates: { canonical: 'https://sitemapfixer.com/gsc-errors/not-found-404' },
  openGraph: {
    title: 'Not Found (404) - GSC Indexing Status Explained',
    description: 'The "Not found (404)" status in Google Search Console means Google requested a URL and the server returned a 404. Learn when 404s are harmful, when they are fine, and how to fix them.',
    url: 'https://sitemapfixer.com/gsc-errors/not-found-404',
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
  const faqSchema = "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Do 404 errors hurt my SEO?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"404s on pages that genuinely no longer exist are normal and fine - Google expects them. They hurt SEO only when (a) pages still linked internally or externally return 404 instead of redirecting, (b) URLs in your sitemap return 404, or (c) valuable pages unintentionally 404 due to a deployment or CMS bug.\"}},{\"@type\":\"Question\",\"name\":\"Should I 301 every 404 to a related page?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"No. Only 301 redirect when there is a close, intentional equivalent - same topic, same intent. Redirecting unrelated 404s to your homepage or category pages creates 'soft 404' patterns and can be worse than just serving the 404.\"}},{\"@type\":\"Question\",\"name\":\"How long will Google keep checking a 404 URL?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Google can recheck 404 URLs for months, especially if they have external backlinks. That is normal behavior - Google is verifying the page truly is gone. It does not harm you unless the URL is in your sitemap or internal links still point at it.\"}}]}";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'Not Found (404) in Google Search Console: Fix Guide', description: 'The "Not found (404)" status in Google Search Console means Google requested a URL and the server returned a 404. Learn when 404s are harmful, when they are fine, and how to fix them.', url: 'https://sitemapfixer.com/gsc-errors/not-found-404', author: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com' }, publisher: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com', logo: { '@type': 'ImageObject', url: 'https://sitemapfixer.com/opengraph-image' } }, datePublished: '2026-04-17', mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://sitemapfixer.com/gsc-errors/not-found-404' } }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sitemapfixer.com/' }, { '@type': 'ListItem', position: 2, name: 'GSC Errors', item: 'https://sitemapfixer.com/gsc-errors' }, { '@type': 'ListItem', position: 3, name: 'Not Found (404) in Google Search Console: Fix Guide', item: 'https://sitemapfixer.com/gsc-errors/not-found-404' }] }),
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
          <span>Not found (404)</span>
        </nav>

        <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>
          Not found (404)
        </h1>

        <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 40 }}>
          The &quot;Not found (404)&quot; status in Google Search Console means Googlebot tried to fetch a URL and your server returned an HTTP 404 Not Found response. 404s are a normal part of the web - when a page is genuinely gone, returning a 404 is the right thing to do. The problem is not 404s themselves, it is 404s on URLs that shouldn&apos;t be 404ing: sitemap entries, internally linked URLs, and pages that should exist but don&apos;t due to a bug.
        </p>

        <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 4 }}>Find 404 URLs in your sitemap</div>
            <div style={{ fontSize: 13, color: '#6b6b7d' }}>We fetch every sitemap URL and flag the ones returning 404 - free scan</div>
          </div>
          <a href="/" style={{ background: '#0a0a0f', color: 'white', padding: '12px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 14, whiteSpace: 'nowrap' }}>
            Analyze My Sitemap
          </a>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>What this GSC status means</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>Googlebot sent an HTTP request for the URL and received a 404 response (or 410 Gone - Google groups them together). Google removes the URL from the index after a 404 persists across a few recrawls. The URL itself can continue to be recrawled for months, especially if it has external links, but it will not appear in search results. Google groups 404 detection sources: sometimes Google learned of the URL from a link on your site, a backlink, or an old sitemap entry.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common causes</h2>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 32 }}>
          <li style={{ marginBottom: 8 }}>Pages intentionally deleted (old products, expired promotions, removed blog posts) - correct behavior.</li>
          <li style={{ marginBottom: 8 }}>URLs in your sitemap that point to pages that no longer exist - your sitemap was not regenerated.</li>
          <li style={{ marginBottom: 8 }}>Internal links (in menus, footers, sidebars) pointing to URLs that changed or were removed.</li>
          <li style={{ marginBottom: 8 }}>Broken backlinks from external sites pointing to URLs you never published.</li>
          <li style={{ marginBottom: 8 }}>CMS or deployment bugs that accidentally removed pages or changed URL structure.</li>
          <li style={{ marginBottom: 8 }}>Mistyped URLs from old blog posts, emails, or marketing campaigns.</li>
          <li style={{ marginBottom: 8 }}>Localization bugs serving 404 for pages that exist in a different locale.</li>
        </ul>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How it affects indexing</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>Genuine 404s are harmless - Google will drop them from the index and stop prioritizing them over time. But 404s cost when the URL still has incoming signals: valuable backlinks die, internal link equity leaks away, and URLs kept in sitemaps waste crawl budget. Unexpected 404s on pages you still want indexed represent direct traffic loss.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How to diagnose</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>In GSC, click &quot;Not found (404)&quot; to see the URL list and export it. For each URL, ask: should this page exist? Is the URL in your sitemap? Does it have backlinks (check Ahrefs, Semrush, or GSC Links report)? Is it still linked from anywhere on your site (Screaming Frog or a crawler will find internal linkers)? Test the URL with curl -I URL to confirm the status code is actually 404.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How to fix</h2>
        <div style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
          <pre style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: '#1c1c26', whiteSpace: 'pre-wrap', fontFamily: 'DM Mono, monospace' }}>1. Remove all 404 URLs from your sitemap.xml and regenerate it.
2. For URLs that should exist: restore the page or fix the bug causing the 404. Verify with curl that it returns 200.
3. For URLs with meaningful replacements: 301 redirect to the closest equivalent page (same intent, same topic).
4. For permanently removed pages with no equivalent: return 410 Gone instead of 404 - it signals &quot;deliberately gone&quot;.
5. Update internal links - replace links to 404 URLs with links to live equivalents or remove them entirely.
6. Reach out for broken backlinks worth recovering - ask external sites to update their links to your live URL.
7. Leave genuine 404s alone - do not redirect every 404 to the homepage (creates soft 404 patterns).
8. Resubmit the sitemap in Search Console so Google re-reads the updated URL list.</pre>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, marginTop: 40 }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Do 404 errors hurt my SEO?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>404s on pages that genuinely no longer exist are normal and fine - Google expects them. They hurt SEO only when (a) pages still linked internally or externally return 404 instead of redirecting, (b) URLs in your sitemap return 404, or (c) valuable pages unintentionally 404 due to a deployment or CMS bug.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Should I 301 every 404 to a related page?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>No. Only 301 redirect when there is a close, intentional equivalent - same topic, same intent. Redirecting unrelated 404s to your homepage or category pages creates &quot;soft 404&quot; patterns and can be worse than just serving the 404.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>How long will Google keep checking a 404 URL?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Google can recheck 404 URLs for months, especially if they have external backlinks. That is normal behavior - Google is verifying the page truly is gone. It does not harm you unless the URL is in your sitemap or internal links still point at it.</div>
          </div>
        </div>

        <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
          <div style={{ fontSize: 22, fontWeight: 700, color: 'white', marginBottom: 8 }}>Remove 404 URLs from your sitemap</div>
          <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free scan - we fetch every URL and flag the ones returning 404 or 410</div>
          <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 32px', borderRadius: 8, textDecoration: 'none', fontWeight: 700, fontSize: 15 }}>
            Analyze My Sitemap Free
          </a>
        </div>

        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Related GSC indexing statuses</div>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <li><a href="/gsc-errors/soft-404" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Soft 404</a></li>
            <li><a href="/gsc-errors/server-error-5xx" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Server error (5xx)</a></li>
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
