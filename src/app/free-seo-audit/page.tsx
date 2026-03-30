import type { Metadata } from 'next';
import { LandingPage } from '@/components/LandingPage';
export const metadata: Metadata = {
  title: 'Free SEO Audit — AI-Powered Site Audit in 60 Seconds',
  description: 'Run a free SEO audit on any website. No email required. Get a prioritized fix list instantly.',
  alternates: { canonical: 'https://sitemapfixer.com/free-seo-audit' },
};
export default function Page() { return <LandingPage variant='free-seo-audit' />; }
