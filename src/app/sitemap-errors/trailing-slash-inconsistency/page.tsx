import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trailing Slash Inconsistency in Sitemap: Fix Guide',
  description: 'Fix trailing slash inconsistencies in your XML sitemap. Mixing /page and /page/ creates duplicate URLs, dilutes ranking signals, and wastes crawl budget.',
  keywords: 'trailing slash sitemap, sitemap URL consistency, trailing slash SEO, /page vs /page/, slash consistency XML sitemap, URL normalization sitemap',
  alternates: { canonical: 'https://sitemapfixer.com/sitemap-errors/trailing-slash-inconsistency' },
  openGraph: {
    title: 'Trailing Slash Inconsistency in Sitemap - Fix & Best Practices',
    description: 'Fix trailing slash inconsistencies in your XML sitemap. Mixing /page and /page/ creates duplicate URLs, dilutes ranking signals, and wastes crawl budget.',
    url: 'https://sitemapfixer.com/sitemap-errors/trailing-slash-inconsistency',
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
  const faqSchema = "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Does Google treat /page and /page/ as different URLs?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes. Google treats them as completely separate URLs that can rank independently, receive different backlinks, and appear twice in search results. Consistency is essential to avoid duplicate-content signals.\"}},{\"@type\":\"Question\",\"name\":\"Should I use trailing slashes or not?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Either is fine - pick one convention and stick with it across your entire site. Next.js and static sites often prefer no trailing slash; WordPress and Apache sites often add one. The key is consistency plus a server-level 301 to enforce it.\"}},{\"@type\":\"Question\",\"name\":\"How do I enforce a single trailing slash style?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Add a server-level 301 redirect from the 'wrong' version to the 'right' version. In Next.js use the trailingSlash config option. In Nginx use a rewrite rule. In Apache use mod_rewrite. Then regenerate your sitemap with the chosen style everywhere.\"}}]}";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'Trailing Slash Inconsistency in Sitemap: Fix Guide', description: 'Fix trailing slash inconsistencies in your XML sitemap. Mixing /page and /page/ creates duplicate URLs, dilutes ranking signals, and wastes crawl budget.', url: 'https://sitemapfixer.com/sitemap-errors/trailing-slash-inconsistency', author: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com' }, publisher: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com', logo: { '@type': 'ImageObject', url: 'https://sitemapfixer.com/opengraph-image' } }, datePublished: '2026-04-17', mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://sitemapfixer.com/sitemap-errors/trailing-slash-inconsistency' } }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sitemapfixer.com/' }, { '@type': 'ListItem', position: 2, name: 'Sitemap Errors', item: 'https://sitemapfixer.com/sitemap-errors' }, { '@type': 'ListItem', position: 3, name: 'Trailing Slash Inconsistency in Sitemap: Fix Guide', item: 'https://sitemapfixer.com/sitemap-errors/trailing-slash-inconsistency' }] }),
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
          <span>Trailing Slash Inconsistency</span>
        </nav>

        <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>
          Trailing Slash Inconsistencies in Your Sitemap
        </h1>

        <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 40 }}>
          <code>/about</code> and <code>/about/</code> are two different URLs to Google - and if both appear in your sitemap, you&apos;re creating a duplicate-content problem and splitting ranking signals between variants that should be unified. Consistency isn&apos;t optional: it&apos;s foundational to clean indexing.
        </p>

        <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 4 }}>Detect slash inconsistencies</div>
            <div style={{ fontSize: 13, color: '#6b6b7d' }}>We group URLs by their slash-normalized form and flag mismatches</div>
          </div>
          <a href="/" style={{ background: '#0a0a0f', color: 'white', padding: '12px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 14, whiteSpace: 'nowrap' }}>
            Analyze My Sitemap
          </a>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>What is this error?</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>Trailing slash inconsistency means your sitemap mixes URLs with and without trailing slashes. The classic signature: <code>/products/shoes</code> and <code>/products/shoes/</code> both appearing, or different sections of the site using different conventions (blog posts with slashes, product pages without). In Search Console this surfaces as "Duplicate without user-selected canonical" in the Pages report.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Why does it happen?</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>Framework migrations are the biggest cause: moving from WordPress (slashes) to Next.js (no slashes) without a consistent redirect strategy. Other causes: internal links built by different templates, URL variables stored inconsistently in the database, CDN edge configs adding slashes to some paths, and CMS plugins that generate different URL styles for different post types.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Why does it hurt SEO?</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>Google treats <code>/page</code> and <code>/page/</code> as separate URLs, so backlinks split between them, ranking signals dilute, and duplicate content emerges. If both serve a 200 response, Google picks a canonical on your behalf - often the wrong one. If one redirects to the other, both appearing in the sitemap wastes a slot and flags the redirecting URL as "Page with redirect."</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How to detect it</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>Sort your sitemap URLs alphabetically and look for near-duplicates differing only by a trailing slash. Sitemap Fixer automates this: we normalize every URL by stripping or adding a slash and then flag any pairs that collide in the normalized form - so you see exactly which URLs are doubled.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How to fix it</h2>
        <div style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
          <pre style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: '#1c1c26', whiteSpace: 'pre-wrap', fontFamily: 'DM Mono, monospace' }}>1. Pick a convention: with trailing slash OR without. Document it.
