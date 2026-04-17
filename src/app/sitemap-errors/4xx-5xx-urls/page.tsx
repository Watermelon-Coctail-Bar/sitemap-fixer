import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HTTP 4xx/5xx URLs in Sitemap: Fix Guide',
  description: 'Find and remove broken URLs (404, 410, 500, 503) from your XML sitemap. Error-status URLs waste crawl budget and damage your trust score with Google.',
  keywords: 'sitemap 404 errors, 500 errors sitemap, broken URLs sitemap, sitemap HTTP errors, GSC submitted URL not found, 5xx sitemap Google',
  alternates: { canonical: 'https://sitemapfixer.com/sitemap-errors/4xx-5xx-urls' },
  openGraph: {
    title: 'HTTP 4xx/5xx URLs in Sitemap - Fix & Best Practices',
    description: 'Find and remove broken URLs (404, 410, 500, 503) from your XML sitemap. Error-status URLs waste crawl budget and damage your trust score with Google.',
    url: 'https://sitemapfixer.com/sitemap-errors/4xx-5xx-urls',
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
  const faqSchema = "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"What percentage of 4xx URLs is acceptable in a sitemap?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Zero. A well-maintained sitemap should contain only 200-status URLs. Google explicitly states sitemaps should list canonical, indexable pages - anything returning 4xx or 5xx is a quality signal problem.\"}},{\"@type\":\"Question\",\"name\":\"Is a 404 in my sitemap worse than a 500?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"They're different failures. 404s tell Google you're listing pages that no longer exist (sloppy hygiene). 500s suggest server instability and cause Google to slow down crawling to avoid overloading your site.\"}},{\"@type\":\"Question\",\"name\":\"Should I use 301 redirects for deleted pages in my sitemap?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Only list the final destination URL in your sitemap, never the redirecting URL. If a page is truly deleted with no replacement, remove it from the sitemap entirely and let it return 410 Gone.\"}}]}";

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
          <span>HTTP 4xx/5xx URLs</span>
        </nav>

        <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>
          HTTP 4xx/5xx URLs in Your Sitemap
        </h1>

        <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 40 }}>
          Sitemaps are a trust signal: they tell Google which pages you want indexed. When those URLs return 404 Not Found, 410 Gone, 500 Internal Server Error, or 503 Service Unavailable, you&apos;re telling Google to crawl broken pages - and you&apos;re damaging your site&apos;s quality signals in the process.
        </p>

        <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 4 }}>Scan every URL in your sitemap</div>
            <div style={{ fontSize: 13, color: '#6b6b7d' }}>We check the HTTP status of each URL and flag the broken ones</div>
          </div>
          <a href="/" style={{ background: '#0a0a0f', color: 'white', padding: '12px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 14, whiteSpace: 'nowrap' }}>
            Analyze My Sitemap
          </a>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>What is this error?</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>Any URL in your sitemap.xml that does not return a 200 OK status when fetched is a broken entry. The four status classes you&apos;ll commonly see are: 404 (Not Found), 410 (Gone), 500 (Internal Server Error), and 503 (Service Unavailable). Google Search Console surfaces these under "Submitted URL not found (404)" and "Submitted URL has crawl issue" in the Pages report.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Why does it happen?</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>404s typically creep in when products are discontinued, blog posts are deleted, or URL slugs change without the sitemap generator being updated. 500s often point to slow database queries or memory limits on specific pages. 503s appear during deployments if your sitemap was generated before the deploy but URLs return 503 during cache warmup. Dynamic sitemaps pulling from stale caches are a major source of all three.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Why does it hurt SEO?</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>John Mueller has explicitly said that sitemaps with many 404s are treated as low-quality and can reduce how often Google processes the sitemap. For 5xx errors the impact is worse: Googlebot interprets them as server stress and throttles crawl rate across the entire domain. Over time, a dirty sitemap correlates with fewer pages getting discovered and slower indexing of new content.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How to detect it</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>Sitemap Fixer fetches every URL in your sitemap and reports the HTTP status code. You&apos;ll get a line-by-line breakdown: which URLs returned 404, 500, or 503, grouped by status. You can also check Search Console → Indexing → Pages for "Submitted URL not found (404)" and "Submitted URL has crawl issue" reports.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How to fix it</h2>
        <div style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
          <pre style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: '#1c1c26', whiteSpace: 'pre-wrap', fontFamily: 'DM Mono, monospace' }}>1. Export the list of non-200 URLs from Sitemap Fixer or Screaming Frog.
2. For deleted pages: remove from the sitemap AND return 410 Gone on the URL itself.
3. For moved pages: replace the old URL in the sitemap with the new destination (never list the 301 source).
4. For 500/503 errors: debug the underlying server issue before resubmitting - don&apos;t just remove the URL.
5. Regenerate the sitemap from a fresh database query, not a cached file.
6. Resubmit the clean sitemap in Search Console and monitor the Pages report for one week.</pre>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Real-world example</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>A SaaS company&apos;s sitemap listed 1,800 URLs, of which 640 returned 404 after they migrated from WordPress to a headless CMS. Google stopped recrawling the sitemap for 9 days. After cleaning the list to 1,160 live URLs, processing resumed and 73 new pages were indexed within 2 weeks.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common mistakes</h2>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 32 }}>
          <li style={{ marginBottom: 8 }}>Listing 301-redirecting URLs instead of their final destination</li>
          <li style={{ marginBottom: 8 }}>Including soft-404 pages (200 status but thin/empty content)</li>
          <li style={{ marginBottom: 8 }}>Treating intermittent 503s as "temporary" and leaving them in the sitemap</li>
        </ul>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, marginTop: 40 }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>What percentage of 4xx URLs is acceptable in a sitemap?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Zero. A well-maintained sitemap should contain only 200-status URLs. Google explicitly states sitemaps should list canonical, indexable pages - anything returning 4xx or 5xx is a quality signal problem.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Is a 404 in my sitemap worse than a 500?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>They&apos;re different failures. 404s tell Google you&apos;re listing pages that no longer exist (sloppy hygiene). 500s suggest server instability and cause Google to slow down crawling to avoid overloading your site.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Should I use 301 redirects for deleted pages in my sitemap?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Only list the final destination URL in your sitemap, never the redirecting URL. If a page is truly deleted with no replacement, remove it from the sitemap entirely and let it return 410 Gone.</div>
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
            <li><a href="/sitemap-errors/blocked-by-robots-txt" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Blocked by Robots.txt</a></li>
            <li><a href="/sitemap-errors/noindex-urls" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Noindex URLs</a></li>
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
