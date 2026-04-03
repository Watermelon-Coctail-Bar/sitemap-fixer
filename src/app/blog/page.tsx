import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Blog - Sitemap SEO Tips and Guides | SitemapFixer',
  description: 'Expert guides on XML sitemaps, Google indexing, crawl budget, and technical SEO. Free articles from the SitemapFixer team.',
  alternates: { canonical: 'https://sitemapfixer.com/blog' },
};
const POSTS = [
  { slug: 'sitemap-not-working', title: 'Sitemap Not Working? 9 Common Causes and Fixes', desc: 'The most common reasons XML sitemaps fail in Google Search Console and exactly how to fix each one.', date: '2025-04-01', cat: 'Troubleshooting', min: 8 },
  { slug: 'pages-not-indexed-google', title: 'Pages Not Indexed by Google: Complete Fix Guide', desc: 'Every reason Google refuses to index your pages and step-by-step fixes to get your content showing in search.', date: '2025-04-01', cat: 'Indexing', min: 7 },
  { slug: 'submitted-url-not-indexed', title: '"Submitted URL Not Indexed" - What It Means and How to Fix It', desc: 'Seeing this in Search Console? Here is exactly what it means and the proven steps to resolve it.', date: '2025-04-01', cat: 'Indexing', min: 6 },
  { slug: 'crawled-currently-not-indexed', title: '"Crawled - Currently Not Indexed": Causes and Fixes', desc: 'Google crawled your page but chose not to index it. Here is why this happens and how to fix it.', date: '2025-04-01', cat: 'Indexing', min: 6 },
  { slug: 'pages-in-sitemap-not-indexed', title: 'Pages in Sitemap But Not Indexed by Google', desc: 'Your sitemap is correct but Google still will not index those pages. Here are the real reasons.', date: '2025-04-01', cat: 'Indexing', min: 5 },
  { slug: 'sitemap-errors-google-search-console', title: 'Sitemap Errors in Google Search Console: Complete Fix Guide', desc: 'Every sitemap error type in Search Console and exactly how to fix each one fast.', date: '2025-04-01', cat: 'Troubleshooting', min: 7 },
  { slug: 'google-not-crawling-my-site', title: 'Google Not Crawling My Site: How to Fix It', desc: 'All the reasons Googlebot stops crawling your site and the exact steps to fix each one.', date: '2025-04-01', cat: 'Crawling', min: 6 },
  { slug: 'sitemap-checker', title: 'Sitemap Checker: How to Validate and Fix Your XML Sitemap', desc: 'How to use a sitemap checker, what issues it finds, and how to fix every common error.', date: '2025-04-01', cat: 'Tools', min: 5 },
  { slug: 'sitemap-validator', title: 'Sitemap Validator: Check Your XML Sitemap for Errors', desc: 'How to validate your XML sitemap meets Google standards and fix every validation error.', date: '2025-04-01', cat: 'Tools', min: 5 },
  { slug: 'google-search-console-sitemap', title: 'Google Search Console Sitemap: Submit, Monitor, and Fix', desc: 'How to submit your sitemap in Search Console, read the report, and fix common issues.', date: '2025-04-01', cat: 'Search Console', min: 6 },
];
const CAT_COLORS: Record<string, string> = {
  'Troubleshooting': '#fef3c7',
  'Indexing': '#ede9fe',
  'Crawling': '#dcfce7',
  'Tools': '#dbeafe',
  'Search Console': '#fce7f3',
};
const CAT_TEXT: Record<string, string> = {
  'Troubleshooting': '#92400e',
  'Indexing': '#5b21b6',
  'Crawling': '#166534',
  'Tools': '#1e40af',
  'Search Console': '#9d174d',
};
export default function BlogIndex() {
  return (
    <div style={{ minHeight: '100vh', background: '#fafaf9' }}>
      {/* Nav */}
      <nav style={{ borderBottom: '1px solid #e4e4ed', background: 'rgba(250,250,249,0.9)', backdropFilter: 'blur(12px)', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect width="28" height="28" rx="7" fill="#0a0a0f"/><path d="M7 9h14M7 14h10M7 19h12" stroke="white" strokeWidth="2" strokeLinecap="round"/><circle cx="21" cy="19" r="3" fill="#2d5be3"/></svg>
            <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: 20, color: '#0a0a0f' }}>SitemapFixer</span>
          </a>
          <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
            <a href="/learn" style={{ fontSize: 13, color: '#6b7280', textDecoration: 'none' }}>Learn</a>
            <a href="/blog" style={{ fontSize: 13, color: '#0a0a0f', fontWeight: 600, textDecoration: 'none' }}>Blog</a>
            <a href="/pricing" style={{ fontSize: 13, color: 'white', background: '#2d5be3', padding: '6px 14px', borderRadius: 8, textDecoration: 'none', fontWeight: 600 }}>Pricing</a>
          </div>
        </div>
      </nav>
      <div style={{ maxWidth: 960, margin: '0 auto', padding: '60px 24px' }}>
        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ fontSize: 13, color: '#2d5be3', fontWeight: 600, marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Blog</div>
          <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 48, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.1 }}>Sitemap SEO insights</h1>
          <p style={{ fontSize: 18, color: '#6b7280', maxWidth: 560 }}>Expert guides on XML sitemaps, Google indexing, crawl budget, and technical SEO. Written by the SitemapFixer team.</p>
        </div>
        {/* Featured post */}
        <a href={'/learn/' + POSTS[0].slug} style={{ display: 'block', textDecoration: 'none', background: 'white', border: '1px solid #e4e4ed', borderRadius: 20, padding: '40px', marginBottom: 32, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'linear-gradient(90deg, #2d5be3, #7c3aed)' }} />
          <div style={{ display: 'inline-block', background: CAT_COLORS[POSTS[0].cat], color: CAT_TEXT[POSTS[0].cat], fontSize: 12, fontWeight: 700, padding: '3px 10px', borderRadius: 6, marginBottom: 16 }}>{POSTS[0].cat}</div>
          <div style={{ fontSize: 11, color: '#9ca3af', marginBottom: 8 }}>FEATURED</div>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: '#0a0a0f', marginBottom: 12, lineHeight: 1.25 }}>{POSTS[0].title}</h2>
          <p style={{ fontSize: 16, color: '#6b7280', lineHeight: 1.6, marginBottom: 20 }}>{POSTS[0].desc}</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 13, color: '#9ca3af' }}>
            <span>{POSTS[0].date}</span>
            <span>{POSTS[0].min} min read</span>
            <span style={{ color: '#2d5be3', fontWeight: 600 }}>Read article →</span>
          </div>
        </a>
        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {POSTS.slice(1).map(post => (
            <a key={post.slug} href={'/learn/' + post.slug} style={{ display: 'block', textDecoration: 'none', background: 'white', border: '1px solid #e4e4ed', borderRadius: 16, padding: '28px', transition: 'border-color 0.15s, box-shadow 0.15s' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
                <span style={{ display: 'inline-block', background: CAT_COLORS[post.cat], color: CAT_TEXT[post.cat], fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 4 }}>{post.cat}</span>
                <span style={{ fontSize: 12, color: '#9ca3af' }}>{post.min}m</span>
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#0a0a0f', marginBottom: 10, lineHeight: 1.4 }}>{post.title}</h3>
              <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.55 }}>{post.desc}</p>
              <div style={{ fontSize: 12, color: '#2d5be3', fontWeight: 600, marginTop: 16 }}>Read more →</div>
            </a>
          ))}
        </div>
        {/* CTA */}
        <div style={{ background: '#0a0a0f', borderRadius: 20, padding: '48px', textAlign: 'center', marginTop: 60 }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 32, color: 'white', marginBottom: 12 }}>Put it into practice</h2>
          <p style={{ fontSize: 16, color: '#9ca3af', marginBottom: 28 }}>Analyze your sitemap free. Get AI-powered fixes in 60 seconds.</p>
          <a href="/" style={{ display: 'inline-block', background: 'white', color: '#0a0a0f', padding: '14px 32px', borderRadius: 10, textDecoration: 'none', fontWeight: 700, fontSize: 15 }}>Analyze My Sitemap Free</a>
        </div>
      </div>
    </div>
  );
}
