import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 7,
          background: '#0a0a0f',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M7 9h14M7 14h10M7 19h12" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="21" cy="19" r="3" fill="#2d5be3" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
