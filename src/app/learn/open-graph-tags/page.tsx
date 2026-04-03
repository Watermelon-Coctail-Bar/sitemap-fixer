import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Open Graph Tags: How to Control How Your Pages Look When Shared | SitemapFixer',
  description: "Open Graph tags control the title, image, and description shown when your page is shared on LinkedIn, Facebook, Twitter, and Slack. Here is the complete setup guide.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/open-graph-tags' },
};
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Open Graph Tags</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Open Graph Tags: Control How Your Pages Look When Shared</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Analyze your site SEO free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Try SitemapFixer Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        <p style={{ marginBottom: 24 }}>Open Graph (OG) tags are meta tags that control how your page appears in link previews on social networks and messaging apps. When someone shares your URL on LinkedIn, Facebook, Twitter/X, Slack, or iMessage, the platform fetches your OG tags to build the preview card. Without OG tags, platforms generate their own preview from whatever content they can find - which is often wrong.</p>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Essential Open Graph Tags</h2>
        <div style={{ background: '#0a0a0f', borderRadius: 10, padding: '20px 24px', marginBottom: 24, fontFamily: 'monospace', fontSize: 12, color: '#e5e7eb', lineHeight: 1.9, overflowX: 'auto' }}>
          <div>{'<meta property="og:title" content="Your Page Title Here" />'}</div>
          <div>{'<meta property="og:description" content="Your description - 2-3 sentences." />'}</div>
          <div>{'<meta property="og:image" content="https://yoursite.com/og-image.jpg" />'}</div>
          <div>{'<meta property="og:url" content="https://yoursite.com/page" />'}</div>
          <div>{'<meta property="og:type" content="website" />'}</div>
        </div>
        <p style={{ marginBottom: 24 }}>The og:image is the most important tag for social sharing. Use a 1200x630px image (1.91:1 ratio) for best compatibility across platforms. Host the image on your own domain or a reliable CDN - never use a relative URL. The image must be accessible publicly, not behind authentication. Twitter/X also requires twitter:image if you want a large card.</p>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Twitter Card Tags</h2>
        <div style={{ background: '#0a0a0f', borderRadius: 10, padding: '20px 24px', marginBottom: 24, fontFamily: 'monospace', fontSize: 12, color: '#e5e7eb', lineHeight: 1.9, overflowX: 'auto' }}>
          <div>{'<meta name="twitter:card" content="summary_large_image" />'}</div>
          <div>{'<meta name="twitter:title" content="Your Page Title" />'}</div>
          <div>{'<meta name="twitter:description" content="Your description." />'}</div>
          <div>{'<meta name="twitter:image" content="https://yoursite.com/og-image.jpg" />'}</div>
        </div>
        <p style={{ marginBottom: 24 }}>Twitter reads og:* tags as a fallback but has its own twitter:* tags that take precedence. Set twitter:card to summary_large_image for the full-width image preview. If you only set OG tags, Twitter will use them, but results are more reliable with explicit twitter:* tags.</p>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Article Open Graph Tags</h2>
        <p style={{ marginBottom: 24 }}>For blog posts, add og:type of article and article-specific tags: article:published_time (ISO 8601 date), article:author (URL of author profile), article:section (category). These help LinkedIn and Facebook properly categorize your content and can improve how it displays in news-feed contexts.</p>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Testing Open Graph Tags</h2>
        <p style={{ marginBottom: 24 }}>Facebook provides the Sharing Debugger at developers.facebook.com/tools/debug. Enter your URL to see exactly how Facebook fetches and displays your OG tags, including any errors. LinkedIn has a Post Inspector at linkedin.com/post-inspector. Twitter has the Card Validator at cards-dev.twitter.com/validator. After updating OG tags, use these tools to refresh the cached preview - most platforms cache previews for hours or days.</p>
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Analyze your full SEO setup</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free sitemap analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>
    </div>
  );
}
