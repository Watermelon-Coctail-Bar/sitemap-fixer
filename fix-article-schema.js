#!/usr/bin/env node
/**
 * Add Article JSON-LD schema to all blog and learn article pages.
 * Extracts title/description from existing metadata and injects schema script.
 */
const fs = require('fs');
const path = require('path');

const APP_DIR = path.join(__dirname, 'src/app');

function getMetadata(content) {
  const titleMatch = content.match(/title:\s*['"`]([^'"`]+?)(?:\s*\|[^'"`]*)?['"`]/);
  const descMatch = content.match(/description:\s*['"`]([^'"`]+?)['"`]/);
  const canonicalMatch = content.match(/canonical:\s*['"`]([^'"`]+?)['"`]/);
  return {
    title: titleMatch ? titleMatch[1].trim() : '',
    description: descMatch ? descMatch[1].trim() : '',
    canonical: canonicalMatch ? canonicalMatch[1].trim() : '',
  };
}

function processDir(baseDir, prefix) {
  if (!fs.existsSync(baseDir)) return 0;
  let count = 0;
  const entries = fs.readdirSync(baseDir, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const slug = entry.name;
    const filePath = path.join(baseDir, slug, 'page.tsx');
    if (!fs.existsSync(filePath)) continue;

    let content = fs.readFileSync(filePath, 'utf8');

    // Skip index pages (no slug-based content)
    if (slug === 'page.tsx') continue;

    // Skip if already has Article schema
    if (content.includes('"@type":"Article"') || content.includes('"@type": "Article"') || content.includes("'@type': 'Article'")) continue;

    const meta = getMetadata(content);
    if (!meta.title) continue;

    const url = meta.canonical || `https://sitemapfixer.com/${prefix}/${slug}`;
    const escapedTitle = meta.title.replace(/'/g, "\\'").replace(/"/g, '\\"');
    const escapedDesc = meta.description.replace(/'/g, "\\'").replace(/"/g, '\\"');

    const schemaObj = `{"@context":"https://schema.org","@type":"Article","headline":"${escapedTitle}","description":"${escapedDesc}","url":"${url}","author":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com"},"publisher":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com","logo":{"@type":"ImageObject","url":"https://sitemapfixer.com/opengraph-image"}},"datePublished":"2025-01-15","mainEntityOfPage":{"@type":"WebPage","@id":"${url}"}}`;

    // Find the first opening tag of the component's return JSX
    // Look for the pattern: return ( followed by a div or fragment
    // Insert the schema script right after the first <div or <>

    // Strategy: find 'return (' then the first '<div' after it, insert after the div's closing >
    const returnIdx = content.lastIndexOf('return (');
    if (returnIdx === -1) continue;

    const afterReturn = content.substring(returnIdx);

    // Find first <div in the return
    const divMatch = afterReturn.match(/<div\s[^>]*>/);
    if (!divMatch) continue;

    const divEndIdx = returnIdx + afterReturn.indexOf(divMatch[0]) + divMatch[0].length;

    const schemaScript = `\n      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '${schemaObj}' }} />`;

    content = content.slice(0, divEndIdx) + schemaScript + content.slice(divEndIdx);
    fs.writeFileSync(filePath, content, 'utf8');
    count++;
  }
  return count;
}

const blogCount = processDir(path.join(APP_DIR, 'blog'), 'blog');
const learnCount = processDir(path.join(APP_DIR, 'learn'), 'learn');

console.log(`Article schema added: ${blogCount} blog pages, ${learnCount} learn pages (${blogCount + learnCount} total)`);
