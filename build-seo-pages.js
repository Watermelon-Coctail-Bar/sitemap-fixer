#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const BASE = process.argv[2] || process.cwd();

function mkdir(p) {
  fs.mkdirSync(path.join(BASE, p), { recursive: true });
}

function write(p, content) {
  const full = path.join(BASE, p);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content, 'utf8');
}

// ============================================================
// 1. SITEMAP ERRORS — /sitemap-errors/[error-type]
// ============================================================

const ERRORS = [
  {
    slug: 'duplicate-urls',
    title: 'Duplicate URLs in Sitemap',
    meta: 'Find and fix duplicate URLs in your XML sitemap. Duplicate entries waste crawl budget and confuse search engines. Detect and remove them in seconds.',
    h1: 'Duplicate URLs in Your Sitemap',
    intro: 'Duplicate URLs in your sitemap are one of the most common — and most damaging — sitemap errors. When Google crawls your sitemap and finds the same URL listed multiple times, it wastes precious crawl budget and sends confusing signals about which version of your content matters.',
    what: 'A duplicate URL error occurs when the same page appears more than once in your sitemap.xml file. This includes exact duplicates (same URL listed twice) and near-duplicates (HTTP vs HTTPS, trailing slash vs no trailing slash, www vs non-www).',
    why_happens: 'Duplicate URLs typically occur when sitemap generators merge multiple sources without deduplication, when CMS plugins auto-generate sitemaps from multiple content types, or when URL canonicalization issues exist across your site.',
    why_hurts: 'Google has a limited crawl budget per site. When your sitemap lists URLs twice, you force Google to "waste" crawl requests on pages it has already processed. This means new or important pages get crawled less frequently.',
    how_detect: 'Upload your sitemap.xml to Sitemap Fixer — our analyzer counts every URL and flags any that appear more than once. We also detect near-duplicates caused by protocol or trailing slash inconsistencies.',
    how_fix: '1. Remove all duplicate <url> entries from your sitemap.\n2. Standardize all URLs: always use HTTPS, pick one trailing slash style and stick to it.\n3. Ensure your sitemap generator has deduplication enabled.\n4. Set a canonical URL structure and redirect all variants.',
    example: 'A Shopify store had 12,000 URLs in their sitemap — but 3,200 were duplicates from product variants and collection pages. After deduplication, crawl coverage improved by 28% within 6 weeks.',
    mistakes: ['Keeping both HTTP and HTTPS versions of the same URL', 'Not removing paginated versions that should be canonicalized', 'Using sitemap plugins that aggregate without deduplication'],
    faqs: [
      { q: 'Do duplicate URLs hurt rankings directly?', a: 'Not directly, but they dilute crawl budget and can create canonicalization confusion that indirectly hurts rankings.' },
      { q: 'Should I include paginated pages in my sitemap?', a: 'Only if each page has unique, indexable content. Paginated listing pages are often better excluded or canonicalized to the first page.' },
      { q: 'How many duplicate URLs are too many?', a: 'Any duplicate is unnecessary. Even one duplicate wastes crawl budget. Clean sitemaps have zero duplicate entries.' },
    ],
    related: ['invalid-urls', 'too-many-urls', 'orphan-pages'],
  },
  {
    slug: 'invalid-urls',
    title: 'Invalid URLs in Sitemap',
    meta: 'Detect and remove invalid URLs from your XML sitemap. Broken or malformed URLs waste crawl budget and hurt your SEO. Fix them instantly with Sitemap Fixer.',
    h1: 'Invalid URLs in Your Sitemap',
    intro: 'Invalid URLs in your sitemap tell Google your site is poorly maintained. When Googlebot follows a URL from your sitemap and hits a 404, a redirect chain, or a malformed address, it wastes crawl budget and reduces the authority signals for your entire domain.',
    what: 'An invalid URL in a sitemap is any URL that returns a non-200 status code, contains malformed syntax (spaces, special characters), uses HTTP when HTTPS is available, or points to a page that has been deleted or moved.',
    why_happens: 'Invalid URLs appear when pages are deleted without updating the sitemap, when URLs are manually entered with typos, when site migrations happen without redirects, or when CMS themes generate URLs with encoding errors.',
    why_hurts: 'Every invalid URL Googlebot crawls is a wasted crawl request. On large sites, hundreds of invalid URLs can cause Google to crawl important pages less frequently, delaying indexing of new content.',
    how_detect: 'Sitemap Fixer validates every URL in your sitemap against HTTP status codes, checks for malformed syntax, and flags URLs that return 3xx, 4xx, or 5xx responses.',
    how_fix: '1. Run a full sitemap audit to identify all invalid URLs.\n2. For deleted pages: remove from sitemap immediately.\n3. For moved pages: update the sitemap URL to the new location.\n4. For redirect chains: update to point to the final destination URL.\n5. Fix any URL encoding issues (spaces → %20, etc.).',
    example: 'An e-commerce site with 8,000 product pages had 340 invalid URLs from discontinued products still in their sitemap. Removing them increased crawl coverage of active products by 22%.',
    mistakes: ['Leaving 301 redirect targets in sitemap instead of final URLs', 'Including URLs with query parameters that create duplicate content', 'Not updating sitemap after major site restructuring'],
    faqs: [
      { q: 'Should I include redirect URLs in my sitemap?', a: 'No. Your sitemap should only contain canonical, final destination URLs that return 200 status codes.' },
      { q: 'How often should I audit my sitemap for invalid URLs?', a: 'Monthly for active sites, and immediately after any site migration or significant content changes.' },
      { q: 'Can invalid URLs cause deindexing?', a: 'Not directly, but they signal poor site maintenance and can reduce the crawl priority Google assigns to your domain.' },
    ],
    related: ['duplicate-urls', 'too-many-urls', 'orphan-pages'],
  },
  {
    slug: 'too-many-urls',
    title: 'Too Many URLs in Sitemap',
    meta: 'Is your sitemap too large? Google recommends a maximum of 50,000 URLs per sitemap file. Learn how to split, optimize, and prioritize your sitemap correctly.',
    h1: 'Too Many URLs in Your Sitemap',
    intro: 'Google sets a hard limit of 50,000 URLs and 50MB per sitemap file. But even well under that limit, bloated sitemaps with low-value URLs actively harm your SEO by diluting crawl budget across pages that shouldn\'t be indexed at all.',
    what: 'A "too many URLs" sitemap problem has two dimensions: technical (exceeding Google\'s 50,000 URL limit) and strategic (including URLs that have no business being in your sitemap, such as thin pages, duplicate content, or faceted navigation URLs).',
    why_happens: 'Sitemap bloat occurs when CMS systems auto-generate sitemaps for every URL on the site without filtering, when faceted navigation creates thousands of URL variants, or when tag/category pages are all included without evaluation.',
    why_hurts: 'Every low-quality URL in your sitemap is a vote for Google to spend crawl budget on worthless content. Google\'s John Mueller has confirmed that including poor-quality URLs in your sitemap can lower the crawl priority of your entire site.',
    how_detect: 'Sitemap Fixer analyzes your sitemap and flags when you exceed recommended thresholds. We also identify clusters of similar URLs that suggest faceted navigation or thin content issues.',
    how_fix: '1. Split large sitemaps into a sitemap index with child sitemaps by content type.\n2. Exclude: tag pages, author archives, search result pages, filtered/faceted URLs.\n3. Include only pages with unique, valuable content.\n4. Use robots.txt to disallow crawling of low-value URL patterns.\n5. Implement pagination controls (rel=prev/next or canonical) instead of including all paginated pages.',
    example: 'A news site had 180,000 URLs in a single sitemap. After splitting into a sitemap index and removing tag pages and author archives, their top articles saw a 35% increase in crawl frequency.',
    mistakes: ['Including every URL on the site without strategic filtering', 'Not using sitemap index files for sites over 10,000 pages', 'Adding faceted navigation URLs that create duplicate content'],
    faqs: [
      { q: 'What is Google\'s sitemap size limit?', a: '50,000 URLs and 50MB uncompressed per sitemap file. Use a sitemap index to manage larger sites.' },
      { q: 'Should I include every page on my site in the sitemap?', a: 'No. Only include pages you want indexed and that provide unique value. Thin, duplicate, or low-quality pages should be excluded.' },
      { q: 'How do I split a large sitemap?', a: 'Create a sitemap index file at /sitemap.xml that references child sitemaps like /sitemaps/blog.xml and /sitemaps/products.xml.' },
    ],
    related: ['duplicate-urls', 'incorrect-priority', 'changefreq-misuse'],
  },
  {
    slug: 'orphan-pages',
    title: 'Orphan Pages in Sitemap',
    meta: 'Orphan pages have no internal links — they rely entirely on your sitemap for discovery. Learn how to detect orphan pages and fix your internal linking structure.',
    h1: 'Orphan Pages Detected in Your Sitemap',
    intro: 'Orphan pages — pages that exist in your sitemap but have no internal links pointing to them — are a hidden SEO problem. They get crawled once via the sitemap, but without internal links, they receive no PageRank, no contextual signals, and often no rankings.',
    what: 'An orphan page is a URL that appears in your sitemap but cannot be reached by following links from any other page on your site. These pages are invisible to users and receive no link equity from the rest of your site.',
    why_happens: 'Orphan pages are created when content is published without being linked from navigation, blog archives, or related content sections. They also appear after site redesigns when internal link structures change but old content remains.',
    why_hurts: 'Without internal links, orphan pages receive no PageRank distribution from your site. Google may discover them via the sitemap but assigns them low authority. They rarely rank for competitive terms and often get crawled infrequently.',
    how_detect: 'Sitemap Fixer cross-references your sitemap URLs against your site\'s link graph to identify pages that have zero internal links pointing to them.',
    how_fix: '1. Audit all orphan pages to determine if they should be kept, merged, or deleted.\n2. For pages worth keeping: add internal links from relevant hub pages, blog posts, and navigation.\n3. Create topic cluster structures where pillar pages link to related content.\n4. For thin orphan pages: consider consolidating into stronger existing pages.\n5. Update your content publishing workflow to require at least 2-3 internal links per new page.',
    example: 'A SaaS blog had 89 orphan articles — published but never linked from anywhere. Adding contextual internal links to those pages from related articles increased their organic traffic by 156% over 3 months.',
    mistakes: ['Publishing content without adding internal links at time of publication', 'Ignoring orphan pages after site redesigns', 'Treating sitemap inclusion as a substitute for internal linking'],
    faqs: [
      { q: 'If a page is in my sitemap, will Google index it?', a: 'Possibly, but without internal links it receives low crawl priority and no PageRank, making it unlikely to rank.' },
      { q: 'How many internal links does a page need?', a: 'At minimum 2-3 contextual internal links from topically related pages. Navigation links alone are not sufficient.' },
      { q: 'Should I remove orphan pages from my sitemap?', a: 'First fix the orphan status by adding internal links. If the page has no value, delete it and remove from sitemap.' },
    ],
    related: ['duplicate-urls', 'invalid-urls', 'incorrect-priority'],
  },
  {
    slug: 'incorrect-priority',
    title: 'Incorrect Priority Values in Sitemap',
    meta: 'Sitemap priority values are often misused. Learn the correct way to set priority in your XML sitemap and how it affects Googlebot\'s crawl decisions.',
    h1: 'Incorrect Priority Values in Your Sitemap',
    intro: 'The <priority> tag in XML sitemaps is one of the most misunderstood and misused elements in technical SEO. Setting all pages to priority 1.0 is not a trick to get more crawls — it\'s a signal that tells Google your priority system is meaningless.',
    what: 'The <priority> tag indicates the relative importance of a URL compared to other URLs on your site. Valid values range from 0.0 to 1.0. The key word is "relative" — it\'s only meaningful when you differentiate between page types.',
    why_happens: 'Most CMS plugins default to 1.0 for all pages, or set priorities randomly without strategic logic. Many site owners never review or configure priority settings after initial setup.',
    why_hurts: 'When every page has the same priority, Google ignores the tag entirely. Worse, if you set all pages to 1.0, you miss the opportunity to signal that your homepage and core conversion pages are more important than blog posts or tag pages.',
    how_detect: 'Sitemap Fixer analyzes the distribution of priority values across your sitemap and flags sites where 90%+ of pages share the same priority value.',
    how_fix: '1. Homepage: 1.0\n2. Core tool/product/service pages: 0.9\n3. Blog posts and guides: 0.8\n4. Category/tag pages: 0.6\n5. Paginated pages: 0.4\n6. Never use 1.0 for more than 5-10% of your pages.',
    example: 'An e-commerce site had all 15,000 product pages set to priority 1.0. After implementing a tiered system (bestsellers 0.9, regular products 0.7, out-of-stock 0.3), crawl distribution improved measurably within 8 weeks.',
    mistakes: ['Setting all pages to priority 1.0', 'Setting homepage to less than 1.0', 'Using random or auto-generated priority values'],
    faqs: [
      { q: 'Does Google actually use sitemap priority?', a: 'Google has stated priority is "used as hints" and doesn\'t guarantee crawl order. But meaningful differentiation is better than uniform values.' },
      { q: 'What priority should my homepage be?', a: 'Always 1.0. Your homepage is the most important page on your site.' },
      { q: 'Should I include pages with priority 0.0?', a: 'If a page has such low value it gets a 0.0 priority, consider whether it should be in the sitemap at all.' },
    ],
    related: ['changefreq-misuse', 'too-many-urls', 'duplicate-urls'],
  },
  {
    slug: 'changefreq-misuse',
    title: 'changefreq Misuse in Sitemap',
    meta: 'Is your sitemap using changefreq correctly? Setting everything to "daily" or "always" is a common mistake that hurts crawl efficiency. Learn the correct approach.',
    h1: 'changefreq Misuse in Your Sitemap',
    intro: 'Setting every page in your sitemap to changefreq="daily" might seem like a way to get Googlebot to crawl more frequently. In reality, it\'s a signal Google largely ignores — and setting it inaccurately can reduce your credibility with the crawler.',
    what: 'The <changefreq> tag in XML sitemaps hints to search engines how often page content changes. Valid values are: always, hourly, daily, weekly, monthly, yearly, never. Google has confirmed it treats this as a hint, not a directive.',
    why_happens: 'CMS plugins often default to "daily" for all content. Many site owners set high change frequencies hoping for more frequent crawling, without understanding that inaccurate signals reduce crawler trust.',
    why_hurts: 'If your pages are set to "daily" but only change monthly, Googlebot learns your changefreq signals are unreliable and discounts them. This can result in less frequent crawling of pages that actually do change frequently.',
    how_detect: 'Sitemap Fixer analyzes your changefreq distribution. A red flag is when 90%+ of pages share the same changefreq value, especially "daily" or "always".',
    how_fix: '1. Homepage: daily (it changes with new content)\n2. Blog/news posts: monthly (after initial publication)\n3. Core tool pages: weekly\n4. Evergreen guides: monthly\n5. Archive/old pages: yearly\n6. Retired pages you\'re keeping: never',
    example: 'A blog had 2,400 articles all set to changefreq="daily". After correcting to "monthly" for evergreen posts and "weekly" for recently updated content, crawl behavior aligned more closely with actual publication schedule.',
    mistakes: ['Setting all pages to daily or always', 'Using "always" for pages that rarely change', 'Ignoring changefreq entirely and leaving defaults'],
    faqs: [
      { q: 'Does Google use changefreq to decide crawl frequency?', a: 'Partially. Google treats it as a hint. Bing follows it more strictly. Accurate signals build crawler trust over time.' },
      { q: 'What is the difference between always and hourly?', a: '"Always" means the page changes every time it is accessed (dynamic content). "Hourly" means it updates roughly once an hour. Most sites should never use "always".' },
      { q: 'Can incorrect changefreq hurt crawl budget?', a: 'Yes. Overestimating change frequency teaches crawlers your signals are unreliable, reducing the weight they assign to your sitemap hints.' },
    ],
    related: ['incorrect-priority', 'too-many-urls', 'duplicate-urls'],
  },
];

