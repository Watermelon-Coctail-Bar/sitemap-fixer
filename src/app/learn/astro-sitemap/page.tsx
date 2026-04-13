import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Astro Sitemap: Using @astrojs/sitemap Integration',
  description: "Astro has an official sitemap integration. Here is how to install it, configure your site URL, exclude pages, and handle dynamic routes for complete sitemap coverage.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/astro-sitemap' },
  openGraph: {
    title: 'Astro Sitemap: Using @astrojs/sitemap Integration',
    description: 'Astro has an official sitemap integration. Here is how to install it, configure your site URL, exclude pages, and handle dynamic routes for complete sitemap coverage.',
    url: 'https://sitemapfixer.com/learn/astro-sitemap',
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"Article","headline":"Astro Sitemap: Using @astrojs/sitemap Integration","description":"Astro has an official sitemap integration. Here is how to install it, configure your site URL, exclude pages, and handle dynamic routes for complete sitemap coverage.","url":"https://sitemapfixer.com/learn/astro-sitemap","author":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com"},"publisher":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com","logo":{"@type":"ImageObject","url":"https://sitemapfixer.com/opengraph-image"}},"datePublished":"2025-01-15","mainEntityOfPage":{"@type":"WebPage","@id":"https://sitemapfixer.com/learn/astro-sitemap"}}' }} />
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Astro Sitemap</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Astro Sitemap: @astrojs/sitemap Integration Guide</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Validate your Astro sitemap free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Check My Sitemap</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        <p style={{ marginBottom: 24 }}>Astro has an official sitemap integration maintained by the Astro team: @astrojs/sitemap. It hooks into the build process, discovers all your static pages automatically, and generates sitemap-index.xml plus individual sitemap files at build time. Because Astro defaults to static generation, the sitemap is a simple static file that loads instantly.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Installation</h2>
        <p style={{ marginBottom: 16 }}>The fastest way: npx astro add sitemap. This installs the package and updates your astro.config.mjs automatically. Or manually: npm install @astrojs/sitemap, then update your config:</p>
        <div style={{ background: '#0a0a0f', borderRadius: 10, padding: '20px 24px', marginBottom: 24, fontFamily: 'monospace', fontSize: 13, color: '#e5e7eb', lineHeight: 1.7, overflowX: 'auto' }}>
          <div style={{ color: '#9ca3af', marginBottom: 8 }}>// astro.config.mjs</div>
          <div>import {"{"} defineConfig {"}"} from "astro/config";</div>
          <div>import sitemap from "@astrojs/sitemap";</div>
          <div style={{ marginTop: 8 }}>export default defineConfig({"{"}</div>
          <div style={{ paddingLeft: 20 }}>site: "https://yoursite.com",</div>
          <div style={{ paddingLeft: 20 }}>integrations: [sitemap()],</div>
          <div>{"}"});</div>
        </div>
        <p style={{ marginBottom: 24 }}>The site option is required - without it the integration cannot build absolute URLs and will throw an error. Run npm run build and your sitemap will appear in the dist/ folder as sitemap-index.xml.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Excluding Pages</h2>
        <div style={{ background: '#0a0a0f', borderRadius: 10, padding: '20px 24px', marginBottom: 24, fontFamily: 'monospace', fontSize: 13, color: '#e5e7eb', lineHeight: 1.7, overflowX: 'auto' }}>
          <div>integrations: [</div>
          <div style={{ paddingLeft: 20 }}>sitemap({"{"}</div>
          <div style={{ paddingLeft: 40 }}>filter: (page) ={">"}</div>
          <div style={{ paddingLeft: 60 }}>!page.includes("/admin/") &&</div>
          <div style={{ paddingLeft: 60 }}>!page.includes("/thank-you"),</div>
          <div style={{ paddingLeft: 20 }}>{"}"})],</div>
        </div>
        <p style={{ marginBottom: 24 }}>The filter function receives the full URL of each page and returns true to include it, false to exclude it. Use this to keep admin pages, API routes, and low-value pages out of your sitemap.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Dynamic Routes and Content Collections</h2>
        <p style={{ marginBottom: 24 }}>Static pages and pages generated from Astro content collections using getStaticPaths() are discovered automatically. The integration crawls your build output, so any page that gets built as an HTML file appears in the sitemap. For SSR (server-rendered) pages, the integration cannot discover URLs automatically since they are not built as static files. You need to manually specify these pages using the customPages option.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Common Astro Sitemap Issues</h2>
        <p style={{ marginBottom: 12 }}><strong>Sitemap missing after build:</strong> If sitemap-index.xml does not appear in dist/, check that the integration is correctly listed in the integrations array and that site is set. Run the build with verbose logging: npx astro build --verbose to see if the integration runs.</p>
        <p style={{ marginBottom: 24 }}><strong>Wrong URLs in sitemap:</strong> If URLs use localhost or a wrong domain, your site config is missing or incorrect. Ensure site in astro.config.mjs matches your exact production domain including https:// and any subdomain. Use environment variables: site: import.meta.env.SITE_URL or process.env.SITE_URL.</p>
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Validate your Astro sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free - checks every URL in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Check My Sitemap Free</a>
      </div>

        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/learn/wordpress-sitemap" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>WordPress Sitemap: Setup, Fix, and Submit Guide</a></li>
            <li><a href="/learn/shopify-sitemap" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Shopify Sitemap: Location, Errors, and How to Submit It</a></li>
            <li><a href="/learn/wix-sitemap" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Wix Sitemap: How It Works and How to Submit It</a></li>
            <li><a href="/learn/squarespace-sitemap" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Squarespace Sitemap: How It Works and Common Fixes</a></li>
            <li><a href="/learn/webflow-sitemap" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Webflow Sitemap: How It Works and How to Submit It</a></li>
          
            <li><a href="/learn/hugo-sitemap" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Hugo Sitemap: How It Works and How to Configure It</a></li></ul>
        </div>
    </div>
  );
}
