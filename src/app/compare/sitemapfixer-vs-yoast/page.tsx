import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SitemapFixer vs Yoast SEO Sitemap: Generate vs Audit',
  description: 'Yoast generates sitemaps for WordPress. SitemapFixer audits and fixes them. Heres exactly when you need which one - and why most sites need both.',
  keywords: ['sitemapfixer vs yoast', 'yoast sitemap audit', 'wordpress sitemap checker', 'yoast sitemap issues'],
  alternates: { canonical: 'https://sitemapfixer.com/compare/sitemapfixer-vs-yoast' },
  openGraph: {
    title: 'SitemapFixer vs Yoast SEO Sitemap: Generate vs Audit',
    description: 'Yoast generates sitemaps for WordPress. SitemapFixer audits and fixes them. Heres exactly when you need which one - and why most sites need both.',
    url: 'https://sitemapfixer.com/compare/sitemapfixer-vs-yoast',
    type: 'article',
    images: [{
      url: 'https://sitemapfixer.com/opengraph-image',
      width: 1200,
      height: 630,
      alt: 'SitemapFixer vs Yoast comparison',
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
        name: 'Can I use Yoast and SitemapFixer together?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, and you probably should. Yoast generates your sitemap automatically from WordPress content. SitemapFixer then audits whatever Yoast produced and flags issues like duplicate URLs, noindex pages that shouldnt be in the sitemap, and stale lastmod dates. They do different jobs.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Yoast check my sitemap for errors?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Yoast generates sitemaps but does not actively audit them for SEO issues like 4xx errors, duplicates, oversized files, or indexation problems. Yoast assumes the sitemap it generates is correct - SitemapFixer verifies it.',
        },
      },
      {
        '@type': 'Question',
        name: 'I use Yoast. Do I still need SitemapFixer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'If your site is under 100 pages and static, probably not. If youre running an e-commerce site, a blog with hundreds of posts, or anywhere Yoast might include pages you didnt intend (taxonomies, attachments, archives), SitemapFixer will catch issues Yoast wont flag.',
        },
      },
    ],
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'SitemapFixer vs Yoast SEO Sitemap: Generate vs Audit', description: 'Yoast generates sitemaps for WordPress. SitemapFixer audits and fixes them. Heres exactly when you need which one - and why most sites need both.', url: 'https://sitemapfixer.com/compare/sitemapfixer-vs-yoast', author: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com' }, publisher: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com', logo: { '@type': 'ImageObject', url: 'https://sitemapfixer.com/opengraph-image' } }, datePublished: '2026-04-17', mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://sitemapfixer.com/compare/sitemapfixer-vs-yoast' } }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sitemapfixer.com/' }, { '@type': 'ListItem', position: 2, name: 'Compare', item: 'https://sitemapfixer.com/compare' }, { '@type': 'ListItem', position: 3, name: 'SitemapFixer vs Yoast SEO Sitemap: Generate vs Audit', item: 'https://sitemapfixer.com/compare/sitemapfixer-vs-yoast' }] }),
        }}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px', fontFamily: 'Geist, sans-serif' }}>
        <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
          <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>
          {' / '}
          <a href="/compare" style={{ color: '#2d5be3', textDecoration: 'none' }}>Compare</a>
          {' / '}
          <span>SitemapFixer vs Yoast SEO Sitemap</span>
        </nav>

        <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>
          SitemapFixer vs Yoast SEO Sitemap
        </h1>
        <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
          This comparison is for WordPress site owners and SEOs trying to decide whether Yoasts built-in sitemap is enough, or whether they need a dedicated sitemap audit tool on top. Short answer: these tools do different things. Long answer below.
        </p>

        <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 4 }}>Audit your Yoast sitemap</div>
            <div style={{ fontSize: 13, color: '#6b6b7d' }}>Paste your /sitemap_index.xml URL and see issues in 60 seconds</div>
          </div>
          <a href="/" style={{ background: '#0a0a0f', color: 'white', padding: '12px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 14, whiteSpace: 'nowrap' }}>
            Analyze My Sitemap
          </a>
        </div>

        <h2 style={h2}>TL;DR: Which one should you use?</h2>
        <p style={p}>
          Use <strong>Yoast</strong> to generate your XML sitemap if youre on WordPress - its free, automatic, and works well out of the box. Use <strong>SitemapFixer</strong> to check whether the sitemap Yoast produced has issues Google will care about. They arent alternatives, theyre a pipeline: Yoast creates, SitemapFixer audits. For WordPress sites of any meaningful size, you want both.
        </p>

        <h2 style={h2}>Comparison Table</h2>
        <div style={{ overflowX: 'auto', marginBottom: 32 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #e4e4ed', borderRadius: 8, overflow: 'hidden', fontSize: 14 }}>
            <thead>
              <tr>
                <th style={th}>Feature</th>
                <th style={th}>SitemapFixer</th>
                <th style={th}>Yoast SEO Sitemap</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={td}>Primary purpose</td>
                <td style={td}>Audit & fix recommendations</td>
                <td style={td}>Generate sitemaps</td>
              </tr>
              <tr>
                <td style={tdAlt}>Price</td>
                <td style={tdAlt}>Free tier + from $9/month</td>
                <td style={tdAlt}>Free; Yoast Premium $99/year</td>
              </tr>
              <tr>
                <td style={td}>Platform</td>
                <td style={td}>Web-based (any CMS)</td>
                <td style={td}>WordPress plugin only</td>
              </tr>
              <tr>
                <td style={tdAlt}>Detects duplicate URLs</td>
                <td style={tdAlt}>Yes</td>
                <td style={tdAlt}>No</td>
              </tr>
              <tr>
                <td style={td}>Detects 4xx/5xx URLs</td>
                <td style={td}>Yes</td>
                <td style={td}>No</td>
              </tr>
              <tr>
                <td style={tdAlt}>AI fix recommendations</td>
                <td style={tdAlt}>Yes</td>
                <td style={tdAlt}>No</td>
              </tr>
              <tr>
                <td style={td}>Auto-updates sitemap</td>
                <td style={td}>N/A - external tool</td>
                <td style={td}>Yes - on post publish</td>
              </tr>
              <tr>
                <td style={tdAlt}>Exclude post types/taxonomies</td>
                <td style={tdAlt}>N/A</td>
                <td style={tdAlt}>Yes</td>
              </tr>
              <tr>
                <td style={td}>Works with non-WordPress sites</td>
                <td style={td}>Yes</td>
                <td style={td}>No</td>
              </tr>
              <tr>
                <td style={tdAlt}>Validates hreflang in sitemap</td>
                <td style={tdAlt}>Yes</td>
                <td style={tdAlt}>Yoast Premium adds hreflang generation</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 style={h2}>Yoast SEO Sitemap</h2>
        <p style={p}>
          Yoast is the most-installed WordPress SEO plugin. Its sitemap feature is a core part of the free plugin: it auto-generates sitemap_index.xml plus sub-sitemaps for posts, pages, categories, tags, and custom post types. You dont have to touch code - install the plugin, and Yoast keeps your sitemap current as you publish.
        </p>
        <h3 style={h3}>Strengths</h3>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 16, fontSize: 16 }}>
          <li>Free and automatic - zero configuration required</li>
          <li>Auto-updates as content is added or removed</li>
          <li>Fine-grained controls to exclude specific post types or taxonomies</li>
          <li>Respects noindex meta robots settings</li>
        </ul>
        <h3 style={h3}>Weaknesses</h3>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 16, fontSize: 16 }}>
          <li>Does not audit the sitemaps it generates</li>
          <li>Wont catch duplicate URLs from plugin conflicts or URL parameters</li>
          <li>WordPress-only</li>
          <li>No visibility into stale lastmod dates or 4xx URLs still being listed</li>
        </ul>
        <h3 style={h3}>Best for</h3>
        <p style={p}>Every WordPress site that needs an XML sitemap. Its the default and its solid at generation.</p>

        <h2 style={h2}>SitemapFixer</h2>
        <p style={p}>
          SitemapFixer takes whatever sitemap URL you paste and runs it through a battery of SEO checks: duplicate detection, status code validation, noindex conflicts, lastmod sanity, hreflang consistency, file size and URL count limits, and canonical alignment. It works with sitemaps from any source - Yoast, Rank Math, Next.js, Shopify, custom code, etc.
        </p>
        <h3 style={h3}>Strengths</h3>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 16, fontSize: 16 }}>
          <li>CMS-agnostic - works with any sitemap source</li>
          <li>AI fix recommendations tailored to your site</li>
          <li>No plugin install or code changes required</li>
          <li>Catches issues Yoast doesnt check for</li>
        </ul>
        <h3 style={h3}>Weaknesses</h3>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 16, fontSize: 16 }}>
          <li>Does not generate sitemaps - only audits them</li>
          <li>No WordPress-specific integration (no one-click plugin)</li>
          <li>Cant automatically apply fixes - you still have to update Yoast settings or code</li>
        </ul>
        <h3 style={h3}>Best for</h3>
        <p style={p}>WordPress sites with meaningful scale (100+ pages), multi-plugin setups, e-commerce, and anyone whos seen unexpected URLs appear in Google Search Console coverage reports.</p>

        <h2 style={h2}>Our verdict</h2>
        <p style={p}>
          These tools arent competitors. Yoast generates; SitemapFixer audits. If you only pick one, keep Yoast - you need a sitemap before you can audit one. But Yoast alone will quietly ship sitemap issues you never notice until Googles coverage report lights up. SitemapFixer catches those early.
        </p>
        <p style={p}>
          Honest take: a free Yoast install plus a monthly SitemapFixer audit is the best low-cost SEO hygiene combo for most WordPress sites.
        </p>

        <h2 style={h2}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Can I use Yoast and SitemapFixer together?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Yes, and you probably should. Yoast generates your sitemap automatically from WordPress content. SitemapFixer then audits whatever Yoast produced and flags issues like duplicate URLs, noindex pages that shouldnt be in the sitemap, and stale lastmod dates.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Does Yoast check my sitemap for errors?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>No. Yoast generates sitemaps but does not actively audit them for SEO issues like 4xx errors, duplicates, oversized files, or indexation problems. Yoast assumes the sitemap it generates is correct - SitemapFixer verifies it.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>I use Yoast. Do I still need SitemapFixer?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>If your site is under 100 pages and static, probably not. If youre running an e-commerce site, a blog with hundreds of posts, or anywhere Yoast might include pages you didnt intend, SitemapFixer will catch issues Yoast wont flag.</div>
          </div>
        </div>

        <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
          <div style={{ fontSize: 22, fontWeight: 700, color: 'white', marginBottom: 8 }}>Audit your Yoast sitemap</div>
          <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Paste your /sitemap_index.xml URL - well find issues Yoast misses</div>
          <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 32px', borderRadius: 8, textDecoration: 'none', fontWeight: 700, fontSize: 15 }}>
            Analyze My Sitemap Free
          </a>
        </div>

        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Other comparisons</div>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <li><a href="/compare/sitemapfixer-vs-screaming-frog" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>vs Screaming Frog</a></li>
            <li><a href="/compare/best-sitemap-tools-wordpress" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Best WordPress Tools</a></li>
            <li><a href="/compare/free-vs-paid-sitemap-tools" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Free vs Paid</a></li>
          </ul>
        </div>
      </div>
    </>
  );
}
