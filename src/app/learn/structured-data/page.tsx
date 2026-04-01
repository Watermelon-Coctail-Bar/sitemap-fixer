import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Structured Data & Schema Markup: Complete Guide | SitemapFixer',
  description: 'Learn how to add structured data to your site for rich results in Google Search. Covers JSON-LD, schema types, and how to test your markup.',
  alternates: { canonical: 'https://sitemapfixer.com/learn/structured-data' },
};
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Structured Data</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Structured Data and Schema Markup: Complete Guide</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Audit your site SEO free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Try SitemapFixer Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8 }}>
        <p style={{ marginBottom: 20 }}>Structured data is code you add to your pages to help search engines understand your content better. When Google understands your content, it can display rich results in search — star ratings, FAQs, product prices, recipes, and more — which dramatically improves click-through rates.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>JSON-LD: The Recommended Format</h2>
        <p style={{ marginBottom: 20 }}>Google recommends JSON-LD for structured data. It is added as a script tag in the head or body of your page and does not require modifying your HTML. This makes it the easiest format to implement and maintain. Example for an Article: add a script tag with type application/ld+json containing your Schema.org Article object with headline, author, datePublished, and image properties.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>High-Impact Schema Types</h2>
        <p style={{ marginBottom: 20 }}>Article and BlogPosting: shows article metadata in search. Product: enables price, availability, and review stars. FAQ: displays expandable questions directly in search results — one of the highest CTR improvements available. HowTo: shows steps in rich results. LocalBusiness: displays address, hours, and phone in Knowledge Panel. BreadcrumbList: shows your site hierarchy in the URL display. Organization and WebSite: enables sitelinks search box.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>How to Test Structured Data</h2>
        <p style={{ marginBottom: 20 }}>Use Google's Rich Results Test at search.google.com/test/rich-results to check if your markup is valid and eligible for rich results. Use the Schema Markup Validator at validator.schema.org for general validation. In Google Search Console, check the Enhancements section for detected structured data types and any errors Google found when crawling your pages.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>Structured Data and Sitemaps</h2>
        <p style={{ marginBottom: 20 }}>Pages with structured data must be indexed to benefit from rich results. Ensure pages with your most important schema markup are included in your sitemap and not blocked by robots.txt or noindex tags. SitemapFixer checks your sitemap coverage so your structured data pages are always crawlable.</p>
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Check your site is fully crawlable</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free sitemap analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Sitemap</a>
      </div>
      <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
        <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Related guides</div>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <li><a href="/learn/technical-seo-checklist" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Technical SEO Checklist</a></li>
          <li><a href="/learn/sitemap-best-practices" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Sitemap Best Practices</a></li>
        </ul>
      </div>
    </div>
  );
}
