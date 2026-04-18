import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Server Error (5xx) in Google Search Console: Fix Guide',
  description: 'The "Server error (5xx)" status in GSC means your server returned 500, 502, 503 or similar when Googlebot crawled. How to diagnose and fix 5xx errors.',
  keywords: 'server error 5xx, 500 error google search console, 502 bad gateway, 503 service unavailable, gsc server error fix',
  alternates: { canonical: 'https://sitemapfixer.com/gsc-errors/server-error-5xx' },
  openGraph: {
    title: 'Server Error (5xx) - GSC Indexing Status Explained',
    description: 'The "Server error (5xx)" status in GSC means your server returned 500, 502, 503 or similar when Googlebot crawled. How to diagnose and fix 5xx errors.',
    url: 'https://sitemapfixer.com/gsc-errors/server-error-5xx',
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
  const faqSchema = "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"How long before Google deindexes a page returning 5xx errors?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"A few consecutive failed crawls over several days. Occasional 5xx responses are tolerated, but sustained errors cause Google to reduce crawl rate first, then eventually remove the URL from the index. Restoring 200 OK before deindexing happens usually saves the ranking.\"}},{\"@type\":\"Question\",\"name\":\"Should I use 503 for planned maintenance?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes. For short maintenance windows, return HTTP 503 Service Unavailable with a Retry-After header indicating when to come back. Google treats 503 as temporary and will not deindex if the outage is short. Do not use 200 with a 'maintenance' page - that creates soft 404s.\"}},{\"@type\":\"Question\",\"name\":\"Does Googlebot blocking in Cloudflare cause 5xx?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"It can. Cloudflare's 'I'm Under Attack' mode, aggressive rate limits, and bot fight mode sometimes challenge or block Googlebot, returning 5xx or 503 responses. Verify your WAF rules allow the official Googlebot IP ranges.\"}}]}";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'Server Error (5xx) in Google Search Console: Fix Guide', description: 'The "Server error (5xx)" status in GSC means your server returned 500, 502, 503 or similar when Googlebot crawled. How to diagnose and fix 5xx errors.', url: 'https://sitemapfixer.com/gsc-errors/server-error-5xx', author: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com' }, publisher: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com', logo: { '@type': 'ImageObject', url: 'https://sitemapfixer.com/opengraph-image' } }, datePublished: '2026-04-17', mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://sitemapfixer.com/gsc-errors/server-error-5xx' } }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sitemapfixer.com/' }, { '@type': 'ListItem', position: 2, name: 'GSC Errors', item: 'https://sitemapfixer.com/gsc-errors' }, { '@type': 'ListItem', position: 3, name: 'Server Error (5xx) in Google Search Console: Fix Guide', item: 'https://sitemapfixer.com/gsc-errors/server-error-5xx' }] }),
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
          <span>Server error (5xx)</span>
        </nav>

        <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>
          Server error (5xx)
        </h1>

        <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 40 }}>
          The &quot;Server error (5xx)&quot; status is one of the most urgent indexing issues in Google Search Console. Your server returned a 500, 502, 503, or 504 response when Googlebot tried to crawl, meaning the page failed to load entirely. Short-term 5xx errors are recoverable, but sustained errors cause Google to reduce crawl rate, then remove URLs from the index entirely - with measurable traffic and ranking loss.
        </p>

        <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 4 }}>Check sitemap URLs for server errors</div>
            <div style={{ fontSize: 13, color: '#6b6b7d' }}>We fetch every URL and flag 5xx responses before Google deindexes them</div>
          </div>
          <a href="/" style={{ background: '#0a0a0f', color: 'white', padding: '12px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 14, whiteSpace: 'nowrap' }}>
            Analyze My Sitemap
          </a>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>What this GSC status means</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>Googlebot sent a request and got back a 5xx family HTTP response: 500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable, 504 Gateway Timeout, or similar. Unlike 4xx codes (client errors Google expects sometimes), 5xx codes indicate the server itself failed. Google interprets this as a site health problem. A one-off 5xx is forgiven, but repeated failures over multiple recrawls cause Google to first slow its crawl rate, then stop indexing, then deindex existing URLs.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common causes</h2>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 32 }}>
          <li style={{ marginBottom: 8 }}>Application exceptions (unhandled errors in PHP, Node, Python, Ruby, etc.) returning generic 500s.</li>
          <li style={{ marginBottom: 8 }}>Database connection failures, connection pool exhaustion, or query timeouts under crawl load.</li>
          <li style={{ marginBottom: 8 }}>Origin servers timing out behind a CDN, producing 502 Bad Gateway or 504 Gateway Timeout.</li>
          <li style={{ marginBottom: 8 }}>Rate limiting and WAF rules (Cloudflare, Akamai, AWS WAF) accidentally blocking Googlebot and returning 503.</li>
          <li style={{ marginBottom: 8 }}>Deployment or config errors pushing a broken build to production.</li>
          <li style={{ marginBottom: 8 }}>Cheap or oversubscribed shared hosting crumbling under normal crawl traffic.</li>
          <li style={{ marginBottom: 8 }}>SSL certificate issues causing the connection to fail (reported as server error).</li>
        </ul>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How it affects indexing</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>Short bursts of 5xx rarely cause lasting damage - Google retries. But sustained 5xx over days or weeks triggers escalating consequences: reduced crawl rate (new pages take longer to index), pages dropping out of the index, loss of rankings on affected URLs, and eventually a broader reassessment of site quality. High-traffic sites can lose significant organic revenue during even short 5xx windows.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How to diagnose</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>Open GSC &gt; Settings &gt; Crawl stats and look at the &quot;By response&quot; chart - any spike in 5xx? Open Page indexing &gt; Server error (5xx) and examine the URL patterns. Test a sample URL with curl -I URL repeatedly over a few minutes. Check your server logs filtered by the Googlebot user agent for the same URLs. Check CDN logs (Cloudflare Analytics, AWS CloudFront logs) for 5xx origins. If you use a WAF, check blocked requests from Googlebot IP ranges.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How to fix</h2>
        <div style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
          <pre style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: '#1c1c26', whiteSpace: 'pre-wrap', fontFamily: 'DM Mono, monospace' }}>1. Check server logs and error tracking (Sentry, Rollbar, Datadog) for the specific error causing the 5xx.
