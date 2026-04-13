import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Duplicate Content SEO: Causes, Impact, and Fixes',
  description: "Duplicate content confuses Google and splits your ranking signals. Here are the real causes, how much it actually hurts, and the exact fixes for each type.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/duplicate-content-seo' },
  openGraph: {
    title: 'Duplicate Content SEO: Causes, Impact, and Fixes',
    description: 'Duplicate content confuses Google and splits your ranking signals. Here are the real causes, how much it actually hurts, and the exact fixes for each type.',
    url: 'https://sitemapfixer.com/learn/duplicate-content-seo',
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"Article","headline":"Duplicate Content SEO: Causes, Impact, and Fixes","description":"Duplicate content confuses Google and splits your ranking signals. Here are the real causes, how much it actually hurts, and the exact fixes for each type.","url":"https://sitemapfixer.com/learn/duplicate-content-seo","author":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com"},"publisher":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com","logo":{"@type":"ImageObject","url":"https://sitemapfixer.com/opengraph-image"}},"datePublished":"2025-01-15","mainEntityOfPage":{"@type":"WebPage","@id":"https://sitemapfixer.com/learn/duplicate-content-seo"}}' }} />
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Duplicate Content SEO</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Duplicate Content SEO: What It Is, Why It Hurts, and How to Fix It</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Find duplicate content issues in your sitemap</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Site</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        <p style={{ marginBottom: 24 }}>Duplicate content means the same or very similar content appearing at multiple URLs on your site. Google has to pick one version to index and rank, which means your ranking power gets split across multiple URLs instead of concentrated on one. It does not usually result in a manual penalty, but it does dilute your SEO signals and wastes crawl budget.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>The Most Common Causes</h2>

        <h3 style={{ fontSize: 20, fontWeight: 700, color: '#0a0a0f', marginTop: 32, marginBottom: 10 }}>HTTP and HTTPS versions both accessible</h3>
        <p style={{ marginBottom: 24 }}>If yoursite.com and https://yoursite.com both load your content, Google sees two copies. Fix: set up a 301 redirect from HTTP to HTTPS at the server level. Then add a canonical tag to every page pointing to the HTTPS version. This is the most common duplicate content issue and the easiest to fix.</p>

        <h3 style={{ fontSize: 20, fontWeight: 700, color: '#0a0a0f', marginTop: 32, marginBottom: 10 }}>WWW and non-WWW versions both accessible</h3>
        <p style={{ marginBottom: 24 }}>yoursite.com and www.yoursite.com are different URLs to Google. Choose one as your canonical version and redirect the other. Add this to your nginx config or Apache .htaccess. Most sites prefer the non-www version for shorter URLs, but either is fine as long as you are consistent.</p>

        <h3 style={{ fontSize: 20, fontWeight: 700, color: '#0a0a0f', marginTop: 32, marginBottom: 10 }}>Trailing slash inconsistency</h3>
        <p style={{ marginBottom: 24 }}>yoursite.com/page and yoursite.com/page/ are different URLs. Pick one format and redirect the other. Add canonical tags that consistently use your chosen format. Check your sitemap to make sure all URLs use the same trailing slash convention.</p>

        <h3 style={{ fontSize: 20, fontWeight: 700, color: '#0a0a0f', marginTop: 32, marginBottom: 10 }}>URL parameters creating duplicate pages</h3>
        <p style={{ marginBottom: 24 }}>Tracking parameters like ?utm_source=email or ?ref=twitter create new URLs with identical content. Fix with canonical tags: add a canonical pointing to the clean URL on every page, regardless of what parameters are in the current URL. You can also configure Google Search Console to tell Google to ignore specific parameters under Legacy Tools and Reports.</p>

        <h3 style={{ fontSize: 20, fontWeight: 700, color: '#0a0a0f', marginTop: 32, marginBottom: 10 }}>Product pages accessible via multiple paths</h3>
        <p style={{ marginBottom: 24 }}>In e-commerce, products often appear under multiple category paths: /products/widget and /category/widgets/widget both show the same product. Fix with canonical tags pointing to the main product URL. Shopify handles this automatically. For custom setups, implement canonical tags in your product template.</p>

        <h3 style={{ fontSize: 20, fontWeight: 700, color: '#0a0a0f', marginTop: 32, marginBottom: 10 }}>Paginated content without canonicals</h3>
        <p style={{ marginBottom: 24 }}>yoursite.com/blog and yoursite.com/blog/page/2 have similar content (list of posts). Google generally understands pagination, but add self-referencing canonical tags to each page to be explicit. The older rel=prev/next approach is no longer officially supported by Google but does not hurt.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>The Canonical Tag Fix</h2>
        <p style={{ marginBottom: 24 }}>The canonical tag tells Google which version of a page is the definitive one. Add it inside the head section of every page: &lt;link rel="canonical" href="https://yoursite.com/exact-url" /&gt;. Use absolute URLs, not relative ones. Every page should have a self-referencing canonical even if there are no duplicates - it prevents accidental duplication from future URL changes.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>How to Find Duplicate Content on Your Site</h2>
        <p style={{ marginBottom: 24 }}>In Google Search Console, go to Indexing, then Pages, and look for "Alternate page with proper canonical tag" - this tells you Google found a duplicate and is indexing the canonical version instead. SitemapFixer checks your sitemap URLs for duplicate path patterns and inconsistent trailing slashes. For a deeper audit, tools like Screaming Frog can crawl your entire site and flag pages with identical or near-identical content.</p>
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Find duplicate content signals in your sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free analysis in 60 seconds</div>
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
          
            <li><a href="/learn/url-canonicalization" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>URL Canonicalization: Fix Duplicate URLs</a></li></ul>
        </div>
    </div>
  );
}
