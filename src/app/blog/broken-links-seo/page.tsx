import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Broken Links SEO: How Broken Links Hurt Rankings and How to Fix Them | SitemapFixer',
  description: "Broken links waste crawl budget, leak PageRank, and damage user experience. Here is how to find all broken links on your site and fix them efficiently.",
  alternates: { canonical: 'https://sitemapfixer.com/blog/broken-links-seo' },
  openGraph: { title: 'Broken Links SEO: Find and Fix Guide', url: 'https://sitemapfixer.com/blog/broken-links-seo', type: 'article' },
};
const sections = [
  { t: "How Broken Links Hurt SEO", d: "A broken link (one pointing to a 404 or other error page) wastes one of your internal link equity hops on a dead end. When Googlebot follows a broken internal link and gets a 404, it wastes crawl budget and receives no PageRank to pass on. On large sites with many broken links, this can meaningfully reduce the crawl efficiency and authority flow across your site. Broken external links also signal site quality issues - sites that do not maintain their links look poorly maintained to both users and search engines." },
  { t: "Finding Broken Links", d: "Screaming Frog is the fastest way to find all broken links on your site. Run a crawl, then go to Response Codes and filter for 4xx. This shows all pages returning 404 and which pages link to them. For a free option, Google Search Console under Indexing shows 404 errors that Googlebot encountered. Ahrefs and Semrush both have broken link reports in their site audit features. Check both internal broken links (links within your own site) and broken outbound links (links to other sites that have gone offline)." },
  { t: "Fixing Internal Broken Links", d: "For each broken internal link: if the page was deleted but had traffic and backlinks, restore it or create a 301 redirect to the most relevant existing page. If the page was moved and the URL changed, update the link to the new URL. If the page genuinely does not exist and should not, remove the link. After fixing, update your sitemap to reflect the current URLs and remove any 404 URLs that were in your sitemap." },
  { t: "Reclaiming Broken Backlinks", d: "Broken external links pointing to your site (links from other websites pointing to deleted pages on your domain) are lost link equity you can reclaim. Use Ahrefs Site Explorer to find external links pointing to 404 pages on your domain. Create 301 redirects from those 404 URLs to relevant existing pages. This instantly recovers the PageRank those links were passing, often producing ranking improvements within a few weeks." },
  { t: "Preventing Broken Links", d: "The best prevention: 301 redirect every deleted or moved page before it goes live. Never delete a URL without setting up the redirect first. If you use a CMS, install a redirect manager plugin so your team can create redirects easily. Set up Google Search Console email alerts for new coverage errors - you will be notified within days when new 404s appear from Googlebot." },
];
export default function Page() {
  return (
    <article style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/blog" style={{ color: '#2d5be3', textDecoration: 'none' }}>Blog</a>{' / '}
        <span>Broken Links SEO</span>
      </nav>
      <div style={{ fontSize: 13, color: '#9ca3af', marginBottom: 12 }}>April 2025 · 6 min read</div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, lineHeight: 1.15 }}>Broken Links SEO: Find Them, Fix Them, Reclaim Lost Equity</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your sitemap for 404 URLs free</span>
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
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Find broken URLs in your sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free - checks all URLs for 4xx errors</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>
    </article>
  );
}
