import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Video SEO: How to Get Your Videos to Rank in Google Search | SitemapFixer',
  description: "Video can rank in Google Search, Google Video, and YouTube. Here is how to optimize hosted and embedded videos for search, including schema markup and video sitemaps.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/video-seo' },
};
const sections = [
  { h: "How Google Indexes Video", d: "Google indexes videos it can find, understand, and access. A video hosted on your site or embedded from YouTube can appear in Google Search results as a video rich result, in the Google Video tab, and in Google Discover. For Google to index a video, it needs to be able to crawl the page it is on, find the video file URL, and read metadata about the video (title, description, thumbnail, duration). Videos blocked by robots.txt or behind authentication are excluded." },
  { h: "Video Schema Markup", d: "Add VideoObject structured data to every page with a video. The minimum required properties are name (title), description, thumbnailUrl (image URL), and uploadDate (ISO 8601 format). Recommended additions: duration (in ISO 8601 duration format, e.g., PT4M30S for 4 minutes 30 seconds), contentUrl (direct URL to the video file), and embedUrl (the embed iframe URL). Without VideoObject schema, Google may still find and index your video, but schema markup makes it faster and more reliable." },
  { h: "Hosting vs YouTube Embed", d: "Self-hosted videos (on your own server or CDN) keep users on your site and give you full control over the experience. YouTube-hosted videos embedded on your site can also appear as rich results in Google Search, but the video itself ranks in YouTube search too, splitting your traffic. For marketing and explainer videos, hosting on YouTube and embedding is usually better because of YouTube's own search volume. For tutorials and content tightly integrated with your pages, self-hosting keeps users on your site." },
  { h: "Video Sitemaps", d: "A video sitemap is an XML sitemap extension that tells Google about videos on your pages. Add video:video tags inside your standard URL entries with video:thumbnail_loc, video:title, video:description, video:content_loc or video:player_loc, and optionally video:duration and video:publication_date. Submit your video sitemap in Google Search Console under Sitemaps. Google Search Console shows video indexing status and any errors in the Video section under Enhancements." },
  { h: "Key Optimization Factors", d: "Title: include your target keyword naturally, keep it under 70 characters. Description: write a genuine summary of the video content — Google reads this for context. Thumbnail: use a custom, high-quality 1280x720px thumbnail (16:9 ratio). For YouTube videos, the thumbnail is the most important click-through factor. Duration: accurate duration data in schema helps Google match your video to queries filtered by length. Transcript: providing a transcript as text content on the same page helps Google understand the video content and indexes the text separately." },
  { h: "Preventing Video Duplicate Content", d: "If the same video is published on multiple pages or on both your site and YouTube, use canonical tags to consolidate. The page with the most comprehensive content around the video should be the canonical version. For YouTube videos you also embed on your site, the YouTube page will typically outrank your page for video-specific queries — accept this and focus your page SEO on the surrounding text content rather than competing for the video result." },
];
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Video SEO</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Video SEO: How to Get Your Videos to Rank in Google</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your sitemap for video indexing issues</span>
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
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Check your video sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free sitemap analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>
    </div>
  );
}
