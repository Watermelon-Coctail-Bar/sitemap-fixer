import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blocked Due to Access Forbidden (403): GSC Fix Guide',
  description: 'The "Blocked due to access forbidden (403)" status in Google Search Console means your server forbade Googlebot from fetching the page. Learn how to find and fix the firewall rule blocking Google.',
  keywords: 'blocked due to access forbidden, 403 error google search console, gsc 403 forbidden, cloudflare block googlebot, waf blocking google',
  alternates: { canonical: 'https://sitemapfixer.com/gsc-errors/blocked-forbidden-403' },
  openGraph: {
    title: 'Blocked due to access forbidden (403) - GSC Status',
    description: 'The "Blocked due to access forbidden (403)" status in Google Search Console means your server forbade Googlebot from fetching the page. Learn how to find and fix the firewall rule blocking Google.',
    url: 'https://sitemapfixer.com/gsc-errors/blocked-forbidden-403',
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
  const faqSchema = "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Why is my WAF blocking Googlebot?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"WAFs often fingerprint bot-like traffic and block anything that does not look like a real browser. Googlebot sends a specific user agent and originates from documented IP ranges - your WAF rules need an explicit allowlist for those ranges (verified via reverse DNS lookup). Aggressive rate limits and 'bot fight mode' features are the most common culprits.\"}},{\"@type\":\"Question\",\"name\":\"How do I verify a request is actually Googlebot?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Do a reverse DNS lookup on the IP (host 66.249.66.1) - the hostname should end in .googlebot.com or .google.com. Then do a forward DNS lookup on that hostname and confirm it resolves back to the same IP. Google publishes current IP ranges in a JSON file you can use to automate allowlisting.\"}},{\"@type\":\"Question\",\"name\":\"What is the difference between 403 and 401 in GSC?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"401 means authentication is required - the server wants credentials. 403 means the server understood the request and is refusing it outright, no auth challenge. 403 is typically a firewall, WAF, or permission rule blocking the IP or user agent. Googlebot cannot bypass either, but the fix paths differ.\"}}]}";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'Blocked Due to Access Forbidden (403): GSC Fix Guide', description: 'The "Blocked due to access forbidden (403)" status in Google Search Console means your server forbade Googlebot from fetching the page. Learn how to find and fix the firewall rule blocking Google.', url: 'https://sitemapfixer.com/gsc-errors/blocked-forbidden-403', author: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com' }, publisher: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com', logo: { '@type': 'ImageObject', url: 'https://sitemapfixer.com/opengraph-image' } }, datePublished: '2026-04-17', mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://sitemapfixer.com/gsc-errors/blocked-forbidden-403' } }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sitemapfixer.com/' }, { '@type': 'ListItem', position: 2, name: 'GSC Errors', item: 'https://sitemapfixer.com/gsc-errors' }, { '@type': 'ListItem', position: 3, name: 'Blocked Due to Access Forbidden (403): GSC Fix Guide', item: 'https://sitemapfixer.com/gsc-errors/blocked-forbidden-403' }] }),
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
          <span>Blocked due to access forbidden (403)</span>
        </nav>

        <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>
          Blocked due to access forbidden (403)
        </h1>

        <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 40 }}>
          The &quot;Blocked due to access forbidden (403)&quot; status in Google Search Console means your server responded to Googlebot with HTTP 403 Forbidden - an outright refusal without asking for credentials. Most of the time this is a firewall, WAF, or CDN rule that fingerprinted Googlebot as unwanted traffic. Unlike 401, there is no auth flow to complete - you have to explicitly allow Googlebot to access the URL.
        </p>

        <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 4 }}>Detect 403 blocks on sitemap URLs</div>
            <div style={{ fontSize: 13, color: '#6b6b7d' }}>We crawl your sitemap as a user agent and flag URLs returning 403</div>
          </div>
          <a href="/" style={{ background: '#0a0a0f', color: 'white', padding: '12px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 14, whiteSpace: 'nowrap' }}>
            Analyze My Sitemap
          </a>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>What this GSC status means</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>Googlebot made an HTTP request and the server (or more often a CDN or WAF in front of it) returned HTTP 403 Forbidden. That response tells Google the request is valid but explicitly refused - no authentication path will unlock it. Google cannot index the URL because it has no content to evaluate. The URL is removed from the index after repeated 403s. The underlying cause is almost always a security layer that does not recognize Googlebot as an allowed client.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common causes</h2>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 32 }}>
          <li style={{ marginBottom: 8 }}>Cloudflare Bot Fight Mode, Super Bot Fight Mode, or &quot;I&apos;m Under Attack&quot; challenging or blocking Googlebot.</li>
          <li style={{ marginBottom: 8 }}>WAF rules (AWS WAF, Akamai, Imperva) blocking the Googlebot user agent or IP range as suspicious.</li>
          <li style={{ marginBottom: 8 }}>Rate limiting triggering 403 responses when Googlebot crawls quickly on a small site.</li>
          <li style={{ marginBottom: 8 }}>Country-based IP blocks that accidentally include Google&apos;s crawler IPs (mostly US-based but global).</li>
          <li style={{ marginBottom: 8 }}>File or directory permission issues (chmod) on static files and assets.</li>
          <li style={{ marginBottom: 8 }}>Apache or nginx deny rules (Deny from, deny IP) blocking specific IP ranges.</li>
          <li style={{ marginBottom: 8 }}>Hotlink protection, referer checks, or cookie requirements blocking anonymous crawler fetches.</li>
        </ul>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How it affects indexing</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>URLs returning 403 do not get indexed and disappear from search results over time. If your entire site hits 403 for Googlebot, you lose all organic traffic. This is catastrophic for e-commerce and content sites - a common scenario is a new WAF deploy blocking all organic traffic overnight. Even partial 403s (on specific URLs or sections) create dead zones in your index coverage.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How to diagnose</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>In GSC, run URL Inspection on an affected URL to confirm the 403 response. Test the URL with a Googlebot user agent (curl -A &quot;Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)&quot; -I URL) - if you get 403 with that UA but 200 from a normal browser UA, a WAF is fingerprinting. Check Cloudflare Events, AWS WAF logs, or your security provider dashboard for blocked requests from the last 7 days. Look for Googlebot IP ranges (check Google&apos;s published IP list) being rejected.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How to fix</h2>
        <div style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
          <pre style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: '#1c1c26', whiteSpace: 'pre-wrap', fontFamily: 'DM Mono, monospace' }}>1. In Cloudflare: Security &gt; Bots &gt; disable Bot Fight Mode for verified bots, or add a WAF exception for cf.client.bot.
