import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Find All Pages on a Website',
  description: 'Learn how to find all pages on a website using sitemaps, Google Search Console, site: operator, and crawling tools. See every URL on any site instantly.',
  keywords: 'find all pages on a website, how to see all pages on a website, list all pages on a website, find all urls on a website, website page finder',
  alternates: { canonical: 'https://sitemapfixer.com/learn/find-all-pages-on-a-website' },
  openGraph: {
    title: 'How to Find All Pages on a Website',
    description: 'Learn how to find all pages on a website using sitemaps, Google Search Console, site: operator, and crawling tools.',
    url: 'https://sitemapfixer.com/learn/find-all-pages-on-a-website',
    type: 'article',
    images: [{ url: 'https://sitemapfixer.com/opengraph-image', width: 1200, height: 630, alt: 'SitemapFixer - AI Sitemap Checker and SEO Fix Tool' }],
    siteName: 'SitemapFixer',
    locale: 'en_US',
  },
};

const methods = [
  {
    title: 'Check the XML Sitemap',
    content: 'The fastest way to find all pages on a website is to check its XML sitemap. Most sites have one at /sitemap.xml. Open your browser and go to example.com/sitemap.xml — you will see every URL the site wants search engines to index. If the sitemap uses a sitemap index file, it will link to child sitemaps organized by section (blog, products, pages). This is the most complete and reliable method because site owners explicitly list the pages they consider important.',
  },
  {
    title: 'Use a Sitemap Finder Tool',
    content: 'Not every site has its sitemap at /sitemap.xml. Some use /sitemap_index.xml, /wp-sitemap.xml, or reference it only in robots.txt. A sitemap finder tool checks all 20+ common locations automatically. Enter any domain in SitemapFixer and we will discover the sitemap, parse every URL, and show you the complete list grouped by section — no manual searching required.',
  },
  {
    title: 'Google site: Operator',
    content: 'Type site:example.com into Google Search to see all indexed pages. This shows you what Google has found, which may differ from the sitemap. Pages that appear in the site: results but not the sitemap are discoverable through links. Pages in the sitemap but not in site: results may have indexing issues. Comparing these two lists is a powerful SEO diagnostic technique.',
  },
  {
    title: 'Google Search Console',
    content: 'If you own the site, Google Search Console provides the most accurate view. The Pages report shows every URL Google knows about, its indexing status, and any issues. The Sitemaps section shows which URLs were submitted versus indexed. This is the authoritative source — but it only works for sites you have verified ownership of.',
  },
  {
    title: 'Crawl the Website',
    content: 'Tools like Screaming Frog, Ahrefs Site Audit, or Sitebulb crawl a website by following every link from the homepage. This discovers pages that may not be in the sitemap and identifies orphan pages (pages with no internal links). Crawling is thorough but slow for large sites and requires desktop software. For a quick alternative, SitemapFixer parses your sitemap and identifies structural issues in 60 seconds.',
  },
  {
    title: 'Check robots.txt',
    content: 'The robots.txt file at example.com/robots.txt often references the sitemap URL directly. It also shows which sections of the site are blocked from crawling. If a section is disallowed in robots.txt, those pages will not appear in Google search results regardless of whether they are in the sitemap.',
  },
];

export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"Article","headline":"How to Find All Pages on a Website","description":"Learn how to find all pages on a website using sitemaps, Google Search Console, site: operator, and crawling tools. See every URL on any site instantly.","url":"https://sitemapfixer.com/learn/find-all-pages-on-a-website","author":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com"},"publisher":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com","logo":{"@type":"ImageObject","url":"https://sitemapfixer.com/opengraph-image"}},"datePublished":"2025-01-15","mainEntityOfPage":{"@type":"WebPage","@id":"https://sitemapfixer.com/learn/find-all-pages-on-a-website"}}' }} />
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Find All Pages on a Website</span>
      </nav>

      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>
        How to Find All Pages on a Website
      </h1>

      <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 40 }}>
        Whether you are auditing your own site or researching a competitor, knowing how to find all pages on a website is a fundamental SEO skill. Here are the six most reliable methods, from fastest to most thorough.
      </p>

      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <div>
          <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 4 }}>Find all pages on any website instantly</div>
          <div style={{ fontSize: 13, color: '#6b6b7d' }}>Enter a domain — we find the sitemap and list every URL in 60 seconds</div>
        </div>
        <a href="/" style={{ background: '#0a0a0f', color: 'white', padding: '12px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 14, whiteSpace: 'nowrap' }}>
          Find All Pages →
        </a>
      </div>

      {methods.map((method, i) => (
        <div key={i} style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#0a0a0f', marginBottom: 12 }}>
            {i + 1}. {method.title}
          </h2>
          <p style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.7 }}>{method.content}</p>
        </div>
      ))}

      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 48 }}>
        <div style={{ fontSize: 22, fontWeight: 700, color: 'white', marginBottom: 8 }}>See every page on any website</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Enter your domain and get a full sitemap analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 32px', borderRadius: 8, textDecoration: 'none', fontWeight: 700, fontSize: 15 }}>
          Analyze My Sitemap Free →
        </a>
      </div>

      <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <li><a href="/learn/what-is-an-xml-sitemap" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>What Is an XML Sitemap?</a></li>
          <li><a href="/learn/sitemap-best-practices" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Sitemap Best Practices</a></li>
          <li><a href="/learn/orphan-pages" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Orphan Pages</a></li>
          <li><a href="/learn/google-search-operators" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Google Search Operators for SEO</a></li>
          <li><a href="/blog/how-to-check-if-site-is-indexed" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>How to Check if Your Site is Indexed</a></li>
        </ul>
      </div>
    </div>
  );
}
