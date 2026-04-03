import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Page Speed Improvement: 10 Quick Wins to Boost Core Web Vitals | SitemapFixer',
  description: "Slow pages lose rankings and visitors. These 10 page speed improvements are ranked by ROI - biggest impact with least effort first.",
  alternates: { canonical: 'https://sitemapfixer.com/blog/page-speed-improvement' },
};
const wins = [
  { n:"1", t:"Compress images and use WebP", d:"Images are the single biggest cause of slow pages. Convert all images to WebP format - 25-35% smaller than JPEG at equivalent quality. Use Squoosh, TinyPNG, or ImageOptim. Always set explicit width and height attributes on every img tag to prevent layout shift. In Next.js, the built-in Image component handles compression, WebP conversion, and dimensions automatically." },
  { n:"2", t:"Enable server-side caching", d:"If your server rebuilds pages on every request, add a caching layer immediately. WordPress: WP Rocket or W3 Total Cache. Next.js: use ISR (Incremental Static Regeneration) or full static generation. A cached page responds in under 100ms; an uncached server render can take 1-3 seconds, directly causing poor LCP scores." },
  { n:"3", t:"Add a CDN", d:"A CDN (Content Delivery Network) serves your static assets from servers geographically close to your users. Cloudflare free tier works for most sites and is configured in minutes. Vercel, Netlify, and most modern hosts include global CDN by default. This single change can cut load times in half for users far from your origin server." },
  { n:"4", t:"Defer non-critical JavaScript", d:"Add defer or async attributes to all script tags not needed for the initial render. Move third-party scripts - analytics, chat widgets, A/B testing tools - to load after the page becomes interactive. A single undeferred 200KB JavaScript file can delay your LCP by 2-3 full seconds on mobile connections." },
  { n:"5", t:"Preload the LCP image", d:"Add link rel=preload as=image href=your-hero-image.webp fetchpriority=high to your page head. This instructs the browser to fetch the LCP image immediately rather than waiting until the CSS or HTML references it. Most sites see LCP improvements of 300-800ms from this single change." },
  { n:"6", t:"Add dimensions to all images and embeds", d:"Every image or embed without explicit width and height attributes causes layout shift (CLS) when it loads and pushes content down. Set width and height on all img tags, video embeds, and iframes. This is a 15-minute fix across your templates and typically resolves CLS completely for most sites." },
  { n:"7", t:"Remove unused CSS and JavaScript", d:"Open Chrome DevTools, go to the Coverage panel, reload your page, and look for red sections indicating unused code. Many WordPress themes load CSS for sliders, carousels, and widgets that are not present on every page. Remove or conditionally load these assets to reduce parse and execution time." },
  { n:"8", t:"Preload critical web fonts", d:"Web fonts cause Flash of Unstyled Text (FOUT) and layout shift when the font loads after text is already rendered. Add link rel=preload as=font to your critical font files and use font-display: optional in your CSS to prevent the layout-shifting font swap entirely." },
  { n:"9", t:"Enable HTTP/2 or HTTP/3", d:"HTTP/2 multiplexes requests - your browser can load many assets in parallel rather than queuing them sequentially. Check the Protocol column in Chrome DevTools Network tab. If you see http/1.1 for your assets, ask your hosting provider to enable HTTP/2, which is supported by virtually all modern hosts." },
  { n:"10", t:"Lazy load below-fold images", d:"Add loading=lazy to all images not visible on the initial viewport. This defers loading until the user scrolls near the image, significantly reducing initial page weight. Critically, do not add loading=lazy to images that are above the fold - it will delay your LCP image and hurt your score." },
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
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, lineHeight: 1.15 }}>Page Speed Improvement: 10 Quick Wins Ranked by ROI</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your Core Web Vitals free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Site Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        {wins.map(({ n, t, d }) => (
          <div key={n} style={{ marginBottom: 32, borderLeft: '3px solid #e4e4ed', paddingLeft: 16 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: '#0a0a0f', margin: '0 0 8px' }}>{n}. {t}</h2>
            <p style={{ margin: 0 }}>{d}</p>
          </div>
        ))}
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Check your site speed</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free Core Web Vitals analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>
    </article>
  );
}
