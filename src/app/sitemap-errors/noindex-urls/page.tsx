import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Noindex URLs in Sitemap: Fix Guide',
  description: 'Find URLs with noindex meta tags or X-Robots-Tag headers listed in your sitemap. These conflicting signals waste crawl budget and confuse Google.',
  keywords: 'noindex URLs sitemap, sitemap noindex conflict, X-Robots-Tag sitemap, meta robots noindex sitemap, GSC excluded by noindex, robots meta noindex',
  alternates: { canonical: 'https://sitemapfixer.com/sitemap-errors/noindex-urls' },
  openGraph: {
    title: 'Noindex URLs in Sitemap - Fix & Best Practices',
    description: 'Find URLs with noindex meta tags or X-Robots-Tag headers listed in your sitemap. These conflicting signals waste crawl budget and confuse Google.',
    url: 'https://sitemapfixer.com/sitemap-errors/noindex-urls',
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
  const faqSchema = "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Why would a URL have noindex but still be in the sitemap?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Usually it's unintentional - staging pages that went live with their noindex tag intact, plugin defaults that add noindex to archive/tag/author pages, or dynamic sitemap generators that don't check the meta robots tag before including a URL.\"}},{\"@type\":\"Question\",\"name\":\"Will Google penalize my sitemap for including noindex URLs?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Not directly, but it's a quality signal. John Mueller has said sitemaps should list pages you want indexed - noindex URLs waste crawl budget and reduce the signal quality of the entire sitemap.\"}},{\"@type\":\"Question\",\"name\":\"Is noindex in a meta tag the same as X-Robots-Tag: noindex?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes, they have identical effects. The HTTP header version (X-Robots-Tag) is useful for non-HTML files like PDFs, while the meta tag works for HTML pages. Both must be checked when auditing a sitemap.\"}}]}";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'Noindex URLs in Sitemap: Fix Guide', description: 'Find URLs with noindex meta tags or X-Robots-Tag headers listed in your sitemap. These conflicting signals waste crawl budget and confuse Google.', url: 'https://sitemapfixer.com/sitemap-errors/noindex-urls', author: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com' }, publisher: { '@type': 'Organization', name: 'SitemapFixer', url: 'https://sitemapfixer.com', logo: { '@type': 'ImageObject', url: 'https://sitemapfixer.com/opengraph-image' } }, datePublished: '2026-04-17', mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://sitemapfixer.com/sitemap-errors/noindex-urls' } }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sitemapfixer.com/' }, { '@type': 'ListItem', position: 2, name: 'Sitemap Errors', item: 'https://sitemapfixer.com/sitemap-errors' }, { '@type': 'ListItem', position: 3, name: 'Noindex URLs in Sitemap: Fix Guide', item: 'https://sitemapfixer.com/sitemap-errors/noindex-urls' }] }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqSchema }}
      />
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px', fontFamily: 'Geist, sans-serif' }}>
        <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
          <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>
          {' / '}
          <a href="/sitemap-errors" style={{ color: '#2d5be3', textDecoration: 'none' }}>Sitemap Errors</a>
          {' / '}
          <span>Noindex URLs</span>
        </nav>

        <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>
          URLs with Noindex Tag in Your Sitemap
        </h1>

        <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 40 }}>
          A sitemap is your list of URLs you want Google to index. When a page in that list carries <code>&lt;meta name="robots" content="noindex"&gt;</code> or an <code>X-Robots-Tag: noindex</code> HTTP header, you&apos;re explicitly contradicting yourself: "please crawl this, but also, do not index it." Google drops these URLs and treats the sitemap as noisier than it should be.
        </p>

        <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 4 }}>Find noindex URLs in your sitemap</div>
            <div style={{ fontSize: 13, color: '#6b6b7d' }}>We check both the meta tag and HTTP headers for every URL</div>
          </div>
          <a href="/" style={{ background: '#0a0a0f', color: 'white', padding: '12px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 14, whiteSpace: 'nowrap' }}>
            Analyze My Sitemap
          </a>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>What is this error?</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>A noindex-in-sitemap error means a URL appears in your sitemap.xml but its page instructs search engines not to index it. Noindex can come from two places: an HTML meta tag (<code>&lt;meta name="robots" content="noindex"&gt;</code>) or an HTTP response header (<code>X-Robots-Tag: noindex</code>). Search Console reports these as "Excluded by &apos;noindex&apos; tag" in the Pages report.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Why does it happen?</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>Common causes: WordPress pages accidentally set to "Discourage search engines" in Settings → Reading; staging environments pushed to production with noindex still active; SEO plugins (Yoast, Rank Math) applying noindex to category/tag/author archives; CDN rules or server-level X-Robots-Tag headers that weren&apos;t updated; and CMS "draft" or "hidden" pages that still appear in auto-generated sitemaps.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Why does it hurt SEO?</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>Every noindex URL in your sitemap is a wasted entry. Google crawls it, processes the noindex directive, and discards the URL - but still "paid" crawl budget to do so. If a meaningful share of your sitemap (say 10%+) is noindex, Google&apos;s trust in the sitemap as a discovery signal drops, meaning your genuinely indexable URLs get crawled less frequently.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How to detect it</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>Search Console&apos;s Pages → "Excluded by &apos;noindex&apos; tag" section lists all affected URLs, though it may take weeks to surface new cases. Sitemap Fixer fetches each URL and checks both the <code>&lt;meta name="robots"&gt;</code> tag and the <code>X-Robots-Tag</code> header in the HTTP response, giving you the full picture immediately.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How to fix it</h2>
        <div style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
          <pre style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: '#1c1c26', whiteSpace: 'pre-wrap', fontFamily: 'DM Mono, monospace' }}>1. Decide intent: should this URL be indexed? If yes, remove the noindex tag. If no, remove from sitemap.
