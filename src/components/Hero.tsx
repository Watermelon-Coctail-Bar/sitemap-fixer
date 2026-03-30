'use client';

import { useState } from 'react';

interface HeroProps {
  onSubmit: (domain: string) => void;
  loading: boolean;
  variant?: 'default' | 'sitemap-finder' | 'sitemap-checker' | 'website-seo-checker';
}

const COPY = {
  default: {
    eyebrow: 'AI-powered SEO analysis',
    headline: 'Fix your SEO in\n60 seconds.',
    sub: 'Enter your domain and get exact, actionable SEO improvements — not generic tips. We analyze your sitemap and tell you what to fix, what to create, and what to do next.',
    cta: 'Analyze My Site',
    placeholder: 'example.com',
  },
  'sitemap-finder': {
    eyebrow: 'Sitemap Finder',
    headline: 'Find your sitemap.\nFix your SEO.',
    sub: 'Instantly locate your sitemap, parse every URL, and get AI-powered recommendations specific to your site structure.',
    cta: 'Find Sitemap',
    placeholder: 'yourdomain.com',
  },
  'sitemap-checker': {
    eyebrow: 'Sitemap Checker',
    headline: 'Is your sitemap\nworking for you?',
    sub: 'Check your sitemap for errors, inconsistencies, and missed SEO opportunities. Get a full report with specific fixes.',
    cta: 'Check Sitemap',
    placeholder: 'yourdomain.com',
  },
  'xml-sitemap-generator': {
    eyebrow: 'XML Sitemap Generator',
    headline: 'Analyze your sitemap.\nGet exact fixes.',
    sub: 'Enter your domain — we find your XML sitemap, parse every URL, and generate an AI-powered action plan to fix structure, gaps, and freshness issues.',
    cta: 'Analyze Sitemap',
    placeholder: 'yourdomain.com',
  },
  'free-seo-audit': {
    eyebrow: 'Free SEO Audit',
    headline: 'Your free SEO audit\nin 60 seconds.',
    sub: 'No forms. No email required. Just enter your domain and get a prioritized SEO fix list based on your actual site structure — powered by AI.',
    cta: 'Run Free Audit',
    placeholder: 'yourdomain.com',
  },
  'website-seo-checker': {
    eyebrow: 'Website SEO Checker',
    headline: 'Your site has SEO\ngaps. Let\'s find them.',
    sub: 'Stop guessing what\'s wrong with your SEO. Our AI analyzes your site structure and gives you a prioritized action plan.',
    cta: 'Check SEO',
    placeholder: 'yourdomain.com',
  },
};

const EXAMPLES = ['stripe.com', 'linear.app', 'vercel.com', 'notion.so'];

