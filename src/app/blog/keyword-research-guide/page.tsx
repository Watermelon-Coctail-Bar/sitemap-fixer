import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Keyword Research Guide: How to Find Keywords That Drive Real Traffic | SitemapFixer',
  description: "Effective keyword research finds queries with genuine search volume, manageable competition, and clear search intent. Here is a step-by-step keyword research process.",
  alternates: { canonical: 'https://sitemapfixer.com/blog/keyword-research-guide' },
};
const steps = [
  { t: "Start with seed keywords", d: "Seed keywords are the broad topics at the core of your business. For an SEO tool, seeds are: sitemap, keyword research, technical SEO, crawl errors, Google rankings. Do not try to rank for these seeds directly — they are too competitive. Instead, use them as starting points to discover thousands of specific long-tail variations your target audience actually searches for." },
  { t: "Use keyword tools to expand", d: "Enter each seed keyword into tools like Ahrefs Keywords Explorer, Semrush Keyword Magic Tool, or the free Google Keyword Planner. Look at the keyword ideas, questions, and related terms sections. Also use free tools: Google Autocomplete (type your seed and look at suggestions), Google People Also Ask (the questions that expand when you search), and AnswerThePublic (visualizes all question variants for a topic)." },
  { t: "Evaluate by search volume and difficulty", d: "For each candidate keyword, check monthly search volume (is anyone searching for it?) and keyword difficulty (can you realistically rank for it?). New sites should target keywords with difficulty under 20-30 in Ahrefs scale. Established sites can target higher difficulty. Do not dismiss low-volume keywords — a keyword with 100 monthly searches and high conversion intent is often more valuable than a 10,000-volume keyword with low intent." },
  { t: "Understand search intent", d: "Search intent is the why behind a query. Four types: informational (how does X work), navigational (find a specific site), commercial (best X tools), transactional (buy X, X pricing). Your content format must match the dominant intent. A query showing commercial intent needs a comparison or review page — an informational guide will not rank for it. Check the current top 10 results to understand what content format Google rewards for each keyword." },
  { t: "Prioritize by business value", d: "Not all traffic is equal. Rank keywords by: search volume (how many potential visitors), keyword difficulty (feasibility), and business value (how likely is a searcher to become a customer). A keyword like sitemap generator free has high business value for SitemapFixer — it targets users actively looking for the exact solution. Weight your content calendar toward high-business-value keywords even if they have lower volume." },
];
export default function Page() {
  return (
    <article style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/blog" style={{ color: '#2d5be3', textDecoration: 'none' }}>Blog</a>{' / '}
        <span>Keyword Research Guide</span>
      </nav>
      <div style={{ fontSize: 13, color: '#9ca3af', marginBottom: 12 }}>April 2025 · 8 min read</div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, lineHeight: 1.15 }}>Keyword Research Guide: Find Keywords That Drive Real Traffic</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Build the technical foundation first — free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Site Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        {steps.map(({ t, d }) => (
          <div key={t} style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12 }}>{t}</h2>
            <p style={{ margin: 0 }}>{d}</p>
          </div>
        ))}
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Make sure your site is technically ready to rank</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free sitemap and indexing analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>
    </article>
  );
}
