import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'SitemapFixer terms of service. Read our terms and conditions before using our AI-powered sitemap analysis, SEO auditing, and website optimization tools.',
  alternates: { canonical: 'https://sitemapfixer.com/terms' },
  openGraph: {
    title: 'Terms of Service',
    description: 'SitemapFixer terms of service. Read our terms and conditions before using our AI-powered sitemap analysis, SEO auditing, and website optimization tools.',
    url: 'https://sitemapfixer.com/terms',
    type: 'website',
    images: [{
      url: 'https://sitemapfixer.com/opengraph-image',
      width: 1200,
      height: 630,
      alt: 'SitemapFixer - AI Sitemap Checker and SEO Fix Tool',
    }],
    siteName: 'SitemapFixer',
    locale: 'en_US',
  },
};
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (<div style={{ marginBottom: 40 }}><h2 style={{ fontSize: 22, fontWeight: 700, color: '#0a0a0f', marginBottom: 12 }}>{title}</h2><div style={{ fontSize: 15, color: '#3d3d4f', lineHeight: 1.8 }}>{children}</div></div>);
}
export default function TermsPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#fafaf9' }}>
      <nav style={{ borderBottom: '1px solid #e4e4ed', background: 'white', padding: '14px 24px', display: 'flex', alignItems: 'center', gap: 12 }}>
        <a href='/' style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
          <svg width='28' height='28' viewBox='0 0 28 28' fill='none'><rect width='28' height='28' rx='7' fill='#0a0a0f'/><path d='M7 9h14M7 14h10M7 19h12' stroke='white' strokeWidth='2' strokeLinecap='round'/><circle cx='21' cy='19' r='3' fill='#2d5be3'/></svg>
          <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: 18, color: '#0a0a0f' }}>SitemapFixer</span>
        </a>
      </nav>
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '60px 24px' }}>
        <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 44, color: '#0a0a0f', marginBottom: 8 }}>Terms of Service</h1>
        <p style={{ fontSize: 14, color: '#9ca3af', marginBottom: 48 }}>Last updated: April 1, 2025</p>
        <Section title='1. Acceptance of Terms'>
          <p>By accessing or using SitemapFixer at sitemapfixer.com, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.</p>
        </Section>
        <Section title='2. Description of Service'>
          <p>SitemapFixer provides AI-powered sitemap analysis, SEO recommendations, and related tools. We offer both free and paid tiers. The free tier allows one analysis per user. Paid plans provide unlimited analyses and additional features as described on our pricing page.</p>
        </Section>
        <Section title='3. User Accounts'>
          <p>You may create an account to access paid features. You are responsible for maintaining the security of your account credentials. You must provide accurate information when creating an account. You may not share accounts or use the service for unauthorized commercial purposes.</p>
        </Section>
        <Section title='4. Payments and Refunds'>
          <p>Paid plans are billed according to the plan selected (weekly, monthly, or yearly). All payments are processed securely through Stripe. We offer a 7-day refund policy for new subscribers who are not satisfied with the service. Cancel any time from your account settings.</p>
        </Section>
        <Section title='5. Acceptable Use'>
          <p>You agree not to use SitemapFixer to analyze domains you do not own or have permission to analyze, to attempt to circumvent usage limits or paywalls through technical means, to scrape or automate requests beyond normal usage, or to use the service in any way that violates applicable laws.</p>
        </Section>
        <Section title='6. Intellectual Property'>
          <p>SitemapFixer and its content are owned by us. AI-generated reports are provided for your personal use. You may not resell or redistribute analysis reports without permission.</p>
        </Section>
        <Section title='7. Disclaimers'>
          <p>SitemapFixer is provided as-is. We do not guarantee specific SEO results from following our recommendations. Search engine algorithms change frequently and results may vary.</p>
        </Section>
        <Section title='8. Limitation of Liability'>
          <p>To the maximum extent permitted by law, SitemapFixer shall not be liable for any indirect, incidental, or consequential damages arising from your use of the service.</p>
        </Section>
        <Section title='9. Changes to Terms'>
          <p>We may update these terms from time to time. Continued use of the service after changes constitutes acceptance of the new terms. We will notify users of significant changes via email.</p>
        </Section>
        <Section title='10. Contact'>
          <p>For questions about these terms, contact us at the email address on our website.</p>
        </Section>
        <div style={{ marginTop: 48, paddingTop: 32, borderTop: '1px solid #e4e4ed', display: 'flex', gap: 20, fontSize: 14 }}>
          <a href='/privacy' style={{ color: '#2d5be3', textDecoration: 'none' }}>Privacy Policy</a>
          <a href='/' style={{ color: '#6b7280', textDecoration: 'none' }}>Back to SitemapFixer</a>
        </div>
      </div>
    </div>
  );
}
