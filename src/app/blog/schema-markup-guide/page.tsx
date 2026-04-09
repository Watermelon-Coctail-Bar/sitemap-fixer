import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Schema Markup: Add Structured Data to Your Site',
  description: "Schema markup helps Google understand your content and generate rich results. Here is how to add schema to your site, which types to prioritize, and how to validate it.",
  alternates: { canonical: 'https://sitemapfixer.com/blog/schema-markup-guide' },
  openGraph: {
    title: 'Schema Markup: Add Structured Data to Your Site',
    description: 'Schema markup helps Google understand your content and generate rich results. Here is how to add schema to your site, which types to prioritize, and how to validate it.',
    url: 'https://sitemapfixer.com/blog/schema-markup-guide',
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
const sections = [
  { t: "What schema markup is and why it matters", d: "Schema markup is structured data code - usually JSON-LD - added to your pages that explicitly tells search engines what your content is about. Without schema, Google infers content type from context. With schema, you declare it directly: this is a Product, this is a Recipe, this is a FAQ, this is a LocalBusiness. Correct schema unlocks rich results - enhanced SERP features that show star ratings, prices, recipe details, or FAQ dropdowns directly in search results, significantly increasing click-through rates." },
  { t: "How to implement JSON-LD schema", d: "Add a script tag with type=application/ld+json in the head section of your page. Inside the script, write the JSON object describing your content. Example: for a FAQ page, use @context: https://schema.org, @type: FAQPage, and a mainEntity array of Question objects each with acceptedAnswer. In Next.js: inject via a Script component or directly in the page head. In WordPress: use a schema plugin (RankMath or Yoast) or add manually via a theme hook. Never add schema in a noscript tag or in HTML attributes - JSON-LD in script tags is the recommended method." },
  { t: "Testing and monitoring schema", d: "Always test schema before deploying. Use Google Rich Results Test (search.google.com/test/rich-results) - paste your URL or code and see exactly which rich results your schema qualifies for and any errors. After deploying, check Google Search Console Enhancements section - each schema type you implement gets its own report showing errors, warnings, and which pages have valid markup. Fix errors promptly: a schema error on a template affects every page using that template. Rich results typically start appearing in search results within 1-2 weeks of Google crawling your updated pages." },
];
export default function Page() {
  return (
    <article style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/blog" style={{ color: '#2d5be3', textDecoration: 'none' }}>Blog</a>{' / '}
        <span>Schema Markup Guide</span>
      </nav>
      <div style={{ fontSize: 13, color: '#9ca3af', marginBottom: 12 }}>April 2025 · 6 min read</div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, lineHeight: 1.15 }}>Schema Markup Guide: Add Structured Data and Earn Rich Results</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Ensure your pages are indexable for rich results</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Site Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        {sections.map(({ t, d }) => (
          <div key={t} style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12 }}>{t}</h2>
            <p style={{ margin: 0 }}>{d}</p>
          </div>
        ))}
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Ensure your pages are fully indexable</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free sitemap and technical SEO analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
  
        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/blog/structured-data-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Structured Data: Add Schema Markup</a></li>
            <li><a href="/blog/google-search-console-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Google Search Console: Fix Your SEO</a></li>
            <li><a href="/blog/google-search-console-errors-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Google Search Console Errors: Meanings & Fixes</a></li>
            <li><a href="/learn/technical-seo-checklist" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Technical SEO Checklist 2025</a></li>
            <li><a href="/learn/seo-audit-checklist" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>SEO Audit Checklist: 25 Checks to Run on Any Website</a></li>
          </ul>
        </div>
    </div>
    </article>
  );
}
