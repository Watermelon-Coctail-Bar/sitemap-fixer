import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'XML Sitemap Generator: Create Your Sitemap Free',
  description: 'Generate a valid XML sitemap for any website free. Learn how XML sitemap generators work, what to include, and how to submit to Google.',
  alternates: { canonical: 'https://sitemapfixer.com/learn/xml-sitemap-generator' },
  openGraph: { title: 'XML Sitemap Generator Guide', description: 'How to generate and submit an XML sitemap free.', url: 'https://sitemapfixer.com/learn/xml-sitemap-generator', type: 'article',
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"Article","headline":"XML Sitemap Generator: Create Your Sitemap Free","description":"Generate a valid XML sitemap for any website free. Learn how XML sitemap generators work, what to include, and how to submit to Google.","url":"https://sitemapfixer.com/learn/xml-sitemap-generator","author":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com"},"publisher":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com","logo":{"@type":"ImageObject","url":"https://sitemapfixer.com/opengraph-image"}},"datePublished":"2025-01-15","mainEntityOfPage":{"@type":"WebPage","@id":"https://sitemapfixer.com/learn/xml-sitemap-generator"}}' }} />
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>XML Sitemap Generator</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>XML Sitemap Generator: How to Create and Submit Your Sitemap</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Analyze your sitemap free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Try SitemapFixer Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8 }}>
        <p style={{ marginBottom: 20 }}>An XML sitemap generator creates a properly formatted sitemap.xml file that lists all the important URLs on your website. Search engines use this file to discover, crawl, and index your content more efficiently.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>What an XML Sitemap Generator Does</h2>
        <p style={{ marginBottom: 20 }}>A sitemap generator crawls your website or reads your CMS database to compile a list of all URLs you want indexed. It formats them according to the XML Sitemap Protocol, adding optional metadata like lastmod dates and priority values, then outputs a valid sitemap.xml file ready for Google Search Console.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>How to Generate an XML Sitemap for Your Platform</h2>
        <p style={{ marginBottom: 20 }}>WordPress: Install Yoast SEO or Rank Math. Both automatically generate and update your sitemap at yoursite.com/sitemap_index.xml. Shopify: Shopify automatically generates a sitemap at yourstore.com/sitemap.xml. No plugin required. Next.js: Add a sitemap.ts file to your app directory using the MetadataRoute.Sitemap type. Vercel deploys it automatically. Other platforms: Use an online XML sitemap generator by entering your domain URL. The tool crawls your site and generates a downloadable sitemap.xml.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>What to Include in Your Sitemap</h2>
        <p style={{ marginBottom: 20 }}>Include all pages you want indexed: homepage, product pages, category pages, blog posts, and landing pages. Exclude noindex pages, admin pages, duplicate content, paginated archives beyond page 2, and any URL with a canonical tag pointing elsewhere.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>Sitemap Size Limits</h2>
        <p style={{ marginBottom: 20 }}>A single sitemap file can contain a maximum of 50,000 URLs and must be under 50MB uncompressed. If you exceed these limits, create a sitemap index file that references multiple child sitemaps - one for blog posts, one for products, one for categories.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>How to Submit Your Generated Sitemap</h2>
        <p style={{ marginBottom: 20 }}>After generating your sitemap, submit it two ways. First, add it to your robots.txt file: Sitemap: https://yoursite.com/sitemap.xml. Second, submit it directly in Google Search Console under the Sitemaps section. The robots.txt reference ensures all search engines find it, while Search Console gives you monitoring and error reporting.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>Validating Your Generated Sitemap</h2>
        <p style={{ marginBottom: 20 }}>After generating, validate your sitemap before submitting. Check that all URLs return 200 status codes, no URLs are blocked by robots.txt, all URLs use the correct canonical protocol, and the XML is well-formed with no encoding errors. SitemapFixer analyzes all of this automatically.</p>
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Analyze your sitemap now</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Sitemap</a>
      </div>
      <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
        <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Related guides</div>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <li><a href="/learn/what-is-an-xml-sitemap" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>What is an XML Sitemap</a></li>
          <li><a href="/learn/sitemap-validator" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Sitemap Validator</a></li>
          <li><a href="/learn/sitemap-best-practices" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Sitemap Best Practices</a></li>
        </ul>
      </div>

        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/learn/what-is-an-xml-sitemap" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>What Is an XML Sitemap?</a></li>
            <li><a href="/learn/xml-sitemap-format" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>XML Sitemap Format: Complete Reference with Examples</a></li>
            <li><a href="/learn/sitemap-best-practices" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>XML Sitemap Best Practices</a></li>
            <li><a href="/learn/how-to-create-a-sitemap" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>How to Create a Sitemap: WordPress, Shopify, Next.js</a></li>
            <li><a href="/learn/sitemap-checker" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Sitemap Checker: Validate and Fix Your XML Sitemap</a></li>
          </ul>
        </div>
    </div>
  );
}
