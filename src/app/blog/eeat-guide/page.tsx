import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'E-E-A-T Guide: How to Build Experience, Expertise, Authority, and Trust | SitemapFixer',
  description: "E-E-A-T is Google's framework for evaluating content quality. Here is what each component means, why it matters for rankings, and how to demonstrate it on your site.",
  alternates: { canonical: 'https://sitemapfixer.com/blog/eeat-guide' },
};
const components = [
  { t: "Experience", d: "The first E was added in 2022. Experience means demonstrating first-hand, real-world experience with the topic. For product reviews: show you actually used the product with original photos and specific observations. For health content: show clinical experience or direct patient interaction. For financial content: show lived experience with the financial situation being described. Experience is what distinguishes content written by someone who has actually done something from content assembled from other sources." },
  { t: "Expertise", d: "The depth of knowledge demonstrated in your content. Expertise comes from formal credentials (medical degree for health content, legal degree for legal content), professional experience, or deep subject-matter immersion over time. Show expertise through: accurate use of technical terminology, nuanced coverage of edge cases, original analysis beyond surface-level explanations, and citing primary sources. Author bios with verifiable credentials are a key expertise signal." },
  { t: "Authoritativeness", d: "How widely recognized you are as an authority in your field. Signals include: backlinks from other authoritative sites in your niche, mentions in industry publications, citations of your original research, speaking engagements and expert quotes. Authoritativeness is built over time through consistently producing high-quality content that others reference. It is largely a function of your backlink profile and brand mentions." },
  { t: "Trust", d: "The most important of the four components according to Google's quality rater guidelines. Trust signals include: clear authorship with real bios and credentials, accurate and up-to-date information, transparent business information (about page, contact page, privacy policy), positive reviews and reputation, secure HTTPS connection, no deceptive patterns or false claims, and honest affiliate disclosure. YMYL sites (health, finance, legal) face the strictest trust requirements." },
  { t: "How to improve E-E-A-T on your site", d: "Add author bios with credentials and professional links to every piece of content. Link to primary sources and cite studies. Add a detailed About page explaining your team's expertise. Earn backlinks from authoritative sites in your niche. Keep content updated with accurate information. Add first-person experience sections to reviews and guides. Implement FAQ schema where relevant. Display trust badges, certifications, and awards. These changes improve both how Google's quality raters perceive your site and how algorithmic signals evaluate its quality." },
];
export default function Page() {
  return (
    <article style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/blog" style={{ color: '#2d5be3', textDecoration: 'none' }}>Blog</a>{' / '}
        <span>E-E-A-T Guide</span>
      </nav>
      <div style={{ fontSize: 13, color: '#9ca3af', marginBottom: 12 }}>April 2025 · 8 min read</div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, lineHeight: 1.15 }}>E-E-A-T Guide: Build the Quality Signals Google Rewards</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your technical SEO foundation free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Site Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        {components.map(({ t, d }) => (
          <div key={t} style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12 }}>{t}</h2>
            <p style={{ margin: 0 }}>{d}</p>
          </div>
        ))}
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Build E-E-A-T on a solid technical foundation</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free sitemap and indexing analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>
    </article>
  );
}
