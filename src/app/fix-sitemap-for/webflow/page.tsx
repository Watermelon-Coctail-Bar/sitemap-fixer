import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fix Sitemap for Webflow - Complete Guide',
  description: 'Optimize your Webflow sitemap: manage CMS collection pagination, prevent staging subdomain leaks, and improve indexing of dynamic pages.',
  alternates: { canonical: 'https://sitemapfixer.com/fix-sitemap-for/webflow' },
  openGraph: {
    title: 'Fix Sitemap for Webflow - Complete Guide',
    description: 'Optimize your Webflow sitemap: manage CMS collection pagination, prevent staging subdomain leaks, and improve indexing of dynamic pages.',
    url: 'https://sitemapfixer.com/fix-sitemap-for/webflow',
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
  const faqSchema = "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"How do I stop webflow.io staging from being indexed?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Webflow adds noindex to the staging subdomain automatically on paid plans. Verify with curl -I https://yoursite.webflow.io and look for X-Robots-Tag: noindex. On free plans, staging is indexable - which is one reason to upgrade or move to a custom domain fast.\"}},{\"@type\":\"Question\",\"name\":\"Why aren't my CMS Collection items in the sitemap?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Three possibilities: the items are set to Draft, the collection template has 'Exclude from sitemap' enabled, or you haven't published the site since adding them. Webflow regenerates sitemap.xml only on publish, not on save.\"}},{\"@type\":\"Question\",\"name\":\"Can I edit Webflow's sitemap.xml directly?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Partially. Disable auto-generation in Project Settings > SEO > Sitemap and paste your own XML into the custom sitemap field. You'll need to maintain it manually, which only makes sense for very small sites or very specific edge cases.\"}}]}";

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px', fontFamily: 'Geist, sans-serif' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'Fix Sitemap for Webflow - Complete Guide', description: 'Optimize your Webflow sitemap: manage CMS collection pagination, prevent staging subdomain leaks, and improve indexing of dynamic pages.', url: 'https://sitemapfixer.com/fix-sitemap-for/webflow', author: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com' }, publisher: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com', logo: { '@type': 'ImageObject', url: 'https://sitemapfixer.com/opengraph-image' } }, datePublished: '2026-04-17', mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://sitemapfixer.com/fix-sitemap-for/webflow' } }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sitemapfixer.com/' }, { '@type': 'ListItem', position: 2, name: 'Fix by Platform', item: 'https://sitemapfixer.com/fix-sitemap-for' }, { '@type': 'ListItem', position: 3, name: 'Fix Sitemap for Webflow - Complete Guide', item: 'https://sitemapfixer.com/fix-sitemap-for/webflow' }] }),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />

      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>
        {'  /  '}
        <a href="/fix-sitemap-for" style={{ color: '#2d5be3', textDecoration: 'none' }}>Platform Guides</a>
        {'  /  '}
        <span>Webflow</span>
      </nav>

      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>
        Fix Your Sitemap for Webflow
      </h1>
      <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        Webflow auto-generates a sitemap, but CMS collections, paginated collection lists, and staging subdomains routinely cause issues that hurt indexing and crawl efficiency.
      </p>

      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Analyze your Webflow sitemap now</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>
          Try Sitemap Fixer Free
        </a>
      </div>

      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 24 }}>
        Webflow's sitemap is auto-generated and you get one of two modes: <strong>auto</strong> (everything public) or <strong>custom</strong> (paste your own XML and maintain it manually). There's no middle ground. No per-item sitemap toggle. No filter patterns. You either accept what Webflow produces or you hand-write the file.
      </p>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 32 }}>
        Fixed a Webflow agency site with 210 pages published but 680 URLs in the auto sitemap. The extras were paginated CMS Collection List URLs (<code>?page=2</code> through <code>?page=14</code>) that Webflow had emitted as separate URLs, plus four Collection template pages the team had duplicated and forgotten. Switching to a custom sitemap with just canonical URLs fixed coverage in GSC within three weeks.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common Webflow Sitemap Issues</h2>
      <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li>Staging subdomain (<code>yoursite.webflow.io</code>) URLs leaking into indexing on free plans</li>
        <li>CMS Collection pagination URLs (<code>?page=2</code>) included inconsistently</li>
        <li>Draft CMS items appearing if set to Published before content was ready</li>
        <li>Utility pages (404, password, style guide) listed despite being marked noindex</li>
        <li>Missing <code>lastmod</code> values - Webflow uses the site's publish time, not item update time</li>
        <li>Collection template pages appearing without their parent list</li>
        <li>Site published without sitemap regeneration (Webflow only rebuilds on publish)</li>
        <li>Custom sitemap getting out of sync with actual pages over time</li>
      </ul>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>The webflow.io staging leak</h2>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        Free-plan Webflow sites expose the <code>*.webflow.io</code> staging subdomain without noindex. Paid plans add the noindex header automatically. Either way, you should connect a custom domain as soon as possible. Once the custom domain is primary, Webflow serves the sitemap from the custom domain and drops <code>.webflow.io</code> from search results over a few weeks.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Robots.txt workaround</h2>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 16 }}>
        Webflow lets you edit <code>robots.txt</code> at Project Settings &gt; SEO &gt; robots.txt. A basic setup that blocks the staging subdomain only works if Google respects the User-agent split - which it does not always, so combine it with the noindex header:
      </p>
      <div style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
        <pre style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: '#1c1c26', whiteSpace: 'pre-wrap', fontFamily: 'DM Mono, monospace' }}>{`# Custom domain robots.txt
User-agent: *
Disallow: /401
Disallow: /404
Disallow: /style-guide
Disallow: /detail_*
Disallow: /*?page=

Sitemap: https://yourdomain.com/sitemap.xml`}</pre>
      </div>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>CMS Collections and pagination</h2>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        Webflow paginates Collection Lists at 100 items by default. The pagination URLs (<code>?page=2</code>, <code>?page=3</code>) get crawled but shouldn't be indexed - they're essentially duplicate list pages with different contents. Block <code>*?page=</code> in robots.txt (above) and set <code>rel=next/prev</code> via Custom Code if you want to help Google understand the sequence. For CMS item detail pages, use the per-item "Exclude from sitemap" toggle only on items that really shouldn't be indexed (drafts, internal resources).
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Step-by-Step Fix Guide</h2>
      <ol style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li style={{ marginBottom: 12 }}>Connect a custom domain and set it as primary in Project Settings &gt; Hosting</li>
        <li style={{ marginBottom: 12 }}>In Project Settings &gt; SEO, enable Auto-generate sitemap.xml and verify base URL</li>
        <li style={{ marginBottom: 12 }}>Add robots.txt rules blocking <code>?page=</code>, <code>/401</code>, <code>/404</code>, <code>/style-guide</code></li>
        <li style={{ marginBottom: 12 }}>Mark utility pages as "Exclude from sitemap" in Page Settings &gt; SEO</li>
        <li style={{ marginBottom: 12 }}>Per CMS item: toggle "Exclude from sitemap" for anything not ready</li>
        <li style={{ marginBottom: 12 }}>Publish the site (Webflow only regenerates sitemap.xml on publish)</li>
        <li style={{ marginBottom: 12 }}>Verify with <code>curl https://yourdomain.com/sitemap.xml</code> - spot-check URL count</li>
        <li style={{ marginBottom: 12 }}>Confirm staging returns noindex: <code>curl -I https://yoursite.webflow.io</code></li>
        <li style={{ marginBottom: 12 }}>Submit the custom-domain sitemap to Google Search Console</li>
      </ol>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, marginTop: 40 }}>Frequently Asked Questions</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
        <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>How do I stop webflow.io staging from being indexed?</div>
          <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Webflow adds noindex to the staging subdomain automatically on paid plans. Verify with curl -I https://yoursite.webflow.io and look for X-Robots-Tag: noindex. On free plans, staging is indexable - which is one reason to upgrade or move to a custom domain fast.</div>
        </div>
        <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Why aren&apos;t my CMS Collection items in the sitemap?</div>
          <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Three possibilities: items are set to Draft, the collection template has &apos;Exclude from sitemap&apos; enabled, or you haven&apos;t published the site since adding them. Webflow regenerates sitemap.xml only on publish.</div>
        </div>
        <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Can I edit Webflow&apos;s sitemap.xml directly?</div>
          <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Partially. Disable auto-generation in Project Settings &gt; SEO &gt; Sitemap and paste your own XML into the custom sitemap field. You&apos;ll need to maintain it manually, which only makes sense for very small or specific edge-case sites.</div>
        </div>
      </div>

      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Analyze your Webflow sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Find all issues in your sitemap - free, no credit card needed</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>
          Analyze My Sitemap Free
        </a>
      </div>

      <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
        <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Other platform guides</div>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <li><a href="/fix-sitemap-for/wordpress" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>WordPress</a></li>
          <li><a href="/fix-sitemap-for/shopify" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Shopify</a></li>
          <li><a href="/fix-sitemap-for/squarespace" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Squarespace</a></li>
          <li><a href="/fix-sitemap-for/framer" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Framer</a></li>
          <li><a href="/learn/webflow-sitemap" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Webflow Sitemap Guide</a></li>
        </ul>
      </div>
    </div>
  );
}
