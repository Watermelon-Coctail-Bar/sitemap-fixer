import { Footer } from '@/components/Footer';
export default function SharedLayout({ children }: { children: React.ReactNode }) {
  const navStyle: React.CSSProperties = { borderBottom: '1px solid #e4e4ed', background: 'white', padding: '0 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 60, position: 'sticky', top: 0, zIndex: 100 };
  return (
    <>
      <nav style={navStyle}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect width="28" height="28" rx="7" fill="#0a0a0f"/><path d="M7 9h14M7 14h10M7 19h12" stroke="white" strokeWidth="2" strokeLinecap="round"/><circle cx="21" cy="19" r="3" fill="#2d5be3"/></svg>
          <span style={{ fontWeight: 600, fontSize: 17, color: '#0a0a0f', letterSpacing: '-0.02em' }}>SitemapFixer</span>
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          <a href="/" style={{ fontSize: 14, color: '#3d3d4f', textDecoration: 'none' }}>Sitemap Finder</a>
          <a href="/learn" style={{ fontSize: 14, color: '#3d3d4f', textDecoration: 'none' }}>Learn</a>
          <a href="/blog" style={{ fontSize: 14, color: '#3d3d4f', textDecoration: 'none' }}>Blog</a>
          <a href="/pricing" style={{ fontSize: 14, color: '#3d3d4f', textDecoration: 'none' }}>Pricing</a>
          <a href="/" style={{ background: '#2d5be3', color: 'white', padding: '8px 18px', borderRadius: 8, fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>Free Audit</a>
        </div>
      </nav>
      <main>{children}</main>
      <Footer />
    </>
  );
}
