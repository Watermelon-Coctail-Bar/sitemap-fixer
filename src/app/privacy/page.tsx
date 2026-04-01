import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Privacy Policy | SitemapFixer',
  description: 'Privacy policy for SitemapFixer - how we collect, use, and protect your data.',
  alternates: { canonical: 'https://sitemapfixer.com/privacy' },
};
export default function PrivacyPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#fafaf9' }}>
      <nav style={{ borderBottom: '1px solid #e4e4ed', background: 'white', padding: '14px 24px' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none', width: 'fit-content' }}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect width="28" height="28" rx="7" fill="#0a0a0f"/><path d="M7 9h14M7 14h10M7 19h12" stroke="white" strokeWidth="2" strokeLinecap="round"/><circle cx="21" cy="19" r="3" fill="#2d5be3"/></svg>
          <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: 20, color: '#0a0a0f' }}>SitemapFixer</span>
        </a>
      </nav>
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '60px 24px' }}>
        <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 44, color: '#0a0a0f', marginBottom: 8 }}>Privacy Policy</h1>
        <p style={{ fontSize: 14, color: '#9ca3af', marginBottom: 48 }}>Last updated: April 1, 2025</p>
        {[
          ['Information We Collect', 'When you create an account we collect your email address. When you use the service we log which domains you analyze. If you subscribe we store your subscription status (managed via Stripe - we never store card details).'],
          ['How We Use Your Information', 'We use your email to manage your account and send essential service emails. We use analysis logs to improve the service. We do not sell or share your data with third parties for marketing purposes.'],
          ['Cookies and Storage', 'We use cookies to maintain your login session. We use localStorage to track your free analysis count. You can clear these at any time through your browser settings.'],
          ['Payments', 'All payments are processed by Stripe. We store only your subscription status and Stripe customer ID. We never see or store your card details.'],
          ['Data Retention', 'We keep your account data while your account is active. Analysis history is kept for 90 days. You can request deletion of your account and data at any time by emailing us.'],
          ['Your Rights', 'You can access, correct, or delete your personal data at any time. You can cancel your subscription at any time. Contact us at support@sitemapfixer.com for any privacy requests.'],
          ['Contact', 'Questions about this policy? Email support@sitemapfixer.com'],
        ].map(([title, body]) => (
          <div key={title} style={{ marginBottom: 28 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: '#0a0a0f', marginBottom: 8 }}>{title}</h2>
            <p style={{ fontSize: 15, color: '#3d3d4f', lineHeight: 1.8 }}>{body}</p>
          </div>
        ))}
        <div style={{ marginTop: 48, paddingTop: 32, borderTop: '1px solid #e4e4ed', display: 'flex', gap: 24, fontSize: 14 }}>
          <a href="/terms" style={{ color: '#2d5be3', textDecoration: 'none' }}>Terms of Service</a>
          <a href="/" style={{ color: '#6b7280', textDecoration: 'none' }}>Back to SitemapFixer</a>
        </div>
      </div>
    </div>
  );
}
