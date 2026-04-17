import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Site Speed SEO: How Speed Affects Rankings',
  description: "Page speed is a confirmed Google ranking factor that affects both rankings and conversions. How site speed impacts SEO and the most impactful fixes.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/site-speed-seo' },
  openGraph: {
    title: 'Site Speed SEO: How Speed Affects Rankings',
    description: 'Page speed is a confirmed Google ranking factor and affects both rankings and conversion rates. Here is how site speed impacts SEO and the most impactful fixes.',
    url: 'https://sitemapfixer.com/blog/site-speed-seo',
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
  { t: "How site speed affects rankings", d: "Google confirmed speed as a ranking signal in 2010 for desktop and 2018 for mobile. In 2021 Core Web Vitals became ranking signals - specifically LCP (loading speed), INP (interactivity), and CLS (visual stability). Pages with Poor CWV scores face a ranking disadvantage versus comparable pages with Good scores. The effect is most significant in competitive queries where multiple pages have similar content quality - speed becomes a tiebreaker. Check your CWV status in Google Search Console under Experience then Core Web Vitals." },
  { t: "Speed and conversion rates", d: "Beyond rankings, speed directly impacts conversion rates. Google research found that as page load time goes from 1 second to 3 seconds, bounce probability increases 32%. From 1 to 5 seconds, bounce probability increases 90%. Every 100ms of latency reduces conversions by approximately 1% according to Amazon and Google studies. For ecommerce sites especially, speed investment has direct revenue return independent of SEO benefit." },
  { t: "The highest-ROI speed fixes", d: "Three changes fix the majority of speed problems: image optimization (convert to WebP, compress, add dimensions) eliminates the most common LCP and CLS issues; server-side caching or static generation cuts TTFB dramatically; and deferring third-party scripts removes the most common source of INP issues. These three changes collectively resolve Core Web Vitals failures for most sites. Use PageSpeed Insights to identify your specific LCP element and primary bottlenecks before investing in infrastructure changes." },
];
export default function Page() {
  return (
    <article style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/blog" style={{ color: '#2d5be3', textDecoration: 'none' }}>Blog</a>{' / '}
        <span>Site Speed SEO</span>
      </nav>
      <div style={{ fontSize: 13, color: '#9ca3af', marginBottom: 12 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"Article","headline":"Site Speed SEO: How Speed Affects Rankings","description":"Page speed is a confirmed Google ranking factor and affects both rankings and conversion rates. Here is how site speed impacts SEO and the most impactful fixes.","url":"https://sitemapfixer.com/blog/site-speed-seo","author":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com"},"publisher":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com","logo":{"@type":"ImageObject","url":"https://sitemapfixer.com/opengraph-image"}},"datePublished":"2025-01-15","mainEntityOfPage":{"@type":"WebPage","@id":"https://sitemapfixer.com/blog/site-speed-seo"}}' }} />April 2025 · 5 min read</div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, lineHeight: 1.15 }}>Site Speed SEO: How Page Speed Affects Google Rankings</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your Core Web Vitals free</span>
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
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Check your site speed and Core Web Vitals</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
  
        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/blog/page-speed-improvement" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Page Speed: 10 Quick Wins That Make a Difference</a></li>
            <li><a href="/blog/core-web-vitals-fix-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Core Web Vitals Fix: How to Pass LCP, INP, CLS</a></li>
            <li><a href="/blog/website-speed-test-tools" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Website Speed Test: Best Free Performance Tools</a></li>
            <li><a href="/learn/core-web-vitals" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Core Web Vitals: LCP, INP, CLS Explained</a></li>
            <li><a href="/learn/page-speed-optimization" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Page Speed Optimization: Make Your Site Faster</a></li>
          </ul>
        </div>
    </div>
    </article>
  );
}
