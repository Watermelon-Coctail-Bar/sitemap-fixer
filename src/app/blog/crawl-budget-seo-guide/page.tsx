import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Crawl Budget SEO: Stop Wasting Crawls on Bad Pages',
  description: "Crawl budget limits how many pages Google crawls on your site. Here is how to stop wasting it on low-value pages and ensure your important content gets crawled.",
  alternates: { canonical: 'https://sitemapfixer.com/blog/crawl-budget-seo-guide' },
  openGraph: {
    title: 'Crawl Budget SEO: Stop Wasting Crawls on Bad Pages',
    description: 'Crawl budget limits how many pages Google crawls on your site. Here is how to stop wasting it on low-value pages and ensure your important content gets crawled.',
    url: 'https://sitemapfixer.com/blog/crawl-budget-seo-guide',
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
  { t: "What crawl budget is", d: "Crawl budget is the number of pages Googlebot crawls on your site within a given time period. It is determined by two factors: crawl rate limit (how fast Google crawls without overloading your server) and crawl demand (how much Google wants to crawl your site based on its authority and the frequency of content updates). Small sites with under 1,000 pages rarely have crawl budget problems. Large sites with tens or hundreds of thousands of pages need to manage it carefully." },
  { t: "What wastes crawl budget", d: "Faceted navigation creating thousands of URL combinations. Infinite scroll or AJAX-loaded content that is not properly paginated. Session IDs or tracking parameters in URLs creating duplicate pages (/page?session=abc123). Low-quality pages that Google crawls repeatedly but never indexes. Redirect chains that require multiple hops. Broken internal links (Googlebot follows them and gets 404s). Soft 404 pages (pages that return 200 but show no content). Each of these wastes crawls that could be spent on your valuable content." },
  { t: "How to fix crawl budget waste", d: "Block parameter-generated duplicates via Google Search Console URL Parameters or robots.txt Disallow rules for known low-value patterns. Remove orphan pages with no links or traffic from your sitemap. Fix redirect chains to direct hops. Set up 404 monitoring and fix or redirect broken links. Add noindex to thin or faceted navigation pages. The goal: ensure the vast majority of Googlebot's crawls hit pages that deserve to be indexed, not junk URLs." },
];
export default function Page() {
  return (
    <article style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/blog" style={{ color: '#2d5be3', textDecoration: 'none' }}>Blog</a>{' / '}
        <span>Crawl Budget SEO Guide</span>
      </nav>
      <div style={{ fontSize: 13, color: '#9ca3af', marginBottom: 12 }}>April 2025 · 5 min read</div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, lineHeight: 1.15 }}>Crawl Budget SEO: Stop Google Wasting Crawls on Low-Value Pages</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your sitemap for crawl waste free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Sitemap Free</a>
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
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Audit your sitemap for crawl budget waste</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free - detects low-value URL patterns in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Sitemap Free</a>
  
        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/blog/javascript-seo-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>JavaScript SEO: Make JS Sites Crawlable</a></li>
            <li><a href="/blog/https-migration-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>HTTPS Migration: Switch Without Losing Rankings</a></li>
            <li><a href="/blog/redirect-seo-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Redirect SEO: 301 vs 302 & Best Practices</a></li>
            <li><a href="/blog/crawl-budget-optimization" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Crawl Budget Optimization: Get More Crawl Value</a></li>
            <li><a href="/blog/pagination-seo-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Pagination SEO: Handle Page 2, 3, 4 Right</a></li>
          </ul>
        </div>
    </div>
    </article>
  );
}
