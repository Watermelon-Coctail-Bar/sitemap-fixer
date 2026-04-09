import type { Metadata } from 'next';
import { LandingPage } from '@/components/LandingPage';

export const metadata: Metadata = {
  title: 'Website SEO Checker - AI-Powered Audit',
  description: 'Stop guessing what\'s wrong with your SEO. Enter your domain and get a prioritized action plan based on your actual site structure - not generic advice.',
  keywords: 'website seo checker, seo audit tool, seo analysis, site seo checker, free seo checker',
  alternates: { canonical: 'https://sitemapfixer.com/website-seo-checker' },
  openGraph: {
    title: 'Website SEO Checker - AI-Powered Audit',
    description: 'Stop guessing what\'s wrong with your SEO. Enter your domain and get a prioritized action plan based on your actual site structure - not generic advice.',
    url: 'https://sitemapfixer.com/website-seo-checker',
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

export default function WebsiteSEOCheckerPage() {
  return <LandingPage variant="website-seo-checker" />;
}
