import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Find the Sitemap of Any Website',
  description: 'Step-by-step guide to finding the sitemap of any website. Check /sitemap.xml, robots.txt, and 20+ common paths. Works for WordPress, Shopify, and any CMS.',
  keywords: 'how to find sitemap of a website, how to see the sitemap of a website, how to find sitemap, find sitemap url, where is my sitemap, how to check sitemap',
  alternates: { canonical: 'https://sitemapfixer.com/learn/how-to-find-sitemap' },
  openGraph: {
    title: 'How to Find the Sitemap of Any Website',
    description: 'Step-by-step guide to finding the sitemap of any website. Check /sitemap.xml, robots.txt, and 20+ common paths.',
    url: 'https://sitemapfixer.com/learn/how-to-find-sitemap',
    type: 'article',
    images: [{ url: 'https://sitemapfixer.com/opengraph-image', width: 1200, height: 630, alt: 'SitemapFixer - AI Sitemap Checker and SEO Fix Tool' }],
    siteName: 'SitemapFixer',
    locale: 'en_US',
  },
};

const steps = [
  {
    title: 'Try /sitemap.xml',
    content: 'The standard location for a sitemap is at the root of the domain. Open your browser and type example.com/sitemap.xml. If the site follows conventions, you will see an XML file listing all URLs. This works for most WordPress sites (Yoast and Rank Math place it here), Next.js sites, and many other platforms.',
  },
  {
    title: 'Check robots.txt',
    content: 'Go to example.com/robots.txt. Look for a line that says Sitemap: followed by the full URL. This is the official way sites declare their sitemap location. Some sites use non-standard paths like /sitemap_index.xml or /post-sitemap.xml — robots.txt is the only reliable way to find these.',
  },
  {
    title: 'Try Common Sitemap Paths',
    content: 'If /sitemap.xml returns a 404, try these common alternatives:\n\n/sitemap_index.xml (WordPress with Yoast)\n/wp-sitemap.xml (WordPress core sitemap)\n/sitemap/sitemap-index.xml\n/sitemaps/sitemap.xml\n/sitemap1.xml\n/page-sitemap.xml\n/post-sitemap.xml\n\nShopify sites always have their sitemap at /sitemap.xml. Wix uses /sitemap.xml. Squarespace uses /sitemap.xml.',
  },
  {
    title: 'Use Google Search Console',
    content: 'If you own the site, log into Google Search Console and click Sitemaps in the left menu. You will see all sitemaps Google knows about for your site, including any that were auto-discovered. This also shows you the submission date, last read date, and how many URLs were discovered versus indexed.',
  },
  {
    title: 'Use SitemapFixer (Fastest Method)',
    content: 'Enter any domain in SitemapFixer and we check all 20+ common sitemap paths automatically. We also parse robots.txt, follow sitemap index references, and handle compressed sitemaps. You get the full URL list in under 60 seconds — plus an AI-powered SEO analysis of your sitemap structure.',
  },
  {
    title: 'Google the Sitemap',
    content: 'As a last resort, search Google for site:example.com filetype:xml. This can surface sitemaps that are linked from pages but not at standard paths. You can also try site:example.com sitemap to find pages that reference or link to the sitemap.',
  },
];

const cmsPaths = [
  { cms: 'WordPress (Yoast)', path: '/sitemap_index.xml' },
  { cms: 'WordPress (Rank Math)', path: '/sitemap_index.xml' },
  { cms: 'WordPress (Core)', path: '/wp-sitemap.xml' },
  { cms: 'Shopify', path: '/sitemap.xml' },
  { cms: 'Wix', path: '/sitemap.xml' },
  { cms: 'Squarespace', path: '/sitemap.xml' },
  { cms: 'Webflow', path: '/sitemap.xml' },
  { cms: 'Next.js', path: '/sitemap.xml' },
  { cms: 'Ghost', path: '/sitemap.xml' },
  { cms: 'Drupal', path: '/sitemap.xml' },
];

