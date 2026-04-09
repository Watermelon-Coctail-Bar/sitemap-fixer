import { Footer } from '@/components/Footer';
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
          <a href="/learn" style={{ fontSize: 14, color: '#2d5be3', fontWeight: 600, textDecoration: 'none' }}>Learn</a>
          <a href="/blog" style={{ fontSize: 14, color: '#3d3d4f', textDecoration: 'none' }}>Blog</a>
          <a href="/signup?mode=login" style={{ fontSize: 14, color: '#3d3d4f', textDecoration: 'none' }}>Sign in</a>
          <a href="/pricing" style={{ fontSize: 13, color: 'white', background: '#2d5be3', padding: '6px 14px', borderRadius: 8, textDecoration: 'none', fontWeight: 600 }}>Pricing</a>
        </div>
      </nav>
      <main>{children}</main>
      <Footer />
    </>
  );
}
