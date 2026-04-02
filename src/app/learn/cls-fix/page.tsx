import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'CLS Fix: How to Eliminate Cumulative Layout Shift | SitemapFixer',
  description: "CLS measures unexpected page layout shifts during loading. Google requires a score under 0.1. Here is how to find what is causing your CLS and fix each type.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/cls-fix' },
};
const causes = [
  { t: "Images without dimensions", d: "The most common CLS cause. When an image has no width and height attributes, the browser does not reserve space for it during initial layout. When the image loads, it pushes content down. Fix: always add explicit width and height attributes to every img tag: img src=photo.jpg width=800 height=600. Modern CSS with aspect-ratio handles the visual flexibility while keeping the space reserved. In React/Next.js, use the Image component which enforces dimensions." },
  { t: "Ads, embeds, and iframes", d: "Ad slots that load after page content, embeds (Twitter, YouTube, Codepen), and iframes all cause CLS when they appear without pre-reserved space. Fix: always reserve space for ad slots with a fixed min-height matching the largest ad that could appear. For embeds, add a wrapper div with a fixed aspect ratio using the padding-top hack or the CSS aspect-ratio property. This ensures space is reserved before the embed loads." },
  { t: "Web fonts causing FOUT/FOIT", d: "Flash of Unstyled Text (FOUT) occurs when content loads in a fallback font then shifts when the web font loads. If the fallback font has different metrics (character width, height) than the web font, text reflows cause CLS. Fix: use font-display: optional to prevent the font swap if it would cause a shift, or use font-display: swap with size-adjust CSS to match your fallback font metrics to your web font. Preload critical fonts to reduce the delay." },
  { t: "Content injected above existing content", d: "Banners, cookie consent notices, or sticky notifications that inject above existing page content push everything below them down. Fix: reserve space for these elements in the initial layout even before they appear, or animate them in from off-screen rather than inserting them in the document flow. Use position: fixed or position: sticky for notifications that should not affect document flow." },
  { t: "Animations using layout-triggering properties", d: "CSS animations that change width, height, top, left, margin, or padding trigger browser layout recalculations and cause layout shifts. Fix: use CSS transform and opacity for animations — these run on the GPU and do not trigger layout. Instead of animating height: 0 to height: 200px, animate transform: scaleY(0) to transform: scaleY(1). Use the Chrome Performance tab to identify which animations are causing layout shifts." },
];
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>CLS Fix</span>
      </nav>
      <div style={{ display: 'flex', gap: 10, marginBottom: 12 }}>
        <div style={{ background: '#dcfce7', color: '#166534', fontSize: 12, fontWeight: 700, padding: '4px 10px', borderRadius: 20 }}>GOOD: under 0.1</div>
        <div style={{ background: '#fef9c3', color: '#854d0e', fontSize: 12, fontWeight: 700, padding: '4px 10px', borderRadius: 20 }}>NEEDS WORK: 0.1-0.25</div>
        <div style={{ background: '#fee2e2', color: '#991b1b', fontSize: 12, fontWeight: 700, padding: '4px 10px', borderRadius: 20 }}>POOR: over 0.25</div>
      </div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>CLS Fix: Eliminate Cumulative Layout Shift</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your site for CWV issues free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Site Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        <p style={{ marginBottom: 32 }}>CLS (Cumulative Layout Shift) measures the total amount of unexpected layout movement during page load. A score of 0 means nothing moved. A score above 0.1 means users experienced visible content jumping around. CLS is one of Google's Core Web Vitals and directly affects rankings. Use Chrome DevTools Layout Shift Regions (Rendering panel) to visually highlight what is shifting on your page.</p>
        {causes.map(({ t, d }) => (
          <div key={t} style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: '#0a0a0f', marginBottom: 10 }}>{t}</h2>
            <p style={{ margin: 0 }}>{d}</p>
          </div>
        ))}
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Find your Core Web Vitals issues</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free site analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>
    </div>
  );
}
