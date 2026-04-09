import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Google Discover SEO: Get Into Discover Feed',
  description: "Google Discover shows content to users based on their interests, not search queries. Here is how to optimize for Discover, what content performs well, and how to track it.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/google-discover-seo' },
  openGraph: {
    title: 'Google Discover SEO: Get Into Discover Feed',
    description: 'Google Discover shows content to users based on their interests, not search queries. Here is how to optimize for Discover, what content performs well, and how to track it.',
    url: 'https://sitemapfixer.com/learn/google-discover-seo',
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
  { h: "What Is Google Discover", d: "Google Discover is a personalized content feed shown on the Google app, Chrome on mobile, and the Google homepage on Android. It surfaces content to users based on their browsing history, interests, and search patterns - without them searching for it. Discover can drive substantial traffic to publishers and content sites, often surpassing regular search traffic for news and lifestyle content. Unlike search, you cannot target specific Discover queries - you optimize for content quality and Google decides who sees it." },
  { h: "Core Requirements for Discover Eligibility", d: "Your pages must be indexed by Google to appear in Discover. Enable Google Web Cache (do not block with noindex or robots.txt). Publish pages that meet E-E-A-T standards - Discover strongly favors authoritative, trustworthy content. Your site must have a good page experience score. The most critical Discover requirement: large, high-quality images. Google specifically states that content with images at least 1200px wide performs significantly better in Discover." },
  { h: "Content That Performs in Discover", d: "Discover favors: timely content on topics with broad interest, evergreen content that stays relevant over time, content with strong engagement signals (high click-through, time on page, return visits), content that satisfies search intent completely, and content with standout images. Topics that consistently perform well in Discover include: news and current events, how-to guides, listicles and comparison content, personal finance, health, fitness, food, and travel. Niche B2B technical content rarely performs in Discover." },
  { h: "Image Optimization for Discover", d: "Google recommends images at minimum 1200px wide for Discover. Smaller images may result in Discover showing a small thumbnail or no image at all, significantly reducing click-through rate. Enable large image display in your articles by removing any max-width constraints on featured images. Add Article structured data with a high-quality image URL in the image property. In WordPress with Yoast, ensure large image sharing is enabled in Social settings." },
  { h: "Tracking Discover Traffic", d: "Google Search Console shows Discover performance separately under the Performance section - click the Discover tab (distinct from the Search tab). You can see total clicks, impressions, and average CTR for your content in Discover. Note that Discover data often shows with a delay of several days. Monitor which content drives Discover traffic and look for patterns - topics, formats, image styles - to inform your content strategy." },
  { h: "What You Cannot Control About Discover", d: "Google does not provide a way to submit content to Discover or target specific users. Discover appearance is entirely algorithmic based on content quality signals and user personalization. Sites with thin content, poor E-E-A-T signals, or privacy policy issues are unlikely to appear in Discover regardless of optimization. Consistent, high-quality publishing over time is the most reliable path to growing Discover presence - there is no shortcut." },
];
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Google Discover SEO</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Google Discover SEO: Get Into the Personalized Feed</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your site SEO free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Try SitemapFixer Free</a>
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
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Ensure your site is technically ready for Discover</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free sitemap analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>

        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/learn/keyword-research-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Keyword Research: Find Keywords Worth Targeting</a></li>
            <li><a href="/learn/content-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Content SEO: Write Content That Ranks</a></li>
            <li><a href="/learn/link-building-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Link Building SEO: Strategies That Work in 2025</a></li>
            <li><a href="/learn/local-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Local SEO: How to Rank in Google Maps and Local Search</a></li>
            <li><a href="/learn/mobile-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Mobile SEO: Mobile-First Indexing and How to Pass It</a></li>
          </ul>
        </div>
    </div>
  );
}
