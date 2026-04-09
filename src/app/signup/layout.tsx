import { Footer } from '@/components/Footer';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Sign Up',
  description: 'Create your free SitemapFixer account. Get 3 free sitemap analyses with AI-powered SEO recommendations. No credit card required. Start fixing SEO issues now.',
  alternates: { canonical: 'https://sitemapfixer.com/signup' },
  openGraph: {
    title: 'Sign Up',
    description: 'Create your free SitemapFixer account. Get 3 free sitemap analyses with AI-powered SEO recommendations. No credit card required. Start fixing SEO issues now.',
    url: 'https://sitemapfixer.com/signup',
    type: 'website',
    images: [{ url: 'https://sitemapfixer.com/opengraph-image', width: 1200, height: 630, alt: 'SitemapFixer - AI Sitemap Checker and SEO Fix Tool' }],
    siteName: 'SitemapFixer',
    locale: 'en_US',
  },
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
      <Footer />
    </>
  );
}
