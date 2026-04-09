import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Core Web Vitals Fix: How to Pass LCP, INP, CLS',
  description: "Failing Core Web Vitals hurts your Google rankings. This guide walks through the diagnosis and fixes for all three metrics: LCP, INP, and CLS, in priority order.",
  alternates: { canonical: 'https://sitemapfixer.com/blog/core-web-vitals-fix-guide' },
  openGraph: { title: 'Core Web Vitals Fix Guide 2025', description: 'Step-by-step fixes for LCP, INP, and CLS - the three metrics that affect Google rankings.', url: 'https://sitemapfixer.com/blog/core-web-vitals-fix-guide', type: 'article',
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
const sections = [
  { t: "Start With Field Data, Not Lab Scores", d: "Google ranks pages based on Chrome User Experience Report (CrUX) field data - real measurements from Chrome users visiting your site. Lab scores from PageSpeed Insights or Lighthouse can differ significantly. Before fixing anything, check Google Search Console under Experience, then Core Web Vitals. This shows field data for your actual URLs, grouped by Good, Needs Improvement, and Poor. Fix your worst Poor pages first - these have the most direct ranking impact." },
  { t: "Fixing LCP (Largest Contentful Paint): Target under 2.5s", d: "LCP is almost always caused by an unoptimized image or slow server. First: identify your LCP element using PageSpeed Insights - it shows exactly which element is the LCP. If it is an image: compress it, convert to WebP, add fetchpriority=high to the img tag, and add a link rel=preload in the head. If it is a text element: reduce server response time with caching and a CDN. In Next.js, the Image component handles LCP image optimization automatically. In WordPress, install a caching plugin and use ShortPixel for image compression." },
  { t: "Fixing CLS (Cumulative Layout Shift): Target under 0.1", d: "CLS is almost always caused by images without explicit dimensions. The fix: add width and height attributes to every img tag on your site. This is the single change that fixes CLS for 80% of affected sites. The second most common cause: third-party embeds (ads, social widgets) without reserved space. Add a wrapper div with a fixed min-height matching the embed before it loads. Check Chrome DevTools Layout Shift Regions (in Rendering panel) to visually identify which elements are shifting on your specific pages." },
  { t: "Fixing INP (Interaction to Next Paint): Target under 200ms", d: "INP is the newest Core Web Vital and the hardest to fix because it requires JavaScript profiling. Open Chrome DevTools, go to Performance, record yourself clicking around the page, and look for long tasks (red markers) that fire during interactions. The most common causes: heavy event handlers, third-party scripts executing on interaction, and expensive React re-renders. Start by deferring or removing third-party scripts - analytics, chat widgets, and A/B testing tools are frequent culprits. For React apps, use React Profiler to identify expensive component re-renders." },
  { t: "How Long Until Google Registers Your Fixes", d: "CrUX data updates monthly. After deploying fixes, it takes 28 days for the field data to fully reflect the improvement. You will see incremental improvement in the Google Search Console Core Web Vitals report each week as the 28-day rolling window includes more data from your improved pages. For lab scores (PageSpeed Insights), improvements are immediate. Track both: use lab scores for debugging and verifying fixes work, use field data to confirm ranking impact." },
  { t: "Prioritizing Which Pages to Fix First", d: "Focus on pages with the most organic traffic first - these have the most ranking impact. In Google Search Console, sort your Core Web Vitals URL groups by the number of URLs in Poor status, then cross-reference with your Performance report to find which Poor pages also get significant search traffic. A homepage with poor LCP affects all users but a deep blog post with zero traffic does not. Fix high-traffic Poor pages first, then work through Needs Improvement pages." },
];
export default function Page() {
  return (
    <article style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/blog" style={{ color: '#2d5be3', textDecoration: 'none' }}>Blog</a>{' / '}
        <span>Core Web Vitals Fix Guide</span>
      </nav>
      <div style={{ fontSize: 13, color: '#9ca3af', marginBottom: 12 }}>April 2025 · 9 min read</div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, lineHeight: 1.15 }}>Core Web Vitals Fix Guide: Pass LCP, INP, and CLS</h1>
      <div style={{ display: 'flex', gap: 10, marginBottom: 32, flexWrap: 'wrap' }}>
        {[['LCP', 'under 2.5s'], ['INP', 'under 200ms'], ['CLS', 'under 0.1']].map(([m, t]) => (
          <div key={m} style={{ background: '#dcfce7', color: '#166534', fontSize: 13, fontWeight: 700, padding: '6px 14px', borderRadius: 20 }}>{m}: {t}</div>
        ))}
      </div>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your site Core Web Vitals</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Site Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        {sections.map(({ t, d }) => (
          <div key={t} style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12 }}>{t}</h2>
            <p style={{ margin: 0 }}>{d}</p>
          </div>
        ))}
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Start your technical SEO fix with your sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
  
        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/blog/page-speed-improvement" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Page Speed: 10 Quick Wins That Make a Difference</a></li>
            <li><a href="/blog/website-speed-test-tools" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Website Speed Test: Best Free Performance Tools</a></li>
            <li><a href="/blog/site-speed-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Site Speed SEO: How Speed Affects Rankings</a></li>
            <li><a href="/learn/core-web-vitals" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Core Web Vitals: LCP, INP, CLS Explained</a></li>
            <li><a href="/learn/page-speed-optimization" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Page Speed Optimization: Make Your Site Faster</a></li>
          </ul>
        </div>
    </div>
    </article>
  );
}
