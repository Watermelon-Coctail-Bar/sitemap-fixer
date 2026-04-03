import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - SEO Guides and Technical SEO Tips | SitemapFixer',
  description: 'Expert guides on XML sitemaps, Google indexing, crawl budget, Core Web Vitals, and technical SEO. Free articles from the SitemapFixer team.',
  alternates: { canonical: 'https://sitemapfixer.com/blog' },
  openGraph: { title: 'Blog - SEO Guides | SitemapFixer', url: 'https://sitemapfixer.com/blog', type: 'website' },
};

const POSTS = [
  { slug: 'anchor-text-guide', title: 'Anchor Text Guide: How to Build Links That Actually Rank', cat: 'Link Building' },
  { slug: 'backlink-audit-guide', title: 'Backlink Audit Guide: Find and Remove Toxic Links', cat: 'Link Building' },
  { slug: 'broken-links-seo', title: 'Broken Links SEO: How to Find and Fix Them', cat: 'Technical SEO' },
  { slug: 'canonical-url-guide', title: 'Canonical URL Guide: Fix Duplicate Content the Right Way', cat: 'Technical SEO' },
  { slug: 'competitor-seo-analysis', title: 'Competitor SEO Analysis: Steal Rankings Systematically', cat: 'Strategy' },
  { slug: 'content-audit-guide', title: 'Content Audit Guide: Find What to Fix, Update, or Delete', cat: 'Content' },
  { slug: 'content-marketing-seo', title: 'Content Marketing SEO: Build Authority That Compounds', cat: 'Content' },
  { slug: 'core-web-vitals-fix-guide', title: 'Core Web Vitals Fix Guide: LCP, INP, and CLS Fixes', cat: 'Performance' },
  { slug: 'crawl-budget-optimization', title: 'Crawl Budget Optimization: Stop Google Wasting Crawls', cat: 'Technical SEO' },
  { slug: 'crawl-budget-seo-guide', title: 'Crawl Budget SEO: The Complete Guide', cat: 'Technical SEO' },
  { slug: 'duplicate-content-seo-fix', title: 'Duplicate Content SEO Fix: Consolidate and Rank Higher', cat: 'Technical SEO' },
  { slug: 'ecommerce-seo-tips', title: 'Ecommerce SEO Tips: Drive More Organic Traffic to Your Store', cat: 'Ecommerce' },
  { slug: 'eeat-guide', title: 'E-E-A-T Guide: Build Trust Google Actually Rewards', cat: 'Strategy' },
  { slug: 'featured-snippets-guide', title: 'Featured Snippets Guide: How to Win Position Zero', cat: 'Strategy' },
  { slug: 'free-seo-tools', title: 'Free SEO Tools: The Best Tools That Cost Nothing', cat: 'Tools' },
  { slug: 'google-analytics-seo', title: 'Google Analytics SEO: Use GA4 to Improve Rankings', cat: 'Analytics' },
  { slug: 'google-core-update-recovery', title: 'Google Core Update Recovery: How to Bounce Back', cat: 'Strategy' },
  { slug: 'google-ranking-drop', title: 'Google Ranking Drop: Diagnose and Recover in 7 Steps', cat: 'Strategy' },
  { slug: 'google-search-console-errors-guide', title: 'Google Search Console Errors: Fix Every Error Type', cat: 'Search Console' },
  { slug: 'google-search-console-guide', title: 'Google Search Console Guide: Use It Like a Pro', cat: 'Search Console' },
  { slug: 'heading-tags-seo', title: 'Heading Tags SEO: H1, H2, H3 Best Practices', cat: 'On-Page SEO' },
  { slug: 'how-long-does-seo-take', title: 'How Long Does SEO Take? Real Timelines by Situation', cat: 'Strategy' },
  { slug: 'how-to-check-if-site-is-indexed', title: 'How to Check If Your Site Is Indexed by Google', cat: 'Indexing' },
  { slug: 'how-to-fix-sitemap-errors', title: 'How to Fix Sitemap Errors: Every Error Type Explained', cat: 'Sitemaps' },
  { slug: 'hreflang-common-mistakes', title: 'Hreflang Common Mistakes and How to Fix Them', cat: 'International SEO' },
  { slug: 'https-migration-guide', title: 'HTTPS Migration Guide: Move Without Losing Rankings', cat: 'Technical SEO' },
  { slug: 'image-alt-text-guide', title: 'Image Alt Text Guide: Write Alt Text That Ranks', cat: 'On-Page SEO' },
  { slug: 'indexing-speed-guide', title: 'Indexing Speed Guide: Get Pages Indexed Faster', cat: 'Indexing' },
  { slug: 'internal-linking-strategy', title: 'Internal Linking Strategy: Pass Authority to Every Page', cat: 'On-Page SEO' },
  { slug: 'international-seo-guide', title: 'International SEO Guide: Rank in Multiple Countries', cat: 'International SEO' },
  { slug: 'javascript-seo-guide', title: 'JavaScript SEO Guide: Make Your JS Site Crawlable', cat: 'Technical SEO' },
  { slug: 'keyword-cannibalization', title: 'Keyword Cannibalization: Find It and Fix It for Good', cat: 'Strategy' },
  { slug: 'keyword-research-guide', title: 'Keyword Research Guide: Find Keywords That Drive Revenue', cat: 'Keyword Research' },
  { slug: 'link-building-guide', title: 'Link Building Guide: Earn Backlinks That Move Rankings', cat: 'Link Building' },
  { slug: 'link-equity-guide', title: 'Link Equity Guide: How PageRank Flows Through Your Site', cat: 'Link Building' },
  { slug: 'local-citations-guide', title: 'Local Citations Guide: Build NAP Consistency That Ranks', cat: 'Local SEO' },
  { slug: 'local-seo-basics', title: 'Local SEO Basics: Get Found in Your City', cat: 'Local SEO' },
  { slug: 'long-tail-keywords-guide', title: 'Long-Tail Keywords Guide: Win Traffic With Less Competition', cat: 'Keyword Research' },
  { slug: 'meta-description-optimization', title: 'Meta Description Optimization: Write Descriptions That Get Clicks', cat: 'On-Page SEO' },
  { slug: 'meta-tags-guide', title: 'Meta Tags Guide: Every Tag and When to Use It', cat: 'On-Page SEO' },
  { slug: 'mobile-seo-guide', title: 'Mobile SEO Guide: Optimize for Mobile-First Indexing', cat: 'Technical SEO' },
  { slug: 'noindex-fix-guide', title: 'Noindex Fix Guide: Remove the Tag When It Should Not Be There', cat: 'Technical SEO' },
  { slug: 'on-page-seo-checklist', title: 'On-Page SEO Checklist: Optimize Every Page Completely', cat: 'On-Page SEO' },
  { slug: 'orphan-pages-fix', title: 'Orphan Pages Fix: Find and Link Every Orphaned Page', cat: 'Technical SEO' },
  { slug: 'page-speed-improvement', title: 'Page Speed Improvement: 10 Quick Wins Ranked by Impact', cat: 'Performance' },
  { slug: 'page-title-optimization', title: 'Page Title Optimization: Write Titles That Rank and Get Clicks', cat: 'On-Page SEO' },
  { slug: 'pagination-seo-guide', title: 'Pagination SEO Guide: Handle Paginated Content Correctly', cat: 'Technical SEO' },
  { slug: 'redirect-seo-guide', title: 'Redirect SEO Guide: 301, 302, and When to Use Each', cat: 'Technical SEO' },
  { slug: 'robots-txt-disallow-all', title: 'Robots.txt Disallow All: When and How to Use It', cat: 'Technical SEO' },
  { slug: 'schema-markup-guide', title: 'Schema Markup Guide: Add Structured Data That Gets Rich Results', cat: 'Technical SEO' },
  { slug: 'seo-audit-tools', title: 'SEO Audit Tools: The Best Tools for Finding Every Issue', cat: 'Tools' },
  { slug: 'seo-basics-guide', title: "SEO Basics: A Beginner's Guide to Search Engine Optimization", cat: 'Strategy' },
  { slug: 'seo-checklist-2025', title: 'SEO Checklist 2025: Every Ranking Factor That Matters', cat: 'Strategy' },
  { slug: 'seo-for-bloggers', title: 'SEO for Bloggers: Grow Your Blog With Organic Traffic', cat: 'Content' },
  { slug: 'seo-for-startups-guide', title: 'SEO for Startups: Get Traction Without a Big Budget', cat: 'Strategy' },
  { slug: 'seo-mistakes-beginners', title: 'SEO Mistakes Beginners Make and How to Avoid Them', cat: 'Strategy' },
  { slug: 'seo-roi-calculation', title: 'SEO ROI Calculation: Prove the Value of Organic Traffic', cat: 'Analytics' },
  { slug: 'site-migration-seo-guide', title: 'Site Migration SEO Guide: Move Without Losing Rankings', cat: 'Technical SEO' },
  { slug: 'site-speed-seo', title: 'Site Speed SEO: How Page Load Time Affects Rankings', cat: 'Performance' },
  { slug: 'sitemap-blocked-robots-txt', title: 'Sitemap Blocked by Robots.txt: How to Fix It', cat: 'Sitemaps' },
  { slug: 'sitemap-vs-robots-txt', title: 'Sitemap vs Robots.txt: What Each Does and When to Use It', cat: 'Sitemaps' },
  { slug: 'social-media-seo', title: 'Social Media SEO: Use Social to Amplify Search Rankings', cat: 'Strategy' },
  { slug: 'structured-data-guide', title: 'Structured Data Guide: Schema Types That Help Rankings', cat: 'Technical SEO' },
  { slug: 'submit-sitemap-google', title: 'Submit Sitemap to Google: Step-by-Step in Search Console', cat: 'Sitemaps' },
  { slug: 'technical-seo-audit-guide', title: 'Technical SEO Audit Guide: Find Every Issue Systematically', cat: 'Technical SEO' },
  { slug: 'technical-seo-for-beginners', title: 'Technical SEO for Beginners: The Essentials Explained', cat: 'Technical SEO' },
  { slug: 'thin-content-guide', title: 'Thin Content Guide: Find It and Fix It for Better Rankings', cat: 'Content' },
  { slug: 'url-structure-guide', title: 'URL Structure Guide: Build URLs That Rank and Convert', cat: 'Technical SEO' },
  { slug: 'video-seo-guide', title: 'Video SEO Guide: Rank Your Videos in Google Search', cat: 'Content' },
  { slug: 'website-not-showing-google', title: 'Website Not Showing in Google: Every Fix Explained', cat: 'Indexing' },
  { slug: 'website-speed-test-tools', title: 'Website Speed Test Tools: Measure and Improve Performance', cat: 'Tools' },
  { slug: 'why-is-google-not-indexing-my-site', title: 'Why Is Google Not Indexing My Site? All Reasons Fixed', cat: 'Indexing' },
  { slug: 'xml-sitemap-not-working', title: 'XML Sitemap Not Working: Fix Every Common Issue', cat: 'Sitemaps' },
  { slug: 'xml-sitemap-submission', title: 'XML Sitemap Submission: Submit to Google, Bing, and More', cat: 'Sitemaps' },
];

