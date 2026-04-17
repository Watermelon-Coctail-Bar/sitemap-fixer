import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Video Sitemap: XML Format and Setup Guide',
  description: 'How to build a video sitemap: required XML tags, examples, submission to GSC, and common mistakes. Includes working sample syntax.',
  keywords: 'video sitemap, videos sitemap, video sitemap generator, video sitemap xml, video sitemap example, video sitemap google',
  alternates: { canonical: 'https://sitemapfixer.com/learn/video-sitemap-guide' },
  openGraph: {
    title: 'Video Sitemap: XML Format and Setup Guide',
    description: 'How to build a video sitemap: required XML tags, examples, submission to GSC, and common mistakes. Includes working sample syntax.',
    url: 'https://sitemapfixer.com/learn/video-sitemap-guide',
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

export default function Page() {
  const faqSchema = "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Do I need a video sitemap if I already use VideoObject schema?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Not strictly. Google says VideoObject structured data is the preferred method and a video sitemap is a supplementary signal. Use a sitemap when you have many videos, videos loaded dynamically via JavaScript, or videos that schema markup cannot fully describe.\"}},{\"@type\":\"Question\",\"name\":\"How many videos can a video sitemap contain?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"A single video sitemap file can contain up to 50,000 URL entries and must be under 50 MB uncompressed. Each URL entry can list multiple videos. For larger libraries, split into multiple sitemaps and reference them from a sitemap index file.\"}},{\"@type\":\"Question\",\"name\":\"Can I combine video entries with regular URLs in one sitemap?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes. Add the xmlns:video namespace to your main sitemap and include video:video children inside URL entries that have videos. Many CMS plugins and generators do this automatically.\"}}]}";

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px', fontFamily: 'Geist, sans-serif' }}>
        <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
          <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{'  /  '}
          <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{'  /  '}
          <span>Video Sitemap Guide</span>
        </nav>

        <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Video Sitemap: XML Format and Setup Guide</h1>

        <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 40 }}>
          A video sitemap is a specialized XML file that tells Google about the videos on your site - their thumbnails, titles, durations, and hosting URLs. Done right, a videos sitemap helps Google index your videos into the Video tab, rich results, and Google search. This guide covers the exact XML format, required tags, a working example, and how to submit your video sitemap to Search Console.
        </p>

        <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 4 }}>Validate your video sitemap</div>
            <div style={{ fontSize: 13, color: '#6b6b7d' }}>Check XML, required tags, and broken thumbnails in 60 seconds</div>
          </div>
          <a href="/" style={{ background: '#0a0a0f', color: 'white', padding: '12px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 14, whiteSpace: 'nowrap' }}>Analyze My Sitemap</a>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>What a video sitemap is</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
          A video sitemap is an XML file that uses Google's video namespace (<code>http://www.google.com/schemas/sitemap-video/1.1</code>) to describe each video hosted on your site. It lists the landing page URL where the video is embedded, plus child elements describing the video itself - thumbnail, title, description, content or player URL, and duration. Google uses this data to index videos and show them in Video results and rich snippets.
        </p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>When to create a video sitemap vs embedding schema</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
          Google's official recommendation is to use VideoObject JSON-LD schema on each video page. Schema is usually enough for sites with a handful of videos. A dedicated video sitemap is worth the effort when: you have dozens or thousands of videos, your videos load via JavaScript (so crawlers may miss them during rendering), you need to describe multiple videos per page, or you want to supply metadata like <code>live_broadcast</code>, <code>platform</code> restrictions, or expiration dates that are easier to manage centrally. Many sites do both - schema on-page plus a sitemap for belt-and-braces coverage.
        </p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Required and optional XML tags</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 12 }}><strong>Required tags (per video):</strong></p>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 16 }}>
          <li><code>&lt;video:thumbnail_loc&gt;</code> - URL of a still image, ideally 1280x720, at least 160x90.</li>
          <li><code>&lt;video:title&gt;</code> - plain text title, max 100 characters.</li>
          <li><code>&lt;video:description&gt;</code> - plain text, max 2048 characters.</li>
          <li><code>&lt;video:content_loc&gt;</code> OR <code>&lt;video:player_loc&gt;</code> - direct media URL (mp4) or embeddable player URL. At least one is required.</li>
        </ul>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 12 }}><strong>Recommended optional tags:</strong></p>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 32 }}>
          <li><code>&lt;video:duration&gt;</code> - length in seconds (1 to 28800).</li>
          <li><code>&lt;video:expiration_date&gt;</code>, <code>&lt;video:publication_date&gt;</code>, <code>&lt;video:rating&gt;</code>, <code>&lt;video:view_count&gt;</code></li>
          <li><code>&lt;video:family_friendly&gt;</code> - yes/no.</li>
          <li><code>&lt;video:live&gt;</code>, <code>&lt;video:requires_subscription&gt;</code>, <code>&lt;video:platform&gt;</code>, <code>&lt;video:restriction&gt;</code></li>
        </ul>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Video sitemap XML example</h2>
        <div style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
          <pre style={{ margin: 0, fontSize: 13, lineHeight: 1.7, color: '#1c1c26', whiteSpace: 'pre-wrap', fontFamily: 'DM Mono, monospace' }}>{`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  <url>
    <loc>https://example.com/videos/how-to-bake-bread</loc>
    <video:video>
      <video:thumbnail_loc>https://example.com/thumbs/bread.jpg</video:thumbnail_loc>
      <video:title>How to Bake Bread at Home</video:title>
      <video:description>Step-by-step tutorial for baking artisan sourdough bread.</video:description>
      <video:content_loc>https://example.com/media/bread.mp4</video:content_loc>
      <video:player_loc>https://example.com/player?id=bread</video:player_loc>
      <video:duration>612</video:duration>
      <video:publication_date>2025-09-12T10:00:00+00:00</video:publication_date>
      <video:family_friendly>yes</video:family_friendly>
      <video:live>no</video:live>
    </video:video>
  </url>
</urlset>`}</pre>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How to submit your video sitemap to Google Search Console</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
          Upload the XML file to your web root (or wherever your sitemaps live) and make it accessible at a public URL. In Google Search Console, open <em>Indexing &gt; Sitemaps</em>, enter the path (for example <code>/video-sitemap.xml</code>), and click Submit. GSC will report status, last read date, and any parsing errors. You can also add a <code>Sitemap:</code> line in robots.txt pointing to the video sitemap so other crawlers discover it. Monitor the Videos report under <em>Indexing &gt; Video pages</em> for coverage issues.
        </p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common video sitemap mistakes</h2>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 32 }}>
          <li style={{ marginBottom: 8 }}><strong>Missing thumbnail</strong> - every video must have a reachable <code>thumbnail_loc</code>. Blocked or 404 thumbnails disqualify the entry.</li>
          <li style={{ marginBottom: 8 }}><strong>Invalid duration</strong> - must be an integer number of seconds between 1 and 28800. Strings like "10:12" are rejected.</li>
          <li style={{ marginBottom: 8 }}><strong>Wrong content vs player URL</strong> - <code>content_loc</code> must be a direct media file, not an HTML page. <code>player_loc</code> should be an embeddable URL (iframe or SWF URL).</li>
          <li style={{ marginBottom: 8 }}><strong>Landing page does not contain the video</strong> - Google must find the video on the <code>&lt;loc&gt;</code> page. A sitemap pointing to a page with no embed is ignored.</li>
          <li style={{ marginBottom: 8 }}><strong>Blocking video files or thumbnails in robots.txt</strong> - if Google cannot fetch the media or image, the entry fails.</li>
        </ul>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, marginTop: 40 }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Do I need a video sitemap if I already use VideoObject schema?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Not strictly. Google says VideoObject structured data is the preferred method and a video sitemap is a supplementary signal. Use a sitemap when you have many videos, videos loaded dynamically via JavaScript, or videos that schema markup cannot fully describe.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>How many videos can a video sitemap contain?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>A single video sitemap file can contain up to 50,000 URL entries and must be under 50 MB uncompressed. Each URL entry can list multiple videos. For larger libraries, split into multiple sitemaps and reference them from a sitemap index file.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Can I combine video entries with regular URLs in one sitemap?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Yes. Add the xmlns:video namespace to your main sitemap and include video:video children inside URL entries that have videos. Many CMS plugins and generators do this automatically.</div>
          </div>
        </div>

        <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
          <div style={{ fontSize: 22, fontWeight: 700, color: 'white', marginBottom: 8 }}>Validate your video sitemap</div>
          <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Find missing thumbnails, broken URLs, and XML errors</div>
          <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 32px', borderRadius: 8, textDecoration: 'none', fontWeight: 700, fontSize: 15 }}>Analyze My Sitemap Free</a>
        </div>

        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</div>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <li><a href="/learn/image-sitemap-guide" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Image Sitemap Guide</a></li>
            <li><a href="/learn/sitemap-priority-guide" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Sitemap Priority Tag</a></li>
            <li><a href="/learn/how-to-create-a-sitemap" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>How to Create a Sitemap</a></li>
            <li><a href="/learn/google-search-console-sitemap" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Submit Sitemap to GSC</a></li>
          </ul>
        </div>
      </div>
    </>
  );
}
