import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Schema Markup for SEO: Rich Results Guide',
  description: "Schema markup tells Google what your content means, not just what it says. Here is how to implement JSON-LD for articles, products, FAQs, and reviews to earn rich results.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/schema-markup-for-seo' },
  openGraph: {
    title: 'Schema Markup for SEO: Rich Results Guide',
    description: 'Schema markup tells Google what your content means, not just what it says. Here is how to implement JSON-LD for articles, products, FAQs, and reviews to earn rich results.',
    url: 'https://sitemapfixer.com/learn/schema-markup-for-seo',
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
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Schema Markup for SEO</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Schema Markup for SEO: Rich Results and Structured Data</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Analyze your site SEO free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Try SitemapFixer Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        <p style={{ marginBottom: 24 }}>Schema markup is structured data added to your HTML that helps Google understand the meaning of your content. When Google understands your content better, it can display it in enhanced "rich result" formats in search - star ratings for products, FAQ dropdowns, recipe details, event dates, and more. Rich results take up more visual space in search results, which typically improves click-through rate significantly.</p>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>JSON-LD: The Recommended Format</h2>
        <p style={{ marginBottom: 16 }}>Google recommends JSON-LD (JavaScript Object Notation for Linked Data) as the format for structured data. Add it as a script tag in your page head:</p>
        <div style={{ background: '#0a0a0f', borderRadius: 10, padding: '20px 24px', marginBottom: 24, fontFamily: 'monospace', fontSize: 12, color: '#e5e7eb', lineHeight: 1.7, overflowX: 'auto' }}>
          <div>{'<script type="application/ld+json">'}</div>
          <div>{'{'}</div>
          <div style={{ paddingLeft: 20 }}>{'"@context": "https://schema.org",'}</div>
          <div style={{ paddingLeft: 20 }}>{'"@type": "Article",'}</div>
          <div style={{ paddingLeft: 20 }}>{'"headline": "Your Article Title",'}</div>
          <div style={{ paddingLeft: 20 }}>{'"datePublished": "2025-04-01",'}</div>
          <div style={{ paddingLeft: 20 }}>{'"dateModified": "2025-04-01",'}</div>
          <div style={{ paddingLeft: 20 }}>{'"author": {"@type": "Person", "name": "Author Name"}'}</div>
          <div>{'}'}</div>
          <div>{'</script>'}</div>
        </div>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Schema Types That Generate Rich Results</h2>
        <p style={{ marginBottom: 12 }}><strong>Product:</strong> Shows star ratings, price, and availability directly in search results. Critical for ecommerce. Include name, description, image, offers (price, priceCurrency, availability), and aggregateRating.</p>
        <p style={{ marginBottom: 12 }}><strong>FAQPage:</strong> Shows expandable FAQ questions directly in the search result, taking up significantly more space. Implement on any page with a FAQ section. Each question uses Question and acceptedAnswer types.</p>
        <p style={{ marginBottom: 12 }}><strong>Article/BlogPosting:</strong> Enables article appearance in Google Discover and enhanced display in news results. Include headline, datePublished, dateModified, author, and image (at least 1200px wide).</p>
        <p style={{ marginBottom: 12 }}><strong>HowTo:</strong> Shows step-by-step instructions with images in search results. Each step uses HowToStep with name, text, and optionally image.</p>
        <p style={{ marginBottom: 24 }}><strong>LocalBusiness:</strong> Shows business hours, address, phone, and rating in local search results. Essential for businesses with physical locations.</p>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Testing Your Schema Markup</h2>
        <p style={{ marginBottom: 24 }}>Use Google Rich Results Test (search.google.com/test/rich-results) to validate your structured data and see which rich results your page is eligible for. Use Google Search Console under Enhancements to see which schema types Google has detected across your site and any errors or warnings. Schema errors do not hurt rankings but they do prevent rich results from appearing.</p>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Common Schema Mistakes</h2>
        <p style={{ marginBottom: 24 }}>Marking up content that is not visible on the page is a Google quality guideline violation. Your schema must accurately describe what users actually see. Do not mark up every page as an Article if the page is a product listing. Do not add AggregateRating schema if your product has no reviews. Do not use FAQPage schema unless the page actually has questions and answers visible to users.</p>
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Analyze your structured data and sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free SEO analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>

        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/learn/title-tag-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Title Tag SEO: Write Titles That Rank</a></li>
            <li><a href="/learn/meta-description-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Meta Descriptions: How to Write Them for SEO</a></li>
            <li><a href="/learn/image-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Image SEO: Optimize Images for Google Search</a></li>
            <li><a href="/learn/video-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Video SEO: Get Videos to Rank in Google</a></li>
            <li><a href="/learn/anchor-text-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Anchor Text SEO: Types & Best Practices</a></li>
          
            <li><a href="/learn/product-page-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Product Page SEO: Rank Ecommerce Pages in Google</a></li></ul>
        </div>
    </div>
  );
}
