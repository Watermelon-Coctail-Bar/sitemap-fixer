import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blocked Due to Unauthorized Request (401): GSC Fix Guide',
  description: 'The "Blocked due to unauthorized request (401)" status in Google Search Console means your server is requiring authentication. Learn how to diagnose and remove 401 blocks for public pages.',
  keywords: 'blocked due to unauthorized request, 401 error google search console, gsc 401 error, http basic auth google, 401 unauthorized fix',
  alternates: { canonical: 'https://sitemapfixer.com/gsc-errors/blocked-unauthorized-401' },
  openGraph: {
    title: 'Blocked due to unauthorized request (401) - GSC Status',
    description: 'The "Blocked due to unauthorized request (401)" status in Google Search Console means your server is requiring authentication. Learn how to diagnose and remove 401 blocks for public pages.',
    url: 'https://sitemapfixer.com/gsc-errors/blocked-unauthorized-401',
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
  const faqSchema = "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Is 401 the same as 403?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"No. 401 Unauthorized means authentication is required - the server is asking 'who are you?' and Googlebot has no credentials to provide. 403 Forbidden means the server understood who is asking but is actively refusing the request for some other reason (WAF rule, permission, IP block). Both end up blocking Googlebot but the root causes differ.\"}},{\"@type\":\"Question\",\"name\":\"My site requires login - how do I still get indexed?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Gated content cannot be indexed normally. The workarounds are: (1) make a public preview version of each page for crawlers, (2) implement 'First Click Free' or snippet-only previews with structured data, or (3) use Google's Subscription and paywalled content guidelines with CreativeWork schema. Pure 401 gating means no organic traffic.\"}},{\"@type\":\"Question\",\"name\":\"Why does Googlebot hit my public pages with 401?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Usually a config leak: HTTP Basic Auth set on staging and forgotten when content went live, a CDN edge rule requiring auth headers, an IP allowlist that excludes Googlebot ranges, or a framework middleware that authenticates requests without valid session cookies.\"}}]}";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'Blocked Due to Unauthorized Request (401): GSC Fix Guide', description: 'The "Blocked due to unauthorized request (401)" status in Google Search Console means your server is requiring authentication. Learn how to diagnose and remove 401 blocks for public pages.', url: 'https://sitemapfixer.com/gsc-errors/blocked-unauthorized-401', author: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com' }, publisher: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com', logo: { '@type': 'ImageObject', url: 'https://sitemapfixer.com/opengraph-image' } }, datePublished: '2026-04-17', mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://sitemapfixer.com/gsc-errors/blocked-unauthorized-401' } }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sitemapfixer.com/' }, { '@type': 'ListItem', position: 2, name: 'GSC Errors', item: 'https://sitemapfixer.com/gsc-errors' }, { '@type': 'ListItem', position: 3, name: 'Blocked Due to Unauthorized Request (401): GSC Fix Guide', item: 'https://sitemapfixer.com/gsc-errors/blocked-unauthorized-401' }] }),
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
          <span>Blocked due to unauthorized request (401)</span>
        </nav>

        <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>
          Blocked due to unauthorized request (401)
        </h1>

        <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 40 }}>
          The &quot;Blocked due to unauthorized request (401)&quot; status means your server responded to Googlebot with HTTP 401 Unauthorized - a challenge for credentials. Googlebot does not authenticate, so the request fails and the URL cannot be indexed. Sometimes this is intentional (private admin areas), but most of the time it is a production leak of HTTP Basic Auth left over from staging or a misconfigured CDN rule.
        </p>

        <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 4 }}>Detect 401 responses on indexable URLs</div>
            <div style={{ fontSize: 13, color: '#6b6b7d' }}>We fetch every sitemap URL and surface any auth challenges blocking Googlebot</div>
          </div>
          <a href="/" style={{ background: '#0a0a0f', color: 'white', padding: '12px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 14, whiteSpace: 'nowrap' }}>
            Analyze My Sitemap
          </a>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>What this GSC status means</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>Googlebot made an HTTP request for the URL and your server responded with a 401 Unauthorized status, typically accompanied by a WWW-Authenticate header asking for Basic, Digest, or Bearer credentials. Because Googlebot does not provide authentication, it cannot access the content and Google marks the URL as blocked. The URL is excluded from the index because Google has no content to evaluate. This is different from Blocked by robots.txt (robots.txt rule) or Blocked 403 (forbidden without auth challenge).</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common causes</h2>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 32 }}>
          <li style={{ marginBottom: 8 }}>HTTP Basic Auth left enabled from staging/preview environments when DNS points at production.</li>
          <li style={{ marginBottom: 8 }}>.htaccess or nginx auth_basic rules applied to the whole site or a subfolder.</li>
          <li style={{ marginBottom: 8 }}>Cloudflare Access, Vercel password protection, or Netlify password protection still enabled.</li>
          <li style={{ marginBottom: 8 }}>Paywalled or members-only content returning 401 to any unauthenticated visitor.</li>
          <li style={{ marginBottom: 8 }}>API-only endpoints requiring Bearer tokens accidentally discoverable via sitemap or links.</li>
          <li style={{ marginBottom: 8 }}>CDN origin authentication (signed URLs, IP allowlist) blocking crawler ranges.</li>
          <li style={{ marginBottom: 8 }}>Middleware in Express, Next.js, Rails, or Django that gates routes without a valid session.</li>
        </ul>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How it affects indexing</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>URLs returning 401 are not crawled, not indexed, and not discoverable in search results. Over time Google stops attempting to crawl them. If this status hits pages you intended to be public, the business impact is severe - zero organic traffic for affected URLs until the auth is removed. For new sites launching out of staging, it is the single most common cause of &quot;our site is not showing in Google&quot; complaints.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How to diagnose</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>Open a sample affected URL in a fresh incognito window - if a Basic Auth dialog appears, that is the cause. Test with curl -I URL and look for HTTP/1.1 401 and WWW-Authenticate header. In GSC, use URL Inspection - it will show the exact 401 response code. Check your hosting dashboard: Vercel Project Settings &gt; General &gt; Password Protection, Cloudflare &gt; Access, Netlify &gt; Site Settings &gt; Access Control. Grep your .htaccess or nginx config for auth_basic.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How to fix</h2>
        <div style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
          <pre style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: '#1c1c26', whiteSpace: 'pre-wrap', fontFamily: 'DM Mono, monospace' }}>1. Test the URL in incognito - if an auth prompt appears, turn off the gating in your hosting or server config.
