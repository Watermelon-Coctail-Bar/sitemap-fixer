import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'SEO Audit Checklist: 25 Checks to Run on Any Website',
  description: "A complete SEO audit checklist covering technical, on-page, and off-page factors. Run these 25 checks to find what is hurting your rankings and get a prioritized fix list.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/seo-audit-checklist' },
  openGraph: {
    title: 'SEO Audit Checklist: 25 Checks to Run on Any Website',
    description: 'A complete SEO audit checklist covering technical, on-page, and off-page factors. Run these 25 checks to find what is hurting your rankings and get a prioritized fix list.',
    url: 'https://sitemapfixer.com/learn/seo-audit-checklist',
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
const categories = [
  {
    title: "Technical SEO",
    items: [
      "Site is fully on HTTPS with valid SSL certificate and HTTP redirects to HTTPS via 301",
      "Canonical domain is consistent - www or non-www, not both accessible",
      "Sitemap.xml exists, is valid XML, contains only canonical 200-status URLs, and is submitted to Google Search Console",
      "Robots.txt exists at /robots.txt, does not block Googlebot from important pages, and references sitemap URL",
      "Site loads in under 2.5 seconds (LCP) on mobile - check PageSpeed Insights",
      "Core Web Vitals pass in Google Search Console: LCP under 2.5s, INP under 200ms, CLS under 0.1",
      "No redirect chains - all redirects go directly to final destination in one hop",
      "No 404 errors for linked pages - check Search Console Crawl Stats",
      "Site is mobile-friendly - viewport meta tag present, no tap targets too small",
      "Structured data (schema) present on key pages and passing Google Rich Results Test",
    ]
  },
  {
    title: "Indexing",
    items: [
      "All important pages are indexed - check Search Console Indexing report",
      "No valuable pages have noindex tags accidentally",
      "No pages with noindex are also in the sitemap (contradiction)",
      "Duplicate content managed with canonical tags or 301 redirects",
      "Thin content pages (under 300 words) are either improved, consolidated, or noindexed",
      "Pagination handled correctly - either paginated URLs or infinite scroll with discrete URLs",
    ]
  },
  {
    title: "On-Page SEO",
    items: [
      "Every page has a unique, descriptive title tag under 60 characters with primary keyword near the start",
      "Every page has a unique meta description 120-155 characters that describes the page accurately",
      "One H1 per page that includes the primary keyword and matches the page title intent",
      "Internal links use descriptive anchor text and connect related pages",
      "Images have descriptive alt text, are compressed, and have explicit width and height attributes",
      "Open Graph tags (og:title, og:description, og:image at 1200x630px) on all key pages",
    ]
  },
  {
    title: "Off-Page SEO",
    items: [
      "Backlink profile reviewed for spammy or unnatural links using Ahrefs or Semrush",
      "No manual actions in Google Search Console under Security and Manual Actions",
      "Brand mentions and citations consistent (NAP consistency for local businesses)",
    ]
  },
];
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"Article","headline":"SEO Audit Checklist: 25 Checks to Run on Any Website","description":"A complete SEO audit checklist covering technical, on-page, and off-page factors. Run these 25 checks to find what is hurting your rankings and get a prioritized fix list.","url":"https://sitemapfixer.com/learn/seo-audit-checklist","author":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com"},"publisher":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com","logo":{"@type":"ImageObject","url":"https://sitemapfixer.com/opengraph-image"}},"datePublished":"2025-01-15","mainEntityOfPage":{"@type":"WebPage","@id":"https://sitemapfixer.com/learn/seo-audit-checklist"}}' }} />
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>SEO Audit Checklist</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>SEO Audit Checklist: 25 Checks for Any Website</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Run 12 of these checks automatically - free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Site Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        <p style={{ marginBottom: 32 }}>Use this checklist when auditing a new site, after a migration, or quarterly to catch regressions. Work through Technical SEO first - a site with broken crawling or indexing needs that fixed before on-page or content work has any impact.</p>
        {categories.map(({ title, items }) => (
          <div key={title} style={{ marginBottom: 40 }}>
            <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>{title}</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {items.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 16px', background: '#f8f8fc', borderRadius: 8, border: '1px solid #e4e4ed', alignItems: 'flex-start' }}>
                  <div style={{ width: 20, height: 20, border: '2px solid #d1d5db', borderRadius: 4, flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontSize: 14, color: '#3d3d4f', lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Automate the technical checks</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>SitemapFixer runs 12 of these checks in 60 seconds - free</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>

        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/learn/technical-seo-checklist" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Technical SEO Checklist 2025</a></li>
            <li><a href="/learn/canonical-tags" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Canonical Tags: How to Use Them Correctly for SEO</a></li>
            <li><a href="/learn/structured-data" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Structured Data & Schema Markup: Complete Guide</a></li>
            <li><a href="/learn/core-web-vitals" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Core Web Vitals: LCP, INP, CLS Explained</a></li>
            <li><a href="/learn/page-speed-optimization" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Page Speed Optimization: Make Your Site Faster</a></li>
          
            <li><a href="/learn/technical-seo-tools" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Technical SEO Tools: Best for Crawling & Auditing</a></li></ul>
        </div>
    </div>
  );
}
