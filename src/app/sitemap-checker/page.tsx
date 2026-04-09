import type { Metadata } from 'next';
import { LandingPage } from '@/components/LandingPage';

export const metadata: Metadata = {
  title: 'Sitemap Checker - Validate & Audit Your XML Sitemap',
  description: 'Free XML sitemap checker. Check your sitemap for broken URLs, stale pages, and missing sections. Get AI-powered fixes and learn how to check your sitemap.',
  keywords: 'sitemap checker, xml sitemap checker, how to check sitemap, sitemap validator, sitemap audit, check sitemap online, sitemap errors',
  alternates: { canonical: 'https://sitemapfixer.com/sitemap-checker' },
  openGraph: {
    title: 'Sitemap Checker - Validate & Audit Your XML Sitemap',
    description: 'Check your sitemap for issues: broken URLs, inconsistent patterns, stale pages, and missing sections. Get exact fixes powered by AI.',
    url: 'https://sitemapfixer.com/sitemap-checker',
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

export default function SitemapCheckerPage() {
  return <LandingPage variant="sitemap-checker" />;
}
