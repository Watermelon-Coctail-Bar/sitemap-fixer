import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Excluded by noindex tag in GSC: What It Means & How to Fix',
  description: 'The "Excluded by noindex tag" status in Google Search Console means a meta robots or X-Robots-Tag header is telling Google not to index the page. Learn how to find and remove the tag.',
  keywords: 'excluded by noindex tag, gsc noindex, meta noindex, x-robots-tag, remove noindex, google search console noindex error',
  alternates: { canonical: 'https://sitemapfixer.com/gsc-errors/excluded-by-noindex-tag' },
  openGraph: {
    title: 'Excluded by noindex tag - GSC Indexing Status Explained',
    description: 'The "Excluded by noindex tag" status in Google Search Console means a meta robots or X-Robots-Tag header is telling Google not to index the page. Learn how to find and remove the tag.',
    url: 'https://sitemapfixer.com/gsc-errors/excluded-by-noindex-tag',
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
  const faqSchema = "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"I removed the noindex tag - why is the page still excluded?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Google has to recrawl the URL before the status flips. Use the URL Inspection tool in GSC and click 'Request Indexing' - it usually updates within a few days. Also double-check that the noindex is not coming from an HTTP header (X-Robots-Tag) rather than the HTML.\"}},{\"@type\":\"Question\",\"name\":\"Can noindex come from somewhere other than the meta tag?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes. Google honors noindex from the X-Robots-Tag HTTP response header, from robots meta tags injected by JavaScript, and from CMS settings that toggle it on the server side. CDNs, SEO plugins, and staging environments are the most common hidden sources.\"}},{\"@type\":\"Question\",\"name\":\"Does a noindex page still pass link equity?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Links on a long-term noindex page are eventually treated as nofollow by Google, so any PageRank flowing through them fades. Do not rely on noindex pages as internal link hubs.\"}}]}";

  return (
    <>
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
          <span>Excluded by noindex tag</span>
        </nav>

        <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>
          Excluded by &apos;noindex&apos; tag
        </h1>

        <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 40 }}>
          This status means Google fetched your page, saw a noindex directive, and deliberately kept it out of the index. The directive can come from a meta robots tag in the HTML, from an X-Robots-Tag HTTP header, or from server-side rules. This is an intentional signal - the question is always: did you mean to set it?
        </p>

        <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 4 }}>Find unintended noindex tags on your site</div>
            <div style={{ fontSize: 13, color: '#6b6b7d' }}>We crawl every URL in your sitemap and flag pages with noindex directives</div>
          </div>
          <a href="/" style={{ background: '#0a0a0f', color: 'white', padding: '12px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 14, whiteSpace: 'nowrap' }}>
            Analyze My Sitemap
          </a>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>What this GSC status means</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>Googlebot crawled the page successfully (no 404, no 403, no redirect) and in the response found a robots directive of either &lt;meta name=&quot;robots&quot; content=&quot;noindex&quot;&gt; in the HTML head or an X-Robots-Tag: noindex HTTP header. Google respects it and removes the URL from the index. Unlike quality-based exclusions, this is a rule-based exclusion - Google is doing exactly what you told it to do.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common causes</h2>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 32 }}>
          <li style={{ marginBottom: 8 }}>Staging site noindex tags accidentally deployed to production (WordPress Settings &gt; Reading &gt; &quot;Discourage search engines&quot; left checked).</li>
          <li style={{ marginBottom: 8 }}>SEO plugins (Yoast, Rank Math, AIOSEO) set to noindex tags, categories, author pages, or post types without you realizing.</li>
          <li style={{ marginBottom: 8 }}>CDN or reverse proxy (Cloudflare, Fastly) injecting X-Robots-Tag: noindex headers.</li>
          <li style={{ marginBottom: 8 }}>Password-protected or members-only templates leaving noindex on for logged-out crawlers.</li>
          <li style={{ marginBottom: 8 }}>Intentional noindex on thin or duplicate pages (filter URLs, internal search results, paginated archives) - this is usually correct.</li>
          <li style={{ marginBottom: 8 }}>JavaScript-rendered noindex added by a client-side framework only on certain routes.</li>
        </ul>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How it affects indexing</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>Any page with a noindex tag will not appear in search results, will not receive organic traffic, and over time stops passing link equity to the pages it links to. If the tag is on a page you actually want indexed, the business cost is direct: that page cannot rank at all.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How to diagnose</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>In GSC, open Page indexing, click &quot;Excluded by noindex tag&quot;, and examine the URL list. Run the URL Inspection tool on a sample URL - it shows the exact reason. Then load the URL and view source (Ctrl+U) and search for &quot;noindex&quot;. Also check HTTP response headers with curl -I URL to catch X-Robots-Tag. If the HTML shows no noindex but GSC still reports it, the tag is being added after render or in headers.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How to fix</h2>
        <div style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
          <pre style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: '#1c1c26', whiteSpace: 'pre-wrap', fontFamily: 'DM Mono, monospace' }}>1. Confirm you actually want the page indexed - many excluded pages should stay excluded.
2. View page source and remove the &lt;meta name=&quot;robots&quot; content=&quot;noindex&quot;&gt; tag (or change content to &quot;index, follow&quot;).
3. Check HTTP headers with curl -I URL and remove any X-Robots-Tag: noindex header from your server, CDN, or .htaccess.
4. In WordPress: Settings &gt; Reading &gt; uncheck &quot;Discourage search engines from indexing this site&quot;.
5. In Yoast/Rank Math: open the page editor, find the Advanced section, and set &quot;Allow search engines to show this page?&quot; to Yes.
6. If your framework (Next.js, etc.) renders noindex via JS, make sure the route-level metadata emits index, follow.
7. Use the URL Inspection tool and click &quot;Request Indexing&quot; to speed up reprocessing.</pre>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, marginTop: 40 }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>I removed the noindex tag - why is the page still excluded?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Google has to recrawl the URL before the status flips. Use the URL Inspection tool in GSC and click &quot;Request Indexing&quot; - it usually updates within a few days. Also double-check that the noindex is not coming from an HTTP header (X-Robots-Tag) rather than the HTML.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Can noindex come from somewhere other than the meta tag?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Yes. Google honors noindex from the X-Robots-Tag HTTP response header, from robots meta tags injected by JavaScript, and from CMS settings that toggle it on the server side. CDNs, SEO plugins, and staging environments are the most common hidden sources.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Does a noindex page still pass link equity?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Links on a long-term noindex page are eventually treated as nofollow by Google, so any PageRank flowing through them fades. Do not rely on noindex pages as internal link hubs.</div>
          </div>
        </div>

        <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
          <div style={{ fontSize: 22, fontWeight: 700, color: 'white', marginBottom: 8 }}>Spot every noindex tag on your site</div>
          <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free crawl - find the pages accidentally blocked from Google</div>
          <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 32px', borderRadius: 8, textDecoration: 'none', fontWeight: 700, fontSize: 15 }}>
            Analyze My Sitemap Free
          </a>
        </div>

        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Related GSC indexing statuses</div>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <li><a href="/gsc-errors/blocked-by-robots-txt" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Blocked by robots.txt</a></li>
            <li><a href="/gsc-errors/crawled-not-indexed" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Crawled - not indexed</a></li>
            <li><a href="/gsc-errors/alternate-page-with-canonical" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Alternate page with canonical</a></li>
          </ul>
          <div style={{ marginTop: 16 }}>
            <a href="/gsc-errors" style={{ color: '#2d5be3', fontSize: 13 }}>All GSC indexing errors</a>
          </div>
        </div>
      </div>
    </>
  );
}
