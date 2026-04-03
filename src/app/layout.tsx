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
    title: 'SitemapFixer - AI Sitemap Checker and SEO Fix Tool',
    description: 'Free AI-powered sitemap checker. Find sitemap errors, fix indexing issues, and get exact actionable SEO improvements in 60 seconds.',
    url: 'https://sitemapfixer.com',
    siteName: 'SitemapFixer',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://sitemapfixer.com/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'SitemapFixer - AI Sitemap Checker and SEO Fix Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SitemapFixer - AI Sitemap Checker and SEO Fix Tool',
    description: 'Free AI-powered sitemap checker. Fix indexing issues in 60 seconds.',
    images: ['https://sitemapfixer.com/og-image.svg'],
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
  description: 'Free AI-powered sitemap checker. Find sitemap errors, fix indexing issues, and get exact actionable SEO improvements in 60 seconds.',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://sitemapfixer.com/?domain={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'SitemapFixer',
  url: 'https://sitemapfixer.com',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  description: 'AI-powered sitemap checker and SEO fix tool. Analyze your sitemap, find indexing errors, and get actionable recommendations in 60 seconds.',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '127',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
      </head>
      <body className="grain">{children}</body>
    </html>
  );
}
