import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'AMP SEO: What AMP Is, Whether You Still Need It, and How to Implement It | SitemapFixer',
  description: "AMP (Accelerated Mobile Pages) was once required for Google News. Today its role has changed significantly. Here is the current state of AMP and whether it is worth implementing.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/amp-seo' },
};
const sections = [
  { h: "What AMP Was Designed to Do", d: "AMP (Accelerated Mobile Pages) is an open-source framework created by Google in 2015 to deliver near-instant mobile page loads. AMP pages are stripped-down HTML served from Google's AMP cache, which meant Google could pre-render and serve them directly from its own servers. When a user clicked an AMP result from mobile search, the page appeared instantly because it was already cached by Google." },
  { h: "The Current State of AMP in 2025", d: "Google removed the AMP requirement for Top Stories and Google News in 2021 when it introduced Core Web Vitals. Any page with good CWV scores now qualifies for Top Stories - AMP is no longer required. The AMP carousel in mobile search results was removed. Google still supports AMP and gives AMP pages a small crawl priority, but there is no longer a meaningful ranking advantage to implementing AMP beyond what good Core Web Vitals already provide." },
  { h: "Should You Implement AMP?", d: "For most sites: no. AMP requires maintaining a parallel version of every page, introduces development complexity, limits design and functionality (no custom JavaScript, limited CSS), and the main benefit - fast loading - is achievable with standard performance optimization. If your site passes Core Web Vitals without AMP, you get equivalent Google News eligibility and similar mobile speed. Exceptions: very large news publishers with existing AMP infrastructure may benefit from keeping it; resource-constrained teams that cannot achieve good CWV otherwise may find AMP easier than custom optimization." },
  { h: "AMP and Your Sitemap", d: "If you do implement AMP, you need to handle your sitemap correctly. AMP pages should have their canonical URL in the sitemap, not the AMP URL. The relationship between canonical and AMP version is expressed via link tags: the canonical page has link rel=amphtml pointing to the AMP version; the AMP page has link rel=canonical pointing back to the canonical. Submit only canonical URLs in your sitemap. Google discovers AMP pages through the amphtml link from canonical pages." },
  { h: "Removing AMP From an Existing Site", d: "If you currently have AMP and want to remove it: first ensure your canonical pages pass Core Web Vitals for mobile. Then add rel=canonical self-referencing tags to your canonical pages if not already present. Remove the rel=amphtml link from canonical pages. Set up 301 redirects from AMP URLs to canonical URLs. Update your sitemap to ensure only canonical URLs are included. Monitor Google Search Console for any drops in Top Stories or Google News impressions - though for most sites there will be no impact if CWV are good." },
];
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>AMP SEO</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>AMP SEO: Do You Still Need AMP in 2025?</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your site speed and sitemap free</span>
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
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Check your sitemap and Core Web Vitals</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free - analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>
    </div>
  );
}
