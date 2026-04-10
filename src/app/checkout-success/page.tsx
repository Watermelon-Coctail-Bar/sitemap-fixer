import type { Metadata } from 'next';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Payment Successful',
  description: 'Your SitemapFixer subscription is active. Start analyzing unlimited sites now.',
  robots: { index: false, follow: false },
};

export default function CheckoutSuccess() {
  return (
    <div style={{ minHeight: '100vh', background: '#fafaf9', display: 'flex', flexDirection: 'column' }}>
      <nav style={{ borderBottom: '1px solid #e4e4ed', background: 'white', padding: '14px 24px' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none', width: 'fit-content' }}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect width="28" height="28" rx="7" fill="#0a0a0f"/><path d="M7 9h14M7 14h10M7 19h12" stroke="white" strokeWidth="2" strokeLinecap="round"/><circle cx="21" cy="19" r="3" fill="#2d5be3"/></svg>
          <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: 20, color: '#0a0a0f' }}>SitemapFixer</span>
        </a>
      </nav>

      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 24px' }}>
        <div style={{ maxWidth: 520, textAlign: 'center' }}>
          <div style={{ width: 72, height: 72, borderRadius: '50%', background: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', fontSize: 36 }}>
            ✓
          </div>

          <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 40, color: '#0a0a0f', marginBottom: 12 }}>
            Payment successful
          </h1>

          <p style={{ fontSize: 17, color: '#6b7280', lineHeight: 1.7, marginBottom: 32 }}>
            Your subscription is now active. You have unlimited sitemap analyses. Start by analyzing your first site.
          </p>

          <a
            href="/"
            style={{ display: 'inline-block', background: '#2d5be3', color: 'white', padding: '14px 32px', borderRadius: 10, textDecoration: 'none', fontWeight: 700, fontSize: 16, marginBottom: 16 }}
          >
            Analyze My First Site →
          </a>

          <p style={{ fontSize: 13, color: '#9ca3af', marginTop: 16 }}>
            A confirmation email has been sent to your inbox.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
