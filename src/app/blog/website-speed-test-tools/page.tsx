import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Website Speed Test: Best Free Performance Tools',
  description: "The best free tools to test your website speed and Core Web Vitals. Each tool measures different things - which to use and what results mean.",
  alternates: { canonical: 'https://sitemapfixer.com/blog/website-speed-test-tools' },
  openGraph: {
    title: 'Website Speed Test: Best Free Performance Tools',
    description: 'The best free tools to test your website speed and Core Web Vitals. Which to use for what, and what each result means.',
    url: 'https://sitemapfixer.com/blog/website-speed-test-tools',
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
const tools = [
  { name: "PageSpeed Insights", url: "pagespeed.web.dev", d: "Google's own tool that shows both Lab data (Lighthouse scores run by the tool) and Field data (real user measurements from Chrome users via CrUX). Always check the Field data tab - this is what Google actually uses for rankings. Lab scores are useful for debugging but field data is the ground truth. Enter any URL and get LCP, INP, CLS scores and specific improvement recommendations." },
  { name: "Google Search Console Core Web Vitals report", url: "search.google.com/search-console", d: "Shows field data for your entire site grouped by URL patterns, with counts of Good, Needs Improvement, and Poor URLs. The most important tool for understanding ranking impact - it shows where your actual users are experiencing slow pages. Only available for sites you own and have verified in Search Console." },
  { name: "WebPageTest", url: "webpagetest.org", d: "The most detailed free speed testing tool. Run tests from specific global locations, on specific devices, and with specific connection speeds. The Waterfall view shows every resource loading in sequence, which is invaluable for diagnosing bottlenecks. Test your page as it appears to a user in Singapore on a 4G connection to understand global performance." },
  { name: "Chrome DevTools Lighthouse", url: "Built into Chrome", d: "Open Chrome DevTools (F12), go to the Lighthouse tab, and run an audit. Tests the current page in your browser under throttled conditions. Useful for testing pages behind authentication or in local development. The Performance tab in DevTools also lets you record a page load and inspect exactly which JavaScript runs and when." },
  { name: "GTmetrix", url: "gtmetrix.com", d: "Combines Google Lighthouse and WebPageTest data in a single report. Shows a waterfall chart, video of the page loading, and prioritized recommendations. The free tier tests from Vancouver; paid tiers allow testing from global locations. Useful for getting a second opinion alongside PageSpeed Insights." },
  { name: "Cloudflare Observatory", url: "observatory.cloudflare.com", d: "Tests Core Web Vitals from multiple global locations simultaneously, showing how performance varies by geography. Particularly useful if you suspect your CDN is not effectively distributing content globally." },
];
export default function Page() {
  return (
    <article style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/blog" style={{ color: '#2d5be3', textDecoration: 'none' }}>Blog</a>{' / '}
        <span>Website Speed Test Tools</span>
      </nav>
      <div style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 16 }}>By <a href="/about" style={{ color: '#2d5be3', textDecoration: 'none' }}>Arnoldas Arny</a></div>
      <div style={{ fontSize: 13, color: '#9ca3af', marginBottom: 12 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"Article","headline":"Website Speed Test: Best Free Performance Tools","description":"The best free tools to test your website speed and Core Web Vitals. Which to use for what, and what each result means.","url":"https://sitemapfixer.com/blog/website-speed-test-tools","author":{"@type":"Person","name":"Arnoldas Arny","url":"https://sitemapfixer.com/about"},"publisher":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com","logo":{"@type":"ImageObject","url":"https://sitemapfixer.com/opengraph-image"}},"datePublished":"2025-01-15","mainEntityOfPage":{"@type":"WebPage","@id":"https://sitemapfixer.com/blog/website-speed-test-tools"}}' }} />April 2025 · 6 min read</div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, lineHeight: 1.15 }}>Website Speed Test Tools: Best Free Options for 2025</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Get your Core Web Vitals analyzed free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Site Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        <p style={{ marginBottom: 32 }}>Use PageSpeed Insights for a quick check and Google Search Console for ranking impact. Use WebPageTest when you need to diagnose a specific performance problem in depth.</p>
        {tools.map(({ name, url, d }) => (
          <div key={name} style={{ marginBottom: 36, borderLeft: '3px solid #e4e4ed', paddingLeft: 16 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: '#0a0a0f', margin: '0 0 4px' }}>{name}</h2>
            <div style={{ fontSize: 13, color: '#2d5be3', marginBottom: 10, fontFamily: 'monospace' }}>{url}</div>
            <p style={{ margin: 0 }}>{d}</p>
          </div>
        ))}
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Check your site speed alongside your sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free technical SEO analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
  
        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/blog/page-speed-improvement" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Page Speed: 10 Quick Wins That Make a Difference</a></li>
            <li><a href="/blog/core-web-vitals-fix-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Core Web Vitals Fix: How to Pass LCP, INP, CLS</a></li>
            <li><a href="/blog/site-speed-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Site Speed SEO: How Speed Affects Rankings</a></li>
            <li><a href="/learn/core-web-vitals" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Core Web Vitals: LCP, INP, CLS Explained</a></li>
            <li><a href="/learn/page-speed-optimization" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Page Speed Optimization: Make Your Site Faster</a></li>
          
            <li><a href="/blog/free-seo-tools" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Free SEO Tools: The Best Free Tools for Every SEO Task</a></li></ul>
        </div>
    </div>
    </article>
  );
}