// Generate error pages
ERRORS.forEach(error => {
  const relatedLinks = error.related.map(r =>
    `<li><a href="/sitemap-errors/${r}" className="text-blue-600 hover:underline">${r.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}</a></li>`
  ).join('\n              ');

  const faqSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": error.faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  });

  const content = `import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${error.title} – Fix, Examples & Best Practices | SitemapFixer',
  description: '${error.meta}',
  alternates: { canonical: 'https://sitemapfixer.com/sitemap-errors/${error.slug}' },
  openGraph: {
    title: '${error.title} – Fix & Best Practices',
    description: '${error.meta}',
    url: 'https://sitemapfixer.com/sitemap-errors/${error.slug}',
    type: 'article',
  },
};

export default function Page() {
  const faqSchema = ${JSON.stringify(faqSchema)};

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqSchema }}
      />
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px', fontFamily: 'Geist, sans-serif' }}>
        {/* Breadcrumb */}
        <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
          <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>
          {' → '}
          <a href="/sitemap-errors" style={{ color: '#2d5be3', textDecoration: 'none' }}>Sitemap Errors</a>
          {' → '}
          <span>${error.title}</span>
        </nav>

        <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>
          ${error.h1}
        </h1>

        <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 40 }}>
          ${error.intro}
        </p>

        {/* CTA Box */}
        <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 4 }}>Find this error in your sitemap</div>
            <div style={{ fontSize: 13, color: '#6b6b7d' }}>Analyze your sitemap for free — get a full report in 60 seconds</div>
          </div>
          <a href="/" style={{ background: '#0a0a0f', color: 'white', padding: '12px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 14, whiteSpace: 'nowrap' }}>
            Analyze My Sitemap →
          </a>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>What is this error?</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>${error.what}</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Why does it happen?</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>${error.why_happens}</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Why does it hurt SEO?</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>${error.why_hurts}</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How to detect it</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>${error.how_detect}</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How to fix it</h2>
        <div style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
          <pre style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: '#1c1c26', whiteSpace: 'pre-wrap', fontFamily: 'DM Mono, monospace' }}>${error.how_fix}</pre>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Real-world example</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>${error.example}</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common mistakes</h2>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 32 }}>
          ${error.mistakes.map(m => `<li style={{ marginBottom: 8 }}>${m}</li>`).join('\n          ')}
        </ul>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, marginTop: 40 }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
          ${error.faqs.map(f => `<div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>${f.q}</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>${f.a}</div>
          </div>`).join('\n          ')}
        </div>

        {/* Final CTA */}
        <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
          <div style={{ fontSize: 22, fontWeight: 700, color: 'white', marginBottom: 8 }}>Fix this in your sitemap now</div>
          <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Enter your domain and get a full sitemap audit in 60 seconds</div>
          <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 32px', borderRadius: 8, textDecoration: 'none', fontWeight: 700, fontSize: 15 }}>
            Analyze My Sitemap Free →
          </a>
        </div>

        {/* Related */}
        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Related sitemap errors</div>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            ${error.related.map(r => `<li><a href="/sitemap-errors/${r}" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>${r.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}</a></li>`).join('\n            ')}
          </ul>
          <div style={{ marginTop: 16 }}>
            <a href="/sitemap-errors" style={{ color: '#2d5be3', fontSize: 13 }}>← All sitemap errors</a>
          </div>
        </div>
      </div>
    </>
  );
}
`;

  write(`src/app/sitemap-errors/${error.slug}/page.tsx`, content);
});

