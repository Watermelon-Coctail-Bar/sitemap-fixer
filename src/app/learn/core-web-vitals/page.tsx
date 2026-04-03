import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Core Web Vitals: LCP, INP, CLS Explained | SitemapFixer',
  description: 'Core Web Vitals are Google ranking signals. Learn what LCP, INP, and CLS mean, scores you need, and how to improve them.',
  alternates: { canonical: 'https://sitemapfixer.com/learn/core-web-vitals' },
};
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Core Web Vitals</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Core Web Vitals: LCP, INP, and CLS Explained</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Analyze your site performance free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Try SitemapFixer Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8 }}>
        <p style={{ marginBottom: 20 }}>Core Web Vitals are real-world performance metrics Google uses as ranking signals. They measure loading speed, interactivity, and visual stability. Pages that pass the thresholds receive a ranking boost.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>LCP - Largest Contentful Paint</h2>
        <div style={{ display: 'flex', gap: 8, marginBottom: 12, flexWrap: 'wrap' }}>
          <span style={{ background: '#dcfce7', color: '#166534', padding: '4px 12px', borderRadius: 6, fontSize: 13, fontWeight: 600 }}>Good: Under 2.5s</span>
          <span style={{ background: '#fef9c3', color: '#854d0e', padding: '4px 12px', borderRadius: 6, fontSize: 13, fontWeight: 600 }}>Needs work: 2.5s-4.0s</span>
          <span style={{ background: '#fee2e2', color: '#991b1b', padding: '4px 12px', borderRadius: 6, fontSize: 13, fontWeight: 600 }}>Poor: Over 4.0s</span>
        </div>
        <p style={{ marginBottom: 20 }}>LCP measures how long the largest visible element (usually a hero image or headline) takes to load. Improve it by optimizing images, using a CDN, preloading critical resources, and eliminating render-blocking scripts.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>INP - Interaction to Next Paint</h2>
        <div style={{ display: 'flex', gap: 8, marginBottom: 12, flexWrap: 'wrap' }}>
          <span style={{ background: '#dcfce7', color: '#166534', padding: '4px 12px', borderRadius: 6, fontSize: 13, fontWeight: 600 }}>Good: Under 200ms</span>
          <span style={{ background: '#fef9c3', color: '#854d0e', padding: '4px 12px', borderRadius: 6, fontSize: 13, fontWeight: 600 }}>Needs work: 200ms-500ms</span>
          <span style={{ background: '#fee2e2', color: '#991b1b', padding: '4px 12px', borderRadius: 6, fontSize: 13, fontWeight: 600 }}>Poor: Over 500ms</span>
        </div>
        <p style={{ marginBottom: 20 }}>INP replaced FID in March 2024. It measures interaction latency throughout a page visit. Improve it by minimizing JavaScript execution, breaking up long tasks, and deferring non-critical scripts.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>CLS - Cumulative Layout Shift</h2>
        <div style={{ display: 'flex', gap: 8, marginBottom: 12, flexWrap: 'wrap' }}>
          <span style={{ background: '#dcfce7', color: '#166534', padding: '4px 12px', borderRadius: 6, fontSize: 13, fontWeight: 600 }}>Good: Under 0.1</span>
          <span style={{ background: '#fef9c3', color: '#854d0e', padding: '4px 12px', borderRadius: 6, fontSize: 13, fontWeight: 600 }}>Needs work: 0.1-0.25</span>
          <span style={{ background: '#fee2e2', color: '#991b1b', padding: '4px 12px', borderRadius: 6, fontSize: 13, fontWeight: 600 }}>Poor: Over 0.25</span>
        </div>
        <p style={{ marginBottom: 20 }}>CLS measures visual stability - unexpected layout shifts during loading. Fix it by setting width and height on images, reserving space for ads, and using font-display: optional for web fonts.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>How to Check Your Scores</h2>
        <p>Check scores in Google Search Console under Experience then Core Web Vitals. For page-level data use PageSpeed Insights. For immediate testing use Lighthouse in Chrome DevTools. Note: Search Console shows 28-day field data - changes take time to appear.</p>
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Analyze your full technical SEO</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>
    </div>
  );
}
