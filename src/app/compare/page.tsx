import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SitemapFixer Compared: See How We Stack Up',
  description: 'Honest comparisons between SitemapFixer and other sitemap tools: Screaming Frog, Yoast, Google Search Console, and the best free and paid options for 2026.',
  keywords: ['sitemap tool comparison', 'sitemapfixer vs', 'best sitemap tools', 'xml sitemap generator comparison'],
  alternates: { canonical: 'https://sitemapfixer.com/compare' },
  openGraph: {
    title: 'SitemapFixer Compared: See How We Stack Up',
    description: 'Honest comparisons between SitemapFixer and other sitemap tools: Screaming Frog, Yoast, Google Search Console, and the best free and paid options for 2026.',
    url: 'https://sitemapfixer.com/compare',
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

const comparisons = [
  {
    href: '/compare/sitemapfixer-vs-screaming-frog',
    title: 'SitemapFixer vs Screaming Frog',
    description: 'AI-powered sitemap analysis vs the desktop crawler standard. See which one fits your workflow.',
  },
  {
    href: '/compare/sitemapfixer-vs-yoast',
    title: 'SitemapFixer vs Yoast SEO Sitemap',
    description: 'Generating a sitemap vs auditing one. Why you probably need both.',
  },
  {
    href: '/compare/sitemapfixer-vs-google-search-console',
    title: 'SitemapFixer vs Google Search Console',
    description: 'Googles free coverage reports vs a dedicated sitemap auditor - what each one actually tells you.',
  },
  {
    href: '/compare/best-xml-sitemap-generators',
    title: 'Best XML Sitemap Generators in 2026',
    description: '5 sitemap generators compared: Yoast, Screaming Frog, XML-Sitemaps.com, Slickplan, and SitemapFixer.',
  },
  {
    href: '/compare/best-sitemap-tools-wordpress',
    title: 'Best Sitemap Tools for WordPress',
    description: 'Yoast, Rank Math, All in One SEO, SEOPress, and SitemapFixer - which pairing is best for your site?',
  },
  {
    href: '/compare/free-vs-paid-sitemap-tools',
    title: 'Free vs Paid Sitemap Tools',
    description: 'When free sitemap tools are enough, and when paying actually pays off. An honest breakdown.',
  },
];

export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px', fontFamily: 'Geist, sans-serif' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>
        {' / '}
        <span>Compare</span>
      </nav>

      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>
        SitemapFixer Compared: See How We Stack Up
      </h1>
      <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        There are a lot of ways to work with XML sitemaps - crawlers, CMS plugins, Google Search Console, online generators, and dedicated auditors like SitemapFixer. No single tool is best for every job. These side-by-side comparisons tell you honestly where SitemapFixer wins, where another tool wins, and where you probably want both.
      </p>

      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <div>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 4 }}>Not sure which tool fits you?</div>
          <div style={{ fontSize: 13, color: '#6b6b7d' }}>Run SitemapFixer free first - then decide what else you need</div>
        </div>
        <a href="/" style={{ background: '#0a0a0f', color: 'white', padding: '12px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 14, whiteSpace: 'nowrap' }}>
          Analyze My Sitemap
        </a>
      </div>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, marginTop: 40 }}>All comparisons</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
        {comparisons.map((c) => (
          <a
            key={c.href}
            href={c.href}
            style={{
              display: 'block',
              border: '1px solid #e4e4ed',
              borderRadius: 12,
              padding: '20px 24px',
              textDecoration: 'none',
              background: 'white',
              transition: 'border-color 0.15s',
            }}
          >
            <div style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 6 }}>{c.title}</div>
            <div style={{ fontSize: 14, color: '#6b6b7d', lineHeight: 1.6 }}>{c.description}</div>
            <div style={{ fontSize: 13, color: '#2d5be3', marginTop: 10, fontWeight: 500 }}>Read comparison</div>
          </a>
        ))}
      </div>

      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How we compare tools</h2>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 20 }}>
        Each comparison uses the same structure: a short verdict up front, a feature table with real pricing and capability data, honest strengths and weaknesses for each tool, and a recommendation on when to pick which one. We link to competitors directly - we want you to find the right tool, not just ours.
      </p>
      <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>
        Pricing and feature data reflects publicly available information as of 2026. Tools change quickly, so double-check before you commit to a paid plan.
      </p>

      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
        <div style={{ fontSize: 22, fontWeight: 700, color: 'white', marginBottom: 8 }}>Start with a free sitemap audit</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>See what SitemapFixer finds in your sitemap before picking a stack</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 32px', borderRadius: 8, textDecoration: 'none', fontWeight: 700, fontSize: 15 }}>
          Analyze My Sitemap Free
        </a>
      </div>
    </div>
  );
}