console.log(`✓ ${ERRORS.length} error pages created`);

// ============================================================
// 2. SITEMAP ERRORS INDEX PAGE
// ============================================================

const errorsIndexContent = `import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sitemap Errors — Complete Guide to XML Sitemap Issues | SitemapFixer',
  description: 'Browse all common XML sitemap errors: duplicate URLs, invalid URLs, orphan pages, incorrect priority, and more. Learn how to detect and fix each one.',
  alternates: { canonical: 'https://sitemapfixer.com/sitemap-errors' },
};

const ERRORS = [
  { slug: 'duplicate-urls', title: 'Duplicate URLs', desc: 'Same URL listed multiple times — wastes crawl budget and confuses search engines.' },
  { slug: 'invalid-urls', title: 'Invalid URLs', desc: 'Broken, deleted, or malformed URLs that return 4xx or 5xx status codes.' },
  { slug: 'too-many-urls', title: 'Too Many URLs', desc: 'Bloated sitemaps with low-value pages that dilute crawl budget.' },
  { slug: 'orphan-pages', title: 'Orphan Pages', desc: 'Pages in your sitemap with zero internal links — invisible to PageRank.' },
  { slug: 'incorrect-priority', title: 'Incorrect Priority', desc: 'All pages set to 1.0 — a meaningless signal Google ignores.' },
  { slug: 'changefreq-misuse', title: 'changefreq Misuse', desc: 'Everything set to daily when pages rarely change — reduces crawler trust.' },
];

export default function SitemapErrorsIndex() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px', fontFamily: 'Geist, sans-serif' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>
        {' → '}
        <span>Sitemap Errors</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>XML Sitemap Errors</h1>
      <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 48 }}>
        Every sitemap error wastes crawl budget, reduces indexing efficiency, or sends confusing signals to search engines.
        Browse all common errors below — each includes a full explanation, real examples, and exact fix instructions.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 16, marginBottom: 48 }}>
        {ERRORS.map(e => (
          <a key={e.slug} href={'/sitemap-errors/' + e.slug} style={{ display: 'block', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px', textDecoration: 'none', transition: 'border-color 0.15s', background: 'white' }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 6, fontSize: 16 }}>{e.title}</div>
            <div style={{ color: '#6b6b7d', fontSize: 14, lineHeight: 1.5 }}>{e.desc}</div>
            <div style={{ color: '#2d5be3', fontSize: 13, marginTop: 12 }}>Read guide →</div>
          </a>
        ))}
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center' }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Check your sitemap for all these errors</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free analysis — results in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>
          Analyze My Sitemap →
        </a>
      </div>
    </div>
  );
}
`;

