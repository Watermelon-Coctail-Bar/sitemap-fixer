'use client';

import { useState } from 'react';
import { Hero } from './Hero';
import { Loading } from './Loading';
import { AuthLink } from './AuthLink';
import { Footer } from './Footer';
import { Results } from './Results';

type Variant = 'sitemap-finder' | 'sitemap-checker' | 'website-seo-checker' | 'xml-sitemap-generator' | 'free-seo-audit' | 'robots-txt-checker' | 'meta-tag-checker' | 'canonical-checker' | 'hreflang-tester';

const FAQ: Record<Variant, Array<{ q: string; a: string }>> = {
  'sitemap-finder': [
    { q: 'How do you find the sitemap?', a: 'We check /sitemap.xml, /sitemap_index.xml, robots.txt references, and a dozen common paths - automatically.' },
    { q: 'What if my site has no sitemap?', a: "We'll tell you, and explain exactly how to create one based on your site type." },
    { q: 'Do you support sitemap index files?', a: 'Yes. We parse sitemap indexes and crawl child sitemaps to get a complete picture.' },
  ],
  'sitemap-checker': [
    { q: 'What issues do you detect?', a: 'Inconsistent URL patterns, stale pages (>1yr old), missing lastmod tags, depth anomalies, and isolated orphan-like pages.' },
    { q: 'Is this a crawler?', a: 'No. We analyze your sitemap only - no heavy crawling. That\'s why it\'s fast.' },
    { q: 'How is this different from Screaming Frog?', a: 'We focus on actionable recommendations, not raw data dumps. You get a ranked fix list, not a spreadsheet.' },
  ],
  'xml-sitemap-generator': [
    { q: 'Do you generate a new sitemap file?', a: "We analyze your existing sitemap and tell you exactly what to fix - structure, stale pages, missing sections. We make your sitemap work better for SEO." },
    { q: 'What XML sitemap formats do you support?', a: 'Standard urlset, sitemap index files, and nested child sitemaps. WordPress, Shopify, Next.js, and custom formats all work.' },
    { q: 'How many URLs can you analyze?', a: 'Up to 500 URLs on the free tier, parsing across multiple child sitemaps automatically.' },
  ],
  'free-seo-audit': [
    { q: 'Is it really free?', a: 'Yes. No credit card needed. Enter your domain and get the full analysis instantly.' },
    { q: 'What does the audit cover?', a: 'Site structure, content gaps, missing high-value pages, internal linking opportunities, stale content, and URL pattern issues.' },
    { q: "How is this different from other free SEO tools?", a: "Most tools give you generic scores. We give you specific pages to create, fix, and link - based on your actual site, not industry averages." },
  ],
  'website-seo-checker': [
    { q: 'What makes this different from Ahrefs or SEMrush?', a: 'We analyze your actual site structure and give domain-specific recommendations - not generic metrics and scores.' },
    { q: 'How does the AI analysis work?', a: 'We pass your URL structure, clusters, and page dates to Claude AI, which generates recommendations specific to your site patterns.' },
    { q: 'Is it free?', a: 'The core analysis is free. Full reports, monitoring, and history are part of our Pro plan.' },
  ],
  'robots-txt-checker': [
    { q: 'What does the robots.txt checker analyze?', a: 'We fetch your robots.txt, validate its syntax, check each Disallow rule against your actual sitemap URLs, and flag pages accidentally blocked from crawling.' },
    { q: 'Can I check robots.txt without a sitemap?', a: 'Yes. Enter your domain and we parse the robots.txt directly. We also cross-check against your sitemap if one exists to catch conflicts.' },
    { q: 'Will it detect conflicts with my sitemap?', a: 'Yes. If your sitemap lists URLs that robots.txt blocks, we highlight every conflict - one of the most common SEO mistakes we find.' },
  ],
  'meta-tag-checker': [
    { q: 'What meta tags do you check?', a: 'Title, meta description, canonical, robots (noindex/nofollow), Open Graph, Twitter Cards, and hreflang - across all pages in your sitemap.' },
    { q: 'Do you check every page?', a: 'Up to 500 pages on the free tier. We analyze meta tag patterns across your whole site, not just a sample.' },
    { q: 'Can I find pages with missing meta descriptions?', a: 'Yes. We flag every page missing a meta description, every duplicate title, and every canonical mismatch - with a ranked fix list.' },
  ],
  'canonical-checker': [
    { q: 'What does the canonical tag checker do?', a: 'We verify that every page in your sitemap has a correct canonical tag pointing to itself - the #1 source of duplicate content penalties.' },
    { q: 'How do you detect canonical conflicts?', a: 'We flag pages with canonical tags pointing to other URLs, canonical chains, protocol mismatches (HTTP vs HTTPS), and trailing slash inconsistencies.' },
    { q: 'Why are canonical tags important for SEO?', a: 'Google uses canonical tags to pick which version of a page to index. Wrong canonicals cause the wrong page to rank or no page to rank at all.' },
  ],
  'hreflang-tester': [
    { q: 'What does the hreflang tester check?', a: 'We verify hreflang tags across your international pages: return-link validation, language/region codes, x-default setup, and sitemap-level hreflang.' },
    { q: 'Can I use it for multi-regional sites?', a: 'Yes. We handle country-language combos (en-us, en-gb, de-de, etc.), detect missing return tags, and flag conflicting signals between HTML and sitemap.' },
    { q: 'What hreflang errors are most common?', a: 'Missing self-reference, no return link (asymmetric hreflang), wrong language codes, pointing to 404 pages, and missing x-default.' },
  ],
};

