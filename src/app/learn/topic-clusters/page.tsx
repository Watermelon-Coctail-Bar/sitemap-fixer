import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Topic Clusters: How to Build Topical Authority for SEO',
  description: "Topic clusters help build topical authority - the quality that makes Google trust your site as an expert source. How to build them effectively.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/topic-clusters' },
  openGraph: {
    title: 'Topic Clusters: How to Build Topical Authority for SEO',
    description: 'Topic clusters help you build topical authority - the quality that makes Google trust your site as an expert source. How to build them.',
    url: 'https://sitemapfixer.com/learn/topic-clusters',
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
  { h: "What Topic Clusters Are", d: "A topic cluster is a content structure built around one pillar page (a comprehensive guide to a broad topic) surrounded by multiple cluster pages (each covering a specific subtopic in depth), all connected by internal links. The pillar page links to every cluster page; every cluster page links back to the pillar. The result: Google sees your site as covering a topic comprehensively from multiple angles, which builds topical authority - the signal that you are an expert source, not just a one-off post publisher." },
  { h: "Pillar Pages vs Cluster Pages", d: "The pillar page targets a broad keyword ('XML Sitemaps') and provides a comprehensive overview - not shallow coverage, but 1,500-3,000 words covering what the topic is, why it matters, and the key subtopics with brief introductions to each. Each cluster page goes deep on one subtopic ('How to Fix Sitemap Errors in WordPress', 'Sitemap vs Robots.txt', 'How to Submit a Sitemap to Google'). The cluster pages target more specific queries; the pillar targets the broad category keyword." },
  { h: "How Internal Links Create the Cluster Effect", d: "The internal linking structure is what makes a topic cluster work from an SEO perspective. The pillar page, linked to from many places across your site, has the most authority. It distributes that authority to cluster pages via internal links. Cluster pages return authority to the pillar via their back-links. Google interprets this dense internal linking around a topic as a strong signal of topical depth and expertise - the same way it interprets many external links as a signal of general authority." },
  { h: "Building Your First Topic Cluster", d: "Choose your most important topic - the one most relevant to your business and the keywords your ideal customers search. Write the pillar page first. Then identify 8-15 specific subtopics within that topic and write a cluster page for each. Link every cluster page to the pillar and to 2-3 related cluster pages. Link from the pillar to each cluster page. Build out the cluster before starting a new one - a complete cluster of 10 pages outperforms 10 scattered posts across 10 different topics." },
  { h: "Topic Clusters and Your Sitemap", d: "A healthy topic cluster structure should be visible in your sitemap. Pillar pages and their cluster pages should live under consistent URL hierarchies - /learn/xml-sitemaps and /learn/how-to-fix-sitemap-errors rather than random URL paths. This consistency reinforces the topical relationship for Google. When you add new cluster pages, update your sitemap immediately with an accurate lastmod date so Google discovers and indexes them quickly." },
];
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"Article","headline":"Topic Clusters: How to Build Topical Authority for SEO","description":"Topic clusters help you build topical authority - the quality that makes Google trust your site as an expert source. How to build them.","url":"https://sitemapfixer.com/learn/topic-clusters","author":{"@type":"Person","name":"Arnoldas Arny","url":"https://sitemapfixer.com/about"},"publisher":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com","logo":{"@type":"ImageObject","url":"https://sitemapfixer.com/opengraph-image"}},"datePublished":"2025-01-15","mainEntityOfPage":{"@type":"WebPage","@id":"https://sitemapfixer.com/learn/topic-clusters"}}' }} />
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Topic Clusters</span>
      </nav>
      <div style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 16 }}>By <a href="/about" style={{ color: '#2d5be3', textDecoration: 'none' }}>Arnoldas Arny</a></div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Topic Clusters: Build Topical Authority for SEO</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Analyze your site structure free</span>
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
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Analyze your topic cluster structure</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free sitemap and SEO analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>

        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/learn/keyword-research-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Keyword Research: Find Keywords Worth Targeting</a></li>
            <li><a href="/learn/content-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Content SEO: Write Content That Ranks</a></li>
            <li><a href="/learn/link-building-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Link Building SEO: Strategies That Work in 2025</a></li>
            <li><a href="/learn/local-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Local SEO: How to Rank in Google Maps and Local Search</a></li>
            <li><a href="/learn/mobile-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Mobile SEO: Mobile-First Indexing and How to Pass It</a></li>
          </ul>
        </div>
    </div>
  );
}
