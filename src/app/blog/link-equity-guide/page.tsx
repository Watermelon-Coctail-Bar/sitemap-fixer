import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Link Equity Guide: How PageRank Flows Through Your Site',
  description: "Link equity (PageRank) flows through internal and external links. Here is how to maximize authority distribution across your site to boost rankings for important pages.",
  alternates: { canonical: 'https://sitemapfixer.com/blog/link-equity-guide' },
  openGraph: {
    title: 'Link Equity Guide: How PageRank Flows Through Your Site',
    description: 'Link equity (PageRank) flows through internal and external links. Here is how to maximize authority distribution across your site to boost rankings for important pages.',
    url: 'https://sitemapfixer.com/blog/link-equity-guide',
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
  { t: "What link equity is", d: "Link equity (also called PageRank or link juice) is the authority value that flows from one page to another through hyperlinks. A link from an authoritative page passes more equity than a link from a low-authority page. When an external site links to your homepage, that link equity flows to the homepage - and then distributes to other pages through your internal links. Understanding this flow helps you make smart internal linking decisions." },
  { t: "How internal links distribute equity", d: "Each internal link on a page shares that page's equity among all pages it links to. A page with 10 outbound internal links splits its equity 10 ways. A page with 2 outbound links concentrates equity more. This means: linking to your most important pages from your highest-authority pages (homepage, popular posts) gives them the most equity. Avoid linking to low-value pages from authority pages - you are wasting equity that could flow to pages that matter." },
  { t: "Maximizing link equity flow", d: "Strategies: add your most important pages to your main navigation so every page on your site passes equity to them. Create hub pages that link to clusters of related content - the hub accumulates equity and distributes it through the cluster. Fix broken internal links that are currently passing equity to 404 pages. Redirect old URLs with backlinks to current relevant pages rather than letting that external equity disappear. Reduce outbound links from high-authority pages to concentrate the equity that flows to important destinations." },
];
export default function Page() {
  return (
    <article style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/blog" style={{ color: '#2d5be3', textDecoration: 'none' }}>Blog</a>{' / '}
        <span>Link Equity Guide</span>
      </nav>
      <div style={{ fontSize: 13, color: '#9ca3af', marginBottom: 12 }}>April 2025 · 5 min read</div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, lineHeight: 1.15 }}>Link Equity Guide: Maximize PageRank Flow Across Your Site</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Analyze your site structure and links free</span>
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
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Audit your site structure and internal links</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free sitemap analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
  
        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/blog/internal-linking-strategy" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Internal Linking Strategy: Build Site Authority</a></li>
            <li><a href="/blog/link-building-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Link Building: Earn Backlinks That Move Rankings</a></li>
            <li><a href="/blog/anchor-text-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Anchor Text Guide: How to Use Link Anchor Text for SEO</a></li>
            <li><a href="/blog/broken-links-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Broken Links SEO: How They Hurt Rankings & Fixes</a></li>
            <li><a href="/blog/backlink-audit-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Backlink Audit: Evaluate and Clean Your Links</a></li>
          </ul>
        </div>
    </div>
    </article>
  );
}
