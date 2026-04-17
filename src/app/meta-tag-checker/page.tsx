import type { Metadata } from 'next';
import { LandingPage } from '@/components/LandingPage';

export const metadata: Metadata = {
  title: 'Meta Tag Checker - Audit Every Page Free',
  description: 'Free meta tag checker. Scan every page for missing meta descriptions, duplicate titles, broken canonicals, and Open Graph issues.',
  keywords: 'meta tag checker, meta description checker, meta tag analyzer, meta tag validator, title tag checker, duplicate meta description checker, meta tag audit, open graph checker, og tag checker, page title checker',
  alternates: { canonical: 'https://sitemapfixer.com/meta-tag-checker' },
  openGraph: {
    title: 'Meta Tag Checker - Audit Every Page Free',
    description: 'Free meta tag checker. Flag missing meta descriptions, duplicate titles, and canonical issues across your whole site.',
    url: 'https://sitemapfixer.com/meta-tag-checker',
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

export default function MetaTagCheckerPage() {
  return <LandingPage variant="meta-tag-checker" />;
}
