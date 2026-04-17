import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SitemapFixer vs Google Search Console: Whats the Difference?',
  description: 'GSC tells you which URLs Google indexed. SitemapFixer tells you whats wrong with your sitemap before Google sees it. A full comparison of both tools.',
  keywords: ['sitemapfixer vs google search console', 'gsc sitemap report', 'search console alternative', 'sitemap validation'],
  alternates: { canonical: 'https://sitemapfixer.com/compare/sitemapfixer-vs-google-search-console' },
  openGraph: {
    title: 'SitemapFixer vs Google Search Console: Whats the Difference?',
    description: 'GSC tells you which URLs Google indexed. SitemapFixer tells you whats wrong with your sitemap before Google sees it. A full comparison of both tools.',
    url: 'https://sitemapfixer.com/compare/sitemapfixer-vs-google-search-console',
    type: 'article',
    images: [{
      url: 'https://sitemapfixer.com/opengraph-image',
      width: 1200,
      height: 630,
      alt: 'SitemapFixer vs Google Search Console comparison',
    }],
    siteName: 'SitemapFixer',
    locale: 'en_US',
  },
};

const h2 = { fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 } as const;
const h3 = { fontSize: 18, fontWeight: 600, color: '#0a0a0f', marginBottom: 8, marginTop: 20 } as const;
const p = { fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 16 } as const;
const th = { textAlign: 'left' as const, padding: '12px 16px', borderBottom: '1px solid #e4e4ed', fontSize: 14, fontWeight: 600, color: '#0a0a0f', background: '#eef1ff' };
const td = { padding: '12px 16px', borderBottom: '1px solid #e4e4ed', fontSize: 14, color: '#3d3d4f', verticalAlign: 'top' as const };
const tdAlt = { ...td, background: '#fafaf9' };

