import type { Metadata } from 'next';
import { LandingPage } from '@/components/LandingPage';

export const metadata: Metadata = {
  title: 'Sitemap Finder — Find Any Website\'s Sitemap Instantly',
  description: 'Enter any domain and find its sitemap in seconds. Checks /sitemap.xml, robots.txt, and common paths. Then get AI-powered SEO recommendations.',
  keywords: 'sitemap finder, find sitemap, sitemap url finder, website sitemap locator',
};

export default function SitemapFinderPage() {
  return <LandingPage variant="sitemap-finder" />;
}
