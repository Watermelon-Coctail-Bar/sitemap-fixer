import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Blog - SEO Guides and Technical Tips | SitemapFixer',
  description: 'Expert guides on XML sitemaps, Google indexing, crawl budget, Core Web Vitals, and technical SEO. Free articles from the SitemapFixer team.',
  alternates: { canonical: 'https://sitemapfixer.com/blog' },
};

type Post = { slug: string; title: string; desc: string; cat: string; min: number; base?: string };
const POSTS: Post[] = [
  { slug: 'sitemap-not-working', base: '/learn', title: 'Sitemap Not Working? 9 Common Causes and Fixes', desc: 'The most common reasons XML sitemaps fail in Google Search Console and exactly how to fix each one.', cat: 'Troubleshooting', min: 8 },
  { slug: 'pages-not-indexed-google', base: '/learn', title: 'Pages Not Indexed by Google: Complete Fix Guide', desc: 'Every reason Google refuses to index your pages and step-by-step fixes to get your content showing in search.', cat: 'Indexing', min: 7 },
  { slug: 'submitted-url-not-indexed', base: '/learn', title: '"Submitted URL Not Indexed" - What It Means and How to Fix It', desc: 'Seeing this in Search Console? Here is exactly what it means and the proven steps to resolve it.', cat: 'Indexing', min: 6 },
  { slug: 'crawled-currently-not-indexed', base: '/learn', title: '"Crawled - Currently Not Indexed": Causes and Fixes', desc: 'Google crawled your page but chose not to index it. Here is why and how to fix it.', cat: 'Indexing', min: 6 },
  { slug: 'long-tail-keywords-guide', title: 'Long-Tail Keywords Guide: Find and Rank for Specific Queries', desc: 'How to find high-intent long-tail keywords your competitors miss and rank for them faster.', cat: 'SEO', min: 7 },
  { slug: 'technical-seo-for-beginners', title: 'Technical SEO for Beginners: The 10 Things That Actually Matter', desc: 'A beginner-friendly walk-through of the technical SEO fundamentals that move the needle.', cat: 'Technical SEO', min: 8 },
  { slug: 'technical-seo-audit-guide', title: 'Technical SEO Audit Guide: Find Every Issue', desc: 'A complete framework for auditing your site technically - from crawlability to Core Web Vitals.', cat: 'Technical SEO', min: 10 },
  { slug: 'core-web-vitals-fix-guide', title: 'Core Web Vitals Fix Guide: LCP, INP, CLS', desc: 'How to diagnose and fix every Core Web Vitals issue. With specific code-level fixes for each metric.', cat: 'Technical SEO', min: 9 },
  { slug: 'https-migration-guide', title: 'HTTPS Migration Guide: Move Without Losing Rankings', desc: 'The complete checklist for migrating from HTTP to HTTPS without losing SEO equity.', cat: 'Technical SEO', min: 8 },
  { slug: 'schema-markup-guide', title: 'Schema Markup Guide: Add Structured Data', desc: 'How to implement schema markup, which types to use, and how to fix common errors.', cat: 'Technical SEO', min: 7 },
  { slug: 'keyword-research-guide', title: 'Keyword Research Guide: Find Keywords That Convert', desc: 'A practical framework for finding and prioritizing keywords that drive traffic and conversions.', cat: 'SEO', min: 9 },
  { slug: 'link-building-guide', title: 'Link Building Guide: Earn Backlinks That Move Rankings', desc: 'Proven link building strategies that actually work in 2025. No spam, no shortcuts.', cat: 'SEO', min: 10 },
  { slug: 'on-page-seo-checklist', title: 'On-Page SEO Checklist: Every Factor That Matters', desc: 'The complete on-page SEO checklist - from title tags to internal linking to content structure.', cat: 'SEO', min: 8 },
  { slug: 'eeat-guide', title: 'E-E-A-T Guide: Build Authority Google Trusts', desc: 'How to demonstrate Experience, Expertise, Authoritativeness, and Trustworthiness to Google.', cat: 'SEO', min: 7 },
  { slug: 'google-search-console-guide', title: 'Google Search Console Guide: Master Every Report', desc: 'How to use every section of Google Search Console to improve your SEO.', cat: 'Tools', min: 10 },
  { slug: 'google-search-console-errors-guide', title: 'GSC Errors Guide: Fix Every Search Console Issue', desc: 'Every error type in Google Search Console and exactly how to fix each one fast.', cat: 'Tools', min: 8 },
  { slug: 'free-seo-tools', title: 'Free SEO Tools: The Best Tools That Cost Nothing', desc: 'The best free SEO tools for keyword research, technical audits, backlink analysis, and rank tracking.', cat: 'Tools', min: 7 },
  { slug: 'seo-audit-tools', title: 'SEO Audit Tools: Best Options for Technical Audits', desc: 'The best tools for running technical SEO audits - compared by features, accuracy, and price.', cat: 'Tools', min: 6 },
  { slug: 'google-analytics-seo', title: 'Google Analytics for SEO: Extract Actionable Insights', desc: 'How to use Google Analytics 4 to improve your SEO strategy with real data.', cat: 'Tools', min: 7 },
  { slug: 'crawl-budget-seo-guide', title: 'Crawl Budget SEO: Stop Google Wasting Crawls', desc: 'What crawl budget is, why it matters, and how to optimize it for large sites.', cat: 'Technical SEO', min: 7 },
  { slug: 'crawl-budget-optimization', title: 'Crawl Budget Optimization: The Complete Guide', desc: 'Advanced techniques to maximize how Google crawls your most important pages.', cat: 'Technical SEO', min: 8 },
  { slug: 'javascript-seo-guide', title: 'JavaScript SEO Guide: Make JS Content Indexable', desc: 'How JavaScript affects SEO, how Google renders it, and how to fix JS SEO problems.', cat: 'Technical SEO', min: 9 },
  { slug: 'international-seo-guide', title: 'International SEO Guide: Rank in Multiple Countries', desc: 'Hreflang implementation, international site structure, and targeting multiple markets.', cat: 'SEO', min: 9 },
  { slug: 'local-seo-basics', title: 'Local SEO Basics: Rank in Local Search Results', desc: 'How to optimize for local search - from Google Business Profile to local citations.', cat: 'SEO', min: 7 },
  { slug: 'local-citations-guide', title: 'Local Citations Guide: Build NAP Consistency', desc: 'What local citations are, why they matter, and how to build them correctly.', cat: 'SEO', min: 6 },
  { slug: 'mobile-seo-guide', title: 'Mobile SEO Guide: Optimize for Mobile-First Index', desc: 'How to ensure your site performs well in Google mobile-first indexing.', cat: 'Technical SEO', min: 7 },
  { slug: 'site-speed-seo', title: 'Site Speed SEO: How Page Speed Affects Rankings', desc: 'How page speed impacts SEO rankings and conversions, with specific fixes.', cat: 'Technical SEO', min: 7 },
  { slug: 'page-speed-improvement', title: 'Page Speed Improvement: 10 Quick Wins', desc: '10 page speed improvements ranked by impact - biggest wins with least effort.', cat: 'Technical SEO', min: 7 },
  { slug: 'canonical-url-guide', title: 'Canonical URL Guide: Fix Duplicate Content', desc: 'How canonical tags work, when to use them, and common canonical mistakes to avoid.', cat: 'Technical SEO', min: 7 },
  { slug: 'duplicate-content-seo-fix', title: 'Duplicate Content SEO: Find and Fix It', desc: 'How to identify and fix duplicate content issues before they hurt your rankings.', cat: 'Technical SEO', min: 7 },
  { slug: 'redirect-seo-guide', title: 'Redirect SEO Guide: 301, 302, and Redirect Chains', desc: 'How redirects affect SEO, when to use each type, and how to avoid redirect chains.', cat: 'Technical SEO', min: 7 },
  { slug: 'robots-txt-disallow-all', title: 'Robots.txt Disallow All: How to Fix Accidental Blocks', desc: 'What to do when robots.txt is blocking all crawlers from indexing your site.', cat: 'Technical SEO', min: 5 },
  { slug: 'noindex-fix-guide', title: 'Noindex Fix Guide: Remove Accidental Noindex Tags', desc: 'How to find and remove noindex tags that are accidentally blocking pages from Google.', cat: 'Technical SEO', min: 5 },
  { slug: 'sitemap-blocked-robots-txt', title: 'Sitemap Blocked by Robots.txt: How to Fix It', desc: 'What happens when robots.txt blocks your sitemap and exactly how to fix it.', cat: 'Troubleshooting', min: 5 },
  { slug: 'sitemap-vs-robots-txt', title: 'Sitemap vs Robots.txt: Key Differences', desc: 'The difference between sitemaps and robots.txt - what each does and when to use them.', cat: 'Basics', min: 5 },
  { slug: 'how-to-fix-sitemap-errors', title: 'How to Fix Sitemap Errors: Complete Guide', desc: 'Every type of sitemap error and exactly how to fix each one.', cat: 'Troubleshooting', min: 8 },
  { slug: 'xml-sitemap-not-working', title: 'XML Sitemap Not Working: Diagnosis and Fixes', desc: 'Why your XML sitemap might not be working and how to diagnose and fix each issue.', cat: 'Troubleshooting', min: 7 },
  { slug: 'xml-sitemap-submission', title: 'XML Sitemap Submission: How to Submit to Google and Bing', desc: 'Step-by-step guide to submitting your sitemap to Google Search Console and Bing Webmaster Tools.', cat: 'Basics', min: 5 },
  { slug: 'submit-sitemap-google', title: 'Submit Sitemap to Google: Complete Guide', desc: 'How to submit your sitemap to Google Search Console and verify it was processed correctly.', cat: 'Basics', min: 5 },
  { slug: 'website-not-showing-google', title: 'Website Not Showing in Google: Fix Guide', desc: 'Why your website might not appear in Google search results and how to fix each cause.', cat: 'Indexing', min: 7 },
  { slug: 'why-is-google-not-indexing-my-site', title: 'Why Is Google Not Indexing My Site?', desc: 'Every reason Google might be refusing to index your site with step-by-step fixes.', cat: 'Indexing', min: 8 },
  { slug: 'how-to-check-if-site-is-indexed', title: 'How to Check If Your Site Is Indexed', desc: 'Multiple ways to verify which of your pages are indexed by Google.', cat: 'Indexing', min: 5 },
  { slug: 'indexing-speed-guide', title: 'Indexing Speed Guide: Get Pages Indexed Faster', desc: 'How to get Google to crawl and index your new pages faster.', cat: 'Indexing', min: 6 },
  { slug: 'google-core-update-recovery', title: 'Google Core Update Recovery: A Practical Guide', desc: 'How to diagnose and recover from a Google core algorithm update penalty.', cat: 'SEO', min: 9 },
  { slug: 'google-ranking-drop', title: 'Google Ranking Drop: Diagnose and Recover', desc: 'How to diagnose why your rankings dropped and what to do about it.', cat: 'SEO', min: 8 },
  { slug: 'seo-basics-guide', title: "SEO Basics: A Beginner's Guide", desc: 'Everything you need to know about SEO explained simply - how it works and where to start.', cat: 'Basics', min: 8 },
  { slug: 'seo-checklist-2025', title: 'SEO Checklist 2025: Every Factor That Matters', desc: 'The complete SEO checklist for 2025 - technical, on-page, and off-page factors.', cat: 'SEO', min: 10 },
  { slug: 'how-long-does-seo-take', title: 'How Long Does SEO Take? Realistic Timelines', desc: 'Honest answer to how long SEO takes, with realistic timelines by industry and site type.', cat: 'SEO', min: 6 },
  { slug: 'seo-roi-calculation', title: 'SEO ROI Calculation: Measure What Matters', desc: 'How to calculate and communicate the ROI of your SEO work to stakeholders.', cat: 'SEO', min: 7 },
  { slug: 'seo-for-startups-guide', title: 'SEO for Startups: A Growth-Focused Approach', desc: 'How early-stage startups should approach SEO to maximize growth with limited resources.', cat: 'SEO', min: 8 },
  { slug: 'seo-for-bloggers', title: 'SEO for Bloggers: Rank Your Content', desc: 'SEO fundamentals every blogger needs to drive organic traffic.', cat: 'SEO', min: 7 },
  { slug: 'seo-mistakes-beginners', title: 'SEO Mistakes Beginners Make (And How to Avoid Them)', desc: 'The most common SEO mistakes and how to avoid them when starting out.', cat: 'Basics', min: 7 },
  { slug: 'thin-content-guide', title: 'Thin Content Guide: Find and Fix It', desc: 'What thin content is, how Google penalizes it, and how to fix it.', cat: 'SEO', min: 7 },
  { slug: 'thin-content-fix', title: 'Thin Content Fix: Step-by-Step Recovery', desc: 'Practical steps to fix thin content issues and recover rankings.', cat: 'SEO', min: 6 },
  { slug: 'orphan-pages-fix', title: 'Orphan Pages Fix: Find and Link Them', desc: 'How to find orphan pages on your site and fix them with internal linking.', cat: 'Technical SEO', min: 6 },
  { slug: 'internal-linking-strategy', title: 'Internal Linking Strategy: Distribute PageRank', desc: 'How to build an internal linking strategy that passes authority to your most important pages.', cat: 'SEO', min: 8 },
  { slug: 'anchor-text-guide', title: 'Anchor Text Guide: Optimize for SEO', desc: 'How to use anchor text correctly for internal and external links to improve rankings.', cat: 'SEO', min: 6 },
  { slug: 'backlink-audit-guide', title: 'Backlink Audit Guide: Find and Remove Toxic Links', desc: 'How to audit your backlink profile and deal with toxic or spammy links.', cat: 'SEO', min: 7 },
  { slug: 'link-equity-guide', title: 'Link Equity Guide: How PageRank Flows', desc: 'How link equity flows through your site and how to maximize it.', cat: 'SEO', min: 6 },
  { slug: 'keyword-cannibalization', title: 'Keyword Cannibalization: Find and Fix It', desc: 'How to identify keyword cannibalization and fix it before it hurts your rankings.', cat: 'SEO', min: 6 },
  { slug: 'featured-snippets-guide', title: 'Featured Snippets Guide: Win Position Zero', desc: 'How to optimize your content to win featured snippets and position zero results.', cat: 'SEO', min: 7 },
  { slug: 'meta-tags-guide', title: 'Meta Tags Guide: Title, Description, and More', desc: 'How to write meta tags that improve both rankings and click-through rates.', cat: 'Technical SEO', min: 6 },
  { slug: 'meta-description-optimization', title: 'Meta Description Optimization: Write for Clicks', desc: 'How to write meta descriptions that get more clicks from search results.', cat: 'Technical SEO', min: 5 },
  { slug: 'heading-tags-seo', title: 'Heading Tags SEO: H1, H2, H3 Best Practices', desc: 'How to use heading tags correctly for SEO and user experience.', cat: 'Technical SEO', min: 5 },
  { slug: 'page-title-optimization', title: 'Page Title Optimization: Write Titles That Rank', desc: 'How to write page titles that rank for target keywords and get clicks.', cat: 'Technical SEO', min: 5 },
  { slug: 'url-structure-guide', title: 'URL Structure Guide: SEO-Friendly URLs', desc: 'How to structure URLs for maximum SEO benefit and user clarity.', cat: 'Technical SEO', min: 5 },
  { slug: 'image-alt-text-guide', title: 'Image Alt Text Guide: SEO and Accessibility', desc: 'How to write alt text that helps both SEO and screen reader users.', cat: 'Technical SEO', min: 5 },
  { slug: 'structured-data-guide', title: 'Structured Data Guide: Rich Results and Schema', desc: 'How to implement structured data to earn rich results in Google search.', cat: 'Technical SEO', min: 8 },
  { slug: 'social-media-seo', title: 'Social Media SEO: The Real Connection', desc: 'How social media affects SEO and how to leverage it for better rankings.', cat: 'SEO', min: 6 },
  { slug: 'video-seo-guide', title: 'Video SEO Guide: Rank Your Videos', desc: 'How to optimize videos for YouTube and Google search to drive organic traffic.', cat: 'SEO', min: 7 },
  { slug: 'site-migration-seo-guide', title: 'Site Migration SEO Guide: Move Without Losing Rankings', desc: 'The complete guide to migrating your site without losing organic search traffic.', cat: 'Technical SEO', min: 10 },
  { slug: 'ecommerce-seo-tips', title: 'Ecommerce SEO Tips: Rank Product Pages', desc: 'SEO strategies specific to ecommerce - from product pages to category optimization.', cat: 'SEO', min: 9 },
  { slug: 'hreflang-common-mistakes', title: 'Hreflang Common Mistakes and How to Fix Them', desc: 'The most common hreflang implementation errors and how to fix each one.', cat: 'Technical SEO', min: 7 },
  { slug: 'pagination-seo-guide', title: 'Pagination SEO Guide: Handle Paginated Content', desc: 'How to handle paginated content for SEO without diluting link equity.', cat: 'Technical SEO', min: 6 },
  { slug: 'competitor-seo-analysis', title: 'Competitor SEO Analysis: Steal Their Traffic', desc: 'How to analyze competitor SEO strategies and identify gaps to exploit.', cat: 'SEO', min: 8 },
  { slug: 'content-audit-guide', title: 'Content Audit Guide: Prune, Update, or Redirect', desc: 'How to audit your existing content and make data-driven decisions about each page.', cat: 'SEO', min: 8 },
  { slug: 'content-marketing-seo', title: 'Content Marketing SEO: Create Content That Ranks', desc: 'How to create content that earns rankings, backlinks, and organic traffic at scale.', cat: 'SEO', min: 9 },
  { slug: 'website-speed-test-tools', title: 'Website Speed Test Tools: Best Free Options', desc: 'The best tools to test your website speed and diagnose performance issues.', cat: 'Tools', min: 5 },
  { slug: 'broken-links-seo', title: 'Broken Links SEO: Find and Fix Dead Links', desc: 'How broken links affect SEO, how to find them, and how to fix or redirect them.', cat: 'Technical SEO', min: 6 },
];

