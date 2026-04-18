import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Structured Data: Complete Schema Markup Guide',
  description: "Structured data helps Google understand your content and generate rich results. How to implement the most valuable schema types and validate them.",
  alternates: { canonical: 'https://sitemapfixer.com/blog/structured-data-guide' },
  openGraph: {
    title: 'Structured Data: Complete Schema Markup Guide',
    description: 'Structured data helps Google understand your content and generate rich results. How to implement the most valuable schema types.',
    url: 'https://sitemapfixer.com/blog/structured-data-guide',
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
const types = [
  { name: "Article / BlogPosting", use: "Blog posts and news articles", d: "Adds author, publisher, headline, datePublished, and image to help Google generate article rich results. Include the author entity with a sameAs property linking to the author's Wikipedia or Google Knowledge Panel page to build E-E-A-T signals." },
  { name: "Product", use: "Ecommerce product pages", d: "Enables price, availability, and review stars directly in search results. Required fields: name, description, image. For offers: price, priceCurrency, availability. For reviews: aggregateRating with ratingValue and reviewCount." },
  { name: "FAQPage", use: "Pages with question and answer content", d: "Each question-answer pair in your FAQ can appear as expandable rich results in Google Search, dramatically increasing visual space in the SERP. Only use if actual FAQ content appears on the page." },
  { name: "HowTo", use: "Step-by-step instruction pages", d: "Shows step-by-step process rich results with images. Ideal for tutorials and guides. Each step needs a name and text. Image and tool properties are optional but improve rich result appearance." },
  { name: "LocalBusiness", use: "Local business websites", d: "Name, address, phone, geo coordinates, and openingHours. Required for local SEO. Enables Google to connect your website to your Google Business Profile entity." },
  { name: "BreadcrumbList", use: "All multi-level pages", d: "Replaces the URL in search results with your page hierarchy. Automatically shows Home / Category / Page. Almost every non-homepage should have this. Most modern CMS plugins add it automatically." },
];
export default function Page() {
  return (
    <article style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/blog" style={{ color: '#2d5be3', textDecoration: 'none' }}>Blog</a>{' / '}
        <span>Structured Data Guide</span>
      </nav>
      <div style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 16 }}>By <a href="/about" style={{ color: '#2d5be3', textDecoration: 'none' }}>Arnoldas Arny</a></div>
      <div style={{ fontSize: 13, color: '#9ca3af', marginBottom: 12 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"Article","headline":"Structured Data: Add Schema Markup","description":"Structured data helps Google understand your content and generate rich results. How to implement the most valuable schema types.","url":"https://sitemapfixer.com/blog/structured-data-guide","author":{"@type":"Person","name":"Arnoldas Arny","url":"https://sitemapfixer.com/about"},"publisher":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com","logo":{"@type":"ImageObject","url":"https://sitemapfixer.com/opengraph-image"}},"datePublished":"2025-01-15","mainEntityOfPage":{"@type":"WebPage","@id":"https://sitemapfixer.com/blog/structured-data-guide"}}' }} />April 2025 · 7 min read</div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, lineHeight: 1.15 }}>Structured Data Guide: Add Schema Markup and Earn Rich Results</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your site technical SEO free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Site Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        <p style={{ marginBottom: 32 }}>Add structured data as JSON-LD in a script type=application/ld+json tag in the head section. Test with Google Rich Results Test before deploying. Monitor Google Search Console Enhancements report after deployment for errors or warnings.</p>
        {types.map(({ name, use, d }) => (
          <div key={name} style={{ marginBottom: 32, border: '1px solid #e4e4ed', borderRadius: 12, padding: '20px 24px' }}>
            <div style={{ fontWeight: 700, fontSize: 17, color: '#0a0a0f', marginBottom: 4 }}>{name}</div>
            <div style={{ fontSize: 13, color: '#2d5be3', marginBottom: 10, fontWeight: 500 }}>Use for: {use}</div>
            <p style={{ margin: 0, fontSize: 15, color: '#3d3d4f', lineHeight: 1.7 }}>{d}</p>
          </div>
        ))}
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Check your site technical SEO</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free sitemap and analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
  
        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/blog/schema-markup-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Schema Markup: Add Structured Data to Your Site</a></li>
            <li><a href="/blog/google-search-console-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Google Search Console: Fix Your SEO</a></li>
            <li><a href="/blog/google-search-console-errors-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Google Search Console Errors: Meanings & Fixes</a></li>
            <li><a href="/learn/technical-seo-checklist" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Technical SEO Checklist 2025</a></li>
            <li><a href="/learn/seo-audit-checklist" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>SEO Audit Checklist: 25 Checks to Run on Any Website</a></li>
          
            <li><a href="/learn/schema-markup-for-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Schema Markup for SEO: Rich Results Guide</a></li></ul>
        </div>
    </div>
    </article>
  );
}
