import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Next.js Sitemap: App Router and Pages Router',
  description: "How to generate an XML sitemap in Next.js using the built-in sitemap.ts file (App Router) or the next-sitemap package. With working code examples.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/nextjs-sitemap' },
  openGraph: {
    title: 'Next.js Sitemap: App Router and Pages Router',
    description: 'How to generate an XML sitemap in Next.js using the built-in sitemap.ts file (App Router) or the next-sitemap package (Pages Router).',
    url: 'https://sitemapfixer.com/learn/nextjs-sitemap',
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"Article","headline":"Next.js Sitemap: App Router and Pages Router","description":"How to generate an XML sitemap in Next.js using the built-in sitemap.ts file (App Router) or the next-sitemap package (Pages Router).","url":"https://sitemapfixer.com/learn/nextjs-sitemap","author":{"@type":"Person","name":"Arnoldas Arny","url":"https://sitemapfixer.com/about"},"publisher":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com","logo":{"@type":"ImageObject","url":"https://sitemapfixer.com/opengraph-image"}},"datePublished":"2025-01-15","mainEntityOfPage":{"@type":"WebPage","@id":"https://sitemapfixer.com/learn/nextjs-sitemap"}}' }} />
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Next.js Sitemap</span>
      </nav>
      <div style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 16 }}>By <a href="/about" style={{ color: '#2d5be3', textDecoration: 'none' }}>Arnoldas Arny</a></div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Next.js Sitemap: App Router and Pages Router Methods</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Validate your Next.js sitemap free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Check My Sitemap</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        <p style={{ marginBottom: 24 }}>Next.js does not generate a sitemap automatically. You need to add one yourself. The method depends on which router you are using. The App Router (Next.js 13.2+) has a built-in sitemap convention. The Pages Router requires either a manual setup or the next-sitemap package.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>App Router: Built-in sitemap.ts (Recommended)</h2>
        <p style={{ marginBottom: 16 }}>In the App Router, create a file at app/sitemap.ts. Next.js automatically serves its output at /sitemap.xml. This is the cleanest approach with no extra dependencies.</p>
        <div style={{ background: '#0a0a0f', borderRadius: 10, padding: '20px 24px', marginBottom: 24, fontFamily: 'monospace', fontSize: 13, color: '#e5e7eb', lineHeight: 1.7, overflowX: 'auto' }}>
          <div style={{ color: '#9ca3af', marginBottom: 8 }}>// app/sitemap.ts</div>
          <div>import type {"{"} MetadataRoute {"}"} from {"'next'"};</div>
          <div style={{ marginTop: 8 }}>export default function sitemap(): MetadataRoute.Sitemap {"{"}</div>
          <div style={{ paddingLeft: 20 }}>return [</div>
          <div style={{ paddingLeft: 40 }}>{"{"}
            <div style={{ paddingLeft: 20 }}>url: {"'https://yoursite.com'"},</div>
            <div style={{ paddingLeft: 20 }}>lastModified: new Date(),</div>
            <div style={{ paddingLeft: 20 }}>changeFrequency: {"'daily'"},</div>
            <div style={{ paddingLeft: 20 }}>priority: 1,</div>
          {"}"}</div>
          <div style={{ paddingLeft: 40 }}>{"{"}
            <div style={{ paddingLeft: 20 }}>url: {"'https://yoursite.com/about'"},</div>
            <div style={{ paddingLeft: 20 }}>lastModified: new Date(),</div>
            <div style={{ paddingLeft: 20 }}>changeFrequency: {"'monthly'"},</div>
            <div style={{ paddingLeft: 20 }}>priority: 0.8,</div>
          {"}"}</div>
          <div style={{ paddingLeft: 20 }}>];</div>
          <div>{"}"}</div>
        </div>
        <p style={{ marginBottom: 24 }}>For dynamic routes - like blog posts fetched from a database - fetch your data inside the sitemap function and map the results to URL entries. The sitemap function can be async, so you can use fetch or query your database directly.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Pages Router: next-sitemap Package</h2>
        <p style={{ marginBottom: 16 }}>Install with: npm install next-sitemap. Then create a next-sitemap.config.js at your project root.</p>
        <div style={{ background: '#0a0a0f', borderRadius: 10, padding: '20px 24px', marginBottom: 24, fontFamily: 'monospace', fontSize: 13, color: '#e5e7eb', lineHeight: 1.7, overflowX: 'auto' }}>
          <div style={{ color: '#9ca3af', marginBottom: 8 }}>// next-sitemap.config.js</div>
          <div>{"/** @type {import('next-sitemap').IConfig} */"}</div>
          <div>module.exports = {"{"}</div>
          <div style={{ paddingLeft: 20 }}>siteUrl: process.env.SITE_URL || {"'https://yoursite.com'"},</div>
          <div style={{ paddingLeft: 20 }}>generateRobotsTxt: true,</div>
          <div style={{ paddingLeft: 20 }}>exclude: [{"'/admin/*'"},{"'/api/*'"}],</div>
          <div>{"}"}</div>
        </div>
        <p style={{ marginBottom: 24 }}>Add "postbuild": "next-sitemap" to your package.json scripts. This generates sitemap.xml and robots.txt in your public folder after every build. The sitemap is then served as a static file.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Common Next.js Sitemap Problems</h2>

        <h3 style={{ fontSize: 20, fontWeight: 700, color: '#0a0a0f', marginTop: 32, marginBottom: 10 }}>Dynamic routes missing from sitemap</h3>
        <p style={{ marginBottom: 24 }}>Static pages (about, contact) are easy to add manually. Dynamic routes like blog posts at /blog/[slug] require you to fetch all slugs at build time and generate a URL entry for each. In the App Router, call your database or CMS API inside the sitemap function. In next-sitemap, use the additionalPaths option or a custom transform function.</p>

        <h3 style={{ fontSize: 20, fontWeight: 700, color: '#0a0a0f', marginTop: 32, marginBottom: 10 }}>Sitemap showing localhost URLs</h3>
        <p style={{ marginBottom: 24 }}>If your sitemap contains http://localhost:3000 URLs, your NEXT_PUBLIC_SITE_URL or siteUrl config is missing or wrong. Set an environment variable in your deployment (SITE_URL=https://yoursite.com) and make sure your sitemap function uses that variable as the base URL. On Vercel, add SITE_URL to your project environment variables.</p>

        <h3 style={{ fontSize: 20, fontWeight: 700, color: '#0a0a0f', marginTop: 32, marginBottom: 10 }}>Sitemap not updating after new content</h3>
        <p style={{ marginBottom: 24 }}>In the App Router, the sitemap function runs at request time by default but can be cached. If new content is not appearing, check your revalidation settings. Add export const revalidate = 3600 to your sitemap.ts to revalidate every hour. For next-sitemap with the Pages Router, the sitemap is regenerated on every build - you need to trigger a new build to update it.</p>
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Check your Next.js sitemap is working</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free - validates every URL in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Sitemap Free</a>
      </div>

        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/learn/wordpress-sitemap" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>WordPress Sitemap: Setup, Fix, and Submit Guide</a></li>
            <li><a href="/learn/shopify-sitemap" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Shopify Sitemap: Location, Errors, and How to Submit It</a></li>
            <li><a href="/learn/wix-sitemap" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Wix Sitemap: How It Works and How to Submit It</a></li>
            <li><a href="/learn/squarespace-sitemap" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Squarespace Sitemap: How It Works and Common Fixes</a></li>
            <li><a href="/learn/webflow-sitemap" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Webflow Sitemap: How It Works and How to Submit It</a></li>
          
            <li><a href="/learn/django-sitemap" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Django Sitemap: Using the Built-in Sitemaps Framework</a></li></ul>
        </div>
    </div>
  );
}
