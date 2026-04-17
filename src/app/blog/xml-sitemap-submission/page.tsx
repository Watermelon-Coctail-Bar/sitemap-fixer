import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'XML Sitemap Submission: Submit to Google & Bing',
  description: "Submitting your sitemap helps Google and Bing discover and index pages faster. How to submit to Google Search Console and Bing Webmaster Tools.",
  alternates: { canonical: 'https://sitemapfixer.com/blog/xml-sitemap-submission' },
  openGraph: {
    title: 'XML Sitemap Submission: Submit to Google & Bing',
    description: 'Submitting your sitemap helps Google and Bing discover and index your pages faster. Here is how to submit to Google Search Console and Bing Webmaster Tools.',
    url: 'https://sitemapfixer.com/blog/xml-sitemap-submission',
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
const steps = [
  { t: "Submitting to Google Search Console", d: "Go to search.google.com/search-console and select your property. In the left sidebar click Indexing then Sitemaps. In the Add a new sitemap field enter your sitemap URL - usually sitemap.xml or sitemap_index.xml. Click Submit. Google will process your sitemap and show you the number of URLs submitted and discovered. Check this page weekly for any errors Google has encountered in your sitemap." },
  { t: "Submitting to Bing Webmaster Tools", d: "Go to bing.com/webmasters and sign in with a Microsoft account. Add your site if not already added. In the left menu click Sitemaps. Click Submit Sitemap and enter your sitemap URL. Bing processes sitemaps for its own search index - submitting ensures Bing discovers your content, which matters especially if you get traffic from Bing or DuckDuckGo (which uses Bing's index)." },
  { t: "Declaring your sitemap in robots.txt", d: "Add Sitemap: https://yoursite.com/sitemap.xml as the last line of your robots.txt file. This allows any crawler - not just Google and Bing - to discover your sitemap automatically without needing a direct submission. It also serves as a permanent, self-updating declaration that does not require re-submission when your sitemap URL changes. All major search engines respect this directive." },
  { t: "Monitoring your sitemap status", d: "After submission, Google Search Console shows the sitemap status: Success (sitemap processed), Has errors (some URLs have issues), or Fetching failed (sitemap URL is inaccessible). For a successfully processed sitemap, check the ratio of URLs submitted to URLs indexed. A low indexing rate (under 50%) suggests content quality issues on submitted pages rather than sitemap problems. Resubmit your sitemap in Search Console after any major site update to prompt fresh processing." },
];
export default function Page() {
  return (
    <article style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/blog" style={{ color: '#2d5be3', textDecoration: 'none' }}>Blog</a>{' / '}
        <span>XML Sitemap Submission</span>
      </nav>
      <div style={{ fontSize: 13, color: '#9ca3af', marginBottom: 12 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"Article","headline":"XML Sitemap Submission: Submit to Google & Bing","description":"Submitting your sitemap helps Google and Bing discover and index your pages faster. Here is how to submit to Google Search Console and Bing Webmaster Tools.","url":"https://sitemapfixer.com/blog/xml-sitemap-submission","author":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com"},"publisher":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com","logo":{"@type":"ImageObject","url":"https://sitemapfixer.com/opengraph-image"}},"datePublished":"2025-01-15","mainEntityOfPage":{"@type":"WebPage","@id":"https://sitemapfixer.com/blog/xml-sitemap-submission"}}' }} />April 2025 · 5 min read</div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, lineHeight: 1.15 }}>XML Sitemap Submission: Submit to Google and Bing</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Validate your sitemap before submitting - free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Sitemap Free</a>
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
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Validate your sitemap before submitting</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free - checks all URLs in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Sitemap Free</a>
  
        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/blog/how-to-fix-sitemap-errors" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>How to Fix Sitemap Errors in Google Search Console</a></li>
            <li><a href="/blog/xml-sitemap-not-working" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>XML Sitemap Not Working? 9 Common Reasons and Fixes</a></li>
            <li><a href="/blog/submit-sitemap-google" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>How to Submit a Sitemap to Google: Step-by-Step Guide</a></li>
            <li><a href="/blog/sitemap-blocked-robots-txt" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Sitemap Blocked by Robots.txt: How to Find and Fix It</a></li>
            <li><a href="/blog/sitemap-vs-robots-txt" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Sitemap vs Robots.txt: How They Work Together</a></li>
          </ul>
        </div>
    </div>
    </article>
  );
}
