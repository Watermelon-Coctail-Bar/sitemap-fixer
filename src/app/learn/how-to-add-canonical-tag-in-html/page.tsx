import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'How to Add a Canonical Tag in HTML',
  description: 'Exact HTML syntax for the canonical tag, where to place it, WordPress and Next.js examples, HTTP header canonical, and verification steps.',
  keywords: 'how to add canonical tag in html, add canonical tag, canonical tag html, canonical tag example, canonical tag syntax, canonical tag wordpress, canonical tag nextjs, rel canonical html',
  alternates: { canonical: 'https://sitemapfixer.com/learn/how-to-add-canonical-tag-in-html' },
  openGraph: {
    title: 'How to Add a Canonical Tag in HTML',
    description: 'Step-by-step tutorial with exact HTML, WordPress (Yoast, Rank Math), Next.js/React, and HTTP header examples.',
    url: 'https://sitemapfixer.com/learn/how-to-add-canonical-tag-in-html',
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"Article","headline":"How to Add a Canonical Tag in HTML (With Examples)","description":"Exact HTML syntax, placement rules, and platform-specific examples for adding a canonical tag.","url":"https://sitemapfixer.com/learn/how-to-add-canonical-tag-in-html","author":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com"},"publisher":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com","logo":{"@type":"ImageObject","url":"https://sitemapfixer.com/opengraph-image"}},"datePublished":"2026-04-17","mainEntityOfPage":{"@type":"WebPage","@id":"https://sitemapfixer.com/learn/how-to-add-canonical-tag-in-html"}}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Where should the canonical tag go in HTML?","acceptedAnswer":{"@type":"Answer","text":"Inside the <head> element, before the closing </head> tag. It must be in the HTML head, not the body — Google ignores canonical tags in the body. It should also be present in the initial server-rendered HTML, not injected by JavaScript after page load."}},{"@type":"Question","name":"Should the canonical URL be absolute or relative?","acceptedAnswer":{"@type":"Answer","text":"Always absolute. Use the full URL including protocol (https://) and domain. Relative canonicals work but are error-prone and not recommended by Google."}},{"@type":"Question","name":"How do I verify my canonical tag is working?","acceptedAnswer":{"@type":"Answer","text":"Use Google Search Console\\u2019s URL Inspection tool. It shows the user-declared canonical and the Google-selected canonical side by side. If they match, the tag is being honored. If they differ, Google is overriding your canonical based on other signals."}}]}' }} />
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>How to Add a Canonical Tag in HTML</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>How to Add a Canonical Tag in HTML (With Examples)</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your canonical tags free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8 }}>
        <p style={{ marginBottom: 20 }}>This tutorial walks through exactly how to add a canonical tag in HTML, where to place it, and how to implement it on the platforms most people use — WordPress (Yoast, Rank Math), Next.js, and via HTTP headers for non-HTML files like PDFs. Every example is copy-paste ready and matches what Google Search Console expects to see.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>The Exact HTML Syntax</h2>
        <p style={{ marginBottom: 12 }}>The canonical tag is a <code>&lt;link&gt;</code> element with <code>rel="canonical"</code> and the absolute URL in <code>href</code>:</p>
        <pre style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 8, padding: 16, fontSize: 13, fontFamily: 'DM Mono, monospace', overflowX: 'auto', marginBottom: 20 }}>{`<link rel="canonical" href="https://example.com/page/" />`}</pre>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>Where to Place It</h2>
        <p style={{ marginBottom: 12 }}>Inside the <code>&lt;head&gt;</code>, ideally near the top. Google ignores canonical tags placed in the body. Example:</p>
        <pre style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 8, padding: 16, fontSize: 13, fontFamily: 'DM Mono, monospace', overflowX: 'auto', marginBottom: 20 }}>{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Example Page</title>
  <link rel="canonical" href="https://example.com/page/" />
</head>
<body>...</body>
</html>`}</pre>
        <p style={{ marginBottom: 20 }}>The tag must be in the initial server-rendered HTML. Canonicals injected by JavaScript after page load are sometimes picked up by Google but frequently ignored.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>Self-Referencing Canonical</h2>
        <p style={{ marginBottom: 12 }}>Every indexable page should canonical to itself. The URL in the tag matches the URL the page loads at:</p>
        <pre style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 8, padding: 16, fontSize: 13, fontFamily: 'DM Mono, monospace', overflowX: 'auto', marginBottom: 20 }}>{`<!-- On https://example.com/blog/post-slug/ -->
<link rel="canonical" href="https://example.com/blog/post-slug/" />`}</pre>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>Cross-Domain Canonical</h2>
        <p style={{ marginBottom: 12 }}>When the same content is syndicated on a partner domain, the syndicated version canonicals back to your original:</p>
        <pre style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 8, padding: 16, fontSize: 13, fontFamily: 'DM Mono, monospace', overflowX: 'auto', marginBottom: 20 }}>{`<!-- On https://partner.com/republished-article/ -->
<link rel="canonical" href="https://example.com/original-article/" />`}</pre>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>Setting Canonical via HTTP Header (for PDFs etc.)</h2>
        <p style={{ marginBottom: 12 }}>For files that cannot contain HTML — PDFs, images, plain text — send canonical as an HTTP response header:</p>
        <pre style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 8, padding: 16, fontSize: 13, fontFamily: 'DM Mono, monospace', overflowX: 'auto', marginBottom: 20 }}>{`Link: <https://example.com/whitepaper.pdf>; rel="canonical"`}</pre>
        <p style={{ marginBottom: 20 }}>In Nginx: <code>add_header Link &apos;&lt;https://example.com/whitepaper.pdf&gt;; rel="canonical"&apos;;</code>. In Apache: <code>Header set Link &apos;&lt;https://example.com/whitepaper.pdf&gt;; rel="canonical"&apos;</code>.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>How to Add Canonical in WordPress</h2>
        <p style={{ marginBottom: 12 }}><strong>Yoast SEO:</strong> Edit the post &gt; scroll to the Yoast box &gt; Advanced &gt; "Canonical URL" field. Leave blank for self-canonical (Yoast generates it), or enter a URL to override.</p>
        <p style={{ marginBottom: 12 }}><strong>Rank Math:</strong> Edit the post &gt; Rank Math sidebar &gt; Advanced tab &gt; "Canonical URL" field. Same behavior as Yoast.</p>
        <p style={{ marginBottom: 20 }}>Both plugins automatically add self-referencing canonicals to every post and page. Do not also enable canonical in your theme — two sources will produce duplicate tags and Google will ignore both.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>How to Add Canonical in Next.js / React</h2>
        <p style={{ marginBottom: 12 }}>In Next.js App Router, use the <code>metadata</code> export:</p>
        <pre style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 8, padding: 16, fontSize: 13, fontFamily: 'DM Mono, monospace', overflowX: 'auto', marginBottom: 20 }}>{`export const metadata = {
  alternates: {
    canonical: 'https://example.com/page/',
  },
};`}</pre>
        <p style={{ marginBottom: 12 }}>In Pages Router or plain React with <code>next/head</code>:</p>
        <pre style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 8, padding: 16, fontSize: 13, fontFamily: 'DM Mono, monospace', overflowX: 'auto', marginBottom: 20 }}>{`import Head from 'next/head';

export default function Page() {
  return (
    <Head>
      <link rel="canonical" href="https://example.com/page/" />
    </Head>
  );
}`}</pre>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>Common Mistakes</h2>
        <p style={{ marginBottom: 12 }}>— Relative URL (<code>href="/page/"</code>) instead of absolute. Use full URLs.</p>
        <p style={{ marginBottom: 12 }}>— Trailing slash mismatch with the actual URL.</p>
        <p style={{ marginBottom: 12 }}>— Canonical in <code>&lt;body&gt;</code> instead of <code>&lt;head&gt;</code>.</p>
        <p style={{ marginBottom: 12 }}>— Multiple canonicals on the same page (from theme + plugin).</p>
        <p style={{ marginBottom: 12 }}>— Protocol mismatch (<code>http://</code> on an HTTPS page).</p>
        <p style={{ marginBottom: 20 }}>— Canonical to a URL that 301 redirects instead of returning 200.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>Verification</h2>
        <p style={{ marginBottom: 20 }}>Open Google Search Console, go to URL Inspection, paste your URL. The tool shows "User-declared canonical" and "Google-selected canonical." If they match, you are done. If they differ, Google is overriding — fix any conflicting internal links, sitemap entries, or hreflang before adding more canonical tags.</p>

        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/learn/canonical-error-fix" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Canonical Tag Errors: How to Diagnose and Fix Them</a></li>
            <li><a href="/learn/canonical-redirect-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Canonical vs Redirect: When to Use Each for SEO</a></li>
            <li><a href="/learn/hreflang-canonical-relationship" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Hreflang and Canonical Tags: How They Work Together</a></li>
            <li><a href="/learn/canonical-noindex-relationship" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Canonical + Noindex: The Conflict Google Warns About</a></li>
          </ul>
        </div>
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Audit your canonical tags now</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>
      <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
        <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Related guides</div>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <li><a href="/learn/canonical-error-fix" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Canonical Errors</a></li>
          <li><a href="/learn/canonical-redirect-guide" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Canonical vs Redirect</a></li>
          <li><a href="/learn/hreflang-canonical-relationship" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Hreflang & Canonical</a></li>
          <li><a href="/learn/canonical-noindex-relationship" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Canonical + Noindex</a></li>
        </ul>
      </div>
    </div>
  );
}
