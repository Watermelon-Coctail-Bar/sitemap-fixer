import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Noindex Fix Guide: How to Remove Noindex from Pages That Should Rank | SitemapFixer',
  description: "A noindex tag blocks Google from indexing your page. Here is how to find accidental noindex tags, why they happen, and how to fix them to restore indexing.",
  alternates: { canonical: 'https://sitemapfixer.com/blog/noindex-fix-guide' },
  openGraph: { title: 'Noindex Fix Guide: Restore Indexing to Your Pages', url: 'https://sitemapfixer.com/blog/noindex-fix-guide', type: 'article' },
};
const items = [
  { t: "What a noindex tag does", d: "A noindex meta tag (meta name=robots content=noindex) tells Google not to include the page in its search index. The page can still be crawled, but it will not appear in search results. This is useful for admin pages, checkout pages, and duplicate content — but catastrophic when applied accidentally to pages you want to rank." },
  { t: "Where noindex tags come from accidentally", d: "WordPress has a setting under Settings then Reading called 'Discourage search engines from indexing this site' — one checkbox that adds noindex to every page. This is commonly enabled during development and forgotten at launch. SEO plugins can add noindex to individual pages if the visibility setting is changed. Theme updates can sometimes reset these settings. Staging environments copied to production can carry over noindex directives." },
  { t: "How to find accidental noindex tags", d: "Check the page source of important pages for: meta name=robots content=noindex. In Google Search Console, the Pages report shows 'Excluded by noindex tag' — click it to see all affected URLs. In Screaming Frog, go to Directives then Noindex to see all pages with noindex. Test individual pages with Google Search Console URL Inspection — it shows whether the page is excluded and specifically if a noindex tag is the reason." },
  { t: "How to fix noindex tags", d: "In WordPress: go to Settings then Reading and uncheck 'Discourage search engines'. In Yoast SEO: open the page editor, click the Yoast panel, go to Advanced, and set Robots meta to 'Default for post type' or remove the noindex override. In RankMath: open the page, click RankMath, find the Advanced tab, and change the Robots Meta setting. After removing noindex: use Google Search Console URL Inspection to request indexing for the now-indexable page." },
  { t: "Sitemap and noindex conflicts", d: "If a page has a noindex tag but is also in your sitemap, Google Search Console reports it as 'Submitted URL has noindex tag'. This is a contradiction — your sitemap says index this page, the noindex tag says do not. Either remove the page from your sitemap (if noindex is intentional) or remove the noindex tag (if the page should be indexed). SitemapFixer detects this conflict automatically." },
];
export default function Page() {
  return (
    <article style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/blog" style={{ color: '#2d5be3', textDecoration: 'none' }}>Blog</a>{' / '}
        <span>Noindex Fix Guide</span>
      </nav>
      <div style={{ fontSize: 13, color: '#9ca3af', marginBottom: 12 }}>April 2025 · 5 min read</div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, lineHeight: 1.15 }}>Noindex Fix Guide: Restore Indexing to Your Pages</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Find noindex conflicts in your sitemap free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Site Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        {items.map(({ t, d }) => (
          <div key={t} style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12 }}>{t}</h2>
            <p style={{ margin: 0 }}>{d}</p>
          </div>
        ))}
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Check your sitemap for noindex conflicts</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free — detects noindex + sitemap contradictions instantly</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Sitemap Free</a>
      </div>
    </article>
  );
}
