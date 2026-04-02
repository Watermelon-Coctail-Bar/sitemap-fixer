import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Technical SEO Audit Guide: How to Find and Fix Every Technical Issue | SitemapFixer',
  description: "A technical SEO audit finds the issues preventing your site from ranking. Here is a step-by-step process covering crawlability, indexing, speed, and structured data.",
  alternates: { canonical: 'https://sitemapfixer.com/blog/technical-seo-audit-guide' },
};
const steps = [
  { t: "Step 1: Check crawlability", d: "Start with robots.txt at yoursite.com/robots.txt. Verify it is not blocking important pages. Check Google Search Console under Settings then Crawl Stats to see how many pages Googlebot crawled and what response codes it received. A high percentage of 4xx or 5xx responses indicates crawl errors requiring investigation. Use the URL Inspection tool on your most important pages to confirm Googlebot can access them." },
  { t: "Step 2: Audit indexing", d: "In Google Search Console, go to Indexing then Pages. Review each non-indexed category: Crawled not indexed (content quality issue), Duplicate without canonical (canonicalization problem), Blocked by robots.txt (crawl blocking), and noindex tag (intentional or accidental exclusion). Compare the number of indexed pages to your total published pages. A significant gap indicates indexing problems." },
  { t: "Step 3: Fix redirect chains and broken links", d: "Use Screaming Frog or a similar crawler to crawl your site and identify: 404 pages, redirect chains (A redirects to B which redirects to C — consolidate to direct), redirect loops, and pages with too many redirects. Export all 3xx and 4xx response codes and fix them systematically. Every broken link wastes crawl budget and every redirect chain loses a small amount of PageRank." },
  { t: "Step 4: Check canonical tags", d: "Export all canonical tags from your crawl and verify: every page has a canonical tag, all canonicals are self-referencing or point to the correct canonical URL, no pages have canonicals pointing to different domains (common after migrations), and paginated pages use self-referencing canonicals rather than pointing to page 1." },
  { t: "Step 5: Validate structured data", d: "Use Google Rich Results Test on your key page templates to verify schema markup is valid. Check Google Search Console under Enhancements for any structured data errors. Fix invalid schema before worrying about adding new schema types. Common issues: missing required properties, incorrect types, and URL format mismatches." },
  { t: "Step 6: Measure Core Web Vitals", d: "Check Google Search Console Core Web Vitals report for field data on your actual pages. Run PageSpeed Insights on your homepage, a key blog post, and a product or landing page. Identify the LCP element and whether it is being preloaded, check for CLS by using Chrome DevTools Layout Shift Regions, and look for INP issues using the Performance panel with interactions recorded." },
];
export default function Page() {
  return (
    <article style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/blog" style={{ color: '#2d5be3', textDecoration: 'none' }}>Blog</a>{' / '}
        <span>Technical SEO Audit Guide</span>
      </nav>
      <div style={{ fontSize: 13, color: '#9ca3af', marginBottom: 12 }}>April 2025 · 10 min read</div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, lineHeight: 1.15 }}>Technical SEO Audit Guide: Find Every Issue in 6 Steps</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Automate steps 1-2 free with SitemapFixer</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Site Free</a>
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
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Start your technical SEO audit free</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Automates steps 1 and 2 — free in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>
    </article>
  );
}
