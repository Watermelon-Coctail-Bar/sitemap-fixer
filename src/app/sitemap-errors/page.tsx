import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sitemap Errors: Complete Fix Guide',
  description: 'Browse all common XML sitemap errors: duplicate URLs, invalid URLs, orphan pages, incorrect priority, and more. Learn how to detect and fix each one.',
  alternates: { canonical: 'https://sitemapfixer.com/sitemap-errors' },
  openGraph: {
    title: 'Sitemap Errors: Complete Fix Guide',
    description: 'Browse all common XML sitemap errors: duplicate URLs, invalid URLs, orphan pages, incorrect priority, and more. Learn how to detect and fix each one.',
    url: 'https://sitemapfixer.com/sitemap-errors',
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

const ERRORS = [
  { slug: 'duplicate-urls', title: 'Duplicate URLs', desc: 'Same URL listed multiple times - wastes crawl budget and confuses search engines.' },
  { slug: 'invalid-urls', title: 'Invalid URLs', desc: 'Broken, deleted, or malformed URLs that return 4xx or 5xx status codes.' },
  { slug: 'too-many-urls', title: 'Too Many URLs', desc: 'Bloated sitemaps with low-value pages that dilute crawl budget.' },
  { slug: 'orphan-pages', title: 'Orphan Pages', desc: 'Pages in your sitemap with zero internal links - invisible to PageRank.' },
  { slug: 'incorrect-priority', title: 'Incorrect Priority', desc: 'All pages set to 1.0 - a meaningless signal Google ignores.' },
  { slug: 'changefreq-misuse', title: 'changefreq Misuse', desc: 'Everything set to daily when pages rarely change - reduces crawler trust.' },
  { slug: '4xx-5xx-urls', title: '4xx / 5xx URLs', desc: 'Dead or broken pages in your sitemap returning HTTP errors to Googlebot.' },
  { slug: 'blocked-by-robots-txt', title: 'Blocked by robots.txt', desc: 'Sitemap URLs that robots.txt disallows - contradictory signals to Google.' },
  { slug: 'non-canonical-urls', title: 'Non-Canonical URLs', desc: 'Sitemap listing non-canonical URL variants instead of the canonical version.' },
  { slug: 'noindex-urls', title: 'URLs with noindex', desc: 'Pages in your sitemap that also carry a noindex tag - wasted crawl budget.' },
  { slug: 'mixed-content', title: 'Mixed Content (HTTP in HTTPS)', desc: 'HTTP URLs in an HTTPS sitemap - causes protocol mismatches and redirects.' },
  { slug: 'missing-lastmod', title: 'Missing lastmod', desc: 'Pages without lastmod tags - Google has no signal for freshness or re-crawl priority.' },
  { slug: 'invalid-xml-syntax', title: 'Invalid XML Syntax', desc: 'Malformed XML that breaks parsers - entire sitemap gets rejected.' },
  { slug: 'sitemap-too-large', title: 'Sitemap Too Large', desc: 'Sitemap exceeds 50MB uncompressed or 50,000 URLs - Google ignores overflow.' },
  { slug: 'utf8-encoding-issues', title: 'UTF-8 Encoding Issues', desc: 'Non-UTF-8 characters breaking XML parsers and causing sitemap rejection.' },
  { slug: 'trailing-slash-inconsistency', title: 'Trailing Slash Inconsistency', desc: 'Mix of /page and /page/ URLs - creates duplicate content signals.' },
  { slug: 'gzip-encoding-errors', title: 'Gzip Encoding Errors', desc: '.gz sitemap served with wrong Content-Type or corrupted - crawlers cannot read it.' },
];

export default function SitemapErrorsIndex() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px', fontFamily: 'Geist, sans-serif' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>
        {'  '}
        <span>Sitemap Errors</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>XML Sitemap Errors</h1>
      <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 48 }}>
        Every sitemap error wastes crawl budget, reduces indexing efficiency, or sends confusing signals to search engines.
        Browse all common errors below - each includes a full explanation, real examples, and exact fix instructions.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 16, marginBottom: 48 }}>
        {ERRORS.map(e => (
          <a key={e.slug} href={'/sitemap-errors/' + e.slug} style={{ display: 'block', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px', textDecoration: 'none', transition: 'border-color 0.15s', background: 'white' }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 6, fontSize: 16 }}>{e.title}</div>
            <div style={{ color: '#6b6b7d', fontSize: 14, lineHeight: 1.5 }}>{e.desc}</div>
            <div style={{ color: '#2d5be3', fontSize: 13, marginTop: 12 }}>Read guide </div>
          </a>
        ))}
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center' }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Check your sitemap for all these errors</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free analysis - results in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>
          Analyze My Sitemap 
        </a>
      </div>
    </div>
  );
}
