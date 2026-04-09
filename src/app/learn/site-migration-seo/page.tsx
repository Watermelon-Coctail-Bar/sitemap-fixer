import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Site Migration SEO: Move Without Losing Rankings',
  description: "Site migrations - domain changes, URL restructures, CMS switches - are one of the riskiest SEO operations. Here is the step-by-step process to migrate without losing traffic.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/site-migration-seo' },
  openGraph: {
    title: 'Site Migration SEO: Move Without Losing Rankings',
    description: 'Site migrations - domain changes, URL restructures, CMS switches - are one of the riskiest SEO operations. Here is the step-by-step process to migrate without losing traffic.',
    url: 'https://sitemapfixer.com/learn/site-migration-seo',
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
const steps = [
  { n: "1", t: "Crawl the current site before touching anything", d: "Use Screaming Frog or a similar crawler to generate a complete list of all current URLs, their titles, meta descriptions, H1s, and canonical tags. Export your full sitemap. Check Google Search Console for your top-performing pages by clicks and impressions. This baseline is essential - you cannot confirm a successful migration without it." },
  { n: "2", t: "Map every old URL to its new URL", d: "Create a spreadsheet with every old URL and its corresponding new URL. For domain migrations: old.com/page maps to new.com/page. For URL restructures: /old-slug maps to /new-slug. For pages with no direct equivalent, map to the most relevant existing page or to the new homepage as a last resort. Every old URL must have a destination - broken redirects are the most common cause of post-migration traffic loss." },
  { n: "3", t: "Implement 301 redirects before going live", d: "Set up 301 redirects from every old URL to its new destination. Test every redirect before launch. Use a tool like httpstatus.io to verify each old URL returns a 301 with the correct Location header. Never use 302 for a site migration - 302 tells Google the move is temporary and full PageRank transfer does not happen. Redirect chains (old URL to temp URL to new URL) lose equity at each hop - make sure all redirects go directly to the final destination." },
  { n: "4", t: "Update your sitemap immediately", d: "As soon as the new site is live, publish a sitemap.xml containing only the new URLs. Submit it to Google Search Console immediately. Remove the old property from Search Console or leave it to track crawl errors. Submit the new sitemap to Bing Webmaster Tools as well. The updated sitemap signals to Google that the new URLs are the canonical versions." },
  { n: "5", t: "Update internal links", d: "Internal links still pointing to old URLs create redirect hops on every page load and waste crawl budget. Do a database-level find-and-replace to update all internal links to the new URLs. In WordPress, use the Better Search Replace plugin. In a custom CMS, run SQL updates. In static sites, update in source files. Verify no internal links point to old URLs after the update." },
  { n: "6", t: "Monitor for 4 weeks post-migration", d: "Check Google Search Console daily for the first two weeks and weekly for the next two. Watch for: crawl errors on new URLs (configuration issues), drop in indexed pages (redirect problems), sharp traffic drops on specific pages (missed redirects or canonical issues). Most migration traffic drops are temporary - Google typically re-stabilizes within 2-4 weeks as it processes the redirects and re-crawls the new structure." },
];
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Site Migration SEO</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Site Migration SEO: Move Your Website Without Losing Rankings</h1>
      <div style={{ background: '#fff3cd', border: '1px solid #ffc107', borderRadius: 12, padding: '16px 20px', marginBottom: 40 }}>
        <span style={{ fontSize: 14, color: '#856404', fontWeight: 600 }}>Warning: Site migrations are the most common cause of sudden organic traffic loss. Follow every step in order.</span>
      </div>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Validate your new sitemap post-migration</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Check My Sitemap</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        <p style={{ marginBottom: 32 }}>A site migration that goes wrong can cost you 30-70% of organic traffic and take months to recover. Done correctly, a migration should result in less than 5-10% temporary traffic fluctuation that recovers within a month. The difference is preparation and execution.</p>
        {steps.map(({ n, t, d }) => (
          <div key={n} style={{ marginBottom: 36, paddingLeft: 16, borderLeft: '3px solid #2d5be3' }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: '#0a0a0f', marginBottom: 8 }}>Step {n}: {t}</h2>
            <p style={{ margin: 0 }}>{d}</p>
          </div>
        ))}
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Validate your post-migration sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free - checks for redirect issues and missing URLs</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Check My Sitemap Free</a>
      </div>

        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/learn/technical-seo-checklist" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Technical SEO Checklist 2025</a></li>
            <li><a href="/learn/canonical-tags" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Canonical Tags: How to Use Them Correctly for SEO</a></li>
            <li><a href="/learn/structured-data" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Structured Data & Schema Markup: Complete Guide</a></li>
            <li><a href="/learn/core-web-vitals" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Core Web Vitals: LCP, INP, CLS Explained</a></li>
            <li><a href="/learn/page-speed-optimization" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Page Speed Optimization: Make Your Site Faster</a></li>
          </ul>
        </div>
    </div>
  );
}
