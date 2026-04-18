import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page with redirect in GSC: What It Means & How to Fix',
  description: 'The "Page with redirect" status in GSC means the URL is a redirect and Google excludes it from the index. Causes, when it is fine, and how to fix.',
  keywords: 'page with redirect, google search console, page with redirect meaning, fix page with redirect, gsc redirect error, page indexing redirect',
  alternates: { canonical: 'https://sitemapfixer.com/gsc-errors/page-with-redirect' },
  openGraph: {
    title: 'Page with redirect - GSC Indexing Status Explained',
    description: 'The "Page with redirect" status in GSC means the URL is a redirect and Google excludes it from the index. Causes, when it is fine, and how to fix.',
    url: 'https://sitemapfixer.com/gsc-errors/page-with-redirect',
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
  const faqSchema = "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Is 'Page with redirect' actually an error?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Not by itself. It is an informational status - Google is simply telling you the URL you submitted is a redirect and it indexed the target instead. It only becomes a problem when the redirect is unintended, broken, or when a redirecting URL is inside your sitemap.\"}},{\"@type\":\"Question\",\"name\":\"Why are redirecting URLs in my sitemap?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Usually because the site migrated or URLs were restructured and the sitemap was not regenerated. Your sitemap should only contain the final canonical 200 URLs - never 301/302 redirect sources.\"}},{\"@type\":\"Question\",\"name\":\"Do redirect chains cause this status?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes. If a URL redirects through multiple hops before reaching a 200 page, every intermediate URL shows up as 'Page with redirect' and Google may give up following after 10 hops. Always collapse chains to a single 301.\"}}]}";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'Page with redirect in GSC: What It Means & How to Fix', description: 'The "Page with redirect" status in GSC means the URL is a redirect and Google excludes it from the index. Causes, when it is fine, and how to fix.', url: 'https://sitemapfixer.com/gsc-errors/page-with-redirect', author: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com' }, publisher: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com', logo: { '@type': 'ImageObject', url: 'https://sitemapfixer.com/opengraph-image' } }, datePublished: '2026-04-17', mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://sitemapfixer.com/gsc-errors/page-with-redirect' } }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sitemapfixer.com/' }, { '@type': 'ListItem', position: 2, name: 'GSC Errors', item: 'https://sitemapfixer.com/gsc-errors' }, { '@type': 'ListItem', position: 3, name: 'Page with redirect in GSC: What It Means & How to Fix', item: 'https://sitemapfixer.com/gsc-errors/page-with-redirect' }] }),
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
          <span>Page with redirect</span>
        </nav>

        <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>
          Page with redirect
        </h1>

        <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 40 }}>
          &quot;Page with redirect&quot; appears in the Google Search Console Page indexing report when Googlebot hits the URL and receives a 301, 302, 307, or 308 redirect response. Google excludes the redirecting URL from the index and follows the redirect to try to index the destination instead. The status is informational by itself, but it often points to sitemap hygiene problems or misconfigured redirects.
        </p>

        <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 4 }}>Find redirecting URLs in your sitemap</div>
            <div style={{ fontSize: 13, color: '#6b6b7d' }}>Free scan - we flag every 3xx URL in your sitemap and show the final destination</div>
          </div>
          <a href="/" style={{ background: '#0a0a0f', color: 'white', padding: '12px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 14, whiteSpace: 'nowrap' }}>
            Analyze My Sitemap
          </a>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>What this GSC status means</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>Google fetched the URL and the server responded with a redirect (HTTP 301, 302, 307, or 308). Google then treats the redirect target as the indexable URL. The original redirecting URL is correctly excluded - two URLs that resolve to the same content should not both be indexed. The warning is really: &quot;you told us about this URL but it is not the real URL.&quot;</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common causes</h2>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 32 }}>
          <li style={{ marginBottom: 8 }}>Old URLs from a site migration or URL restructure still living in your sitemap.xml.</li>
          <li style={{ marginBottom: 8 }}>HTTP URLs being submitted when the site enforces HTTPS (http://example.com redirects to https://example.com).</li>
          <li style={{ marginBottom: 8 }}>Trailing slash redirects (/page redirects to /page/ or vice versa) where both variants are linked or submitted.</li>
          <li style={{ marginBottom: 8 }}>www vs non-www redirects when internal links or the sitemap mix the two hostnames.</li>
          <li style={{ marginBottom: 8 }}>Redirect chains (A to B to C) where Google reports the intermediate URL as a redirect.</li>
          <li style={{ marginBottom: 8 }}>Affiliate, tracking, or short URLs (/go/xyz) being accidentally submitted for indexing.</li>
        </ul>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How it affects indexing</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>A single redirect costs Googlebot one extra request per URL - not a disaster. But redirects in your sitemap or internal links waste crawl budget on every recrawl, and redirect chains can prevent pages from being indexed at all because Googlebot stops following after about 10 hops. If the redirect target is itself excluded (noindex, 404, or another redirect), the whole chain wastes crawl equity.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How to diagnose</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>In GSC, open the Page indexing report and click &quot;Page with redirect&quot; to get the full URL list. Pick a sample URL and run it through the URL Inspection tool - it will show the redirect target. Then test the URL with curl (curl -I URL) to see the chain. Pay attention to how many hops it takes and what the final status code is.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How to fix</h2>
        <div style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
          <pre style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: '#1c1c26', whiteSpace: 'pre-wrap', fontFamily: 'DM Mono, monospace' }}>1. Export the URL list from GSC (Page with redirect) so you have a full inventory.
