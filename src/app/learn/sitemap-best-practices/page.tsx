import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'XML Sitemap Best Practices',
  description: 'The complete guide to XML sitemap best practices. Learn what to include, exclude, how to structure your sitemap, and maximize crawl efficiency.',
  alternates: { canonical: 'https://sitemapfixer.com/learn/sitemap-best-practices' },
  openGraph: {
    title: 'XML Sitemap Best Practices',
    description: 'The complete guide to XML sitemap best practices in 2025. What to include, what to exclude, and how to maximize crawl efficiency.',
    url: 'https://sitemapfixer.com/learn/sitemap-best-practices',
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"Article","headline":"XML Sitemap Best Practices","description":"The complete guide to XML sitemap best practices in 2025. What to include, what to exclude, and how to maximize crawl efficiency.","url":"https://sitemapfixer.com/learn/sitemap-best-practices","author":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com"},"publisher":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com","logo":{"@type":"ImageObject","url":"https://sitemapfixer.com/opengraph-image"}},"datePublished":"2025-01-15","mainEntityOfPage":{"@type":"WebPage","@id":"https://sitemapfixer.com/learn/sitemap-best-practices"}}' }} />
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>
        {'  '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>
        {'  '}
        <span>XML Sitemap Best Practices</span>
      </nav>

      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>
        XML Sitemap Best Practices
      </h1>

      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Analyze your sitemap for free </span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>
          Try Sitemap Fixer
        </a>
      </div>

      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8 }}>
        <p style={{ marginBottom: 20 }}>Following XML sitemap best practices is one of the highest-leverage technical SEO actions you can take. A clean, well-structured sitemap signals quality to search engines and ensures your most important content gets crawled efficiently.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>Include Only Canonical URLs</h2>
        <p style={{ marginBottom: 20 }}>Your sitemap should only contain the canonical version of each URL - the definitive URL you want indexed. Never include:
- URLs that redirect to other pages
- Non-canonical URLs (e.g., with UTM parameters)
- Duplicate content URLs
- URLs blocked by robots.txt</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>Use HTTPS Everywhere</h2>
        <p style={{ marginBottom: 20 }}>Every URL in your sitemap must use HTTPS. If you have both HTTP and HTTPS versions, ensure all redirects are in place and only list the HTTPS versions.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>Keep It Fresh</h2>
        <p style={{ marginBottom: 20 }}>Update your sitemap whenever you publish, update, or delete pages. Use accurate lastmod dates - inaccurate dates reduce Google's trust in your sitemap signals.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>Prioritize Strategically</h2>
        <p style={{ marginBottom: 20 }}>Set priority values that reflect actual page importance:
- Homepage: 1.0
- Core product/service pages: 0.9
- Blog posts: 0.7-0.8
- Tags/categories: 0.5-0.6</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>Split Large Sitemaps</h2>
        <p style={{ marginBottom: 20 }}>If you have more than 10,000 URLs, use a sitemap index file to organize by content type. This makes it easier to identify issues and track indexing rates by section.</p>
      </div>

      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Check your sitemap now</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>
          Analyze My Sitemap 
        </a>
      </div>

      <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
        <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>More guides</div>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <li><a href="/learn/sitemap-best-practices" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Best Practices</a></li>
          <li><a href="/learn/sitemap-vs-robots-txt" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Sitemap vs robots.txt</a></li>
          <li><a href="/learn/why-pages-not-indexed" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Why Pages Not Indexed</a></li>
        </ul>
      </div>

        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/learn/what-is-an-xml-sitemap" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>What Is an XML Sitemap?</a></li>
            <li><a href="/learn/xml-sitemap-format" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>XML Sitemap Format: Complete Reference with Examples</a></li>
            <li><a href="/learn/xml-sitemap-generator" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>XML Sitemap Generator: Create Your Sitemap Free</a></li>
            <li><a href="/learn/how-to-create-a-sitemap" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>How to Create a Sitemap: WordPress, Shopify, Next.js</a></li>
            <li><a href="/learn/sitemap-checker" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Sitemap Checker: Validate and Fix Your XML Sitemap</a></li>
          
            <li><a href="/learn/sitemap-index-file" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Sitemap Index File: What It Is and When You Need One</a></li></ul>
        </div>
    </div>
  );
}
