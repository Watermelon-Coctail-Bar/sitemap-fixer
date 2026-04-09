import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Orphan Pages in Sitemap: Fix Guide',
  description: 'Orphan pages have no internal links - they rely entirely on your sitemap for discovery. Learn how to detect orphan pages and fix your internal linking structure.',
  alternates: { canonical: 'https://sitemapfixer.com/sitemap-errors/orphan-pages' },
  openGraph: {
    title: 'Orphan Pages in Sitemap - Fix & Best Practices',
    description: 'Orphan pages have no internal links - they rely entirely on your sitemap for discovery. Learn how to detect orphan pages and fix your internal linking structure.',
    url: 'https://sitemapfixer.com/sitemap-errors/orphan-pages',
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
  const faqSchema = "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"If a page is in my sitemap, will Google index it?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Possibly, but without internal links it receives low crawl priority and no PageRank, making it unlikely to rank.\"}},{\"@type\":\"Question\",\"name\":\"How many internal links does a page need?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"At minimum 2-3 contextual internal links from topically related pages. Navigation links alone are not sufficient.\"}},{\"@type\":\"Question\",\"name\":\"Should I remove orphan pages from my sitemap?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"First fix the orphan status by adding internal links. If the page has no value, delete it and remove from sitemap.\"}}]}";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqSchema }}
      />
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px', fontFamily: 'Geist, sans-serif' }}>
        {/* Breadcrumb */}
        <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
          <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>
          {'  '}
          <a href="/sitemap-errors" style={{ color: '#2d5be3', textDecoration: 'none' }}>Sitemap Errors</a>
          {'  '}
          <span>Orphan Pages in Sitemap</span>
        </nav>

        <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>
          Orphan Pages Detected in Your Sitemap
        </h1>

        <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 40 }}>
          Orphan pages - pages that exist in your sitemap but have no internal links pointing to them - are a hidden SEO problem. They get crawled once via the sitemap, but without internal links, they receive no PageRank, no contextual signals, and often no rankings.
        </p>

        {/* CTA Box */}
        <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 4 }}>Find this error in your sitemap</div>
            <div style={{ fontSize: 13, color: '#6b6b7d' }}>Analyze your sitemap for free - get a full report in 60 seconds</div>
          </div>
          <a href="/" style={{ background: '#0a0a0f', color: 'white', padding: '12px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 14, whiteSpace: 'nowrap' }}>
            Analyze My Sitemap 
          </a>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>What is this error?</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>An orphan page is a URL that appears in your sitemap but cannot be reached by following links from any other page on your site. These pages are invisible to users and receive no link equity from the rest of your site.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Why does it happen?</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>Orphan pages are created when content is published without being linked from navigation, blog archives, or related content sections. They also appear after site redesigns when internal link structures change but old content remains.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Why does it hurt SEO?</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>Without internal links, orphan pages receive no PageRank distribution from your site. Google may discover them via the sitemap but assigns them low authority. They rarely rank for competitive terms and often get crawled infrequently.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How to detect it</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>Sitemap Fixer cross-references your sitemap URLs against your site's link graph to identify pages that have zero internal links pointing to them.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>How to fix it</h2>
        <div style={{ background: '#f8f8fb', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
          <pre style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: '#1c1c26', whiteSpace: 'pre-wrap', fontFamily: 'DM Mono, monospace' }}>1. Audit all orphan pages to determine if they should be kept, merged, or deleted.
2. For pages worth keeping: add internal links from relevant hub pages, blog posts, and navigation.
3. Create topic cluster structures where pillar pages link to related content.
4. For thin orphan pages: consider consolidating into stronger existing pages.
5. Update your content publishing workflow to require at least 2-3 internal links per new page.</pre>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Real-world example</h2>
        <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 32 }}>A SaaS blog had 89 orphan articles - published but never linked from anywhere. Adding contextual internal links to those pages from related articles increased their organic traffic by 156% over 3 months.</p>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 12, marginTop: 40 }}>Common mistakes</h2>
        <ul style={{ paddingLeft: 24, color: '#3d3d4f', lineHeight: 1.8, marginBottom: 32 }}>
          <li style={{ marginBottom: 8 }}>Publishing content without adding internal links at time of publication</li>
          <li style={{ marginBottom: 8 }}>Ignoring orphan pages after site redesigns</li>
          <li style={{ marginBottom: 8 }}>Treating sitemap inclusion as a substitute for internal linking</li>
        </ul>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 20, marginTop: 40 }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>If a page is in my sitemap, will Google index it?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>Possibly, but without internal links it receives low crawl priority and no PageRank, making it unlikely to rank.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>How many internal links does a page need?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>At minimum 2-3 contextual internal links from topically related pages. Navigation links alone are not sufficient.</div>
          </div>
          <div style={{ borderBottom: '1px solid #e4e4ed', paddingBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8 }}>Should I remove orphan pages from my sitemap?</div>
            <div style={{ color: '#6b6b7d', lineHeight: 1.6 }}>First fix the orphan status by adding internal links. If the page has no value, delete it and remove from sitemap.</div>
          </div>
        </div>

        {/* Final CTA */}
        <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
          <div style={{ fontSize: 22, fontWeight: 700, color: 'white', marginBottom: 8 }}>Fix this in your sitemap now</div>
          <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Enter your domain and get a full sitemap audit in 60 seconds</div>
          <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 32px', borderRadius: 8, textDecoration: 'none', fontWeight: 700, fontSize: 15 }}>
            Analyze My Sitemap Free 
          </a>
        </div>

        {/* Related */}
        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 16 }}>Related sitemap errors</div>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <li><a href="/sitemap-errors/duplicate-urls" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Duplicate Urls</a></li>
            <li><a href="/sitemap-errors/invalid-urls" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Invalid Urls</a></li>
            <li><a href="/sitemap-errors/incorrect-priority" style={{ color: '#2d5be3', textDecoration: 'none', background: '#eef1ff', padding: '6px 14px', borderRadius: 6, fontSize: 13 }}>Incorrect Priority</a></li>
          </ul>
          <div style={{ marginTop: 16 }}>
            <a href="/sitemap-errors" style={{ color: '#2d5be3', fontSize: 13 }}> All sitemap errors</a>
          </div>
        </div>
      </div>
    </>
  );
}
