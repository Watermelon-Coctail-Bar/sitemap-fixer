import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Sitemap Blocked by Robots.txt: How to Find and Fix It',
  description: "If your sitemap contains URLs blocked by robots.txt, Google reports errors and may skip those pages. How to find the conflict and fix it quickly.",
  alternates: { canonical: 'https://sitemapfixer.com/blog/sitemap-blocked-robots-txt' },
  openGraph: { title: 'Sitemap Blocked by Robots.txt: Fix It Fast', description: 'Find and fix the robots.txt conflict causing sitemap errors in Google Search Console.', url: 'https://sitemapfixer.com/blog/sitemap-blocked-robots-txt', type: 'article',
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
const sections = [
  { t: "What the Error Means", d: "When Google Search Console reports 'Blocked by robots.txt' for URLs in your sitemap, it means your sitemap is telling Google to index a page that your robots.txt is simultaneously telling it not to crawl. This is a direct contradiction. Google cannot index a page it cannot read - so these URLs will not appear in search results regardless of their content quality. The error is common and easy to fix once you know where to look." },
  { t: "How to Find the Conflict", d: "Step 1: Go to Google Search Console, then Indexing, then Pages, and filter by 'Blocked by robots.txt'. Note the exact URLs affected. Step 2: Open yoursite.com/robots.txt in your browser. Look for Disallow rules that match the affected URLs. Common culprits: Disallow: / (blocks everything), Disallow: /wp-admin/ blocking pages that were accidentally put in that directory, or wildcard rules like Disallow: /*?* that accidentally block pages with query parameters you put in your sitemap. Step 3: Test any suspicious URL using Google Search Console's URL Inspection tool - it shows whether the URL is blocked by robots.txt." },
  { t: "The Two Ways to Fix It", d: "Option A - Remove from sitemap: If the blocked pages should not be indexed (admin pages, checkout, login), remove them from your sitemap. Your sitemap should only contain pages you actually want Google to index. This is the right fix when the robots.txt block is intentional. Option B - Update robots.txt: If the blocked pages should be indexed, remove or narrow the robots.txt rule that is blocking them. This is the right fix when you accidentally blocked pages you need indexed - for example, if a blanket Disallow rule is catching pages you want ranked." },
  { t: "The Development Mode Trap", d: "The most catastrophic version of this error: your site was in development with Disallow: / in robots.txt to prevent indexing during development, and nobody removed it after launch. Your entire site is blocked. Google discovers it through your sitemap but cannot crawl anything. Check your robots.txt immediately after any site launch. This single oversight can mean zero organic traffic for months before it is discovered." },
  { t: "How to Test Your Fix", d: "After updating robots.txt or your sitemap, use Google Search Console URL Inspection on an affected URL and click Test Live URL. If it still shows as blocked, wait 24 hours for Google to recrawl your robots.txt (Google caches robots.txt for up to 24 hours). After that, resubmit your sitemap in Search Console under Sitemaps. Google will reprocess the submitted URLs against the updated robots.txt and the errors should clear within a few days." },
  { t: "Preventing Future Conflicts", d: "The best prevention: never include a URL in your sitemap if it is blocked in robots.txt. Run a regular audit - SitemapFixer checks every URL in your sitemap against your robots.txt automatically and flags conflicts immediately. Before launching any new site or after any major robots.txt change, use the robots.txt Tester in Google Search Console to verify your rules allow the pages you need indexed." },
];
export default function Page() {
  return (
    <article style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/blog" style={{ color: '#2d5be3', textDecoration: 'none' }}>Blog</a>{' / '}
        <span>Sitemap Blocked by Robots.txt</span>
      </nav>
      <div style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 16 }}>By <a href="/about" style={{ color: '#2d5be3', textDecoration: 'none' }}>Arnoldas Arny</a></div>
      <div style={{ fontSize: 13, color: '#9ca3af', marginBottom: 12 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"Article","headline":"Sitemap Blocked by Robots.txt: How to Find and Fix It","description":"If your sitemap contains URLs blocked by robots.txt, Google reports errors and may not index those pages. Here is how to find the conflict and fix it in 10 minutes.","url":"https://sitemapfixer.com/blog/sitemap-blocked-robots-txt","author":{"@type":"Person","name":"Arnoldas Arny","url":"https://sitemapfixer.com/about"},"publisher":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com","logo":{"@type":"ImageObject","url":"https://sitemapfixer.com/opengraph-image"}},"datePublished":"2025-01-15","mainEntityOfPage":{"@type":"WebPage","@id":"https://sitemapfixer.com/blog/sitemap-blocked-robots-txt"}}' }} />April 2025 · 6 min read</div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, lineHeight: 1.15 }}>Sitemap Blocked by Robots.txt: How to Find and Fix It</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Auto-detect robots.txt conflicts in your sitemap</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Sitemap Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        {sections.map(({ t, d }) => (
          <div key={t} style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginBottom: 12 }}>{t}</h2>
            <p style={{ margin: 0 }}>{d}</p>
          </div>
        ))}
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Check your sitemap for robots.txt conflicts</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free - detects all conflicts in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Sitemap Free</a>
  
        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/blog/how-to-fix-sitemap-errors" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>How to Fix Sitemap Errors in Google Search Console</a></li>
            <li><a href="/blog/xml-sitemap-not-working" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>XML Sitemap Not Working? 9 Common Reasons and Fixes</a></li>
            <li><a href="/blog/submit-sitemap-google" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>How to Submit a Sitemap to Google: Step-by-Step Guide</a></li>
            <li><a href="/blog/xml-sitemap-submission" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>XML Sitemap Submission: Submit to Google & Bing</a></li>
            <li><a href="/blog/sitemap-vs-robots-txt" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Sitemap vs Robots.txt: How They Work Together</a></li>
          
            <li><a href="/blog/robots-txt-disallow-all" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Robots.txt Disallow All: Avoid Blocking Your Site</a></li></ul>
        </div>
    </div>
    </article>
  );
}
