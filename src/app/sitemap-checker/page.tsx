import type { Metadata } from 'next';
import { LandingPage } from '@/components/LandingPage';

export const metadata: Metadata = {
  title: 'Sitemap Checker - Free XML Sitemap Checker & Validator',
  description: 'Free XML sitemap checker and validator. Check your sitemap for broken URLs, crawled but not indexed pages, and stale content. Verify sitemap health and get AI-powered fixes.',
  keywords: 'sitemap checker, xml sitemap checker, how to check sitemap, verify sitemap, sitemap validator, check sitemap online, sitemap audit, sitemap errors, crawled but not indexed, webpage indexing',
  alternates: { canonical: 'https://sitemapfixer.com/sitemap-checker' },
  openGraph: {
    title: 'Sitemap Checker - Free XML Sitemap Checker & Validator',
    description: 'Free XML sitemap checker. Verify your sitemap for broken URLs, crawled but not indexed pages, and stale content. Get AI-powered SEO fixes.',
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
