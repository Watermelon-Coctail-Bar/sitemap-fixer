import type { Metadata } from 'next';
import { LandingPage } from '@/components/LandingPage';

export const metadata: Metadata = {
  title: 'Canonical Tag Checker - Fix Duplicate Content Free',
  description: 'Free canonical tag checker. Verify canonicals across every page, detect chains, protocol mismatches, and conflicts that cause duplicate content penalties.',
  keywords: 'canonical tag checker, canonical url checker, canonical tag validator, rel canonical checker, canonical tag tester, canonical tag audit, duplicate content checker, canonical issue detector, canonical url finder, canonical link checker',
  alternates: { canonical: 'https://sitemapfixer.com/canonical-checker' },
  openGraph: {
    title: 'Canonical Tag Checker - Fix Duplicate Content Free',
    description: 'Free canonical tag checker. Verify canonicals, detect chains, and catch conflicts that hurt SEO.',
    url: 'https://sitemapfixer.com/canonical-checker',
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

export default function CanonicalCheckerPage() {
  return <LandingPage variant="canonical-checker" />;
}
