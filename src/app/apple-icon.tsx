import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          borderRadius: 36,
          background: '#0a0a0f',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="120" height="120" viewBox="0 0 28 28" fill="none">
          <path d="M7 9h14M7 14h10M7 19h12" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="21" cy="19" r="3" fill="#2d5be3" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
