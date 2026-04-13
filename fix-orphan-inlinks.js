#!/usr/bin/env node
/**
 * Fix Orphan Pages — increase dofollow inlinks for pages that only have 1.
 * Strategy: For each orphan page, find related pages and update their
 * "Related Guides" sections to include a link to the orphan page.
 * If a related page has no Related Guides section, add one.
 */
const fs = require('fs');
const path = require('path');

const APP_DIR = path.join(__dirname, 'src/app');

// Pages with only 1 dofollow inlink (from site audit)
const ORPHAN_URLS = [
  '/learn/product-page-seo', '/learn/content-freshness-seo', '/learn/how-to-find-sitemap',
  '/learn/sitemap-index-file', '/learn/site-speed-seo', '/learn/news-sitemap',
  '/learn/drupal-sitemap', '/learn/technical-seo-tools', '/learn/podcast-seo',
  '/blog/robots-txt-disallow-all', '/learn/django-sitemap', '/learn/hugo-sitemap',
  '/learn/page-experience-ranking', '/learn/rails-sitemap', '/blog/free-seo-tools',
  '/learn/open-graph-tags', '/learn/topic-clusters', '/learn/url-structure-seo',
  '/learn/sitemap-size-limit', '/learn/woocommerce-seo', '/blog/competitor-seo-analysis',
  '/learn/blog-seo', '/learn/amp-seo', '/learn/site-structure-seo',
  '/learn/image-sitemap', '/learn/duplicate-content-seo', '/learn/url-canonicalization',
  '/learn/astro-sitemap', '/learn/https-seo', '/learn/seo-glossary',
  '/learn/redirect-chains', '/learn/submit-sitemap-bing', '/learn/b2b-seo',
  '/learn/google-discover-seo', '/learn/laravel-sitemap', '/blog/google-analytics-seo',
  '/learn/voice-search-seo', '/blog/how-long-does-seo-take', '/learn/saas-seo',
  '/learn/seo-for-startups', '/learn/schema-markup-for-seo', '/learn/ghost-sitemap',
  '/learn/affiliate-seo', '/blog/seo-roi-calculation', '/learn/ecommerce-sitemap',
  '/learn/category-page-seo', '/learn/programmatic-seo', '/learn/gatsby-sitemap',
  '/learn/nuxt-sitemap', '/learn/eeat-seo', '/blog/seo-for-startups-guide',
  '/learn/seo-reporting', '/learn/schema-errors-fix', '/learn/hreflang-sitemap',
  '/learn/site-migration-seo', '/learn/framer-sitemap', '/learn/301-vs-302-redirects',
  '/learn/soft-404-errors', '/learn/ssl-seo', '/learn/google-algorithm-updates',
  '/learn/magento-seo', '/learn/pagination-seo', '/learn/google-penalty',
  '/learn/javascript-seo', '/learn/featured-snippets',
];

