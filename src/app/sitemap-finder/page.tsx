import type { Metadata } from 'next';
import { LandingPage } from '@/components/LandingPage';

export const metadata: Metadata = {
  title: 'Sitemap Finder - Find Any Website\'s Sitemap',
  description: 'Find the sitemap of any website instantly. Enter a domain to discover its sitemap URL, check /sitemap.xml, robots.txt, and 20+ common paths. See all pages on a website and get SEO recommendations.',
  keywords: 'sitemap finder, how to find sitemap of a website, how to see the sitemap of a website, find all pages on a website, find sitemap, sitemap url finder',
  alternates: { canonical: 'https://sitemapfixer.com/sitemap-finder' },
  openGraph: {
    title: 'Sitemap Finder - Find Any Website\'s Sitemap',
    description: 'Enter any domain and find its sitemap in seconds. Checks /sitemap.xml, robots.txt, and common paths. Then get AI-powered SEO recommendations.',
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
