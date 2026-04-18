import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Video SEO: Rank Videos on Google and YouTube',
  description: "Video content appears in Google Search, Google Images, and YouTube. Here is how to optimize videos for maximum discoverability across all three platforms.",
  alternates: { canonical: 'https://sitemapfixer.com/blog/video-seo-guide' },
  openGraph: {
    title: 'Video SEO: Rank Videos on Google and YouTube',
    description: 'Video content appears in Google Search, Google Images, and YouTube. Here is how to optimize videos for maximum discoverability across all three platforms.',
    url: 'https://sitemapfixer.com/blog/video-seo-guide',
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
  { t: "YouTube vs hosted video: which is better for SEO", d: "Hosting on YouTube gives your video access to YouTube search (the world's second largest search engine) and earns video rich results in Google Search. Self-hosting on your site keeps users on your domain and is better for Core Web Vitals (YouTube embeds can hurt page speed). Best approach: host on YouTube AND embed on your site. The YouTube video appears in YouTube search and video rich results; the page embedding it appears in regular web search and benefits from the video content signals." },
  { t: "YouTube SEO basics", d: "Title: include the primary keyword early, be specific, keep under 60 characters. Description: write 200-500 words covering the video topic with keywords used naturally - YouTube's algorithm reads the description. Tags: include specific keyword phrases, not single words. Chapters: add timestamps with descriptive labels for each chapter - Google shows these directly in search results and they improve viewer retention. Thumbnail: custom thumbnails with high contrast and readable text significantly improve click-through rate." },
  { t: "VideoObject schema for web pages", d: "Add VideoObject structured data to pages with embedded videos. Required fields: name (video title), description, thumbnailUrl, uploadDate. Optional but valuable: duration (ISO 8601: PT15M for 15 minutes), embedUrl, contentUrl. Pages with valid VideoObject schema can earn video rich results in Google Search - showing the video thumbnail, duration, and upload date directly in the SERP. Test with Google Rich Results Test." },
  { t: "Video sitemaps", d: "For sites with many video pages, a video sitemap tells Google about your video content faster than it can discover through crawling. Include for each video: video:title, video:description, video:thumbnail_loc, video:content_loc or video:player_loc, and video:duration. Submit your video sitemap separately in Google Search Console. This is particularly important for news sites, educational platforms, and media sites where video is the primary content." },
];
export default function Page() {
  return (
    <article style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/blog" style={{ color: '#2d5be3', textDecoration: 'none' }}>Blog</a>{' / '}
        <span>Video SEO Guide</span>
      </nav>
      <div style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 16 }}>By <a href="/about" style={{ color: '#2d5be3', textDecoration: 'none' }}>Arnoldas Arny</a></div>
      <div style={{ fontSize: 13, color: '#9ca3af', marginBottom: 12 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"Article","headline":"Video SEO: Rank Videos on Google and YouTube","description":"Video content appears in Google Search, Google Images, and YouTube. Here is how to optimize videos for maximum discoverability across all three platforms.","url":"https://sitemapfixer.com/blog/video-seo-guide","author":{"@type":"Person","name":"Arnoldas Arny","url":"https://sitemapfixer.com/about"},"publisher":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com","logo":{"@type":"ImageObject","url":"https://sitemapfixer.com/opengraph-image"}},"datePublished":"2025-01-15","mainEntityOfPage":{"@type":"WebPage","@id":"https://sitemapfixer.com/blog/video-seo-guide"}}' }} />April 2025 · 7 min read</div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, lineHeight: 1.15 }}>Video SEO Guide: Rank on Google and YouTube</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your video pages are indexable free</span>
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
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Check your video pages are discoverable</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free sitemap and indexing check in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
  
        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/blog/ecommerce-seo-tips" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Ecommerce SEO: Get Product Pages to Rank</a></li>
            <li><a href="/blog/social-media-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Social Media SEO: Do Social Signals Matter?</a></li>
            <li><a href="/blog/mobile-seo-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Mobile SEO Guide: Optimize Your Site for Mobile Search</a></li>
            <li><a href="/blog/canonical-url-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Canonical URL: What It Is and How to Set It Correctly</a></li>
            <li><a href="/blog/url-structure-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>URL Structure SEO: How to Create SEO-Friendly URLs</a></li>
          </ul>
        </div>
    </div>
    </article>
  );
}
