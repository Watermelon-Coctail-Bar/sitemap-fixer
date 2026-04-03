import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'SEO Checklist 2025: Every Task for a Complete Technical and Content Audit | SitemapFixer',
  description: "A complete 2025 SEO checklist covering technical, on-page, content, and off-page factors. Use this to audit any site and prioritize what to fix first.",
  alternates: { canonical: 'https://sitemapfixer.com/blog/seo-checklist-2025' },
  openGraph: { title: 'SEO Checklist 2025: Complete Audit Guide', url: 'https://sitemapfixer.com/blog/seo-checklist-2025', type: 'article' },
};
const categories = [
  { title: "Technical Foundation (Fix First)", items: ["Site loads fully on HTTPS with valid SSL certificate", "HTTP redirects to HTTPS via 301 for all URLs", "Canonical domain (www vs non-www) consistent", "robots.txt accessible and not blocking important pages", "XML sitemap exists, valid, submitted to Google Search Console", "All sitemap URLs return 200 status codes", "No important pages have noindex tags accidentally", "No sitemap/noindex conflicts", "Site loads under 2.5 seconds LCP on mobile", "Core Web Vitals pass in Google Search Console", "Mobile-friendly - viewport tag present, no tap target issues", "No accidental redirect chains (all redirects single-hop)", "No server errors (5xx) in crawl logs"] },
  { title: "Indexing and Crawling", items: ["All important pages indexed (check GSC Pages report)", "Crawl errors investigated and fixed", "Google Search Console Manual Actions checked", "Crawl budget not wasted on faceted navigation, params, or session IDs", "sitemap.xml updated after any URL changes", "lastmod dates accurate in sitemap"] },
  { title: "On-Page SEO", items: ["Unique title tag under 60 chars with keyword on every page", "Unique meta description 120-155 chars on every page", "One H1 per page matching primary keyword", "H2/H3 headings create logical content structure", "Internal links use descriptive keyword anchor text", "All images have descriptive alt text", "No orphan pages (all pages have 3+ internal links)"] },
  { title: "Content Quality", items: ["Content matches search intent for target keywords", "No thin pages under 300 words on indexed pages", "No duplicate or near-duplicate content without canonicals", "Structured data (schema) on key page types", "Open Graph tags on all important pages", "Author attribution and bios on all content"] },
];
export default function Page() {
  return (
    <article style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/blog" style={{ color: '#2d5be3', textDecoration: 'none' }}>Blog</a>{' / '}
        <span>SEO Checklist 2025</span>
      </nav>
      <div style={{ fontSize: 13, color: '#9ca3af', marginBottom: 12 }}>April 2025 · 10 min read</div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, lineHeight: 1.15 }}>SEO Checklist 2025: Complete Audit for Any Website</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Automate the technical checks - free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Site Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        <p style={{ marginBottom: 32 }}>Work through this checklist in order - Technical Foundation items must be fixed before other improvements have full effect. Check off each item as you complete it.</p>
        {categories.map(({ title, items }) => (
          <div key={title} style={{ marginBottom: 40 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>{title}</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {items.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, padding: '10px 14px', background: '#f8f8fc', borderRadius: 8, border: '1px solid #e4e4ed', alignItems: 'flex-start' }}>
                  <div style={{ width: 18, height: 18, border: '2px solid #d1d5db', borderRadius: 4, flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontSize: 14, color: '#3d3d4f', lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Automate the technical checks</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>SitemapFixer checks 13 technical items in 60 seconds - free</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>
    </article>
  );
}