const CAT_COLORS: Record<string, string> = {
  'Technical SEO': '#dbeafe', 'Sitemaps': '#fef3c7', 'Indexing': '#ede9fe',
  'Link Building': '#dcfce7', 'Content': '#fce7f3', 'Strategy': '#e0f2fe',
  'Performance': '#d1fae5', 'On-Page SEO': '#fff7ed', 'Search Console': '#fce7f3',
  'Keyword Research': '#f0fdf4', 'Local SEO': '#fefce8', 'International SEO': '#f5f3ff',
  'Analytics': '#ecfdf5', 'Tools': '#eff6ff', 'Ecommerce': '#fdf4ff',
};
const CAT_TEXT: Record<string, string> = {
  'Technical SEO': '#1e40af', 'Sitemaps': '#92400e', 'Indexing': '#5b21b6',
  'Link Building': '#166534', 'Content': '#9d174d', 'Strategy': '#0369a1',
  'Performance': '#065f46', 'On-Page SEO': '#9a3412', 'Search Console': '#9d174d',
  'Keyword Research': '#14532d', 'Local SEO': '#713f12', 'International SEO': '#4c1d95',
  'Analytics': '#064e3b', 'Tools': '#1e3a5f', 'Ecommerce': '#6b21a8',
};

export default function BlogIndex() {
  const featured = POSTS[0];
  const rest = POSTS.slice(1);
  return (
    <div style={{ minHeight: '100vh', background: '#fafaf9' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '60px 24px' }}>
        <div style={{ marginBottom: 52 }}>
          <div style={{ fontSize: 13, color: '#2d5be3', fontWeight: 600, marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Blog</div>
          <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 48, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.1 }}>SEO guides that get results</h1>
          <p style={{ fontSize: 18, color: '#6b7280', maxWidth: 560 }}>Practical technical SEO guides on sitemaps, indexing, and ranking. From the SitemapFixer team.</p>
        </div>
        <a href={'/blog/' + featured.slug} style={{ display: 'block', textDecoration: 'none', background: 'white', border: '1px solid #e4e4ed', borderRadius: 20, padding: '40px', marginBottom: 40, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'linear-gradient(90deg, #2d5be3, #7c3aed)' }} />
          <div style={{ display: 'inline-block', background: CAT_COLORS[featured.cat] || '#f3f4f6', color: CAT_TEXT[featured.cat] || '#374151', fontSize: 12, fontWeight: 700, padding: '3px 10px', borderRadius: 6, marginBottom: 16 }}>{featured.cat}</div>
          <div style={{ fontSize: 11, color: '#9ca3af', marginBottom: 8, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Featured</div>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: '#0a0a0f', marginBottom: 12, lineHeight: 1.25 }}>{featured.title}</h2>
          <span style={{ color: '#2d5be3', fontWeight: 600, fontSize: 14 }}>Read article →</span>
        </a>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {rest.map(post => (
            <a key={post.slug} href={'/blog/' + post.slug} style={{ display: 'block', textDecoration: 'none', background: 'white', border: '1px solid #e4e4ed', borderRadius: 14, padding: '24px' }}>
              <span style={{ display: 'inline-block', background: CAT_COLORS[post.cat] || '#f3f4f6', color: CAT_TEXT[post.cat] || '#374151', fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 4, marginBottom: 12 }}>{post.cat}</span>
              <div style={{ fontSize: 15, fontWeight: 700, color: '#0a0a0f', lineHeight: 1.4 }}>{post.title}</div>
              <div style={{ fontSize: 12, color: '#2d5be3', fontWeight: 600, marginTop: 14 }}>Read more →</div>
            </a>
          ))}
        </div>
        <div style={{ background: '#0a0a0f', borderRadius: 20, padding: '48px', textAlign: 'center', marginTop: 60 }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 32, color: 'white', marginBottom: 12 }}>Apply it to your site</h2>
          <p style={{ fontSize: 16, color: '#9ca3af', marginBottom: 28 }}>Analyze your sitemap free - get AI fixes in 60 seconds.</p>
          <a href="/" style={{ display: 'inline-block', background: 'white', color: '#0a0a0f', padding: '14px 32px', borderRadius: 10, textDecoration: 'none', fontWeight: 700, fontSize: 15 }}>Analyze My Sitemap Free</a>
        </div>
      </div>
    </div>
  );
}
