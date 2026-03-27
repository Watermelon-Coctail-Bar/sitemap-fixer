import type { Metadata } from 'next';
import { LandingPage } from '@/components/LandingPage';

export const metadata: Metadata = {
  title: 'Website SEO Checker — AI-Powered SEO Audit in 60 Seconds',
  description: 'Stop guessing what\'s wrong with your SEO. Enter your domain and get a prioritized action plan based on your actual site structure — not generic advice.',
  keywords: 'website seo checker, seo audit tool, seo analysis, site seo checker, free seo checker',
};

export default function WebsiteSEOCheckerPage() {
  return <LandingPage variant="website-seo-checker" />;
}
