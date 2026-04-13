import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'URL Structure SEO: How to Create SEO-Friendly URLs',
  description: "URL structure affects crawlability, click-through rate, and indexing. Here is how to create URLs that help both search engines and users understand your content.",
  alternates: { canonical: 'https://sitemapfixer.com/blog/url-structure-guide' },
  openGraph: {
    title: 'URL Structure SEO: How to Create SEO-Friendly URLs',
    description: 'URL structure affects crawlability, click-through rate, and indexing. Here is how to create URLs that help both search engines and users understand your content.',
    url: 'https://sitemapfixer.com/blog/url-structure-guide',
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
const rules = [
  { t: "Keep URLs short and descriptive", d: "Shorter URLs with clear words outperform long strings of numbers and parameters in both click-through rate and rankings. Compare: sitemapfixer.com/blog/how-to-fix-a-sitemap vs sitemapfixer.com/blog/post?id=1247&category=seo&tag=sitemap. The first is readable, shareable, and self-explanatory. Target URLs under 5-7 words with hyphens between words (not underscores - Google treats underscores as word connectors, not separators)." },
  { t: "Include the primary keyword", d: "Including the target keyword in your URL provides a relevance signal to Google and to users scanning search results. Do not keyword-stuff multiple variations - one natural keyword phrase in the URL is sufficient. The keyword should match your page title and H1 heading for maximum coherence across SEO signals." },
  { t: "Use a consistent hierarchy", d: "URL structure should reflect your site hierarchy: domain.com/category/subcategory/page. Consistent URL patterns help Google understand your site structure and content relationships. All blog posts at /blog/post-slug, all learn pages at /learn/topic-slug, all product pages at /products/product-slug. Inconsistent URL patterns (some posts at /blog/, some at /articles/, some at /news/) fragment topical signals." },
  { t: "Avoid parameters in indexable URLs", d: "URL parameters (yoursite.com/search?q=keyword&sort=price&page=2) create thousands of near-duplicate URLs that waste crawl budget. For important filtered or sorted pages that deserve indexing, use URL slugs instead of parameters. For tracking parameters (UTM tags), configure Google Search Console URL parameters to tell Google to ignore them, or use canonical tags on parameter-containing pages pointing to the clean URL." },
  { t: "HTTPS and trailing slash consistency", d: "All URLs should consistently use HTTPS. All URLs should consistently either have or not have a trailing slash - pick one and stick to it. The URL yoursite.com/page and yoursite.com/page/ are treated as different URLs by Google. Use 301 redirects to enforce your chosen convention and use canonical tags to reinforce it. Your sitemap should only contain URLs in the canonical format." },
];
export default function Page() {
  return (
    <article style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/blog" style={{ color: '#2d5be3', textDecoration: 'none' }}>Blog</a>{' / '}
        <span>URL Structure Guide</span>
      </nav>
      <div style={{ fontSize: 13, color: '#9ca3af', marginBottom: 12 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"Article","headline":"URL Structure SEO: How to Create SEO-Friendly URLs","description":"URL structure affects crawlability, click-through rate, and indexing. Here is how to create URLs that help both search engines and users understand your content.","url":"https://sitemapfixer.com/blog/url-structure-guide","author":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com"},"publisher":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com","logo":{"@type":"ImageObject","url":"https://sitemapfixer.com/opengraph-image"}},"datePublished":"2025-01-15","mainEntityOfPage":{"@type":"WebPage","@id":"https://sitemapfixer.com/blog/url-structure-guide"}}' }} />April 2025 · 6 min read</div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, lineHeight: 1.15 }}>URL Structure SEO: Create URLs That Help You Rank</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your URL consistency in your sitemap free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Sitemap Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        {rules.map(({ t, d }) => (
          <div key={t} style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: '#0a0a0f', marginBottom: 10 }}>{t}</h2>
            <p style={{ margin: 0 }}>{d}</p>
          </div>
        ))}
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Check your sitemap URL patterns</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free - detects inconsistencies and parameter URLs</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Sitemap Free</a>
  
        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/blog/ecommerce-seo-tips" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Ecommerce SEO: Get Product Pages to Rank</a></li>
            <li><a href="/blog/social-media-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Social Media SEO: Do Social Signals Matter?</a></li>
            <li><a href="/blog/mobile-seo-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Mobile SEO Guide: Optimize Your Site for Mobile Search</a></li>
            <li><a href="/blog/video-seo-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Video SEO: Rank Videos on Google and YouTube</a></li>
            <li><a href="/blog/canonical-url-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Canonical URL: What It Is and How to Set It Correctly</a></li>
          </ul>
        </div>
    </div>
    </article>
  );
}
