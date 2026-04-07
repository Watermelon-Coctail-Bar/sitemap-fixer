import type { Metadata } from 'next';
import { LandingPage } from '@/components/LandingPage';

export const metadata: Metadata = {
  title: 'Sitemap Checker - Validate & Audit Your XML Sitemap',
  description: 'Check your sitemap for issues: broken URLs, inconsistent patterns, stale pages, and missing sections. Get exact fixes powered by AI.',
  keywords: 'sitemap checker, sitemap validator, xml sitemap audit, sitemap errors',
  alternates: { canonical: 'https://sitemapfixer.com/sitemap-checker' },
  openGraph: {
    title: 'Sitemap Checker - Validate & Audit Your XML Sitemap',
    description: 'Check your sitemap for issues: broken URLs, inconsistent patterns, stale pages, and missing sections. Get exact fixes powered by AI.',
    url: 'https://sitemapfixer.com/sitemap-checker',
    type: 'website',
  },
};

export default function SitemapCheckerPage() {
  return <LandingPage variant="sitemap-checker" />;
}
