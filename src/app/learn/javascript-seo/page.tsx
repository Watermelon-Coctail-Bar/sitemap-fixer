import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'JavaScript SEO: How Google Crawls JS Sites and What Can Go Wrong | SitemapFixer',
  description: "Google renders JavaScript but with delays and limitations. Here is what affects indexing on JS-heavy sites, and practical fixes for the most common JS SEO problems.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/javascript-seo' },
};
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>JavaScript SEO</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>JavaScript SEO: How Google Handles JS Sites</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your JS site for indexing issues</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Site</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        <p style={{ marginBottom: 24 }}>Google can render JavaScript, but it does so in a two-wave process: first it crawls the raw HTML, then it queues the page for rendering (executing the JS) which can take anywhere from hours to weeks. This delay means content that only appears after JS execution may not be indexed promptly. For most modern JS frameworks using server-side rendering, this is a non-issue. For client-side-only apps, it can cause serious indexing problems.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>The Two-Wave Crawling Problem</h2>
        <p style={{ marginBottom: 24 }}>When Googlebot visits a JavaScript-heavy page, it first sees the initial HTML. If that HTML contains meaningful content, Google indexes it immediately. It then schedules the page for JavaScript rendering, which happens in a second crawl wave using a headless Chromium browser. The gap between wave one and wave two can be days. New content published on a JS site may not appear in search results for significantly longer than on a traditional server-rendered site.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Server-Side Rendering vs Client-Side Rendering</h2>
        <p style={{ marginBottom: 24 }}>Server-side rendering (SSR) generates the full HTML on the server before sending it to the browser. Googlebot sees the complete content in the first crawl wave. Client-side rendering (CSR) sends a near-empty HTML shell and builds the page in the browser using JavaScript. Googlebot must wait for the rendering queue to see the actual content. For SEO, SSR is strongly preferred. Next.js, Nuxt, SvelteKit, and Astro all support SSR out of the box.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Static Site Generation</h2>
        <p style={{ marginBottom: 24 }}>Static site generation (SSG) pre-renders all pages at build time as plain HTML. This is the best option for SEO: Googlebot sees full content immediately, no JS rendering required, and pages load faster. The limitation is that dynamic content (user-specific data, real-time prices) cannot be statically generated. A hybrid approach — SSG for public pages, CSR for authenticated/dynamic sections — gives you the best of both worlds.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Common JavaScript SEO Problems and Fixes</h2>
        <p style={{ marginBottom: 12 }}><strong>Meta tags not in initial HTML:</strong> If your title, description, and canonical tags are injected by JavaScript after page load, Google sees the wrong meta data in wave one. Fix: include all meta tags in the server-rendered HTML. In React, use Next.js metadata or React Helmet with SSR. In Vue/Nuxt, use useHead.</p>
        <p style={{ marginBottom: 12 }}><strong>Internal links built by JavaScript:</strong> Links that are rendered by JS rather than in the initial HTML may not be discovered in the first crawl wave, creating crawl gaps. Fix: render navigation and internal links in server-side HTML. This is particularly important for your main navigation and any links between key pages.</p>
        <p style={{ marginBottom: 12 }}><strong>Infinite scroll pagination:</strong> Content loaded as the user scrolls is not seen by Googlebot. Fix: implement paginated URLs (/page/2, /page/3) and link between them, in addition to or instead of infinite scroll. Google needs discrete URLs to crawl each section of content.</p>
        <p style={{ marginBottom: 24 }}><strong>JS errors blocking rendering:</strong> A single JavaScript error can prevent the entire page from rendering. Use Google Search Console URL Inspection and click "Test Live URL" to see what Google actually renders for your pages. Compare this to what users see.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>How to Check if Google Is Rendering Your JS</h2>
        <p style={{ marginBottom: 24 }}>In Google Search Console, open URL Inspection for any page on your site. Click "Test Live URL" at the top right. This runs a real-time render and shows you the screenshot of what Googlebot sees, the rendered HTML, and any JavaScript errors. If the rendered screenshot shows a blank page or missing content, you have a JS rendering problem that is hurting your indexing.</p>
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Find JS indexing issues in your sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>
    </div>
  );
}
