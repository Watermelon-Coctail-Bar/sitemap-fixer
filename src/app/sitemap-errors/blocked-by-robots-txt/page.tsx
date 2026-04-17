import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'URLs Blocked by Robots.txt in Sitemap: Fix Guide',
  description: 'Fix the contradictory signal of URLs blocked by robots.txt appearing in your XML sitemap. Detect disallow conflicts that prevent indexing in seconds.',
  keywords: 'sitemap robots.txt conflict, blocked by robots.txt sitemap, disallow sitemap URLs, robots.txt vs sitemap, GSC blocked by robots.txt, robots disallow sitemap entry',
  alternates: { canonical: 'https://sitemapfixer.com/sitemap-errors/blocked-by-robots-txt' },
  openGraph: {
    title: 'URLs Blocked by Robots.txt in Sitemap - Fix & Best Practices',
    description: 'Fix the contradictory signal of URLs blocked by robots.txt appearing in your XML sitemap. Detect disallow conflicts that prevent indexing in seconds.',
    url: 'https://sitemapfixer.com/sitemap-errors/blocked-by-robots-txt',
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
  const faqSchema = "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Will Google ignore my robots.txt if a URL is in the sitemap?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"No. Robots.txt always wins. If a URL is disallowed, Google will not crawl it, even if your sitemap lists it. The sitemap entry just gets flagged as a contradictory signal.\"}},{\"@type\":\"Question\",\"name\":\"Can blocked URLs still appear in Google search results?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes, but usually with no description (the URL appears with a note saying 'No information available'). This happens because Google knows the URL exists from the sitemap but cannot fetch it to read the content.\"}},{\"@type\":\"Question\",\"name\":\"How do I unblock a URL without removing the disallow rule?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Add a more specific Allow rule in robots.txt that overrides the broader Disallow. For example: Disallow: /admin/ followed by Allow: /admin/public-faq. Google honors the longest matching path.\"}}]}";

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
          <span>Blocked by Robots.txt</span>
        </nav>

        <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>
          URLs Blocked by Robots.txt in Your Sitemap
        </h1>

        <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 40 }}>
          A sitemap says "please crawl these URLs" while robots.txt says "do not crawl these URLs." When the same URL appears in both, you&apos;re sending Google contradictory instructions - and Google resolves the conflict by honoring the disallow. The URL never gets indexed, and your sitemap loses credibility as a discovery signal.
        </p>

        <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 4 }}>Cross-check your sitemap against robots.txt</div>
            <div style={{ fontSize: 13, color: '#6b6b7d' }}>We match every sitemap URL against your active Disallow rules</div>
          </div>
          <a href="/" style={{ background: '#0a0a0f', color: 'white', padding: '12px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 14, whiteSpace: 'nowrap' }}>
            Analyze My Sitemap
          </a>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>What is this error?</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>This error occurs when a URL is listed inside your sitemap.xml but a matching Disallow rule exists in your robots.txt file. In Google Search Console this appears under "Indexed, though blocked by robots.txt" or "Blocked by robots.txt" in the Pages report. Bing Webmaster Tools surfaces it as "Allow/Disallow conflict."</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Why does it happen?</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>The most frequent causes are overly broad Disallow rules (like <code>Disallow: /api/</code> accidentally blocking <code>/api-documentation/</code>), staging rules that weren&apos;t removed in production, and auto-generated sitemaps that crawl the whole site without respecting robots.txt. E-commerce sites often see this when filter URLs are disallowed but sitemap generators index them anyway.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Why does it hurt SEO?</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>Blocked URLs in a sitemap are effectively dead entries - they consume space, waste the sitemap&apos;s "attention budget," and contribute nothing. Worse, Google may interpret a high ratio of blocked-to-allowed URLs as a sign that your sitemap is unreliable and reduce how seriously it treats every URL in the file, including the healthy ones.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How to detect it</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>Use Google Search Console&apos;s robots.txt Tester (Legacy Tools) to paste specific URLs and see which rule blocks them. Sitemap Fixer automates this by parsing your robots.txt, compiling the Disallow rules, and flagging every sitemap URL that matches one - including wildcard and path-prefix matches.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How to fix it</h2>
        <div style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
          <pre style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: '#1c1c26', whiteSpace: 'pre-wrap', fontFamily: 'DM Mono, monospace' }}>1. Decide the true intent for each blocked URL: should it be indexed or not?
2. For URLs that SHOULD be indexed: remove the Disallow rule or add a specific Allow line.
3. For URLs that SHOULD NOT be indexed: remove them from the sitemap entirely.
4. Test the updated robots.txt with Google&apos;s robots.txt Tester before deploying.
5. Regenerate the sitemap and resubmit it in Search Console.
6. Monitor the Pages report for 7-14 days to confirm "Blocked by robots.txt" counts drop.</pre>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Real-world example</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>A marketplace had <code>Disallow: /search</code> in robots.txt to block internal search pages, but their sitemap generator included every <code>/search?q=</code> URL it could find - 14,000 of them. After removing those URLs from the sitemap, Google&apos;s "Blocked by robots.txt" count dropped from 14,200 to 240 in 10 days, and crawl budget for product pages increased measurably.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common mistakes</h2>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 32 }}>
          <li style={{ marginBottom: 8 }}>Forgetting that robots.txt rules are case-sensitive on the path portion</li>
          <li style={{ marginBottom: 8 }}>Using Disallow to "remove a page from Google" (use noindex instead - Disallow blocks crawling, not indexing)</li>
          <li style={{ marginBottom: 8 }}>Leaving staging Disallow: / rules in production robots.txt after launch</li>
        </ul>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, marginTop: 40 }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Will Google ignore my robots.txt if a URL is in the sitemap?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>No. Robots.txt always wins. If a URL is disallowed, Google will not crawl it, even if your sitemap lists it. The sitemap entry just gets flagged as a contradictory signal.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Can blocked URLs still appear in Google search results?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Yes, but usually with no description (the URL appears with a note saying &apos;No information available&apos;). This happens because Google knows the URL exists from the sitemap but cannot fetch it to read the content.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>How do I unblock a URL without removing the disallow rule?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Add a more specific Allow rule in robots.txt that overrides the broader Disallow. For example: Disallow: /admin/ followed by Allow: /admin/public-faq. Google honors the longest matching path.</div>
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
            <li><a href="/sitemap-errors/noindex-urls" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Noindex URLs</a></li>
            <li><a href="/sitemap-errors/4xx-5xx-urls" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>4xx/5xx URLs</a></li>
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
