import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Site Speed SEO: How Page Speed Affects Rankings and How to Fix It | SitemapFixer',
  description: "Page speed is a confirmed Google ranking factor. Here is which speed metrics matter for SEO, how to measure them, and the highest-impact fixes for each.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/site-speed-seo' },
};
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Site Speed SEO</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Site Speed SEO: What Matters, How to Measure It, and How to Fix It</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your site for performance issues</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Site Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        <p style={{ marginBottom: 24 }}>Page speed has been a Google ranking factor since 2010 for desktop and since 2018 for mobile. In 2021, Google introduced Core Web Vitals as the primary speed metrics it uses for ranking. Speed affects SEO both directly (as a ranking signal) and indirectly (slow sites have higher bounce rates, which reduces user engagement signals).</p>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>The Three Core Web Vitals That Affect Rankings</h2>
        <p style={{ marginBottom: 12 }}><strong>LCP (Largest Contentful Paint):</strong> How long until the largest visible element loads. Target: under 2.5 seconds. This is usually a hero image or above-fold heading. Fix by optimizing images (WebP, lazy loading, explicit dimensions), preloading the LCP resource, and eliminating render-blocking resources.</p>
        <p style={{ marginBottom: 12 }}><strong>INP (Interaction to Next Paint):</strong> How quickly the page responds to user interactions like clicks and key presses. Target: under 200ms. Fix by reducing JavaScript execution time, breaking up long tasks, and deferring non-critical JS.</p>
        <p style={{ marginBottom: 24 }}><strong>CLS (Cumulative Layout Shift):</strong> How much page elements unexpectedly shift during load. Target: under 0.1. Fix by setting explicit width and height on all images and embeds, not injecting content above existing content, and using CSS transform for animations instead of properties that trigger layout recalculation.</p>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>How to Measure Page Speed for SEO</h2>
        <p style={{ marginBottom: 24 }}>Use PageSpeed Insights (pagespeed.web.dev) for lab data on specific pages. Use Google Search Console under Experience, then Core Web Vitals for real-user field data across your entire site. Field data represents actual user experiences and is what Google uses for ranking. Lab data is useful for debugging specific issues but may differ from field data due to real-world variance in devices, networks, and caching.</p>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Highest-Impact Speed Fixes</h2>
        <p style={{ marginBottom: 12 }}><strong>Compress and resize images:</strong> Images are the most common cause of slow LCP. Use WebP or AVIF format, compress to the display size (not original resolution), and add loading="lazy" to below-fold images. A single uncompressed hero image can add 2-3 seconds to LCP.</p>
        <p style={{ marginBottom: 12 }}><strong>Use a CDN:</strong> A content delivery network serves assets from data centers close to your users, reducing latency. Most hosting platforms include a CDN. For custom setups, Cloudflare provides a free CDN tier.</p>
        <p style={{ marginBottom: 12 }}><strong>Defer non-critical JavaScript:</strong> Add defer or async attribute to script tags that are not needed for the initial page render. Blocking JavaScript delays the browser from rendering the page.</p>
        <p style={{ marginBottom: 24 }}><strong>Enable caching:</strong> Set Cache-Control headers to allow browsers and CDNs to cache static assets. For static files (images, CSS, fonts), set long cache times (1 year). For HTML, use shorter times or no-cache with ETags for validation.</p>
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Analyze your site performance</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free sitemap and SEO analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>
    </div>
  );
}
