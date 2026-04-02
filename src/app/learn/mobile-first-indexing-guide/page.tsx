import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Mobile-First Indexing: What It Means and How to Prepare Your Site | SitemapFixer',
  description: "Google uses the mobile version of your site for indexing and ranking. Here is what mobile-first indexing means for your SEO and the exact checks to run on your site.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/mobile-first-indexing-guide' },
};
const sections = [
  { h: "What Mobile-First Indexing Means", d: "Since 2019, Google primarily crawls and indexes the mobile version of your website. If your desktop site has more content than your mobile site, Google only sees the mobile version — meaning all that extra desktop content is invisible for indexing purposes. Rankings are based on how your mobile pages appear to Googlebot's mobile crawler, not your desktop version. Every site launched after July 2019 is automatically mobile-first indexed." },
  { h: "Check Your Mobile Indexing Status", d: "In Google Search Console, go to Settings and look for the Crawling section. It shows whether Google is using mobile-first or desktop-first crawling for your site. You can also check URL Inspection on any page — the crawled page screenshot shows whether it was rendered as mobile or desktop. Most modern sites are already on mobile-first indexing." },
  { h: "Content Parity Between Mobile and Desktop", d: "The most critical requirement: ensure your mobile site has the same content as your desktop site. Common failures — content hidden by tabs or accordions on mobile may not be indexed by Google even if visible after interaction. Lazy-loaded content must be accessible to Googlebot. Images and videos must load correctly on mobile. Navigation must not hide important pages from mobile users. Run a mobile crawl with Screaming Frog to compare mobile vs desktop content." },
  { h: "Mobile-Friendly Technical Requirements", d: "Google requires: a viewport meta tag (meta name=viewport content=width=device-width, initial-scale=1) on every page, text readable without zooming (font size at least 16px for body text), tap targets at least 48x48 CSS pixels with adequate spacing, no horizontal scrolling at 375px viewport width, no interstitials or popups that cover the main content on mobile, and images that do not overflow their containers." },
  { h: "Structured Data on Mobile", d: "Ensure all structured data (JSON-LD, schema markup) present on your desktop version is also present on your mobile version. Since Google indexes mobile pages, structured data must be on the mobile version for rich results to appear. If you inject JSON-LD via JavaScript, verify it renders correctly in a mobile environment by using the Rich Results Test with the mobile user agent option." },
  { h: "Sitemaps and Mobile-First Indexing", d: "Your sitemap should list canonical URLs — typically the non-mobile versions if you have a separate m. subdomain setup, with canonical tags pointing desktop to mobile or vice versa. Most modern responsive sites (one URL, CSS handles layout) have no sitemap adjustments needed for mobile-first. If you have a separate mobile site (m.yoursite.com), ensure bidirectional alternate tags between desktop and mobile versions and include only canonical desktop URLs in your sitemap." },
];
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Mobile-First Indexing</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Mobile-First Indexing: Prepare Your Site for Google's Mobile Crawler</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your mobile sitemap configuration free</span>
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
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Analyze your site for mobile indexing issues</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free sitemap and indexing check in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>
    </div>
  );
}