2. Remove every redirecting URL from your sitemap.xml - submit only the final 200 destinations.
3. Collapse redirect chains: if A redirects to B redirects to C, change A to redirect directly to C.
4. Update internal links to point at the final URL, not the redirect source.
5. Check canonical tags - make sure they reference the 200 URL, not a redirecting one.
6. Pick one hostname variant (https, with or without www, with or without trailing slash) and enforce it everywhere.
7. Regenerate your sitemap and resubmit it in Search Console under Sitemaps.</pre>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, marginTop: 40 }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Is &quot;Page with redirect&quot; actually an error?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Not by itself. It is an informational status - Google is simply telling you the URL you submitted is a redirect and it indexed the target instead. It only becomes a problem when the redirect is unintended, broken, or when a redirecting URL is inside your sitemap.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Why are redirecting URLs in my sitemap?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Usually because the site migrated or URLs were restructured and the sitemap was not regenerated. Your sitemap should only contain the final canonical 200 URLs - never 301/302 redirect sources.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Do redirect chains cause this status?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Yes. If a URL redirects through multiple hops before reaching a 200 page, every intermediate URL shows up as &quot;Page with redirect&quot; and Google may give up following after 10 hops. Always collapse chains to a single 301.</div>
          </div>
        </div>

        <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
          <div style={{ fontSize: 22, fontWeight: 700, color: 'white', marginBottom: 8 }}>Clean up redirecting URLs in your sitemap</div>
          <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Get a full sitemap and indexing audit in 60 seconds</div>
          <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 32px', borderRadius: 8, textDecoration: 'none', fontWeight: 700, fontSize: 15 }}>
            Analyze My Sitemap Free
          </a>
        </div>

        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Related GSC indexing statuses</div>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <li><a href="/gsc-errors/alternate-page-with-canonical" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Alternate page with canonical</a></li>
            <li><a href="/gsc-errors/duplicate-without-canonical" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Duplicate without canonical</a></li>
            <li><a href="/gsc-errors/not-found-404" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Not found (404)</a></li>
          </ul>
          <div style={{ marginTop: 16 }}>
            <a href="/gsc-errors" style={{ color: '#2d5be3', fontSize: 13 }}>All GSC indexing errors</a>
          </div>
        </div>
      </div>
    </>
  );
}
