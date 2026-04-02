import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Google Penalty: How to Identify, Fix, and Recover From One | SitemapFixer',
  description: "A Google penalty can drop your site dramatically in search rankings. Here is how to tell if you have one, what causes them, and the step-by-step recovery process.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/google-penalty' },
};
const sections = [
  { h: "Manual Actions vs Algorithmic Penalties", d: "There are two types of Google penalties. Manual actions are applied by human reviewers at Google and are clearly visible in Google Search Console under Security and Manual Actions. They come with a specific description of the violation. Algorithmic penalties are automatic — triggered by algorithm updates like Panda (thin/duplicate content), Penguin (unnatural links), or Helpful Content. Algorithmic penalties do not show in Search Console as a manual action; you see them as unexplained traffic drops coinciding with algorithm update dates." },
  { h: "How to Check If You Have a Penalty", d: "Step 1: Check Google Search Console under Security and Manual Actions for any active manual actions. Step 2: Check Google's algorithm update history — search for 'Google algorithm update history' and compare dates to your traffic drops in Search Console or Google Analytics. A traffic drop within a few days of a confirmed algorithm update is likely algorithmic. Step 3: Check Search Console for any security issues (hacked site warnings). Step 4: Look at your organic traffic trend — a sudden cliff drop suggests a penalty; a gradual decline suggests competitive displacement." },
  { h: "Manual Action: How to Recover", d: "Read the manual action description in Search Console carefully — it tells you exactly what to fix. For unnatural links: identify the links causing the issue using Ahrefs or Semrush, attempt to have them removed by contacting webmasters, then disavow remaining harmful links using the Google Search Console Disavow tool. For thin content: improve the content on affected pages substantially. After fixing the root cause, submit a reconsideration request in Search Console with a detailed explanation of what changed. Google reviews reconsideration requests within weeks to months." },
  { h: "Panda: Thin and Low-Quality Content", d: "Google Panda targets sites with a high proportion of thin, duplicate, or low-quality content. Signs: traffic drops that correlate with Panda updates (now integrated into core updates), many pages with under 300 words, pages with near-identical content, or doorway pages. Fix: audit your entire site for thin content, either improving each page substantially (300+ words of genuinely useful content) or consolidating and redirecting similar pages. Noindex category archives, tag pages, and author archives if they contain only content aggregation." },
  { h: "Penguin: Unnatural Link Profiles", d: "Google Penguin targets manipulative link building. Signs: sudden ranking drops for your most-linked pages, high proportion of exact-match anchor text in your backlink profile, many links from spammy or irrelevant sites, or links you know were purchased. Fix: use Ahrefs or Semrush to audit your backlink profile, identifying unnatural links. Email webmasters of spammy link sources requesting removal. For links you cannot get removed, create a disavow file and submit to Google. After submission, it can take several months for Penguin to reprocess your site." },
  { h: "Helpful Content Update Recovery", d: "Google Helpful Content Update (HCU) targets content written primarily for search engines rather than humans. Signs: traffic drops affecting your entire site, not just specific pages; content that is thin and derivative; content written by AI without meaningful human expertise. Recovery requires a genuine, sustained improvement in content quality — not just rewrites but adding real expertise, first-hand experience, and unique value. HCU recovery typically takes months after improvements are made, as Google reassesses your site in aggregate." },
];
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Google Penalty</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Google Penalty: Identify, Fix, and Recover</h1>
      <div style={{ background: '#fff3cd', border: '1px solid #ffc107', borderRadius: 12, padding: '16px 20px', marginBottom: 24 }}>
        <span style={{ fontSize: 14, color: '#856404', fontWeight: 600 }}>Check Search Console first: Security and Manual Actions shows confirmed manual penalties immediately.</span>
      </div>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your site for technical issues free</span>
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
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Audit your site for technical SEO issues</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>
    </div>
  );
}
