import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Sign Up | SitemapFixer',
  description: 'Create your free SitemapFixer account. Start analyzing your sitemap and fixing SEO issues in 60 seconds.',
  alternates: { canonical: 'https://sitemapfixer.com/signup' },
};
export default function SignupLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav style={{ borderBottom: '1px solid #e4e4ed', background: 'white', padding: '0 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 60 }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect width="28" height="28" rx="7" fill="#0a0a0f"/><path d="M7 9h14M7 14h10M7 19h12" stroke="white" strokeWidth="2" strokeLinecap="round"/><circle cx="21" cy="19" r="3" fill="#2d5be3"/></svg>
          <span style={{ fontWeight: 600, fontSize: 17, color: '#0a0a0f', letterSpacing: '-0.02em' }}>SitemapFixer</span>
        </a>
        <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
          <a href="/pricing" style={{ fontSize: 14, color: '#3d3d4f', textDecoration: 'none' }}>Pricing</a>
          <a href="/learn" style={{ fontSize: 14, color: '#3d3d4f', textDecoration: 'none' }}>Learn</a>
        </div>
      </nav>
      <main>{children}</main>
      <footer style={{ borderTop: '1px solid #e4e4ed', background: '#fafaf9', padding: '24px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 12, color: '#9ca3af' }}>2025 SitemapFixer</span>
        <div style={{ display: 'flex', gap: 20 }}>
          <a href="/terms" style={{ fontSize: 13, color: '#6b6b7d', textDecoration: 'none' }}>Terms</a>
          <a href="/privacy" style={{ fontSize: 13, color: '#6b6b7d', textDecoration: 'none' }}>Privacy</a>
        </div>
      </footer>
    </>
  );
}
