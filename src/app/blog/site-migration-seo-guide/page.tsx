import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Site Migration SEO: Move Without Losing Rankings',
  description: "Site migrations are one of the most common causes of major ranking drops. Here is the pre and post-migration SEO checklist that protects your organic traffic.",
  alternates: { canonical: 'https://sitemapfixer.com/blog/site-migration-seo-guide' },
  openGraph: {
    title: 'Site Migration SEO: Move Without Losing Rankings',
    description: 'Site migrations are one of the most common causes of major ranking drops. Here is the pre and post-migration SEO checklist that protects your organic traffic.',
    url: 'https://sitemapfixer.com/blog/site-migration-seo-guide',
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
const phases = [
  { t: "Before migration: baseline documentation", d: "Document everything before you change anything. Export your current sitemap and save all URLs. Screenshot your Google Search Console Performance data for the last 6 months - clicks, impressions, and top queries. Export your top 50 pages by organic traffic from Google Analytics. Note your current Core Web Vitals scores. This baseline is essential for diagnosing any traffic drops after migration and for measuring recovery." },
  { t: "URL mapping and redirect planning", d: "If any URLs are changing (domain change, URL structure change, or CMS migration), create a complete URL mapping document before launching. Every old URL needs a 301 redirect to its new destination. Map old URL to new URL for every single page - not just your homepage. Use a crawler to export all current URLs. Never launch a migration with unmapped URLs." },
  { t: "Pre-launch checks on staging", d: "Before going live, verify on staging: all redirects work correctly and go to the right destinations, not to the homepage, not to 404. The new site is blocking search engines in robots.txt (correct for staging). Canonical tags point to the correct production URLs. Structured data is valid. Core Web Vitals are equal or better than the current site. SSL is configured correctly. All internal links use the new URL structure." },
  { t: "Launch day checklist", d: "Remove the noindex/disallow from the staging environment or enable it on production. Verify robots.txt on production allows crawling. Submit the new sitemap to Google Search Console immediately. Use URL Inspection to request indexing for your most important pages. Monitor Google Search Console for crawl errors in real time. Set up a 404 error alert if possible." },
  { t: "Post-migration monitoring", d: "Check Google Search Console daily for the first two weeks: Coverage report for new crawl errors, Performance report for impressions and clicks, and Core Web Vitals for any regressions. In Google Analytics, compare organic traffic week-over-week. Some temporary traffic fluctuation is normal during a major migration. A drop of 10-20% during processing is common and usually recovers within 4-8 weeks if redirects are implemented correctly." },
];
export default function Page() {
  return (
    <article style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/blog" style={{ color: '#2d5be3', textDecoration: 'none' }}>Blog</a>{' / '}
        <span>Site Migration SEO Guide</span>
      </nav>
      <div style={{ fontSize: 13, color: '#9ca3af', marginBottom: 12 }}>April 2025 · 9 min read</div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, lineHeight: 1.15 }}>Site Migration SEO: Move Your Site Without Losing Rankings</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Verify your new sitemap after migration - free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Site Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        {phases.map(({ t, d }) => (
          <div key={t} style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12 }}>{t}</h2>
            <p style={{ margin: 0 }}>{d}</p>
          </div>
        ))}
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Validate your post-migration sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free - checks all URLs and detects redirect issues</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Sitemap Free</a>
  
        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/blog/google-ranking-drop" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Google Ranking Drop: Diagnose and Recover</a></li>
            <li><a href="/blog/google-core-update-recovery" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Google Core Update Recovery: Recover Rankings</a></li>
            <li><a href="/blog/orphan-pages-fix" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Orphan Pages: What They Are and How to Fix Them</a></li>
            <li><a href="/learn/technical-seo-checklist" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Technical SEO Checklist 2025</a></li>
            <li><a href="/learn/seo-audit-checklist" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>SEO Audit Checklist: 25 Checks to Run on Any Website</a></li>
          </ul>
        </div>
    </div>
    </article>
  );
}
