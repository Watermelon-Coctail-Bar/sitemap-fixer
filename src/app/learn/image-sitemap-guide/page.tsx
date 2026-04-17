import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Image Sitemap: How to Create One for SEO',
  description: 'What an image sitemap does, the XML format, tag limits, platform handling (WordPress, Shopify), and how to submit to Google Search Console.',
  keywords: 'image sitemap, image sitemap xml, image sitemap example, image sitemap generator, google image sitemap, image sitemap seo',
  alternates: { canonical: 'https://sitemapfixer.com/learn/image-sitemap-guide' },
  openGraph: {
    title: 'Image Sitemap: How to Create One for SEO',
    description: 'What an image sitemap does, the XML format, tag limits, platform handling (WordPress, Shopify), and how to submit to Google Search Console.',
    url: 'https://sitemapfixer.com/learn/image-sitemap-guide',
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
  const faqSchema = "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Do I need a separate image sitemap?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Usually not. Google supports image entries inside your regular sitemap via the xmlns:image namespace. A separate image sitemap is only useful if you have millions of images or want to manage them independently. Most sites benefit more from good alt text, filenames, and structured data.\"}},{\"@type\":\"Question\",\"name\":\"How many images can I list per URL?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Google allows up to 1,000 image:image entries per URL entry in a sitemap. In practice, listing the most important 5-10 images per page yields better results than dumping every decorative image.\"}},{\"@type\":\"Question\",\"name\":\"Does Shopify generate an image sitemap automatically?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Shopify includes image:image entries inside its auto-generated sitemap.xml for products and collections. You cannot edit it directly, but the product's featured image and alt text flow through automatically. Apps like TinyIMG can extend this coverage.\"}}]}";

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px', fontFamily: 'Geist, sans-serif' }}>
        <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
          <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{'  /  '}
          <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{'  /  '}
          <span>Image Sitemap Guide</span>
        </nav>

        <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Image Sitemap: How to Create One for SEO</h1>

        <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 40 }}>
          An image sitemap is an XML file (or a section inside your main sitemap) that tells Google which images appear on each page of your site. It is the most reliable way to get images indexed in Google Images - especially for images loaded via JavaScript or CSS backgrounds. This guide shows the exact XML format, what tags are supported, limits, and how WordPress and Shopify handle image sitemaps out of the box.
        </p>

        <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 4 }}>Audit your image sitemap</div>
            <div style={{ fontSize: 13, color: '#6b6b7d' }}>Find missing alt tags, broken image URLs, and format issues</div>
          </div>
          <a href="/" style={{ background: '#0a0a0f', color: 'white', padding: '12px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 14, whiteSpace: 'nowrap' }}>Analyze My Sitemap</a>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>What an image sitemap does</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
          An image sitemap uses Google's image namespace (<code>http://www.google.com/schemas/sitemap-image/1.1</code>) to associate images with the pages they appear on. Each URL entry can contain up to 1,000 <code>&lt;image:image&gt;</code> children, each describing one image. Google uses this data to surface images in Google Images, enrich search snippets, and match images to queries. Without it, Google relies on crawling and rendering - which misses lazy-loaded, CSS-background, or CDN-hosted images.
        </p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>When you need a separate image sitemap vs inline image tags</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
          Inline image tags inside your existing sitemap are the recommended approach for most sites: you add the image namespace to the <code>&lt;urlset&gt;</code> element and put <code>&lt;image:image&gt;</code> children inside each <code>&lt;url&gt;</code> entry. A fully separate image sitemap (a standalone file listing only image entries) is useful when you have millions of images, run a dedicated stock photo or media site, or want to isolate image indexing status from page indexing in Search Console reports.
        </p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>XML format and supported tags</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 12 }}>Google currently supports four image tags inside <code>&lt;image:image&gt;</code>:</p>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 32 }}>
          <li style={{ marginBottom: 8 }}><code>&lt;image:loc&gt;</code> (required) - absolute URL of the image file.</li>
          <li style={{ marginBottom: 8 }}><code>&lt;image:caption&gt;</code> (optional) - a caption describing the image.</li>
          <li style={{ marginBottom: 8 }}><code>&lt;image:title&gt;</code> (optional) - the image title.</li>
          <li style={{ marginBottom: 8 }}><code>&lt;image:license&gt;</code> (optional) - URL to a page describing the image license.</li>
        </ul>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
          Google deprecated <code>image:geo_location</code> and <code>image:family_friendly</code> in 2022 - they are now ignored. Alt text is still read from the page HTML, not the sitemap.
        </p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Image sitemap XML example</h2>
        <div style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
          <pre style={{ margin: 0, fontSize: 13, lineHeight: 1.7, color: '#1c1c26', whiteSpace: 'pre-wrap', fontFamily: 'DM Mono, monospace' }}>{`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>https://example.com/products/leather-boots</loc>
    <image:image>
      <image:loc>https://cdn.example.com/boots-main.jpg</image:loc>
      <image:title>Handmade Leather Boots</image:title>
      <image:caption>Full-grain leather ankle boots, brown.</image:caption>
      <image:license>https://example.com/image-license</image:license>
    </image:image>
    <image:image>
      <image:loc>https://cdn.example.com/boots-side.jpg</image:loc>
      <image:title>Leather Boots Side View</image:title>
    </image:image>
  </url>
</urlset>`}</pre>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Limits and best practices</h2>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 32 }}>
          <li style={{ marginBottom: 8 }}><strong>1,000 images per URL entry</strong> - hard Google limit. Use multiple URL entries or paginate if needed.</li>
          <li style={{ marginBottom: 8 }}><strong>50,000 URL entries and 50 MB per sitemap file</strong> - the standard sitemap limits still apply.</li>
          <li style={{ marginBottom: 8 }}><strong>Only list images you own or have rights to</strong> - Google can surface license info in Images results.</li>
          <li style={{ marginBottom: 8 }}><strong>Use absolute URLs</strong> - relative paths are not allowed.</li>
          <li style={{ marginBottom: 8 }}><strong>Do not block images in robots.txt</strong> - if Googlebot cannot fetch the image file, the entry is discarded.</li>
          <li style={{ marginBottom: 8 }}><strong>Quality over quantity</strong> - list meaningful content images, not icons, pixels, or decorative sprites.</li>
        </ul>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How WordPress and Shopify handle image sitemaps</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
          <strong>WordPress:</strong> Yoast SEO and Rank Math both include inline image entries in their sitemap_index.xml by default. They scan post content for <code>&lt;img&gt;</code> tags and featured images, then add <code>image:loc</code> children. All in One SEO offers the same behavior under Sitemap Settings. No extra configuration needed. <strong>Shopify:</strong> the auto-generated sitemap.xml already contains image entries for product and collection images, pulled from the product's featured image and gallery. You cannot edit the file, but optimizing product alt text and images flows through automatically. Apps like TinyIMG or SEO King can extend image sitemap coverage to blog posts and pages.
        </p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Submitting to Google Search Console</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
          If your image entries live inside your main sitemap, no extra submission is needed - Google indexes them alongside URLs. For a standalone image sitemap, open GSC <em>Indexing &gt; Sitemaps</em>, enter the path (e.g. <code>/image-sitemap.xml</code>), and click Submit. Monitor the <em>Pages</em> and <em>Performance on Search &gt; Search type: Image</em> reports to confirm indexing. Add the sitemap URL to a <code>Sitemap:</code> line in robots.txt so other crawlers find it too.
        </p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, marginTop: 40 }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Do I need a separate image sitemap?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Usually not. Google supports image entries inside your regular sitemap via the xmlns:image namespace. A separate image sitemap is only useful if you have millions of images or want to manage them independently. Most sites benefit more from good alt text, filenames, and structured data.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>How many images can I list per URL?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Google allows up to 1,000 image:image entries per URL entry in a sitemap. In practice, listing the most important 5-10 images per page yields better results than dumping every decorative image.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Does Shopify generate an image sitemap automatically?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Shopify includes image:image entries inside its auto-generated sitemap.xml for products and collections. You cannot edit it directly, but the product's featured image and alt text flow through automatically. Apps like TinyIMG can extend this coverage.</div>
          </div>
        </div>

        <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
          <div style={{ fontSize: 22, fontWeight: 700, color: 'white', marginBottom: 8 }}>Check your image sitemap coverage</div>
          <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Find missing image entries and broken URLs in 60 seconds</div>
          <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 32px', borderRadius: 8, textDecoration: 'none', fontWeight: 700, fontSize: 15 }}>Analyze My Sitemap Free</a>
        </div>

        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</div>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <li><a href="/learn/video-sitemap-guide" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Video Sitemap Guide</a></li>
            <li><a href="/learn/sitemap-priority-guide" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Sitemap Priority</a></li>
            <li><a href="/learn/how-to-create-a-sitemap" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>How to Create a Sitemap</a></li>
            <li><a href="/fix-sitemap-for/shopify" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Fix Shopify Sitemap</a></li>
          </ul>
        </div>
      </div>
    </>
  );
}
