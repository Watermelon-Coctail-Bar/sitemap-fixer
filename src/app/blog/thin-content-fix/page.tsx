import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Thin Content: Find It, Fix It, Recover Rankings',
  description: "Thin content pages drag down your entire site in Google's quality assessment. Here is how to identify thin pages, which ones to fix vs remove, and how to recover.",
  alternates: { canonical: 'https://sitemapfixer.com/blog/thin-content-fix' },
  openGraph: { title: 'Thin Content Fix: Identify, Remove, and Recover', url: 'https://sitemapfixer.com/blog/thin-content-fix', type: 'article',
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
  { t: "What thin content is", d: "Thin content is pages that provide little or no unique value to users. This includes pages with very few words (under 200-300), pages with text copied from other sources, auto-generated pages with templated content and no unique data, doorway pages designed only to rank for a keyword, and pages where the content does not match what the user searching for it would want. Google's Helpful Content system evaluates thin content site-wide - too many thin pages can demote your entire domain, not just the individual pages." },
  { t: "Finding thin content on your site", d: "Crawl your site with Screaming Frog and export all URLs with their word count. Pages under 300 words are candidates for investigation. Check Google Search Console Pages report - pages in 'Excluded' status with 'Crawled - currently not indexed' often indicate Google found the content insufficiently valuable. Pages with high impressions but zero clicks and very low average position are also likely thin. Focus your audit on pages with the worst engagement metrics." },
  { t: "Fix Option 1: Improve the content", d: "The best fix is making the page genuinely useful. Add 300-500+ words of unique, valuable content that thoroughly addresses what a user searching for this topic needs. Add examples, data, images, and specifics. Update statistics and examples to be current. This is the right approach for any page that has an audience worth serving - it preserves the URL equity and can turn a weak page into a strong ranking asset." },
  { t: "Fix Option 2: Consolidate with 301 redirect", d: "When you have multiple thin pages covering similar topics, merge them into one comprehensive page. Pick the URL with the most backlinks or traffic as the destination. Copy all valuable unique content into the combined page. 301 redirect all the merged pages to the destination. This concentrates link equity and creates one strong page instead of several weak ones." },
  { t: "Fix Option 3: Noindex or remove", d: "For pages that have no realistic path to providing genuine value - auto-generated parameter pages, low-value tag archives, outdated stub content - noindex them or remove them with a 301 redirect to the most relevant page. Reducing your thin page count improves your overall site quality score and can lift rankings across your site within weeks. Fewer high-quality pages consistently outperform more low-quality pages." },
];
export default function Page() {
  return (
    <article style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/blog" style={{ color: '#2d5be3', textDecoration: 'none' }}>Blog</a>{' / '}
        <span>Thin Content Fix</span>
      </nav>
      <div style={{ fontSize: 13, color: '#9ca3af', marginBottom: 12 }}>April 2025 · 7 min read</div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, lineHeight: 1.15 }}>Thin Content: Find It, Fix It, Recover Your Rankings</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your sitemap for thin content patterns</span>
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
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Find thin content in your sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free - analyzes URL patterns and indexing status</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
  
        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/blog/content-audit-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Content Audit: How to Audit Your Site for SEO</a></li>
            <li><a href="/blog/content-marketing-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Content Marketing SEO: Drive Organic Growth</a></li>
            <li><a href="/blog/thin-content-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Thin Content: What It Is and How to Fix It</a></li>
            <li><a href="/blog/keyword-cannibalization" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Keyword Cannibalization: How to Find and Fix It</a></li>
            <li><a href="/blog/duplicate-content-seo-fix" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Duplicate Content SEO: How to Find and Fix It</a></li>
          </ul>
        </div>
    </div>
    </article>
  );
}
