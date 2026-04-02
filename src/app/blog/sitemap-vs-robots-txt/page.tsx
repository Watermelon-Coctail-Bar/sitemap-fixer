import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Sitemap vs Robots.txt: What Each Does and How to Use Both | SitemapFixer',
  description: "Sitemaps and robots.txt serve opposite purposes. One tells Google what to crawl. The other tells it what not to. Here is how each works and how to use both correctly.",
  alternates: { canonical: 'https://sitemapfixer.com/blog/sitemap-vs-robots-txt' },
  openGraph: { title: 'Sitemap vs Robots.txt Explained', description: 'Two critical SEO files, opposite purposes. Here is how each one works.', url: 'https://sitemapfixer.com/blog/sitemap-vs-robots-txt', type: 'article' },
};
export default function Page() {
  return (
    <article style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/blog" style={{ color: '#2d5be3', textDecoration: 'none' }}>Blog</a>{' / '}
        <span>Sitemap vs Robots.txt</span>
      </nav>
      <div style={{ fontSize: 13, color: '#9ca3af', marginBottom: 12 }}>April 2025 · 7 min read</div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, lineHeight: 1.15 }}>Sitemap vs Robots.txt: What Each Does and How to Use Both</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check both files for conflicts</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Site Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        <p style={{ marginBottom: 32 }}>Every website that wants to rank on Google should have both a sitemap and a robots.txt file. They do not do the same thing — they are complementary tools that work together. Getting either one wrong can silently hurt your indexing without any obvious error messages.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 0, marginBottom: 12 }}>What a Sitemap Does</h2>
        <p style={{ marginBottom: 24 }}>A sitemap is a list of URLs you want Google to crawl and index. It is an invitation — you are telling Google "here are the pages on my site, please visit them." The sitemap also carries metadata: when each page was last updated (lastmod), how often it changes (changefreq), and relative priority. Google uses this information to prioritize its crawling. A sitemap does not guarantee indexing — it just helps Google discover and prioritize your pages. Google can still choose not to index a page even if it is in your sitemap.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 12 }}>What Robots.txt Does</h2>
        <p style={{ marginBottom: 24 }}>Robots.txt tells crawlers which pages they are not allowed to access. It is a gate — you are saying "do not enter here." The file lives at yoursite.com/robots.txt and uses simple rules: User-agent specifies which crawler the rule applies to (use * for all), and Disallow specifies which paths to block. Critically, robots.txt only controls crawling, not indexing. A page blocked in robots.txt can still be indexed if Google learns about it through a link from another site — it just cannot read the content.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 12 }}>The Critical Conflict to Avoid</h2>
        <p style={{ marginBottom: 24 }}>Never put a URL in your sitemap that is also blocked in robots.txt. This is a direct contradiction: your sitemap says "index this" and robots.txt says "you cannot even crawl it." Google will report this as an error in Search Console under Sitemaps. The URL cannot be indexed because Googlebot cannot access the content. Either remove the URL from your sitemap, or remove the robots.txt block — depending on whether you want the page indexed.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 12 }}>What to Put in Your Sitemap</h2>
        <p style={{ marginBottom: 24 }}>Include only pages you want indexed: your homepage, published blog posts, product pages, category pages, landing pages, and key content pages. Exclude: admin pages, cart and checkout, search results, user account pages, paginated pages beyond page 2-3, and any page with a noindex tag. Your sitemap should be a curated list of your best content, not an exhaustive dump of every URL on your domain.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 12 }}>What to Block in Robots.txt</h2>
        <p style={{ marginBottom: 24 }}>Block pages that should never be crawled: admin dashboards (/admin/, /wp-admin/), internal search results (/search?), staging or dev areas, user-generated private content, API endpoints, and pages with infinite URLs from session IDs or tracking parameters. Blocking these saves crawl budget for your important pages. A well-maintained robots.txt on a large site can dramatically improve how efficiently Google crawls your content.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 12 }}>Add Your Sitemap URL to Robots.txt</h2>
        <p style={{ marginBottom: 24 }}>Best practice is to reference your sitemap URL at the bottom of robots.txt: Sitemap: https://yoursite.com/sitemap.xml. This helps any crawler that reads robots.txt — including Bing, DuckDuckGo, and others — find your sitemap automatically without needing to submit it manually to each search engine.</p>
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Check for sitemap and robots.txt conflicts</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>
    </article>
  );
}
