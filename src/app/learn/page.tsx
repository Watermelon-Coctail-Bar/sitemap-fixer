import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO Guides: Fix Crawled Currently Not Indexed, Sitemap Errors & More',
  description: 'Free technical SEO guides. Learn how to fix crawled - currently not indexed, verify your sitemap, fix webpage indexing issues, and solve site indexing problems.',
  alternates: { canonical: 'https://sitemapfixer.com/learn' },
  openGraph: { title: 'SEO Learning Center', description: 'Free technical SEO guides.', url: 'https://sitemapfixer.com/learn', type: 'website',
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

const guides = [
  {
    category: 'Sitemaps',
    items: [
      { href: '/learn/what-is-an-xml-sitemap', title: 'What is an XML Sitemap?' },
      { href: '/learn/xml-sitemap-format', title: 'XML Sitemap Format' },
      { href: '/learn/xml-sitemap-generator', title: 'XML Sitemap Generator' },
      { href: '/learn/sitemap-best-practices', title: 'Sitemap Best Practices' },
      { href: '/learn/how-to-create-a-sitemap', title: 'How to Create a Sitemap' },
      { href: '/learn/sitemap-checker', title: 'Sitemap Checker' },
      { href: '/learn/sitemap-validator', title: 'Sitemap Validator' },
      { href: '/learn/sitemap-not-working', title: 'Sitemap Not Working' },
      { href: '/learn/sitemap-index-file', title: 'Sitemap Index File' },
      { href: '/learn/sitemap-size-limit', title: 'Sitemap Size Limit' },
      { href: '/learn/sitemap-vs-robots-txt', title: 'Sitemap vs Robots.txt' },
      { href: '/learn/how-to-find-sitemap', title: 'How to Find a Sitemap' },
      { href: '/learn/find-all-pages-on-a-website', title: 'Find All Pages on a Website' },
      { href: '/learn/news-sitemap', title: 'News Sitemap' },
      { href: '/learn/image-sitemap', title: 'Image Sitemap' },
      { href: '/learn/video-seo', title: 'Video SEO' },
      { href: '/learn/hreflang-sitemap', title: 'Hreflang Sitemap' },
      { href: '/learn/ecommerce-sitemap', title: 'Ecommerce Sitemap' },
    ],
  },
  {
    category: 'Indexing',
    items: [
      { href: '/learn/pages-not-indexed-google', title: 'Pages Not Indexed by Google' },
      { href: '/learn/submitted-url-not-indexed', title: 'Submitted URL Not Indexed' },
      { href: '/learn/crawled-currently-not-indexed', title: 'Crawled - Currently Not Indexed' },
      { href: '/learn/discovered-currently-not-indexed', title: 'Discovered - Currently Not Indexed' },
      { href: '/learn/why-pages-not-indexed', title: 'Why Pages Are Not Indexed' },
      { href: '/learn/index-coverage-report', title: 'Index Coverage Report' },
      { href: '/learn/noindex-tag', title: 'Noindex Tag Guide' },
      { href: '/learn/soft-404-errors', title: 'Soft 404 Errors' },
      { href: '/learn/sitemap-errors-google-search-console', title: 'Sitemap Errors in Search Console' },
      { href: '/learn/google-search-console-sitemap', title: 'Submit Sitemap to Google' },
      { href: '/learn/submit-sitemap-bing', title: 'Submit Sitemap to Bing' },
    ],
  },
  {
    category: 'Crawling',
    items: [
      { href: '/learn/robots-txt-guide', title: 'Robots.txt Guide' },
      { href: '/learn/robots-txt-examples', title: 'Robots.txt Examples' },
      { href: '/learn/crawl-budget', title: 'Crawl Budget' },
      { href: '/learn/google-not-crawling-my-site', title: 'Google Not Crawling My Site' },
      { href: '/learn/crawl-errors-guide', title: 'Crawl Errors Guide' },
      { href: '/learn/mobile-first-indexing-guide', title: 'Mobile-First Indexing' },
    ],
  },
  {
    category: 'Technical SEO',
    items: [
      { href: '/learn/technical-seo-checklist', title: 'Technical SEO Checklist 2025' },
      { href: '/learn/canonical-tags', title: 'Canonical Tags Guide' },
      { href: '/learn/structured-data', title: 'Structured Data and Schema' },
      { href: '/learn/core-web-vitals', title: 'Core Web Vitals' },
      { href: '/learn/page-speed-optimization', title: 'Page Speed Optimization' },
      { href: '/learn/internal-linking', title: 'Internal Linking Strategy' },
      { href: '/learn/sitemap-errors-google-search-console', title: 'Sitemap Errors in Search Console' },
      { href: '/learn/google-search-operators', title: 'Google Search Operators' },
      { href: '/learn/https-seo', title: 'HTTPS SEO' },
      { href: '/learn/ssl-seo', title: 'SSL and SEO' },
      { href: '/learn/url-canonicalization', title: 'URL Canonicalization' },
      { href: '/learn/url-structure-seo', title: 'URL Structure SEO' },
      { href: '/learn/duplicate-content-seo', title: 'Duplicate Content SEO' },
      { href: '/learn/redirect-chains', title: 'Redirect Chains' },
      { href: '/learn/site-migration-seo', title: 'Site Migration SEO' },
      { href: '/learn/site-structure-seo', title: 'Site Structure SEO' },
      { href: '/learn/site-speed-seo', title: 'Site Speed SEO' },
      { href: '/learn/301-vs-302-redirects', title: '301 vs 302 Redirects' },
      { href: '/learn/schema-errors-fix', title: 'Schema Errors Fix' },
      { href: '/learn/open-graph-tags', title: 'Open Graph Tags' },
      { href: '/learn/technical-seo-tools', title: 'Technical SEO Tools' },
      { href: '/learn/seo-audit-checklist', title: 'SEO Audit Checklist' },
    ],
  },
  {
    category: 'CMS Sitemaps',
    items: [
      { href: '/learn/wordpress-sitemap', title: 'WordPress Sitemap' },
      { href: '/learn/shopify-sitemap', title: 'Shopify Sitemap' },
      { href: '/learn/wix-sitemap', title: 'Wix Sitemap' },
      { href: '/learn/squarespace-sitemap', title: 'Squarespace Sitemap' },
      { href: '/learn/webflow-sitemap', title: 'Webflow Sitemap' },
      { href: '/learn/nextjs-sitemap', title: 'Next.js Sitemap' },
      { href: '/learn/nuxt-sitemap', title: 'Nuxt Sitemap' },
      { href: '/learn/gatsby-sitemap', title: 'Gatsby Sitemap' },
      { href: '/learn/hugo-sitemap', title: 'Hugo Sitemap' },
      { href: '/learn/astro-sitemap', title: 'Astro Sitemap' },
      { href: '/learn/framer-sitemap', title: 'Framer Sitemap' },
      { href: '/learn/ghost-sitemap', title: 'Ghost Sitemap' },
      { href: '/learn/django-sitemap', title: 'Django Sitemap' },
      { href: '/learn/drupal-sitemap', title: 'Drupal Sitemap' },
      { href: '/learn/laravel-sitemap', title: 'Laravel Sitemap' },
      { href: '/learn/rails-sitemap', title: 'Rails Sitemap' },
      { href: '/learn/magento-seo', title: 'Magento SEO' },
    ],
  },
  {
    category: 'SEO Strategy',
    items: [
      { href: '/learn/keyword-research-seo', title: 'Keyword Research' },
      { href: '/learn/content-seo', title: 'Content SEO' },
      { href: '/learn/link-building-seo', title: 'Link Building SEO' },
      { href: '/learn/local-seo', title: 'Local SEO' },
      { href: '/learn/mobile-seo', title: 'Mobile SEO' },
      { href: '/learn/international-seo', title: 'International SEO' },
      { href: '/learn/javascript-seo', title: 'JavaScript SEO' },
      { href: '/learn/eeat-seo', title: 'E-E-A-T SEO' },
      { href: '/learn/saas-seo', title: 'SaaS SEO' },
      { href: '/learn/b2b-seo', title: 'B2B SEO' },
      { href: '/learn/affiliate-seo', title: 'Affiliate SEO' },
      { href: '/learn/programmatic-seo', title: 'Programmatic SEO' },
      { href: '/learn/topic-clusters', title: 'Topic Clusters' },
      { href: '/learn/featured-snippets', title: 'Featured Snippets' },
      { href: '/learn/seo-for-startups', title: 'SEO for Startups' },
      { href: '/learn/seo-reporting', title: 'SEO Reporting' },
      { href: '/learn/seo-glossary', title: 'SEO Glossary' },
      { href: '/learn/google-algorithm-updates', title: 'Google Algorithm Updates' },
      { href: '/learn/google-penalty', title: 'Google Penalty' },
      { href: '/learn/google-discover-seo', title: 'Google Discover SEO' },
      { href: '/learn/amp-seo', title: 'AMP SEO' },
      { href: '/learn/voice-search-seo', title: 'Voice Search SEO' },
      { href: '/learn/podcast-seo', title: 'Podcast SEO' },
    ],
  },
  {
    category: 'On-Page SEO',
    items: [
      { href: '/learn/title-tag-seo', title: 'Title Tag SEO' },
      { href: '/learn/meta-description-seo', title: 'Meta Description SEO' },
      { href: '/learn/image-seo', title: 'Image SEO' },
      { href: '/learn/anchor-text-seo', title: 'Anchor Text SEO' },
      { href: '/learn/breadcrumbs-seo', title: 'Breadcrumbs SEO' },
      { href: '/learn/schema-markup-for-seo', title: 'Schema Markup for SEO' },
      { href: '/learn/page-experience-ranking', title: 'Page Experience Ranking' },
      { href: '/learn/orphan-pages', title: 'Orphan Pages' },
      { href: '/learn/pagination-seo', title: 'Pagination SEO' },
      { href: '/learn/category-page-seo', title: 'Category Page SEO' },
      { href: '/learn/product-page-seo', title: 'Product Page SEO' },
      { href: '/learn/blog-seo', title: 'Blog SEO' },
      { href: '/learn/content-freshness-seo', title: 'Content Freshness SEO' },
    ],
  },
  {
    category: 'Core Web Vitals',
    items: [
      { href: '/learn/lcp-optimization', title: 'LCP Optimization' },
      { href: '/learn/inp-optimization', title: 'INP Optimization' },
      { href: '/learn/cls-fix', title: 'CLS Fix' },
    ],
  },
  {
    category: 'CMS SEO',
    items: [
      { href: '/learn/wordpress-seo', title: 'WordPress SEO' },
      { href: '/learn/wix-seo', title: 'Wix SEO' },
      { href: '/learn/squarespace-seo', title: 'Squarespace SEO' },
      { href: '/learn/webflow-seo', title: 'Webflow SEO' },
      { href: '/learn/ghost-seo', title: 'Ghost SEO' },
      { href: '/learn/woocommerce-seo', title: 'WooCommerce SEO' },
      { href: '/learn/shopify-seo', title: 'Shopify SEO' },
    ],
  },
];

export default function LearnIndex() {
  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '60px 24px' }}>
      <div style={{ textAlign: 'center', marginBottom: 56 }}>
        <h1 style={{ fontFamily: "'Instrument Serif',serif", fontSize: 48, color: '#0a0a0f', marginBottom: 16 }}>SEO Learning Center</h1>
        <p style={{ fontSize: 18, color: '#6b7280', maxWidth: 560, margin: '0 auto 28px' }}>Free guides on technical SEO, sitemaps, indexing, and everything in between.</p>
        <a href="/" style={{ display: 'inline-block', background: '#2d5be3', color: 'white', padding: '12px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 15 }}>Analyze My Site Free</a>
      </div>
      {guides.map(group => (
        <div key={group.category} style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 13, fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 20 }}>{group.category}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
            {group.items.map(item => (
              <a key={item.href} href={item.href} style={{ display: 'block', background: 'white', border: '1px solid #e4e4ed', borderRadius: 10, padding: '16px 20px', textDecoration: 'none', color: '#0a0a0f', fontSize: 14, fontWeight: 500, lineHeight: 1.4 }}>
                {item.title}
              </a>
            ))}
          </div>
        </div>
      ))}
      <div style={{ background: '#0a0a0f', borderRadius: 20, padding: '48px', textAlign: 'center', marginTop: 40 }}>
        <h2 style={{ fontFamily: "'Instrument Serif',serif", fontSize: 32, color: 'white', marginBottom: 12 }}>Put it into practice</h2>
        <p style={{ fontSize: 16, color: '#9ca3af', marginBottom: 28 }}>Analyze your sitemap free. Get AI-powered fixes in 60 seconds.</p>
        <a href="/" style={{ display: 'inline-block', background: 'white', color: '#0a0a0f', padding: '14px 32px', borderRadius: 10, textDecoration: 'none', fontWeight: 700, fontSize: 15 }}>Analyze My Sitemap Free</a>
      </div>
    </div>
  );
}