export function Hero({ onSubmit, loading, variant = 'default' }: HeroProps) {
  const [domain, setDomain] = useState('');
  const copy = COPY[variant];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (domain.trim()) onSubmit(domain.trim());
  };

  return (
    <div
      style={{
        maxWidth: 720,
        margin: '0 auto',
        padding: '80px 24px 60px',
        textAlign: 'center',
      }}
    >
      {/* Eyebrow */}
      <div
        className="anim-fade-up"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          background: 'var(--accent-light)',
          border: '1px solid rgba(45,91,227,0.2)',
          borderRadius: 99,
          padding: '5px 14px',
          fontSize: 12,
          fontWeight: 600,
          color: 'var(--accent)',
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
          marginBottom: 28,
        }}
      >
        <span style={{ fontSize: 10 }}>●</span>
        {copy.eyebrow}
      </div>

      {/* Headline */}
      <h1
        className="anim-fade-up anim-fade-up-1 font-serif"
        style={{
          fontSize: 'clamp(44px, 7vw, 72px)',
          fontWeight: 400,
          lineHeight: 1.08,
          color: 'var(--ink)',
          marginBottom: 20,
          whiteSpace: 'pre-line',
          letterSpacing: '-0.02em',
        }}
      >
        {copy.headline}
      </h1>

      {/* Sub */}
      <p
        className="anim-fade-up anim-fade-up-2"
        style={{
          fontSize: 17,
          color: 'var(--muted)',
          lineHeight: 1.65,
          marginBottom: 44,
          maxWidth: 560,
          margin: '0 auto 44px',
        }}
      >
        {copy.sub}
      </p>

      {/* Input form */}
      <form
        onSubmit={handleSubmit}
        className="anim-fade-up anim-fade-up-3"
        style={{
          display: 'flex',
          gap: 10,
          background: 'white',
          border: '1.5px solid var(--border)',
          borderRadius: 14,
          padding: '6px 6px 6px 18px',
          boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
          maxWidth: 580,
          margin: '0 auto',
          transition: 'border-color 0.2s, box-shadow 0.2s',
        }}
        onFocus={e => {
          (e.currentTarget as HTMLFormElement).style.borderColor = 'var(--accent)';
          (e.currentTarget as HTMLFormElement).style.boxShadow = '0 2px 20px var(--accent-glow)';
        }}
        onBlur={e => {
          if (!e.currentTarget.contains(e.relatedTarget)) {
            (e.currentTarget as HTMLFormElement).style.borderColor = 'var(--border)';
            (e.currentTarget as HTMLFormElement).style.boxShadow = '0 2px 16px rgba(0,0,0,0.06)';
          }
        }}
      >
        <input
          type="text"
          value={domain}
          onChange={e => setDomain(e.target.value)}
          placeholder={copy.placeholder}
          disabled={loading}
          style={{
            flex: 1,
            border: 'none',
            outline: 'none',
            fontSize: 16,
            color: 'var(--ink)',
            background: 'transparent',
            fontFamily: "'DM Mono', monospace",
            letterSpacing: '-0.01em',
          }}
          aria-label="Enter your domain"
        />
        <button
          type="submit"
          disabled={loading || !domain.trim()}
          className="cta-btn"
          style={{ flexShrink: 0 }}
        >
          {loading ? (
            <span style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
              <span className="loading-dot" />
              <span className="loading-dot" />
              <span className="loading-dot" />
            </span>
          ) : (
            copy.cta
          )}
        </button>
      </form>

      {/* Example domains */}
      <div
        className="anim-fade-up anim-fade-up-4"
        style={{
          display: 'flex',
          gap: 8,
          justifyContent: 'center',
          marginTop: 20,
          flexWrap: 'wrap',
          alignItems: 'center',
        }}
      >
        <span style={{ fontSize: 12, color: 'var(--muted-2)' }}>Try:</span>
        {EXAMPLES.map(eg => (
          <button
            key={eg}
            onClick={() => setDomain(eg)}
            style={{
              background: 'none',
              border: '1px solid var(--border)',
              borderRadius: 6,
              padding: '3px 10px',
              fontSize: 12,
              fontFamily: "'DM Mono', monospace",
              color: 'var(--muted)',
              cursor: 'pointer',
              transition: 'all 0.15s',
            }}
            onMouseEnter={e => {
              (e.target as HTMLButtonElement).style.borderColor = 'var(--accent)';
              (e.target as HTMLButtonElement).style.color = 'var(--accent)';
            }}
            onMouseLeave={e => {
              (e.target as HTMLButtonElement).style.borderColor = 'var(--border)';
              (e.target as HTMLButtonElement).style.color = 'var(--muted)';
            }}
          >
            {eg}
          </button>
        ))}
      </div>

      {/* Social proof */}
      <div
        className="anim-fade-up anim-fade-up-5"
        style={{
          marginTop: 52,
          display: 'flex',
          gap: 36,
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        {[
          { num: '10K+', label: 'Sites analyzed' },
          { num: '< 60s', label: 'Time to insights' },
          { num: 'AI-powered', label: 'Specific actions' },
        ].map(s => (
          <div key={s.label} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 20, fontWeight: 700, color: 'var(--ink)' }}>{s.num}</div>
            <div style={{ fontSize: 12, color: 'var(--muted-2)', marginTop: 2 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
