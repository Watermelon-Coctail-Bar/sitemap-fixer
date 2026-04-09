import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Schema Errors: Fix Structured Data in Search Console',
  description: "Schema markup errors prevent rich results from appearing in Google Search. Here are the most common structured data errors and exactly how to fix each one.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/schema-errors-fix' },
  openGraph: {
    title: 'Schema Errors: Fix Structured Data in Search Console',
    description: 'Schema markup errors prevent rich results from appearing in Google Search. Here are the most common structured data errors and exactly how to fix each one.',
    url: 'https://sitemapfixer.com/learn/schema-errors-fix',
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
const errors = [
  { e: "Missing required field", d: "Each schema type has required properties without which Google cannot generate rich results. For Product schema: name, description, and image are required. For Article: headline, author, and datePublished. For FAQ: mainEntity with Question and acceptedAnswer. Check the specific requirements in Google's Search Gallery for each schema type. The Rich Results Test shows exactly which required fields are missing." },
  { e: "Invalid URL in image field", d: "Image URLs must be absolute - they must start with https://. Relative URLs like /images/photo.jpg are invalid in schema. The image must be accessible (returns 200), must be an image format that Google supports (JPEG, PNG, WebP, GIF), and for some schema types must meet minimum dimensions. For Product schema Google recommends images at least 696px wide." },
  { e: "Incorrect date format", d: "Dates in schema must use ISO 8601 format: YYYY-MM-DD for dates, or YYYY-MM-DDTHH:MM:SS+timezone for datetimes. Common mistakes: using MM/DD/YYYY format, missing the T separator between date and time, wrong timezone format. Valid example: 2025-04-15T09:00:00+00:00. The timezone offset is required for datetime values." },
  { e: "Schema not matching page content", d: "Google requires that schema markup describes content actually present on the page. You cannot add Product schema with a 5-star rating if no reviews appear on the page. You cannot add FAQ schema with questions and answers that are not visible in the page content. This is explicitly against Google's structured data quality guidelines and can result in manual actions if systematic." },
  { e: "Multiple conflicting schema types", d: "Having multiple schema blocks of the same type can confuse Google. If you have two Article schemas or two Product schemas on the same page, Google may ignore both. Use a single, complete schema block per type. If your page genuinely contains multiple entities (like multiple products), use an ItemList schema to contain them." },
];
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Schema Errors Fix</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Schema Errors: Fix Structured Data Issues and Earn Rich Results</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your site for technical SEO errors free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Site Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        <p style={{ marginBottom: 32 }}>Find schema errors in Google Search Console under Enhancements. Each schema type gets its own section - Article, Product, FAQ, etc. Click any error to see which URLs are affected and what the specific issue is. Always use the Rich Results Test to verify fixes before submitting for re-validation.</p>
        {errors.map(({ e, d }) => (
          <div key={e} style={{ marginBottom: 32, border: '1px solid #e4e4ed', borderRadius: 12, padding: '20px 24px', background: '#fafafa' }}>
            <div style={{ fontWeight: 700, color: '#dc2626', fontSize: 15, marginBottom: 10, fontFamily: 'monospace' }}>{e}</div>
            <p style={{ margin: 0, fontSize: 15, color: '#3d3d4f', lineHeight: 1.7 }}>{d}</p>
          </div>
        ))}
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Audit your site technical SEO</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free sitemap and indexing check in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>

        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/learn/technical-seo-checklist" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Technical SEO Checklist 2025</a></li>
            <li><a href="/learn/canonical-tags" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Canonical Tags: How to Use Them Correctly for SEO</a></li>
            <li><a href="/learn/structured-data" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Structured Data & Schema Markup: Complete Guide</a></li>
            <li><a href="/learn/core-web-vitals" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Core Web Vitals: LCP, INP, CLS Explained</a></li>
            <li><a href="/learn/page-speed-optimization" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Page Speed Optimization: Make Your Site Faster</a></li>
          </ul>
        </div>
    </div>
  );
}
