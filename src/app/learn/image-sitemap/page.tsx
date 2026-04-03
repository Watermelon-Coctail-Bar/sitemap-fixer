import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Image Sitemap: How to Add Images to Your XML Sitemap | SitemapFixer',
  description: "An image sitemap tells Google about images on your site that it might otherwise miss. Here is the format, when you need one, and how to create it.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/image-sitemap' },
};
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Image Sitemap</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Image Sitemap: How to Help Google Find and Index Your Images</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Validate your sitemap free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Check My Sitemap</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        <p style={{ marginBottom: 24 }}>An image sitemap is an XML sitemap that provides Google with additional information about images on your site. Google can usually find images by crawling your pages, but an image sitemap ensures it discovers images that might otherwise be missed - particularly images loaded via JavaScript or images hosted on a CDN under a different domain.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Do You Need a Separate Image Sitemap?</h2>
        <p style={{ marginBottom: 24 }}>Not necessarily. You have two options: a dedicated image sitemap file, or image tags added to your existing URL sitemap. The second approach is more common and simpler to maintain. Adding image:image tags inside your existing URL entries tells Google about images on each page without creating a separate file. Only create a standalone image sitemap if you have a very large number of images, an image-focused site (photography portfolio, stock photo site), or images hosted on a separate domain.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Image Sitemap Format</h2>
        <p style={{ marginBottom: 16 }}>Add image information inside your existing url tags using the image namespace:</p>
        <div style={{ background: '#0a0a0f', borderRadius: 10, padding: '20px 24px', marginBottom: 24, fontFamily: 'monospace', fontSize: 12, color: '#e5e7eb', lineHeight: 1.7, overflowX: 'auto' }}>
          <div>{'<?xml version="1.0" encoding="UTF-8"?>'}</div>
          <div>{'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"'}</div>
          <div style={{ paddingLeft: 20 }}>{'xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">'}</div>
          <div style={{ paddingLeft: 20 }}>{'<url>'}</div>
          <div style={{ paddingLeft: 40 }}>{'<loc>https://yoursite.com/products/widget</loc>'}</div>
          <div style={{ paddingLeft: 40 }}>{'<image:image>'}</div>
          <div style={{ paddingLeft: 60 }}>{'<image:loc>https://yoursite.com/images/widget.jpg</image:loc>'}</div>
          <div style={{ paddingLeft: 60 }}>{'<image:title>Blue Widget Product Photo</image:title>'}</div>
          <div style={{ paddingLeft: 60 }}>{'<image:caption>Our best-selling blue widget</image:caption>'}</div>
          <div style={{ paddingLeft: 40 }}>{'</image:image>'}</div>
          <div style={{ paddingLeft: 20 }}>{'</url>'}</div>
          <div>{'</urlset>'}</div>
        </div>
        <p style={{ marginBottom: 24 }}>Each URL entry can have up to 1,000 image:image tags. The image:loc tag is required. title and caption are optional but useful for image search. Do not include images that are blocked by robots.txt - Google cannot index blocked images even if they appear in the sitemap.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>When Image Sitemaps Matter Most</h2>
        <p style={{ marginBottom: 24 }}>Image sitemaps are most valuable for e-commerce sites with product photos, photography and portfolio sites, news sites with editorial images, and any site where images are loaded dynamically via JavaScript. If your images are in standard HTML img tags on crawlable pages, Google usually finds them without a sitemap. If your images only load after user interaction or are embedded in JavaScript bundles, an image sitemap significantly improves discoverability.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Image SEO Best Practices</h2>
        <p style={{ marginBottom: 24 }}>Whether or not you use an image sitemap, these practices improve how Google understands and ranks your images: use descriptive filenames (widget-blue-product.jpg not IMG_1234.jpg), write specific alt text on every img tag, use structured data (Product schema with image property) for e-commerce, serve images in modern formats like WebP, and make sure images load within your Core Web Vitals thresholds - slow-loading images hurt LCP scores.</p>
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Check your sitemap for image indexing issues</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free - full analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Sitemap Free</a>
      </div>
    </div>
  );
}
