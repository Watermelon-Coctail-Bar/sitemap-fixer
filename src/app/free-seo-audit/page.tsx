import type { Metadata } from 'next';
import { LandingPage } from '@/components/LandingPage';
export const metadata: Metadata = {
  title: 'Free SEO Audit - AI-Powered Site Audit in 60 Seconds',
  description: 'Run a free AI-powered SEO audit on any website in 60 seconds. No email or credit card required. Get a prioritized fix list with actionable recommendations instantly.',
  alternates: { canonical: 'https://sitemapfixer.com/free-seo-audit' },
  openGraph: {
    title: 'Free SEO Audit - AI-Powered Site Audit in 60 Seconds',
    description: 'Run a free AI-powered SEO audit on any website in 60 seconds. No email or credit card required. Get a prioritized fix list with actionable recommendations instantly.',
    url: 'https://sitemapfixer.com/free-seo-audit',
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
export default function Page() { return <LandingPage variant='free-seo-audit' />; }
