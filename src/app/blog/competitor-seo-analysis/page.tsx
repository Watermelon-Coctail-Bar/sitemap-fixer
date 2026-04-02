import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Competitor SEO Analysis: How to Find and Close the Gaps | SitemapFixer',
  description: "Competitor SEO analysis reveals exactly what is working for your rivals. Here is how to analyze competitor keywords, backlinks, and content to find opportunities to outrank them.",
  alternates: { canonical: 'https://sitemapfixer.com/blog/competitor-seo-analysis' },
};
const sections = [
  { t: "Identify your real SEO competitors", d: "Your SEO competitors are not necessarily your business competitors. They are the sites that rank for the same keywords you want to rank for. Search your primary keywords in Google and note who consistently appears in the top 5. Use Ahrefs or Semrush to enter your domain and look at the competing domains report, which shows sites with the most keyword overlap. You might compete with Wikipedia, Reddit, or industry blogs you would never consider business rivals." },
  { t: "Analyze competitor keywords", d: "In Ahrefs, enter a competitor domain and go to Organic Keywords. Sort by traffic to see which keywords drive their most visitors. Look for: keywords they rank highly for that you do not, keywords where they rank position 5-15 (vulnerable positions you can displace), and content topics they cover extensively that you have not addressed. Export the full keyword list and filter for keywords in your topical territory with difficulty scores you can realistically target." },
  { t: "Find their best content", d: "Sort competitor organic pages by traffic to find their highest-performing content. This tells you which topics Google rewards in your niche. Analyze these pages: how comprehensive are they, what unique angle do they take, what media do they use, how long are they, what questions do they answer. Your goal is not to copy them but to understand the bar and create something that covers the topic more thoroughly or from a better angle." },
  { t: "Audit their backlinks", d: "In Ahrefs Site Explorer for a competitor, go to Backlinks and sort by domain rating descending. Look for: high-authority sites linking to their content that you could pitch for similar coverage, resource pages and directories linking to them that you could also be listed on, broken backlinks pointing to their old content that you could replace with a redirect pitch. The sites linking to multiple competitors in your niche are your highest-priority link targets." },
  { t: "Find their content gaps", d: "Ahrefs Content Gap tool takes your domain and multiple competitor domains as input and shows keywords all competitors rank for that you do not. This is the fastest way to find proven topics you are missing. Filter by volume and difficulty to prioritize. Any topic where 3-4 competitors all rank well but you do not is a confirmed gap worth filling." },
];
export default function Page() {
  return (
    <article style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/blog" style={{ color: '#2d5be3', textDecoration: 'none' }}>Blog</a>{' / '}
        <span>Competitor SEO Analysis</span>
      </nav>
      <div style={{ fontSize: 13, color: '#9ca3af', marginBottom: 12 }}>April 2025 · 8 min read</div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, lineHeight: 1.15 }}>Competitor SEO Analysis: Find and Close the Gaps</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your technical foundation free</span>
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
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Audit your technical SEO foundation</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free sitemap and indexing check in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>
    </article>
  );
}
