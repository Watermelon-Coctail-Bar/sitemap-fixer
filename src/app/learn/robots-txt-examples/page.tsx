import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Robots.txt Examples: Templates for WordPress, Shopify, and More | SitemapFixer',
  description: "Ready-to-use robots.txt examples for WordPress, Shopify, Next.js, and general sites. Each template explains what each rule does and why.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/robots-txt-examples' },
};
const examples = [
  {
    label: "Minimal — allow everything, declare sitemap",
    code: "User-agent: *\nAllow: /\n\nSitemap: https://yoursite.com/sitemap.xml",
    desc: "The simplest correct robots.txt. Allows all crawlers, declares your sitemap location. Use this if you have no pages to block."
  },
  {
    label: "WordPress",
    code: "User-agent: *\nDisallow: /wp-admin/\nDisallow: /wp-includes/\nDisallow: /wp-login.php\nDisallow: /?s=\nAllow: /wp-admin/admin-ajax.php\n\nSitemap: https://yoursite.com/sitemap_index.xml",
    desc: "Blocks WordPress admin, includes, and login. Allows admin-ajax.php (needed for dynamic frontend features). Blocks search result pages (?s=). Declares Yoast sitemap location."
  },
  {
    label: "Shopify",
    code: "User-agent: *\nDisallow: /admin\nDisallow: /cart\nDisallow: /orders\nDisallow: /checkouts\nDisallow: /account\nDisallow: /*?*sort_by\nDisallow: /*?*view\n\nSitemap: https://yourstore.myshopify.com/sitemap.xml",
    desc: "Blocks Shopify admin, cart, checkout, and account pages. Blocks common sort and view parameters that create URL variants. Shopify generates this automatically but customizing reduces crawl waste."
  },
  {
    label: "Next.js / Vercel",
    code: "User-agent: *\nAllow: /\nDisallow: /api/\nDisallow: /_next/\n\nSitemap: https://yoursite.com/sitemap.xml",
    desc: "Blocks API routes and Next.js internal routes from crawling. All public pages remain accessible. Adjust /api/ if you have public API documentation pages you want indexed."
  },
  {
    label: "Block specific bots (AI scrapers)",
    code: "User-agent: GPTBot\nDisallow: /\n\nUser-agent: ChatGPT-User\nDisallow: /\n\nUser-agent: CCBot\nDisallow: /\n\nUser-agent: anthropic-ai\nDisallow: /\n\nUser-agent: *\nAllow: /\n\nSitemap: https://yoursite.com/sitemap.xml",
    desc: "Blocks known AI training crawlers while keeping Google, Bing, and other search engines. Place specific bot rules before the wildcard * rule. Note: these bots are not required to respect robots.txt."
  },
];
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Robots.txt Examples</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Robots.txt Examples and Templates</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your robots.txt for conflicts free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Site Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        <p style={{ marginBottom: 32 }}>Copy the template that matches your platform and customize as needed. Every robots.txt should reference your sitemap URL at the bottom and be tested with Google Search Console URL Inspection after any changes.</p>
        {examples.map(({ label, code, desc }) => (
          <div key={label} style={{ marginBottom: 40 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: '#0a0a0f', marginBottom: 12 }}>{label}</h2>
            <div style={{ background: '#0a0a0f', borderRadius: 10, padding: '20px 24px', marginBottom: 12, fontFamily: 'monospace', fontSize: 13, color: '#e5e7eb', lineHeight: 1.8, whiteSpace: 'pre-wrap', overflowX: 'auto' }}>{code.replace(/\n/g, '
')}</div>
            <p style={{ margin: 0, fontSize: 14, color: '#6b6b7d' }}>{desc}</p>
          </div>
        ))}
        <div style={{ marginTop: 48 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>The Most Dangerous Robots.txt Rule</h2>
          <div style={{ background: '#fee2e2', borderRadius: 10, padding: '16px 20px', marginBottom: 16, fontFamily: 'monospace', fontSize: 14, color: '#991b1b' }}>User-agent: * {'
'}Disallow: /</div>
          <p>This blocks Google from crawling your entire site. It is commonly left in robots.txt after development and causes zero organic traffic. Check your live robots.txt at yoursite.com/robots.txt immediately if you suspect this is present.</p>
        </div>
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Check for robots.txt conflicts in your sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free — detects conflicts in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>
    </div>
  );
}
