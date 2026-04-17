import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'HTTPS Migration: Switch Without Losing Rankings',
  description: "Migrating from HTTP to HTTPS is SEO-critical. Do it wrong and you lose rankings. The step-by-step HTTPS migration process that preserves traffic.",
  alternates: { canonical: 'https://sitemapfixer.com/blog/https-migration-guide' },
  openGraph: {
    title: 'HTTPS Migration: Switch Without Losing Rankings',
    description: 'Migrating from HTTP to HTTPS is an SEO-critical change. The step-by-step HTTPS migration process that preserves your organic traffic.',
    url: 'https://sitemapfixer.com/blog/https-migration-guide',
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
  { t: "Get and install your SSL certificate", d: "Most hosting providers offer free SSL via Let's Encrypt - enable it in your hosting control panel with one click. After installation, verify your site loads correctly at https:// before making any other changes. Test on multiple pages and check Chrome's padlock icon shows secure." },
  { t: "Set up 301 redirects from HTTP to HTTPS", d: "Configure your server to 301 redirect all HTTP requests to HTTPS. In Apache: add RewriteEngine On, RewriteCond %{'HTTPS'} off, RewriteRule ^(.*)$ https://%{'HTTP_HOST'}%{'REQUEST_URI'} [L,R=301] to .htaccess. In Nginx: add a server block for port 80 that redirects to https://. In Next.js or Vercel: HTTPS is enforced automatically." },
  { t: "Update all internal links and resources", d: "Change all hardcoded http:// internal links in your content, templates, and database to https://. Mixed content occurs when an HTTPS page loads HTTP resources - browsers block this and show security warnings. Find mixed content using Chrome DevTools Console or the Why No Padlock tool." },
  { t: "Update canonical tags and sitemap", d: "Update all canonical tags to use https:// URLs. Update your sitemap.xml to contain only https:// URLs. Submit the updated sitemap in Google Search Console. Your sitemap must not contain any http:// URLs after migration." },
  { t: "Update Google Search Console and Analytics", d: "Add your HTTPS property to Google Search Console - it is treated as a separate property from HTTP. Set the preferred domain. In Google Analytics: update the default URL to https://. Update any external tools referencing your old HTTP domain." },
  { t: "Monitor for issues post-migration", d: "Watch Google Search Console Coverage report for new crawl errors in the week after migration. Monitor organic traffic in Google Analytics for any drops. A small temporary fluctuation is normal during the migration period but should recover within 2-4 weeks as Google reindexes all your HTTPS URLs." },
];
export default function Page() {
  return (
    <article style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/blog" style={{ color: '#2d5be3', textDecoration: 'none' }}>Blog</a>{' / '}
        <span>HTTPS Migration Guide</span>
      </nav>
      <div style={{ fontSize: 13, color: '#9ca3af', marginBottom: 12 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"Article","headline":"HTTPS Migration: Switch Without Losing Rankings","description":"Migrating from HTTP to HTTPS is an SEO-critical change. The step-by-step HTTPS migration process that preserves your organic traffic.","url":"https://sitemapfixer.com/blog/https-migration-guide","author":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com"},"publisher":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com","logo":{"@type":"ImageObject","url":"https://sitemapfixer.com/opengraph-image"}},"datePublished":"2025-01-15","mainEntityOfPage":{"@type":"WebPage","@id":"https://sitemapfixer.com/blog/https-migration-guide"}}' }} />April 2025 · 7 min read</div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, lineHeight: 1.15 }}>HTTPS Migration Guide: Move to SSL Without Losing Rankings</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Validate your HTTPS sitemap configuration free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Sitemap Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        {steps.map(({ t, d }) => (
          <div key={t} style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12 }}>{t}</h2>
            <p style={{ margin: 0 }}>{d}</p>
          </div>
        ))}
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Validate your HTTPS sitemap after migration</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free - checks all URLs for HTTP vs HTTPS consistency</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Sitemap Free</a>
  
        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/blog/javascript-seo-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>JavaScript SEO: Make JS Sites Crawlable</a></li>
            <li><a href="/blog/redirect-seo-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Redirect SEO: 301 vs 302 & Best Practices</a></li>
            <li><a href="/blog/crawl-budget-seo-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Crawl Budget SEO: Stop Wasting Crawls on Bad Pages</a></li>
            <li><a href="/blog/crawl-budget-optimization" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Crawl Budget Optimization: Get More Crawl Value</a></li>
            <li><a href="/blog/pagination-seo-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Pagination SEO: Handle Page 2, 3, 4 Right</a></li>
          
            <li><a href="/learn/https-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>HTTPS SEO: Why It Matters and How to Migrate Correctly</a></li>
            <li><a href="/learn/ssl-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>SSL Certificates and SEO: What You Need to Know</a></li></ul>
        </div>
    </div>
    </article>
  );
}
