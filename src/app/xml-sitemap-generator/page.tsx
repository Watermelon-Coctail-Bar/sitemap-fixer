import type { Metadata } from 'next';
import { LandingPage } from '@/components/LandingPage';
export const metadata: Metadata = {
  title: 'XML Sitemap Generator — Create & Fix Your Sitemap Free',
  description: 'Generate insights from your XML sitemap instantly. AI-powered fix list in 60 seconds.',
  alternates: { canonical: 'https://sitemapfixer.com/xml-sitemap-generator' },
};
export default function Page() { return <LandingPage variant='xml-sitemap-generator' />; }
