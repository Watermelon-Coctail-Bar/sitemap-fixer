import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'SitemapFixer - AI Sitemap Checker and SEO Fix Tool';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #0f1b3d 100%)',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            marginBottom: 40,
          }}
        >
          <svg width="48" height="48" viewBox="0 0 28 28" fill="none">
            <rect width="28" height="28" rx="7" fill="white" />
            <path d="M7 9h14M7 14h10M7 19h12" stroke="#0a0a0f" strokeWidth="2" strokeLinecap="round" />
            <circle cx="21" cy="19" r="3" fill="#2d5be3" />
          </svg>
          <span style={{ fontSize: 36, fontWeight: 600, color: 'white' }}>SitemapFixer</span>
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: 'white',
            textAlign: 'center',
            lineHeight: 1.15,
            marginBottom: 24,
            maxWidth: 800,
          }}
        >
          AI Sitemap Checker &
          <br />
          SEO Fix Tool
        </div>
        <div
          style={{
            fontSize: 22,
            color: '#9ca3af',
            textAlign: 'center',
            maxWidth: 600,
            lineHeight: 1.5,
          }}
        >
          Find sitemap errors and get actionable SEO fixes in 60 seconds. Free.
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            marginTop: 40,
            background: 'rgba(45, 91, 227, 0.2)',
            border: '1px solid rgba(45, 91, 227, 0.4)',
            borderRadius: 99,
            padding: '8px 24px',
          }}
        >
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e' }} />
          <span style={{ fontSize: 16, color: '#93c5fd', fontWeight: 600 }}>Free AI SEO Analysis</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
