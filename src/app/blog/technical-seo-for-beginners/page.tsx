import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Technical SEO for Beginners: The 10 Things That Actually Matter | SitemapFixer',
  description: "Technical SEO can feel overwhelming. Here are the 10 fundamentals that have the most impact, explained plainly with exact steps to check and fix each one.",
  alternates: { canonical: 'https://sitemapfixer.com/blog/technical-seo-for-beginners' },
  openGraph: { title: 'Technical SEO for Beginners', description: 'The 10 technical SEO fundamentals that actually move the needle.', url: 'https://sitemapfixer.com/blog/technical-seo-for-beginners', type: 'article' },
};
const items = [
  { n: '1', t: 'Your Site Is on HTTPS', d: "Every page should load on HTTPS (the padlock icon in the browser). If your site still uses HTTP, Google treats it as less trustworthy and Chrome marks it as Not Secure. Fix: install an SSL certificate. Most hosts provide free certificates via Let's Encrypt. After installing, set up a 301 redirect from all HTTP URLs to their HTTPS equivalents. Check by typing http:// before your domain and confirming it redirects." },
  { n: '2', t: 'You Have One Canonical Domain', d: "Your site should be accessible at exactly one URL. Either www.yoursite.com or yoursite.com, not both. Check by entering both versions in your browser and confirming one redirects to the other. Also verify that the HTTP and HTTPS versions both redirect correctly to your canonical HTTPS domain. Mixed versions create duplicate content and split your link equity." },
  { n: '3', t: 'Googlebot Can Access Your Site', d: "Check robots.txt at yoursite.com/robots.txt. Make sure it does not contain Disallow: / under User-agent: * or User-agent: Googlebot. This single line blocks Googlebot from your entire site. It is commonly left in after development and forgotten. Also check that your CMS does not have a Discourage search engines setting enabled." },
  { n: '4', t: 'You Have a Working Sitemap', d: "Your sitemap should be at yoursite.com/sitemap.xml and should load as valid XML. Submit it in Google Search Console under Sitemaps. The sitemap should only contain canonical URLs that return 200 status codes, have no noindex tags, and are not blocked by robots.txt. A sitemap with errors is worse than no sitemap - Google reports errors and may trust the sitemap less." },
  { n: '5', t: 'Every Page Has a Unique Title Tag', d: "The title tag is the single most important on-page SEO element. Keep it under 60 characters, include your primary keyword near the beginning, and make it unique for every page. Duplicate title tags tell Google pages are duplicates. Check your titles in Google Search Console under Enhancements, or use a site crawler." },
  { n: '6', t: 'Every Page Has a Unique Meta Description', d: "While meta descriptions are not a direct ranking factor, they affect click-through rate from search results. Google displays them (or generates its own version) in search results. Write 120-160 character descriptions that are specific and compelling. Duplicate descriptions across pages are a flag that content may be duplicated." },
  { n: '7', t: 'Your Pages Load Fast', d: "Page speed is a confirmed Google ranking factor, especially for mobile. Use PageSpeed Insights to test your core pages. The most common quick wins: compress and resize images, enable lazy loading for below-fold images, minify CSS and JavaScript, and use a CDN. Core Web Vitals scores in Google Search Console show how your real users experience load times." },
  { n: '8', t: 'Your Site Works on Mobile', d: "Google uses mobile-first indexing - it crawls and indexes the mobile version of your site. Test your site on a real phone or use Chrome DevTools mobile simulation. Common mobile problems: text too small to read, buttons too close together, content wider than the screen, pop-ups that cover the entire screen. Fix these in Google Search Console under Core Web Vitals." },
  { n: '9', t: 'Your Important Pages Are Indexed', d: "Check Google Search Console under Indexing, then Pages. Look for pages that are Not indexed and understand why. The most important exclusion reasons to fix: noindex tag (intentional but worth reviewing), page with redirect (update sitemap to final URL), duplicate without user-selected canonical (set canonical tags), crawled but not indexed (improve content quality)." },
  { n: '10', t: 'Internal Links Connect Your Pages', d: "Internal links pass authority from well-linked pages to less-linked ones and help Google discover content. Your homepage and navigation should link to your most important pages. Every blog post or product page should link to at least two or three related pages. Orphan pages - pages with no internal links pointing to them - get crawled infrequently and rarely rank well." },
];
export default function Page() {
  return (
    <article style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/blog" style={{ color: '#2d5be3', textDecoration: 'none' }}>Blog</a>{' / '}
        <span>Technical SEO for Beginners</span>
      </nav>
      <div style={{ fontSize: 13, color: '#9ca3af', marginBottom: 12 }}>April 2025 · 10 min read</div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, lineHeight: 1.15 }}>Technical SEO for Beginners: The 10 Things That Actually Matter</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Get a full technical SEO analysis free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Site Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        <p style={{ marginBottom: 32 }}>Technical SEO is the foundation everything else sits on. Get these 10 things right and you eliminate the most common reasons sites fail to rank - regardless of how good the content is.</p>
        {items.map(({ n, t, d }) => (
          <div key={n} style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 10 }}>{n}. {t}</h2>
            <p style={{ margin: 0 }}>{d}</p>
          </div>
        ))}
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Check all 10 on your site automatically</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free sitemap and SEO analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>
    </article>
  );
}
