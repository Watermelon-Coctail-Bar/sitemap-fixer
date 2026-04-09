import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: "Discovered Not Indexed: Why It Happens & Fixes | SitemapFixer",
  description: "Discovered - currently not indexed means Google knows your page exists but has not crawled it yet. Here is why this happens and exactly how to fix it.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/discovered-currently-not-indexed' },
  openGraph: {
    title: 'Discovered Not Indexed: Why It Happens & Fixes',
    description: 'Discovered - currently not indexed means Google knows your page exists but has not crawled it yet. Here is why this happens and exactly how to fix it.',
    url: 'https://sitemapfixer.com/learn/discovered-currently-not-indexed',
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
        <span>Discovered - Currently Not Indexed</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Discovered - Currently Not Indexed: Causes and Fixes</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Find indexing issues in your sitemap free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Site</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        <p style={{ marginBottom: 24 }}>In Google Search Console, "Discovered - currently not indexed" means Google found out your page exists - through your sitemap, an internal link, or another page linking to it - but has not crawled it yet. Unlike "Crawled - currently not indexed" where Google visited and decided not to index, here Google simply has not gotten around to visiting the page yet.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>Why Google Discovers Pages Without Crawling Them</h2>
        <p style={{ marginBottom: 24 }}>Google has a finite crawl budget for each site. When Google discovers more URLs than it can crawl immediately, it queues them for future crawling. New pages on a new or low-authority site often sit in this queue for days or weeks. The same happens on large sites that publish content faster than Google can crawl it, or on sites with crawl budget issues from too many low-value URLs.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>How to Fix It: Speed Up Crawling</h2>

        <h3 style={{ fontSize: 20, fontWeight: 700, color: '#0a0a0f', marginTop: 32, marginBottom: 10 }}>Request indexing in Google Search Console</h3>
        <p style={{ marginBottom: 24 }}>For a handful of important pages, go to Google Search Console, use URL Inspection on each page, and click Request Indexing. This pushes the page to the front of the crawl queue. Google typically crawls requested pages within a few days. Note this only works for pages without technical issues - if the page has a noindex tag or robots.txt block, requesting indexing will not help.</p>

        <h3 style={{ fontSize: 20, fontWeight: 700, color: '#0a0a0f', marginTop: 32, marginBottom: 10 }}>Submit your sitemap with proper lastmod dates</h3>
        <p style={{ marginBottom: 24 }}>Make sure your sitemap includes accurate lastmod dates for all pages. Google prioritizes crawling pages with recent lastmod dates. If your sitemap uses fake or missing lastmod dates, Google stops trusting the signal and crawls less efficiently. Set lastmod to the actual last-modified date of the page content.</p>

        <h3 style={{ fontSize: 20, fontWeight: 700, color: '#0a0a0f', marginTop: 32, marginBottom: 10 }}>Improve your crawl budget by cleaning up low-value URLs</h3>
        <p style={{ marginBottom: 24 }}>If Google is spending crawl budget on low-value pages, your important pages get crawled less frequently. Block or noindex search result pages, filter pages, parameter-based URLs, and other low-value pages via robots.txt or meta robots tags. This frees up budget for pages you actually want indexed. In Google Search Console, go to Settings then Crawl Stats to see where Google is spending its time on your site.</p>

        <h3 style={{ fontSize: 20, fontWeight: 700, color: '#0a0a0f', marginTop: 32, marginBottom: 10 }}>Build internal links to undiscovered pages</h3>
        <p style={{ marginBottom: 24 }}>Pages that are only in your sitemap but have no internal links pointing to them are deprioritized in the crawl queue. Add internal links from high-traffic, frequently-crawled pages to the pages stuck in "discovered - currently not indexed." This creates a crawl path that Google follows naturally during regular crawls.</p>

        <h3 style={{ fontSize: 20, fontWeight: 700, color: '#0a0a0f', marginTop: 32, marginBottom: 10 }}>Build external links</h3>
        <p style={{ marginBottom: 24 }}>For new sites, the single biggest cause of slow crawling is low authority. When reputable external sites link to your domain, Google allocates more crawl budget. Even a handful of quality external links can dramatically accelerate how quickly Google discovers and crawls your new content.</p>

        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#0a0a0f', marginTop: 48, marginBottom: 16 }}>How Long Does It Take to Resolve?</h2>
        <p style={{ marginBottom: 24 }}>For established sites with good authority, "discovered - currently not indexed" usually resolves within a week or two after you use URL Inspection to request crawling. For new sites or sites with low authority, it can take months. If pages stay in this state for more than 4-6 weeks and you have submitted the sitemap, focus on crawl budget optimization and internal linking rather than waiting.</p>
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Check your sitemap for crawl issues</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Sitemap Free</a>
      </div>

        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/learn/pages-not-indexed-google" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Pages Not Indexed by Google: Causes and Fixes</a></li>
            <li><a href="/learn/submitted-url-not-indexed" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Submitted URL Not Indexed: How to Fix in GSC</a></li>
            <li><a href="/learn/crawled-currently-not-indexed" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Crawled Not Indexed: How to Fix It | SitemapFixer</a></li>
            <li><a href="/learn/why-pages-not-indexed" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Why Are My Pages Not Indexed by Google?</a></li>
            <li><a href="/learn/index-coverage-report" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Index Coverage Report in Google Search Console</a></li>
          </ul>
        </div>
    </div>
  );
}
