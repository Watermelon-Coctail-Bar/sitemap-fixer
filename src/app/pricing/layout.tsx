import { Footer } from '@/components/Footer';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Pricing Plans',
  description: 'Simple pricing for SitemapFixer. Start free (1 analysis/month), then upgrade for unlimited sitemap audits, AI-powered fix reports, and multi-site monitoring.',
  alternates: { canonical: 'https://sitemapfixer.com/pricing' },
  openGraph: {
    title: 'Pricing Plans',
    description: 'Simple pricing for SitemapFixer. Start free (1 analysis/month), then upgrade for unlimited sitemap audits, AI-powered fix reports, and multi-site monitoring.',
    url: 'https://sitemapfixer.com/pricing',
    type: 'website',
    images: [{ url: 'https://sitemapfixer.com/opengraph-image', width: 1200, height: 630, alt: 'SitemapFixer - AI Sitemap Checker and SEO Fix Tool' }],
    siteName: 'SitemapFixer',
    locale: 'en_US',
  },
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'SitemapFixer',
  description: 'AI-powered sitemap checker and SEO fix tool. Finds sitemap errors, diagnoses crawled-not-indexed pages, and generates prioritized fix lists.',
  brand: { '@type': 'Brand', name: 'SitemapFixer' },
  offers: [
    {
      '@type': 'Offer',
      name: 'Free',
      price: '0',
      priceCurrency: 'USD',
      description: '1 AI-powered sitemap analysis per month. No credit card required.',
      availability: 'https://schema.org/InStock',
      url: 'https://sitemapfixer.com/signup',
    },
    {
      '@type': 'Offer',
      name: 'Starter',
      price: '6',
      priceCurrency: 'USD',
      description: '50 sitemap analyses/month, AI-powered fix recommendations, PDF exports.',
      availability: 'https://schema.org/InStock',
      url: 'https://sitemapfixer.com/pricing',
    },
    {
      '@type': 'Offer',
      name: 'Pro',
      price: '13',
      priceCurrency: 'USD',
      description: 'Unlimited analyses, multi-site monitoring up to 10 sites, Slack alerts.',
      availability: 'https://schema.org/InStock',
      url: 'https://sitemapfixer.com/pricing',
    },
    {
      '@type': 'Offer',
      name: 'Agency',
      price: '33',
      priceCurrency: 'USD',
      description: 'Unlimited sites, white-label reports, API access, 10 team seats.',
      availability: 'https://schema.org/InStock',
      url: 'https://sitemapfixer.com/pricing',
    },
  ],
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      {children}
      <Footer />
    </>
  );
}
