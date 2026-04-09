import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Sitemap Size Limit: What to Do at 50K URLs',
  description: "Google limits each sitemap file to 50,000 URLs and 50MB uncompressed. Here is how sitemap index files work and how to split large sitemaps correctly.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/sitemap-size-limit' },
  openGraph: {
    title: 'Sitemap Size Limit: What to Do at 50K URLs',
    description: 'Google limits each sitemap file to 50,000 URLs and 50MB uncompressed. Here is how sitemap index files work and how to split large sitemaps correctly.',
    url: 'https://sitemapfixer.com/learn/sitemap-size-limit',
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
  { h: "The Sitemap Size Limits", d: "Google's sitemap protocol specifies two limits: a maximum of 50,000 URLs per sitemap file, and a maximum file size of 50MB (52,428,800 bytes) uncompressed. If your sitemap exceeds either limit, Google may not process all URLs in the file. Most sites never approach these limits - a typical URL entry with lastmod and changefreq is around 150-200 bytes, so 50MB accommodates roughly 250,000-330,000 URLs at that size. The 50,000 URL limit is usually the binding constraint." },
  { h: "Sitemap Index Files", d: "When your site exceeds the per-file limit, create a sitemap index file - an XML file that lists multiple child sitemap files. The sitemap index uses the sitemapindex element containing multiple sitemap elements, each with a loc pointing to a child sitemap file and an optional lastmod date. Submit the sitemap index URL (not the individual child sitemaps) to Google Search Console. Google follows the index to discover and process all child sitemaps. There is no size limit on the index file itself." },
  { h: "How to Split Your Sitemap", d: "Split by content type: one sitemap for blog posts, one for product pages, one for category pages, one for static pages. This organization makes it easy to monitor indexing rates by content type in Search Console. Name files descriptively: sitemap-blog.xml, sitemap-products.xml, sitemap-categories.xml. The sitemap index at sitemap.xml or sitemap_index.xml references all of them. Most CMS platforms (WordPress with Yoast, Shopify) handle this automatically." },
  { h: "Gzip Compression", d: "You can compress sitemap files using gzip to reduce file size. A gzip-compressed sitemap can be significantly smaller on disk, though the 50MB limit refers to the uncompressed size. Use .xml.gz extension for compressed sitemaps. Most web servers can serve gzip-compressed sitemaps automatically. Googlebot supports gzip-encoded sitemaps. If your uncompressed sitemap is 40MB and compresses to 5MB, you are well within limits." },
  { h: "Monitoring Large Sitemaps in Search Console", d: "After submitting a sitemap index with multiple child sitemaps, Google Search Console shows statistics for each child sitemap separately - how many URLs were submitted and how many are indexed. Monitor the ratio for each child sitemap. If one child sitemap has a much lower indexing rate than others, investigate the content quality on those pages. Use the Sitemaps report to detect processing errors on any child file." },
];
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Sitemap Size Limit</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Sitemap Size Limit: 50,000 URLs and 50MB Explained</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your sitemap configuration free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Sitemap Free</a>
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
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Validate your sitemap structure</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free - checks sitemap format and URL validity</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Sitemap Free</a>
      </div>

        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/learn/what-is-an-xml-sitemap" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>What Is an XML Sitemap?</a></li>
            <li><a href="/learn/xml-sitemap-format" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>XML Sitemap Format: Complete Reference with Examples</a></li>
            <li><a href="/learn/xml-sitemap-generator" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>XML Sitemap Generator: Create Your Sitemap Free</a></li>
            <li><a href="/learn/sitemap-best-practices" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>XML Sitemap Best Practices</a></li>
            <li><a href="/learn/how-to-create-a-sitemap" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>How to Create a Sitemap: WordPress, Shopify, Next.js</a></li>
          </ul>
        </div>
    </div>
  );
}
