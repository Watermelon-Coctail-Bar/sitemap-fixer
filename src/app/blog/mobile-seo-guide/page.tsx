import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Mobile SEO Guide: Optimize Your Site for Mobile Search',
  description: "Google uses the mobile version of your site for ranking. How to optimize for mobile SEO including viewport, speed, usability, and mobile indexing.",
  alternates: { canonical: 'https://sitemapfixer.com/blog/mobile-seo-guide' },
  openGraph: {
    title: 'Mobile SEO Guide: Optimize Your Site for Mobile Search',
    description: 'Google uses the mobile version of your site for ranking. Here is how to optimize for mobile SEO including viewport, speed, usability, and mobile-first indexing.',
    url: 'https://sitemapfixer.com/blog/mobile-seo-guide',
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
const tips = [
  { t: "Responsive design is the standard", d: "Use a single responsive website that adapts to all screen sizes using CSS media queries - not a separate m.yoursite.com. Responsive design means one URL serves all devices, eliminating duplicate content issues, consolidating link equity, and ensuring Googlebot only needs to crawl one version of your content." },
  { t: "Core Web Vitals on mobile", d: "Google measures CWV on mobile by default. Mobile pages are typically slower than desktop due to smaller CPU, less RAM, and cellular connections. Run PageSpeed Insights on mobile mode for your key pages. Mobile LCP targets are the same as desktop (under 2.5s) but harder to achieve. Preload hero images, defer JS, and use a CDN." },
  { t: "Mobile usability requirements", d: "Google Search Console Mobile Usability report shows specific issues: text too small to read (use 16px minimum body font), clickable elements too close together (48px minimum tap target size), viewport not set (add meta name=viewport content=width=device-width,initial-scale=1 to every page), and content wider than screen (avoid fixed-width elements that cause horizontal scrolling)." },
  { t: "Mobile-specific search behavior", d: "Mobile users search differently: more voice queries, more local intent (near me), shorter attention spans leading to higher bounce rates on slow pages. Local businesses especially must optimize for mobile since most local searches happen on mobile. Ensure your phone number is clickable (tel: links), address opens in maps, and key information is visible without scrolling." },
];
export default function Page() {
  return (
    <article style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/blog" style={{ color: '#2d5be3', textDecoration: 'none' }}>Blog</a>{' / '}
        <span>Mobile SEO Guide</span>
      </nav>
      <div style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 16 }}>By <a href="/about" style={{ color: '#2d5be3', textDecoration: 'none' }}>Arnoldas Arny</a></div>
      <div style={{ fontSize: 13, color: '#9ca3af', marginBottom: 12 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"Article","headline":"Mobile SEO Guide: Optimize Your Site for Mobile Search","description":"Google uses the mobile version of your site for ranking. Here is how to optimize for mobile SEO including viewport, speed, usability, and mobile-first indexing.","url":"https://sitemapfixer.com/blog/mobile-seo-guide","author":{"@type":"Person","name":"Arnoldas Arny","url":"https://sitemapfixer.com/about"},"publisher":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com","logo":{"@type":"ImageObject","url":"https://sitemapfixer.com/opengraph-image"}},"datePublished":"2025-01-15","mainEntityOfPage":{"@type":"WebPage","@id":"https://sitemapfixer.com/blog/mobile-seo-guide"}}' }} />April 2025 · 5 min read</div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, lineHeight: 1.15 }}>Mobile SEO Guide: Optimize for the Mobile-First Web</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your mobile sitemap configuration free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Site Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        {tips.map(({ t, d }) => (
          <div key={t} style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12 }}>{t}</h2>
            <p style={{ margin: 0 }}>{d}</p>
          </div>
        ))}
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Check your site for mobile SEO issues</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free sitemap and indexing analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
  
        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/blog/ecommerce-seo-tips" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Ecommerce SEO: Get Product Pages to Rank</a></li>
            <li><a href="/blog/social-media-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Social Media SEO: Do Social Signals Matter?</a></li>
            <li><a href="/blog/video-seo-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Video SEO: Rank Videos on Google and YouTube</a></li>
            <li><a href="/blog/canonical-url-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Canonical URL: What It Is and How to Set It Correctly</a></li>
            <li><a href="/blog/url-structure-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>URL Structure SEO: How to Create SEO-Friendly URLs</a></li>
          </ul>
        </div>
    </div>
    </article>
  );
}
