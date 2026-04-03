import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'E-E-A-T SEO: Experience, Expertise, Authoritativeness, Trust | SitemapFixer',
  description: "Google's E-E-A-T framework evaluates the quality of content creators and websites. Here is what it means, how it affects rankings, and practical ways to improve your E-E-A-T signals.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/eeat-seo' },
};
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>E-E-A-T SEO</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>E-E-A-T SEO: What It Is and How to Improve Your Signals</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Analyze your site free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Try SitemapFixer Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        <p style={{ marginBottom: 24 }}>E-E-A-T stands for Experience, Expertise, Authoritativeness, and Trust. It is the framework Google uses in its Search Quality Rater Guidelines to evaluate content quality. Quality raters are humans who assess search results and provide feedback that trains Google's algorithms. While E-E-A-T is not a direct ranking algorithm with measurable scores, it describes the characteristics of content that Google's algorithms are trained to reward.</p>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Experience</h2>
        <p style={{ marginBottom: 24 }}>Added to E-A-T in 2022, Experience refers to first-hand experience with the topic. A product review written by someone who actually used the product demonstrates experience. A recipe from someone who developed and tested the dish demonstrates experience. Google values this especially for YMYL (Your Money or Your Life) topics where bad advice can cause real harm. Demonstrate experience by sharing personal outcomes, specific details that only come from doing something, and being honest about limitations.</p>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Expertise</h2>
        <p style={{ marginBottom: 24 }}>Expertise means having formal or informal knowledge about a topic. For medical, legal, and financial content, Google expects formal credentials - an article about drug interactions should come from a pharmacist or doctor. For other topics, demonstrated expertise through detailed, accurate content is sufficient. Show expertise by being specific, citing primary sources, covering topics at depth, and having clear author attribution with bios that demonstrate relevant background.</p>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Authoritativeness</h2>
        <p style={{ marginBottom: 24 }}>Authoritativeness is about reputation - what others say about you, not what you say about yourself. Backlinks from authoritative sites in your field signal authority. Being cited in industry publications, having your content quoted by respected sources, and having authors whose work is recognized in the field all contribute. Build authoritativeness by producing content worth citing and building relationships in your industry.</p>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Trust</h2>
        <p style={{ marginBottom: 24 }}>Trust is the foundation of E-E-A-T and the most important element for Google. Trustworthy sites have HTTPS, clear authorship, accurate and honest content, privacy policies and terms of service, working contact information, and transparent ownership. Sites that mislead users, make unsupported claims, or hide who is behind them score low on Trust. Fix trust signals first: make authorship clear on every article, keep your About page updated, ensure all your legal pages are current.</p>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Practical E-E-A-T Improvements</h2>
        <p style={{ marginBottom: 24 }}>Add author bios to all content with credentials and relevant experience. Create a detailed About page that explains who is behind the site. Add author schema markup linking to author profiles. Cite primary sources (studies, official documentation, expert quotes). Display customer reviews and testimonials. Build your external reputation through guest posts, podcast appearances, and industry participation. For YMYL topics, have a medical professional, lawyer, or financial advisor review and sign off on content.</p>
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Analyze your site SEO foundation</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free sitemap and SEO analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>
    </div>
  );
}
