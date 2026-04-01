import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'SEO Learning Center: Technical SEO Guides | SitemapFixer',
  description: 'Free technical SEO guides covering sitemaps, indexing, Core Web Vitals, robots.txt, canonical tags, and more. Learn SEO from the experts.',
  alternates: { canonical: 'https://sitemapfixer.com/learn' },
  openGraph: { title: 'SEO Learning Center | SitemapFixer', description: 'Free technical SEO guides.', url: 'https://sitemapfixer.com/learn', type: 'website' },
};
const guides = [
  { category: 'Sitemaps', items: [
    { href: '/learn/what-is-an-xml-sitemap', title: 'What is an XML Sitemap?', desc: 'The complete guide to XML sitemaps and why they matter for SEO.' },
    { href: '/learn/xml-sitemap-generator', title: 'XML Sitemap Generator', desc: 'How to generate, validate, and submit your XML sitemap.' },
    { href: '/learn/sitemap-best-practices', title: 'Sitemap Best Practices', desc: 'Rules for a perfectly optimized sitemap.' },
    { href: '/learn/how-to-create-a-sitemap', title: 'How to Create a Sitemap', desc: 'Step-by-step for WordPress, Shopify, Next.js.' },
    { href: '/learn/sitemap-checker', title: 'Sitemap Checker', desc: 'How to check your sitemap for errors.' },
    { href: '/learn/sitemap-validator', title: 'Sitemap Validator', desc: 'Tools to validate your XML sitemap.' },
    { href: '/learn/sitemap-not-working', title: 'Sitemap Not Working', desc: 'Why your sitemap may not be working and how to fix it.' },
  ]},
  { category: 'Indexing', items: [
    { href: '/learn/pages-not-indexed-google', title: 'Pages Not Indexed by Google', desc: 'Why Google is not indexing your pages and how to fix it.' },
    { href: '/learn/submitted-url-not-indexed', title: 'Submitted URL Not Indexed', desc: 'Resolving the submitted URL not indexed status.' },
    { href: '/learn/crawled-currently-not-indexed', title: 'Crawled Currently Not Indexed', desc: 'Why Google crawled but did not index your pages.' },
    { href: '/learn/pages-in-sitemap-not-indexed', title: 'Pages in Sitemap Not Indexed', desc: 'Fix pages in your sitemap that are not indexed.' },
    { href: '/learn/why-pages-not-indexed', title: 'Why Pages Are Not Indexed', desc: 'All reasons a page might not be indexed.' },
    { href: '/learn/index-coverage-report', title: 'Index Coverage Report', desc: 'How to read the Google Search Console coverage report.' },
    { href: '/learn/noindex-tag', title: 'Noindex Tag Guide', desc: 'How the noindex tag works and when to use it.' },
  ]},
  { category: 'Crawling', items: [
    { href: '/learn/robots-txt-guide', title: 'Robots.txt Guide', desc: 'Write, test, and fix your robots.txt file.' },
    { href: '/learn/sitemap-vs-robots-txt', title: 'Sitemap vs Robots.txt', desc: 'How they work together.' },
    { href: '/learn/crawl-budget', title: 'Crawl Budget', desc: 'What crawl budget is and how to optimize it.' },
    { href: '/learn/google-not-crawling-my-site', title: 'Google Not Crawling My Site', desc: 'Diagnose and fix crawling issues.' },
  ]},
  { category: 'Technical SEO', items: [
    { href: '/learn/technical-seo-checklist', title: 'Technical SEO Checklist 2025', desc: 'Complete checklist for auditing your site.' },
    { href: '/learn/canonical-tags', title: 'Canonical Tags Guide', desc: 'How to use canonical tags correctly.' },
    { href: '/learn/structured-data', title: 'Structured Data & Schema', desc: 'Add schema markup for rich results.' },
    { href: '/learn/core-web-vitals', title: 'Core Web Vitals', desc: 'LCP, INP, and CLS explained with fixes.' },
    { href: '/learn/page-speed-optimization', title: 'Page Speed Optimization', desc: 'Proven techniques to speed up your site.' },
    { href: '/learn/internal-linking', title: 'Internal Linking Strategy', desc: 'How internal links boost rankings.' },
    { href: '/learn/sitemap-errors-google-search-console', title: 'Sitemap Errors in Search Console', desc: 'Fix every sitemap error in Search Console.' },
    { href: '/learn/google-search-console-sitemap', title: 'Submit Sitemap to Google', desc: 'How to submit your sitemap to Search Console.' },
  ]},
];
export default function LearnPage() {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '60px 24px' }}>
      <div style={{ textAlign: 'center', marginBottom: 64 }}>
        <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 52, fontWeight: 400, color: '#0a0a0f', marginBottom: 16 }}>SEO Learning Center</h1>
        <p style={{ fontSize: 18, color: '#6b6b7d', maxWidth: 560, margin: '0 auto 32px' }}>Free guides on technical SEO, sitemaps, indexing, and everything in between.</p>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 600 }}>Analyze My Site Free</a>
      </div>
      {guides.map(({ category, items }) => (
        <div key={category} style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#9ca3af', marginBottom: 20, paddingBottom: 12, borderBottom: '1px solid #e4e4ed' }}>{category}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
            {items.map(({ href, title, desc }) => (
              <a key={href} href={href} style={{ display: 'block', padding: '20px 24px', border: '1px solid #e4e4ed', borderRadius: 12, textDecoration: 'none', background: 'white' }}>
                <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 6, fontSize: 15 }}>{title}</div>
                <div style={{ fontSize: 13, color: '#6b6b7d', lineHeight: 1.5 }}>{desc}</div>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
