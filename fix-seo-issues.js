#!/usr/bin/env node
/**
 * SEO Fix Script - Fixes Ahrefs-reported issues:
 * 1. OG tags incomplete (missing og:image, og:locale, og:site_name)
 * 2. OG URL mismatch (og:url pointing to homepage instead of actual URL)
 * 3. Titles too long (>70 chars)
 */
const fs = require('fs');
const path = require('path');

const APP_DIR = path.join(__dirname, 'src/app');
const BASE_URL = 'https://sitemapfixer.com';

const OG_IMAGE_BLOCK = `    images: [{
      url: '${BASE_URL}/opengraph-image',
      width: 1200,
      height: 630,
      alt: 'SitemapFixer - AI Sitemap Checker and SEO Fix Tool',
    }],
    siteName: 'SitemapFixer',
    locale: 'en_US',`;

let stats = { ogFixed: 0, ogAdded: 0, titleShortened: 0, files: 0 };

// Title shortening rules - keep under 70 chars total
const TITLE_REWRITES = {
  // Blog posts - shorten subtitles, remove redundant words
  'Page Speed Improvement: 10 Quick Wins That Actually Make a Difference | SitemapFixer': 'Page Speed: 10 Quick Wins That Make a Difference | SitemapFixer',
  'SEO for Bloggers: How to Get Your Blog Posts Ranked on Google | SitemapFixer': 'SEO for Bloggers: Get Your Posts Ranked on Google | SitemapFixer',
  'Image Alt Text Guide: How to Write Alt Text That Boosts SEO | SitemapFixer': 'Image Alt Text: How to Write Alt Text for SEO | SitemapFixer',
  'Internal Linking Strategy: How to Build Authority Across Your Site | SitemapFixer': 'Internal Linking Strategy: Build Site Authority | SitemapFixer',
  'Product Page SEO: How to Rank Ecommerce Product Pages in Google | SitemapFixer': 'Product Page SEO: Rank Ecommerce Pages in Google | SitemapFixer',
  'Content Freshness SEO: Does Updating Old Content Improve Rankings? | SitemapFixer': 'Content Freshness: Does Updating Content Help Rankings? | SitemapFixer',
  'Content Audit Guide: How to Audit Your Site Content for SEO | SitemapFixer': 'Content Audit: How to Audit Your Site for SEO | SitemapFixer',
  'Core Web Vitals Fix Guide: How to Pass LCP, INP, and CLS | SitemapFixer': 'Core Web Vitals Fix: How to Pass LCP, INP, CLS | SitemapFixer',
  'Page Speed Optimization: How to Make Your Website Faster | SitemapFixer': 'Page Speed Optimization: Make Your Site Faster | SitemapFixer',
  'Site Speed SEO: How Page Speed Affects Rankings and How to Fix It | SitemapFixer': 'Site Speed SEO: How Speed Affects Rankings | SitemapFixer',
  'News Sitemap: How to Set Up Google News Sitemaps for Publishers | SitemapFixer': 'News Sitemap: Google News Sitemaps for Publishers | SitemapFixer',
  'Noindex Fix Guide: How to Remove Noindex from Pages That Should Rank | SitemapFixer': 'Noindex Fix: Remove Noindex from Pages That Should Rank | SitemapFixer',
  'Link Building Guide: How to Earn Backlinks That Actually Move Rankings | SitemapFixer': 'Link Building: Earn Backlinks That Move Rankings | SitemapFixer',
  'E-E-A-T Guide: How to Build Experience, Expertise, Authority, and Trust | SitemapFixer': 'E-E-A-T Guide: Build Expertise, Authority, and Trust | SitemapFixer',
  'Website Speed Test Tools: Best Free Tools to Measure Page Performance | SitemapFixer': 'Website Speed Test: Best Free Performance Tools | SitemapFixer',
  'Drupal Sitemap: Simple XML Sitemap Module Setup and Fix Guide | SitemapFixer': 'Drupal Sitemap: XML Sitemap Module Setup Guide | SitemapFixer',
  'Technical SEO Tools: Best Tools for Crawling, Auditing, and Monitoring | SitemapFixer': 'Technical SEO Tools: Best for Crawling & Auditing | SitemapFixer',
  "Robots.txt Disallow All: The Mistake That Blocks Your Entire Site | SitemapFixer": 'Robots.txt Disallow All: Avoid Blocking Your Site | SitemapFixer',
  'Local Citations Guide: How to Build NAP Consistency for Local SEO | SitemapFixer': 'Local Citations: Build NAP Consistency for SEO | SitemapFixer',
  'Broken Links SEO: How Broken Links Hurt Rankings and How to Fix Them | SitemapFixer': 'Broken Links SEO: How They Hurt Rankings & Fixes | SitemapFixer',
  'Site Migration SEO Guide: How to Migrate Without Losing Traffic | SitemapFixer': 'Site Migration SEO: Migrate Without Losing Traffic | SitemapFixer',
  'Redirect SEO Guide: 301s, 302s, and How to Manage Redirects for SEO | SitemapFixer': 'Redirect SEO: 301s, 302s & Managing Redirects | SitemapFixer',
  'Ecommerce SEO Tips: How to Rank Your Online Store Higher in Google | SitemapFixer': 'Ecommerce SEO: Rank Your Online Store in Google | SitemapFixer',
  'International SEO Guide: How to Rank in Multiple Countries and Languages | SitemapFixer': 'International SEO: Rank in Multiple Countries | SitemapFixer',
  'Squarespace SEO: How to Optimize Your Squarespace Site for Google | SitemapFixer': 'Squarespace SEO: Optimize Your Site for Google | SitemapFixer',
  'Sitemap Size Limit: Maximum URLs and File Size for XML Sitemaps | SitemapFixer': 'Sitemap Size Limit: Max URLs and File Size | SitemapFixer',
  'WooCommerce SEO: How to Optimize Your WooCommerce Store for Google | SitemapFixer': 'WooCommerce SEO: Optimize Your Store for Google | SitemapFixer',
  'Social Media SEO: How Social Signals Affect Search Rankings | SitemapFixer': 'Social Media SEO: How Social Signals Affect SEO | SitemapFixer',
  'Ghost SEO: How to Optimize Your Ghost Blog for Search Engines | SitemapFixer': 'Ghost SEO: Optimize Your Ghost Blog for Search | SitemapFixer',
  'Meta Description SEO: How to Write Descriptions That Get Clicks | SitemapFixer': 'Meta Description SEO: Write Descriptions That Convert | SitemapFixer',
  'AMP SEO: Accelerated Mobile Pages and Their Impact on Search Rankings | SitemapFixer': 'AMP SEO: Impact on Search Rankings | SitemapFixer',
  'Meta Description Optimization: Write Descriptions That Get Clicks | SitemapFixer': 'Meta Description Optimization: Get More Clicks | SitemapFixer',
  'Site Structure SEO: How to Organize Your Website for Rankings | SitemapFixer': 'Site Structure SEO: Organize Your Site for Rankings | SitemapFixer',
  'Long-Tail Keywords Guide: How to Find and Rank for Specific Queries | SitemapFixer': 'Long-Tail Keywords: Find and Rank for Queries | SitemapFixer',
  'URL Canonicalization: How to Prevent Duplicate Content Issues | SitemapFixer': 'URL Canonicalization: Prevent Duplicate Content | SitemapFixer',
  'XML Sitemap Submission: How to Submit Your Sitemap to Search Engines | SitemapFixer': 'XML Sitemap Submission: Submit to Search Engines | SitemapFixer',
  'Page Title Optimization: How to Write Titles That Rank and Get Clicks | SitemapFixer': 'Page Title Optimization: Titles That Rank & Click | SitemapFixer',
  'Technical SEO for Beginners: The 10 Things That Actually Matter | SitemapFixer': 'Technical SEO for Beginners: 10 Things That Matter | SitemapFixer',
  'International SEO: How to Rank in Multiple Countries and Languages | SitemapFixer': 'International SEO: Rank in Multiple Countries | SitemapFixer',
  'Sitemap vs robots.txt: How They Work Together for Technical SEO | SitemapFixer': 'Sitemap vs robots.txt: How They Work Together | SitemapFixer',
  'Meta Tags Guide: Every Meta Tag That Matters for SEO in 2025 | SitemapFixer': 'Meta Tags Guide: Every Meta Tag for SEO (2025) | SitemapFixer',
  'Google Search Console Guide: How to Use GSC for SEO | SitemapFixer': 'Google Search Console: How to Use GSC for SEO | SitemapFixer',
  'Image SEO: How to Optimize Images for Search Engines and Speed | SitemapFixer': 'Image SEO: Optimize Images for Search & Speed | SitemapFixer',
  'Google Search Operators: Advanced Search Commands for SEO | SitemapFixer': 'Google Search Operators: Advanced Commands for SEO | SitemapFixer',
  'Google Discover SEO: How to Get Your Content in Google Discover | SitemapFixer': 'Google Discover SEO: Get Content in Discover | SitemapFixer',
  'Schema Markup Guide: Add Structured Data for Rich Snippets | SitemapFixer': 'Schema Markup: Add Structured Data for Rich Results | SitemapFixer',
  'Laravel Sitemap: How to Generate and Manage Sitemaps in Laravel | SitemapFixer': 'Laravel Sitemap: Generate & Manage Sitemaps | SitemapFixer',
  'Google Analytics SEO: How to Use GA4 for SEO Analysis | SitemapFixer': 'Google Analytics SEO: Use GA4 for SEO Analysis | SitemapFixer',
  'Keyword Research Guide: Find Keywords That Convert and Rank | SitemapFixer': 'Keyword Research: Find Keywords That Convert | SitemapFixer',
  'Anchor Text SEO: How to Optimize Link Text for Search Rankings | SitemapFixer': 'Anchor Text SEO: Optimize Link Text for Rankings | SitemapFixer',
  'Voice Search SEO: How to Optimize for Voice Assistants | SitemapFixer': 'Voice Search SEO: Optimize for Voice Assistants | SitemapFixer',
  'Crawl Budget SEO Guide: How Google Allocates Crawl Resources to Your Site | SitemapFixer': 'Crawl Budget SEO: How Google Allocates Crawling | SitemapFixer',
  'Google Ranking Drop: How to Diagnose and Recover from a Ranking Loss | SitemapFixer': 'Google Ranking Drop: Diagnose and Recover | SitemapFixer',
  'SEO for Startups: How to Build Organic Growth from Day One | SitemapFixer': 'SEO for Startups: Build Organic Growth Fast | SitemapFixer',
  'Schema Markup for SEO: How to Add Structured Data to Your Site | SitemapFixer': 'Schema Markup for SEO: Add Structured Data | SitemapFixer',
  'Breadcrumbs SEO: How Breadcrumb Navigation Helps Rankings and User Experience | SitemapFixer': 'Breadcrumbs SEO: Navigation for Rankings & UX | SitemapFixer',
  'Structured Data Guide: How to Add Schema Markup to Your Website | SitemapFixer': 'Structured Data: Add Schema Markup to Your Site | SitemapFixer',
  'Technical SEO Audit Guide: How to Audit Your Website | SitemapFixer': 'Technical SEO Audit: How to Audit Your Website | SitemapFixer',
  'SEO ROI Calculation: How to Measure the Return on SEO Investment | SitemapFixer': 'SEO ROI: How to Measure Return on SEO Investment | SitemapFixer',
  'Google Search Console Errors Guide: How to Fix Every Error Type | SitemapFixer': 'Google Search Console Errors: Fix Every Error | SitemapFixer',
  'Ecommerce Sitemap: How to Structure Sitemaps for Online Stores | SitemapFixer': 'Ecommerce Sitemap: Structure for Online Stores | SitemapFixer',
  'Category Page SEO: How to Optimize Category Pages for Rankings | SitemapFixer': 'Category Page SEO: Optimize for Rankings | SitemapFixer',
  'Website Not Showing in Google: How to Diagnose and Fix It | SitemapFixer': 'Website Not Showing in Google: Diagnose & Fix | SitemapFixer',
  'Backlink Audit Guide: How to Audit and Clean Up Your Link Profile | SitemapFixer': 'Backlink Audit: Clean Up Your Link Profile | SitemapFixer',
  'Programmatic SEO: How to Create Pages at Scale That Rank | SitemapFixer': 'Programmatic SEO: Create Pages at Scale | SitemapFixer',
  'JavaScript SEO Guide: How to Make JS Sites Crawlable and Indexable | SitemapFixer': 'JavaScript SEO: Make JS Sites Indexable | SitemapFixer',
  'Content Marketing SEO: How to Create Content That Ranks | SitemapFixer': 'Content Marketing SEO: Create Content That Ranks | SitemapFixer',
  'E-E-A-T SEO: How to Demonstrate Expertise and Build Trust | SitemapFixer': 'E-E-A-T SEO: Demonstrate Expertise & Build Trust | SitemapFixer',
  'SEO Reporting: How to Build SEO Reports That Drive Action | SitemapFixer': 'SEO Reporting: Build Reports That Drive Action | SitemapFixer',
  'Hreflang Common Mistakes: 7 Errors That Break International SEO | SitemapFixer': 'Hreflang Mistakes: 7 Errors Breaking Int\'l SEO | SitemapFixer',
  'Schema Errors Fix: How to Find and Fix Structured Data Errors | SitemapFixer': 'Schema Errors: Find and Fix Structured Data Issues | SitemapFixer',
  'Next.js Sitemap: How to Generate and Optimize Sitemaps in Next.js | SitemapFixer': 'Next.js Sitemap: Generate & Optimize Sitemaps | SitemapFixer',
  'On-Page SEO Checklist: Every Element You Need to Optimize | SitemapFixer': 'On-Page SEO Checklist: Every Element to Optimize | SitemapFixer',
  'Keyword Research SEO: How to Find and Prioritize Keywords | SitemapFixer': 'Keyword Research: Find and Prioritize Keywords | SitemapFixer',
  'Video SEO Guide: How to Rank Videos in Google and YouTube | SitemapFixer': 'Video SEO: Rank Videos in Google and YouTube | SitemapFixer',
  'Site Migration SEO: How to Migrate Without Losing Rankings | SitemapFixer': 'Site Migration SEO: Migrate Without Losing Rankings | SitemapFixer',
  'Crawl Budget Optimization: How to Maximize Googlebot Efficiency | SitemapFixer': 'Crawl Budget: Maximize Googlebot Efficiency | SitemapFixer',
  'HTTPS Migration Guide: How to Switch to HTTPS Without Losing Rankings | SitemapFixer': 'HTTPS Migration: Switch Without Losing Rankings | SitemapFixer',
  'Content SEO: How to Create and Optimize Content for Search Engines | SitemapFixer': 'Content SEO: Create & Optimize for Search | SitemapFixer',
  'Google Algorithm Updates: History and How to Recover | SitemapFixer': 'Google Algorithm Updates: History & Recovery | SitemapFixer',
  'Pagination SEO: How to Handle Paginated Content for Search Engines | SitemapFixer': 'Pagination SEO: Handle Paginated Content | SitemapFixer',
  'Discovered - Currently Not Indexed: How to Fix in Search Console | SitemapFixer': 'Discovered Not Indexed: How to Fix in GSC | SitemapFixer',
  'JavaScript SEO: How to Make JavaScript Sites Indexable | SitemapFixer': 'JavaScript SEO: Make JS Sites Indexable | SitemapFixer',
  'Indexing Speed Guide: How to Get Your Pages Indexed Faster | SitemapFixer': 'Indexing Speed: Get Pages Indexed Faster | SitemapFixer',
  'Featured Snippets: How to Win Position Zero in Google Search | SitemapFixer': 'Featured Snippets: Win Position Zero in Google | SitemapFixer',
  'Incorrect Priority Values in Sitemap – Fix, Examples & Best Practices | SitemapFixer': 'Incorrect Priority in Sitemap: Fix Guide | SitemapFixer',
  'Duplicate URLs in Sitemap – Fix, Examples & Best Practices | SitemapFixer': 'Duplicate URLs in Sitemap: Fix Guide | SitemapFixer',
  'SEO Checklist 2025: The Complete Guide to Ranking Higher in Google | SitemapFixer': 'SEO Checklist 2025: Complete Ranking Guide | SitemapFixer',
  'Mobile-First Indexing: What It Means and How to Prepare Your Site | SitemapFixer': 'Mobile-First Indexing: How to Prepare Your Site | SitemapFixer',
  'Shopify SEO: How to Optimize Your Shopify Store for Google | SitemapFixer': 'Shopify SEO: Optimize Your Store for Google | SitemapFixer',
  'How to Create a Sitemap: Step-by-Step for WordPress, Shopify, and Next.js | SitemapFixer': 'How to Create a Sitemap: WordPress, Shopify, Next.js | SitemapFixer',
  '"Submitted URL Not Indexed" in Search Console: How to Fix | SitemapFixer': 'Submitted URL Not Indexed: How to Fix in GSC | SitemapFixer',
  'Featured Snippets Guide: How to Win Position Zero in Google | SitemapFixer': 'Featured Snippets: Win Position Zero in Google | SitemapFixer',
  'Open Graph Tags: How to Control How Your Pages Look When Shared | SitemapFixer': 'Open Graph Tags: Control Page Appearance on Social | SitemapFixer',
  'Robots.txt Examples: How to Write robots.txt for Common Platforms | SitemapFixer': 'Robots.txt Examples: Common Platform Configs | SitemapFixer',
  'Page Experience Ranking: How Google Scores User Experience | SitemapFixer': 'Page Experience: How Google Scores UX | SitemapFixer',
  'changefreq Misuse in Sitemap – Fix, Examples & Best Practices | SitemapFixer': 'changefreq Misuse in Sitemap: Fix Guide | SitemapFixer',
  'Hreflang Sitemap: How to Add Hreflang Tags in Your Sitemap | SitemapFixer': 'Hreflang Sitemap: Add Hreflang Tags | SitemapFixer',
  'SEO Audit Checklist: Every Item You Need to Check | SitemapFixer': 'SEO Audit Checklist: Every Item to Check | SitemapFixer',
  'Affiliate SEO: How to Rank Affiliate Content in Google | SitemapFixer': 'Affiliate SEO: Rank Affiliate Content | SitemapFixer',
  'Pagination SEO Guide: How to Handle Paginated Content | SitemapFixer': 'Pagination SEO: Handle Paginated Content | SitemapFixer',
  'Webflow SEO: How to Optimize Your Webflow Site for Search | SitemapFixer': 'Webflow SEO: Optimize for Search | SitemapFixer',
  'Google Core Update Recovery: How to Recover Lost Rankings | SitemapFixer': 'Google Core Update Recovery: Recover Rankings | SitemapFixer',
  'Thin Content Fix: How to Identify and Fix Thin Content Pages | SitemapFixer': 'Thin Content Fix: Identify and Fix Thin Pages | SitemapFixer',
  'Crawled - Currently Not Indexed: How to Fix It | SitemapFixer': 'Crawled Not Indexed: How to Fix It | SitemapFixer',
  'How to Check if Your Site is Indexed by Google | SitemapFixer': 'Check if Your Site is Indexed by Google | SitemapFixer',
  'Too Many URLs in Sitemap – Fix, Examples & Best Practices | SitemapFixer': 'Too Many URLs in Sitemap: Fix Guide | SitemapFixer',
  'Invalid URLs in Sitemap – Fix, Examples & Best Practices | SitemapFixer': 'Invalid URLs in Sitemap: Fix Guide | SitemapFixer',
  'Orphan Pages in Sitemap – Fix, Examples & Best Practices | SitemapFixer': 'Orphan Pages in Sitemap: Fix Guide | SitemapFixer',
  'Incorrect Priority in Sitemap – Fix & Best Practices | SitemapFixer': 'Incorrect Priority in Sitemap: Fix Guide | SitemapFixer',
  'Fix Sitemap by Platform - WordPress, Shopify, Next.js | SitemapFixer': 'Fix Sitemap by Platform: WordPress, Shopify & More | SitemapFixer',
  'Sitemap SEO Guides - Learn XML Sitemaps | SitemapFixer': 'Learn XML Sitemaps: SEO Guides | SitemapFixer',
  'SEO Learning Center: Technical SEO Guides | SitemapFixer': 'Technical SEO Guides | SitemapFixer',
  'Sitemap Errors - Complete Guide to XML Sitemap Issues | SitemapFixer': 'Sitemap Errors: Complete Fix Guide | SitemapFixer',
  'Blog SEO: How to Optimize Your Blog for Search Engines | SitemapFixer': 'Blog SEO: Optimize Your Blog for Search | SitemapFixer',
};

