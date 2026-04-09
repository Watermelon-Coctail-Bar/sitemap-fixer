import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Backlink Audit: Evaluate and Clean Your Links',
  description: "A backlink audit identifies your valuable links and harmful ones. Here is how to audit your link profile, disavow toxic links, and use link data to improve your SEO.",
  alternates: { canonical: 'https://sitemapfixer.com/blog/backlink-audit-guide' },
  openGraph: {
    title: 'Backlink Audit: Evaluate and Clean Your Links',
    description: 'A backlink audit identifies your valuable links and harmful ones. Here is how to audit your link profile, disavow toxic links, and use link data to improve your SEO.',
    url: 'https://sitemapfixer.com/blog/backlink-audit-guide',
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
  { t: "Why backlink audits matter", d: "Your backlink profile is one of the strongest ranking signals in Google's algorithm. A healthy profile with authoritative, relevant links in diverse natural patterns helps rankings. A profile with spammy links from link farms, irrelevant directories, or purchased link networks can trigger Penguin penalties or manual actions. Regular audits catch problems early and reveal your most valuable link assets for protection and replication." },
  { t: "Getting your full backlink data", d: "No single tool has a complete picture. Start with Google Search Console under Links - this shows links Google has actually discovered. Export this list. Supplement with Ahrefs Site Explorer, Semrush Backlink Analytics, or Moz Link Explorer for broader coverage. The union of these sources gives you the most complete picture. Export everything to a spreadsheet for analysis." },
  { t: "Identifying valuable links", d: "Sort your links by referring domain authority. Your highest-value links - those from domains with high domain rating and topical relevance to your site - are assets worth protecting. Note any redirects pointing to pages on your old domains that may be losing equity. Ensure these links point to live, relevant pages. If high-value links point to outdated or deleted pages, create appropriate content at those URLs to capture the value." },
  { t: "Flagging and disavowing toxic links", d: "Toxic link signals: links from sites with extremely low domain authority and no organic traffic, links in footer or sitewide positions across hundreds of low-quality pages, links with exact-match commercial anchor text at scale, links from clearly irrelevant niches (casino, pharma, adult). For confirmed spam: create a disavow file in Google Search Console. Disavow at the domain level for sites entirely composed of spam: domain:spamsite.com. Submit via Search Console disavow tool." },
  { t: "Using backlink data strategically", d: "Beyond cleanup, your backlink audit surfaces opportunities. Find pages on your site with many backlinks but thin content - these deserve content upgrades to better serve the traffic potential. Identify competitor pages with more links than yours for the same topic - analyze their linking sources for link building targets. Find links pointing to your competitor pages but not yours for identical or similar content - these are direct outreach targets." },
];
export default function Page() {
  return (
    <article style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/blog" style={{ color: '#2d5be3', textDecoration: 'none' }}>Blog</a>{' / '}
        <span>Backlink Audit Guide</span>
      </nav>
      <div style={{ fontSize: 13, color: '#9ca3af', marginBottom: 12 }}>April 2025 · 7 min read</div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, lineHeight: 1.15 }}>Backlink Audit Guide: Evaluate and Clean Your Link Profile</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your technical SEO alongside links - free</span>
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
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Build a strong technical foundation for your links</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free sitemap and indexing analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
  
        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/blog/internal-linking-strategy" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Internal Linking Strategy: Build Site Authority</a></li>
            <li><a href="/blog/link-building-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Link Building: Earn Backlinks That Move Rankings</a></li>
            <li><a href="/blog/link-equity-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Link Equity Guide: How PageRank Flows Through Your Site</a></li>
            <li><a href="/blog/anchor-text-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Anchor Text Guide: How to Use Link Anchor Text for SEO</a></li>
            <li><a href="/blog/broken-links-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Broken Links SEO: How They Hurt Rankings & Fixes</a></li>
          </ul>
        </div>
    </div>
    </article>
  );
}