2. Apache: remove or comment out AuthType, AuthName, AuthUserFile, Require directives in .htaccess.
3. Nginx: remove auth_basic and auth_basic_user_file directives from your server block.
4. Vercel: Project Settings &gt; Deployment Protection &gt; set to Disabled for production.
5. Netlify: Site Settings &gt; Access Control &gt; remove password protection for production.
6. Cloudflare Access: either disable the app for your public domain or add a bypass policy for Googlebot.
7. If the page should genuinely stay private, remove it from sitemap.xml and any internal links.
8. For paywalled content, follow Google&apos;s structured data pattern (isAccessibleForFree, CreativeWork schema) instead of 401.
9. After fixing, run URL Inspection &gt; Request Indexing to speed up recrawl.</pre>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, marginTop: 40 }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Is 401 the same as 403?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>No. 401 Unauthorized means authentication is required - the server is asking &quot;who are you?&quot; and Googlebot has no credentials to provide. 403 Forbidden means the server understood who is asking but is actively refusing the request for some other reason (WAF rule, permission, IP block). Both end up blocking Googlebot but the root causes differ.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>My site requires login - how do I still get indexed?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Gated content cannot be indexed normally. The workarounds are: (1) make a public preview version of each page for crawlers, (2) implement &quot;First Click Free&quot; or snippet-only previews with structured data, or (3) use Google&apos;s Subscription and paywalled content guidelines with CreativeWork schema. Pure 401 gating means no organic traffic.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Why does Googlebot hit my public pages with 401?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Usually a config leak: HTTP Basic Auth set on staging and forgotten when content went live, a CDN edge rule requiring auth headers, an IP allowlist that excludes Googlebot ranges, or a framework middleware that authenticates requests without valid session cookies.</div>
          </div>
        </div>

        <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
          <div style={{ fontSize: 22, fontWeight: 700, color: 'white', marginBottom: 8 }}>Remove auth blocks on your public URLs</div>
          <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free scan - we test every sitemap URL for 401 responses</div>
          <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 32px', borderRadius: 8, textDecoration: 'none', fontWeight: 700, fontSize: 15 }}>
            Analyze My Sitemap Free
          </a>
        </div>

        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Related GSC indexing statuses</div>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <li><a href="/gsc-errors/blocked-forbidden-403" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Forbidden (403)</a></li>
            <li><a href="/gsc-errors/blocked-by-robots-txt" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Blocked by robots.txt</a></li>
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