// Semantic relationships: orphan -> pages that should link to it
// Each orphan page maps to slugs of pages that are topically related
const TOPIC_MAP = {
  // Sitemaps cluster
  '/learn/sitemap-index-file': ['what-is-an-xml-sitemap', 'sitemap-best-practices', 'how-to-create-a-sitemap', 'sitemap-size-limit'],
  '/learn/sitemap-size-limit': ['sitemap-index-file', 'sitemap-best-practices', 'how-to-create-a-sitemap', 'ecommerce-sitemap'],
  '/learn/news-sitemap': ['what-is-an-xml-sitemap', 'sitemap-best-practices', 'image-sitemap', 'video-seo'],
  '/learn/image-sitemap': ['what-is-an-xml-sitemap', 'image-seo', 'sitemap-best-practices', 'news-sitemap'],
  '/learn/hreflang-sitemap': ['international-seo', 'sitemap-best-practices', 'what-is-an-xml-sitemap', 'sitemap-index-file'],
  '/learn/ecommerce-sitemap': ['ecommerce-seo-tips', 'sitemap-best-practices', 'category-page-seo', 'product-page-seo'],
  '/learn/how-to-find-sitemap': ['what-is-an-xml-sitemap', 'sitemap-checker', 'sitemap-validator', 'robots-txt-guide'],

  // CMS Sitemaps cluster
  '/learn/drupal-sitemap': ['wordpress-sitemap', 'django-sitemap', 'laravel-sitemap', 'rails-sitemap'],
  '/learn/django-sitemap': ['laravel-sitemap', 'rails-sitemap', 'drupal-sitemap', 'nextjs-sitemap'],
  '/learn/hugo-sitemap': ['gatsby-sitemap', 'astro-sitemap', 'nextjs-sitemap', 'ghost-sitemap'],
  '/learn/rails-sitemap': ['django-sitemap', 'laravel-sitemap', 'drupal-sitemap', 'nextjs-sitemap'],
  '/learn/astro-sitemap': ['nextjs-sitemap', 'gatsby-sitemap', 'hugo-sitemap', 'nuxt-sitemap'],
  '/learn/laravel-sitemap': ['django-sitemap', 'rails-sitemap', 'drupal-sitemap', 'nextjs-sitemap'],
  '/learn/ghost-sitemap': ['wordpress-sitemap', 'hugo-sitemap', 'webflow-sitemap', 'framer-sitemap'],
  '/learn/gatsby-sitemap': ['nextjs-sitemap', 'astro-sitemap', 'nuxt-sitemap', 'hugo-sitemap'],
  '/learn/nuxt-sitemap': ['nextjs-sitemap', 'gatsby-sitemap', 'astro-sitemap', 'hugo-sitemap'],
  '/learn/framer-sitemap': ['webflow-sitemap', 'squarespace-sitemap', 'wix-sitemap', 'ghost-sitemap'],

  // CMS SEO cluster
  '/learn/woocommerce-seo': ['shopify-seo', 'wordpress-seo', 'ecommerce-seo-tips', 'category-page-seo'],
  '/learn/magento-seo': ['shopify-seo', 'woocommerce-seo', 'ecommerce-seo-tips', 'product-page-seo'],

  // Technical SEO cluster
  '/learn/site-speed-seo': ['core-web-vitals', 'page-speed-optimization', 'lcp-optimization', 'page-speed-improvement'],
  '/learn/technical-seo-tools': ['technical-seo-checklist', 'seo-audit-checklist', 'seo-audit-tools', 'sitemap-checker'],
  '/learn/open-graph-tags': ['structured-data', 'schema-markup-for-seo', 'meta-description-seo', 'title-tag-seo'],
  '/learn/url-structure-seo': ['site-structure-seo', 'url-canonicalization', 'canonical-tags', 'breadcrumbs-seo'],
  '/learn/duplicate-content-seo': ['url-canonicalization', 'canonical-tags', 'redirect-chains', 'duplicate-content-seo-fix'],
  '/learn/url-canonicalization': ['canonical-tags', 'duplicate-content-seo', 'redirect-chains', '301-vs-302-redirects'],
  '/learn/https-seo': ['ssl-seo', 'technical-seo-checklist', 'site-migration-seo', 'https-migration-guide'],
  '/learn/ssl-seo': ['https-seo', 'technical-seo-checklist', 'site-migration-seo', 'https-migration-guide'],
  '/learn/redirect-chains': ['301-vs-302-redirects', 'site-migration-seo', 'redirect-seo-guide', 'url-canonicalization'],
  '/learn/site-structure-seo': ['internal-linking', 'url-structure-seo', 'breadcrumbs-seo', 'internal-linking-strategy'],
  '/learn/301-vs-302-redirects': ['redirect-chains', 'site-migration-seo', 'redirect-seo-guide', 'url-canonicalization'],
  '/learn/soft-404-errors': ['crawl-errors-guide', 'pages-not-indexed-google', 'google-search-console-errors-guide', 'technical-seo-checklist'],
  '/learn/schema-errors-fix': ['structured-data', 'schema-markup-for-seo', 'schema-markup-guide', 'structured-data-guide'],
  '/learn/site-migration-seo': ['301-vs-302-redirects', 'redirect-chains', 'site-migration-seo-guide', 'https-seo'],
  '/learn/schema-markup-for-seo': ['structured-data', 'schema-errors-fix', 'schema-markup-guide', 'structured-data-guide'],
  '/learn/pagination-seo': ['category-page-seo', 'canonical-tags', 'ecommerce-sitemap', 'pagination-seo-guide'],
  '/learn/javascript-seo': ['technical-seo-checklist', 'javascript-seo-guide', 'mobile-first-indexing-guide', 'crawl-budget'],

  // On-page SEO cluster
  '/learn/product-page-seo': ['category-page-seo', 'ecommerce-seo-tips', 'schema-markup-for-seo', 'woocommerce-seo'],
  '/learn/content-freshness-seo': ['content-seo', 'blog-seo', 'content-audit-guide', 'content-marketing-seo'],
  '/learn/page-experience-ranking': ['core-web-vitals', 'page-speed-optimization', 'site-speed-seo', 'mobile-seo'],
  '/learn/blog-seo': ['content-seo', 'content-freshness-seo', 'seo-for-bloggers', 'keyword-research-seo'],
  '/learn/category-page-seo': ['product-page-seo', 'ecommerce-seo-tips', 'internal-linking', 'pagination-seo'],
  '/learn/featured-snippets': ['structured-data', 'schema-markup-for-seo', 'featured-snippets-guide', 'content-seo'],

  // Strategy cluster
  '/learn/topic-clusters': ['content-seo', 'internal-linking', 'site-structure-seo', 'keyword-research-seo'],
  '/learn/seo-glossary': ['technical-seo-checklist', 'seo-basics-guide', 'seo-checklist-2025', 'technical-seo-for-beginners'],
  '/learn/b2b-seo': ['saas-seo', 'seo-for-startups', 'content-seo', 'keyword-research-seo'],
  '/learn/google-discover-seo': ['content-seo', 'content-freshness-seo', 'eeat-seo', 'amp-seo'],
  '/learn/voice-search-seo': ['featured-snippets', 'structured-data', 'mobile-seo', 'schema-markup-for-seo'],
  '/learn/saas-seo': ['b2b-seo', 'seo-for-startups', 'content-seo', 'keyword-research-seo'],
  '/learn/seo-for-startups': ['saas-seo', 'b2b-seo', 'seo-for-startups-guide', 'keyword-research-seo'],
  '/learn/affiliate-seo': ['programmatic-seo', 'content-seo', 'link-building-seo', 'keyword-research-seo'],
  '/learn/programmatic-seo': ['affiliate-seo', 'ecommerce-sitemap', 'sitemap-index-file', 'category-page-seo'],
  '/learn/eeat-seo': ['eeat-guide', 'content-seo', 'link-building-seo', 'google-algorithm-updates'],
  '/learn/seo-reporting': ['google-search-console-guide', 'google-analytics-seo', 'seo-roi-calculation', 'keyword-research-seo'],
  '/learn/google-algorithm-updates': ['google-penalty', 'google-core-update-recovery', 'eeat-seo', 'google-ranking-drop'],
  '/learn/google-penalty': ['google-algorithm-updates', 'google-core-update-recovery', 'google-ranking-drop', 'eeat-seo'],
  '/learn/podcast-seo': ['video-seo', 'content-seo', 'schema-markup-for-seo', 'structured-data'],
  '/learn/amp-seo': ['mobile-seo', 'page-speed-optimization', 'google-discover-seo', 'site-speed-seo'],
  '/learn/submit-sitemap-bing': ['google-search-console-sitemap', 'sitemap-best-practices', 'what-is-an-xml-sitemap', 'how-to-find-sitemap'],

  // Blog orphans
  '/blog/robots-txt-disallow-all': ['robots-txt-guide', 'robots-txt-examples', 'crawl-budget', 'sitemap-blocked-robots-txt'],
  '/blog/free-seo-tools': ['seo-audit-tools', 'technical-seo-tools', 'google-search-console-guide', 'website-speed-test-tools'],
  '/blog/competitor-seo-analysis': ['keyword-research-guide', 'link-building-guide', 'seo-checklist-2025', 'content-audit-guide'],
  '/blog/google-analytics-seo': ['google-search-console-guide', 'seo-reporting', 'seo-audit-tools', 'free-seo-tools'],
  '/blog/how-long-does-seo-take': ['seo-basics-guide', 'seo-roi-calculation', 'seo-for-startups-guide', 'keyword-research-guide'],
  '/blog/seo-roi-calculation': ['how-long-does-seo-take', 'seo-reporting', 'google-analytics-seo', 'seo-for-startups-guide'],
  '/blog/seo-for-startups-guide': ['seo-for-startups', 'saas-seo', 'b2b-seo', 'how-long-does-seo-take'],
};

