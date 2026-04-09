import { Footer } from '@/components/Footer';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Pricing Plans',
  description: 'Simple pricing for SitemapFixer. Start free with 3 analyses, then upgrade for unlimited sitemap audits, AI-powered fix reports, and multi-site monitoring.',
  alternates: { canonical: 'https://sitemapfixer.com/pricing' },
  openGraph: {
    title: 'Pricing Plans',
    description: 'Simple pricing for SitemapFixer. Start free with 3 analyses, then upgrade for unlimited sitemap audits, AI-powered fix reports, and multi-site monitoring.',
    url: 'https://sitemapfixer.com/pricing',
    type: 'website',
    images: [{ url: 'https://sitemapfixer.com/opengraph-image', width: 1200, height: 630, alt: 'SitemapFixer - AI Sitemap Checker and SEO Fix Tool' }],
    siteName: 'SitemapFixer',
    locale: 'en_US',
  },
};
export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
