import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Screaming Frog vs Ahrefs: Which One Do You Need?',
  description: 'Screaming Frog vs Ahrefs comparison. Different tools, different jobs. When to use each, when you need both, and honest pricing breakdown.',
  keywords: ['screaming frog vs ahrefs', 'ahrefs vs screaming frog', 'screaming frog alternative', 'seo tool comparison', 'screaming frog or ahrefs', 'is ahrefs better than screaming frog'],
  alternates: { canonical: 'https://sitemapfixer.com/compare/screaming-frog-vs-ahrefs' },
  openGraph: {
    title: 'Screaming Frog vs Ahrefs: Which One Do You Need?',
    description: 'Screaming Frog vs Ahrefs comparison. Different tools, different jobs. When to use each, when you need both, and honest pricing breakdown.',
    url: 'https://sitemapfixer.com/compare/screaming-frog-vs-ahrefs',
    type: 'article',
    images: [{
      url: 'https://sitemapfixer.com/opengraph-image',
      width: 1200,
      height: 630,
      alt: 'Screaming Frog vs Ahrefs comparison',
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
const ul = { paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 16, fontSize: 16 } as const;

export default function Page() {
  const faqs = [
    {
      q: 'Is Screaming Frog free?',
      a: 'Screaming Frog SEO Spider has a free tier that lets you crawl up to 500 URLs per project with a limited feature set. Above 500 URLs, or to unlock JavaScript rendering, scheduling, custom extraction, API integrations with Google Analytics and Search Console, and configuration saving, you need the paid license, which is roughly £199/year (around $259/year depending on the exchange rate). There is no monthly option.',
    },
    {
      q: 'Is Ahrefs worth the money?',
      a: 'It depends on whether you actually need backlink and keyword data. Ahrefs Lite starts at $129/month and the Standard plan at $249/month. If you do link building, competitor research, keyword research, or rank tracking as a meaningful part of your job, those plans pay for themselves quickly. If you only do technical audits and on-page work, Ahrefs is overkill and Screaming Frog plus Google Search Console will cover you for a fraction of the cost.',
    },
    {
      q: 'Can Screaming Frog replace Ahrefs?',
      a: 'No. They draw on completely different data sources. Screaming Frog crawls your site (or any site you point it at) and reports what it finds on the pages themselves. Ahrefs maintains its own global crawl index of backlinks, keyword rankings, and SERP history that no desktop crawler can replicate. You cannot get referring domains, keyword difficulty, or organic traffic estimates out of Screaming Frog, and you cannot get custom JavaScript extraction or log-file analysis out of Ahrefs.',
    },
    {
      q: 'Do I need both?',
      a: 'Most mid-to-senior in-house SEOs and agency practitioners use both. Screaming Frog is the working tool for technical audits, site migrations, and on-page QA; Ahrefs is the working tool for keyword research, content planning, and backlink analysis. Juniors or solo operators can often start with one based on their focus area (technical vs content/links) and add the other later.',
    },
    {
      q: 'What is a free alternative to both?',
      a: 'There is no single free tool that replaces either. The honest baseline stack is Google Search Console (free, for your own site performance and indexing), Screaming Frog\'s free tier (up to 500 URLs for crawling), Ahrefs Webmaster Tools (free, limited backlink and keyword data for verified domains), and Bing Webmaster Tools for additional keyword data. For one-off category-specific checks, focused tools like a dedicated sitemap auditor or a PageSpeed Insights run will cover narrow use cases without a paid subscription.',
    },
  ];

  const faqSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'Screaming Frog vs Ahrefs: Which One Do You Need?', description: 'Screaming Frog vs Ahrefs comparison. Different tools, different jobs. When to use each, when you need both, and honest pricing breakdown.', url: 'https://sitemapfixer.com/compare/screaming-frog-vs-ahrefs', author: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com' }, publisher: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com', logo: { '@type': 'ImageObject', url: 'https://sitemapfixer.com/opengraph-image' } }, datePublished: '2026-04-17', mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://sitemapfixer.com/compare/screaming-frog-vs-ahrefs' } }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sitemapfixer.com/' }, { '@type': 'ListItem', position: 2, name: 'Compare', item: 'https://sitemapfixer.com/compare' }, { '@type': 'ListItem', position: 3, name: 'Screaming Frog vs Ahrefs: Which One Do You Need?', item: 'https://sitemapfixer.com/compare/screaming-frog-vs-ahrefs' }] }),
        }}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px', fontFamily: 'Geist, sans-serif' }}>
        <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
          <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>
          {' / '}
          <a href="/compare" style={{ color: '#2d5be3', textDecoration: 'none' }}>Compare</a>
          {' / '}
          <span>Screaming Frog vs Ahrefs</span>
        </nav>

        <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>
          Screaming Frog vs Ahrefs: Which SEO Tool Do You Need?
        </h1>
        <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
          Both tools sit near the top of almost every SEO tool stack, but they do not actually compete with each other. Screaming Frog is a desktop crawler built for technical audits. Ahrefs is a cloud platform built on a proprietary backlink and keyword index. The right answer depends far more on the job you are hired to do than on which tool is objectively better. This guide walks through the real differences, the scenarios where each one wins, and when you genuinely need both.
        </p>

        <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 4 }}>Just need a quick sitemap audit?</div>
            <div style={{ fontSize: 13, color: '#6b6b7d' }}>Free, browser-based, no install or subscription</div>
          </div>
          <a href="/" style={{ background: '#0a0a0f', color: 'white', padding: '12px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 14, whiteSpace: 'nowrap' }}>
            Try SitemapFixer
          </a>
        </div>

        <h2 style={h2}>TL;DR: These are not the same product</h2>
        <p style={p}>
          Use <strong>Screaming Frog</strong> for technical SEO and on-page audits: crawling the site, catching broken links and redirect chains, validating structured data, rendering JavaScript, parsing log files, and extracting arbitrary data with XPath or CSS selectors. Use <strong>Ahrefs</strong> for keyword research, backlink analysis, rank tracking, competitive intel, and content gap analysis &mdash; data that only comes from a proprietary global index. Most serious SEO teams run both, because each one solves a problem the other cannot. Treating this as an either/or decision usually means you have not run into one of the two jobs yet.
        </p>
        <p style={p}>
          A quick mental model: Screaming Frog answers &ldquo;what does my site actually look like to a crawler right now?&rdquo; Ahrefs answers &ldquo;what does the rest of the web look like, and where do I fit into it?&rdquo; The first is internal and deterministic, the second is external and estimated. You can do good SEO with only one of them, but you cannot do the full job.
        </p>

        <h2 style={h2}>Comparison Table</h2>
        <div style={{ overflowX: 'auto', marginBottom: 32 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #e4e4ed', borderRadius: 8, overflow: 'hidden', fontSize: 14 }}>
            <thead>
              <tr>
                <th style={th}>Category</th>
                <th style={th}>Screaming Frog</th>
                <th style={th}>Ahrefs</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={td}>Pricing</td>
                <td style={td}>~$259/year license (one tier)</td>
                <td style={td}>$129-$1,499/month (four tiers)</td>
              </tr>
              <tr>
                <td style={tdAlt}>Free tier</td>
                <td style={tdAlt}>Yes, up to 500 URLs per crawl</td>
                <td style={tdAlt}>Ahrefs Webmaster Tools (verified sites only)</td>
              </tr>
              <tr>
                <td style={td}>Main use case</td>
                <td style={td}>Technical audits, on-page analysis</td>
                <td style={td}>Backlinks, keywords, competitive research</td>
              </tr>
              <tr>
                <td style={tdAlt}>Site crawling</td>
                <td style={tdAlt}>Unlimited URLs (RAM/disk permitting)</td>
                <td style={tdAlt}>Cloud site audit, capped by plan credits</td>
              </tr>
              <tr>
                <td style={td}>Backlink data</td>
                <td style={td}>None (crawler only)</td>
                <td style={td}>Industry-leading proprietary index</td>
              </tr>
              <tr>
                <td style={tdAlt}>Keyword research</td>
                <td style={tdAlt}>None</td>
                <td style={tdAlt}>Keywords Explorer with volume and KD</td>
              </tr>
              <tr>
                <td style={td}>Rank tracking</td>
                <td style={td}>No</td>
                <td style={td}>Yes, included on paid plans</td>
              </tr>
              <tr>
                <td style={tdAlt}>Site audit</td>
                <td style={tdAlt}>Deep desktop crawl, full control</td>
                <td style={tdAlt}>Cloud-scheduled, issue-focused</td>
              </tr>
              <tr>
                <td style={td}>JavaScript rendering</td>
                <td style={td}>Yes, headless Chromium</td>
                <td style={td}>Limited; mostly static-HTML index</td>
              </tr>
              <tr>
                <td style={tdAlt}>Log file analysis</td>
                <td style={tdAlt}>Yes (separate Log File Analyser app)</td>
                <td style={tdAlt}>No</td>
              </tr>
              <tr>
                <td style={td}>Platform</td>
                <td style={td}>Desktop (Windows, macOS, Ubuntu)</td>
                <td style={td}>Cloud SaaS (browser)</td>
              </tr>
              <tr>
                <td style={tdAlt}>Team collaboration</td>
                <td style={tdAlt}>Export files manually</td>
                <td style={tdAlt}>Shared workspaces, multi-seat plans</td>
              </tr>
              <tr>
                <td style={td}>Learning curve</td>
                <td style={td}>Steep &mdash; hundreds of settings</td>
                <td style={td}>Moderate &mdash; UI-driven but broad surface</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 style={h2}>Screaming Frog SEO Spider</h2>
        <p style={p}>
          Screaming Frog is a desktop SEO crawler from the UK agency of the same name. You install it locally, point it at a URL, and it crawls the site the way a search engine would, surfacing response codes, canonicals, hreflang, meta data, structured data, internal linking, and anything else it encounters along the way. It has been the de facto technical SEO tool for more than a decade, largely because no cloud product has matched the depth of control it gives you over a crawl.
        </p>
        <h3 style={h3}>Strengths</h3>
        <ul style={ul}>
          <li>Unmatched crawl depth and configurability &mdash; include/exclude rules, regex, custom robots, authentication, custom headers</li>
          <li>Custom extraction with XPath, CSS selectors, and regex for pulling any field off any page</li>
          <li>JavaScript rendering with a real headless Chromium, essential for React/Next.js/Vue sites</li>
          <li>Log file analysis (separate app) for real Googlebot behaviour, not estimates</li>
          <li>API integrations with Google Analytics 4, Search Console, PageSpeed Insights, Ahrefs, Majestic, and Moz</li>
          <li>Runs locally &mdash; your crawl data never leaves your machine, which matters for client work under NDA</li>
        </ul>
        <h3 style={h3}>Weaknesses</h3>
        <ul style={ul}>
          <li>Zero backlink, keyword, or SERP data of its own &mdash; it can only report what it crawls</li>
          <li>Desktop-bound: no shared dashboards, no web UI, exports are the only way to collaborate</li>
          <li>Memory-hungry on large sites; crawling a million-URL site requires database storage mode and real RAM</li>
          <li>Steep learning curve &mdash; the settings panel alone has dozens of tabs, and most are meaningful</li>
          <li>No monthly pricing; the license is annual and all-or-nothing above 500 URLs</li>
        </ul>
        <h3 style={h3}>Best for</h3>
        <p style={p}>
          Technical SEOs, SEO engineers, agency audit teams, site migration leads, and anyone who regularly needs to answer questions like &ldquo;which of these 80,000 URLs has a self-referencing canonical that does not match the rendered DOM?&rdquo; If your day-to-day is pre-launch QA, post-migration validation, or JavaScript-rendered crawl debugging, Screaming Frog is not optional.
        </p>
        <p style={p}>
          Screaming Frog is also the better choice when you need to crawl a site you do not own, under conditions you control. Competitor audits, due-diligence crawls during acquisitions, and client discovery calls all benefit from the ability to throttle, authenticate, and respect (or ignore) robots.txt exactly as you decide. Cloud tools impose their own crawl rules and limits; a desktop crawler does not.
        </p>

        <h2 style={h2}>Ahrefs</h2>
        <p style={p}>
          Ahrefs is a cloud SEO platform built around one of the largest independent backlink and keyword indexes on the market. You log in through the browser, enter a domain or keyword, and get historical data on rankings, referring domains, organic traffic, and content performance &mdash; for any site on the web, not just your own. The core product is Site Explorer, but the suite also includes Keywords Explorer, Content Explorer, Rank Tracker, and a cloud-based Site Audit.
        </p>
        <h3 style={h3}>Strengths</h3>
        <ul style={ul}>
          <li>The best-in-class backlink index: freshness, depth, and link attributes (dofollow, nofollow, sponsored, UGC) are consistently strong</li>
          <li>Keywords Explorer with Keyword Difficulty (KD), traffic potential, parent topic, and SERP history</li>
          <li>Content Explorer for finding pages by topic, traffic, and referring domains &mdash; excellent for content gap work</li>
          <li>Cloud-native: shared workspaces, scheduled crawls, multi-project setups, fast collaboration across teams</li>
          <li>Rank tracking in dozens of countries with daily or weekly updates, built in</li>
          <li>Strong API for integrations and custom dashboards</li>
        </ul>
        <h3 style={h3}>Weaknesses</h3>
        <ul style={ul}>
          <li>Expensive: $129/month entry plan, and the cheaper tiers limit projects, history, and export credits aggressively</li>
          <li>Site Audit is solid but not a replacement for a real desktop crawler &mdash; you get less control over crawl rules and custom extraction</li>
          <li>JavaScript rendering in Site Audit exists but is limited; heavily client-rendered sites are better audited with Screaming Frog</li>
          <li>No log file analysis, no access to your raw server logs</li>
          <li>Data is their interpretation of the web &mdash; volumes, traffic estimates, and KD are estimates, not ground truth</li>
        </ul>
        <h3 style={h3}>Best for</h3>
        <p style={p}>
          Content marketers, link builders, in-house SEO leads, agencies running competitive analysis for clients, and anyone whose job depends on questions like &ldquo;what are my competitors ranking for that I am not?&rdquo; or &ldquo;how many referring domains has this campaign earned?&rdquo; If keyword research and backlinks are in your job description, Ahrefs (or a close competitor like Semrush) is where you live.
        </p>
        <p style={p}>
          Ahrefs is also a strong pick for leadership and reporting use cases. Because it is cloud-based with historical data going back years, it is easy to produce board-ready charts showing organic traffic growth, referring domain trends, and share-of-voice against named competitors. Screaming Frog exports will never look like that without significant manual work in a spreadsheet.
        </p>

        <h2 style={h2}>When to use each</h2>
        <p style={p}>
          A quick decision framework. Match your actual task to the column that owns it. The pattern is consistent: if the question is about data that lives inside your site, Screaming Frog wins; if the question is about data that lives on the rest of the web, Ahrefs wins.
        </p>
        <ul style={ul}>
          <li>You need backlink data for a competitor or a prospecting list &rarr; <strong>Ahrefs</strong></li>
          <li>You need to crawl a 100,000-URL client site and export every broken internal link &rarr; <strong>Screaming Frog</strong></li>
          <li>You need search volume and keyword difficulty for a new content plan &rarr; <strong>Ahrefs</strong></li>
          <li>You need a JavaScript-rendered audit of a React or Next.js app &rarr; <strong>Screaming Frog</strong></li>
          <li>You are managing SEO across a portfolio of 20 client sites and need dashboards &rarr; <strong>Ahrefs</strong></li>
          <li>You need to validate structured data and hreflang across an enterprise template &rarr; <strong>Screaming Frog</strong></li>
          <li>You want daily rank tracking for 500 keywords in three countries &rarr; <strong>Ahrefs</strong></li>
          <li>You need to analyse real Googlebot log files to find crawl waste &rarr; <strong>Screaming Frog</strong> (Log File Analyser)</li>
          <li>You are pitching a client and need a backlink gap analysis in 20 minutes &rarr; <strong>Ahrefs</strong></li>
          <li>You are debugging why specific URLs are missing from Google&apos;s index and need to compare rendered vs raw HTML &rarr; <strong>Screaming Frog</strong></li>
        </ul>

        <h2 style={h2}>Can I use both?</h2>
        <p style={p}>
          Yes, and most professional SEOs do. The typical workflow: Ahrefs is the strategic layer &mdash; you use it to find opportunities, validate demand, size up competitors, and track outcomes. Screaming Frog is the execution layer &mdash; once you know which pages matter, you use it to make sure those pages are actually crawlable, indexable, fast, and correctly marked up. The two tools integrate directly: Screaming Frog can pull Ahrefs backlink metrics into a crawl so you can, for example, prioritise broken links on the 50 URLs with the most referring domains. That is the sort of workflow that is hard to replicate with either tool alone.
        </p>
        <p style={p}>
          Budget-wise, the combined cost is roughly $129-$249/month for Ahrefs plus ~$259/year for Screaming Frog. For any SEO whose salary depends on results, that is a rounding error compared to the time saved and the mistakes avoided.
        </p>
        <p style={p}>
          One more combined workflow worth calling out: migration QA. Before a site migration you pull a full list of top pages by organic traffic and backlinks from Ahrefs. You then crawl the staging site with Screaming Frog, map old URLs to new, and make sure every high-value page has a 301 pointing to the right destination with no redirect chain. Post-launch you re-crawl production with Screaming Frog and re-check Ahrefs organic traffic two to four weeks later to catch regressions. Neither tool does this end-to-end on its own.
        </p>

        <h2 style={h2}>A note on pricing and ROI</h2>
        <p style={p}>
          The pricing gap between these two tools is the single biggest reason people frame this as a versus decision in the first place. A Screaming Frog license comes out to roughly $22/month amortised annually; the cheapest real Ahrefs plan is almost six times that. If you are a solo operator or an early-stage in-house SEO, that difference is real and worth thinking about. But the comparison is misleading, because the two tools are not billing you for the same thing.
        </p>
        <p style={p}>
          What you pay Screaming Frog for is software: a well-maintained desktop app with a perpetual-feel annual license. What you pay Ahrefs for is data: the ongoing cost of crawling the web, maintaining an index of trillions of links, and measuring rankings across every major search engine and country. The data cost does not go away, which is why Ahrefs (and Semrush, and Moz) charge recurring subscriptions. A decent rule of thumb: if you bill clients for SEO work, or if backlink and keyword data would change a decision worth more than $129/month, Ahrefs pays for itself in the first week of the month.
        </p>

        <h2 style={h2}>If you only need sitemap analysis...</h2>
        <p style={p}>
          Neither tool is a great fit if your actual job is just &ldquo;audit this sitemap.xml.&rdquo; Screaming Frog can crawl sitemaps but is overkill, and Ahrefs does not focus on sitemap-specific issues. If that describes you, <a href="/" style={{ color: '#2d5be3' }}>SitemapFixer</a> is a third option: a focused, browser-based <a href="/sitemap-checker" style={{ color: '#2d5be3' }}>sitemap checker</a> that handles the sitemap-specific failure modes (stale lastmod, non-canonical entries, 4xx/5xx URLs, oversized files) without full crawling or backlink data. Use it if sitemap validation is the only job; otherwise stick with the two tools above.
        </p>

        <h2 style={h2}>FAQ</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
          {faqs.map((f) => (
            <div key={f.q} style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
              <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>{f.q}</div>
              <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>{f.a}</div>
            </div>
          ))}
        </div>

        <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
          <div style={{ fontSize: 22, fontWeight: 700, color: 'white', marginBottom: 8 }}>Sitemap-specific checks in 60 seconds</div>
          <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free, browser-based, no install &mdash; a focused third option when you do not need a full crawler or backlink suite.</div>
          <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 32px', borderRadius: 8, textDecoration: 'none', fontWeight: 700, fontSize: 15 }}>
            Try SitemapFixer Free
          </a>
        </div>

        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Other comparisons</div>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <li><a href="/compare/sitemapfixer-vs-screaming-frog" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>SitemapFixer vs Screaming Frog</a></li>
            <li><a href="/compare/sitemapfixer-vs-yoast" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>SitemapFixer vs Yoast</a></li>
            <li><a href="/compare/sitemapfixer-vs-google-search-console" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>SitemapFixer vs Google Search Console</a></li>
            <li><a href="/compare/best-xml-sitemap-generators" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Best XML Sitemap Generators</a></li>
          </ul>
        </div>
      </div>
    </>
  );
}
