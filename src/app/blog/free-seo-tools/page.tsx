import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Free SEO Tools: The Best Free Tools for Every SEO Task',
  description: "You do not need to pay for SEO tools to get started. Here are the best free SEO tools for keyword research, technical auditing, rank tracking, and link analysis.",
  alternates: { canonical: 'https://sitemapfixer.com/blog/free-seo-tools' },
  openGraph: {
    title: 'Free SEO Tools: The Best Free Tools for Every SEO Task',
    description: 'You do not need to pay for SEO tools to get started. Here are the best free SEO tools for keyword research, technical auditing, rank tracking, and link analysis.',
    url: 'https://sitemapfixer.com/blog/free-seo-tools',
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
const tools = [
  { cat: "Technical SEO", items: ["Google Search Console - the most important free tool; shows indexing, crawl errors, CWV, and keyword data directly from Google", "SitemapFixer - free sitemap analysis, checks all URLs for errors and conflicts", "PageSpeed Insights - free Core Web Vitals analysis with specific recommendations", "Screaming Frog SEO Spider - free for up to 500 URLs; finds broken links, redirects, and on-page issues"] },
  { cat: "Keyword research", items: ["Google Keyword Planner - free with a Google Ads account; shows search volume data", "Google Search Autocomplete - type any keyword and note every suggestion in real time", "AnswerThePublic - free tier shows question-format variations of any keyword", "Google Trends - compare keyword interest over time and across regions"] },
  { cat: "Rank tracking and analysis", items: ["Google Search Console Performance - tracks rankings for all queries your site appears for, completely free", "SERPRobot - free rank checker for spot-checking specific keyword positions", "MozBar - free Chrome extension showing domain authority and page authority on any page"] },
  { cat: "Link analysis", items: ["Google Search Console Links - shows all external links Google has found to your site, free", "Ahrefs Backlink Checker - free version shows top 100 backlinks for any domain", "Moz Link Explorer - free version shows domain authority and top 10 linking domains"] },
];
export default function Page() {
  return (
    <article style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/blog" style={{ color: '#2d5be3', textDecoration: 'none' }}>Blog</a>{' / '}
        <span>Free SEO Tools</span>
      </nav>
      <div style={{ fontSize: 13, color: '#9ca3af', marginBottom: 12 }}>April 2025 · 5 min read</div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, lineHeight: 1.15 }}>Free SEO Tools: Best Tools for Every SEO Task</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Start with SitemapFixer - free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Site Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        {tools.map(({ cat, items }) => (
          <div key={cat} style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>{cat}</h2>
            {items.map((item, i) => (
              <div key={i} style={{ padding: '10px 14px', background: '#f8f8fc', borderRadius: 8, border: '1px solid #e4e4ed', marginBottom: 8, fontSize: 14 }}>{item}</div>
            ))}
          </div>
        ))}
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Start with SitemapFixer - free</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free sitemap and technical SEO analysis</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
  
        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/blog/ecommerce-seo-tips" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Ecommerce SEO: Get Product Pages to Rank</a></li>
            <li><a href="/blog/social-media-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Social Media SEO: Do Social Signals Matter?</a></li>
            <li><a href="/blog/mobile-seo-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Mobile SEO Guide: Optimize Your Site for Mobile Search</a></li>
            <li><a href="/blog/video-seo-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Video SEO: Rank Videos on Google and YouTube</a></li>
            <li><a href="/blog/canonical-url-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Canonical URL: What It Is and How to Set It Correctly</a></li>
          </ul>
        </div>
    </div>
    </article>
  );
}
