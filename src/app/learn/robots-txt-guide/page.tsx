import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Robots.txt Guide: How to Write and Test Your Robots.txt',
  description: 'Complete guide to robots.txt. Learn the correct syntax, how to block crawlers, and avoid mistakes that hurt indexing.',
  alternates: { canonical: 'https://sitemapfixer.com/learn/robots-txt-guide' },
  openGraph: {
    title: 'Robots.txt Guide: How to Write and Test Your Robots.txt',
    description: 'Complete guide to robots.txt. Learn the correct syntax, how to block crawlers, and avoid mistakes that hurt indexing.',
    url: 'https://sitemapfixer.com/learn/robots-txt-guide',
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
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Robots.txt Guide</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Robots.txt Guide: Write, Test, and Fix Your Robots.txt</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check if your pages are blocked</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Try SitemapFixer Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.8 }}>
        <p style={{ marginBottom: 20 }}>The robots.txt file tells search engine crawlers which pages to access or skip. It lives at yoursite.com/robots.txt. Note: it controls crawling but not indexing - a page can still be indexed if other sites link to it even when robots.txt blocks crawling.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>Basic Syntax</h2>
        <p style={{ marginBottom: 20 }}>User-agent: * applies to all crawlers. Disallow: /admin/ blocks that path. Allow: /admin/public/ allows a subdirectory within a blocked section. Sitemap: https://yoursite.com/sitemap.xml tells crawlers where your sitemap is. Every robots.txt should include a Sitemap directive.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>What to Block</h2>
        <p style={{ marginBottom: 20 }}>Block admin pages, internal search results, shopping cart and checkout pages, duplicate content from URL parameters, and staging directories. Never block CSS or JavaScript - Googlebot needs them to render pages. Never block your sitemap.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>Robots.txt and Your Sitemap</h2>
        <p style={{ marginBottom: 20 }}>Never include URLs in your sitemap that are blocked by robots.txt. This is one of the most common technical SEO errors. SitemapFixer checks your sitemap against your robots.txt automatically and flags any conflicts.</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginTop: 40, marginBottom: 12 }}>Common Mistakes</h2>
        <p style={{ marginBottom: 20 }}>Disallow: / blocks your entire site. Blocking CSS/JS breaks rendering. Using robots.txt to hide sensitive pages (blocked pages can still be indexed via external links). Forgetting the Sitemap directive. robots.txt is case-sensitive on Linux servers.</p>
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Check your site for blocked pages</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free sitemap and robots.txt analysis</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site</a>
      </div>

        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/learn/robots-txt-examples" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Robots.txt Examples: WordPress, Shopify & More</a></li>
            <li><a href="/learn/crawl-budget" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Crawl Budget: What It Is and How to Optimize It</a></li>
            <li><a href="/learn/google-not-crawling-my-site" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Google Not Crawling My Site? Here Are the Fixes</a></li>
            <li><a href="/learn/crawl-errors-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Crawl Errors: Types, Causes, and How to Fix Each One</a></li>
            <li><a href="/learn/mobile-first-indexing-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Mobile-First Indexing: How to Prepare Your Site</a></li>
          </ul>
        </div>
    </div>
  );
}
