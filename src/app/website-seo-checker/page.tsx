import type { Metadata } from 'next';
import { LandingPage } from '@/components/LandingPage';

export const metadata: Metadata = {
  title: 'Website SEO Checker - Fix Crawled Not Indexed & Site Indexing Issues',
  description: 'Free website SEO checker. Find crawled currently not indexed pages, webpage indexing issues, and site indexing problems. Get a prioritized fix list in 60 seconds.',
  keywords: 'website seo checker, site indexing, webpage indexing, crawled currently not indexed, crawled but not indexed, seo audit tool, free seo checker, google crawled but not indexed',
  alternates: { canonical: 'https://sitemapfixer.com/website-seo-checker' },
  openGraph: {
    title: 'Website SEO Checker - Fix Crawled Not Indexed & Site Indexing Issues',
    description: 'Free website SEO checker. Find crawled currently not indexed pages, webpage indexing issues, and site indexing problems. Get an AI-powered fix list in 60 seconds.',
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
