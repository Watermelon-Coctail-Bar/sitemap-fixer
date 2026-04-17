import type { Metadata } from 'next';
import { LandingPage } from '@/components/LandingPage';
export const metadata: Metadata = {
  title: 'XML Sitemap Generator - Create & Fix Your Sitemap',
  description: 'Analyze your XML sitemap instantly. Get an AI-powered fix list with prioritized SEO recommendations in 60 seconds. Free, no credit card needed.',
  alternates: { canonical: 'https://sitemapfixer.com/xml-sitemap-generator' },
  openGraph: {
    title: 'XML Sitemap Generator - Create & Fix Your Sitemap',
    description: 'Analyze your XML sitemap instantly. Get an AI-powered fix list with prioritized SEO recommendations in 60 seconds. Free, no credit card needed.',
    url: 'https://sitemapfixer.com/xml-sitemap-generator',
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
export default function Page() { return <LandingPage variant='xml-sitemap-generator' />; }
