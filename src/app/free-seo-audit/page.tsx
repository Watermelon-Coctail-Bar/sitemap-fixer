import type { Metadata } from 'next';
import { LandingPage } from '@/components/LandingPage';
export const metadata: Metadata = {
  title: 'Free SEO Audit - Fix Crawled Not Indexed & Sitemap Errors',
  description: 'Free AI SEO audit in 60 seconds. Find crawled but not indexed pages, verify sitemap health, check webpage indexing issues, and get a prioritized fix list. No email required.',
  alternates: { canonical: 'https://sitemapfixer.com/free-seo-audit' },
  openGraph: {
    title: 'Free SEO Audit - Fix Crawled Not Indexed & Sitemap Errors',
    description: 'Free AI SEO audit. Find crawled currently not indexed pages, verify sitemap, check webpage indexing, and get a prioritized fix list in 60 seconds.',
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
