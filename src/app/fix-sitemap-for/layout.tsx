import { Footer } from '@/components/Footer';
import { AuthLink } from '@/components/AuthLink';
export default function SitemapErrorsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav style={{ borderBottom: '1px solid #e4e4ed', background: 'rgba(250,250,249,0.85)', backdropFilter: 'blur(12px)', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect width="28" height="28" rx="7" fill="#0a0a0f"/><path d="M7 9h14M7 14h10M7 19h12" stroke="white" strokeWidth="2" strokeLinecap="round"/><circle cx="21" cy="19" r="3" fill="#2d5be3"/></svg>
            <span style={{ fontWeight: 600, fontSize: 17, color: '#0a0a0f', letterSpacing: '-0.02em' }}>SitemapFixer</span>
          </a>
          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <a href="/learn" style={{ fontSize: 14, color: '#3d3d4f', textDecoration: 'none' }}>Learn</a>
            <a href="/blog" style={{ fontSize: 14, color: '#3d3d4f', textDecoration: 'none' }}>Blog</a>
            <AuthLink style={{ fontSize: 14, color: '#3d3d4f', textDecoration: 'none' }} />
            <a href="/pricing" style={{ fontSize: 14, color: '#3d3d4f', textDecoration: 'none' }}>Pricing</a>
            <a href="/" style={{ fontSize: 13, color: 'white', background: '#0a0a0f', padding: '8px 18px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>Try Free</a>
          </div>
        </div>
      </nav>
      <main>{children}</main>
      <Footer />
    </>
  );
}