write('src/app/sitemap-errors/page.tsx', errorsIndexContent);
console.log('✓ Sitemap errors index page created');

// ============================================================
// 3. LEARN GUIDES — /learn/[topic]
// ============================================================

const GUIDES = [
  {
    slug: 'what-is-an-xml-sitemap',
    title: 'What Is an XML Sitemap?',
    meta: 'An XML sitemap is a file that lists all important URLs on your website to help search engines discover and index your content. Learn what it is, how it works, and why it matters.',
    content: `An XML sitemap is a structured file — formatted in XML — that lists the URLs on your website you want search engines to crawl and index. Think of it as a roadmap you hand directly to Google, Bing, and other search engines to help them discover all the important pages on your site.

## Why XML Sitemaps Matter for SEO

Search engines discover pages primarily through links. If a page has no links pointing to it, the crawler may never find it. Your sitemap solves this by explicitly listing every URL you want indexed, along with optional metadata:

- **lastmod**: when the page was last modified
- **changefreq**: how often the page changes
- **priority**: the relative importance of the page

## What a Sitemap Looks Like

A basic XML sitemap entry looks like this:

\`\`\`xml
<url>
  <loc>https://example.com/about</loc>
  <lastmod>2024-01-15</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
\`\`\`

## When You Need a Sitemap

You need a sitemap if your site has more than 500 pages, has pages with few or no internal links, is new and has limited backlinks, or uses JavaScript rendering that makes discovery difficult.

## How to Submit Your Sitemap

Submit your sitemap URL in Google Search Console under Sitemaps. Also reference it in your robots.txt file: \`Sitemap: https://yoursite.com/sitemap.xml\``,
  },
  {
    slug: 'sitemap-best-practices',
    title: 'XML Sitemap Best Practices',
    meta: 'The complete guide to XML sitemap best practices in 2025. Learn what to include, what to exclude, how to structure your sitemap, and how to maximize crawl efficiency.',
    content: `Following XML sitemap best practices is one of the highest-leverage technical SEO actions you can take. A clean, well-structured sitemap signals quality to search engines and ensures your most important content gets crawled efficiently.

## Include Only Canonical URLs

Your sitemap should only contain the canonical version of each URL — the definitive URL you want indexed. Never include:
- URLs that redirect to other pages
- Non-canonical URLs (e.g., with UTM parameters)
- Duplicate content URLs
- URLs blocked by robots.txt

## Use HTTPS Everywhere

Every URL in your sitemap must use HTTPS. If you have both HTTP and HTTPS versions, ensure all redirects are in place and only list the HTTPS versions.

## Keep It Fresh

Update your sitemap whenever you publish, update, or delete pages. Use accurate lastmod dates — inaccurate dates reduce Google's trust in your sitemap signals.

## Prioritize Strategically

Set priority values that reflect actual page importance:
- Homepage: 1.0
- Core product/service pages: 0.9
- Blog posts: 0.7-0.8
- Tags/categories: 0.5-0.6

## Split Large Sitemaps

If you have more than 10,000 URLs, use a sitemap index file to organize by content type. This makes it easier to identify issues and track indexing rates by section.`,
  },
  {
    slug: 'sitemap-vs-robots-txt',
    title: 'Sitemap vs robots.txt — What\'s the Difference?',
    meta: 'Confused about sitemap.xml vs robots.txt? Learn exactly what each file does, how they interact, and why you need both for effective technical SEO.',
    content: `Sitemaps and robots.txt files are both technical SEO essentials, but they serve opposite purposes. Understanding the difference — and how they interact — is fundamental to managing how search engines crawl your site.

## What robots.txt Does

robots.txt tells crawlers what they CANNOT access. It's a set of permissions — blocking crawlers from directories, file types, or specific URLs you don't want crawled. Example:

\`\`\`
User-agent: *
Disallow: /admin/
Disallow: /checkout/
Allow: /
\`\`\`

## What sitemap.xml Does

Your sitemap tells crawlers what they SHOULD visit. It's a positive signal — a list of all the important URLs you want discovered and indexed.

## The Critical Interaction

Here's where many sites make a serious mistake: if a URL appears in your sitemap but is also blocked by robots.txt, Google faces a contradiction. The official behavior is that robots.txt wins — blocked URLs won't be crawled even if they're in the sitemap.

**Always ensure**: URLs in your sitemap are NOT blocked by robots.txt.

## Do You Need Both?

Yes. robots.txt controls crawl access. Sitemaps guide discovery. They work together — your robots.txt should reference your sitemap URL: \`Sitemap: https://yoursite.com/sitemap.xml\``,
  },
  {
    slug: 'why-pages-not-indexed',
    title: 'Why Are My Pages Not Indexed by Google?',
    meta: 'Pages not getting indexed? This comprehensive guide covers every reason Google might not index your pages and exactly how to fix each one.',
    content: `Discovering that pages you care about aren't in Google's index is one of the most frustrating technical SEO problems. The cause is almost always one of a handful of issues — and your sitemap is a key diagnostic tool.

## Reason 1: Page Not in Sitemap

If a page isn't in your sitemap and has no internal links, Google may never discover it. Always ensure new content is added to your sitemap immediately upon publication.

## Reason 2: Blocked by robots.txt

Check your robots.txt file. If your disallow rules are too broad, they may be blocking pages you want indexed.

## Reason 3: Canonical Tag Points Elsewhere

If your page has a canonical tag pointing to a different URL, Google will index the canonical target, not the page itself.

## Reason 4: Page Returns Non-200 Status

Google only indexes pages that return a 200 status code. Check for 404s, 301 redirects in the chain, or 503 errors.

## Reason 5: Thin or Duplicate Content

Google algorithmically filters pages with very thin content or content that duplicates other indexed pages.

## Reason 6: New Site with Low Authority

Brand new domains with few backlinks are crawled less frequently. Patience and link building are required.

## How to Diagnose

1. Submit the URL in Google Search Console's URL Inspection tool
2. Check your sitemap includes the URL
3. Check robots.txt isn't blocking it
4. Check canonical tags
5. Use Sitemap Fixer to identify structural issues`,
  },
  {
    slug: 'how-to-create-a-sitemap',
    title: 'How to Create an XML Sitemap',
    meta: 'Learn how to create an XML sitemap for any type of website. Step-by-step instructions for WordPress, Shopify, Next.js, and manual creation.',
    content: `Creating an XML sitemap is a foundational technical SEO task. The approach varies by platform, but the principles are the same: list every URL you want indexed, add accurate metadata, and keep it updated.

## Option 1: WordPress (with Yoast or Rank Math)

Both Yoast SEO and Rank Math auto-generate sitemaps. In Yoast: SEO → General → Features → XML Sitemaps → On. Your sitemap will be at yoursite.com/sitemap.xml.

## Option 2: Shopify

Shopify auto-generates a sitemap at yourstore.com/sitemap.xml. You can't directly edit it, but you can control what's included via your theme and product visibility settings.

## Option 3: Next.js

In Next.js 13+ with the App Router, create a sitemap.ts file in your app directory:

\`\`\`typescript
export default function sitemap() {
  return [
    { url: 'https://yoursite.com', lastModified: new Date(), priority: 1 },
    { url: 'https://yoursite.com/about', lastModified: new Date(), priority: 0.8 },
  ];
}
\`\`\`

## Option 4: Manual XML Creation

For small sites, create sitemap.xml manually:

\`\`\`xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yoursite.com/</loc>
    <lastmod>2024-01-01</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
\`\`\`

## After Creating Your Sitemap

1. Submit it in Google Search Console
2. Add it to robots.txt: Sitemap: https://yoursite.com/sitemap.xml
3. Verify it with Sitemap Fixer to catch errors before Google does`,
  },
];

