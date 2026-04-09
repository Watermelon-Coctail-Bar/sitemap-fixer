import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Sitemap Checker: Validate and Fix Your XML Sitemap', description: 'Use a sitemap checker to find errors in your XML sitemap. Learn what to check, common issues found, and how to fix them fast.', alternates: { canonical: 'https://sitemapfixer.com/learn/sitemap-checker' }, openGraph: { title: 'Sitemap Checker: Validate and Fix Your XML Sitemap', description: 'Use a sitemap checker to find errors in your XML sitemap. Learn what to check, common issues found, and how to fix them fast.', url: 'https://sitemapfixer.com/learn/sitemap-checker', type: 'article',
    images: [{
      url: 'https://sitemapfixer.com/opengraph-image',
      width: 1200,
      height: 630,
      alt: 'SitemapFixer - AI Sitemap Checker and SEO Fix Tool',
    }],
    siteName: 'SitemapFixer',
    locale: 'en_US',
  } };
export default function Page() { return (
  <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
    <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}><a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}<a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}<span>Sitemap Checker: Validate and Fix Your XML Sitemap</span></nav>
    <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Sitemap Checker: Validate and Fix Your XML Sitemap</h1>
    <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}><span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your sitemap free</span><a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze Free</a></div>
    <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>What a Sitemap Checker Does</h2>
        <p style={{ marginBottom: 20 }}>A sitemap checker analyzes your XML sitemap for errors, missing pages, broken URLs, and SEO issues. It validates the XML format, checks that listed URLs are accessible, and identifies problems that prevent Google from properly using your sitemap.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>How to Check Your Sitemap for Errors</h2>
        <p style={{ marginBottom: 20 }}>Enter your sitemap URL into a sitemap checker tool. A good checker verifies XML validity, checks HTTP status codes for all listed URLs, flags redirects and canonical mismatches, identifies pages missing lastmod tags, and detects URLs blocked by robots.txt.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>Common Issues Sitemap Checkers Find</h2>
        <p style={{ marginBottom: 20 }}>The most common sitemap errors are: invalid XML syntax, URLs returning 404 or 301 redirects, pages blocked by robots.txt, duplicate URLs, missing or incorrect lastmod dates, and URLs that do not match the canonical tag on the page.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>Checking Your Sitemap in Google Search Console</h2>
        <p style={{ marginBottom: 20 }}>Google Search Console has a built-in sitemap checker. Submit your sitemap URL and Google will tell you how many URLs were submitted, how many were indexed, and any errors it encountered.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>Validating XML Structure Manually</h2>
        <p style={{ marginBottom: 20 }}>Before submitting to Google, validate your sitemap XML using an XML validator. Your sitemap must have a valid urlset namespace, each URL wrapped in url tags, and all special characters properly encoded.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>How Often to Check Your Sitemap</h2>
        <p style={{ marginBottom: 20 }}>Check your sitemap monthly, or any time you make significant changes to your site structure. Also check after a CMS upgrade, after installing new plugins, and after migrating to a new domain or URL structure.</p>

        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/learn/what-is-an-xml-sitemap" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>What Is an XML Sitemap?</a></li>
            <li><a href="/learn/xml-sitemap-format" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>XML Sitemap Format: Complete Reference with Examples</a></li>
            <li><a href="/learn/xml-sitemap-generator" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>XML Sitemap Generator: Create Your Sitemap Free</a></li>
            <li><a href="/learn/sitemap-best-practices" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>XML Sitemap Best Practices</a></li>
            <li><a href="/learn/how-to-create-a-sitemap" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>How to Create a Sitemap: WordPress, Shopify, Next.js</a></li>
          </ul>
        </div>
    </div>
    <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}><div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Check your sitemap now</div><div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free analysis in 60 seconds</div><a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Sitemap</a></div>
    <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}><div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Related guides</div><ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <li><a href="/learn/sitemap-validator" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Sitemap Validator</a></li>
          <li><a href="/learn/sitemap-not-working" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Sitemap Not Working</a></li>
          <li><a href="/learn/sitemap-errors-google-search-console" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Sitemap Errors in Search Console</a></li>
    </ul></div>
  </div>); }
