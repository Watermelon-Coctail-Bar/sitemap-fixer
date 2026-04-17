import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Site Structure SEO: Architect for Google',
  description: "Site structure affects how Google discovers, crawls, and distributes authority across your pages. How to build a hierarchy that maximizes SEO.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/site-structure-seo' },
  openGraph: {
    title: 'Site Structure SEO: Architect for Google',
    description: 'Site structure affects how Google discovers, crawls, and distributes authority across your pages. How to build a hierarchy for SEO.',
    url: 'https://sitemapfixer.com/learn/site-structure-seo',
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
  { h: "Why Site Structure Matters for SEO", d: "Site structure affects three things: crawlability (can Google find all your pages?), PageRank distribution (does authority flow to your most important pages?), and topical relevance (does Google understand your site is an authority on your topic?). A flat, well-organized structure with clear hierarchy helps Google crawl efficiently and ensures link equity concentrates on high-value pages rather than being diluted across orphan pages and thin archives." },
  { h: "The Silo Structure", d: "Silo structure organizes your site into distinct topic areas where all pages within a silo are internally linked to each other but minimally cross-linked between silos. The result: each silo becomes topically concentrated, helping Google understand your authority in each specific subject area. Example: an SEO tools site with silos for technical-seo, content-seo, and local-seo, each interlinked heavily within itself to build topical depth." },
  { h: "Flat vs Deep Hierarchy", d: "Important pages should be accessible within 3 clicks from the homepage. Pages buried at 5-6 clicks deep get crawled less frequently and accumulate less internal PageRank. Flatten your hierarchy by promoting valuable content closer to the root. Use category hub pages to aggregate related content, reducing the effective click depth of individual pages across large sites." },
  { h: "Navigation and Internal Link Structure", d: "Your navigation communicates your site structure to both users and Google. Every page in your navigation gets more internal PageRank because navigation links appear on every page. Choose your navigation carefully - only include your most strategically important pages. Use breadcrumbs on all internal pages - they create an additional internal link path and generate BreadcrumbList schema automatically." },
  { h: "Hub Pages and Topic Clusters", d: "Build hub pages for your main topics - comprehensive overview pages that link to all related deep content. The hub page ranks for broad queries; the linked cluster pages rank for specific queries. Your sitemap structure should reflect this hierarchy: core hub pages near the root URL, cluster pages in subdirectories under each hub." },
  { h: "Auditing Your Existing Structure", d: "Use Screaming Frog to crawl your site and export all URLs with their click depth from the homepage. Identify orphan pages (no internal links pointing to them), pages with excessive click depth, and pages with too few internal links. Cross-reference with Google Search Console - pages getting zero organic traffic but consuming crawl budget are candidates for improving, linking to, or consolidating via 301 redirect." },
];
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"Article","headline":"Site Structure SEO: Architect for Google","description":"Site structure affects how Google discovers, crawls, and distributes authority across your pages. How to build a hierarchy for SEO.","url":"https://sitemapfixer.com/learn/site-structure-seo","author":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com"},"publisher":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com","logo":{"@type":"ImageObject","url":"https://sitemapfixer.com/opengraph-image"}},"datePublished":"2025-01-15","mainEntityOfPage":{"@type":"WebPage","@id":"https://sitemapfixer.com/learn/site-structure-seo"}}' }} />
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Site Structure SEO</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Site Structure SEO: Architect Your Website for Maximum Rankings</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your site structure free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Site Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        {sections.map(({ h, d }) => (
          <div key={h} style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 10 }}>{h}</h2>
            <p style={{ margin: 0 }}>{d}</p>
          </div>
        ))}
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Analyze your site structure</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free sitemap and SEO analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>

        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/learn/technical-seo-checklist" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Technical SEO Checklist 2025</a></li>
            <li><a href="/learn/canonical-tags" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Canonical Tags: How to Use Them Correctly for SEO</a></li>
            <li><a href="/learn/structured-data" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Structured Data & Schema Markup: Complete Guide</a></li>
            <li><a href="/learn/core-web-vitals" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Core Web Vitals: LCP, INP, CLS Explained</a></li>
            <li><a href="/learn/page-speed-optimization" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Page Speed Optimization: Make Your Site Faster</a></li>
          
            <li><a href="/learn/topic-clusters" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Topic Clusters: How to Build Topical Authority for SEO</a></li></ul>
        </div>
    </div>
  );
}
