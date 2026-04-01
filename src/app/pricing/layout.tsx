export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <footer style={{ borderTop: '1px solid #e4e4ed', background: '#fafaf9', padding: '40px 40px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <svg width="20" height="20" viewBox="0 0 28 28" fill="none"><rect width="28" height="28" rx="7" fill="#0a0a0f"/><path d="M7 9h14M7 14h10M7 19h12" stroke="white" strokeWidth="2" strokeLinecap="round"/><circle cx="21" cy="19" r="3" fill="#2d5be3"/></svg>
            <span style={{ fontWeight: 600, fontSize: 14, color: '#0a0a0f' }}>SitemapFixer</span>
          </div>
          <div style={{ display: 'flex', gap: 24 }}>
            <a href="/learn" style={{ fontSize: 13, color: '#6b6b7d', textDecoration: 'none' }}>Learn</a>
            <a href="/blog" style={{ fontSize: 13, color: '#6b6b7d', textDecoration: 'none' }}>Blog</a>
            <a href="/terms" style={{ fontSize: 13, color: '#6b6b7d', textDecoration: 'none' }}>Terms</a>
            <a href="/privacy" style={{ fontSize: 13, color: '#6b6b7d', textDecoration: 'none' }}>Privacy</a>
          </div>
          <span style={{ fontSize: 12, color: '#9ca3af' }}>2025 SitemapFixer</span>
        </div>
      </footer>
    </>
  );
}
