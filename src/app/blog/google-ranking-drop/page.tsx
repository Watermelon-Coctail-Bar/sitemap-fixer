import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Google Ranking Drop: Why Rankings Dropped and How to Recover | SitemapFixer',
  description: "A sudden drop in Google rankings has specific causes. Here is how to diagnose which of the 7 most common causes hit your site and the recovery steps for each.",
  alternates: { canonical: 'https://sitemapfixer.com/blog/google-ranking-drop' },
  openGraph: { title: 'Google Ranking Drop: 7 Causes and Recovery Steps', url: 'https://sitemapfixer.com/blog/google-ranking-drop', type: 'article' },
};
const causes = [
  { t: "Algorithm update", d: "Check the date of your ranking drop against Google's confirmed algorithm update history. If they coincide, you were affected by that update. Each major update has a specific target - Helpful Content targets AI/thin content; Panda targets low-quality pages; Penguin targets manipulative links. Recovery depends on fixing what the specific update penalized." },
  { t: "Technical issue", d: "A site migration, robots.txt change, noindex tag accidentally applied, or server error can cause sudden ranking drops. Check Google Search Console Coverage report immediately for any new errors. Check your robots.txt for accidental Disallow rules. Check your CMS settings for any accidentally toggled noindex setting." },
  { t: "Competitor improvement", d: "Sometimes your rankings drop not because you did something wrong but because a competitor significantly improved their content, earned more links, or fixed their own technical issues. Compare your content depth and quality to whoever overtook you. The fix is improving your own content rather than any technical change." },
  { t: "Backlink loss", d: "Losing a major backlink or having links disavowed can cause ranking drops on pages that were relying on that link equity. Check your backlink profile in Ahrefs or Semrush for recently lost links. If a high-authority site removed a link to you, try to earn a replacement link or improve internal links to the affected page." },
  { t: "Site speed degradation", d: "If you recently added plugins, changed themes, or upgraded infrastructure and Core Web Vitals degraded, this can cause ranking drops. Check Google Search Console Core Web Vitals report for any new Poor URLs that appeared around the time of the drop." },
  { t: "Content cannibalization", d: "Publishing a new page that targets the same keyword as an existing page can cause both pages to rank poorly as Google splits signals between them. If you published new content shortly before the drop, check for keyword overlap with existing pages." },
  { t: "Google Search Console manual action", d: "Check Search Console under Security and Manual Actions first. A manual action is the fastest thing to check and has an immediate, definitive fix process." },
];
export default function Page() {
  return (
    <article style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/blog" style={{ color: '#2d5be3', textDecoration: 'none' }}>Blog</a>{' / '}
        <span>Google Ranking Drop</span>
      </nav>
      <div style={{ fontSize: 13, color: '#9ca3af', marginBottom: 12 }}>April 2025 · 7 min read</div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, lineHeight: 1.15 }}>Google Ranking Drop: 7 Causes and How to Recover</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your site for technical issues free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Site Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        <p style={{ marginBottom: 32 }}>Before assuming the worst, check Google Search Console. The Coverage, Core Web Vitals, and Manual Actions reports will identify most causes within minutes.</p>
        {causes.map(({ t, d }) => (
          <div key={t} style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: '#0a0a0f', marginBottom: 8 }}>{t}</h2>
            <p style={{ margin: 0 }}>{d}</p>
          </div>
        ))}
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Diagnose your ranking drop</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free technical SEO analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>
    </article>
  );
}
