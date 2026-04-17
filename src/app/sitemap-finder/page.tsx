import type { Metadata } from 'next';
import { LandingPage } from '@/components/LandingPage';

export const metadata: Metadata = {
  title: 'Sitemap Finder - Find All Pages Free',
  description: 'Find the sitemap of any website instantly. See all pages, list subpages, and discover sitemaps. Checks /sitemap.xml, robots.txt, and 20+ paths.',
  keywords: 'sitemap finder, find all pages on a website, find all pages on a website online, how to find sitemap of a website, how to see the sitemap of a website, how to see sitemap, how to find a sitemap, find all subpages of a website, list all pages on a website, see all pages of a website, page finder',
  alternates: { canonical: 'https://sitemapfixer.com/sitemap-finder' },
  openGraph: {
    title: 'Sitemap Finder - Find All Pages Free',
    description: 'Find the sitemap of any website. See all pages and subpages online. Checks /sitemap.xml, robots.txt, and 20+ common paths.',
    url: 'https://sitemapfixer.com/sitemap-finder',
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

export default function SitemapFinderPage() {
  return <LandingPage variant="sitemap-finder" />;
}
