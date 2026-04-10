#!/usr/bin/env node
/**
 * Internal Linking Fix Script
 * Adds related content links to blog and learn pages to increase dofollow inlinks.
 * Each page gets 3-5 contextually related links in a "Related" section at the bottom.
 */
const fs = require('fs');
const path = require('path');

const APP_DIR = path.join(__dirname, 'src/app');

// Define topic clusters for contextual linking
const BLOG_CLUSTERS = {
  'technical-seo': [
    '/blog/technical-seo-for-beginners', '/blog/technical-seo-audit-guide',
    '/blog/seo-checklist-2025', '/blog/seo-audit-tools', '/blog/seo-mistakes-beginners',
  ],
  'indexing': [
    '/blog/why-is-google-not-indexing-my-site', '/blog/how-to-check-if-site-is-indexed',
    '/blog/website-not-showing-google', '/blog/indexing-speed-guide', '/blog/noindex-fix-guide',
  ],
  'sitemap': [
    '/blog/how-to-fix-sitemap-errors', '/blog/xml-sitemap-not-working',
    '/blog/submit-sitemap-google', '/blog/xml-sitemap-submission',
    '/blog/sitemap-blocked-robots-txt', '/blog/sitemap-vs-robots-txt',
  ],
  'speed': [
    '/blog/page-speed-improvement', '/blog/core-web-vitals-fix-guide',
    '/blog/website-speed-test-tools', '/blog/site-speed-seo',
  ],
  'content': [
    '/blog/content-audit-guide', '/blog/content-marketing-seo',
    '/blog/thin-content-fix', '/blog/thin-content-guide',
    '/blog/keyword-cannibalization', '/blog/duplicate-content-seo-fix',
  ],
  'links': [
    '/blog/internal-linking-strategy', '/blog/link-building-guide',
    '/blog/link-equity-guide', '/blog/anchor-text-guide',
    '/blog/broken-links-seo', '/blog/backlink-audit-guide',
  ],
  'on-page': [
    '/blog/page-title-optimization', '/blog/meta-description-optimization',
    '/blog/meta-tags-guide', '/blog/heading-tags-seo',
    '/blog/image-alt-text-guide', '/blog/on-page-seo-checklist',
  ],
  'structured-data': [
    '/blog/schema-markup-guide', '/blog/structured-data-guide',
    '/blog/google-search-console-guide', '/blog/google-search-console-errors-guide',
  ],
  'seo-strategy': [
    '/blog/keyword-research-guide', '/blog/long-tail-keywords-guide',
    '/blog/featured-snippets-guide', '/blog/eeat-guide',
    '/blog/seo-for-bloggers', '/blog/seo-basics-guide',
    '/blog/competitor-seo-analysis', '/blog/seo-roi-calculation',
  ],
  'local-intl': [
    '/blog/local-seo-basics', '/blog/local-citations-guide',
    '/blog/international-seo-guide', '/blog/hreflang-common-mistakes',
  ],
  'technical-advanced': [
    '/blog/javascript-seo-guide', '/blog/https-migration-guide',
    '/blog/redirect-seo-guide', '/blog/crawl-budget-seo-guide',
    '/blog/crawl-budget-optimization', '/blog/pagination-seo-guide',
    '/blog/robots-txt-disallow-all',
  ],
  'recovery': [
    '/blog/google-ranking-drop', '/blog/google-core-update-recovery',
    '/blog/orphan-pages-fix', '/blog/site-migration-seo-guide',
  ],
  'misc': [
    '/blog/ecommerce-seo-tips', '/blog/social-media-seo',
    '/blog/mobile-seo-guide', '/blog/video-seo-guide',
    '/blog/canonical-url-guide', '/blog/url-structure-guide',
    '/blog/google-analytics-seo', '/blog/seo-for-startups-guide',
    '/blog/how-long-does-seo-take', '/blog/free-seo-tools',
  ],
};

