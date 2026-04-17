import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Local Citations: Build NAP Consistency for SEO',
  description: "Local citations are mentions of your business name, address, and phone number across the web. How to build and audit citations for local SEO.",
  alternates: { canonical: 'https://sitemapfixer.com/blog/local-citations-guide' },
  openGraph: {
    title: 'Local Citations: Build NAP Consistency for SEO',
    description: 'Local citations are mentions of your business name, address, and phone number across the web. Here is how to build and audit citations for local SEO rankings.',
    url: 'https://sitemapfixer.com/blog/local-citations-guide',
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
const sections = [
  { t: "What local citations are", d: "A local citation is any online mention of your business's NAP - Name, Address, and Phone number. Citations appear on directories like Yelp, Yellow Pages, Apple Maps, Bing Places, Facebook, and hundreds of industry-specific directories. Google uses citation consistency as a local ranking signal: consistent NAP across many authoritative sources confirms your business is legitimate and located where you say it is." },
  { t: "Why NAP consistency matters", d: "If your business is listed as Smith Plumbing on Google, Smith's Plumbing LLC on Yelp, and Smith Plumbing Services on Yellow Pages, these inconsistencies signal uncertainty to Google about whether these are the same business. Use exactly the same business name, address format, and phone number everywhere. Include suite numbers consistently. Use the same phone number - not different tracking numbers - across directories." },
  { t: "How to build and audit citations", d: "Start with the major directories: claim your Google Business Profile, Apple Maps Connect, Bing Places, Yelp, and Facebook Business. Then submit to industry-specific directories relevant to your business type. Use BrightLocal or Moz Local to audit existing citations and find inconsistencies. Search yourcompanyname address in Google to discover existing citations and check each for accuracy. Fix inconsistencies by claiming listings and updating the information directly." },
];
export default function Page() {
  return (
    <article style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/blog" style={{ color: '#2d5be3', textDecoration: 'none' }}>Blog</a>{' / '}
        <span>Local Citations Guide</span>
      </nav>
      <div style={{ fontSize: 13, color: '#9ca3af', marginBottom: 12 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"Article","headline":"Local Citations: Build NAP Consistency for SEO","description":"Local citations are mentions of your business name, address, and phone number across the web. Here is how to build and audit citations for local SEO rankings.","url":"https://sitemapfixer.com/blog/local-citations-guide","author":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com"},"publisher":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com","logo":{"@type":"ImageObject","url":"https://sitemapfixer.com/opengraph-image"}},"datePublished":"2025-01-15","mainEntityOfPage":{"@type":"WebPage","@id":"https://sitemapfixer.com/blog/local-citations-guide"}}' }} />April 2025 · 5 min read</div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, lineHeight: 1.15 }}>Local Citations Guide: Build NAP Consistency for Local SEO</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your local site technical SEO free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Site Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        {sections.map(({ t, d }) => (
          <div key={t} style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12 }}>{t}</h2>
            <p style={{ margin: 0 }}>{d}</p>
          </div>
        ))}
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Audit your local site technical SEO</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free sitemap analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
  
        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/blog/local-seo-basics" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Local SEO Basics: How to Rank in Google Local Search</a></li>
            <li><a href="/blog/international-seo-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>International SEO: Target Multiple Countries</a></li>
            <li><a href="/blog/hreflang-common-mistakes" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Hreflang Mistakes: Fix International SEO</a></li>
            <li><a href="/learn/technical-seo-checklist" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Technical SEO Checklist 2025</a></li>
            <li><a href="/learn/seo-audit-checklist" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>SEO Audit Checklist: 25 Checks to Run on Any Website</a></li>
          </ul>
        </div>
    </div>
    </article>
  );
}
