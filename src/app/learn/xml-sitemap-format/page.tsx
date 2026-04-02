import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'XML Sitemap Format: Complete Reference with Examples | SitemapFixer',
  description: "A complete XML sitemap format reference — required elements, optional tags, attribute values, and working examples for standard sitemaps and sitemap index files.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/xml-sitemap-format' },
};
const fields = [
  { tag: "loc", req: true, d: "The URL of the page. Must be fully qualified with protocol (https://). No relative URLs. If your site uses both www and non-www, use the canonical version consistently. All URLs in the sitemap must use the same protocol as your canonical domain. Maximum 2,048 characters." },
  { tag: "lastmod", req: false, d: "The date the page was last significantly modified, in ISO 8601 format: YYYY-MM-DD or YYYY-MM-DDTHH:MM:SS+timezone. Google uses this to prioritize recrawling recently changed pages. Only include lastmod if it accurately reflects when content changed — inaccurate dates are worse than omitting the field. Google ignores lastmod if it is always today's date for all URLs." },
  { tag: "changefreq", req: false, d: "How frequently the page is likely to change. Values: always, hourly, daily, weekly, monthly, yearly, never. This is a hint to crawlers, not a directive — Google may ignore it. Inaccurate values train Google to distrust your sitemap. If you are unsure, omit this field entirely." },
  { tag: "priority", req: false, d: "The priority of this URL relative to other URLs on your site. Value between 0.0 and 1.0, default 0.5. This is relative within your own site — it does not boost your rankings versus other sites. Google states it largely ignores priority. Only use it if you have a genuine reason to differentiate crawl priority across your URL set." },
];
const example = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://example.com/</loc>
    <lastmod>2025-04-01</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://example.com/about</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`;
const indexExample = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://example.com/sitemap-blog.xml</loc>
    <lastmod>2025-04-01</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://example.com/sitemap-products.xml</loc>
    <lastmod>2025-04-01</lastmod>
  </sitemap>
</sitemapindex>`;
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>XML Sitemap Format</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>XML Sitemap Format: Complete Reference with Examples</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Validate your sitemap format free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Sitemap Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginBottom: 20 }}>Standard Sitemap Example</h2>
        <div style={{ background: '#0a0a0f', borderRadius: 10, padding: '20px 24px', marginBottom: 32, fontFamily: 'monospace', fontSize: 13, color: '#e5e7eb', lineHeight: 1.8, overflowX: 'auto', whiteSpace: 'pre' }}>{example}</div>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginBottom: 20 }}>Field Reference</h2>
        {fields.map(({ tag, req, d }) => (
          <div key={tag} style={{ marginBottom: 24, paddingLeft: 16, borderLeft: '3px solid ' + (req ? '#2d5be3' : '#e4e4ed') }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
              <code style={{ fontFamily: 'monospace', fontWeight: 700, color: '#0a0a0f', fontSize: 16 }}>&lt;{tag}&gt;</code>
              <span style={{ fontSize: 11, padding: '2px 8px', borderRadius: 20, fontWeight: 700, background: req ? '#dbeafe' : '#f3f4f6', color: req ? '#1e40af' : '#6b7280' }}>{req ? 'REQUIRED' : 'OPTIONAL'}</span>
            </div>
            <p style={{ margin: 0, fontSize: 15 }}>{d}</p>
          </div>
        ))}
        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, marginTop: 40 }}>Sitemap Index Example</h2>
        <div style={{ background: '#0a0a0f', borderRadius: 10, padding: '20px 24px', fontFamily: 'monospace', fontSize: 13, color: '#e5e7eb', lineHeight: 1.8, overflowX: 'auto', whiteSpace: 'pre' }}>{indexExample}</div>
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Validate your sitemap format</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free — checks XML format, URLs, and field values</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Sitemap Free</a>
      </div>
    </div>
  );
}
