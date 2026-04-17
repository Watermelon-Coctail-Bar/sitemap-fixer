import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best XML Sitemap Generators in 2026',
  description: '5 XML sitemap generators compared: Yoast, Screaming Frog, XML-Sitemaps.com, Slickplan, and SitemapFixer. Features, pricing, and when to use each.',
  keywords: ['best xml sitemap generator', 'xml sitemap generator 2026', 'sitemap generator comparison', 'free sitemap generator'],
  alternates: { canonical: 'https://sitemapfixer.com/compare/best-xml-sitemap-generators' },
  openGraph: {
    title: 'Best XML Sitemap Generators in 2026',
    description: '5 XML sitemap generators compared: Yoast, Screaming Frog, XML-Sitemaps.com, Slickplan, and SitemapFixer. Features, pricing, and when to use each.',
    url: 'https://sitemapfixer.com/compare/best-xml-sitemap-generators',
    type: 'article',
    images: [{
      url: 'https://sitemapfixer.com/opengraph-image',
      width: 1200,
      height: 630,
      alt: 'Best XML Sitemap Generators 2026',
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
        name: 'Whats the best free XML sitemap generator?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For WordPress: Yoast SEO (free and built-in). For static HTML sites: XML-Sitemaps.com has a free online generator up to 500 URLs. For developers: generate your own from your routing layer - frameworks like Next.js have this built in. For auditing existing sitemaps rather than generating: SitemapFixer has a free tier.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I really need a sitemap generator tool?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'If your CMS (WordPress, Shopify, Webflow) generates sitemaps automatically, no. If you run a custom site, a framework-built site (Next.js, Nuxt, Astro), or a static site with more than a handful of pages, you need either a generator tool or a build-time script that outputs sitemap.xml.',
        },
      },
      {
        '@type': 'Question',
        name: 'Whats the difference between a sitemap generator and a sitemap auditor?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A generator creates a sitemap.xml file from your site content. An auditor (like SitemapFixer) checks whether the sitemap you generated is free of errors. Most teams need both: generate first, audit second.',
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
          <span>Best XML Sitemap Generators</span>
        </nav>

        <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>
          Best XML Sitemap Generators in 2026
        </h1>
        <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
          This guide is for anyone trying to pick the right XML sitemap tool for their stack in 2026. Weve compared the five tools most sites actually use, across WordPress, desktop crawling, online generators, visual planning, and sitemap auditing. No fluff - pick the one that matches your setup.
        </p>

        <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 4 }}>Generated a sitemap? Audit it for free</div>
            <div style={{ fontSize: 13, color: '#6b6b7d' }}>Find errors before Google does - 60-second report</div>
          </div>
          <a href="/" style={{ background: '#0a0a0f', color: 'white', padding: '12px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 14, whiteSpace: 'nowrap' }}>
            Analyze My Sitemap
          </a>
        </div>

        <h2 style={h2}>TL;DR: Which one should you use?</h2>
        <p style={p}>
          If you run WordPress, use <strong>Yoast</strong> - its free and automatic. If you run a small static site, <strong>XML-Sitemaps.com</strong> is the easiest online generator. If youre an SEO pro on large sites, <strong>Screaming Frog</strong> generates sitemaps from a full crawl. For visual planning before a redesign, <strong>Slickplan</strong>. After generating a sitemap - whichever tool you used - run it through <strong>SitemapFixer</strong> to catch issues before Google sees them.
        </p>

        <h2 style={h2}>Comparison Table</h2>
        <div style={{ overflowX: 'auto', marginBottom: 32 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #e4e4ed', borderRadius: 8, overflow: 'hidden', fontSize: 14 }}>
            <thead>
              <tr>
                <th style={th}>Tool</th>
                <th style={th}>Price</th>
                <th style={th}>Platform</th>
                <th style={th}>Best for</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={td}>Yoast SEO</td>
                <td style={td}>Free; Premium $99/yr</td>
                <td style={td}>WordPress plugin</td>
                <td style={td}>Any WordPress site</td>
              </tr>
              <tr>
                <td style={tdAlt}>Screaming Frog</td>
                <td style={tdAlt}>Free up to 500 URLs; ~$259/yr</td>
                <td style={tdAlt}>Desktop (Win/Mac/Linux)</td>
                <td style={tdAlt}>Crawl-based generation</td>
              </tr>
              <tr>
                <td style={td}>XML-Sitemaps.com</td>
                <td style={td}>Free up to 500 URLs; paid from ~$4.99/mo</td>
                <td style={td}>Web-based</td>
                <td style={td}>Static HTML, small sites</td>
              </tr>
              <tr>
                <td style={tdAlt}>Slickplan</td>
                <td style={tdAlt}>Plans from ~$10.79/mo</td>
                <td style={tdAlt}>Web-based</td>
                <td style={tdAlt}>Visual sitemap planning</td>
              </tr>
              <tr>
                <td style={td}>SitemapFixer</td>
                <td style={td}>Free tier; paid from $9/mo</td>
                <td style={td}>Web-based</td>
                <td style={td}>Auditing existing sitemaps</td>
              </tr>
            </tbody>
          </table>
          <div style={{ fontSize: 12, color: '#6b6b7d', marginTop: 8 }}>Pricing reflects publicly listed rates as of 2026. Always verify on the vendors site.</div>
        </div>

        <h2 style={h2}>1. Yoast SEO</h2>
        <p style={p}>
          The default for WordPress. Yoasts free plugin auto-generates sitemap_index.xml with sub-sitemaps for posts, pages, taxonomies, and custom post types. It updates automatically when you publish, respects noindex settings, and lets you exclude specific content types from the sitemap UI.
        </p>
        <h3 style={h3}>Strengths</h3>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 16, fontSize: 16 }}>
          <li>Free, install-and-forget</li>
          <li>Auto-updates on publish</li>
          <li>Fine-grained exclusion controls</li>
        </ul>
        <h3 style={h3}>Weaknesses</h3>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 16, fontSize: 16 }}>
          <li>WordPress only</li>
          <li>No auditing of the sitemaps it creates</li>
        </ul>
        <h3 style={h3}>Best for</h3>
        <p style={p}>Any WordPress site. Full stop.</p>

        <h2 style={h2}>2. Screaming Frog SEO Spider</h2>
        <p style={p}>
          Screaming Frog generates sitemaps as a byproduct of crawling. You point it at your site, let it crawl, then export an XML sitemap from whatever was discovered. This is powerful because you can apply filters (only 200-response URLs, only canonical URLs) before export.
        </p>
        <h3 style={h3}>Strengths</h3>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 16, fontSize: 16 }}>
          <li>Crawl-based - captures actual reachable URLs</li>
          <li>Advanced filtering before export</li>
          <li>Images, video, and hreflang sitemap variants supported</li>
        </ul>
        <h3 style={h3}>Weaknesses</h3>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 16, fontSize: 16 }}>
          <li>Manual - doesnt auto-regenerate</li>
          <li>Desktop-only, memory-heavy on big sites</li>
          <li>Learning curve</li>
        </ul>
        <h3 style={h3}>Best for</h3>
        <p style={p}>SEO consultants generating one-off sitemaps for clients, or teams auditing the gap between what exists on their site and what they want in the sitemap.</p>

        <h2 style={h2}>3. XML-Sitemaps.com</h2>
        <p style={p}>
          The oldest online sitemap generator. Enter your site URL; it crawls and returns a sitemap.xml download. Free up to 500 URLs with a simple paid plan above that. The UI looks dated, but it works and requires zero setup.
        </p>
        <h3 style={h3}>Strengths</h3>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 16, fontSize: 16 }}>
          <li>Zero install, zero config - just enter a URL</li>
          <li>Free for small sites</li>
          <li>Supports image sitemaps</li>
        </ul>
        <h3 style={h3}>Weaknesses</h3>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 16, fontSize: 16 }}>
          <li>One-shot generation - no auto-update</li>
          <li>Limited control over what gets included</li>
          <li>500-URL cap on the free tier</li>
        </ul>
        <h3 style={h3}>Best for</h3>
        <p style={p}>Static HTML sites, hand-coded portfolios, tiny blogs - anywhere you need a sitemap but dont have a CMS generating one.</p>

        <h2 style={h2}>4. Slickplan</h2>
        <p style={p}>
          Slickplan is not primarily a sitemap generator - its a visual sitemap planning tool for agencies and designers building out new sites. You draw the information architecture visually, then Slickplan can export an XML sitemap for the planned structure.
        </p>
        <h3 style={h3}>Strengths</h3>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 16, fontSize: 16 }}>
          <li>Great for pre-launch IA planning</li>
          <li>Visual drag-and-drop interface</li>
          <li>Collaboration features for teams and clients</li>
        </ul>
        <h3 style={h3}>Weaknesses</h3>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 16, fontSize: 16 }}>
          <li>Overkill if you just want to generate sitemap.xml from an existing site</li>
          <li>Subscription-based</li>
          <li>Output isnt tied to live content</li>
        </ul>
        <h3 style={h3}>Best for</h3>
        <p style={p}>Web design agencies, UX teams planning site architecture, anyone building a new site from scratch.</p>

        <h2 style={h2}>5. SitemapFixer</h2>
        <p style={p}>
          SitemapFixer isnt a generator - its the auditor you run after generating a sitemap. Paste the sitemap URL and it checks for duplicates, 4xx/5xx URLs, oversized files, stale lastmod dates, noindex conflicts, and hreflang issues. It works with sitemaps from any of the four generators above.
        </p>
        <h3 style={h3}>Strengths</h3>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 16, fontSize: 16 }}>
          <li>CMS-agnostic - audits any sitemap</li>
          <li>AI-generated fix recommendations</li>
          <li>Free tier</li>
        </ul>
        <h3 style={h3}>Weaknesses</h3>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 16, fontSize: 16 }}>
          <li>Doesnt generate sitemaps - only audits them</li>
          <li>Requires you to have a sitemap URL to audit</li>
        </ul>
        <h3 style={h3}>Best for</h3>
        <p style={p}>Anyone whos already generated a sitemap and wants to make sure its actually good before submitting to Google.</p>

        <h2 style={h2}>Our verdict</h2>
        <p style={p}>
          Most sites only need one generator, based on their platform: Yoast for WordPress, your frameworks built-in sitemap for Next.js/Nuxt/etc., XML-Sitemaps.com for static HTML. Dont overthink the generator choice - pick the one native to your stack. Where you do get value is in auditing: every sitemap should be run through SitemapFixer at least once to catch quiet issues before Google indexes them.
        </p>

        <h2 style={h2}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Whats the best free XML sitemap generator?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>For WordPress: Yoast SEO. For static HTML: XML-Sitemaps.com up to 500 URLs. For developers: your frameworks built-in sitemap (Next.js has this). For auditing existing sitemaps, SitemapFixer has a free tier.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Do I really need a sitemap generator tool?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>If your CMS generates sitemaps automatically, no. If you run a custom site or framework-built site with more than a handful of pages, you need either a generator tool or a build-time script that outputs sitemap.xml.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Whats the difference between a sitemap generator and a sitemap auditor?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>A generator creates a sitemap.xml file from your site content. An auditor (like SitemapFixer) checks whether the sitemap is free of errors. Most teams need both.</div>
          </div>
        </div>

        <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
          <div style={{ fontSize: 22, fontWeight: 700, color: 'white', marginBottom: 8 }}>Audit whatever you generated</div>
          <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Works with sitemaps from Yoast, Screaming Frog, XML-Sitemaps.com, and more</div>
          <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 32px', borderRadius: 8, textDecoration: 'none', fontWeight: 700, fontSize: 15 }}>
            Analyze My Sitemap Free
          </a>
        </div>

        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Related comparisons</div>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <li><a href="/compare/best-sitemap-tools-wordpress" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Best WordPress Tools</a></li>
            <li><a href="/compare/free-vs-paid-sitemap-tools" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Free vs Paid</a></li>
            <li><a href="/compare/sitemapfixer-vs-screaming-frog" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>vs Screaming Frog</a></li>
          </ul>
        </div>
      </div>
    </>
  );
}
