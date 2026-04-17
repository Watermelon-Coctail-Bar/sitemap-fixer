import type { Metadata } from 'next';
import { LandingPage } from '@/components/LandingPage';

export const metadata: Metadata = {
  title: 'Hreflang Tester - Validate International SEO Free',
  description: 'Free hreflang tester. Validate return links, detect missing x-default, flag wrong language codes, and fix asymmetric hreflang across your multi-regional site.',
  keywords: 'hreflang tester, hreflang checker, hreflang validator, hreflang tag checker, hreflang audit, international seo checker, hreflang error checker, hreflang return link checker, x-default checker, multilingual seo checker',
  alternates: { canonical: 'https://sitemapfixer.com/hreflang-tester' },
  openGraph: {
    title: 'Hreflang Tester - Validate International SEO Free',
    description: 'Free hreflang tester. Validate return links, detect missing x-default, and fix international SEO errors.',
    url: 'https://sitemapfixer.com/hreflang-tester',
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

export default function HreflangTesterPage() {
  return <LandingPage variant="hreflang-tester" />;
}