GUIDES.forEach(guide => {
  const content = `import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${guide.title} | SitemapFixer',
  description: '${guide.meta}',
  alternates: { canonical: 'https://sitemapfixer.com/learn/${guide.slug}' },
  openGraph: {
    title: '${guide.title}',
    description: '${guide.meta}',
    url: 'https://sitemapfixer.com/learn/${guide.slug}',
    type: 'article',
  },
};

export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px', fontFamily: 'Geist, sans-serif' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>
        {' → '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>
        {' → '}
        <span>${guide.title}</span>
      </nav>

      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>
        ${guide.title}
      </h1>

      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Analyze your sitemap for free →</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>
          Try Sitemap Fixer
        </a>
      </div>

      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8 }}>
        ${guide.content
          .split('\n\n')
          .map(para => {
            if (para.startsWith('## ')) {
              return `<h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>${para.replace('## ', '')}</h2>`;
            }
            if (para.startsWith('```')) {
              const code = para.replace(/```\w*\n?/, '').replace(/```$/, '').trim();
              return `<pre style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 8, padding: '16px', overflow: 'auto', fontSize: 13, lineHeight: 1.6, fontFamily: 'DM Mono, monospace' }}><code>${code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>`;
            }
            if (para.startsWith('- ')) {
              const items = para.split('\n').filter(l => l.startsWith('- ')).map(l => l.replace('- ', ''));
              return '<ul style={{ paddingLeft: 24, marginBottom: 16 }}>' + items.map(i => `<li style={{ marginBottom: 6 }}>${i}</li>`).join('') + '</ul>';
            }
            return `<p style={{ marginBottom: 20 }}>${para}</p>`;
          })
          .join('\n        ')}
      </div>

      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Check your sitemap now</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>
          Analyze My Sitemap →
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
    </div>
  );
}
`;

  write(`src/app/learn/${guide.slug}/page.tsx`, content);
});

console.log(`✓ ${GUIDES.length} learn guide pages created`);

// ============================================================
// 4. PLATFORM GUIDES — /fix-sitemap-for/[platform]
// ============================================================

const PLATFORMS = [
  { slug: 'wordpress', name: 'WordPress', desc: 'Fix your WordPress sitemap: configure Yoast or Rank Math correctly, exclude low-value pages, and optimize for crawl efficiency.' },
  { slug: 'shopify', name: 'Shopify', desc: 'Optimize your Shopify sitemap: manage product variants, fix duplicate URLs from collections, and improve indexing of your store pages.' },
  { slug: 'nextjs', name: 'Next.js', desc: 'Build a perfect Next.js sitemap: static generation, dynamic routes, App Router sitemap.ts, and programmatic SEO at scale.' },
  { slug: 'ecommerce', name: 'E-commerce Sites', desc: 'E-commerce sitemap best practices: handling product variants, out-of-stock pages, faceted navigation, and seasonal content.' },
  { slug: 'large-sites', name: 'Large Sites (10k+ pages)', desc: 'Sitemap strategy for enterprise sites: sitemap indexes, crawl budget optimization, priority tiers, and monitoring at scale.' },
];

PLATFORMS.forEach(platform => {
  const content = `import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fix Sitemap for ${platform.name} — Complete Guide | SitemapFixer',
  description: '${platform.desc}',
  alternates: { canonical: 'https://sitemapfixer.com/fix-sitemap-for/${platform.slug}' },
};

