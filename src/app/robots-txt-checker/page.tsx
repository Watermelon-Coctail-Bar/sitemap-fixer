import type { Metadata } from 'next';
import { LandingPage } from '@/components/LandingPage';

export const metadata: Metadata = {
  title: 'Robots.txt Checker - Free Validator & Tester',
  description: 'Free robots.txt checker and validator. Find URLs accidentally blocked from Google, detect syntax errors, and cross-check rules against your sitemap in seconds.',
  keywords: 'robots.txt checker, robots.txt validator, robots.txt tester, robots txt checker, validate robots.txt, check robots.txt, robots.txt syntax checker, robots.txt analyzer, robots.txt online checker, robots.txt parser',
  alternates: { canonical: 'https://sitemapfixer.com/robots-txt-checker' },
  openGraph: {
    title: 'Robots.txt Checker - Free Validator & Tester',
    description: 'Free robots.txt checker. Validate syntax, find URLs accidentally blocked from Google, and catch conflicts with your sitemap.',
    url: 'https://sitemapfixer.com/robots-txt-checker',
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

export default function RobotsTxtCheckerPage() {
  return <LandingPage variant="robots-txt-checker" />;
}
