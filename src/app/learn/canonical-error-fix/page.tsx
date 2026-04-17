import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Canonical Tag Errors: Diagnose and Fix',
  description: 'The 6 most common canonical errors and canonical issues, how to detect each in Google Search Console, and the exact fix for every case.',
  keywords: 'canonical error, canonical issues, canonical tag error, canonical errors, canonical tag issues, canonical problems, google chose different canonical, duplicate without user-selected canonical',
  alternates: { canonical: 'https://sitemapfixer.com/learn/canonical-error-fix' },
  openGraph: {
    title: 'Canonical Tag Errors: Diagnose and Fix',
    description: 'Diagnose and fix the 6 most common canonical errors reported in Google Search Console.',
    url: 'https://sitemapfixer.com/learn/canonical-error-fix',
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
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px', fontFamily: 'Geist, sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"Article","headline":"Canonical Tag Errors: How to Diagnose and Fix Them","description":"The 6 most common canonical errors, how to detect them, and the exact fix for each.","url":"https://sitemapfixer.com/learn/canonical-error-fix","author":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com"},"publisher":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com","logo":{"@type":"ImageObject","url":"https://sitemapfixer.com/opengraph-image"}},"datePublished":"2026-04-17","mainEntityOfPage":{"@type":"WebPage","@id":"https://sitemapfixer.com/learn/canonical-error-fix"}}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What does \\"Duplicate, Google chose different canonical than user\\" mean?","acceptedAnswer":{"@type":"Answer","text":"Google received your canonical tag but picked a different URL as the canonical based on signals like internal links, sitemap entries, and content similarity. Usually means your canonical conflicts with stronger signals elsewhere on the site."}},{"@type":"Question","name":"Can a page have two canonical tags?","acceptedAnswer":{"@type":"Answer","text":"It can, but Google will ignore both and pick its own canonical. This commonly happens when a CMS adds one canonical and a plugin (like Yoast or Rank Math) adds another. Always audit the rendered HTML to confirm a single canonical is present."}},{"@type":"Question","name":"How do I find canonical errors in Google Search Console?","acceptedAnswer":{"@type":"Answer","text":"Go to Indexing, then Pages. Look for the categories \\"Alternate page with proper canonical tag,\\" \\"Duplicate without user-selected canonical,\\" and \\"Duplicate, Google chose different canonical than user.\\" Each lists the affected URLs."}}]}' }} />
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Canonical Tag Errors</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Canonical Tag Errors: How to Diagnose and Fix Them</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Scan your site for canonical issues</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8 }}>
        <p style={{ marginBottom: 20 }}>A canonical error is any situation where your canonical tag sends Google a signal that conflicts with the rest of the page, the site, or the way the URL actually responds. Canonical issues silently hurt indexing — Google either ignores the tag, drops the page from the index, or consolidates signals on the wrong URL. This guide walks through the six most common canonical errors, how to detect each in Google Search Console, and the exact fix.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>1. Missing Canonical Tag</h2>
        <p style={{ marginBottom: 20 }}>No canonical is present in the <code>&lt;head&gt;</code>. For unique content this is acceptable because Google will self-canonicalize, but for any page with possible parameter or duplicate variants (e.g. <code>?utm_source</code>), Google picks its own canonical — and often picks wrong. <strong>Fix:</strong> add a self-referencing canonical to every indexable page. Detect with a crawler or by searching Search Console for "Duplicate without user-selected canonical."</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>2. Self-Referencing Wrong URL</h2>
        <p style={{ marginBottom: 20 }}>The canonical points to a URL that differs from the rendered URL — often because of trailing slashes, uppercase vs lowercase, or stripped query parameters. <strong>Fix:</strong> make sure the canonical matches the fully-resolved URL exactly, including the trailing slash policy your site uses. Detect by comparing <code>window.location.href</code> to the canonical <code>href</code> on a sample of pages.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>3. Protocol Mismatch (HTTP vs HTTPS)</h2>
        <p style={{ marginBottom: 20 }}>The page loads over HTTPS but the canonical points to the <code>http://</code> version, or vice versa. This is common after HTTPS migrations where CMS settings were not updated. Google will usually respect HTTPS regardless, but the mismatch can cause "Duplicate, Google chose different canonical than user" in Search Console. <strong>Fix:</strong> update the site URL in your CMS and regenerate canonicals. Verify by searching your codebase for hard-coded <code>http://</code> references.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>4. Canonical Chain</h2>
        <p style={{ marginBottom: 20 }}>Page A canonicals to page B, and page B canonicals to page C. Google follows one hop but discourages chains — signals may be diluted and the final canonical may not be respected. <strong>Fix:</strong> always point the canonical directly at the final target. If you have many chains, crawl the site and update all intermediate canonicals in one pass.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>5. Canonical to a Redirected URL</h2>
        <p style={{ marginBottom: 20 }}>The canonical points to a URL that returns a 301 or 302. Google will follow the redirect but treats this as a conflicting signal — why would you canonical to a URL you are also telling search engines has moved? <strong>Fix:</strong> always canonical to a URL that returns 200 OK. Detect by crawling your site and flagging any canonical target that does not return 200.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>6. Multiple Canonicals on One Page</h2>
        <p style={{ marginBottom: 20 }}>The rendered HTML contains two or more <code>&lt;link rel="canonical"&gt;</code> tags. This is usually caused by a theme, CMS, and SEO plugin all injecting one independently. Google will ignore all of them and pick its own canonical. <strong>Fix:</strong> view source, locate every canonical, and remove duplicates at the source. On WordPress this typically means disabling canonicals in either the theme or the SEO plugin, never both.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>How Google Handles Conflicts</h2>
        <p style={{ marginBottom: 20 }}>When canonical conflicts with other signals — internal links, sitemap entries, hreflang, redirects — Google ignores the canonical and picks its own. In Search Console this shows up as "Duplicate, Google chose different canonical than user," listing the URL Google picked. If you see this, align your internal links and sitemap with the canonical. The fix is almost never more canonical tags; it is making the rest of the site agree with the one you already have.</p>

        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/learn/canonical-redirect-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Canonical vs Redirect: When to Use Each for SEO</a></li>
            <li><a href="/learn/hreflang-canonical-relationship" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Hreflang and Canonical Tags: How They Work Together</a></li>
            <li><a href="/learn/canonical-noindex-relationship" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Canonical + Noindex: The Conflict Google Warns About</a></li>
            <li><a href="/learn/how-to-add-canonical-tag-in-html" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>How to Add a Canonical Tag in HTML (With Examples)</a></li>
          </ul>
        </div>
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Find every canonical error on your site</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>
      <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
        <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Related guides</div>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <li><a href="/learn/canonical-redirect-guide" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Canonical vs Redirect</a></li>
          <li><a href="/learn/hreflang-canonical-relationship" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Hreflang & Canonical</a></li>
          <li><a href="/learn/canonical-noindex-relationship" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Canonical + Noindex</a></li>
          <li><a href="/learn/how-to-add-canonical-tag-in-html" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Add Canonical in HTML</a></li>
        </ul>
      </div>
    </div>
  );
}