const LEARN_CLUSTERS = {
  'sitemaps': [
    '/learn/what-is-an-xml-sitemap', '/learn/xml-sitemap-format',
    '/learn/xml-sitemap-generator', '/learn/sitemap-best-practices',
    '/learn/how-to-create-a-sitemap', '/learn/sitemap-checker',
    '/learn/sitemap-validator', '/learn/sitemap-not-working',
    '/learn/sitemap-index-file', '/learn/sitemap-size-limit',
    '/learn/sitemap-vs-robots-txt', '/learn/news-sitemap',
    '/learn/image-sitemap', '/learn/hreflang-sitemap',
    '/learn/ecommerce-sitemap',
  ],
  'indexing': [
    '/learn/pages-not-indexed-google', '/learn/submitted-url-not-indexed',
    '/learn/crawled-currently-not-indexed', '/learn/discovered-currently-not-indexed',
    '/learn/why-pages-not-indexed', '/learn/index-coverage-report',
    '/learn/noindex-tag', '/learn/soft-404-errors',
    '/learn/sitemap-errors-google-search-console', '/learn/google-search-console-sitemap',
    '/learn/submit-sitemap-bing', '/learn/pages-in-sitemap-not-indexed',
  ],
  'crawling': [
    '/learn/robots-txt-guide', '/learn/robots-txt-examples',
    '/learn/crawl-budget', '/learn/google-not-crawling-my-site',
    '/learn/crawl-errors-guide', '/learn/mobile-first-indexing-guide',
  ],
  'technical': [
    '/learn/technical-seo-checklist', '/learn/canonical-tags',
    '/learn/structured-data', '/learn/core-web-vitals',
    '/learn/page-speed-optimization', '/learn/internal-linking',
    '/learn/google-search-operators', '/learn/https-seo',
    '/learn/ssl-seo', '/learn/url-canonicalization',
    '/learn/url-structure-seo', '/learn/duplicate-content-seo',
    '/learn/redirect-chains', '/learn/site-migration-seo',
    '/learn/site-structure-seo', '/learn/site-speed-seo',
    '/learn/301-vs-302-redirects', '/learn/schema-errors-fix',
    '/learn/open-graph-tags', '/learn/technical-seo-tools',
    '/learn/seo-audit-checklist',
  ],
  'cms-sitemaps': [
    '/learn/wordpress-sitemap', '/learn/shopify-sitemap',
    '/learn/wix-sitemap', '/learn/squarespace-sitemap',
    '/learn/webflow-sitemap', '/learn/nextjs-sitemap',
    '/learn/nuxt-sitemap', '/learn/gatsby-sitemap',
    '/learn/hugo-sitemap', '/learn/astro-sitemap',
    '/learn/framer-sitemap', '/learn/ghost-sitemap',
    '/learn/django-sitemap', '/learn/drupal-sitemap',
    '/learn/laravel-sitemap', '/learn/rails-sitemap',
  ],
  'cms-seo': [
    '/learn/wordpress-seo', '/learn/shopify-seo',
    '/learn/wix-seo', '/learn/squarespace-seo',
    '/learn/webflow-seo', '/learn/ghost-seo',
    '/learn/woocommerce-seo', '/learn/magento-seo',
  ],
  'strategy': [
    '/learn/keyword-research-seo', '/learn/content-seo',
    '/learn/link-building-seo', '/learn/local-seo',
    '/learn/mobile-seo', '/learn/international-seo',
    '/learn/javascript-seo', '/learn/eeat-seo',
    '/learn/saas-seo', '/learn/b2b-seo',
    '/learn/affiliate-seo', '/learn/programmatic-seo',
    '/learn/topic-clusters', '/learn/featured-snippets',
    '/learn/seo-for-startups', '/learn/seo-reporting',
    '/learn/seo-glossary', '/learn/google-algorithm-updates',
    '/learn/google-penalty', '/learn/google-discover-seo',
    '/learn/amp-seo', '/learn/voice-search-seo', '/learn/podcast-seo',
  ],
  'on-page': [
    '/learn/title-tag-seo', '/learn/meta-description-seo',
    '/learn/image-seo', '/learn/video-seo',
    '/learn/anchor-text-seo', '/learn/breadcrumbs-seo',
    '/learn/schema-markup-for-seo', '/learn/page-experience-ranking',
    '/learn/orphan-pages', '/learn/pagination-seo',
    '/learn/category-page-seo', '/learn/product-page-seo',
    '/learn/blog-seo', '/learn/content-freshness-seo',
  ],
  'cwv': [
    '/learn/lcp-optimization', '/learn/inp-optimization', '/learn/cls-fix',
  ],
};

