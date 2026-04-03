import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'JavaScript SEO Guide: How to Make JS-Heavy Sites Crawlable | SitemapFixer',
  description: "JavaScript-heavy sites can have serious SEO issues if content is not accessible to Googlebot. Here is how JavaScript SEO works and how to fix common rendering problems.",
  alternates: { canonical: 'https://sitemapfixer.com/blog/javascript-seo-guide' },
};
const sections = [
  { t: "How Googlebot handles JavaScript", d: "Googlebot crawls pages in two waves. First crawl: downloads the raw HTML immediately. Second crawl: processes JavaScript and renders the page fully - this can happen hours or days later. Content only visible after JavaScript execution may not be indexed promptly. Critical SEO elements - title, meta description, canonical tag, and key page content - should be present in the initial HTML, not only after JavaScript runs." },
  { t: "Server-side rendering vs client-side rendering", d: "Client-side rendered (CSR) apps like React SPAs render content in the browser using JavaScript. Googlebot sees an empty HTML shell until the JS executes. Server-side rendered (SSR) apps send fully-rendered HTML to the browser. For SEO, SSR or static generation is strongly preferred - Googlebot gets all content immediately without waiting for JavaScript. Next.js, Nuxt, and Gatsby all support SSR or static generation for this reason." },
  { t: "Testing JavaScript rendering", d: "In Google Search Console URL Inspection, click View Crawled Page to see the rendered version as Google sees it - including what content was present after JavaScript ran. Compare this to what you see in your browser. If content visible in your browser is missing from Google's rendered version, you have a JavaScript SEO problem. Also use Chrome DevTools: disable JavaScript in Settings and reload your page to see what raw HTML contains." },
  { t: "Internal links in JavaScript apps", d: "Navigation links in JavaScript frameworks must use proper HTML anchor tags (a href) not JavaScript onclick handlers. Google follows href links during crawling. onclick events and programmatic navigation via JavaScript history.pushState may not be followed. Check that all navigation between pages uses proper anchor elements. Single-page app routers like React Router use anchor tags by default - verify your router is configured correctly." },
  { t: "Lazy loading and dynamic content", d: "Content that loads via API calls after page load (dynamic product listings, reviews, comments) may not be indexed. If this content needs to rank, render it server-side or use static generation. For content that does not need to rank (user-specific UI, personalized recommendations), lazy loading is fine. Lazy-loaded images using loading=lazy are handled correctly by modern Googlebot - it scrolls pages during rendering." },
];
export default function Page() {
  return (
    <article style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/blog" style={{ color: '#2d5be3', textDecoration: 'none' }}>Blog</a>{' / '}
        <span>JavaScript SEO Guide</span>
      </nav>
      <div style={{ fontSize: 13, color: '#9ca3af', marginBottom: 12 }}>April 2025 · 7 min read</div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, lineHeight: 1.15 }}>JavaScript SEO Guide: Make JS Sites Crawlable</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your site is fully indexable - free</span>
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
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Check your JS site is fully indexable</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free sitemap and crawlability analysis</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>
    </article>
  );
}
