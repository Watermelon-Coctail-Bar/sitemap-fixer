import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fix Sitemap for Framer - Complete Guide',
  description: 'Optimize your Framer sitemap: manage CMS collection items, dynamic pages, framer.website subdomains, and indexing for your published site.',
  alternates: { canonical: 'https://sitemapfixer.com/fix-sitemap-for/framer' },
  openGraph: {
    title: 'Fix Sitemap for Framer - Complete Guide',
    description: 'Optimize your Framer sitemap: manage CMS collection items, dynamic pages, framer.website subdomains, and indexing for your published site.',
    url: 'https://sitemapfixer.com/fix-sitemap-for/framer',
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
  const faqSchema = "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Where is the Framer sitemap URL?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"At yourdomain.com/sitemap.xml once you've published. Framer generates it automatically from pages and CMS Collections. It's not available at the framer.website preview URL - confirm you're checking the right domain.\"}},{\"@type\":\"Question\",\"name\":\"Can I edit the Framer sitemap file directly?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"No. Framer owns the sitemap output. You control what's in it via per-page SEO settings, CMS Collection exclude toggles, and hiding specific pages from search engines.\"}},{\"@type\":\"Question\",\"name\":\"Does Framer include image entries in the sitemap?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"No, Framer's sitemap is URL-only. If Google Images traffic matters for your site, rely on in-page image optimization (alt text, structured data) rather than a supplemental image sitemap - Framer doesn't currently support one.\"}}]}";

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px', fontFamily: 'Geist, sans-serif' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'Fix Sitemap for Framer - Complete Guide', description: 'Optimize your Framer sitemap: manage CMS collection items, dynamic pages, framer.website subdomains, and indexing for your published site.', url: 'https://sitemapfixer.com/fix-sitemap-for/framer', author: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com' }, publisher: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com', logo: { '@type': 'ImageObject', url: 'https://sitemapfixer.com/opengraph-image' } }, datePublished: '2026-04-17', mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://sitemapfixer.com/fix-sitemap-for/framer' } }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sitemapfixer.com/' }, { '@type': 'ListItem', position: 2, name: 'Fix by Platform', item: 'https://sitemapfixer.com/fix-sitemap-for' }, { '@type': 'ListItem', position: 3, name: 'Fix Sitemap for Framer - Complete Guide', item: 'https://sitemapfixer.com/fix-sitemap-for/framer' }] }),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />

      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>
        {'  /  '}
        <a href="/fix-sitemap-for" style={{ color: '#2d5be3', textDecoration: 'none' }}>Platform Guides</a>
        {'  /  '}
        <span>Framer</span>
      </nav>

      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>
        Fix Your Sitemap for Framer
      </h1>
      <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        Framer auto-generates <code>/sitemap.xml</code> when you publish, but CMS Collections, dynamic detail pages, and <code>framer.website</code> preview domains often slip into the output and steal link equity from your real site.
      </p>

      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Analyze your Framer sitemap now</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>
          Try Sitemap Fixer Free
        </a>
      </div>

      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 24 }}>
        Framer does more automatically than most no-code builders - which is good until you realize you can't configure your way out of its defaults. There's no <code>sitemap.xml</code> file to edit. The toggles live in per-page SEO panels and per-collection settings, and if you can't find them, you're stuck.
      </p>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 32 }}>
        Saw a Framer marketing site recently with 34 pages published but 71 URLs in the sitemap. The extras came from CMS Collection "template" pages that had been left on Published instead of Draft, plus a <code>/changelog/:slug</code> dynamic page rendering an empty entry. All fixable from the editor UI, none of it documented anywhere obvious.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common Framer Sitemap Issues</h2>
      <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li><code>framer.website</code> preview subdomain indexed alongside the custom domain</li>
        <li>CMS Collection detail pages appearing for items you meant to leave as drafts</li>
        <li>Collection "template" pages (the design shell) indexable when they should be hidden</li>
        <li>Utility pages (404, 500, password-protected) ending up in <code>sitemap.xml</code></li>
        <li>Localization creating duplicate URLs without hreflang</li>
        <li>Stale URLs persisting in the sitemap for hours after unpublish, thanks to Framer CDN caching</li>
        <li>No <code>lastmod</code> values because Framer doesn't expose per-item modified timestamps</li>
        <li>Marketing-team members accidentally flipping "Hide from search engines" off on hub pages</li>
      </ul>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Staged vs published, and the framer.website trap</h2>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 16 }}>
        Framer has two kinds of "live" URLs: the Staging domain (<code>*.framer.website</code>) and your custom domain. By default both are indexable. If your custom domain is <code>acme.com</code>, Google will happily index <code>acme.framer.website</code> as a duplicate unless you stop it.
      </p>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        Fix: under Site Settings &gt; Domains, set your custom domain as primary. Framer will 301 the <code>framer.website</code> URL, and the preview sitemap stops being served. Double-check by requesting <code>https://acme.framer.website/sitemap.xml</code> and confirming it redirects (or 404s) rather than returns a live XML document.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>CMS Collection gotchas</h2>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 16 }}>
        CMS Collections in Framer produce two things: the detail page template (e.g. <code>/blog/:slug</code>) and one URL per item. The item URLs land in the sitemap the moment you set the item to Published. Drafts are excluded - but Framer still lets you preview drafts at a live URL while you're logged in, which gives people the wrong impression that "my content is live already".
      </p>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        Per-item control: open the collection, click an item, toggle <em>Draft</em> for anything not ready. Per-collection control: there's also a collection-level "Include in sitemap" switch under the collection's SEO panel - flip it off for internal collections like testimonials or team bios that render inside other pages but shouldn't get their own URLs.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>hreflang with localization</h2>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        Framer's built-in localization adds locale prefixes to your URLs (<code>/de/about</code>, <code>/fr/about</code>). It lists them all in the sitemap but doesn't emit <code>hreflang</code> alternates. Add them via Custom Code in Site Settings &gt; General, inserting <code>&lt;link rel="alternate" hreflang="..."&gt;</code> tags in the head. Not ideal - this should be built-in - but it's the current workaround.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Step-by-Step Fix Guide</h2>
      <ol style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li style={{ marginBottom: 12 }}>In Site Settings &gt; Domains, connect a custom domain and set it as primary. Framer 301s the <code>framer.website</code> subdomain automatically</li>
        <li style={{ marginBottom: 12 }}>Open Site Settings &gt; SEO and verify "Generate sitemap.xml" is on with the correct base URL</li>
        <li style={{ marginBottom: 12 }}>For each CMS Collection, disable "Include in sitemap" if the collection is internal-only</li>
        <li style={{ marginBottom: 12 }}>Set each CMS item to Draft if you're not ready to publish it. Draft items don't hit the sitemap</li>
        <li style={{ marginBottom: 12 }}>Mark 404, 500, and password-protected pages as "Hide from search engines" in their Page SEO panel</li>
        <li style={{ marginBottom: 12 }}>For localized sites, add hreflang alternates via Custom Code</li>
        <li style={{ marginBottom: 12 }}>Force a republish so Framer rebuilds <code>sitemap.xml</code> and purges CDN cache</li>
        <li style={{ marginBottom: 12 }}>Verify with <code>curl https://yourdomain.com/sitemap.xml</code> and spot-check the URL count</li>
        <li style={{ marginBottom: 12 }}>Submit the sitemap to Google Search Console under the production domain property</li>
      </ol>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, marginTop: 40 }}>Frequently Asked Questions</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
        <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Where is the Framer sitemap URL?</div>
          <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>At yourdomain.com/sitemap.xml once you&apos;ve published. Framer generates it automatically from pages and CMS Collections. It&apos;s not available at the framer.website preview URL - confirm you&apos;re checking the right domain.</div>
        </div>
        <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Can I edit the Framer sitemap file directly?</div>
          <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>No. Framer owns the sitemap output. You control what&apos;s in it via per-page SEO settings, CMS Collection exclude toggles, and hiding specific pages from search engines.</div>
        </div>
        <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Does Framer include image entries in the sitemap?</div>
          <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>No, Framer&apos;s sitemap is URL-only. If Google Images traffic matters for your site, rely on in-page image optimization rather than a supplemental image sitemap - Framer doesn&apos;t currently support one.</div>
        </div>
      </div>

      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Analyze your Framer sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Find all issues in your sitemap - free, no credit card needed</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>
          Analyze My Sitemap Free
        </a>
      </div>

      <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
        <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Other platform guides</div>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <li><a href="/fix-sitemap-for/webflow" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Webflow</a></li>
          <li><a href="/fix-sitemap-for/squarespace" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Squarespace</a></li>
          <li><a href="/fix-sitemap-for/wix" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Wix</a></li>
          <li><a href="/fix-sitemap-for/astro" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Astro</a></li>
          <li><a href="/learn/framer-sitemap" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Framer Sitemap Guide</a></li>
        </ul>
      </div>
    </div>
  );
}