function getRelatedLinks(pagePath, clusters) {
  const related = [];
  for (const [, urls] of Object.entries(clusters)) {
    if (urls.includes(pagePath)) {
      for (const url of urls) {
        if (url !== pagePath && !related.includes(url)) {
          related.push(url);
        }
      }
    }
  }
  // Also add cross-cluster links between blog and learn
  if (pagePath.startsWith('/blog/')) {
    // Add relevant learn links
    const slug = pagePath.replace('/blog/', '');
    if (slug.includes('sitemap')) related.push('/learn/what-is-an-xml-sitemap', '/learn/sitemap-best-practices');
    else if (slug.includes('index')) related.push('/learn/pages-not-indexed-google', '/learn/index-coverage-report');
    else if (slug.includes('speed') || slug.includes('vital')) related.push('/learn/core-web-vitals', '/learn/page-speed-optimization');
    else if (slug.includes('crawl')) related.push('/learn/crawl-budget', '/learn/crawl-errors-guide');
    else related.push('/learn/technical-seo-checklist', '/learn/seo-audit-checklist');
  } else if (pagePath.startsWith('/learn/')) {
    // Add relevant blog links
    const slug = pagePath.replace('/learn/', '');
    if (slug.includes('sitemap')) related.push('/blog/how-to-fix-sitemap-errors', '/blog/submit-sitemap-google');
    else if (slug.includes('index') || slug.includes('crawl')) related.push('/blog/why-is-google-not-indexing-my-site', '/blog/indexing-speed-guide');
    else if (slug.includes('speed') || slug.includes('vital') || slug.includes('lcp') || slug.includes('inp') || slug.includes('cls')) related.push('/blog/core-web-vitals-fix-guide', '/blog/page-speed-improvement');
    else related.push('/blog/technical-seo-for-beginners', '/blog/seo-checklist-2025');
  }
  // Dedupe and limit to 5
  return [...new Set(related)].filter(u => u !== pagePath).slice(0, 5);
}

function getTitle(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const m = content.match(/title:\s*['"`]([^'"`]+)['"`]/);
    return m ? m[1] : '';
  } catch { return ''; }
}

const RELATED_SECTION = (links) => {
  const items = links.map(link => {
    const parts = link.split('/');
    const slug = parts[parts.length - 1];
    const dir = parts[parts.length - 2]; // 'blog' or 'learn'
    const filePath = path.join(APP_DIR, dir, slug, 'page.tsx');
    const title = getTitle(filePath) || slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    return `          <li key="${link}"><a href="${link}" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14 }}>${title}</a></li>`;
  }).join('\n');

  return `
        {/* Related Content */}
        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
${items}
          </ul>
        </div>`;
};

let count = 0;

function processDir(baseDir, prefix, clusters) {
  if (!fs.existsSync(baseDir)) return;
  const entries = fs.readdirSync(baseDir, { withFileTypes: true });
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const slug = entry.name;
    const pagePath = `/${prefix}/${slug}`;
    const filePath = path.join(baseDir, slug, 'page.tsx');
    if (!fs.existsSync(filePath)) continue;

    let content = fs.readFileSync(filePath, 'utf8');

    // Skip if already has related content section
    if (content.includes('Related Guides') || content.includes('Related Content') || content.includes('Related sitemap errors')) continue;

    const related = getRelatedLinks(pagePath, clusters);
    if (related.length === 0) continue;

    // Find the last closing </div> before the export default closing
    // Insert the related section before the last major closing div
    // Strategy: insert before the final CTA section or at the very end of the component

    // Find the last </div> that closes the main content wrapper
    const lastDivClose = content.lastIndexOf('    </div>');
    if (lastDivClose === -1) continue;

    // Build inline related links
    const relatedItems = related.map(link => {
      const parts = link.split('/');
      const lslug = parts[parts.length - 1];
      const dir = parts[parts.length - 2];
      const fp = path.join(APP_DIR, dir, lslug, 'page.tsx');
      const title = getTitle(fp) || lslug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
      return `            <li><a href="${link}" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>${title.replace(/'/g, "\\'")}</a></li>`;
    });

    const relatedBlock = `
        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
${relatedItems.join('\n')}
          </ul>
        </div>
`;

    // Insert before the last </div>
    content = content.slice(0, lastDivClose) + relatedBlock + content.slice(lastDivClose);
    fs.writeFileSync(filePath, content, 'utf8');
    count++;
  }
}

processDir(path.join(APP_DIR, 'blog'), 'blog', BLOG_CLUSTERS);
processDir(path.join(APP_DIR, 'learn'), 'learn', LEARN_CLUSTERS);

console.log(`Internal links added to ${count} pages`);
