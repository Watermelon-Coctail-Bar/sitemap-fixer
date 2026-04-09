import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Keyword Research: Find Keywords Worth Targeting',
  description: "Keyword research determines what content to create and how to optimize it. Here is a practical process for finding keywords with real traffic potential and realistic ranking difficulty.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/keyword-research-seo' },
  openGraph: {
    title: 'Keyword Research: Find Keywords Worth Targeting',
    description: 'Keyword research determines what content to create and how to optimize it. Here is a practical process for finding keywords with real traffic potential and realistic ranking difficulty.',
    url: 'https://sitemapfixer.com/learn/keyword-research-seo',
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
  { h: "Start with Search Intent, Not Just Volume", d: "Before targeting a keyword, understand what searchers actually want when they type it. Informational intent (how to, what is, why) means users want to learn - serve them with comprehensive guides. Navigational intent means they want a specific site - you cannot realistically compete. Commercial intent (best, review, vs) means users are comparing options before buying. Transactional intent (buy, price, order) means they are ready to convert. Create content that matches the intent of each keyword. A product page targeting an informational keyword will always underperform against a genuine guide." },
  { h: "How to Find Keywords: Free Tools", d: "Google Search Console shows keywords your site already ranks for - these are your easiest wins. Google Autocomplete and People Also Ask are free and show exactly what real users search. Google Keyword Planner is free with a Google Ads account and shows volume ranges. Answer the Public visualizes question-based queries around any topic. Ubersuggest has a free tier. For technical queries, search a topic on Reddit, Quora, and industry forums - the exact language people use in questions becomes keyword ideas." },
  { h: "Understanding Search Volume and Difficulty", d: "Search volume is how many times a keyword is searched per month. High volume is relative to your niche - 100 searches per month for a highly specific B2B term can be extremely valuable. Keyword difficulty (KD) scores from tools like Ahrefs and Semrush estimate how hard it is to rank based on the authority of current top results. For new sites, target keywords under KD 30. Established sites can go after KD 40-60. Nobody can reliably rank for KD 70+ without significant domain authority and link building." },
  { h: "Long-Tail Keywords: Lower Competition, Higher Intent", d: "Long-tail keywords (3-5+ words, lower search volume) account for the majority of all searches and are easier to rank for. A new site targeting 'how to fix wordpress sitemap not showing in search console' will rank faster than targeting 'sitemap.' Long-tail searchers are also more specific in their intent, which means higher conversion rates. Build a content strategy around clusters of long-tail keywords that collectively cover a topic, rather than going after single high-volume head terms." },
  { h: "Keyword Mapping: One Page Per Intent", d: "Keyword cannibalization happens when multiple pages on your site target the same keyword, competing against each other. Map one primary keyword to one page. If you have two pages targeting similar terms, either consolidate them with a 301 redirect or differentiate them clearly enough that they serve different intents. In your sitemap, inconsistent URLs targeting similar topics are a signal to check for cannibalization - SitemapFixer analyzes URL patterns to identify potential overlaps." },
  { h: "How to Prioritize Keywords", d: "Rank keywords by: business value (will this traffic convert?), volume, difficulty, and your current authority. The best opportunities are keywords where the current top results are from sites with similar or lower authority to yours, the content quality of top results is mediocre, and the keyword has commercial or transactional intent. Use Search Console data to find keywords where you already rank on page 2 or 3 - these are your fastest wins since you already have some authority and a small improvement in content or links can push you to page 1." },
];
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Keyword Research for SEO</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Keyword Research for SEO: A Practical Process That Works</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Analyze your site free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Try SitemapFixer Free</a>
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
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Make sure your technical foundation is solid first</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free sitemap analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>

        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/learn/content-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Content SEO: Write Content That Ranks</a></li>
            <li><a href="/learn/link-building-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Link Building SEO: Strategies That Work in 2025</a></li>
            <li><a href="/learn/local-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Local SEO: How to Rank in Google Maps and Local Search</a></li>
            <li><a href="/learn/mobile-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Mobile SEO: Mobile-First Indexing and How to Pass It</a></li>
            <li><a href="/learn/international-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>International SEO: Target Multiple Countries</a></li>
          </ul>
        </div>
    </div>
  );
}
