import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'International SEO: Target Multiple Countries',
  description: "International SEO helps Google show the right language version to the right users. How to implement hreflang, choose URL structures, and avoid errors.",
  alternates: { canonical: 'https://sitemapfixer.com/blog/international-seo-guide' },
  openGraph: {
    title: 'International SEO: Target Multiple Countries',
    description: 'International SEO helps Google show the right language version to users. How to implement hreflang and choose URL structures.',
    url: 'https://sitemapfixer.com/blog/international-seo-guide',
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
  { t: "URL structure choices for international sites", d: "Three options. ccTLDs (country-code top-level domains): yoursite.de for Germany, yoursite.fr for France - strongest geo-targeting signal, but requires separate domain authority for each country. Subdomains: de.yoursite.com - easier to set up than ccTLDs, moderate geo-targeting. Subdirectories: yoursite.com/de/ - recommended by Google for most sites; shares domain authority across all regions, easiest to manage. Unless you have specific reasons for ccTLDs (legal requirements, strong local brand trust), subdirectories are the practical choice for most sites." },
  { t: "Implementing hreflang correctly", d: "Hreflang tells Google which language/region version to show which users. Add link rel=alternate hreflang=language-code href=URL to the head of every page in your international set. Every page must reference every other language version AND itself. Include an x-default tag pointing to your fallback page. The most common mistake: one-directional tags (only some pages reference others). All pages must form a complete closed loop of references." },
  { t: "Geo-targeting in Google Search Console", d: "If you are using subdirectories or subdomains (not ccTLDs), set geographic targeting in Google Search Console. Go to Legacy Tools and Reports then International Targeting then Country. Set your target country for each subdirectory or subdomain property. This gives Google an additional signal beyond hreflang and URL structure. Monitor the Hreflang tab in the same report for implementation errors Google has detected." },
];
export default function Page() {
  return (
    <article style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/blog" style={{ color: '#2d5be3', textDecoration: 'none' }}>Blog</a>{' / '}
        <span>International SEO Guide</span>
      </nav>
      <div style={{ fontSize: 13, color: '#9ca3af', marginBottom: 12 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"Article","headline":"International SEO: Target Multiple Countries","description":"International SEO helps Google show the right language version to users. How to implement hreflang and choose URL structures.","url":"https://sitemapfixer.com/blog/international-seo-guide","author":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com"},"publisher":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com","logo":{"@type":"ImageObject","url":"https://sitemapfixer.com/opengraph-image"}},"datePublished":"2025-01-15","mainEntityOfPage":{"@type":"WebPage","@id":"https://sitemapfixer.com/blog/international-seo-guide"}}' }} />April 2025 · 6 min read</div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, lineHeight: 1.15 }}>International SEO Guide: Target Multiple Countries and Languages</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your international sitemap free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Sitemap Free</a>
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
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Validate your international sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free - checks hreflang patterns and URL consistency</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Sitemap Free</a>
  
        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/blog/local-seo-basics" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Local SEO Basics: How to Rank in Google Local Search</a></li>
            <li><a href="/blog/local-citations-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Local Citations: Build NAP Consistency for SEO</a></li>
            <li><a href="/blog/hreflang-common-mistakes" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Hreflang Mistakes: Fix International SEO</a></li>
            <li><a href="/learn/technical-seo-checklist" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Technical SEO Checklist 2025</a></li>
            <li><a href="/learn/seo-audit-checklist" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>SEO Audit Checklist: 25 Checks to Run on Any Website</a></li>
          </ul>
        </div>
    </div>
    </article>
  );
}
