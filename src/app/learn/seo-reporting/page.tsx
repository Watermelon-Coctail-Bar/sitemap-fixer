import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'SEO Reporting: KPIs, Dashboards, and How to Report to Stakeholders | SitemapFixer',
  description: "Good SEO reporting shows progress and business impact, not just traffic numbers. Here are the KPIs that matter, how to structure reports, and how to communicate SEO value.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/seo-reporting' },
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
    </div>
  );
}
