import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'SitemapFixer - AI Sitemap Checker and SEO Fix Tool',
    template: '%s',
  },
  description: 'Free AI-powered sitemap checker. Find sitemap errors, fix indexing issues, and get exact actionable SEO improvements in 60 seconds.',
  keywords: 'sitemap checker, sitemap validator, sitemap not working, pages not indexed, xml sitemap, seo checker',
  metadataBase: new URL('https://sitemapfixer.com'),
  alternates: { canonical: 'https://sitemapfixer.com' },
  openGraph: {
    title: 'SitemapFixer - AI Sitemap Checker',
    description: 'Free AI-powered sitemap checker. Find errors, fix indexing issues, get exact SEO improvements in 60 seconds.',
    url: 'https://sitemapfixer.com',
    siteName: 'SitemapFixer',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SitemapFixer - AI Sitemap Checker',
    description: 'Free AI-powered sitemap checker. Fix indexing issues in 60 seconds.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="grain">{children}</body>
    </html>
  );
}