export default function Page() {
  const faqSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Isnt Google Search Console enough for checking sitemaps?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'GSC tells you how Google processed your sitemap, but it only reports basic issues (not parsed, fetch failed) and shows sampled indexation data. It wont tell you about duplicate URLs in the sitemap, incorrect priority values, stale lastmod dates, or hreflang inconsistencies. SitemapFixer catches those pre-submission.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can SitemapFixer replace Google Search Console?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. GSC is the source of truth for how Google actually crawls and indexes your site - no third-party tool can replace it. SitemapFixer is complementary: it audits your sitemap so fewer issues reach Google in the first place.',
        },
      },
      {
        '@type': 'Question',
        name: 'My GSC says my sitemap is fine. Why run SitemapFixer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'GSCs success state only means the sitemap was parseable. It doesnt validate the quality of URLs inside. A sitemap with 3,000 duplicate URLs or 500 404s can still show as successfully processed in GSC. SitemapFixer checks whats actually inside.',
        },
      },
    ],
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px', fontFamily: 'Geist, sans-serif' }}>
        <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
          <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>
          {' / '}
          <a href="/compare" style={{ color: '#2d5be3', textDecoration: 'none' }}>Compare</a>
          {' / '}
          <span>SitemapFixer vs Google Search Console</span>
        </nav>

        <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>
          SitemapFixer vs Google Search Console
        </h1>
        <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
          This comparison is for site owners wondering if theyre duplicating work. GSC is free and comes straight from Google - do you really need another tool? The answer is yes, because they look at different things. Heres exactly what each one tells you.
        </p>

        <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 4 }}>Check your sitemap before GSC does</div>
            <div style={{ fontSize: 13, color: '#6b6b7d' }}>Catch issues pre-submission - free audit in 60 seconds</div>
          </div>
          <a href="/" style={{ background: '#0a0a0f', color: 'white', padding: '12px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 14, whiteSpace: 'nowrap' }}>
            Analyze My Sitemap
          </a>
        </div>

        <h2 style={h2}>TL;DR: Which one should you use?</h2>
        <p style={p}>
          Use <strong>Google Search Console</strong> to see how Google actually processes and indexes your sitemap - thats non-negotiable. Use <strong>SitemapFixer</strong> to audit the content of your sitemap before submitting it, and to debug issues GSC flags without telling you why. GSC is the source of truth; SitemapFixer is the diagnostic tool that explains whats broken and how to fix it.
        </p>

        <h2 style={h2}>Comparison Table</h2>
        <div style={{ overflowX: 'auto', marginBottom: 32 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #e4e4ed', borderRadius: 8, overflow: 'hidden', fontSize: 14 }}>
            <thead>
              <tr>
                <th style={th}>Feature</th>
                <th style={th}>SitemapFixer</th>
                <th style={th}>Google Search Console</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={td}>Price</td>
                <td style={td}>Free tier + paid plans</td>
                <td style={td}>Free</td>
              </tr>
              <tr>
                <td style={tdAlt}>Works without site ownership</td>
                <td style={tdAlt}>Yes - any public sitemap</td>
                <td style={tdAlt}>No - must verify ownership</td>
              </tr>
              <tr>
                <td style={td}>Detects duplicate URLs in sitemap</td>
                <td style={td}>Yes</td>
                <td style={td}>No</td>
              </tr>
              <tr>
                <td style={tdAlt}>Shows actual indexation status</td>
                <td style={tdAlt}>No</td>
                <td style={tdAlt}>Yes - authoritative</td>
              </tr>
              <tr>
                <td style={td}>AI fix recommendations</td>
                <td style={td}>Yes</td>
                <td style={td}>No</td>
              </tr>
              <tr>
                <td style={tdAlt}>Flags stale lastmod dates</td>
                <td style={tdAlt}>Yes</td>
                <td style={tdAlt}>No</td>
              </tr>
              <tr>
                <td style={td}>Checks URL count / file size limits</td>
                <td style={td}>Yes - pre-submission</td>
                <td style={td}>Yes - post-submission error only</td>
              </tr>
              <tr>
                <td style={tdAlt}>Coverage & indexation reports</td>
                <td style={tdAlt}>No</td>
                <td style={tdAlt}>Yes - core feature</td>
              </tr>
              <tr>
                <td style={td}>Performance (impressions/clicks) data</td>
                <td style={td}>No</td>
                <td style={td}>Yes</td>
              </tr>
              <tr>
                <td style={tdAlt}>Response time</td>
                <td style={tdAlt}>Seconds</td>
                <td style={tdAlt}>Days for re-crawl</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 style={h2}>Google Search Console</h2>
        <p style={p}>
          GSC is Googles free tool for site owners. It shows how Google actually crawls and indexes your site: which URLs are indexed, which were discovered but not indexed, which failed, and why. For sitemaps specifically, it tells you how many URLs were submitted, how many were discovered, and whether the sitemap was processed successfully.
        </p>
        <h3 style={h3}>Strengths</h3>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 16, fontSize: 16 }}>
          <li>Authoritative - the only source for how Google sees your site</li>
          <li>Free forever</li>
          <li>Shows search impressions, clicks, and queries</li>
          <li>Indexation status at the URL level</li>
          <li>Manual indexing requests for individual URLs</li>
        </ul>
        <h3 style={h3}>Weaknesses</h3>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 16, fontSize: 16 }}>
          <li>Sitemap-specific feedback is thin - you see success/fail but not whats inside</li>
          <li>Reports lag real-time - issues take days to surface</li>
          <li>Sample-based data for large sites, not exhaustive</li>
          <li>Requires domain verification - cant check sitemaps you dont own</li>
          <li>No proactive fix suggestions</li>
        </ul>
        <h3 style={h3}>Best for</h3>
        <p style={p}>Every site. Its free and irreplaceable as a source of truth on indexation and search performance.</p>

        <h2 style={h2}>SitemapFixer</h2>
        <p style={p}>
          SitemapFixer is a pre-flight check: it audits the sitemap itself (duplicates, 4xx URLs, size limits, stale dates, hreflang issues, noindex conflicts) before Google ever sees it. Because it doesnt depend on Googles crawl schedule, feedback is instant. It also works on competitor sitemaps you cant verify in GSC.
        </p>
        <h3 style={h3}>Strengths</h3>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 16, fontSize: 16 }}>
          <li>Instant feedback on sitemap contents</li>
          <li>Works without domain ownership - paste any URL</li>
          <li>AI-written fix recommendations with code examples</li>
          <li>Catches issues GSC wont flag (duplicates, stale lastmod)</li>
        </ul>
        <h3 style={h3}>Weaknesses</h3>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 16, fontSize: 16 }}>
          <li>Cant show actual Google indexation - only what should be indexable</li>
          <li>No search performance data</li>
          <li>Doesnt trigger re-crawls - you still need GSC for that</li>
        </ul>
        <h3 style={h3}>Best for</h3>
        <p style={p}>SEOs and developers who want to catch sitemap issues before submitting to Google, debug GSC errors without the GSC reporting lag, and audit competitor sitemaps.</p>

        <h2 style={h2}>Our verdict</h2>
        <p style={p}>
          Youll use both. GSC is non-negotiable for any serious site - if you dont have it set up, thats step one. SitemapFixer solves a different problem: it shortens the feedback loop on sitemap quality from days to seconds, and explains whats wrong in plain language. Think of GSC as your monitoring, and SitemapFixer as your linter.
        </p>

        <h2 style={h2}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Isnt Google Search Console enough for checking sitemaps?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>GSC tells you how Google processed your sitemap, but it only reports basic issues (not parsed, fetch failed) and shows sampled indexation data. It wont tell you about duplicate URLs, stale lastmod dates, or hreflang inconsistencies. SitemapFixer catches those pre-submission.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Can SitemapFixer replace Google Search Console?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>No. GSC is the source of truth for how Google actually crawls and indexes your site - no third-party tool can replace it. SitemapFixer is complementary: it audits your sitemap so fewer issues reach Google in the first place.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>My GSC says my sitemap is fine. Why run SitemapFixer?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>GSCs success state only means the sitemap was parseable. It doesnt validate the quality of URLs inside. A sitemap with 3,000 duplicate URLs or 500 404s can still show as successfully processed in GSC.</div>
          </div>
        </div>

        <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
          <div style={{ fontSize: 22, fontWeight: 700, color: 'white', marginBottom: 8 }}>Catch sitemap issues before Google does</div>
          <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Pre-flight your sitemap - free, no signup, no site verification</div>
          <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 32px', borderRadius: 8, textDecoration: 'none', fontWeight: 700, fontSize: 15 }}>
            Analyze My Sitemap Free
          </a>
        </div>

        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Other comparisons</div>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <li><a href="/compare/sitemapfixer-vs-screaming-frog" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>vs Screaming Frog</a></li>
            <li><a href="/compare/sitemapfixer-vs-yoast" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>vs Yoast</a></li>
            <li><a href="/compare/best-xml-sitemap-generators" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Best XML Sitemap Generators</a></li>
          </ul>
        </div>
      </div>
    </>
  );
}
