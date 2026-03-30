import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fix Sitemap for Large Sites (10k+ pages) — Complete Guide | SitemapFixer',
  description: 'Sitemap strategy for enterprise sites: sitemap indexes, crawl budget optimization, priority tiers, and monitoring at scale.',
  alternates: { canonical: 'https://sitemapfixer.com/fix-sitemap-for/large-sites' },
};

export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px', fontFamily: 'Geist, sans-serif' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>
        {' → '}
        <a href="/fix-sitemap-for" style={{ color: '#2d5be3', textDecoration: 'none' }}>Platform Guides</a>
        {' → '}
        <span>Large Sites (10k+ pages)</span>
      </nav>

      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>
        Fix Your Sitemap for Large Sites (10k+ pages)
      </h1>
      <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        Sitemap strategy for enterprise sites: sitemap indexes, crawl budget optimization, priority tiers, and monitoring at scale.
      </p>

      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Analyze your Large Sites (10k+ pages) sitemap now →</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>
          Try Sitemap Fixer Free
        </a>
      </div>

      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 24 }}>
        Large Sites (10k+ pages) sites have specific sitemap challenges. This guide covers the most common sitemap issues
        we see when analyzing Large Sites (10k+ pages) sites and exactly how to fix them.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common Large Sites (10k+ pages) Sitemap Issues</h2>
      <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li>Duplicate URLs from URL parameters and faceted navigation</li>
        <li>Including low-value pages that dilute crawl budget</li>
        <li>Missing or inaccurate lastmod dates</li>
        <li>Incorrect priority values (all set to 1.0)</li>
        <li>Sitemap not updated when pages are deleted or moved</li>
      </ul>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Step-by-Step Fix Guide</h2>
      <ol style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
        <li style={{ marginBottom: 12 }}>Run a full sitemap audit using Sitemap Fixer to identify all current issues</li>
        <li style={{ marginBottom: 12 }}>Remove all non-canonical URLs, redirects, and 4xx pages</li>
        <li style={{ marginBottom: 12 }}>Exclude low-value pages: tag archives, author pages, search results</li>
        <li style={{ marginBottom: 12 }}>Set meaningful priority values based on page importance</li>
        <li style={{ marginBottom: 12 }}>Add accurate lastmod dates based on actual content updates</li>
        <li style={{ marginBottom: 12 }}>Split into a sitemap index if you have more than 10,000 pages</li>
        <li style={{ marginBottom: 12 }}>Submit to Google Search Console and monitor coverage</li>
      </ol>

      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Analyze your Large Sites (10k+ pages) sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Find all issues in your sitemap — free, no signup required</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>
          Analyze My Sitemap Free →
        </a>
      </div>

      <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
        <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Other platform guides</div>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <li><a href="/fix-sitemap-for/wordpress" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>WordPress</a></li>
          <li><a href="/fix-sitemap-for/shopify" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Shopify</a></li>
          <li><a href="/fix-sitemap-for/nextjs" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Next.js</a></li>
          <li><a href="/fix-sitemap-for/ecommerce" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>E-commerce Sites</a></li>
        </ul>
      </div>
    </div>
  );
}
