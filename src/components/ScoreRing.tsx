'use client';

interface ScoreRingProps {
  score: number;
  size?: number;
}

export function ScoreRing({ score, size = 120 }: ScoreRingProps) {
  const r = (size - 16) / 2;
  const circumference = 2 * Math.PI * r;
  const offset = circumference - (score / 100) * circumference;

  const color =
    score >= 70 ? 'var(--score-high)' :
    score >= 40 ? 'var(--score-mid)' :
    'var(--score-low)';

  const label =
    score >= 70 ? 'Good' :
    score >= 40 ? 'Needs Work' :
    'Critical';

  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="score-ring"
        style={{ display: 'block' }}
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="var(--border)"
          strokeWidth={8}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={8}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="score-ring-fill"
          strokeLinecap="round"
        />
      </svg>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span style={{ fontSize: size * 0.24, fontWeight: 700, color: 'var(--ink)', lineHeight: 1 }}>
          {score}
        </span>
        <span style={{ fontSize: size * 0.1, color, fontWeight: 600, marginTop: 2 }}>{label}</span>
      </div>
    </div>
  );
}
