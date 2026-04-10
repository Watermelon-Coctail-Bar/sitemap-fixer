import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: "SEO Basics: A Beginner's Guide to Search Engine Optimization",
  description: "SEO basics explained simply - what it is, how it works, and the fundamental concepts every website owner needs to understand before diving into tactics.",
  alternates: { canonical: 'https://sitemapfixer.com/blog/seo-basics-guide' },
  openGraph: {
    title: "SEO Basics: A Beginner's Guide to Search Engine Optimization",
    description: 'SEO basics explained simply - what it is, how it works, and the fundamental concepts every website owner needs to understand before diving into tactics.',
    url: 'https://sitemapfixer.com/blog/seo-basics-guide',
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
const basics = [
  { t: "What SEO is", d: "Search Engine Optimization is the practice of improving your website so it appears higher in Google's organic (non-paid) search results for queries your target audience searches for. Higher rankings mean more traffic. Unlike paid ads, organic rankings require no ongoing payment per click - but they do require investment in content, technical quality, and credibility building over time." },
  { t: "How Google decides what to rank", d: "Google uses hundreds of signals to rank pages. The main categories: Relevance (does your page match the query?), Authority (do trustworthy sites link to you?), and Experience (is your page fast, mobile-friendly, and trustworthy?). Technical quality - whether Google can crawl and index your pages - is the prerequisite before any of these matter." },
  { t: "The three pillars of SEO", d: "Technical SEO: ensuring Google can crawl, index, and render your pages without errors. Your sitemap, robots.txt, site speed, and mobile-friendliness all live here. On-Page SEO: optimizing the content on each page - title tags, headings, content quality, and internal links. Off-Page SEO: earning links and mentions from other trusted websites that signal your authority to Google." },
  { t: "How long SEO takes", d: "New sites typically see meaningful organic traffic after 6-12 months of consistent effort. Established sites with good technical foundations can see results from content and link building within 4-8 weeks. SEO is not a quick fix - it is a compound interest investment. Pages you rank for today continue bringing traffic months and years later without additional spend." },
  { t: "Where to start", d: "Start with the technical foundation: submit your sitemap to Google Search Console, check robots.txt is not blocking Google, ensure your site is on HTTPS. Then publish content targeting specific keywords your customers search for. Add internal links between related pages. Earn your first few backlinks from relevant sources. This sequence works for every site regardless of size or industry." },
];
export default function Page() {
  return (
    <article style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/blog" style={{ color: '#2d5be3', textDecoration: 'none' }}>Blog</a>{' / '}
        <span>SEO Basics Guide</span>
      </nav>
      <div style={{ fontSize: 13, color: '#9ca3af', marginBottom: 12 }}>April 2025 · 6 min read</div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, lineHeight: 1.15 }}>SEO Basics: What It Is and How It Works</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Start with your technical foundation - free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Site Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        {basics.map(({ t, d }) => (
          <div key={t} style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12 }}>{t}</h2>
            <p style={{ margin: 0 }}>{d}</p>
          </div>
        ))}
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Start with the technical foundation</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free sitemap and indexing check in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
  
        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/blog/keyword-research-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Keyword Research: Find Keywords That Drive Traffic</a></li>
            <li><a href="/blog/long-tail-keywords-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Long-Tail Keywords: Find and Rank for Queries</a></li>
            <li><a href="/blog/featured-snippets-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Featured Snippets: Win Position Zero in Google</a></li>
            <li><a href="/blog/eeat-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>E-E-A-T Guide: Build Expertise, Authority, and Trust</a></li>
            <li><a href="/blog/seo-for-bloggers" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>SEO for Bloggers: Get Your Posts Ranked on Google</a></li>
          </ul>
        </div>
    </div>
    </article>
  );
}