export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px', fontFamily: 'Geist, sans-serif' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>
        {' → '}
        <a href="/fix-sitemap-for" style={{ color: '#2d5be3', textDecoration: 'none' }}>Platform Guides</a>
        {' → '}
        <span>${platform.name}</span>
      </nav>

      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>
        Fix Your Sitemap for ${platform.name}
      </h1>
      <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        ${platform.desc}
      </p>

      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Analyze your ${platform.name} sitemap now →</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>
          Try Sitemap Fixer Free
        </a>
      </div>

      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 24 }}>
        ${platform.name} sites have specific sitemap challenges. This guide covers the most common sitemap issues
        we see when analyzing ${platform.name} sites and exactly how to fix them.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common ${platform.name} Sitemap Issues</h2>
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
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Analyze your ${platform.name} sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Find all issues in your sitemap — free, no signup required</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>
          Analyze My Sitemap Free →
        </a>
      </div>

      <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
        <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Other platform guides</div>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          ${PLATFORMS.filter(p => p.slug !== platform.slug).map(p => `<li><a href="/fix-sitemap-for/${p.slug}" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>${p.name}</a></li>`).join('\n          ')}
        </ul>
      </div>
    </div>
  );
}
`;

  write(`src/app/fix-sitemap-for/${platform.slug}/page.tsx`, content);
});

console.log(`✓ ${PLATFORMS.length} platform guide pages created`);

// ============================================================
// 5. LEARN INDEX + PLATFORM INDEX
// ============================================================

write('src/app/learn/page.tsx', `import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Sitemap SEO Guides — Learn XML Sitemaps | SitemapFixer',
  description: 'Free guides on XML sitemaps, crawl budget, indexing, and technical SEO. Learn everything about sitemaps from beginner to advanced.',
  alternates: { canonical: 'https://sitemapfixer.com/learn' },
};
const GUIDES = [
  { slug: 'what-is-an-xml-sitemap', title: 'What Is an XML Sitemap?', desc: 'The complete beginner guide to XML sitemaps — what they are, how they work, and why they matter.' },
  { slug: 'sitemap-best-practices', title: 'XML Sitemap Best Practices', desc: 'Everything you need to create a clean, optimized sitemap that maximizes crawl efficiency.' },
  { slug: 'sitemap-vs-robots-txt', title: 'Sitemap vs robots.txt', desc: 'The difference between sitemaps and robots.txt — and how they interact.' },
  { slug: 'why-pages-not-indexed', title: 'Why Pages Not Indexed', desc: 'Every reason Google might not index your pages, and how to fix each one.' },
  { slug: 'how-to-create-a-sitemap', title: 'How to Create a Sitemap', desc: 'Step-by-step instructions for WordPress, Shopify, Next.js, and manual creation.' },
];
export default function LearnIndex() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px', fontFamily: 'Geist, sans-serif' }}>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Sitemap SEO Guides</h1>
      <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 40 }}>Free, in-depth guides on XML sitemaps, crawl budget, and technical SEO indexing.</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 48 }}>
        {GUIDES.map(g => (
          <a key={g.slug} href={'/learn/' + g.slug} style={{ display: 'block', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px', textDecoration: 'none', background: 'white' }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 4 }}>{g.title}</div>
            <div style={{ color: '#6b6b7d', fontSize: 14 }}>{g.desc}</div>
          </a>
        ))}
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '28px', textAlign: 'center' }}>
        <div style={{ fontSize: 18, fontWeight: 700, color: 'white', marginBottom: 8 }}>Put it into practice</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '12px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 700, display: 'inline-block', marginTop: 8 }}>Analyze My Sitemap Free →</a>
      </div>
    </div>
  );
}`);

write('src/app/fix-sitemap-for/page.tsx', `import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Fix Sitemap by Platform — WordPress, Shopify, Next.js | SitemapFixer',
  description: 'Platform-specific sitemap fix guides for WordPress, Shopify, Next.js, e-commerce, and large sites.',
  alternates: { canonical: 'https://sitemapfixer.com/fix-sitemap-for' },
};
const PLATFORMS = [
  { slug: 'wordpress', name: 'WordPress', desc: 'Fix Yoast/Rank Math sitemap issues, exclude low-value pages.' },
  { slug: 'shopify', name: 'Shopify', desc: 'Handle product variants, duplicate collection URLs.' },
  { slug: 'nextjs', name: 'Next.js', desc: 'sitemap.ts, dynamic routes, App Router setup.' },
  { slug: 'ecommerce', name: 'E-commerce', desc: 'Product variants, faceted nav, out-of-stock pages.' },
  { slug: 'large-sites', name: 'Large Sites', desc: 'Sitemap indexes, crawl budget, enterprise scale.' },
];
export default function PlatformsIndex() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px', fontFamily: 'Geist, sans-serif' }}>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Fix Your Sitemap by Platform</h1>
      <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 40 }}>Platform-specific guides for fixing the most common sitemap issues.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 12, marginBottom: 48 }}>
        {PLATFORMS.map(p => (
          <a key={p.slug} href={'/fix-sitemap-for/' + p.slug} style={{ display: 'block', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px', textDecoration: 'none', background: 'white' }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 4 }}>{p.name}</div>
            <div style={{ color: '#6b6b7d', fontSize: 14 }}>{p.desc}</div>
          </a>
        ))}
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '28px', textAlign: 'center' }}>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '12px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 700, display: 'inline-block' }}>Analyze My Sitemap Free →</a>
      </div>
    </div>
  );
}`);

console.log('✓ Index pages created');

// ============================================================
// 6. UPDATED SITEMAP.TS
// ============================================================

write('src/app/sitemap.ts', `import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://sitemapfixer.com';
  const now = new Date();

  const core = [
    { url: base, lastModified: now, changeFrequency: 'daily' as const, priority: 1.0 },
    { url: \`\${base}/sitemap-finder\`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: \`\${base}/sitemap-checker\`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: \`\${base}/website-seo-checker\`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: \`\${base}/xml-sitemap-generator\`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: \`\${base}/free-seo-audit\`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9 },
  ];

  const errorPages = [
    'duplicate-urls', 'invalid-urls', 'too-many-urls',
    'orphan-pages', 'incorrect-priority', 'changefreq-misuse',
  ].map(slug => ({
    url: \`\${base}/sitemap-errors/\${slug}\`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const learnPages = [
    'what-is-an-xml-sitemap', 'sitemap-best-practices', 'sitemap-vs-robots-txt',
    'why-pages-not-indexed', 'how-to-create-a-sitemap',
  ].map(slug => ({
    url: \`\${base}/learn/\${slug}\`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const platformPages = [
    'wordpress', 'shopify', 'nextjs', 'ecommerce', 'large-sites',
  ].map(slug => ({
    url: \`\${base}/fix-sitemap-for/\${slug}\`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const indexes = [
    { url: \`\${base}/sitemap-errors\`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: \`\${base}/learn\`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: \`\${base}/fix-sitemap-for\`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.7 },
  ];

  return [...core, ...indexes, ...errorPages, ...learnPages, ...platformPages];
}
`);

console.log('✓ sitemap.ts updated');

// ============================================================
// 7. UPDATED ROBOTS.TS
// ============================================================

write('src/app/robots.ts', `import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/dashboard/'],
      },
    ],
    sitemap: 'https://sitemapfixer.com/sitemap.xml',
  };
}
`);

console.log('✓ robots.ts updated');

// ============================================================
// SUMMARY
// ============================================================

const totalPages = ERRORS.length + GUIDES.length + PLATFORMS.length + 3; // +3 for indexes
console.log('');
console.log('=== BUILD COMPLETE ===');
console.log(`Total new pages: ${totalPages}`);
console.log('  - Error pages: ' + ERRORS.length);
console.log('  - Learn guides: ' + GUIDES.length);
console.log('  - Platform guides: ' + PLATFORMS.length);
console.log('  - Index pages: 3');
console.log('  - sitemap.ts: updated');
console.log('  - robots.ts: updated');
