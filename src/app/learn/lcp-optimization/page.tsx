import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'LCP Optimization: How to Fix Largest Contentful Paint',
  description: "LCP measures how fast the largest visible element loads. Google requires under 2.5 seconds. How to diagnose your LCP element and the best fixes.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/lcp-optimization' },
  openGraph: {
    title: 'LCP Optimization: How to Fix Largest Contentful Paint',
    description: 'LCP measures how fast the largest visible element loads. Google requires under 2.5 seconds. How to diagnose it and the most effective fixes.',
    url: 'https://sitemapfixer.com/learn/lcp-optimization',
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
  { n: "1", t: "Find your LCP element", d: "In Chrome DevTools, open the Performance tab and run a recording. Look for the LCP marker in the timeline. Or use PageSpeed Insights - it shows the LCP element in the Opportunities section. Common LCP elements: hero image, above-fold heading text (H1), large background image, video poster frame. On mobile and desktop, the LCP element may be different." },
  { n: "2", t: "Optimize images (most common fix)", d: "Unoptimized images are the number one LCP cause. Fix: compress images to the display size (no point serving a 3000px image in a 800px container), convert to WebP or AVIF format (30-50% smaller than JPEG at equivalent quality), add explicit width and height attributes to prevent layout shifts, and add fetchpriority=high attribute to your LCP image element. In Next.js, use the Image component - it handles all of this automatically." },
  { n: "3", t: "Preload the LCP resource", d: "If your LCP element is an image or font, preload it in the HTML head: link rel=preload as=image href=/hero.webp. This tells the browser to fetch the resource immediately during HTML parsing rather than waiting for the render tree. For background images set via CSS, preloading is especially important since they are discovered late in the loading process. Preloading the wrong resource wastes bandwidth - only preload your confirmed LCP element." },
  { n: "4", t: "Eliminate render-blocking resources", d: "JavaScript and CSS files in the document head block the browser from rendering anything until they are downloaded and parsed. Move non-critical scripts to the bottom of the body or add defer and async attributes. Inline critical CSS (the styles needed for above-fold content) directly in the HTML head. Use link rel=preload for critical CSS files. Every 100ms of render-blocking delay adds to your LCP." },
  { n: "5", t: "Improve server response time (TTFB)", d: "LCP cannot start until the server sends the HTML. If your Time to First Byte (TTFB) is over 600ms, it directly increases LCP. Fix TTFB by: using a CDN to serve pages from edge nodes near users, enabling full-page caching, upgrading server hardware, and optimizing database queries on page generation. A TTFB under 200ms gives LCP the best chance of hitting the 2.5 second target." },
  { n: "6", t: "Measure in field data, not just lab tests", d: "PageSpeed Insights lab scores can differ significantly from real-user field data. Google ranks pages based on Chrome User Experience Report (CrUX) field data - real measurements from actual Chrome users on your site. Check your field data LCP in Google Search Console under Core Web Vitals. A page can pass lab tests but fail in field data due to slow user devices, network conditions, or content personalization that the lab test does not simulate." },
];
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"Article","headline":"LCP Optimization: How to Fix Largest Contentful Paint","description":"LCP measures how fast the largest visible element loads. Google requires under 2.5 seconds. How to diagnose it and the most effective fixes.","url":"https://sitemapfixer.com/learn/lcp-optimization","author":{"@type":"Person","name":"Arnoldas Arny","url":"https://sitemapfixer.com/about"},"publisher":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com","logo":{"@type":"ImageObject","url":"https://sitemapfixer.com/opengraph-image"}},"datePublished":"2025-01-15","mainEntityOfPage":{"@type":"WebPage","@id":"https://sitemapfixer.com/learn/lcp-optimization"}}' }} />
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>LCP Optimization</span>
      </nav>
      <div style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 16 }}>By <a href="/about" style={{ color: '#2d5be3', textDecoration: 'none' }}>Arnoldas Arny</a></div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
        <div style={{ background: '#dcfce7', color: '#166534', fontSize: 12, fontWeight: 700, padding: '4px 10px', borderRadius: 20 }}>TARGET: under 2.5s</div>
        <div style={{ background: '#fef9c3', color: '#854d0e', fontSize: 12, fontWeight: 700, padding: '4px 10px', borderRadius: 20 }}>NEEDS IMPROVEMENT: 2.5-4s</div>
        <div style={{ background: '#fee2e2', color: '#991b1b', fontSize: 12, fontWeight: 700, padding: '4px 10px', borderRadius: 20 }}>POOR: over 4s</div>
      </div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>LCP Optimization: Fix Largest Contentful Paint</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your site performance free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Site Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        {steps.map(({ n, t, d }) => (
          <div key={n} style={{ marginBottom: 36, paddingLeft: 16, borderLeft: '3px solid #2d5be3' }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: '#0a0a0f', marginBottom: 8 }}>Step {n}: {t}</h2>
            <p style={{ margin: 0 }}>{d}</p>
          </div>
        ))}
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Find your Core Web Vitals issues</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>

        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/learn/inp-optimization" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>INP Optimization: How to Fix Interaction to Next Paint</a></li>
            <li><a href="/learn/cls-fix" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>CLS Fix: How to Eliminate Cumulative Layout Shift</a></li>
            <li><a href="/blog/core-web-vitals-fix-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Core Web Vitals Fix: How to Pass LCP, INP, CLS</a></li>
            <li><a href="/blog/page-speed-improvement" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Page Speed: 10 Quick Wins That Make a Difference</a></li>
          
            <li><a href="/learn/site-speed-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Site Speed SEO: How Speed Affects Rankings</a></li></ul>
        </div>
    </div>
  );
}
