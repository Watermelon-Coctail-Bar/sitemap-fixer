import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'How to Submit a Sitemap to Google: Step-by-Step Guide',
  description: "Submitting your sitemap to Google Search Console tells Google where to find all your pages. Here is the exact process and how to verify it worked.",
  alternates: { canonical: 'https://sitemapfixer.com/blog/submit-sitemap-google' },
  openGraph: { title: 'How to Submit a Sitemap to Google Search Console', url: 'https://sitemapfixer.com/blog/submit-sitemap-google', type: 'article',
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
const steps = [
  { n: "1", t: "Verify your sitemap exists and is valid", d: "Before submitting, open yoursite.com/sitemap.xml in your browser. If it displays XML content, it exists. If you get a 404, your sitemap has not been generated yet - check your CMS or sitemap plugin settings. Validate the XML format at validator.w3.org. Your sitemap should not show any validation errors." },
  { n: "2", t: "Set up Google Search Console if you have not already", d: "Go to search.google.com/search-console and add your site as a property. Choose Domain property for full coverage across HTTP, HTTPS, www, and non-www. Verify ownership via DNS TXT record (add it at your domain registrar), HTML file upload, or meta tag in your site head. Domain property requires DNS verification." },
  { n: "3", t: "Navigate to Sitemaps", d: "In Google Search Console, select your property from the dropdown. In the left sidebar, click Indexing, then Sitemaps. This shows all previously submitted sitemaps and their status." },
  { n: "4", t: "Enter your sitemap URL and submit", d: "In the 'Add a new sitemap' field, enter the path to your sitemap - just the path after your domain, like sitemap.xml or sitemap_index.xml. Do not include the full domain - Search Console already knows it. Click Submit." },
  { n: "5", t: "Verify the submission was successful", d: "After submitting, your sitemap should appear in the list with status Success. It shows the date last read, number of URLs discovered, and number of URLs indexed. If the status shows an error instead, click on the sitemap entry to see the specific error message." },
  { n: "6", t: "Monitor ongoing sitemap health", d: "Check your Sitemaps report weekly for the first month after submission. Watch for: status changing from Success to error, a significant drop in URLs indexed vs discovered (may indicate quality issues), and warnings about specific URLs. If you update your site significantly, click the sitemap entry and use the Resubmit option to prompt Google to re-read your sitemap immediately." },
];
export default function Page() {
  return (
    <article style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/blog" style={{ color: '#2d5be3', textDecoration: 'none' }}>Blog</a>{' / '}
        <span>Submit Sitemap to Google</span>
      </nav>
      <div style={{ fontSize: 13, color: '#9ca3af', marginBottom: 12 }}>April 2025 · 5 min read</div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, lineHeight: 1.15 }}>How to Submit a Sitemap to Google: Step-by-Step</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Validate your sitemap before submitting</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Check My Sitemap Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        {steps.map(({ n, t, d }) => (
          <div key={n} style={{ marginBottom: 36, paddingLeft: 16, borderLeft: '3px solid #2d5be3' }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: '#0a0a0f', marginBottom: 8 }}>Step {n}: {t}</h2>
            <p style={{ margin: 0 }}>{d}</p>
          </div>
        ))}
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Validate your sitemap before submitting</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free - checks format, URLs, and common errors</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Check My Sitemap Free</a>
  
        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/blog/how-to-fix-sitemap-errors" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>How to Fix Sitemap Errors in Google Search Console</a></li>
            <li><a href="/blog/xml-sitemap-not-working" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>XML Sitemap Not Working? 9 Common Reasons and Fixes</a></li>
            <li><a href="/blog/xml-sitemap-submission" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>XML Sitemap Submission: Submit to Google & Bing</a></li>
            <li><a href="/blog/sitemap-blocked-robots-txt" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Sitemap Blocked by Robots.txt: How to Find and Fix It</a></li>
            <li><a href="/blog/sitemap-vs-robots-txt" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Sitemap vs Robots.txt: How They Work Together</a></li>
          </ul>
        </div>
    </div>
    </article>
  );
}
