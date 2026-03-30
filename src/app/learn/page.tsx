import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Sitemap SEO Guides — Learn XML Sitemaps | SitemapFixer',
  description: 'Free guides on XML sitemaps, crawl budget, indexing, and technical SEO. Learn everything about sitemaps from beginner to advanced.',
  alternates: { canonical: 'https://sitemapfixer.com/learn' },
};
const GUIDES = [
  { slug: 'what-is-an-xml-sitemap', title: 'What Is an XML Sitemap?', desc: 'The complete beginner guide to XML sitemaps — what they are, how they work, and why they matter.' },
  { slug: 'sitemap-best-practices', title: 'XML Sitemap Best Practices', desc: 'Everything you need to create a clean, optimized sitemap that maximizes crawl efficiency.' },
  { slug: 'sitemap-vs-robots-txt', title: 'Sitemap vs robots.txt', desc: 'The difference between sitemaps and robots.txt — and how they interact.' },
  { slug: 'why-pages-not-indexed', title: 'Why Pages Not Indexed', desc: 'Every reason Google might not index your pages, and how to fix each one.' },
  { slug: 'how-to-create-a-sitemap', title: 'How to Create a Sitemap', desc: 'Step-by-step instructions for WordPress, Shopify, Next.js, and manual creation.' },
];
export default function LearnIndex() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px', fontFamily: 'Geist, sans-serif' }}>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#0a0a0f', marginBottom: 16 }}>Sitemap SEO Guides</h1>
      <p style={{ fontSize: 17, color: '#3d3d4f', lineHeight: 1.7, marginBottom: 40 }}>Free, in-depth guides on XML sitemaps, crawl budget, and technical SEO indexing.</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 48 }}>
        {GUIDES.map(g => (
          <a key={g.slug} href={'/learn/' + g.slug} style={{ display: 'block', border: '1px solid #e4e4ed', borderRadius: 10, padding: '20px', textDecoration: 'none', background: 'white' }}>
            <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 4 }}>{g.title}</div>
            <div style={{ color: '#6b6b7d', fontSize: 14 }}>{g.desc}</div>
          </a>
        ))}
      </div>
      <div style={{ background: '#0a0a0f', borderRadius: 12, padding: '28px', textAlign: 'center' }}>
        <div style={{ fontSize: 18, fontWeight: 700, color: 'white', marginBottom: 8 }}>Put it into practice</div>
        <a href="/" style={{ background: 'white', color: '#0a0a0f', padding: '12px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 700, display: 'inline-block', marginTop: 8 }}>Analyze My Sitemap Free →</a>
      </div>
    </div>
  );
}