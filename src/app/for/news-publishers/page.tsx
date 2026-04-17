import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SitemapFixer for News Publishers - Google News & Top Stories',
  description: 'News publishers use SitemapFixer to validate the news sitemap protocol, protect freshness signals, and improve Google News indexing.',
  keywords: 'news sitemap, google news sitemap, top stories indexing, news sitemap protocol, hourly recrawl, freshness signal sitemap, publisher sitemap audit',
  alternates: { canonical: 'https://sitemapfixer.com/for/news-publishers' },
  openGraph: {
    title: 'SitemapFixer for News Publishers - Google News & Top Stories',
    description: 'News publishers use SitemapFixer to validate the news sitemap protocol, protect freshness signals, and improve Google News indexing.',
    url: 'https://sitemapfixer.com/for/news-publishers',
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

export default function Page() {
  const faqSchema = "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"How often should I update a news sitemap?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"News sitemaps should be regenerated within minutes of a new article being published. Google expects near real-time freshness, and articles older than 48 hours should be moved out of the news sitemap entirely.\"}},{\"@type\":\"Question\",\"name\":\"What is the difference between a regular sitemap and a news sitemap?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"A news sitemap follows the Google News sitemap protocol, requires publication dates within the last two days, has a 1,000 URL limit, and includes news-specific tags. Your regular sitemap can still reference news articles for long-tail search.\"}},{\"@type\":\"Question\",\"name\":\"Why are my articles not appearing in Top Stories?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Top Stories eligibility depends on multiple signals, but a malformed news sitemap is one of the most common blockers. Missing publication dates, articles older than two days, or invalid news_title tags will quietly prevent inclusion.\"}}]}";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqSchema }}
      />
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px', fontFamily: 'Geist, sans-serif' }}>
        <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
          <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>
          {'  '}
          <a href="/for" style={{ color: '#2d5be3', textDecoration: 'none' }}>For</a>
          {'  '}
          <span>News Publishers</span>
        </nav>

        <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>
          SitemapFixer for News Publishers
        </h1>

        <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
          In news, minutes matter. A breaking article that takes two hours to hit Top Stories is
          an article that missed the window. The news sitemap protocol is strict, unforgiving,
          and easy to break with a CMS update. SitemapFixer audits your news sitemap against
          Google's exact specification so you catch freshness regressions before they cost you
          impressions.
        </p>

        <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 4 }}>Check your news sitemap</div>
            <div style={{ fontSize: 13, color: '#6b6b7d' }}>Validate against the Google News protocol in seconds.</div>
          </div>
          <a href="/" style={{ background: '#0a0a0f', color: 'white', padding: '12px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 14, whiteSpace: 'nowrap' }}>
            Audit News Sitemap
          </a>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>The sitemap challenges news publishers face</h2>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
          <li>Strict Google News sitemap protocol - missing news_title, publication_date, or language tags break inclusion</li>
          <li>Freshness signals degrading when articles older than 48 hours linger in the news sitemap</li>
          <li>Hourly recrawl expectations - Google expects near real-time updates and will deprioritize stale feeds</li>
          <li>Articles silently missing from Top Stories because of sitemap structure, not content quality</li>
          <li>The 1,000-URL cap on news sitemaps forcing careful rotation of which articles are included</li>
          <li>CMS publishing pipelines producing malformed publication dates (timezone, ISO-8601 format)</li>
        </ul>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How SitemapFixer helps</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 16 }}>
          SitemapFixer validates your news sitemap against the exact Google News protocol,
          checking every required tag, every publication_date format, and every URL for
          compliance. When something breaks after a CMS release, you find out immediately -
          not after a week of missing Top Stories placements.
        </p>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 16 }}>
          Freshness regressions are the most common hidden issue. The tool flags articles older
          than 48 hours that are still in the news sitemap, inconsistent lastmod timestamps that
          confuse Googlebot, and URLs that return 4xx or are behind a paywall without the
          appropriate tags.
        </p>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
          For publishers running multiple verticals or brands, each news sitemap can be audited
          separately, so the sports desk and the politics desk can diagnose their own pipelines.
        </p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Key features for news publishers</h2>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.9, marginBottom: 32, fontSize: 16 }}>
          <li>Full Google News sitemap protocol validation (news_title, publication_date, language, genres)</li>
          <li>Freshness window checks - flags articles older than 48 hours still sitting in the news sitemap</li>
          <li>Publication date format validation against ISO-8601 and timezone-correctness checks</li>
          <li>1,000-URL cap monitoring so you know when to rotate older articles out</li>
          <li>4xx and paywall-without-schema detection for articles that would never index</li>
          <li>Hourly recrawl readiness check - verifies lastmod signals that drive near real-time crawl</li>
        </ul>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Real example</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
          A regional news publisher saw a sharp drop in Top Stories appearances after a CMS
          migration. The content was fine, the articles were ranking in regular search, but
          Top Stories traffic had fallen off. SitemapFixer caught the cause in the first audit:
          publication_date tags were being written in the server timezone instead of UTC, and
          Google was interpreting every article as hours older than it actually was. A one-line
          fix in the CMS template restored Top Stories placements within two days.
        </p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, marginTop: 40 }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>How often should I update a news sitemap?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>News sitemaps should be regenerated within minutes of a new article being published. Google expects near real-time freshness, and articles older than 48 hours should be moved out of the news sitemap entirely.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>What is the difference between a regular sitemap and a news sitemap?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>A news sitemap follows the Google News sitemap protocol, requires publication dates within the last two days, has a 1,000 URL limit, and includes news-specific tags. Your regular sitemap can still reference news articles for long-tail search.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Why are my articles not appearing in Top Stories?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Top Stories eligibility depends on multiple signals, but a malformed news sitemap is one of the most common blockers. Missing publication dates, articles older than two days, or invalid news_title tags will quietly prevent inclusion.</div>
          </div>
        </div>

        <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
          <div style={{ fontSize: 22, fontWeight: 700, color: 'white', marginBottom: 8 }}>Protect your Top Stories traffic</div>
          <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Full news sitemap audit in under a minute.</div>
          <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 32px', borderRadius: 8, textDecoration: 'none', fontWeight: 700, fontSize: 15 }}>
            Audit News Sitemap Free
          </a>
        </div>

        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Other use cases</div>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <li><a href="/for/agencies" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Agencies</a></li>
            <li><a href="/for/ecommerce" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>E-commerce</a></li>
            <li><a href="/for/enterprise" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Enterprise</a></li>
            <li><a href="/for/saas" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>SaaS</a></li>
          </ul>
        </div>
      </div>
    </>
  );
}
