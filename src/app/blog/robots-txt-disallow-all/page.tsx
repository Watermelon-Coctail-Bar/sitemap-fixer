import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Robots.txt Disallow All: Avoid Blocking Your Site',
  description: "Disallow: / in robots.txt blocks Google from crawling your entire site. Here is how to detect it, what causes it, and how to fix it in under 5 minutes.",
  alternates: { canonical: 'https://sitemapfixer.com/blog/robots-txt-disallow-all' },
  openGraph: {
    title: 'Robots.txt Disallow All: Avoid Blocking Your Site',
    description: 'Disallow: / in robots.txt blocks Google from crawling your entire site. Here is how to detect it, what causes it, and how to fix it in under 5 minutes.',
    url: 'https://sitemapfixer.com/blog/robots-txt-disallow-all',
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
  { t: "What Disallow: / Does", d: "A robots.txt file containing User-agent: * followed by Disallow: / tells every crawler including Googlebot that it is not allowed to crawl any page on your site. No pages get indexed. No organic traffic arrives. The site exists but is completely invisible to search engines. This is intentional during development but catastrophic if left in place after launch." },
  { t: "Why This Happens So Often", d: "Most website builders, WordPress themes, and CMS platforms include a development mode that adds Disallow: / to robots.txt to prevent search engines from indexing an incomplete or staging site. The switch gets flipped before launch, but the robots.txt setting is overlooked. Migrations from staging to production sometimes copy the staging robots.txt. Developers working locally add the disallow and forget to remove it before deployment." },
  { t: "How to Check If You Have This Problem", d: "Visit yoursite.com/robots.txt in your browser. If you see Disallow: / under User-agent: * or User-agent: Googlebot, your site is blocked. Confirm with Google Search Console URL Inspection - try inspecting your homepage. If it says blocked by robots.txt, you have confirmed the problem. You can also search site:yoursite.com in Google - if you see zero results despite publishing content, robots.txt is the first thing to check." },
  { t: "How to Fix It", d: "Option 1 - Remove the disallow entirely: Replace the blocking robots.txt with the minimal safe version: User-agent: * on line 1, Allow: / on line 2, blank line, Sitemap: https://yoursite.com/sitemap.xml. Option 2 - WordPress: Go to Settings then Reading and uncheck Discourage search engines from indexing this site. In most SEO plugins you can manage robots.txt directly. Option 3 - Check your hosting panel for a robots.txt file that may override your CMS." },
  { t: "After Fixing: Force Re-crawl", d: "Google caches robots.txt for up to 24 hours. After fixing, wait 24 hours then use Google Search Console URL Inspection on your homepage and click Test Live URL to confirm Googlebot can now access it. Submit your sitemap in Search Console under Indexing then Sitemaps to help Google start re-crawling your pages. Depending on how long the block was in place, full re-indexing can take days to weeks." },
];
export default function Page() {
  return (
    <article style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/blog" style={{ color: '#2d5be3', textDecoration: 'none' }}>Blog</a>{' / '}
        <span>Robots.txt Disallow All</span>
      </nav>
      <div style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 16 }}>By <a href="/about" style={{ color: '#2d5be3', textDecoration: 'none' }}>Arnoldas Arny</a></div>
      <div style={{ fontSize: 13, color: '#9ca3af', marginBottom: 12 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"Article","headline":"Robots.txt Disallow All: Avoid Blocking Your Site","description":"Disallow: / in robots.txt blocks Google from crawling your entire site. Here is how to detect it, what causes it, and how to fix it in under 5 minutes.","url":"https://sitemapfixer.com/blog/robots-txt-disallow-all","author":{"@type":"Person","name":"Arnoldas Arny","url":"https://sitemapfixer.com/about"},"publisher":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com","logo":{"@type":"ImageObject","url":"https://sitemapfixer.com/opengraph-image"}},"datePublished":"2025-01-15","mainEntityOfPage":{"@type":"WebPage","@id":"https://sitemapfixer.com/blog/robots-txt-disallow-all"}}' }} />April 2025 · 5 min read</div>
      <div style={{ background: '#fee2e2', border: '1px solid #fca5a5', borderRadius: 12, padding: '14px 20px', marginBottom: 24 }}>
        <span style={{ fontWeight: 700, color: '#991b1b', fontSize: 14 }}>Critical issue - blocks your entire site from Google</span>
      </div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, lineHeight: 1.15 }}>Robots.txt Disallow All: The Mistake That Makes Your Site Invisible</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your robots.txt configuration free</span>
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
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Check your robots.txt and sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free - detects blocking issues in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
  
        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/blog/javascript-seo-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>JavaScript SEO: Make JS Sites Crawlable</a></li>
            <li><a href="/blog/https-migration-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>HTTPS Migration: Switch Without Losing Rankings</a></li>
            <li><a href="/blog/redirect-seo-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Redirect SEO: 301 vs 302 & Best Practices</a></li>
            <li><a href="/blog/crawl-budget-seo-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Crawl Budget SEO: Stop Wasting Crawls on Bad Pages</a></li>
            <li><a href="/blog/crawl-budget-optimization" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Crawl Budget Optimization: Get More Crawl Value</a></li>
          </ul>
        </div>
    </div>
    </article>
  );
}
