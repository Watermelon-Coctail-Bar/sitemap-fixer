import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'News Sitemap: How to Set Up Google News Sitemaps for Publishers | SitemapFixer',
  description: "A Google News sitemap helps news publishers get articles indexed in Google News and Google Discover within minutes. Here is the format, requirements, and submission process.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/news-sitemap' },
};
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>News Sitemap</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>News Sitemap: Get Your Articles Into Google News Fast</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Validate your news sitemap free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Check My Sitemap</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        <p style={{ marginBottom: 24 }}>A Google News sitemap is a specialized XML sitemap extension that helps news publishers get articles crawled and indexed in Google News and Google Discover quickly — often within minutes of publication. Unlike standard sitemaps, news sitemaps only include articles published in the last 2 days. Google ignores older articles in news sitemaps.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>News Sitemap Format</h2>
        <div style={{ background: '#0a0a0f', borderRadius: 10, padding: '20px 24px', marginBottom: 24, fontFamily: 'monospace', fontSize: 12, color: '#e5e7eb', lineHeight: 1.8, overflowX: 'auto' }}>
          <div>{'<?xml version="1.0" encoding="UTF-8"?>'}</div>
          <div>{'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"'}</div>
          <div style={{ paddingLeft: 16 }}>{'xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">'}</div>
          <div style={{ paddingLeft: 16 }}>{'<url>'}</div>
          <div style={{ paddingLeft: 32 }}>{'<loc>https://example.com/article-slug</loc>'}</div>
          <div style={{ paddingLeft: 32 }}>{'<news:news>'}</div>
          <div style={{ paddingLeft: 48 }}>{'<news:publication>'}</div>
          <div style={{ paddingLeft: 64 }}>{'<news:name>Your Publication Name</news:name>'}</div>
          <div style={{ paddingLeft: 64 }}>{'<news:language>en</news:language>'}</div>
          <div style={{ paddingLeft: 48 }}>{'</news:publication>'}</div>
          <div style={{ paddingLeft: 48 }}>{'<news:publication_date>2025-04-01T10:00:00+00:00</news:publication_date>'}</div>
          <div style={{ paddingLeft: 48 }}>{'<news:title>Your Article Headline Here</news:title>'}</div>
          <div style={{ paddingLeft: 32 }}>{'</news:news>'}</div>
          <div style={{ paddingLeft: 16 }}>{'</url>'}</div>
          <div>{'</urlset>'}</div>
        </div>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Key Requirements</h2>
        <p style={{ marginBottom: 12 }}><strong>Only recent articles:</strong> Include only articles published within the last 48 hours. Google ignores anything older. Your news sitemap should be updated with new articles and old articles removed continuously — automate this in your CMS.</p>
        <p style={{ marginBottom: 12 }}><strong>Publication name consistency:</strong> The news:name must exactly match the name registered in Google News. If your registered name is "The Daily Post" you cannot use "Daily Post" or "TDP" — it must be exact.</p>
        <p style={{ marginBottom: 12 }}><strong>Publication date accuracy:</strong> Use ISO 8601 format with timezone offset. Google uses this date to determine newsworthiness and recency. Incorrect dates can prevent Google News inclusion.</p>
        <p style={{ marginBottom: 24 }}><strong>Separate from main sitemap:</strong> Keep your news sitemap at a separate URL (e.g., /news-sitemap.xml) distinct from your main sitemap.xml. Submit both to Google Search Console separately.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Google News Publisher Center</h2>
        <p style={{ marginBottom: 24 }}>To appear in Google News, submit your publication at publishercenter.google.com. This is separate from Search Console. You need to verify your site ownership, agree to Google News content policies, and submit your news sitemap URL. Google reviews new publications before including them — approval typically takes 1-4 weeks. Once approved, new articles in your news sitemap are usually crawled within 5-10 minutes of sitemap update.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>CMS Implementation</h2>
        <p style={{ marginBottom: 24 }}>WordPress users: Yoast SEO Premium and RankMath Pro both include automatic news sitemap generation. For Next.js, generate the news sitemap dynamically via a route handler that queries your CMS for articles published in the last 48 hours and outputs valid XML. Regenerate or serve fresh on every request — a stale news sitemap misses the indexing window for new articles.</p>
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Validate your news sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free — checks format and URL validity</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Check My Sitemap Free</a>
      </div>
    </div>
  );
}
