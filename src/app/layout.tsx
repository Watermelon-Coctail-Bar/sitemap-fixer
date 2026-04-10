import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'SitemapFixer - Fix Crawled Currently Not Indexed | Free Sitemap Checker',
    template: '%s | SitemapFixer',
  },
  description: 'Free AI sitemap checker. Fix crawled - currently not indexed pages in Google Search Console. Find all pages on a website, verify sitemap errors, and get an SEO fix list in 60 seconds.',
  keywords: 'crawled - currently not indexed, crawled currently not indexed, crawled but not indexed, how to fix crawled - currently not indexed, crawled currently not indexed fix, sitemap checker, xml sitemap checker, sitemap finder, find all pages on a website, verify sitemap, site indexing, webpage indexing, discovered - currently not indexed, google crawled but not indexed, crawled not indexed, page is not indexed crawled currently not indexed, sitemap validator, how to check sitemap',
  metadataBase: new URL('https://sitemapfixer.com'),
  alternates: { canonical: 'https://sitemapfixer.com' },
  openGraph: {
    title: 'SitemapFixer - Fix Crawled Currently Not Indexed | Free Sitemap Checker',
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
        alt: 'SitemapFixer - Fix Crawled Currently Not Indexed | Free Sitemap Checker',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SitemapFixer - Fix Crawled Currently Not Indexed | Free Sitemap Checker',
    description: 'Free AI sitemap checker. Fix crawled - currently not indexed pages and get a prioritized SEO fix list in 60 seconds.',
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
  description: 'AI-powered sitemap checker and SEO fix tool. Fix crawled currently not indexed, find all pages on a website, verify sitemap, and get actionable fixes in 60 seconds.',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '127',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is SitemapFixer really free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Create a free account and get 1 full AI-powered sitemap analysis per month with no credit card required. Upgrade to Pro for unlimited analyses.' } },
    { '@type': 'Question', name: 'How do I find all pages on a website?', acceptedAnswer: { '@type': 'Answer', text: 'Enter any domain in SitemapFixer. We check 20+ common sitemap locations including /sitemap.xml, /sitemap_index.xml, and robots.txt to find all pages on a website. You can list all pages on a website, find all subpages, and see all pages of a website online.' } },
    { '@type': 'Question', name: 'How do I fix Crawled - Currently Not Indexed?', acceptedAnswer: { '@type': 'Answer', text: 'The crawled currently not indexed fix starts with identifying why Google crawled but not indexed your page. Common causes include thin content, duplicate pages, or poor internal linking. SitemapFixer identifies the exact cause for each affected URL so you know how to fix crawled currently not indexed pages.' } },
    { '@type': 'Question', name: 'What is the difference between crawled not indexed and discovered not indexed?', acceptedAnswer: { '@type': 'Answer', text: 'Crawled - currently not indexed means Google visited your page but chose not to index it. Discovered - currently not indexed means Google found the URL but has not crawled it yet. Both are webpage indexing issues that SitemapFixer helps diagnose.' } },
    { '@type': 'Question', name: 'How do I verify my sitemap?', acceptedAnswer: { '@type': 'Answer', text: 'Use our free XML sitemap checker to verify your sitemap. We validate the format, check for broken URLs, redirects, noindex conflicts, and canonical mismatches. The fastest way to check your sitemap for errors that hurt site indexing.' } },
    { '@type': 'Question', name: 'How is this different from Screaming Frog or Ahrefs?', acceptedAnswer: { '@type': 'Answer', text: 'Those tools require setup and expertise to interpret. SitemapFixer gives you a specific, ranked action plan in 60 seconds — no crawling, no configuration. Perfect for quickly diagnosing crawled but not indexed issues and sitemap errors.' } },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="grain">{children}</body>
    </html>
  );
}
