'use client';
import { useState, useEffect } from 'react';

interface PaywallModalProps {
  onClose: () => void;
  domain: string;
}

const PLANS = [
  { id: 'monthly', name: 'Monthly', originalPrice: 13.50, price: 9.45, discount: 30, period: 'month', popular: true },
  { id: 'yearly', name: 'Yearly', originalPrice: 70, price: 42, discount: 40, period: 'year', popular: false },
];

function MiniCountdown() {
  const [s, setS] = useState(1800);
  useEffect(() => {
    const t = setInterval(() => setS(p => p > 0 ? p - 1 : 1800), 1000);
    return () => clearInterval(t);
  }, []);
  const m = Math.floor(s / 60), sec = s % 60;
  return <span style={{ fontWeight: 700, color: '#dc2626' }}>{m}:{String(sec).padStart(2,'0')}</span>;
}

export function PaywallModal({ onClose, domain }: PaywallModalProps) {
  const [selected, setSelected] = useState('monthly');

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
      <div style={{ background: 'white', borderRadius: 24, padding: '40px', maxWidth: 520, width: '100%', position: 'relative', boxShadow: '0 25px 80px rgba(0,0,0,0.3)' }}>

        {/* Close */}
        <button onClick={onClose} style={{ position: 'absolute', top: 16, right: 16, background: 'none', border: 'none', cursor: 'pointer', fontSize: 20, color: '#9ca3af', lineHeight: 1 }}>✕</button>

        {/* Lock icon */}
        <div style={{ width: 52, height: 52, borderRadius: '50%', background: '#fef3c7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20, fontSize: 24 }}>🔒</div>

        <h2 style={{ fontSize: 26, fontWeight: 800, color: '#0a0a0f', marginBottom: 8, lineHeight: 1.2 }}>
          You have used your free analysis
        </h2>
        <p style={{ fontSize: 15, color: '#6b7280', marginBottom: 8 }}>
          Upgrade to analyze <strong style={{ color: '#0a0a0f' }}>{domain}</strong> and unlimited sites.
        </p>
        <p style={{ fontSize: 13, color: '#dc2626', marginBottom: 28, fontWeight: 500 }}>
          🔥 Launch discount expires in <MiniCountdown /> — lock in your price now
        </p>

        {/* Plan selector */}
        <div style={{ display: 'flex', gap: 12, marginBottom: 24 }}>
          {PLANS.map(plan => (
            <button
              key={plan.id}
              onClick={() => setSelected(plan.id)}
              style={{
                flex: 1, padding: '16px', borderRadius: 12, cursor: 'pointer', textAlign: 'left',
                border: selected === plan.id ? '2px solid #2d5be3' : '1px solid #e4e4ed',
                background: selected === plan.id ? '#eef1ff' : 'white',
                position: 'relative',
              }}
            >
              {plan.popular && <div style={{ position: 'absolute', top: -10, right: 10, background: '#2d5be3', color: 'white', fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 99 }}>POPULAR</div>}
              <div style={{ fontSize: 12, color: '#9ca3af', textDecoration: 'line-through', marginBottom: 2 }}>${plan.originalPrice.toFixed(2)}/{plan.period}</div>
              <div style={{ fontSize: 22, fontWeight: 800, color: '#0a0a0f' }}>${plan.price.toFixed(2)}</div>
              <div style={{ fontSize: 12, color: '#6b7280' }}>per {plan.period}</div>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#059669', marginTop: 4 }}>SAVE {plan.discount}%</div>
            </button>
          ))}
        </div>

        {/* CTA */}
        <a
          href={`/signup?plan=${selected}`}
          style={{ display: 'block', textAlign: 'center', padding: '16px', background: '#0a0a0f', color: 'white', borderRadius: 12, textDecoration: 'none', fontWeight: 700, fontSize: 16, marginBottom: 14 }}
        >
          Unlock Unlimited Analyses →
        </a>

        <a href="/signup" style={{ display: 'block', textAlign: 'center', fontSize: 13, color: '#6b7280', textDecoration: 'none', marginBottom: 16 }}>
          Or create a free account first
        </a>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 20, fontSize: 12, color: '#9ca3af' }}>
          <span>🔒 Secure payment</span>
          <span>↩️ 7-day refund</span>
          <span>❌ Cancel anytime</span>
        </div>
      </div>
    </div>
  );
}
