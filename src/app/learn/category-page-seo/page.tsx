import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Category Page SEO: Optimize for Rankings',
  description: "Category pages target high-volume commercial keywords. Here is how to add content, structure headings, manage faceted navigation, and build authority to category pages.",
  alternates: { canonical: 'https://sitemapfixer.com/learn/category-page-seo' },
  openGraph: {
    title: 'Category Page SEO: Optimize for Rankings',
    description: 'Category pages target high-volume commercial keywords. Here is how to add content, structure headings, manage faceted navigation, and build authority to category pages.',
    url: 'https://sitemapfixer.com/learn/category-page-seo',
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
  { h: "Why Category Pages Matter More Than Product Pages", d: "Category pages target broad commercial keywords ('running shoes', 'office chairs', 'wireless headphones') that get far more search volume than individual product queries. A single well-optimized category page can drive more organic traffic than dozens of product pages combined. Yet most ecommerce sites neglect category pages - they have no unique content, poor meta tags, and minimal internal links pointing to them. This is one of the biggest missed opportunities in ecommerce SEO." },
  { h: "Adding Content to Category Pages", d: "An empty category page with just a product grid is thin content. Add a category description - 150-300 words at the top or bottom of the product grid. Cover: what this category contains, what makes a good product in this category, who it is for, key features to consider. This content targets informational queries that funnel into purchase intent. Place the description below the fold (below the product grid) if you want to preserve the shopping-first experience while still having indexable content." },
  { h: "Title Tags and H1s for Categories", d: "Title tag format: [Category Name] - [Key Differentiator] | [Brand]. For example: 'Running Shoes for Men - Lightweight and Cushioned | BrandName'. The H1 on the page should match the primary keyword: 'Men's Running Shoes'. Use H2s for subcategory navigation links and filter labels - this gives Google structural signals about what the category encompasses. Avoid generic H1s like 'Products' or 'Shop'." },
  { h: "Canonical Tags and Faceted Navigation", d: "Faceted navigation (filters and sort options) is the biggest SEO challenge for category pages. Every filter combination creates a new URL with mostly duplicate content - 'shoes?color=red&size=10&sort=price' is one of potentially thousands of variants. The correct solution: set canonical tags on all filtered/sorted URLs pointing back to the main unfiltered category URL. Block low-value parameter combinations in robots.txt if they generate very high URL counts. Never include filtered URLs in your sitemap." },
  { h: "Building Internal Links to Categories", d: "Category pages rarely get enough internal links. Fix this by: linking to key categories from your homepage (top navigation and featured sections), linking between related categories, creating a categories hub page that links to all major categories, and embedding relevant category links in blog content. Categories that only exist in navigation menus have weak internal link profiles. The more internal links pointing to a category, the more authority it accumulates and the better it ranks." },
  { h: "Measuring Category Page Performance", d: "Track category page performance separately from product pages in Google Search Console. Filter by URL path (/collections/ for Shopify, /category/ for WooCommerce) to see aggregate impressions, clicks, and average position for all category URLs. Identify categories with high impressions but low CTR - these need better title tags. Categories with decent position but no conversions need content improvements or UI changes. Categories that are not indexed at all need a technical audit." },
];
export default function Page() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <nav style={{ fontSize: 13, color: '#6b6b7d', marginBottom: 32 }}>
        <a href="/" style={{ color: '#2d5be3', textDecoration: 'none' }}>Home</a>{' / '}
        <a href="/learn" style={{ color: '#2d5be3', textDecoration: 'none' }}>Learn</a>{' / '}
        <span>Category Page SEO</span>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.15 }}>Category Page SEO: The Most Underutilized Ecommerce Opportunity</h1>
      <div style={{ background: '#eef1ff', border: '1px solid rgba(45,91,227,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: '#2d5be3', fontWeight: 500 }}>Check your category sitemap free</span>
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
        <div style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>Analyze your ecommerce sitemap</div>
        <div style={{ color: '#9999aa', marginBottom: 20, fontSize: 14 }}>Free - checks all category and product URLs</div>
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
          </ul>
        </div>
    </div>
  );
}
