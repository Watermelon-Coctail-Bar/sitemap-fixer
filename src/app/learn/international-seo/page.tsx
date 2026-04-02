import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'International SEO: How to Target Multiple Countries and Languages | SitemapFixer',
  description: "International SEO ensures Google shows the right version of your site to users in different countries. Here is how hreflang, ccTLDs, subdirectories, and subdomains each work.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/international-seo' },
};
const sections = [
  { h: "Choosing Your International URL Structure", d: "There are three options for multi-country sites. Country-code top-level domains (ccTLDs) like example.fr and example.de send the strongest geographic signal to Google but require separate sites and link building for each domain. Subdirectories (example.com/fr/, example.com/de/) are the most practical choice for most businesses — they share domain authority and are easier to manage. Subdomains (fr.example.com, de.example.com) are a middle ground but Google treats them more like separate sites than subdirectories. For most companies, subdirectories with hreflang tags is the correct approach." },
  { h: "Hreflang: The Core Implementation", d: "Hreflang tags tell Google which version of a page targets which language and region. The tag goes in the HTML head of every page: link rel=alternate hreflang=fr href=https://example.com/fr/page. Hreflang must be bidirectional — if page A references page B, page B must reference page A. Every page in a hreflang set must include x-default (the fallback for users who do not match any specified locale). Incorrect hreflang is extremely common and results in Google showing the wrong version of your pages to international users." },
  { h: "Hreflang in Sitemaps", d: "For sites with many pages, manage hreflang in your sitemap rather than in page HTML — it is easier to maintain at scale. In the sitemap, add xhtml:link rel=alternate hreflang=fr href=URL tags inside each URL entry. The sitemap approach requires the same bidirectionality: every URL in the set must appear in every other URL's alternate list. Submit all language versions in the same sitemap or a sitemap index and verify in Google Search Console under International Targeting." },
  { h: "Content Translation vs Localization", d: "Translation is converting text word-for-word. Localization adapts the content for the target market — currency, date formats, cultural references, examples, and idioms. Google penalizes auto-translated content that reads unnaturally. For your most important pages, use professional translation plus local review. For less important pages, quality machine translation with human editing is acceptable. Never use raw auto-translation without review on pages you want to rank." },
  { h: "Geo-Targeting in Google Search Console", d: "For sites using subdirectories or subdomains (not ccTLDs), you can set geographic targets in Google Search Console. Under Legacy Tools, then International Targeting, set the target country for each subdirectory property. This helps Google understand which country each section targets. ccTLDs do not need this setting — the domain itself is the geo-signal. This setting is supplementary to hreflang — hreflang is the primary signal, geo-targeting is secondary." },
  { h: "Common International SEO Mistakes", d: "Missing x-default hreflang: every hreflang implementation needs an x-default tag pointing to your fallback page. Without it, Google may not handle unknown locales correctly. Hreflang not bidirectional: if the French page does not reference the English page back, the tags are invalid. Language vs country: hreflang=fr targets French speakers everywhere; hreflang=fr-FR targets French speakers in France specifically. Use country+language codes when targeting specific markets." },
];
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>International SEO</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>International SEO: Targeting Multiple Countries and Languages</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your international sitemap free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Site Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        {sections.map(({ h, d }) => (
          <div key={h} style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 10 }}>{h}</h2>
            <p style={{ margin: 0 }}>{d}</p>
          </div>
        ))}
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Validate your international sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free — checks hreflang and URL patterns</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>
    </div>
  );
}
