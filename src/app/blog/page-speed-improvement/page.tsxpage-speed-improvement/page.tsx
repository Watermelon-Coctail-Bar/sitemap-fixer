import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Page Speed Improvement: 10 Quick Wins Ranked by Impact | SitemapFixer',
  description: "These 10 page speed improvements deliver the best results for the least effort. Ranked by impact so you know exactly where to start.",
  alternates: { canonical: 'https://sitemapfixer.com/blog/page-speed-improvement' },
  openGraph: { title: 'Page Speed Improvement: 10 Quick Wins', url: 'https://sitemapfixer.com/blog/page-speed-improvement', type: 'article' },
};
const wins = [
  { rank: "1", impact: "Very High", t: "Compress and convert images to WebP", d: "Images are the single largest contributor to slow page loads on most sites. Convert all JPEGs and PNGs to WebP format - average 30% smaller file sizes with identical visual quality. Use Squoosh.app free or install an image optimizer plugin. In Next.js, the Image component handles this automatically. Target under 100KB for body images, under 200KB for hero images." },
  { rank: "2", impact: "Very High", t: "Add explicit width and height to images", d: "Beyond compression, images without width and height attributes cause Cumulative Layout Shift (CLS) as well as slower perceived loading because the browser cannot reserve space. Add width and height to every img tag. This costs nothing and fixes both CLS and layout rendering speed simultaneously." },
  { rank: "3", impact: "High", t: "Enable server-side caching", d: "Without caching, every page request regenerates the HTML from scratch. Enable a page caching plugin (WordPress: WP Rocket, W3 Total Cache) or configure your server to send Cache-Control headers. Cached pages can load 5-10x faster for repeat visitors and significantly reduce server load during traffic spikes." },
  { rank: "4", impact: "High", t: "Use a CDN", d: "A Content Delivery Network serves your static assets (images, CSS, JS) from servers geographically close to your visitors. Even a free tier CDN (Cloudflare free plan) can meaningfully improve load times for international visitors and reduce your origin server bandwidth. Essential for any site with global traffic." },
  { rank: "5", impact: "High", t: "Defer non-critical JavaScript", d: "JavaScript that loads in the head blocks page rendering. Add defer or async attributes to all non-critical script tags. In WordPress, use a plugin that moves scripts to footer. Identify which scripts are blocking render using Chrome DevTools Coverage tab - unused and render-blocking scripts are your priority targets." },
  { rank: "6", impact: "Medium", t: "Preload your LCP image", d: "Add link rel=preload as=image to the head for your above-the-fold hero image. This tells the browser to fetch it immediately rather than waiting to discover it during HTML parsing. Combined with fetchpriority=high on the img tag itself, this can reduce LCP by 20-30% on image-heavy pages." },
  { rank: "7", impact: "Medium", t: "Minify CSS and JavaScript", d: "Minification removes whitespace, comments, and renames variables to reduce file sizes 10-30%. Most build tools (webpack, Vite, Next.js) handle this automatically in production builds. In WordPress, use a caching plugin that includes minification. Verify minification is active with PageSpeed Insights - it flags unminified resources explicitly." },
  { rank: "8", impact: "Medium", t: "Eliminate render-blocking resources", d: "CSS files in the head that are not used above the fold block rendering. Inline critical CSS (the styles needed for above-the-fold content) directly in the head and load the full stylesheet asynchronously using link rel=preload as=style with onload. Tools like Critical or Penthouse extract critical CSS automatically." },
  { rank: "9", impact: "Medium", t: "Reduce unused CSS and JS", d: "Most sites ship significantly more CSS and JS than any single page needs. Use Chrome DevTools Coverage tab to see exactly how much code is unused per page. Remove unused CSS with PurgeCSS. Code-split JavaScript to only load what each page needs. In Next.js, code splitting is automatic - verify your bundle sizes with next/bundle-analyzer." },
  { rank: "10", impact: "Lower but cumulative", t: "Use font-display: swap and preload web fonts", d: "Web fonts that block text rendering cause Flash of Invisible Text (FOIT). Add font-display: swap to your @font-face rules so text shows in a fallback font immediately while the web font loads. Preload your most critical font file: link rel=preload as=font type=font/woff2 crossorigin. Together these eliminate font-related layout shifts and invisible text during load." },
];
export default function Page() {
  const impactColor: Record<string, string> = { 'Very High': '#166534', 'High': '#1e40af', 'Medium': '#92400e', 'Lower but cumulative': '#6b7280' };
  const impactBg: Record<string, string> = { 'Very High': '#dcfce7', 'High': '#dbeafe', 'Medium': '#fef3c7', 'Lower but cumulative': '#f3f4f6' };
  return (
    <article style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/blog" style={{ color: '#2d5be3', textDecoration: 'none' }}>Blog</a>{' / '}
        <span>Page Speed Improvement</span>
      </nav>
      <div style={{ fontSize: 13, color: '#9ca3af', marginBottom: 12 }}>April 2025 · 9 min read</div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, lineHeight: 1.15 }}>Page Speed Improvement: 10 Quick Wins Ranked by Impact</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your site speed issues free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Site Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        {wins.map(({ rank, impact, t, d }) => (
          <div key={rank} style={{ marginBottom: 32, display: 'flex', gap: 16 }}>
            <div style={{ flexShrink: 0, width: 32, height: 32, background: '#0a0a0f', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 14, marginTop: 2 }}>{rank}</div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                <h2 style={{ fontSize: 20, fontWeight: 700, color: '#0a0a0f', margin: 0 }}>{t}</h2>
                <span style={{ background: impactBg[impact], color: impactColor[impact], fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 20, flexShrink: 0 }}>{impact}</span>
              </div>
              <p style={{ margin: 0, fontSize: 15 }}>{d}</p>
            </div>
          </div>
        ))}
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Find your biggest speed issues</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>
    </article>
  );
}
