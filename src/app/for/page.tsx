import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SitemapFixer for Your Team - Use Cases by Industry',
  description: 'See how SEO agencies, e-commerce stores, news publishers, enterprise teams, and SaaS companies use SitemapFixer to audit, clean, and optimize XML sitemaps.',
  keywords: 'sitemap tool use cases, sitemap auditor for agencies, sitemap tool for ecommerce, sitemap for publishers, enterprise sitemap tool, saas sitemap',
  alternates: { canonical: 'https://sitemapfixer.com/for' },
  openGraph: {
    title: 'SitemapFixer for Your Team - Use Cases by Industry',
    description: 'See how SEO agencies, e-commerce stores, news publishers, enterprise teams, and SaaS companies use SitemapFixer to audit, clean, and optimize XML sitemaps.',
    url: 'https://sitemapfixer.com/for',
    type: 'website',
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

const useCases = [
  {
    slug: 'agencies',
    title: 'SEO Agencies',
    description: 'Audit client sitemaps at scale, add findings to pitch decks, and turn issues into retainer deliverables.',
    bullets: ['Multi-client workflows', 'White-label reporting', 'Audit deliverables'],
  },
  {
    slug: 'ecommerce',
    title: 'E-commerce Stores',
    description: 'Tame product catalog bloat, out-of-stock URLs, and faceted navigation duplicates across Shopify, WooCommerce, and Magento.',
    bullets: ['SKU and variant handling', 'Out-of-stock cleanup', 'Faceted nav filters'],
  },
  {
    slug: 'news-publishers',
    title: 'News Publishers',
    description: 'Keep your news sitemap tight so Google News and Top Stories pick up breaking articles within the freshness window.',
    bullets: ['News sitemap protocol', 'Hourly recrawl readiness', 'Top Stories indexing'],
  },
  {
    slug: 'enterprise',
    title: 'Enterprise Sites',
    description: 'Govern sitemap index files across 10M+ URLs, protect crawl budget, and give stakeholders clean reports.',
    bullets: ['Sitemap index at scale', 'Governance and compliance', 'Stakeholder reporting'],
  },
  {
    slug: 'saas',
    title: 'SaaS Companies',
    description: 'Balance programmatic SEO pages, docs, changelog, and marketing URLs in one clean, monitored sitemap.',
    bullets: ['Programmatic SEO', 'Docs and changelog', 'Feature pages vs blog'],
  },
];

export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px', fontFamily: 'Geist, sans-serif' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>
        {'  '}
        <span>For</span>
      </nav>

      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>
        SitemapFixer for Your Team
      </h1>

      <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 40 }}>
        Every site has a sitemap, but the problems look very different depending on what you run.
        A 40-client agency has nothing in common with a news publisher chasing Top Stories, and
        neither has much in common with an enterprise governing 10 million URLs. Pick your setup
        below to see exactly how SitemapFixer fits your workflow, your terminology, and your KPIs.
      </p>

      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <div>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 4 }}>Not sure which fits?</div>
          <div style={{ fontSize: 13, color: '#6b6b7d' }}>Run a free audit and see what your sitemap looks like today.</div>
        </div>
        <a href="/" style={{ background: '#0a0a0f', color: 'white', padding: '12px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 14, whiteSpace: 'nowrap' }}>
          Analyze My Sitemap
        </a>
      </div>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, marginTop: 40 }}>Pick your use case</h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
        {useCases.map((uc) => (
          <a
            key={uc.slug}
            href={`/for/${uc.slug}`}
            style={{
              display: 'block',
              border: '1px solid #e4e4ed',
              borderRadius: 12,
              padding: '24px 28px',
              textDecoration: 'none',
              background: 'white',
            }}
          >
            <div style={{ fontSize: 20, fontWeight: 700, color: '#0a0a0f', marginBottom: 8 }}>
              SitemapFixer for {uc.title}
            </div>
            <div style={{ fontSize: 15, color: '#3d3d4f', lineHeight: 1.6, marginBottom: 14 }}>
              {uc.description}
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {uc.bullets.map((b) => (
                <li key={b} style={{ background: '#eef1ff', color: '#2d5be3', padding: '4px 12px', borderRadius: 6, fontSize: 12, fontWeight: 500 }}>
                  {b}
                </li>
              ))}
            </ul>
          </a>
        ))}
      </div>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>One tool, many workflows</h2>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 16 }}>
        SitemapFixer works the same under the hood for every team - paste a sitemap URL, get a
        full audit with prioritized fixes. What changes is how you use it. Agencies plug it into
        client retainers. Ecommerce teams run it after every catalog sync. News publishers watch
        for freshness regressions. Enterprise SEO governs it as part of their compliance checks.
        SaaS teams monitor programmatic SEO output.
      </p>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        Click any of the cards above to see terminology, pain points, and example workflows
        written for your team.
      </p>

      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
        <div style={{ fontSize: 22, fontWeight: 700, color: 'white', marginBottom: 8 }}>Start with a free audit</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Full sitemap report in 60 seconds, no credit card needed.</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 32px', borderRadius: 8, textDecoration: 'none', fontWeight: 700, fontSize: 15 }}>
          Analyze My Sitemap Free
        </a>
      </div>
    </div>
  );
}