function getTitle(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const m = content.match(/title:\s*['"`]([^'"`]+?)(?:\s*\|[^'"`]*)?['"`]/);
    return m ? m[1].trim() : '';
  } catch { return ''; }
}

function resolveFilePath(slug) {
  // Try learn first, then blog
  let fp = path.join(APP_DIR, 'learn', slug, 'page.tsx');
  if (fs.existsSync(fp)) return { path: fp, href: `/learn/${slug}` };
  fp = path.join(APP_DIR, 'blog', slug, 'page.tsx');
  if (fs.existsSync(fp)) return { path: fp, href: `/blog/${slug}` };
  return null;
}

function getOrphanFilePath(url) {
  const parts = url.split('/').filter(Boolean);
  const dir = parts[0]; // learn or blog
  const slug = parts[1];
  return path.join(APP_DIR, dir, slug, 'page.tsx');
}

function addLinkToRelatedSection(content, orphanHref, orphanTitle) {
  // Check if the page already links to this orphan
  if (content.includes(`href="${orphanHref}"`)) return null;

  // Check if page has a Related Guides section
  const relatedIdx = content.indexOf('Related Guides');
  if (relatedIdx !== -1) {
    // Find the </ul> after "Related Guides"
    const ulCloseIdx = content.indexOf('</ul>', relatedIdx);
    if (ulCloseIdx === -1) return null;

    // Count existing links - don't add more than 6 total
    const section = content.substring(relatedIdx, ulCloseIdx);
    const linkCount = (section.match(/<li>/g) || []).length;
    if (linkCount >= 6) return null;

    // Add the new link before </ul>
    const escapedTitle = orphanTitle.replace(/'/g, "\\'");
    const newLink = `\n            <li><a href="${orphanHref}" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>${escapedTitle}</a></li>`;
    return content.slice(0, ulCloseIdx) + newLink + content.slice(ulCloseIdx);
  }

  // No Related Guides section — add one before the last </div>
  const lastDivClose = content.lastIndexOf('    </div>');
  if (lastDivClose === -1) return null;

  const escapedTitle = orphanTitle.replace(/'/g, "\\'");
  const relatedBlock = `
        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="${orphanHref}" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>${escapedTitle}</a></li>
          </ul>
        </div>
`;
  return content.slice(0, lastDivClose) + relatedBlock + content.slice(lastDivClose);
}

let totalUpdates = 0;
const updatedFiles = new Set();

for (const orphanUrl of ORPHAN_URLS) {
  const orphanFilePath = getOrphanFilePath(orphanUrl);
  const orphanTitle = getTitle(orphanFilePath) || orphanUrl.split('/').pop().replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

  const relatedSlugs = TOPIC_MAP[orphanUrl];
  if (!relatedSlugs || relatedSlugs.length === 0) {
    console.log(`SKIP: No topic map for ${orphanUrl}`);
    continue;
  }

  let linksAdded = 0;
  for (const slug of relatedSlugs) {
    const resolved = resolveFilePath(slug);
    if (!resolved) {
      console.log(`  MISS: ${slug} not found`);
      continue;
    }

    let content = fs.readFileSync(resolved.path, 'utf8');
    const updated = addLinkToRelatedSection(content, orphanUrl, orphanTitle);
    if (updated) {
      fs.writeFileSync(resolved.path, updated, 'utf8');
      updatedFiles.add(resolved.path);
      linksAdded++;
      totalUpdates++;
    }
  }
  if (linksAdded > 0) {
    console.log(`OK: ${orphanUrl} — added ${linksAdded} inlinks`);
  } else {
    console.log(`ALREADY: ${orphanUrl} — all links already present`);
  }
}

console.log(`\nDone: ${totalUpdates} links added across ${updatedFiles.size} files`);
