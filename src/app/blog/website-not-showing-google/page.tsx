import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Website Not Showing in Google Search: 8 Reasons and Fixes | SitemapFixer',
  description: "Your website not appearing in Google Search usually has a specific technical cause. Here are the 8 most common reasons and the exact fix for each.",
  alternates: { canonical: 'https://sitemapfixer.com/blog/website-not-showing-google' },
  openGraph: { title: 'Website Not Showing in Google: 8 Reasons and Fixes', description: 'Why your site is missing from Google and how to fix each cause fast.', url: 'https://sitemapfixer.com/blog/website-not-showing-google', type: 'article' },
};
const reasons = [
  { n: "1", t: "robots.txt is blocking Googlebot", d: "The most catastrophic cause. Check yoursite.com/robots.txt. If it contains Disallow: / under User-agent: * or User-agent: Googlebot, Googlebot cannot crawl anything. This is commonly left over from development. Remove the Disallow: / rule immediately. Google recrawls robots.txt within 24 hours." },
  { n: "2", t: "noindex tag on key pages", d: "A noindex meta tag tells Google to exclude a page from search results. Check your page source for: meta name=robots content=noindex. In WordPress, check Settings then Reading for a discourage search engines checkbox. In most SEO plugins, check the Advanced or Visibility tab on each page." },
  { n: "3", t: "Site is too new", d: "Brand new domains take 1-4 weeks to appear in Google after publishing. Google needs to discover, crawl, and index your pages. Speed this up: submit your sitemap.xml to Google Search Console, use URL Inspection to request indexing for key pages, and add internal links across your site." },
  { n: "4", t: "Sitemap not submitted", d: "Without a sitemap, Google relies on finding your pages through links. Submit your sitemap at Google Search Console under Indexing, then Sitemaps. Include the full URL: https://yoursite.com/sitemap.xml. Google processes submitted sitemaps within days." },
  { n: "5", t: "Page has no internal links", d: "Orphan pages - pages with no internal links pointing to them - may not be discovered by Googlebot even if they exist in your sitemap. Add at least 2-3 internal links from other pages to any page you want indexed." },
  { n: "6", t: "Server is returning errors", d: "If your site returns 5xx errors when Googlebot visits, it backs off and crawls less frequently. Check your server logs or use Google Search Console URL Inspection to see what status code Google gets when it visits your pages. Fix server errors immediately." },
  { n: "7", t: "Google selected a different canonical", d: "If your page has duplicate content issues, Google may index a different version of the page as the canonical. Check URL Inspection in Search Console - it shows which URL Google chose as canonical. If it is different from what you want, add an explicit canonical tag: link rel=canonical href=https://yoursite.com/your-preferred-url." },
  { n: "8", t: "Manual action penalty", d: "Google has applied a manual penalty for a guideline violation. Check Google Search Console under Security and Manual Actions. If there is an active manual action, read the description, fix the underlying issue, and submit a reconsideration request." },
];
export default function Page() {
  return (
    <article style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/blog" style={{ color: '#2d5be3', textDecoration: 'none' }}>Blog</a>{' / '}
        <span>Website Not Showing in Google</span>
      </nav>
      <div style={{ fontSize: 13, color: '#9ca3af', marginBottom: 12 }}>April 2025 · 6 min read</div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, lineHeight: 1.15 }}>Website Not Showing in Google Search: 8 Reasons and Fixes</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Diagnose the exact reason in 60 seconds</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Site Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        {reasons.map(({ n, t, d }) => (
          <div key={n} style={{ marginBottom: 32, paddingLeft: 16, borderLeft: '3px solid #2d5be3' }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: '#0a0a0f', marginBottom: 8 }}>{n}. {t}</h2>
            <p style={{ margin: 0 }}>{d}</p>
          </div>
        ))}
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Find why your site is not showing in Google</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free sitemap and indexing analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>
    </article>
  );
}