export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"Article","headline":"How to Find the Sitemap of Any Website","description":"Step-by-step guide to finding the sitemap of any website. Check /sitemap.xml, robots.txt, and 20+ common paths. Works for WordPress, Shopify, and any CMS.","url":"https://sitemapfixer.com/learn/how-to-find-sitemap","author":{"@type":"Person","name":"Arnoldas Arny","url":"https://sitemapfixer.com/about"},"publisher":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com","logo":{"@type":"ImageObject","url":"https://sitemapfixer.com/opengraph-image"}},"datePublished":"2025-01-15","mainEntityOfPage":{"@type":"WebPage","@id":"https://sitemapfixer.com/learn/how-to-find-sitemap"}}' }} />
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>How to Find a Sitemap</span>
      </nav>
      <div style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 16 }}>By <a href="/about" style={{ color: '#2d5be3', textDecoration: 'none' }}>Arnoldas Arny</a></div>

      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>
        How to Find the Sitemap of Any Website
      </h1>

      <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 40 }}>
        Every website should have an XML sitemap, but finding it is not always straightforward. Here is how to find the sitemap of any website, step by step — whether you are auditing a competitor, checking a client site, or troubleshooting your own.
      </p>

      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <div>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 4 }}>Find any sitemap instantly</div>
          <div style={{ fontSize: 13, color: '#6b6b7d' }}>We check 20+ paths automatically — enter any domain</div>
        </div>
        <a href="/sitemap-finder" style={{ background: '#0a0a0f', color: 'white', padding: '12px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 14, whiteSpace: 'nowrap' }}>
          Find Sitemap →
        </a>
      </div>

      {steps.map((step, i) => (
        <div key={i} style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#0a0a0f', marginBottom: 12 }}>
            {i + 1}. {step.title}
          </h2>
          <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, whiteSpace: 'pre-line' }}>{step.content}</p>
        </div>
      ))}

      {/* CMS reference table */}
      <h2 style={{ fontSize: 22, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, marginTop: 48 }}>
        Sitemap Paths by Platform
      </h2>
      <div style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 10, overflow: 'hidden', marginBottom: 48 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #e4e4ed' }}>
              <th style={{ textAlign: 'left', padding: '10px 16px', fontSize: 12, fontWeight: 600, color: '#6b6b7d', textTransform: 'uppercase' }}>Platform</th>
              <th style={{ textAlign: 'left', padding: '10px 16px', fontSize: 12, fontWeight: 600, color: '#6b6b7d', textTransform: 'uppercase' }}>Default Sitemap Path</th>
            </tr>
          </thead>
          <tbody>
            {cmsPaths.map((row, i) => (
              <tr key={i} style={{ borderBottom: i < cmsPaths.length - 1 ? '1px solid #e4e4ed' : 'none' }}>
                <td style={{ padding: '8px 16px', color: '#0a0a0f' }}>{row.cms}</td>
                <td style={{ padding: '8px 16px', fontFamily: "'DM Mono', monospace", color: '#2d5be3', fontSize: 13 }}>{row.path}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
        <div style={{ fontSize: 22, fontWeight: 700, color: 'white', marginBottom: 8 }}>Stop guessing — find your sitemap now</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Enter any domain and get the sitemap URL + full SEO audit in 60 seconds</div>
        <a href="/sitemap-finder" style={{ background: 'white', color: '#0a0a0f', padding: '14px 32px', borderRadius: 8, textDecoration: 'none', fontWeight: 700, fontSize: 15 }}>
          Find My Sitemap Free →
        </a>
      </div>

      <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <li><a href="/learn/find-all-pages-on-a-website" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>How to Find All Pages on a Website</a></li>
          <li><a href="/learn/what-is-an-xml-sitemap" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>What Is an XML Sitemap?</a></li>
          <li><a href="/learn/robots-txt-guide" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Robots.txt Guide</a></li>
          <li><a href="/learn/sitemap-not-working" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Sitemap Not Working</a></li>
          <li><a href="/blog/submit-sitemap-google" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>How to Submit a Sitemap to Google</a></li>
        
            <li><a href="/learn/submit-sitemap-bing" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>How to Submit Your Sitemap to Bing Webmaster Tools</a></li></ul>
      </div>
    </div>
  );
}
