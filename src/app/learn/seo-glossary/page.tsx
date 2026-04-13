import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'SEO Glossary: 50 Essential SEO Terms Defined',
  description: "A plain-English glossary of essential SEO terms - from crawling and indexing to E-E-A-T and Core Web Vitals. Reference this when you encounter unfamiliar SEO terminology.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/seo-glossary' },
  openGraph: {
    title: 'SEO Glossary: 50 Essential SEO Terms Defined',
    description: 'A plain-English glossary of essential SEO terms - from crawling and indexing to E-E-A-T and Core Web Vitals. Reference this when you encounter unfamiliar SEO terminology.',
    url: 'https://sitemapfixer.com/learn/seo-glossary',
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
const terms = [
  { t: "Algorithm", d: "The set of rules Google uses to rank web pages. Google runs thousands of algorithm updates per year, most minor and unannounced." },
  { t: "Alt text", d: "A text description of an image added via the alt attribute on an img tag. Used by screen readers for accessibility and by Google to understand image content." },
  { t: "Anchor text", d: "The clickable, visible text of a hyperlink. Google uses anchor text as a relevance signal for the linked page." },
  { t: "Backlink", d: "A link from another website pointing to your site. Backlinks from authoritative, relevant sites are among the strongest ranking signals." },
  { t: "Canonical tag", d: "An HTML tag (link rel=canonical) that tells search engines which version of a page is the preferred, master version to index." },
  { t: "Crawl budget", d: "The number of pages Googlebot will crawl on your site within a given time period. Large sites with many low-quality pages may not have all pages crawled." },
  { t: "CLS (Cumulative Layout Shift)", d: "A Core Web Vital measuring how much page content shifts visually during loading. Google requires a score under 0.1 for a Good rating." },
  { t: "Core Web Vitals", d: "Three Google ranking signals measuring user experience: LCP (loading), INP (interactivity), and CLS (visual stability)." },
  { t: "Crawling", d: "The process of Googlebot discovering and downloading web pages by following links and processing sitemaps." },
  { t: "Domain Authority", d: "A third-party metric (Moz) predicting how likely a domain is to rank in search results. Not a Google metric - Google uses its own internal authority signals." },
  { t: "E-E-A-T", d: "Experience, Expertise, Authoritativeness, and Trustworthiness. Google's quality framework for evaluating content quality, especially in YMYL (health, finance) topics." },
  { t: "Featured snippet", d: "A highlighted answer box appearing at the top of Google search results, above the regular organic results. Also called position zero." },
  { t: "Hreflang", d: "An HTML attribute telling Google which language and region a page is intended for, used for international sites with multiple language versions." },
  { t: "Indexing", d: "The process of Google storing and organizing a crawled page so it can appear in search results." },
  { t: "INP (Interaction to Next Paint)", d: "A Core Web Vital measuring how quickly a page responds to user interactions. Google requires under 200ms for a Good rating." },
  { t: "Internal link", d: "A link from one page on a website to another page on the same website. Internal links pass PageRank and help Google discover content." },
  { t: "LCP (Largest Contentful Paint)", d: "A Core Web Vital measuring how long the main content takes to load. Google requires under 2.5 seconds for a Good rating." },
  { t: "Long-tail keyword", d: "A longer, more specific keyword phrase with lower search volume but usually higher conversion intent and lower competition." },
  { t: "Meta description", d: "An HTML meta tag summarizing a page's content. Shown under the title in search results. Not a direct ranking factor but affects click-through rate." },
  { t: "Noindex", d: "A meta tag or HTTP header directive telling search engines not to include a page in their index." },
  { t: "Organic traffic", d: "Visitors who arrive at a website by clicking an unpaid search result, as opposed to paid ads." },
  { t: "PageRank", d: "Google's original algorithm for measuring page authority based on the quantity and quality of inbound links. Now one of hundreds of ranking signals." },
  { t: "robots.txt", d: "A text file at the root of a domain telling crawlers which pages they are allowed or not allowed to crawl." },
  { t: "Schema markup", d: "Structured data code added to pages to help search engines understand content and generate rich results like star ratings and FAQs." },
  { t: "SERP", d: "Search Engine Results Page - the page Google shows in response to a search query, containing organic results, ads, and various SERP features." },
  { t: "Sitemap", d: "An XML file listing URLs on a website to help search engines discover and index pages efficiently." },
  { t: "Technical SEO", d: "The process of optimizing a website's infrastructure - crawlability, indexing, speed, structured data - to improve search engine visibility." },
  { t: "Title tag", d: "An HTML tag defining the title of a web page. Shown as the clickable headline in search results and is one of the most important on-page ranking signals." },
  { t: "XML sitemap", d: "A machine-readable file in XML format listing the URLs of a website, submitted to Google to aid in crawling and indexing." },
  { t: "YMYL", d: "Your Money or Your Life - Google's category for content about topics that could significantly impact a person's health, finances, safety, or wellbeing. These pages face stricter E-E-A-T requirements." },
];
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"Article","headline":"SEO Glossary: 50 Essential SEO Terms Defined","description":"A plain-English glossary of essential SEO terms - from crawling and indexing to E-E-A-T and Core Web Vitals. Reference this when you encounter unfamiliar SEO terminology.","url":"https://sitemapfixer.com/learn/seo-glossary","author":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com"},"publisher":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com","logo":{"@type":"ImageObject","url":"https://sitemapfixer.com/opengraph-image"}},"datePublished":"2025-01-15","mainEntityOfPage":{"@type":"WebPage","@id":"https://sitemapfixer.com/learn/seo-glossary"}}' }} />
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>SEO Glossary</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>SEO Glossary: 30 Essential Terms Defined</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your technical SEO free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Site Free</a>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {terms.map(({ t, d }, i) => (
          <div key={t} style={{ padding: '16px 0', borderBottom: '1px solid #f0f0f5', display: 'flex', gap: 20, alignItems: 'flex-start' }}>
            <div style={{ minWidth: 180, fontWeight: 700, color: '#0a0a0f', fontSize: 15, paddingTop: 2 }}>{t}</div>
            <div style={{ fontSize: 15, color: '#3d3d4f', lineHeight: 1.6, flex: 1 }}>{d}</div>
          </div>
        ))}
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Analyze your site technical SEO</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free sitemap and indexing analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>

        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/learn/keyword-research-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Keyword Research: Find Keywords Worth Targeting</a></li>
            <li><a href="/learn/content-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Content SEO: Write Content That Ranks</a></li>
            <li><a href="/learn/link-building-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Link Building SEO: Strategies That Work in 2025</a></li>
            <li><a href="/learn/local-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Local SEO: How to Rank in Google Maps and Local Search</a></li>
            <li><a href="/learn/mobile-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Mobile SEO: Mobile-First Indexing and How to Pass It</a></li>
          </ul>
        </div>
    </div>
  );
}
