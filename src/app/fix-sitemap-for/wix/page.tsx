import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fix Sitemap for Wix - Complete Guide',
  description: 'Optimize your Wix sitemap: handle dynamic pages, member-only URLs, locale duplication, and improve indexing across Wix SEO Patterns.',
  alternates: { canonical: 'https://sitemapfixer.com/fix-sitemap-for/wix' },
  openGraph: {
    title: 'Fix Sitemap for Wix - Complete Guide',
    description: 'Optimize your Wix sitemap: handle dynamic pages, member-only URLs, locale duplication, and improve indexing across Wix SEO Patterns.',
    url: 'https://sitemapfixer.com/fix-sitemap-for/wix',
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
  const faqSchema = "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Where is the Wix sitemap URL?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"At yourdomain.com/sitemap.xml once you've connected a custom domain. On free plans, the URL is username.wixsite.com/sitename/sitemap.xml, which is harder to rank - upgrading to a paid plan with a custom domain is step one for Wix SEO.\"}},{\"@type\":\"Question\",\"name\":\"What are Wix SEO Patterns?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"SEO Patterns let you bulk-configure meta tags, URL structures, and canonicals for dynamic pages generated from Wix Data collections. Instead of editing each product or blog post individually, you set a template that applies to all items of that type.\"}},{\"@type\":\"Question\",\"name\":\"Can I exclude individual pages from the Wix sitemap?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes, each page has a 'Show this page in search results' toggle under the SEO basics tab. Turning it off adds noindex and removes the page from sitemap.xml after republish.\"}}]}";

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px', fontFamily: 'Geist, sans-serif' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'Fix Sitemap for Wix - Complete Guide', description: 'Optimize your Wix sitemap: handle dynamic pages, member-only URLs, locale duplication, and improve indexing across Wix SEO Patterns.', url: 'https://sitemapfixer.com/fix-sitemap-for/wix', author: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com' }, publisher: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com', logo: { '@type': 'ImageObject', url: 'https://sitemapfixer.com/opengraph-image' } }, datePublished: '2026-04-17', mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://sitemapfixer.com/fix-sitemap-for/wix' } }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sitemapfixer.com/' }, { '@type': 'ListItem', position: 2, name: 'Fix by Platform', item: 'https://sitemapfixer.com/fix-sitemap-for' }, { '@type': 'ListItem', position: 3, name: 'Fix Sitemap for Wix - Complete Guide', item: 'https://sitemapfixer.com/fix-sitemap-for/wix' }] }),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />

      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>
        {'  /  '}
        <a href="/fix-sitemap-for" style={{ color: '#2d5be3', textDecoration: 'none' }}>Platform Guides</a>
        {'  /  '}
        <span>Wix</span>
      </nav>

      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>
        Fix Your Sitemap for Wix
      </h1>
      <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        Wix generates <code>/sitemap.xml</code> automatically, but dynamic pages from Wix Data, Wix Stores product collections, and Multilingual site locales often pollute the feed with duplicates and private URLs.
      </p>

      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Analyze your Wix sitemap now</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>
          Try Sitemap Fixer Free
        </a>
      </div>

      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 24 }}>
        Wix has improved dramatically on SEO over the past few years - SEO Patterns, per-page controls, dynamic Wix Data pages that actually render clean URLs. But the defaults still lean towards "include everything", and a site built in Wix Editor with Wix Stores, Wix Bookings, and Wix Members can produce a sitemap that's 3-4x the size of what should be indexable.
      </p>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 32 }}>
        Helped a Wix-based fitness studio with 80 real pages and a sitemap showing 430 URLs. The extras: 180 Wix Bookings service variants (one per class time slot), 90 blog tag pages, 60 member profile URLs, and a scattering of old Thank You and confirmation pages. After applying SEO Patterns and hiding the system pages, they dropped to 95 URLs.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common Wix Sitemap Issues</h2>
      <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li>Member-only and private pages in sitemap.xml because they're technically published</li>
        <li>Wix Multilingual creating duplicate URLs per locale without hreflang</li>
        <li>Dynamic pages from Wix Data with placeholder or empty records</li>
        <li>Blog tag pages adding hundreds of thin URLs</li>
        <li>Wix Stores variant URLs appearing without canonicalization</li>
        <li>Wix Bookings service-timeslot URLs leaking into the sitemap</li>
        <li>Free plan sites exposing <code>username.wixsite.com/sitename</code> alongside the custom domain</li>
        <li>Thank-you pages and confirmation URLs indexable by default</li>
      </ul>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>SEO Patterns for dynamic pages</h2>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 16 }}>
        Wix SEO Patterns are the most underused feature on the platform. They let you write one template that applies to every page generated from a Wix Data collection - meta title, description, canonical URL, even robots directives. Instead of editing 2,000 product pages, you set a pattern once and it applies to all of them.
      </p>
      <div style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
        <pre style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: '#1c1c26', whiteSpace: 'pre-wrap', fontFamily: 'DM Mono, monospace' }}>{`# Example SEO Pattern (conceptual - Wix UI-driven)
Title:       {product.name} | {site.name}
Description: Shop {product.name} - {product.shortDesc}
Canonical:   https://{site.domain}/products/{product.slug}
Index:       yes (only if product.visible = true)
Sitemap:     include (only if product.visible = true and stock > 0)`}</pre>
      </div>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        Access it at SEO Tools &gt; URL Patterns (Wix calls it different things across the 6 and 7 editors).
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Multilingual and hreflang</h2>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        Wix Multilingual adds locale prefixes like <code>/fr/about</code>, <code>/es/about</code>. Enable "Use a sitemap per language" in Multilingual settings so each locale gets its own sitemap file, and Wix emits <code>hreflang</code> alternates in the HTML head automatically. Verify with <code>view-source:</code> on a translated page. If alternates are missing, your Multilingual feature is configured as "separate site" mode instead of "linked translations" - switch it.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Step-by-Step Fix Guide</h2>
      <ol style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li style={{ marginBottom: 12 }}>Connect a custom domain (paid plan required) and set it as primary</li>
        <li style={{ marginBottom: 12 }}>Open SEO Settings &gt; Advanced SEO and confirm sitemap.xml is enabled</li>
        <li style={{ marginBottom: 12 }}>For each member-only page, toggle "Show this page in search results" off</li>
        <li style={{ marginBottom: 12 }}>Hide thank-you, confirmation, and checkout URLs from search results</li>
        <li style={{ marginBottom: 12 }}>In Wix Multilingual, set primary language and enable per-language sitemaps</li>
        <li style={{ marginBottom: 12 }}>Filter empty/draft records out of Wix Data collections powering dynamic pages</li>
        <li style={{ marginBottom: 12 }}>Use SEO Patterns for bulk canonical URLs on products, services, and blog posts</li>
        <li style={{ marginBottom: 12 }}>Edit robots.txt in SEO Tools to disallow <code>/account</code>, <code>/cart</code>, <code>/thank-you</code>, and widget paths</li>
        <li style={{ marginBottom: 12 }}>Republish, verify with <code>curl https://yourdomain.com/sitemap.xml</code>, submit to GSC</li>
      </ol>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, marginTop: 40 }}>Frequently Asked Questions</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
        <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Where is the Wix sitemap URL?</div>
          <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>At yourdomain.com/sitemap.xml once you&apos;ve connected a custom domain. On free plans, the URL is username.wixsite.com/sitename/sitemap.xml, which is harder to rank. Upgrading to a custom domain is step one.</div>
        </div>
        <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>What are Wix SEO Patterns?</div>
          <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>SEO Patterns let you bulk-configure meta tags, URL structures, and canonicals for dynamic pages from Wix Data. Instead of editing each item, you set a template that applies to all items of that type.</div>
        </div>
        <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Can I exclude individual pages from the Wix sitemap?</div>
          <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Yes, each page has a "Show this page in search results" toggle under SEO basics. Turning it off adds noindex and removes the page from sitemap.xml after republish.</div>
        </div>
      </div>

      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Analyze your Wix sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Find all issues in your sitemap - free, no credit card needed</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>
          Analyze My Sitemap Free
        </a>
      </div>

      <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
        <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Other platform guides</div>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <li><a href="/fix-sitemap-for/wordpress" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>WordPress</a></li>
          <li><a href="/fix-sitemap-for/squarespace" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Squarespace</a></li>
          <li><a href="/fix-sitemap-for/webflow" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Webflow</a></li>
          <li><a href="/fix-sitemap-for/shopify" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Shopify</a></li>
          <li><a href="/learn/wix-sitemap" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Wix Sitemap Guide</a></li>
        </ul>
      </div>
    </div>
  );
}