interface LandingPageProps {
  variant: Variant;
}

export function LandingPage({ variant }: LandingPageProps) {
  const [appState, setAppState] = useState<'idle' | 'loading' | 'results' | 'error'>('idle');
  const [domain, setDomain] = useState('');
  const [results, setResults] = useState<null | object>(null);
  const [error, setError] = useState<string | null>(null);

  const faqs = FAQ[variant];

  async function handleAnalyze(inputDomain: string) {
    setDomain(inputDomain);
    setAppState('loading');
    setError(null);
    setResults(null);

    try {
      const res = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ domain: inputDomain }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.message || data.error || 'Something went wrong.');
        setAppState('error');
        return;
      }
      setResults(data);
      setAppState('results');
    } catch {
      setError('Network error. Please try again.');
      setAppState('error');
    }
  }

  function reset() {
    setAppState('idle');
    setResults(null);
    setError(null);
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--paper)' }}>
      {/* Nav */}
      <nav style={{ borderBottom: '1px solid var(--border)', background: 'rgba(250,250,249,0.85)', backdropFilter: 'blur(12px)', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect width="28" height="28" rx="7" fill="#0a0a0f"/><path d="M7 9h14M7 14h10M7 19h12" stroke="white" strokeWidth="2" strokeLinecap="round"/><circle cx="21" cy="19" r="3" fill="#2d5be3"/></svg>
            <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: 20, color: 'var(--ink)' }}>SitemapFixer</span>
          </a>
          <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
            <a href="/learn" style={{ fontSize: 14, color: 'var(--muted)', textDecoration: 'none' }}>Learn</a>
            <a href="/blog" style={{ fontSize: 14, color: 'var(--muted)', textDecoration: 'none' }}>Blog</a>
            <AuthLink style={{ fontSize: 14, color: 'var(--muted)', textDecoration: 'none' }} />
            <a href="/pricing" style={{ fontSize: 14, color: 'var(--muted)', textDecoration: 'none' }}>Pricing</a>
            <a href="/" style={{ fontSize: 13, color: 'white', background: '#0a0a0f', padding: '7px 16px', borderRadius: 8, textDecoration: 'none', fontWeight: 600 }}>Try Free</a>
          </div>
        </div>
      </nav>

      <main>
        {appState === 'idle' && (
          <>
            <Hero onSubmit={handleAnalyze} loading={false} variant={variant} />

            {/* FAQ */}
            <div style={{ maxWidth: 640, margin: '0 auto 80px', padding: '0 24px' }}>
              <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 28, color: 'var(--ink)', marginBottom: 28, textAlign: 'center' }}>
                Common questions
              </h2>
              {faqs.map((faq, i) => (
                <div key={i} style={{ borderBottom: '1px solid var(--border)', padding: '20px 0' }}>
                  <div style={{ fontWeight: 600, fontSize: 15, color: 'var(--ink)', marginBottom: 8 }}>{faq.q}</div>
                  <div style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.6 }}>{faq.a}</div>
                </div>
              ))}
            </div>
          </>
        )}

        {appState === 'loading' && <Loading domain={domain} />}

        {appState === 'error' && (
          <div style={{ maxWidth: 540, margin: '80px auto', padding: '0 24px', textAlign: 'center' }}>
            <div style={{ fontSize: 40, marginBottom: 20 }}>🔍</div>
            <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 12 }}>Could not find sitemap</h2>
            <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.6, marginBottom: 32 }}>{error}</p>
            <button onClick={reset} className="cta-btn">Try another domain</button>
          </div>
        )}

        {appState === 'results' && results && (
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          <Results data={results as any} onReset={reset} />
        )}
      </main>

      {appState === 'idle' && <Footer />}
    </div>
  );
}
