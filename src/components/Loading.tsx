'use client';

import { useEffect, useState } from 'react';

const STEPS = [
  { label: 'Fetching robots.txt', detail: 'Checking for sitemap references…' },
  { label: 'Discovering sitemap', detail: 'Probing common sitemap paths…' },
  { label: 'Parsing URLs', detail: 'Extracting pages, dates, structure…' },
  { label: 'Clustering sections', detail: 'Grouping pages into site sections…' },
  { label: 'Running AI analysis', detail: 'Generating actionable recommendations…' },
];

interface LoadingProps {
  domain: string;
}

export function Loading({ domain }: LoadingProps) {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep(s => Math.min(s + 1, STEPS.length - 1));
    }, 2400);

    const progressInterval = setInterval(() => {
      setProgress(p => {
        if (p >= 92) return p;
        return p + Math.random() * 3;
      });
    }, 200);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, []);

  const pct = Math.round(progress);

  return (
    <div
      style={{
        maxWidth: 540,
        margin: '0 auto',
        padding: '60px 24px',
        textAlign: 'center',
      }}
    >
      {/* Domain badge */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          background: 'var(--border-2)',
          border: '1px solid var(--border)',
          borderRadius: 99,
          padding: '6px 16px',
          fontSize: 13,
          fontFamily: "'DM Mono', monospace",
          color: 'var(--ink-3)',
          marginBottom: 40,
        }}
      >
        <span
          style={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: 'var(--accent)',
            display: 'inline-block',
            animation: 'pulse-dot 1.2s ease-in-out infinite',
          }}
        />
        {domain}
      </div>

      {/* Main status */}
      <div
        style={{
          fontSize: 22,
          fontWeight: 700,
          color: 'var(--ink)',
          marginBottom: 8,
          minHeight: 32,
        }}
      >
        {STEPS[step].label}
      </div>
      <div style={{ fontSize: 14, color: 'var(--muted)', marginBottom: 40 }}>
        {STEPS[step].detail}
      </div>

      {/* Progress bar */}
      <div className="progress-bar" style={{ marginBottom: 12 }}>
        <div
          className="progress-fill"
          style={{
            width: `${pct}%`,
            background: 'linear-gradient(90deg, var(--accent) 0%, #5b8aff 100%)',
            transition: 'width 0.3s ease',
          }}
        />
      </div>
      <div style={{ fontSize: 12, color: 'var(--muted-2)', fontFamily: "'DM Mono', monospace" }}>
        {pct}%
      </div>

      {/* Step list */}
      <div style={{ marginTop: 48, textAlign: 'left' }}>
        {STEPS.map((s, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '10px 0',
              borderBottom: '1px solid var(--border-2)',
              opacity: i > step ? 0.35 : 1,
              transition: 'opacity 0.3s',
            }}
          >
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: '50%',
                background:
                  i < step
                    ? 'var(--green)'
                    : i === step
                    ? 'var(--accent)'
                    : 'var(--border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                transition: 'background 0.3s',
              }}
            >
              {i < step ? (
                <span style={{ color: 'white', fontSize: 11, fontWeight: 700 }}>✓</span>
              ) : i === step ? (
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: 'white',
                    display: 'block',
                    animation: 'pulse-dot 1.2s ease-in-out infinite',
                  }}
                />
              ) : null}
            </div>
            <span
              style={{
                fontSize: 13,
                color: i <= step ? 'var(--ink)' : 'var(--muted)',
                fontWeight: i === step ? 600 : 400,
              }}
            >
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
