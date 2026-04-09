const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sitemapfixer.com' },
    { '@type': 'ListItem', position: 2, name: 'Learn', item: 'https://sitemapfixer.com/learn' },
  ],
};

export default function LearnLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav style={{ borderBottom: '1px solid #e4e4ed', background: 'white', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 60, position: 'sticky', top: 0, zIndex: 100 }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect width="28" height="28" rx="7" fill="#0a0a0f"/><path d="M7 9h14M7 14h10M7 19h12" stroke="white" strokeWidth="2" strokeLinecap="round"/><circle cx="21" cy="19" r="3" fill="#2d5be3"/></svg>
          <span style={{ fontWeight: 600, fontSize: 17, color: '#0a0a0f', letterSpacing: '-0.02em' }}>SitemapFixer</span>
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          <a href="/sitemap-finder" style={{ fontSize: 14, color: '#3d3d4f', textDecoration: 'none' }}>Sitemap Finder</a>
          <a href="/sitemap-checker" style={{ fontSize: 14, color: '#3d3d4f', textDecoration: 'none' }}>Sitemap Checker</a>
          <a href="/learn" style={{ fontSize: 14, color: '#2d5be3', fontWeight: 600, textDecoration: 'none' }}>Learn</a>
          <a href="/pricing" style={{ fontSize: 14, color: '#3d3d4f', textDecoration: 'none' }}>Pricing</a>
          <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '8px 18px', borderRadius: 8, fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>Free Audit</a>
        </div>
      </nav>
      <main>{children}</main>
      <footer style={{ borderTop: '1px solid #e4e4ed', background: '#fafaf9', marginTop: 80 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '60px 24px 40px', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 40 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none"><rect width="28" height="28" rx="7" fill="#0a0a0f"/><path d="M7 9h14M7 14h10M7 19h12" stroke="white" strokeWidth="2" strokeLinecap="round"/><circle cx="21" cy="19" r="3" fill="#2d5be3"/></svg>
              <span style={{ fontWeight: 600, fontSize: 15, color: '#0a0a0f' }}>SitemapFixer</span>
            </div>
            <p style={{ fontSize: 13, color: '#6b6b7d', lineHeight: 1.6, maxWidth: 240 }}>AI-powered sitemap analysis. Find your sitemap, fix your SEO.</p>
          </div>
          <div>
            <div style={{ fontWeight: 600, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#9ca3af', marginBottom: 16 }}>Tools</div>
            {[['Sitemap Finder', '/sitemap-finder'], ['Sitemap Checker', '/sitemap-checker'], ['SEO Checker', '/website-seo-checker'], ['Free SEO Audit', '/free-seo-audit'], ['XML Generator', '/xml-sitemap-generator']].map(([t, h]) => (
              <a key={h as string} href={h as string} style={{ display: 'block', fontSize: 13, color: '#3d3d4f', textDecoration: 'none', marginBottom: 10 }}>{t}</a>
            ))}
          </div>
          <div>
            <div style={{ fontWeight: 600, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#9ca3af', marginBottom: 16 }}>Learn</div>
            {[['What is an XML Sitemap', '/learn/what-is-an-xml-sitemap'], ['Sitemap Best Practices', '/learn/sitemap-best-practices'], ['Why Pages Not Indexed', '/learn/why-pages-not-indexed'], ['Technical SEO Checklist', '/learn/technical-seo-checklist'], ['Core Web Vitals', '/learn/core-web-vitals']].map(([t, h]) => (
              <a key={h as string} href={h as string} style={{ display: 'block', fontSize: 13, color: '#3d3d4f', textDecoration: 'none', marginBottom: 10 }}>{t}</a>
            ))}
          </div>
          <div>
            <div style={{ fontWeight: 600, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#9ca3af', marginBottom: 16 }}>Company</div>
            {[['Pricing', '/pricing'], ['Blog', '/blog'], ['Terms', '/terms'], ['Privacy', '/privacy']].map(([t, h]) => (
              <a key={h as string} href={h as string} style={{ display: 'block', fontSize: 13, color: '#3d3d4f', textDecoration: 'none', marginBottom: 10 }}>{t}</a>
            ))}
          </div>
        </div>
        <div style={{ borderTop: '1px solid #e4e4ed', padding: '20px 24px', maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 12, color: '#9ca3af' }}>2026 SitemapFixer – Built for SEOs who want answers, not reports</span>
          <a href="/sitemap.xml" style={{ fontSize: 12, color: '#9ca3af', textDecoration: 'none' }}>Sitemap</a>
        </div>
      </footer>
    </>
  );
}
