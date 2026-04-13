import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'INP Optimization: How to Fix Interaction to Next Paint',
  description: "INP replaced FID as a Core Web Vital in 2024. It measures how fast your page responds to clicks, taps, and key presses. Here is how to diagnose and fix poor INP.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/inp-optimization' },
  openGraph: {
    title: 'INP Optimization: How to Fix Interaction to Next Paint',
    description: 'INP replaced FID as a Core Web Vital in 2024. It measures how fast your page responds to clicks, taps, and key presses. Here is how to diagnose and fix poor INP.',
    url: 'https://sitemapfixer.com/learn/inp-optimization',
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
const sections = [
  { h: "What INP Measures", d: "INP (Interaction to Next Paint) measures the delay between a user interaction (click, tap, keyboard input) and the next visual update on screen. Unlike FID which only measured input delay, INP measures the full interaction: input delay, processing time, and presentation delay. Google requires INP under 200ms for a Good score. Between 200-500ms is Needs Improvement. Over 500ms is Poor. INP captures the worst interaction on the page during the user's visit, making it sensitive to any slow event handlers." },
  { h: "How to Find INP Issues", d: "In Chrome DevTools, go to the Performance panel and enable Web Vitals. Click Record, interact with the page (click buttons, open dropdowns, type in inputs), then stop recording. Look for INP markers in the timeline - clicking on them shows the full breakdown: input delay, processing time, and presentation delay. The Performance Insights panel also surfaces INP automatically. In production, use the web-vitals JavaScript library to measure real-user INP and report it to your analytics." },
  { h: "Long Tasks: The Main INP Cause", d: "JavaScript that runs for more than 50ms blocks the main thread and prevents the browser from responding to user interactions. These are called Long Tasks. Break up long tasks using scheduler.yield(), setTimeout with 0ms delay to yield between chunks, or the Scheduler API's postTask. Instead of running one 200ms function, break it into four 50ms chunks with yields between each - the browser can process user interactions between chunks." },
  { h: "Third-Party Scripts", d: "Analytics trackers, chat widgets, A/B testing scripts, and ad networks are common sources of long tasks. They run JavaScript that blocks the main thread during user interactions. Fix: load all non-critical third-party scripts with async or defer attributes, lazy load chat widgets until the user moves their mouse or scrolls, use Partytown to run third-party scripts in a web worker (off the main thread), and audit your third-party script load with the Chrome Coverage tool to identify unused code." },
  { h: "React and Framework-Specific Fixes", d: "React applications commonly have INP issues due to expensive re-renders triggered by user interactions. Fix: use useMemo and useCallback to prevent unnecessary re-renders, use React Transition API to mark non-urgent state updates, implement virtualization for long lists (react-virtual, react-window), defer non-critical rendering work with startTransition, and split large components into smaller ones that only re-render when their specific state changes." },
  { h: "Event Handler Optimization", d: "Heavy event handlers that run synchronously on click or input events directly increase INP. Common patterns to fix: form validation that runs on every keypress, search autocomplete that queries on every input change without debouncing, click handlers that do expensive DOM operations. Fix with debouncing (wait until the user stops typing before running logic), requestAnimationFrame for visual updates, and moving expensive work off the critical path." },
];
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"Article","headline":"INP Optimization: How to Fix Interaction to Next Paint","description":"INP replaced FID as a Core Web Vital in 2024. It measures how fast your page responds to clicks, taps, and key presses. Here is how to diagnose and fix poor INP.","url":"https://sitemapfixer.com/learn/inp-optimization","author":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com"},"publisher":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com","logo":{"@type":"ImageObject","url":"https://sitemapfixer.com/opengraph-image"}},"datePublished":"2025-01-15","mainEntityOfPage":{"@type":"WebPage","@id":"https://sitemapfixer.com/learn/inp-optimization"}}' }} />
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>INP Optimization</span>
      </nav>
      <div style={{ display: 'flex', gap: 10, marginBottom: 12 }}>
        <div style={{ background: '#dcfce7', color: '#166534', fontSize: 12, fontWeight: 700, padding: '4px 10px', borderRadius: 20 }}>GOOD: under 200ms</div>
        <div style={{ background: '#fef9c3', color: '#854d0e', fontSize: 12, fontWeight: 700, padding: '4px 10px', borderRadius: 20 }}>NEEDS WORK: 200-500ms</div>
        <div style={{ background: '#fee2e2', color: '#991b1b', fontSize: 12, fontWeight: 700, padding: '4px 10px', borderRadius: 20 }}>POOR: over 500ms</div>
      </div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>INP Optimization: Fix Interaction to Next Paint</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your site performance free</span>
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
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Analyze your site Core Web Vitals</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free SEO and performance analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>

        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/learn/lcp-optimization" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>LCP Optimization: How to Fix Largest Contentful Paint</a></li>
            <li><a href="/learn/cls-fix" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>CLS Fix: How to Eliminate Cumulative Layout Shift</a></li>
            <li><a href="/blog/core-web-vitals-fix-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Core Web Vitals Fix: How to Pass LCP, INP, CLS</a></li>
            <li><a href="/blog/page-speed-improvement" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Page Speed: 10 Quick Wins That Make a Difference</a></li>
          </ul>
        </div>
    </div>
  );
}
