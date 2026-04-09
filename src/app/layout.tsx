import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'SitemapFixer - AI Sitemap Checker and SEO Fix Tool',
    template: '%s | SitemapFixer',
  },
  description: 'Free AI sitemap checker and validator. Fix crawled but not indexed pages, find all pages on a website, and check your sitemap for errors in 60 seconds.',
  keywords: 'sitemap checker, xml sitemap checker, sitemap validator, sitemap finder, find sitemap of a website, how to find sitemap of a website, crawled currently not indexed, crawled but not indexed, how to fix crawled currently not indexed, find all pages on a website, how to check sitemap, pages not indexed, sitemap not working, seo checker',
  metadataBase: new URL('https://sitemapfixer.com'),
  alternates: { canonical: 'https://sitemapfixer.com' },
  openGraph: {
    title: 'SitemapFixer - AI Sitemap Checker and SEO Fix Tool',
    description: 'Free AI sitemap checker and validator. Fix crawled but not indexed pages, find all pages on a website, and check your sitemap for errors in 60 seconds.',
    url: 'https://sitemapfixer.com',
    siteName: 'SitemapFixer',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://sitemapfixer.com/opengraph-image',
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

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is SitemapFixer really free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. You get 3 full AI-powered sitemap analyses for free, no credit card required. Upgrade only when you need unlimited analyses.' } },
    { '@type': 'Question', name: 'How do I find the sitemap of a website?', acceptedAnswer: { '@type': 'Answer', text: 'Enter any domain in SitemapFixer. We check 20+ common sitemap locations including /sitemap.xml, /sitemap_index.xml, and references in robots.txt to find all pages on a website. Works with WordPress, Shopify, Next.js, and any platform.' } },
    { '@type': 'Question', name: 'What does the AI analysis include?', acceptedAnswer: { '@type': 'Answer', text: 'A prioritized list of SEO issues with specific fixes, missing page suggestions, a priority action plan, and affected URLs you can copy-paste directly.' } },
    { '@type': 'Question', name: 'Why are my pages not indexed by Google?', acceptedAnswer: { '@type': 'Answer', text: 'Common reasons include broken sitemaps, noindex tags, crawl budget issues, duplicate content, and orphan pages. Our tool identifies the exact cause for your site.' } },
    { '@type': 'Question', name: 'How is this different from Screaming Frog or Ahrefs?', acceptedAnswer: { '@type': 'Answer', text: 'Those tools require setup and expertise to interpret. SitemapFixer gives you a specific, ranked action plan in 60 seconds -- no crawling, no configuration.' } },
    { '@type': 'Question', name: 'How do I fix Crawled - Currently Not Indexed?', acceptedAnswer: { '@type': 'Answer', text: 'This Google Search Console status means Google crawled your page but chose not to index it. Common fixes include improving content quality, fixing thin content, removing duplicate pages, and strengthening internal links. SitemapFixer identifies the specific cause for each affected URL.' } },
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
