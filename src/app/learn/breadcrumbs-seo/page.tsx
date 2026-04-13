import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Breadcrumbs SEO: How They Help Rankings',
  description: "Breadcrumbs improve site structure signals, appear in Google search results, and help with internal linking. Here is how to implement breadcrumbs and BreadcrumbList schema correctly.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/breadcrumbs-seo' },
  openGraph: {
    title: 'Breadcrumbs SEO: How They Help Rankings',
    description: 'Breadcrumbs improve site structure signals, appear in Google search results, and help with internal linking. Here is how to implement breadcrumbs and BreadcrumbList schema correctly.',
    url: 'https://sitemapfixer.com/learn/breadcrumbs-seo',
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
const sections = [
  { h: "What Breadcrumbs Do for SEO", d: "Breadcrumb navigation shows users where they are in your site hierarchy - Home / Category / Subcategory / Page. For SEO, breadcrumbs do three things: they add internal links from every page up to parent pages (passing link authority upward), they signal your site structure to Google (helping it understand topic hierarchy), and with BreadcrumbList schema they appear directly in Google search results, replacing the URL with a cleaner path that can improve click-through rate." },
  { h: "BreadcrumbList Schema Markup", d: "Add BreadcrumbList structured data to every page with a breadcrumb trail. Google uses this to generate breadcrumb rich results in search. The format in JSON-LD: type BreadcrumbList with an itemListElement array, where each item has type ListItem, position (1, 2, 3...), name (the label), and item (the URL). Every level of the hierarchy needs its own ListItem - from homepage through to the current page. Test with Google Rich Results Test after implementation." },
  { h: "Breadcrumbs and Internal Linking", d: "Breadcrumbs create additional internal links that Google follows. A product page with breadcrumb Home / Electronics / Headphones / Sony WH-1000XM5 creates links to the homepage, Electronics category, and Headphones subcategory. This reinforces the authority of category pages and helps Google understand the relationship between your pages. On deep sites where some pages have few internal links, breadcrumbs ensure every page has at least 3-4 internal links pointing up the hierarchy." },
  { h: "Implementation Options", d: "Most SEO plugins handle breadcrumbs automatically. In WordPress with Yoast SEO: enable breadcrumbs in Yoast under Appearance, then Breadcrumbs. In Next.js: implement a breadcrumb component that generates both HTML navigation and JSON-LD schema. In Shopify: most themes include breadcrumbs on product and collection pages by default. Verify your breadcrumbs appear in Google Search Console Rich Results under Enhancements, Breadcrumbs." },
  { h: "Common Breadcrumb Mistakes", d: "Breadcrumbs that do not match URL structure: if your breadcrumb says Home / Blog / SEO but the page URL is /learn/seo, the mismatch confuses both users and Google. Keep breadcrumbs consistent with your URL hierarchy. Missing schema: visible breadcrumbs without BreadcrumbList schema mean you miss the rich result in search. All three must align: visible breadcrumbs, internal links, and schema markup. Breadcrumbs on single-level pages: pages at root level (yoursite.com/about) do not need breadcrumbs - they add no hierarchy value there." },
];
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"Article","headline":"Breadcrumbs SEO: How They Help Rankings","description":"Breadcrumbs improve site structure signals, appear in Google search results, and help with internal linking. Here is how to implement breadcrumbs and BreadcrumbList schema correctly.","url":"https://sitemapfixer.com/learn/breadcrumbs-seo","author":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com"},"publisher":{"@type":"Organization","name":"SitemapFixer","url":"https://sitemapfixer.com","logo":{"@type":"ImageObject","url":"https://sitemapfixer.com/opengraph-image"}},"datePublished":"2025-01-15","mainEntityOfPage":{"@type":"WebPage","@id":"https://sitemapfixer.com/learn/breadcrumbs-seo"}}' }} />
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Breadcrumbs SEO</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Breadcrumbs SEO: Improve Rankings and Rich Results</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your site structure free</span>
        <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Analyze My Site Free</a>
      </div>
      <div style={{ fontSize: 16, color: '#3d3d4f', lineHeight: 1.85 }}>
        {sections.map(({ h, d }) => (
          <div key={h} style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 10 }}>{h}</h2>
            <p style={{ margin: 0 }}>{d}</p>
          </div>
        ))}
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '32px', textAlign: 'center', marginTop: 56 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Analyze your site structure</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free sitemap and SEO analysis in 60 seconds</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Analyze My Site Free</a>
      </div>

        <div style={{ marginTop: 48, borderTop: '1px solid #e4e4ed', paddingTop: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><a href="/learn/title-tag-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Title Tag SEO: Write Titles That Rank</a></li>
            <li><a href="/learn/meta-description-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Meta Descriptions: How to Write Them for SEO</a></li>
            <li><a href="/learn/image-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Image SEO: Optimize Images for Google Search</a></li>
            <li><a href="/learn/video-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Video SEO: Get Videos to Rank in Google</a></li>
            <li><a href="/learn/anchor-text-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>Anchor Text SEO: Types & Best Practices</a></li>
          
            <li><a href="/learn/url-structure-seo" style={{ color: '#2d5be3', textDecoration: 'none', fontSize: 14, lineHeight: 1.8 }}>URL Structure for SEO: Best Practices</a></li></ul>
        </div>
    </div>
  );
}
