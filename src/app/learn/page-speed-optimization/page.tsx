import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Page Speed Optimization: How to Make Your Website Faster | SitemapFixer',
  description: 'Learn proven techniques to speed up your website. Images, caching, JavaScript, CSS — complete guide to page speed optimization for SEO.',
  alternates: { canonical: 'https://sitemapfixer.com/learn/page-speed-optimization' },
};
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Page Speed Optimization</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Page Speed Optimization: How to Make Your Website Faster</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Analyze your site performance free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Try SitemapFixer Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8 }}>
        <p style={{ marginBottom: 20 }}>Page speed is a direct Google ranking factor and has a massive impact on conversion rates. A one-second delay in load time can reduce conversions by 7%. Fast sites rank higher, convert better, and provide a better user experience across all devices.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>Image Optimization</h2>
        <p style={{ marginBottom: 20 }}>Images are typically the largest assets on a webpage. Use modern formats — WebP reduces file size by 25-35% versus JPEG with no perceptible quality loss. AVIF reduces it further still. Always set explicit width and height attributes to prevent layout shift. Use lazy loading on below-the-fold images with loading="lazy". Serve responsive images using srcset so mobile users do not download desktop-sized images. Compress images before upload using tools like Squoosh or ImageOptim.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>JavaScript Optimization</h2>
        <p style={{ marginBottom: 20 }}>JavaScript is the biggest cause of slow interactivity. Defer non-critical scripts with the defer attribute so they do not block HTML parsing. Use async for scripts that do not depend on DOM readiness. Split your JavaScript bundle so users only download code needed for the current page. Remove unused JavaScript — unused code still has to be parsed by the browser. Avoid long tasks over 50ms that block the main thread and hurt INP scores.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>CSS Optimization</h2>
        <p style={{ marginBottom: 20 }}>Minimize render-blocking CSS by inlining critical above-the-fold styles and loading the full stylesheet asynchronously. Remove unused CSS — large stylesheets slow down style calculation. Avoid CSS animations that trigger layout recalculation; use transform and opacity instead which are GPU-accelerated and do not affect layout.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>Server and Caching</h2>
        <p style={{ marginBottom: 20 }}>Use a CDN to serve static assets from servers geographically close to your users. Enable browser caching with Cache-Control headers so repeat visitors do not re-download unchanged files. Use HTTP/2 or HTTP/3 for multiplexed requests. Optimize Time to First Byte (TTFB) by upgrading your hosting, enabling server-side caching, and reducing server-side processing time. For Next.js sites like those on Vercel, edge caching handles most of this automatically.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>Fonts</h2>
        <p style={{ marginBottom: 20 }}>Web fonts cause invisible text while loading. Use font-display: swap to show fallback text immediately, or font-display: optional to skip loading if slow. Preload your most important font files. Limit yourself to 2 font families maximum. Self-host fonts rather than loading from Google Fonts to avoid an extra DNS lookup.</p>
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Analyze your full technical SEO</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free sitemap and performance analysis</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>
      <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
        <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Related guides</div>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <li><a href="/learn/core-web-vitals" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Core Web Vitals</a></li>
          <li><a href="/learn/technical-seo-checklist" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Technical SEO Checklist</a></li>
        </ul>
      </div>
    </div>
  );
}
