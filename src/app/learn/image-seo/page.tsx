import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Image SEO: How to Optimize Images for Google Search and Discovery | SitemapFixer',
  description: "Images appear in Google Image search, Google Discover, and regular web search. Here is how to optimize filenames, alt text, compression, and structured data for image SEO.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/image-seo' },
};
const sections = [
  { h: "Why Image SEO Matters", d: "Google Image Search drives significant traffic for visual industries - ecommerce, food, travel, design, and fashion. Google Discover shows images prominently and rewards pages with high-quality, large images. Within regular web search, pages with optimized images often earn image carousels and visual enhancements that increase click-through rate. For ecommerce specifically, product images in Google Shopping require clean product images with proper schema markup." },
  { h: "Descriptive File Names", d: "Rename images before uploading. blue-running-shoes-nike-air-max.jpg ranks in image search for those terms. IMG_4521.jpg tells Google nothing. Use hyphens between words, include the primary subject and relevant attributes, and keep names under 5-6 words. For product images, include the product name, color, and key feature. This is one of the easiest image SEO improvements and takes seconds per image." },
  { h: "Alt Text: Write for Accessibility and SEO", d: "Alt text serves two purposes: describing the image to screen readers, and giving Google a text signal about the image content. Write descriptive alt text that accurately describes what is in the image. For product images: Nike Air Max 90 running shoes in blue, side view. For editorial images: construction workers building a wooden frame house. Avoid: keyword stuffing multiple terms, leaving alt text blank, writing just the image filename, or using the same alt text on multiple different images." },
  { h: "Compression and Format", d: "Uncompressed images are the number one page speed problem. Use WebP format - it delivers 25-35% smaller file sizes than JPEG at equivalent quality, with broad browser support. AVIF is even smaller but less universally supported. Target under 100KB for most images, under 200KB for hero images. Tools: Squoosh (free browser tool), ImageOptim (Mac), TinyPNG (web). In Next.js, the Image component automatically converts to WebP and resizes to the display dimensions." },
  { h: "Image Dimensions and Responsive Images", d: "Always specify width and height attributes on img tags. This reserves the correct space during page load, preventing layout shift (CLS). Use srcset and sizes attributes for responsive images - serve smaller images to mobile users and larger ones to desktop. The browser automatically selects the most appropriate image based on device pixel ratio and viewport size. This reduces wasted bandwidth on mobile and improves Core Web Vitals on all devices." },
  { h: "Image Sitemaps", d: "For sites with a large number of important images - ecommerce product photos, photography portfolios, news sites - an image sitemap helps Google discover and index images it might otherwise miss. Extend your existing sitemap with image:image tags inside each URL entry. Include image:loc (the image URL), image:title, and optionally image:caption. Submit your image sitemap separately in Google Search Console to monitor image indexing status." },
];
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Image SEO</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Image SEO: Optimize Images for Google Search</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your image sitemap free</span>
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
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Analyze your image sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free - checks all image URLs in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>
    </div>
  );
}