const CAT_COLORS: Record<string, string> = {
  'Troubleshooting': '#fef3c7', 'Indexing': '#ede9fe', 'Technical SEO': '#dbeafe',
  'SEO': '#dcfce7', 'Tools': '#fce7f3', 'Basics': '#f3f4f6',
};
const CAT_TEXT: Record<string, string> = {
  'Troubleshooting': '#92400e', 'Indexing': '#5b21b6', 'Technical SEO': '#1e40af',
  'SEO': '#166534', 'Tools': '#9d174d', 'Basics': '#374151',
};

export default function BlogIndex() {
  const featured = POSTS[0];
  const rest = POSTS.slice(1);
  return (
    <div style={{ minHeight: '100vh', background: '#fafaf9' }}>
      <div style={{ maxWidth: 960, margin: '0 auto', padding: '60px 24px' }}>
        <div style={{ marginBottom: 48 }}>
          <div style={{ fontSize: 13, color: '#2d5be3', fontWeight: 600, marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Blog</div>
          <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 48, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.1 }}>SEO guides that get results</h1>
          <p style={{ fontSize: 18, color: '#6b7280', maxWidth: 560 }}>Technical SEO, sitemaps, indexing, and content strategy. Practical guides from the SitemapFixer team.</p>
        </div>
        <a href={(featured.base || '/blog') + '/' + featured.slug} style={{ display: 'block', textDecoration: 'none', background: 'white', border: '1px solid #e4e4ed', borderRadius: 20, padding: '40px', marginBottom: 32, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'linear-gradient(90deg, #2d5be3, #7c3aed)' }} />
          <div style={{ display: 'inline-block', background: CAT_COLORS[featured.cat] || '#f3f4f6', color: CAT_TEXT[featured.cat] || '#374151', fontSize: 12, fontWeight: 700, padding: '3px 10px', borderRadius: 6, marginBottom: 16 }}>{featured.cat}</div>
          <div style={{ fontSize: 11, color: '#9ca3af', marginBottom: 8 }}>FEATURED</div>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: '#0a0a0f', marginBottom: 12, lineHeight: 1.25 }}>{featured.title}</h2>
          <p style={{ fontSize: 16, color: '#6b7280', lineHeight: 1.6, marginBottom: 20 }}>{featured.desc}</p>
          <span style={{ color: '#2d5be3', fontWeight: 600, fontSize: 14 }}>Read article -&gt;</span>
        </a>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {rest.map(post => (
            <a key={post.slug} href={(post.base || '/blog') + '/' + post.slug} style={{ display: 'block', textDecoration: 'none', background: 'white', border: '1px solid #e4e4ed', borderRadius: 16, padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
                <span style={{ display: 'inline-block', background: CAT_COLORS[post.cat] || '#f3f4f6', color: CAT_TEXT[post.cat] || '#374151', fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 4 }}>{post.cat}</span>
                <span style={{ fontSize: 12, color: '#9ca3af' }}>{post.min}m</span>
              </div>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: '#0a0a0f', marginBottom: 8, lineHeight: 1.4 }}>{post.title}</h3>
              <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.55, marginBottom: 12 }}>{post.desc}</p>
              <span style={{ fontSize: 12, color: '#2d5be3', fontWeight: 600 }}>Read more -&gt;</span>
            </a>
          ))}
        </div>
        <div style={{ background: '#0a0a0f', borderRadius: 20, padding: '48px', textAlign: 'center', marginTop: 60 }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 32, color: 'white', marginBottom: 12 }}>Put it into practice</h2>
          <p style={{ fontSize: 16, color: '#9ca3af', marginBottom: 28 }}>Analyze your sitemap free. Get AI-powered fixes in 60 seconds.</p>
          <a href="/" style={{ display: 'inline-block', background: 'white', color: '#0a0a0f', padding: '14px 32px', borderRadius: 10, textDecoration: 'none', fontWeight: 700, fontSize: 15 }}>Analyze My Sitemap Free</a>
        </div>
      </div>
    </div>
  );
}