2. For WordPress: check Settings → Reading and uncheck "Discourage search engines."
3. For SEO plugins: audit Yoast/Rank Math taxonomy settings for auto-noindex on tags/categories.
4. For server headers: check .htaccess, nginx.conf, or CDN rules for X-Robots-Tag directives.
5. Regenerate the sitemap from a source of truth that excludes noindex pages by default.
6. Resubmit in Search Console and watch the "Excluded by &apos;noindex&apos;" count drop over 2-3 weeks.</pre>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Real-world example</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>A B2B SaaS relaunched their site and forgot to toggle off WordPress&apos; "Discourage search engines" setting. Their sitemap listed 320 URLs, every one of which carried noindex. Traffic collapsed 87% in two weeks. After removing the site-wide noindex and resubmitting the sitemap, indexing recovered over 6 weeks.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common mistakes</h2>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 32 }}>
          <li style={{ marginBottom: 8 }}>Checking only the HTML meta tag and forgetting X-Robots-Tag HTTP headers</li>
          <li style={{ marginBottom: 8 }}>Blocking the URL in robots.txt - Google can&apos;t see the noindex if it can&apos;t crawl</li>
          <li style={{ marginBottom: 8 }}>Leaving noindex on staging/preview domains that get copied to production</li>
        </ul>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, marginTop: 40 }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Why would a URL have noindex but still be in the sitemap?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Usually it&apos;s unintentional - staging pages that went live with their noindex tag intact, plugin defaults that add noindex to archive/tag/author pages, or dynamic sitemap generators that don&apos;t check the meta robots tag before including a URL.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Will Google penalize my sitemap for including noindex URLs?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Not directly, but it&apos;s a quality signal. John Mueller has said sitemaps should list pages you want indexed - noindex URLs waste crawl budget and reduce the signal quality of the entire sitemap.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Is noindex in a meta tag the same as X-Robots-Tag: noindex?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Yes, they have identical effects. The HTTP header version (X-Robots-Tag) is useful for non-HTML files like PDFs, while the meta tag works for HTML pages. Both must be checked when auditing a sitemap.</div>
          </div>
        </div>

        <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
          <div style={{ fontSize: 22, fontWeight: 700, color: 'white', marginBottom: 8 }}>Fix this in your sitemap now</div>
          <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Enter your domain and get a full sitemap audit in 60 seconds</div>
          <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 32px', borderRadius: 8, textDecoration: 'none', fontWeight: 700, fontSize: 15 }}>
            Analyze My Sitemap Free
          </a>
        </div>

        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Related sitemap errors</div>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <li><a href="/sitemap-errors/blocked-by-robots-txt" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Blocked by Robots.txt</a></li>
            <li><a href="/sitemap-errors/non-canonical-urls" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Non-canonical URLs</a></li>
            <li><a href="/sitemap-errors/4xx-5xx-urls" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>4xx/5xx URLs</a></li>
          </ul>
          <div style={{ marginTop: 16 }}>
            <a href="/sitemap-errors" style={{ color: '#2d5be3', fontSize: 13 }}> All sitemap errors</a>
          </div>
        </div>
      </div>
    </>
  );
}