function getRouteFromFile(filePath) {
  // Convert file path to URL path
  // e.g., src/app/blog/seo-for-bloggers/page.tsx -> /blog/seo-for-bloggers
  const rel = path.relative(APP_DIR, filePath);
  const parts = rel.split(path.sep);
  // Remove 'page.tsx' from end
  parts.pop();
  const route = '/' + parts.join('/');
  return route === '/' ? '/' : route;
}

function getPageType(route) {
  if (route === '/') return 'website';
  if (route.startsWith('/blog/') || route.startsWith('/learn/') || route.startsWith('/sitemap-errors/') || route.startsWith('/fix-sitemap-for/')) return 'article';
  return 'website';
}

function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');

  // Skip if not a page with metadata
  if (!content.includes('export const metadata')) return;

  const route = getRouteFromFile(filePath);
  const fullUrl = route === '/' ? BASE_URL : BASE_URL + route;
  const pageType = getPageType(route);

  let modified = content;

  // --- Fix 1: Shorten long titles ---
  for (const [oldTitle, newTitle] of Object.entries(TITLE_REWRITES)) {
    if (modified.includes(oldTitle)) {
      modified = modified.replace(oldTitle, newTitle);
      stats.titleShortened++;
      break; // Only one title per file
    }
  }

  // --- Fix 2: Fix/Add OpenGraph ---
  if (modified.includes('openGraph:')) {
    // Has openGraph - check if it has images
    if (!modified.includes("images:") || !modified.includes("siteName:") || !modified.includes("locale:")) {
      // Add missing OG fields before the closing of openGraph
      // Find the openGraph block and add missing fields

      // Strategy: Add images/siteName/locale after the last property in openGraph
      // Look for the closing of openGraph: find 'type:' line followed by closing
      const ogMatch = modified.match(/(openGraph:\s*\{[^}]*)(type:\s*'[^']*',?\s*)(},?\s*)/);
      if (ogMatch) {
        const beforeType = ogMatch[1];
        const typeLine = ogMatch[2];
        const closing = ogMatch[3];

        // Ensure type line ends with comma
        const typeLineClean = typeLine.trimEnd().replace(/,?\s*$/, ',');

        modified = modified.replace(ogMatch[0],
          beforeType + typeLineClean + '\n' + OG_IMAGE_BLOCK + '\n  ' + closing
        );
        stats.ogFixed++;
      }
    }
  } else if (modified.includes('alternates:')) {
    // No openGraph at all - add it after alternates
    // Extract title and description from existing metadata
    const titleMatch = modified.match(/title:\s*['"`]([^'"`]+)['"`]/);
    const descMatch = modified.match(/description:\s*['"`]([^'"`]+)['"`]/);

    const ogTitle = titleMatch ? titleMatch[1].replace(/ \| SitemapFixer$/, '') : '';
    const ogDesc = descMatch ? descMatch[1] : '';

    const ogBlock = `  openGraph: {
    title: '${ogTitle.replace(/'/g, "\\'")}',
    description: '${ogDesc.replace(/'/g, "\\'")}',
    url: '${fullUrl}',
    type: '${pageType}',
${OG_IMAGE_BLOCK}
  },`;

    // Insert after alternates line
    const altMatch = modified.match(/(alternates:\s*\{[^}]*\},?\s*\n)/);
    if (altMatch) {
      modified = modified.replace(altMatch[0], altMatch[0] + ogBlock + '\n');
      stats.ogAdded++;
    }
  }

  if (modified !== content) {
    fs.writeFileSync(filePath, modified, 'utf8');
    stats.files++;
  }
}

function walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      // Skip api, dashboard directories
      if (['api', 'dashboard', 'node_modules'].includes(entry.name)) continue;
      walkDir(fullPath);
    } else if (entry.name === 'page.tsx') {
      processFile(fullPath);
    }
  }
}

console.log('Starting SEO fix scan...');
walkDir(APP_DIR);

console.log('\n=== SEO FIX COMPLETE ===');
console.log(`Files modified: ${stats.files}`);
console.log(`OG tags completed: ${stats.ogFixed}`);
console.log(`OG tags added: ${stats.ogAdded}`);
console.log(`Titles shortened: ${stats.titleShortened}`);
