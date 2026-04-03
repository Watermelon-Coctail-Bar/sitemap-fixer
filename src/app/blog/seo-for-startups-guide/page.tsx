import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'SEO for Startups: The Minimum Viable SEO Strategy for New Sites | SitemapFixer',
  description: "Startups have limited resources. This is the minimum viable SEO strategy for new sites - what to prioritize in the first 6 months to build organic traction without wasting effort.",
  alternates: { canonical: 'https://sitemapfixer.com/blog/seo-for-startups-guide' },
};
const priorities = [
  { n: "Month 1", t: "Technical foundation", d: "Before any content: ensure your site is on HTTPS, submit a sitemap to Google Search Console, verify robots.txt is not blocking Google, check for noindex tags on important pages, and set up Google Analytics 4. These take 2-4 hours and are the prerequisite for everything else. Without them, content you create will not be indexed or tracked properly. SitemapFixer checks all of these in 60 seconds." },
  { n: "Month 1-2", t: "Keyword research and content plan", d: "Identify 20-30 specific keywords your target customers search for. Focus on long-tail, low-competition keywords where your content can realistically rank in 6-12 months. Avoid generic industry terms - new sites cannot rank for them. Use Ahrefs or Semrush on the lowest tier to find keywords with volume under 1,000 but difficulty under 20. Build a content calendar around these." },
  { n: "Month 2-4", t: "Publish 10-15 high-quality pages", d: "Create one comprehensive, genuinely helpful page targeting each of your top keyword opportunities. Do not publish 50 thin pages - publish 10-15 excellent ones. Include your target keyword in the title, H1, URL, and naturally throughout the content. Add internal links between related pages. Each page should fully answer the search intent for its target keyword better than current top results." },
  { n: "Month 3-6", t: "Earn your first backlinks", d: "Without backlinks, new sites struggle to rank even for low-competition keywords. Focus on: getting listed in relevant industry directories, guest posting on one or two authoritative sites in your space, creating one piece of original data or research that others want to cite, and submitting to relevant resource pages. Do not buy links. Even 5-10 quality backlinks from relevant sites meaningfully accelerate ranking timelines for new domains." },
  { n: "Month 6+", t: "Compound with consistent publishing", d: "SEO results compound. The first 10 pages earn some traffic. That traffic signals to Google your site has value. New pages rank faster because your domain is establishing authority. Internal links between older and newer content distribute this authority. Publish 2-4 new pages per month consistently. Update top-performing pages as they age. After 12-18 months of consistent effort, organic traffic typically becomes a meaningful, growing acquisition channel." },
];
export default function Page() {
  return (
    <article style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/blog" style={{ color: '#2d5be3', textDecoration: 'none' }}>Blog</a>{' / '}
        <span>SEO for Startups</span>
      </nav>
      <div style={{ fontSize: 13, color: '#9ca3af', marginBottom: 12 }}>April 2025 · 8 min read</div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, lineHeight: 1.15 }}>SEO for Startups: Minimum Viable Strategy for New Sites</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Start with your technical foundation - free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Site Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        {priorities.map(({ n, t, d }) => (
          <div key={n} style={{ marginBottom: 36, borderLeft: '3px solid #2d5be3', paddingLeft: 16 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#2d5be3', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{n}</div>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: '#0a0a0f', marginBottom: 10 }}>{t}</h2>
            <p style={{ margin: 0 }}>{d}</p>
          </div>
        ))}
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Start with your technical foundation</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free sitemap and indexing check - Month 1 done in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>
    </article>
  );
}
