export default function NotFound() {
  return (
    <div style={{ minHeight: '100vh', background: '#fafaf9', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px', textAlign: 'center' }}>
      <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none', marginBottom: 48 }}>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect width="28" height="28" rx="7" fill="#0a0a0f"/><path d="M7 9h14M7 14h10M7 19h12" stroke="white" strokeWidth="2" strokeLinecap="round"/><circle cx="21" cy="19" r="3" fill="#2d5be3"/></svg>
        <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: 20, color: '#0a0a0f' }}>SitemapFixer</span>
      </a>
      <div style={{ fontSize: 80, fontWeight: 700, color: '#e4e4ed', fontFamily: "'DM Mono', monospace", lineHeight: 1 }}>404</div>
      <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 32, color: '#0a0a0f', marginTop: 16, marginBottom: 12 }}>Page not found</h1>
      <p style={{ fontSize: 16, color: '#6b6b7d', lineHeight: 1.6, maxWidth: 400, marginBottom: 32 }}>The page you're looking for doesn't exist or has been moved. Let's get you back on track.</p>
      <div style={{ display: 'flex', gap: 12 }}>
        <a href="/" style={{ background: '#0a0a0f', color: 'white', padding: '12px 24px', borderRadius: 10, fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>Analyze your sitemap</a>
        <a href="/blog" style={{ background: 'white', color: '#0a0a0f', border: '1px solid #e4e4ed', padding: '12px 24px', borderRadius: 10, fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>Read the blog</a>
      </div>
    </div>
  );
}
