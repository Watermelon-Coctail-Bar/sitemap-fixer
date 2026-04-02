import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Page Speed Improvement: 10 Quick Wins That Actually Make a Difference | SitemapFixer',
  description: "Most page speed guides suggest everything. Here are the 10 changes that have the highest impact for the least effort, ranked by ROI.",
  alternates: { canonical: 'https://sitemapfixer.com/blog/page-speed-improvement' },
  openGraph: { title: 'Page Speed Improvement: 10 High-Impact Quick Wins', url: 'https://sitemapfixer.com/blog/page-speed-improvement', type: 'article' },
};
const wins = [
  { n: "1", t: "Add explicit width and height to all images", d: "Zero performance benefit but eliminates CLS (layout shift) on almost every site. Add width and height attributes to every img tag. Takes 30 minutes. Fixes a Core Web Vital immediately." },
  { n: "2", t: "Add fetchpriority=high to your LCP image", d: "The single most impactful LCP fix for image-heavy pages. Add fetchpriority='high' to the img tag for your hero or largest above-fold image. Tells the browser to prioritize this image download. Takes 5 minutes." },
  { n: "3", t: "Add loading=lazy to below-fold images", d: "Defers loading of images not visible in the initial viewport. Reduces initial page weight significantly on image-heavy pages. Add loading='lazy' to all img tags except your hero image. Takes 15 minutes." },
  { n: "4", t: "Convert images to WebP", d: "WebP is 25-35% smaller than JPEG at equivalent quality. Use Squoosh or ShortPixel to batch convert. Update img src references. For new images, configure your image pipeline to output WebP automatically." },
  { n: "5", t: "Enable server-side caching", d: "If your pages are dynamically generated on every request, caching the output reduces server response time dramatically. In WordPress: install WP Super Cache or W3 Total Cache. On Nginx: enable fastcgi_cache. On Vercel: use appropriate cache-control headers." },
  { n: "6", t: "Add a CDN", d: "Cloudflare free tier is the fastest ROI in web performance. Sign up, change nameservers, and your static assets are served from edge nodes near your users. Reduces TTFB for international visitors and most static assets." },
  { n: "7", t: "Defer non-critical JavaScript", d: "Add defer attribute to script tags that are not needed for initial render. Google Tag Manager, analytics, chat widgets, and A/B testing scripts are prime candidates. Each deferred script reduces render-blocking time." },
  { n: "8", t: "Preload your LCP image", d: "Add link rel=preload as=image href=/hero-image.webp in your HTML head. The browser fetches this resource immediately during HTML parsing, before it discovers it during render tree construction. Shaves 200-500ms from LCP." },
  { n: "9", t: "Remove unused CSS and JavaScript", d: "Use Chrome DevTools Coverage tab to see which CSS and JS is unused on each page. Remove or defer unused styles and scripts. Even removing 50KB of unused CSS can improve render time noticeably." },
  { n: "10", t: "Reduce server response time (TTFB)", d: "LCP cannot start until your server sends the first byte of HTML. Target under 200ms TTFB. Measure with PageSpeed Insights. If TTFB is slow, focus on caching, database query optimization, and server upgrade before any frontend optimization." },
];
export default function Page() {
  return (
    <article style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/blog" style={{ color: '#2d5be3', textDecoration: 'none' }}>Blog</a>{' / '}
        <span>Page Speed Improvement</span>
      </nav>
      <div style={{ fontSize: 13, color: '#9ca3af', marginBottom: 12 }}>April 2025 · 8 min read</div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, lineHeight: 1.15 }}>Page Speed Improvement: 10 Quick Wins That Actually Matter</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your site performance free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Site Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        {wins.map(({ n, t, d }) => (
          <div key={n} style={{ marginBottom: 32, paddingLeft: 16, borderLeft: '3px solid #2d5be3' }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: '#0a0a0f', marginBottom: 8 }}>{n}. {t}</h2>
            <p style={{ margin: 0 }}>{d}</p>
          </div>
        ))}
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Check your site speed and SEO</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>
    </article>
  );
}