2. Fix the underlying bug - missing database migration, bad deploy, unhandled exception, memory leak, timeout.
3. Verify CDN/WAF rules allow Googlebot. Reverse DNS validate crawler IPs against .googlebot.com / .google.com.
4. Increase server capacity or PHP/Node worker count if crawl traffic is overwhelming the origin.
5. For planned maintenance: return HTTP 503 with a Retry-After: 3600 header (not 200 OK on a maintenance page).
6. Add monitoring that pages on 5xx patterns before Google notices (synthetic checks, real user monitoring).
7. Once fixed, open URL Inspection in GSC and &quot;Request Indexing&quot; on the most important URLs.
8. In GSC Page indexing report, click &quot;Validate Fix&quot; to tell Google to recheck.</pre>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, marginTop: 40 }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>How long before Google deindexes a page returning 5xx errors?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>A few consecutive failed crawls over several days. Occasional 5xx responses are tolerated, but sustained errors cause Google to reduce crawl rate first, then eventually remove the URL from the index. Restoring 200 OK before deindexing happens usually saves the ranking.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Should I use 503 for planned maintenance?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Yes. For short maintenance windows, return HTTP 503 Service Unavailable with a Retry-After header indicating when to come back. Google treats 503 as temporary and will not deindex if the outage is short. Do not use 200 with a &quot;maintenance&quot; page - that creates soft 404s.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Does Googlebot blocking in Cloudflare cause 5xx?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>It can. Cloudflare&apos;s &quot;I&apos;m Under Attack&quot; mode, aggressive rate limits, and bot fight mode sometimes challenge or block Googlebot, returning 5xx or 503 responses. Verify your WAF rules allow the official Googlebot IP ranges.</div>
          </div>
        </div>

        <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
          <div style={{ fontSize: 22, fontWeight: 700, color: 'white', marginBottom: 8 }}>Catch 5xx errors before Google does</div>
          <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free sitemap scan - we probe every URL and flag any 5xx responses</div>
          <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 32px', borderRadius: 8, textDecoration: 'none', fontWeight: 700, fontSize: 15 }}>
            Analyze My Sitemap Free
          </a>
        </div>

        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Related GSC indexing statuses</div>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <li><a href="/gsc-errors/not-found-404" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Not found (404)</a></li>
            <li><a href="/gsc-errors/blocked-forbidden-403" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Forbidden (403)</a></li>
            <li><a href="/gsc-errors/discovered-not-indexed" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Discovered - not indexed</a></li>
          </ul>
          <div style={{ marginTop: 16 }}>
            <a href="/gsc-errors" style={{ color: '#2d5be3', fontSize: 13 }}>All GSC indexing errors</a>
          </div>
        </div>
      </div>
    </>
  );
}
