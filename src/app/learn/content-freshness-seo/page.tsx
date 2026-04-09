import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Content Freshness: Does Updating Content Help Rankings?',
  description: "Fresh content can recover declining rankings. Here is how Google uses freshness as a ranking signal, which content benefits most from updates, and how to update effectively.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/content-freshness-seo' },
  openGraph: {
    title: 'Content Freshness: Does Updating Content Help Rankings?',
    description: 'Fresh content can recover declining rankings. Here is how Google uses freshness as a ranking signal, which content benefits most from updates, and how to update effectively.',
    url: 'https://sitemapfixer.com/learn/content-freshness-seo',
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
  { h: "How Google Uses Freshness", d: "Google has a query-dependent freshness algorithm called QDF (Query Deserves Freshness). For queries where recency matters - breaking news, recent events, product launches - Google heavily weights recently published or updated content. For evergreen queries where the best answer does not change (how to tie a bowline knot), freshness matters much less. Understanding whether your target queries are freshness-sensitive determines how aggressively you should update existing content." },
  { h: "Signs Your Content Needs Refreshing", d: "Check Google Search Console Performance report sorted by impressions. Pages with high impressions but declining clicks and average position are candidates for refreshing. Other signals: the content references specific years that are now outdated (best tools in 2022), statistics that have changed, products or services that no longer exist, or outdated advice that conflicts with current best practices. Compare your page against the current top-ranking pages for your target keyword - if they are significantly more comprehensive or current, an update is warranted." },
  { h: "What to Update vs What to Rewrite", d: "Minor updates: refresh statistics and data with current figures, update product names and version numbers, add newly relevant sections, fix broken links, update publication date in metadata. Major rewrites: needed when search intent has fundamentally shifted since you published, when your content is structurally weaker than current top-ranking pages, or when your competitive landscape has changed significantly. A major rewrite should treat the page like a new piece of content with thorough keyword research." },
  { h: "Updating lastmod in Your Sitemap", d: "When you update a page, update its lastmod date in your sitemap to the actual date of the update. An accurate lastmod signals to Google that the page has new content worth recrawling. Do not update lastmod on pages that have not actually changed - this trains Google to ignore your lastmod dates entirely. After updating both the page and the sitemap, submit your sitemap in Google Search Console to prompt recrawling. Most significant content updates show ranking movement within 2-4 weeks." },
  { h: "Content Pruning vs Content Refreshing", d: "Not all old content deserves refreshing. Pages that have never attracted organic traffic, have no backlinks, and cover topics with low or zero search volume may be better removed or consolidated via 301 redirect than refreshed. Conduct a content audit annually: sort all pages by organic traffic and rankings. Pages in the bottom quartile with no improvement potential and no links are candidates for removal. Removing low-quality pages improves your site's overall quality signals - the ratio of good to poor content matters for Helpful Content system scoring." },
];
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Content Freshness SEO</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Content Freshness SEO: How Updating Content Improves Rankings</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your sitemap lastmod dates free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Sitemap Free</a>
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
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Validate your sitemap lastmod accuracy</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Sitemap Free</a>
      </div>

        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/learn/title-tag-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Title Tag SEO: Write Titles That Rank</a></li>
            <li><a href="/learn/meta-description-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Meta Descriptions: How to Write Them for SEO</a></li>
            <li><a href="/learn/image-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Image SEO: Optimize Images for Google Search</a></li>
            <li><a href="/learn/video-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Video SEO: Get Videos to Rank in Google</a></li>
            <li><a href="/learn/anchor-text-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Anchor Text SEO: Types & Best Practices</a></li>
          </ul>
        </div>
    </div>
  );
}
