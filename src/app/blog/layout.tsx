import { headers } from 'next/headers';

const breadcrumbSchema = (path: string) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sitemapfixer.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://sitemapfixer.com/blog' },
  ],
});

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema('')) }}
      />
      <nav style={{ borderBottom: '1px solid #e4e4ed', background: 'white', padding: '0 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 60, position: 'sticky', top: 0, zIndex: 100 }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect width="28" height="28" rx="7" fill="#0a0a0f"/><path d="M7 9h14M7 14h10M7 19h12" stroke="white" strokeWidth="2" strokeLinecap="round"/><circle cx="21" cy="19" r="3" fill="#2d5be3"/></svg>
          <span style={{ fontWeight: 600, fontSize: 17, color: '#0a0a0f', letterSpacing: '-0.02em' }}>SitemapFixer</span>
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          <a href="/" style={{ fontSize: 14, color: '#3d3d4f', textDecoration: 'none' }}>Sitemap Finder</a>
          <a href="/learn" style={{ fontSize: 14, color: '#3d3d4f', textDecoration: 'none' }}>Learn</a>
          <a href="/blog" style={{ fontSize: 14, color: '#2d5be3', fontWeight: 600, textDecoration: 'none' }}>Blog</a>
          <a href="/pricing" style={{ fontSize: 14, color: '#3d3d4f', textDecoration: 'none' }}>Pricing</a>
          <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '8px 18px', borderRadius: 8, fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>Free Audit</a>
        </div>
      </nav>
      <main>{children}</main>
      <footer style={{ borderTop: '1px solid #e4e4ed', background: '#fafaf9', marginTop: 80, padding: '40px 40px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <svg width="20" height="20" viewBox="0 0 28 28" fill="none"><rect width="28" height="28" rx="7" fill="#0a0a0f"/><path d="M7 9h14M7 14h10M7 19h12" stroke="white" strokeWidth="2" strokeLinecap="round"/><circle cx="21" cy="19" r="3" fill="#2d5be3"/></svg>
            <span style={{ fontWeight: 600, fontSize: 14, color: '#0a0a0f' }}>SitemapFixer</span>
          </div>
          <div style={{ display: 'flex', gap: 24 }}>
            <a href="/learn" style={{ fontSize: 13, color: '#6b6b7d', textDecoration: 'none' }}>Learn</a>
            <a href="/terms" style={{ fontSize: 13, color: '#6b6b7d', textDecoration: 'none' }}>Terms</a>
            <a href="/privacy" style={{ fontSize: 13, color: '#6b6b7d', textDecoration: 'none' }}>Privacy</a>
            <a href="/sitemap.xml" style={{ fontSize: 13, color: '#6b6b7d', textDecoration: 'none' }}>Sitemap</a>
          </div>
          <span style={{ fontSize: 12, color: '#9ca3af' }}>2025 SitemapFixer</span>
        </div>
      </footer>
    </>
  );
}
