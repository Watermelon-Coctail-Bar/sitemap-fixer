import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mixed Content in Sitemap: Fix HTTP/HTTPS Conflicts',
  description: 'Fix HTTP URLs appearing inside an HTTPS sitemap. Mixed-protocol entries create canonicalization issues and security warnings that damage rankings.',
  keywords: 'mixed content sitemap, HTTP URLs HTTPS sitemap, sitemap protocol conflict, insecure URLs sitemap, HTTPS migration sitemap errors, http https canonical',
  alternates: { canonical: 'https://sitemapfixer.com/sitemap-errors/mixed-content' },
  openGraph: {
    title: 'Mixed Content in Sitemap - Fix HTTP/HTTPS Conflicts',
    description: 'Fix HTTP URLs appearing inside an HTTPS sitemap. Mixed-protocol entries create canonicalization issues and security warnings that damage rankings.',
    url: 'https://sitemapfixer.com/sitemap-errors/mixed-content',
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
  const faqSchema = "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Can my sitemap contain both HTTP and HTTPS URLs?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Technically yes, but it's strongly discouraged. Google treats HTTP and HTTPS versions of the same URL as separate documents, so mixing them creates duplicate content problems and dilutes ranking signals between the two versions.\"}},{\"@type\":\"Question\",\"name\":\"Should my sitemap URL itself be HTTPS?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes, always. The sitemap.xml must be served over HTTPS if your site uses HTTPS, and it must live on the same protocol and hostname as the URLs it contains (this is called cross-submit restriction).\"}},{\"@type\":\"Question\",\"name\":\"What happens if I list an HTTP URL that 301-redirects to HTTPS?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Google will follow the redirect but marks the HTTP entry as 'Page with redirect' in Search Console. It still wastes a sitemap slot - list the final HTTPS destination directly instead.\"}}]}";

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
          <span>Mixed Content</span>
        </nav>

        <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>
          Mixed Content (HTTP URLs in HTTPS Sitemap)
        </h1>

        <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 40 }}>
          Your sitemap lives at <code>https://example.com/sitemap.xml</code> but some URLs inside still start with <code>http://</code>. Google treats HTTP and HTTPS as two different sites, so mixed-protocol sitemaps create duplicate-content confusion, split ranking signals, and often trigger cross-submit errors that prevent Google from processing the sitemap at all.
        </p>

        <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 4 }}>Find every HTTP URL in your sitemap</div>
            <div style={{ fontSize: 13, color: '#6b6b7d' }}>We highlight every non-matching-protocol URL in your feed</div>
          </div>
          <a href="/" style={{ background: '#0a0a0f', color: 'white', padding: '12px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 14, whiteSpace: 'nowrap' }}>
            Analyze My Sitemap
          </a>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>What is this error?</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>Mixed content in a sitemap occurs when the protocol of a URL (<code>http://</code> or <code>https://</code>) doesn&apos;t match the protocol of the sitemap file itself. Google&apos;s cross-submit rule states that URLs in a sitemap must live on the same protocol and hostname as the sitemap - otherwise they&apos;re silently ignored. Search Console will show "Couldn&apos;t fetch" or simply not report the URL at all.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Why does it happen?</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>This is almost always a leftover from an HTTPS migration. The site moved to HTTPS, but the sitemap generator still pulls URLs from a database column containing <code>http://</code> prefixes. Other causes: hardcoded HTTP URLs in CMS templates, old image URLs on <code>http://cdn.example.com</code>, or plugins that generate sitemap entries from a config file that was never updated.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Why does it hurt SEO?</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>Three problems stack up. First, Google may ignore the HTTP URLs entirely due to cross-submit restriction. Second, if the HTTP URL redirects to HTTPS, Google flags it as "Page with redirect" - a wasted entry. Third, users clicking HTTP links from Google&apos;s index see browser security warnings, hurting click-through rate and bounce metrics that Google measures as engagement signals.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How to detect it</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>Open your sitemap and search (Ctrl+F) for "http://" - if any results appear in your HTTPS sitemap, you have mixed content. Sitemap Fixer flags every URL whose protocol doesn&apos;t match the sitemap root, including deeper issues like www.example.com vs example.com mismatches that are often overlooked.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How to fix it</h2>
        <div style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
          <pre style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: '#1c1c26', whiteSpace: 'pre-wrap', fontFamily: 'DM Mono, monospace' }}>1. Run a SQL UPDATE on your CMS database to rewrite http:// URLs to https://.
2. Add a 301 redirect at the server level from http://* to https://* so any external HTTP references resolve correctly.
3. Update the sitemap generator config to force HTTPS on URL construction.
4. Regenerate sitemap.xml and verify every URL starts with https://.
5. In Search Console, ensure you&apos;re using the HTTPS property, not the HTTP one - resubmit there.
6. Use a crawler (Screaming Frog, Sitemap Fixer) to double-check no internal links still emit HTTP.</pre>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Real-world example</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>An enterprise news site completed their HTTPS migration but their sitemap still contained 4,200 HTTP article URLs because the generator read from a legacy read-replica. Google ignored all of them for 5 weeks. After a database migration script rewrote the URLs, indexed pages jumped from 1,800 to 5,900 within 3 weeks.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common mistakes</h2>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 32 }}>
          <li style={{ marginBottom: 8 }}>Mixing www and non-www alongside HTTP/HTTPS (4 variants of the same URL)</li>
          <li style={{ marginBottom: 8 }}>Relying on HTTP-to-HTTPS redirects instead of writing clean HTTPS URLs</li>
          <li style={{ marginBottom: 8 }}>Leaving HTTP URLs for images or resources in image sitemap extensions</li>
        </ul>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, marginTop: 40 }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Can my sitemap contain both HTTP and HTTPS URLs?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Technically yes, but it&apos;s strongly discouraged. Google treats HTTP and HTTPS versions of the same URL as separate documents, so mixing them creates duplicate content problems and dilutes ranking signals between the two versions.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Should my sitemap URL itself be HTTPS?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Yes, always. The sitemap.xml must be served over HTTPS if your site uses HTTPS, and it must live on the same protocol and hostname as the URLs it contains (this is called cross-submit restriction).</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>What happens if I list an HTTP URL that 301-redirects to HTTPS?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Google will follow the redirect but marks the HTTP entry as &apos;Page with redirect&apos; in Search Console. It still wastes a sitemap slot - list the final HTTPS destination directly instead.</div>
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
            <li><a href="/sitemap-errors/trailing-slash-inconsistency" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Trailing Slash Inconsistency</a></li>
            <li><a href="/sitemap-errors/non-canonical-urls" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Non-canonical URLs</a></li>
          </ul>
          <div style={{ marginTop: 16 }}>
            <a href="/sitemap-errors" style={{ color: '#2d5be3', fontSize: 13 }}> All sitemap errors</a>
          </div>
        </div>
      </div>
    </>
  );
}
