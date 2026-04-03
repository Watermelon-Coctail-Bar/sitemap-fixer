import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Mobile SEO: Mobile-First Indexing and How to Pass It | SitemapFixer',
  description: "Google uses the mobile version of your site for indexing. Here is what mobile-first indexing means, how to check your mobile SEO, and the most common issues to fix.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/mobile-seo' },
};
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Mobile SEO</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Mobile SEO: Mobile-First Indexing and What It Means for You</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your site for mobile issues</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Site Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        <p style={{ marginBottom: 24 }}>Since 2019, Google has used mobile-first indexing for all new websites. This means Googlebot primarily crawls and indexes the mobile version of your site. The content Google sees on mobile is what it uses to determine rankings - for all users, including desktop. If your mobile site has less content than your desktop site, you are being ranked on incomplete information.</p>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>What Mobile-First Indexing Means Practically</h2>
        <p style={{ marginBottom: 24 }}>Googlebot visits your pages using a smartphone user agent with a mobile viewport. It reads whatever HTML is served to mobile users. If you have a separate mobile site (m.yoursite.com) with stripped-down content, Google ranks you on the stripped-down version. If you use responsive design (same HTML, different CSS), mobile-first indexing has no negative impact since the content is identical. If you use dynamic serving (different HTML based on user agent), ensure the mobile version contains all the same content and structured data as the desktop version.</p>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>How to Check Your Mobile SEO</h2>
        <p style={{ marginBottom: 24 }}>Use Google Search Console URL Inspection on any page and click "Test Live URL." This renders the page as Googlebot mobile sees it. Compare the rendered screenshot to your desktop version - any content missing in the mobile render is content Google may not index. Also run the page through Google PageSpeed Insights, which provides separate mobile and desktop scores and specific recommendations for mobile performance.</p>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Common Mobile SEO Issues</h2>
        <p style={{ marginBottom: 12 }}><strong>Viewport meta tag missing:</strong> Add {"<"}meta name="viewport" content="width=device-width, initial-scale=1"{">"} to your HTML head. Without this, mobile browsers render your page at desktop width and scale it down, making text unreadably small.</p>
        <p style={{ marginBottom: 12 }}><strong>Tap targets too small:</strong> Buttons and links need to be at least 48x48px with adequate spacing. Chrome DevTools Lighthouse audit identifies specific tap targets that are too small.</p>
        <p style={{ marginBottom: 12 }}><strong>Content hidden on mobile via CSS:</strong> If you use display:none to hide content on mobile that is visible on desktop, Google may not index that content. Move important content out of mobile-hidden elements or use a CSS approach that keeps content accessible while adjusting layout.</p>
        <p style={{ marginBottom: 24 }}><strong>Intrusive interstitials:</strong> Pop-ups that cover the main content on mobile are a Google ranking penalty signal. This applies specifically to interstitials that appear right after a user navigates to a page from search results. Small cookie consent banners are excluded from this penalty.</p>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>The Viewport and Responsive Design</h2>
        <p style={{ marginBottom: 24 }}>Responsive design - using CSS media queries to adapt layout based on screen size - is Google's recommended approach. It uses a single URL and the same HTML for all devices, which simplifies SEO. Canonical tags, sitemaps, and robots.txt all work the same way. There is no mobile-specific sitemap needed when using responsive design.</p>
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Analyze your mobile SEO</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free sitemap and SEO analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>
    </div>
  );
}
