import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'SEO Reporting: KPIs and Dashboards That Work',
  description: "Good SEO reporting shows progress and business impact, not just traffic numbers. The KPIs that matter, how to structure reports, and show value.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/seo-reporting' },
  openGraph: {
    title: 'SEO Reporting: KPIs and Dashboards That Work',
    description: 'Good SEO reporting shows progress and business impact, not just traffic numbers. The KPIs that matter and how to structure reports.',
    url: 'https://sitemapfixer.com/learn/seo-reporting',
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
  { h: "The Right KPIs to Track", d: "Track KPIs in three tiers. Tier 1 - Business outcomes: organic revenue, organic leads, organic conversions. These directly show business value and are what executives care about. Tier 2 - Traffic performance: organic sessions, organic click-through rate, organic impressions. These show how your visibility is translating to traffic. Tier 3 - Technical health: indexed pages, crawl errors, Core Web Vitals scores, sitemap submission status. These are leading indicators that predict future Tier 1 and 2 performance." },
  { h: "Monthly Reporting Structure", d: "A monthly SEO report should cover: month-over-month and year-over-year performance for your primary KPIs, significant ranking changes for target keywords, new content performance (what was published and how it is tracking), technical issues found and resolved, and next month's priorities. Keep executive summaries under one page - decision-makers want the headline numbers and the one or two things that require their attention." },
  { h: "Google Search Console as Your Primary Source", d: "Google Search Console is the most authoritative data source for SEO reporting because it comes directly from Google. The Performance report shows clicks, impressions, CTR, and average position for queries and pages. The Coverage report shows your indexing status. Export both monthly and connect them to Google Looker Studio (formerly Data Studio) to create automated dashboards that update without manual work." },
  { h: "Connecting SEO to Revenue", d: "The most credible SEO reports connect organic traffic to business outcomes. In Google Analytics 4, use the Acquisition then Traffic Acquisition report filtered to Organic Search, then look at conversions and revenue attributed to that channel. For B2B with long sales cycles, track organic-first-touch attribution in your CRM by asking leads how they found you. Even directional revenue attribution strengthens the case for SEO investment significantly." },
  { h: "Communicating to Non-Technical Stakeholders", d: "Avoid technical jargon in stakeholder reports. Replace crawl budget with how many pages Google visits per day. Replace Core Web Vitals with page load experience scores. Replace canonical tags with duplicate page management. Lead with the business impact - organic traffic generated X leads this month, up Y percent - before explaining the technical work that drove it. Include a simple one-line explanation of what each metric means the first time you introduce it." },
];
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"Article","headline":"SEO Reporting: KPIs and Dashboards That Work","description":"Good SEO reporting shows progress and business impact, not just traffic numbers. The KPIs that matter and how to structure reports.","url":"https://sitemapfixer.com/learn/seo-reporting","author":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com"},"publisher":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com","logo":{"@type":"ImageObject","url":"https://sitemapfixer.com/opengraph-image"}},"datePublished":"2025-01-15","mainEntityOfPage":{"@type":"WebPage","@id":"https://sitemapfixer.com/learn/seo-reporting"}}' }} />
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>SEO Reporting</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>SEO Reporting: KPIs and Dashboards That Show Real Value</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your technical SEO KPIs free</span>
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
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Start with your technical SEO baseline</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free sitemap and indexing analysis in 60 seconds</div>
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
          
            <li><a href="/blog/google-analytics-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Google Analytics for SEO: GA4 for Rankings</a></li></ul>
        </div>
    </div>
  );
}