2. Add a server-level 301 redirect from the &quot;wrong&quot; style to the &quot;right&quot; style (Next.js: trailingSlash config; Nginx: rewrite rule).
3. Update every internal link, canonical tag, and hreflang entry to the chosen style.
4. Regenerate the sitemap using only the chosen style - drop all non-conforming variants.
5. Submit the cleaned sitemap in Search Console and monitor the Pages → Duplicate report.
6. Add a CI check that fails the build if mixed-slash URLs appear in the sitemap.</pre>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Real-world example</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>A SaaS company migrated from WordPress to Next.js and kept both URL styles live during the transition. Their sitemap contained 2,800 URLs - of which 1,100 were slash/no-slash duplicates of the other 1,700. Google&apos;s "Duplicate without user-selected canonical" count hit 1,100. After enforcing the no-slash convention site-wide with 301s and regenerating the sitemap, duplicates fell to 0 and organic traffic grew 18% over 8 weeks.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common mistakes</h2>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 32 }}>
          <li style={{ marginBottom: 8 }}>Fixing only the sitemap without fixing internal links and canonicals</li>
          <li style={{ marginBottom: 8 }}>Applying the trailing slash to the homepage (should almost always be the naked domain)</li>
          <li style={{ marginBottom: 8 }}>Missing the slash convention on file-like URLs (e.g., /sitemap.xml should never have a trailing slash)</li>
        </ul>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, marginTop: 40 }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Does Google treat /page and /page/ as different URLs?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Yes. Google treats them as completely separate URLs that can rank independently, receive different backlinks, and appear twice in search results. Consistency is essential to avoid duplicate-content signals.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Should I use trailing slashes or not?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Either is fine - pick one convention and stick with it across your entire site. Next.js and static sites often prefer no trailing slash; WordPress and Apache sites often add one. The key is consistency plus a server-level 301 to enforce it.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>How do I enforce a single trailing slash style?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Add a server-level 301 redirect from the &apos;wrong&apos; version to the &apos;right&apos; version. In Next.js use the trailingSlash config option. In Nginx use a rewrite rule. In Apache use mod_rewrite. Then regenerate your sitemap with the chosen style everywhere.</div>
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
            <li><a href="/sitemap-errors/non-canonical-urls" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Non-canonical URLs</a></li>
            <li><a href="/sitemap-errors/mixed-content" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Mixed Content</a></li>
          </ul>
          <div style={{ marginTop: 16 }}>
            <a href="/sitemap-errors" style={{ color: '#2d5be3', fontSize: 13 }}> All sitemap errors</a>
          </div>
        </div>
      </div>
    </>
  );
}
