import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Google Algorithm Updates: History & Impact',
  description: "Google runs thousands of algorithm updates per year. The major named updates, what each targeted, and how to build a site that survives them.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/google-algorithm-updates' },
  openGraph: {
    title: 'Google Algorithm Updates: History & Impact',
    description: 'Google runs thousands of algorithm updates per year. Here are the major named updates, what each targeted, and how to build a site that survives future updates.',
    url: 'https://sitemapfixer.com/learn/google-algorithm-updates',
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
const updates = [
  { name: "Panda (2011, now core)", target: "Thin, low-quality, and duplicate content.", impact: "Sites with many pages of low-quality content - content farms, sites that copied content, sites with very thin pages - saw dramatic traffic losses. Google now evaluates site quality holistically rather than just page by page." },
  { name: "Penguin (2012, now core)", target: "Manipulative link building - paid links, link exchanges, private blog networks.", impact: "Sites with unnatural backlink profiles (especially exact-match anchor text at scale) lost rankings. Penguin is now real-time and processes link data continuously rather than in periodic updates." },
  { name: "Hummingbird (2013)", target: "Semantic search - understanding the meaning of queries, not just matching keywords.", impact: "Google began interpreting conversational queries and understanding relationships between concepts. Content that answered user intent comprehensively started outperforming keyword-stuffed content." },
  { name: "Mobile-friendly Update (2015)", target: "Pages not optimized for mobile devices.", impact: "Non-mobile-friendly pages lost ranking on mobile search. Google now uses mobile-first indexing, making mobile optimization essential rather than just beneficial." },
  { name: "RankBrain (2015)", target: "Machine learning component for interpreting ambiguous queries.", impact: "Google uses RankBrain to interpret queries it has not seen before. User engagement signals (click-through rate, dwell time) became more important as RankBrain learned which results satisfied users." },
  { name: "Core Web Vitals / Page Experience (2021)", target: "Poor user experience - slow loading, visual instability, poor interactivity.", impact: "LCP, CLS, and FID (later INP) became ranking signals. Fast, stable pages gained a ranking advantage over slow ones with equivalent content quality." },
  { name: "Helpful Content System (2022-present)", target: "Content written primarily for search engines rather than people. AI-generated content without expertise.", impact: "Sites with high proportions of unhelpful content - thin AI content, content that provides no value beyond ranking - received site-wide ranking demotions. Recovery requires substantial content quality improvement across the entire site." },
];
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"Article","headline":"Google Algorithm Updates: History & Impact","description":"Google runs thousands of algorithm updates per year. Here are the major named updates, what each targeted, and how to build a site that survives future updates.","url":"https://sitemapfixer.com/learn/google-algorithm-updates","author":{"@type":"Person","name":"Arnoldas Arny","url":"https://sitemapfixer.com/about"},"publisher":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com","logo":{"@type":"ImageObject","url":"https://sitemapfixer.com/opengraph-image"}},"datePublished":"2025-01-15","mainEntityOfPage":{"@type":"WebPage","@id":"https://sitemapfixer.com/learn/google-algorithm-updates"}}' }} />
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Google Algorithm Updates</span>
      </nav>
      <div style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 16 }}>By <a href="/about" style={{ color: '#2d5be3', textDecoration: 'none' }}>Arnoldas Arny</a></div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Google Algorithm Updates: What Each Targeted and Why It Matters</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your site health free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Site Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        <p style={{ marginBottom: 32 }}>Google runs 3,000-5,000 algorithm changes per year, most minor and unannounced. The major named updates below have defined how SEO has evolved. Understanding what each targeted helps you understand what Google values and how to build a site that ranks durably.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {updates.map(({ name, target, impact }) => (
            <div key={name} style={{ border: '1px solid #e4e4ed', borderRadius: 12, padding: '20px 24px' }}>
              <div style={{ fontWeight: 700, fontSize: 16, color: '#0a0a0f', marginBottom: 8 }}>{name}</div>
              <p style={{ margin: '0 0 6px', fontSize: 14 }}><strong>Targeted:</strong> {target}</p>
              <p style={{ margin: 0, fontSize: 14, color: '#3d3d4f', lineHeight: 1.6 }}><strong>Impact:</strong> {impact}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 48 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>How to Build an Update-Resistant Site</h2>
          <p>Every major Google update has punished shortcuts and rewarded genuine quality. The pattern is consistent: write content that genuinely helps your audience, earn links through merit, deliver fast and usable experiences, and be transparent about who you are. Sites built on these fundamentals have survived every update. Sites built on manipulation have not.</p>
        </div>
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Check your site for quality issues</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free technical SEO analysis in 60 seconds</div>
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
          
            <li><a href="/learn/eeat-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>E-E-A-T SEO: Build Expertise and Trust</a></li>
            <li><a href="/learn/google-penalty" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Google Penalty: How to Identify and Recover From One</a></li></ul>
        </div>
    </div>
  );
}
