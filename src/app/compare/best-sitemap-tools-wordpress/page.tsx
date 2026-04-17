import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Sitemap Tools for WordPress (2026 Comparison)',
  description: 'Yoast, Rank Math, All in One SEO, SEOPress, and SitemapFixer compared. Find the right sitemap plugin - and audit tool - for your WordPress site.',
  keywords: ['best wordpress sitemap plugin', 'wordpress sitemap tools', 'rank math vs yoast sitemap', 'aioseo sitemap'],
  alternates: { canonical: 'https://sitemapfixer.com/compare/best-sitemap-tools-wordpress' },
  openGraph: {
    title: 'Best Sitemap Tools for WordPress (2026 Comparison)',
    description: 'Yoast, Rank Math, All in One SEO, SEOPress, and SitemapFixer compared. Find the right sitemap plugin - and audit tool - for your WordPress site.',
    url: 'https://sitemapfixer.com/compare/best-sitemap-tools-wordpress',
    type: 'article',
    images: [{
      url: 'https://sitemapfixer.com/opengraph-image',
      width: 1200,
      height: 630,
      alt: 'Best Sitemap Tools for WordPress',
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
        name: 'Whats the best sitemap plugin for WordPress in 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Rank Math and Yoast both have excellent sitemap features in their free plugins. Rank Math gives more sitemap configuration out of the box; Yoast is more stable and widely supported. For most sites, either is a fine default - pick based on which broader SEO plugin you prefer.',
        },
      },
      {
        '@type': 'Question',
        name: 'Should I use WordPress core sitemaps or a plugin?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'WordPress 5.5+ has a built-in /wp-sitemap.xml, but its very basic - no image sitemaps, no granular exclusions, no priority values, no hreflang. Any serious site should replace the core sitemap with one from Yoast, Rank Math, AIOSEO, or SEOPress.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need a third-party tool if I already have Yoast or Rank Math?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Youre covered for generation. For auditing - catching duplicate URLs, stale lastmod, 4xx entries, or plugin conflicts that insert unexpected pages - a dedicated tool like SitemapFixer catches things no WordPress plugin checks for.',
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
          <span>Best Sitemap Tools for WordPress</span>
        </nav>

        <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>
          Best Sitemap Tools for WordPress
        </h1>
        <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
          This guide is for WordPress site owners and admins deciding which SEO plugin handles sitemaps best in 2026 - plus a dedicated audit tool to catch whatever the plugin misses. We compare the four dominant SEO plugins (Yoast, Rank Math, All in One SEO, SEOPress) and SitemapFixer for post-generation auditing.
        </p>

        <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 4 }}>Audit your WordPress sitemap</div>
            <div style={{ fontSize: 13, color: '#6b6b7d' }}>Works with any WordPress SEO plugin - free 60-second scan</div>
          </div>
          <a href="/" style={{ background: '#0a0a0f', color: 'white', padding: '12px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 14, whiteSpace: 'nowrap' }}>
            Analyze My Sitemap
          </a>
        </div>

        <h2 style={h2}>TL;DR: Which one should you use?</h2>
        <p style={p}>
          Any of <strong>Yoast</strong>, <strong>Rank Math</strong>, <strong>All in One SEO</strong>, or <strong>SEOPress</strong> will generate a perfectly good sitemap in their free tier - the choice usually comes down to which SEO plugin you prefer overall. Yoast is the most stable and widely supported; Rank Math is the most feature-rich free tier; AIOSEO has the cleanest UI; SEOPress is the lightest. Use <strong>SitemapFixer</strong> to audit the output of whichever one you pick.
        </p>

        <h2 style={h2}>Comparison Table</h2>
        <div style={{ overflowX: 'auto', marginBottom: 32 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #e4e4ed', borderRadius: 8, overflow: 'hidden', fontSize: 14 }}>
            <thead>
              <tr>
                <th style={th}>Feature</th>
                <th style={th}>Yoast</th>
                <th style={th}>Rank Math</th>
                <th style={th}>AIOSEO</th>
                <th style={th}>SEOPress</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={td}>Free tier</td>
                <td style={td}>Yes</td>
                <td style={td}>Yes (generous)</td>
                <td style={td}>Yes (limited)</td>
                <td style={td}>Yes</td>
              </tr>
              <tr>
                <td style={tdAlt}>Paid from</td>
                <td style={tdAlt}>$99/yr</td>
                <td style={tdAlt}>$6.99/mo</td>
                <td style={tdAlt}>$49.60/yr</td>
                <td style={tdAlt}>$49/yr</td>
              </tr>
              <tr>
                <td style={td}>Image sitemaps</td>
                <td style={td}>Yes</td>
                <td style={td}>Yes</td>
                <td style={td}>Yes</td>
                <td style={td}>Yes</td>
              </tr>
              <tr>
                <td style={tdAlt}>Video sitemaps</td>
                <td style={tdAlt}>Premium</td>
                <td style={tdAlt}>Yes (free)</td>
                <td style={tdAlt}>Premium</td>
                <td style={tdAlt}>Premium</td>
              </tr>
              <tr>
                <td style={td}>News sitemaps</td>
                <td style={td}>Premium add-on</td>
                <td style={td}>Pro</td>
                <td style={td}>Premium</td>
                <td style={td}>Premium</td>
              </tr>
              <tr>
                <td style={tdAlt}>Exclude post types/taxonomies</td>
                <td style={tdAlt}>Yes</td>
                <td style={tdAlt}>Yes</td>
                <td style={tdAlt}>Yes</td>
                <td style={tdAlt}>Yes</td>
              </tr>
              <tr>
                <td style={td}>Hreflang support</td>
                <td style={td}>Premium</td>
                <td style={td}>Pro</td>
                <td style={td}>Premium</td>
                <td style={td}>Pro</td>
              </tr>
              <tr>
                <td style={tdAlt}>Audits its own sitemap</td>
                <td style={tdAlt}>No</td>
                <td style={tdAlt}>No</td>
                <td style={tdAlt}>No</td>
                <td style={tdAlt}>No</td>
              </tr>
            </tbody>
          </table>
          <div style={{ fontSize: 12, color: '#6b6b7d', marginTop: 8 }}>Pricing reflects publicly listed rates as of 2026. Always verify on the vendors site.</div>
        </div>

        <h2 style={h2}>1. Yoast SEO</h2>
        <p style={p}>
          The most widely installed WordPress SEO plugin. Yoasts sitemap feature is rock solid and has been for over a decade. Generates sitemap_index.xml automatically, respects noindex, and offers a settings UI to exclude specific post types or taxonomies.
        </p>
        <h3 style={h3}>Strengths</h3>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 16, fontSize: 16 }}>
          <li>Battle-tested on millions of sites</li>
          <li>Excellent documentation and support resources</li>
          <li>Rarely breaks on WordPress updates</li>
        </ul>
        <h3 style={h3}>Weaknesses</h3>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 16, fontSize: 16 }}>
          <li>Advanced sitemap features locked to Premium ($99/yr)</li>
          <li>Can feel bloated if you only want sitemaps</li>
        </ul>
        <h3 style={h3}>Best for</h3>
        <p style={p}>Sites that prioritize stability and support over cutting-edge features.</p>

        <h2 style={h2}>2. Rank Math</h2>
        <p style={p}>
          The most generous free tier of the four. Rank Math includes video sitemaps, schema types, and multiple advanced SEO features in its free version that require paid tiers on competitors. Its UI is modern and setup is guided by a wizard.
        </p>
        <h3 style={h3}>Strengths</h3>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 16, fontSize: 16 }}>
          <li>Most features in the free tier</li>
          <li>Modern UI with good onboarding</li>
          <li>Video sitemaps free</li>
        </ul>
        <h3 style={h3}>Weaknesses</h3>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 16, fontSize: 16 }}>
          <li>Newer than Yoast - smaller ecosystem</li>
          <li>Some users report conflicts with heavy plugins</li>
        </ul>
        <h3 style={h3}>Best for</h3>
        <p style={p}>Small-to-mid sites that want advanced features without paying. Solid default for 2026.</p>

        <h2 style={h2}>3. All in One SEO (AIOSEO)</h2>
        <p style={p}>
          AIOSEO has been around longer than Yoast but got a ground-up rewrite in recent years. The sitemap feature is clean, configurable, and integrates with AIOSEOs broader SEO dashboard.
        </p>
        <h3 style={h3}>Strengths</h3>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 16, fontSize: 16 }}>
          <li>Clean, modern UI after rewrite</li>
          <li>Good video, news, and RSS sitemap options in paid tiers</li>
          <li>Strong WooCommerce integration</li>
        </ul>
        <h3 style={h3}>Weaknesses</h3>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 16, fontSize: 16 }}>
          <li>Many features push you toward the paid plans</li>
          <li>Upsell prompts in the free version</li>
        </ul>
        <h3 style={h3}>Best for</h3>
        <p style={p}>WooCommerce sites, agencies that want a unified SEO dashboard across clients.</p>

        <h2 style={h2}>4. SEOPress</h2>
        <p style={p}>
          The lightest of the four. SEOPress skips the marketing fluff and delivers the sitemap feature quickly. Flat pricing ($49/year unlimited sites) is attractive for agencies.
        </p>
        <h3 style={h3}>Strengths</h3>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 16, fontSize: 16 }}>
          <li>Lightweight - minimal performance overhead</li>
          <li>Flat unlimited-site pricing for pro</li>
          <li>No nagging upsells in free version</li>
        </ul>
        <h3 style={h3}>Weaknesses</h3>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 16, fontSize: 16 }}>
          <li>Smaller community</li>
          <li>Less documentation than Yoast or Rank Math</li>
        </ul>
        <h3 style={h3}>Best for</h3>
        <p style={p}>Developer-leaning users, agencies managing many client sites, performance-sensitive builds.</p>

        <h2 style={h2}>5. SitemapFixer (auditing layer)</h2>
        <p style={p}>
          None of the plugins above audit the sitemaps they create. SitemapFixer fills that gap: paste your WordPress sitemap URL (typically /sitemap_index.xml or /sitemap.xml), and it flags duplicate URLs, 4xx/5xx entries, stale lastmod dates, noindex conflicts, and oversized files.
        </p>
        <h3 style={h3}>Strengths</h3>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 16, fontSize: 16 }}>
          <li>Works with any WordPress SEO plugin</li>
          <li>AI fix recommendations tailored to your plugins settings</li>
          <li>No plugin install - runs externally</li>
        </ul>
        <h3 style={h3}>Weaknesses</h3>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 16, fontSize: 16 }}>
          <li>Doesnt generate sitemaps - audit only</li>
          <li>Requires your sitemap to be public</li>
        </ul>
        <h3 style={h3}>Best for</h3>
        <p style={p}>Any WordPress site thats seen unexpected URLs appear in Google Search Console coverage, or agencies auditing client installs.</p>

        <h2 style={h2}>Our verdict</h2>
        <p style={p}>
          For a typical WordPress site in 2026: pick either Rank Math (most features in free) or Yoast (most stable). Add SitemapFixer as a monthly audit layer. Skip All in One SEO unless you need WooCommerce-specific features; skip SEOPress unless youre managing many sites on a budget. Dont use WordPress core sitemaps on any site you actually care about ranking.
        </p>

        <h2 style={h2}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Whats the best sitemap plugin for WordPress in 2026?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Rank Math and Yoast both have excellent sitemap features in their free plugins. Rank Math gives more sitemap configuration out of the box; Yoast is more stable and widely supported.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Should I use WordPress core sitemaps or a plugin?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>WordPress 5.5+ has a built-in /wp-sitemap.xml, but its very basic. Any serious site should replace the core sitemap with one from Yoast, Rank Math, AIOSEO, or SEOPress.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Do I need a third-party tool if I already have Yoast or Rank Math?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>For generation youre covered. For auditing - catching duplicate URLs, stale lastmod, 4xx entries - a dedicated tool like SitemapFixer catches things no WordPress plugin checks for.</div>
          </div>
        </div>

        <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
          <div style={{ fontSize: 22, fontWeight: 700, color: 'white', marginBottom: 8 }}>Audit your WordPress sitemap</div>
          <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Works with Yoast, Rank Math, AIOSEO, SEOPress - no plugin install</div>
          <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 32px', borderRadius: 8, textDecoration: 'none', fontWeight: 700, fontSize: 15 }}>
            Analyze My Sitemap Free
          </a>
        </div>

        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Related comparisons</div>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <li><a href="/compare/sitemapfixer-vs-yoast" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>vs Yoast</a></li>
            <li><a href="/compare/best-xml-sitemap-generators" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Best XML Generators</a></li>
            <li><a href="/compare/free-vs-paid-sitemap-tools" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Free vs Paid</a></li>
          </ul>
        </div>
      </div>
    </>
  );
}
