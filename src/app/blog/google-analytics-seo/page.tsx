import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Google Analytics for SEO: How to Use GA4 to Improve Your Rankings | SitemapFixer',
  description: "Google Analytics 4 reveals which content drives organic conversions, where users drop off, and which pages need improvement. Here is how SEOs use GA4.",
  alternates: { canonical: 'https://sitemapfixer.com/blog/google-analytics-seo' },
};
const sections = [
  { t: "Setting up GA4 for SEO insights", d: "Connect GA4 to Google Search Console for the full picture: GSC provides impressions, clicks, and rankings; GA4 shows what happens after the click - time on page, scroll depth, conversions. Link them via GA4 Admin then Product Links then Search Console. Then in GA4 go to Reports then Acquisition then Search Console to see organic performance with both traffic and engagement data side by side." },
  { t: "Finding your best and worst organic pages", d: "In GA4 go to Reports then Engagement then Pages and screens. Filter by First user medium = organic. Sort by sessions to find your top organic pages. Check the Engagement rate column - pages with high organic traffic but low engagement rate (under 50%) are candidates for content improvements. Users are arriving but leaving quickly, suggesting the content does not match their search intent." },
  { t: "Tracking organic conversions by landing page", d: "In GA4 Explorations, create a free-form report with Landing page as the dimension and Sessions, Conversions, and Revenue as metrics. Filter for Session source/medium containing google/organic. This shows which organic landing pages are actually converting - not just getting traffic. A page with 1,000 monthly organic visits but zero conversions may need a stronger CTA or better content-to-offer alignment." },
  { t: "Using GA4 to identify content gaps", d: "High exit rates on specific pages signal intent mismatch - users searched for X, landed on your page, did not find what they needed, and left. Sort organic pages by Exit rate descending. For pages with high exit but decent traffic, review what the user was actually searching for (check in Search Console) and whether your content fully answers that query. Often a content update or added FAQ section resolves the issue." },
];
export default function Page() {
  return (
    <article style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/blog" style={{ color: '#2d5be3', textDecoration: 'none' }}>Blog</a>{' / '}
        <span>Google Analytics SEO</span>
      </nav>
      <div style={{ fontSize: 13, color: '#9ca3af', marginBottom: 12 }}>April 2025 · 6 min read</div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, lineHeight: 1.15 }}>Google Analytics for SEO: Use GA4 to Improve Rankings</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your technical SEO foundation free</span>
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
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Ensure your site is fully indexed and crawlable</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free sitemap analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>
    </article>
  );
}
