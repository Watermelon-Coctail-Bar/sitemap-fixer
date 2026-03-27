'use client';

import { useState } from 'react';
import { Hero } from '@/components/Hero';
import { Loading } from '@/components/Loading';
import { Results } from '@/components/Results';

type AppState = 'idle' | 'loading' | 'results' | 'error';

export default function Home() {
  const [state, setState] = useState<AppState>('idle');
  const [domain, setDomain] = useState('');
  const [results, setResults] = useState<null | object>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleAnalyze(inputDomain: string) {
    setDomain(inputDomain);
    setState('loading');
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
        if (data.error === 'no_sitemap') {
          setError(data.message);
        } else {
          setError(data.error || 'Something went wrong. Please try again.');
        }
        setState('error');
        return;
      }

      setResults(data);
      setState('results');
    } catch {
      setError('Network error. Please check your connection and try again.');
      setState('error');
    }
  }

  function reset() {
    setState('idle');
    setResults(null);
    setError(null);
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--paper)' }}>
      {/* Nav */}
      <nav
        style={{
          borderBottom: '1px solid var(--border)',
          background: 'rgba(250,250,249,0.85)',
          backdropFilter: 'blur(12px)',
          position: 'sticky',
          top: 0,
          zIndex: 100,
        }}
      >
        <div
          style={{
            maxWidth: 960,
            margin: '0 auto',
            padding: '14px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <a
            href="/"
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: 20,
              color: 'var(--ink)',
              textDecoration: 'none',
              letterSpacing: '-0.01em',
            }}
          >
            SitemapAI
          </a>
          <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
            <a href="/sitemap-finder" style={{ fontSize: 13, color: 'var(--muted)', textDecoration: 'none' }}>Sitemap Finder</a>
            <a href="/sitemap-checker" style={{ fontSize: 13, color: 'var(--muted)', textDecoration: 'none' }}>Sitemap Checker</a>
            <a href="/website-seo-checker" style={{ fontSize: 13, color: 'var(--muted)', textDecoration: 'none' }}>SEO Checker</a>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main>
        {state === 'idle' && (
          <Hero onSubmit={handleAnalyze} loading={false} variant="default" />
        )}

        {state === 'loading' && (
          <Loading domain={domain} />
        )}

        {state === 'error' && (
          <div style={{ maxWidth: 540, margin: '80px auto', padding: '0 24px', textAlign: 'center' }}>
            <div style={{ fontSize: 40, marginBottom: 20 }}>🔍</div>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: 'var(--ink)', marginBottom: 12 }}>
              Sitemap not found
            </h2>
            <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.6, marginBottom: 32 }}>
              {error}
            </p>
            <button onClick={reset} className="cta-btn">
              Try another domain
            </button>
          </div>
        )}

        {state === 'results' && results && (
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          <Results data={results as any} onReset={reset} />
        )}
      </main>

      {/* Footer */}
      {state === 'idle' && (
        <footer
          style={{
            borderTop: '1px solid var(--border)',
            padding: '32px 24px',
            textAlign: 'center',
            marginTop: 60,
          }}
        >
          <p style={{ fontSize: 13, color: 'var(--muted-2)' }}>
            © 2025 SitemapAI · Built for SEOs who want answers, not reports
          </p>
        </footer>
      )}
    </div>
  );
}
