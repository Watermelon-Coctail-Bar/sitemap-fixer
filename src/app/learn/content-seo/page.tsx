import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Content SEO: How to Write Content That Ranks and Satisfies Users | SitemapFixer',
  description: "Content SEO is about creating content that both ranks in Google and satisfies user intent. Here is the framework that works — covering depth, format, E-E-A-T, and freshness.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/content-seo' },
};
const items = [
  { h: "Match Content to Search Intent", d: "The most important content SEO principle: understand what users actually want when they search your target keyword, then deliver exactly that. Informational queries want comprehensive explanations, not sales pitches. Commercial queries want comparisons and recommendations. Transactional queries want clear CTAs and pricing. Study the top 3-5 results for your target keyword before writing — they reveal what Google considers the right format and depth for that query." },
  { h: "Depth and Comprehensiveness", d: "Google prefers content that thoroughly covers a topic over thin content that skims the surface. Comprehensive coverage means addressing the main topic plus related questions, edge cases, and practical applications. Check the People Also Ask section in Google for the questions users have around your topic — answering them within your content signals depth. However, comprehensiveness does not mean padding. Every sentence should add value. A tight 800-word piece can outrank a bloated 3,000-word article if it more precisely answers the query." },
  { h: "Content Structure and H-Tags", d: "Use a clear heading hierarchy: one H1 (the page title), H2s for main sections, H3s for subsections. Headings serve two purposes: they help users scan and navigate the content, and they give Google structural signals about topic coverage. Include your primary keyword naturally in the H1 and in one or two H2s. Do not stuff keywords into every heading — it reads as spam and Google may discount it." },
  { h: "Content Freshness", d: "Google gives a freshness boost to content on time-sensitive topics. For evergreen topics, freshness matters less than accuracy and depth. The key freshness signal Google uses is the dateModified in your structured data and the lastmod in your sitemap. Update important pages annually at minimum — refresh statistics, update examples, add new sections. Update the lastmod in your sitemap after each meaningful update so Google knows to recrawl the page." },
  { h: "Content Length: What Actually Works", d: "There is no universal ideal content length. The right length is whatever it takes to completely answer the search intent. Guides and comparison content tends to rank well at 1,500-3,000 words because these queries need depth. Simple informational queries can rank at 400-800 words — adding filler to hit an arbitrary word count does not help. Transactional pages (product listings, pricing) often rank well at under 500 words with strong UX. Use competitor content length as a benchmark, then aim to be more useful, not just longer." },
  { h: "Thin Content: The Indexing Risk", d: "Pages with very little unique content — under 200-300 words, or content that is mostly boilerplate — are at risk of Google classifying them as thin content. Thin content pages are often not indexed or ranked poorly. The fix is simple: either improve the content with genuine depth, consolidate multiple thin pages into one comprehensive page via 301 redirects, or noindex the page if it cannot be meaningfully improved. SitemapFixer identifies pages in your sitemap and flags patterns that suggest content quality issues." },
];
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Content SEO</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Content SEO: How to Write Content That Ranks and Satisfies Users</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your site for content issues</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Site Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        {items.map(({ h, d }) => (
          <div key={h} style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 10 }}>{h}</h2>
            <p style={{ margin: 0 }}>{d}</p>
          </div>
        ))}
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Find content and indexing issues across your site</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free sitemap analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>
    </div>
  );
}