2. In AWS WAF: add a rule group exception whitelisting Googlebot IP ranges from Google&apos;s published JSON.
3. For any WAF: create an allow rule for User-Agent matching Googlebot plus verified source IPs (avoid UA-only since anyone can spoof).
4. Check Apache .htaccess for Deny from entries - remove or narrow them to only truly bad IPs.
5. Check nginx for deny directives in server/location blocks.
6. For file permission 403s: chmod 644 for files, 755 for directories - run as correct web server user.
7. Verify Googlebot with reverse DNS: the IP should rDNS to *.googlebot.com or *.google.com. Forward lookup must resolve back.
8. Remove country or IP blocks that overlap with Google crawler regions.
9. After fixing, run URL Inspection &gt; Test Live URL to confirm it now returns 200, then Request Indexing.</pre>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, marginTop: 40 }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Why is my WAF blocking Googlebot?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>WAFs often fingerprint bot-like traffic and block anything that does not look like a real browser. Googlebot sends a specific user agent and originates from documented IP ranges - your WAF rules need an explicit allowlist for those ranges (verified via reverse DNS lookup). Aggressive rate limits and &quot;bot fight mode&quot; features are the most common culprits.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>How do I verify a request is actually Googlebot?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Do a reverse DNS lookup on the IP (host 66.249.66.1) - the hostname should end in .googlebot.com or .google.com. Then do a forward DNS lookup on that hostname and confirm it resolves back to the same IP. Google publishes current IP ranges in a JSON file you can use to automate allowlisting.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>What is the difference between 403 and 401 in GSC?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>401 means authentication is required - the server wants credentials. 403 means the server understood the request and is refusing it outright, no auth challenge. 403 is typically a firewall, WAF, or permission rule blocking the IP or user agent. Googlebot cannot bypass either, but the fix paths differ.</div>
          </div>
        </div>

        <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
          <div style={{ fontSize: 22, fontWeight: 700, color: 'white', marginBottom: 8 }}>Stop your WAF from blocking organic traffic</div>
          <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free scan - identify URLs returning 403 before Google deindexes them</div>
          <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 32px', borderRadius: 8, textDecoration: 'none', fontWeight: 700, fontSize: 15 }}>
            Analyze My Sitemap Free
          </a>
        </div>

        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Related GSC indexing statuses</div>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <li><a href="/gsc-errors/blocked-unauthorized-401" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Unauthorized (401)</a></li>
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
