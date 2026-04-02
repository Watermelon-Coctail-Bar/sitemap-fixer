import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'WordPress SEO: Complete Optimization Guide for 2025 | SitemapFixer',
  description: "Everything you need to optimize a WordPress site for SEO — the right plugins, permalink structure, image optimization, speed, and common mistakes to avoid.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/wordpress-seo' },
};
const sections = [
  { h: "Choose One SEO Plugin and Stick With It", d: "WordPress SEO is heavily plugin-dependent. Yoast SEO and RankMath are the two dominant options — both are excellent and either will handle sitemap generation, meta tags, canonical URLs, schema markup, and breadcrumbs. Do not install both. Having two active SEO plugins creates conflicts and duplicate meta tags. Yoast is more established with a larger support community; RankMath is newer with a more generous free tier that includes keyword tracking and schema support without a premium upgrade." },
  { h: "Permalinks: Set This First", d: "WordPress default permalinks (?p=123) are terrible for SEO. Go to Settings, then Permalinks, and switch to Post name (/%postname%/). Do this before you publish any content — changing permalink structure later requires 301 redirects for every existing URL. The Post name structure is clean, human-readable, and gives Google keyword signals from the URL. Avoid date-based structures for evergreen content — they make articles look outdated." },
  { h: "Speed: WordPress-Specific Fixes", d: "WordPress tends to be slow by default due to PHP execution, database queries, and plugin overhead. Key fixes: install a caching plugin (WP Rocket is paid but excellent, W3 Total Cache and WP Super Cache are free), optimize images with ShortPixel or Imagify (auto-compress on upload), use a CDN like Cloudflare (free tier is usually sufficient), and minimize plugins — every active plugin adds PHP processing overhead. Measure with PageSpeed Insights before and after each change." },
  { h: "Common WordPress SEO Mistakes", d: "Tag archives: WordPress creates a separate indexed page for every tag you create. With hundreds of tags, this generates hundreds of thin duplicate pages. Fix: go to Yoast SEO or RankMath settings and noindex tag archives, or use only a small number of meaningful tags. Category SEO: category archive pages often have thin content. Add a description to each category (in Posts, then Categories) to give them unique content. Duplicate homepage: some setups create both yoursite.com and yoursite.com/home as separate pages — ensure the homepage has a canonical tag pointing to your preferred URL." },
  { h: "Content and On-Page SEO in WordPress", d: "Use Yoast or RankMath's content analysis for each post and page. Both plugins show a readability score and SEO score with specific recommendations. Target one primary keyword per page. Write a custom SEO title and meta description for every post — do not rely on the auto-generated defaults, which often truncate badly. Use the block editor (Gutenberg) heading blocks for H2 and H3 structure — these map correctly to HTML heading tags which Google reads for page structure." },
  { h: "WordPress Site Security and SEO", d: "Hacked WordPress sites get flagged in Google Search Console under Security Issues and can receive Manual Actions. Keep WordPress core, themes, and plugins updated. Use a security plugin like Wordfence or Sucuri. Disable XML-RPC if you do not need it (a common attack vector). Use strong admin passwords and two-factor authentication. A compromised site can drop completely from search results until cleaned and a reconsideration request is submitted." },
];
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>WordPress SEO</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>WordPress SEO: Complete Optimization Guide</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your WordPress sitemap free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Site Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        {sections.map(({ h, d }) => (
          <div key={h} style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 10 }}>{h}</h2>
            <p style={{ margin: 0 }}>{d}</p>
          </div>
        ))}
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Analyze your WordPress sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free — checks all URLs in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>
    </div>
  );
}
