import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Free Sitemap Checker — Fix Crawled Not Indexed',
    template: '%s',
  },
  description: 'Free AI sitemap checker. Fix crawled - currently not indexed pages in Google Search Console. Verify sitemap errors and get an SEO fix list in 60 seconds.',
  metadataBase: new URL('https://sitemapfixer.com'),
  alternates: { canonical: 'https://sitemapfixer.com' },
  openGraph: {
    title: 'Free Sitemap Checker — Fix Crawled Not Indexed',
    description: 'Free AI sitemap checker. Fix crawled - currently not indexed pages in Google Search Console. Find all pages on a website and get an SEO fix list in 60 seconds.',
    url: 'https://sitemapfixer.com',
    siteName: 'SitemapFixer',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://sitemapfixer.com/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'SitemapFixer — Free AI Sitemap Checker',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://sitemapfixer.com/opengraph-image'],
  },
  verification: {
    google: '1_bEeXT1am94lZ5MABuAJZ3hRpQjUy1KaU8LC7D5qF0',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'SitemapFixer',
  url: 'https://sitemapfixer.com',
  description: 'Free AI-powered sitemap checker. Fix crawled - currently not indexed pages, find sitemap errors, verify sitemap health, and get actionable SEO fixes in 60 seconds.',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://sitemapfixer.com/?domain={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="grain">{children}</body>
    </html>
  );
}
