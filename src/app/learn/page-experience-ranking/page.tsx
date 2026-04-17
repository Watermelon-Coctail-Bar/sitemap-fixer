import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Page Experience: How Google Scores UX',
  description: "Page experience is a Google ranking system combining Core Web Vitals, HTTPS, mobile-friendliness, and no intrusive interstitials. How to improve.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/page-experience-ranking' },
  openGraph: {
    title: 'Page Experience: How Google Scores UX',
    description: 'Page experience is a Google ranking system combining Core Web Vitals, HTTPS, mobile-friendliness, and no intrusive interstitials.',
    url: 'https://sitemapfixer.com/learn/page-experience-ranking',
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
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"Article","headline":"Page Experience: How Google Scores UX","description":"Page experience is a Google ranking system combining Core Web Vitals, HTTPS, mobile-friendliness, and no intrusive interstitials.","url":"https://sitemapfixer.com/learn/page-experience-ranking","author":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com"},"publisher":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com","logo":{"@type":"ImageObject","url":"https://sitemapfixer.com/opengraph-image"}},"datePublished":"2025-01-15","mainEntityOfPage":{"@type":"WebPage","@id":"https://sitemapfixer.com/learn/page-experience-ranking"}}' }} />
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Page Experience Ranking</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Page Experience Ranking: How Google Evaluates User Experience</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your site experience signals</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Site Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        <p style={{ marginBottom: 24 }}>Google introduced Page Experience as a formal ranking system in 2021, combining several signals that measure how users experience pages beyond just the content. These signals act as tiebreakers - when two pages have similar content quality, the one with better page experience scores higher. For highly competitive queries, page experience can be the margin that separates page 1 from page 2.</p>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>The Four Page Experience Signals</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 32 }}>
          {[
            { title: 'Core Web Vitals', status: 'High impact', desc: 'LCP, INP, and CLS scores from real user data. The most impactful signal in the group.' },
            { title: 'HTTPS', status: 'Baseline', desc: 'Site must be fully on HTTPS. HTTP sites get a negative signal. Almost universal now.' },
            { title: 'Mobile-Friendly', status: 'Baseline', desc: 'Responsive design, correct viewport, readable text, no tap target issues.' },
            { title: 'No Intrusive Interstitials', status: 'Penalty trigger', desc: 'Pop-ups covering main content on mobile immediately after clicking from search.' },
          ].map(({ title, status, desc }) => (
            <div key={title} style={{ background: '#f8f8fc', borderRadius: 10, padding: '16px', border: '1px solid #e4e4ed' }}>
              <div style={{ fontWeight: 700, fontSize: 14, color: '#0a0a0f', marginBottom: 4 }}>{title}</div>
              <div style={{ fontSize: 11, color: '#2d5be3', fontWeight: 600, marginBottom: 8 }}>{status}</div>
              <div style={{ fontSize: 13, color: '#6b6b7d', lineHeight: 1.5 }}>{desc}</div>
            </div>
          ))}
        </div>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Core Web Vitals: The Dominant Signal</h2>
        <p style={{ marginBottom: 24 }}>Of the four page experience signals, Core Web Vitals (CWV) has the most significant ranking impact. Google uses field data from the Chrome User Experience Report (CrUX) - real user measurements from Chrome browsers. This means lab scores from PageSpeed Insights matter less than the field data shown in Google Search Console under Core Web Vitals. A page can pass PageSpeed lab tests but still fail CWV if real users on slow connections experience poor performance. Fix your field data scores first, not just lab scores.</p>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Intrusive Interstitials: The Penalty</h2>
        <p style={{ marginBottom: 24 }}>Google targets intrusive interstitials that show immediately when a user clicks from search results to a page. This specifically means: full-screen pop-ups requiring dismissal before seeing content, large banners covering most of the viewport, and interstitials that must be closed before the main content is accessible. Excluded from this penalty: legally required notices (cookie consent, age verification), login pages for paywalled content, and small banners that do not cover significant content area.</p>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Where to Check Your Page Experience Score</h2>
        <p style={{ marginBottom: 24 }}>Google Search Console shows page experience data under Experience, then Page Experience. It gives a percentage of URLs with Good page experience. Under Core Web Vitals, you see the breakdown by LCP, INP, and CLS for mobile and desktop separately. Under Enhancements, Mobile Usability shows specific mobile issues. Use these reports to prioritize which pages need the most attention - focus on your highest-traffic pages with Poor scores first.</p>
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Check your site experience signals</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free sitemap and SEO analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
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
