import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sitemap Finder & AI SEO Fixer - Fix Your SEO in 60 Seconds',
  description:
    'Find your sitemap, analyze it with AI, and get exact actionable SEO fixes. Not generic advice - specific pages to create, fix, and link.',
  keywords: 'sitemap finder, sitemap checker, seo checker, ai seo analysis, website seo audit',
  openGraph: {
    title: 'Sitemap Finder & AI SEO Fixer',
    description: 'Get exact, actionable SEO improvements from your sitemap in 60 seconds.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="grain">{children}</body>
    </html>
  );
}
