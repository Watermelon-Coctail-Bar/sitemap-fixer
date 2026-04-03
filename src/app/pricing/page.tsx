'use client';
import { useState, useEffect } from 'react';

// Prices after discount
// Weekly: $7.50 * 0.75 = $5.62 (25% off)
// Monthly: $13.50 * 0.70 = $9.45 (30% off)
// Yearly: $70 * 0.60 = $42 (40% off)

const PLANS = [
  {
    id: 'weekly',
    name: 'Weekly',
    originalPrice: 7.50,
    price: 5.62,
    discount: 25,
    period: 'week',
    badge: null,
    color: '#6366f1',
    features: [
      '10 sitemap analyses per week',
      'AI-powered fix recommendations',
      'Export reports as PDF',
      'Email support',
    ],
  },
  {
    id: 'monthly',
    name: 'Monthly',
    originalPrice: 13.50,
    price: 9.45,
    discount: 30,
    period: 'month',
    badge: 'MOST POPULAR',
    color: '#2d5be3',
    features: [
      'Unlimited sitemap analyses',
      'AI-powered fix recommendations',
      'Export reports as PDF',
      'Priority email support',
      'Historical analysis tracking',
      'Multi-site monitoring',
    ],
  },
  {
    id: 'yearly',
    name: 'Yearly',
    originalPrice: 70,
    price: 42,
    discount: 40,
    period: 'year',
    badge: 'BEST VALUE',
    color: '#059669',
    features: [
      'Everything in Monthly',
      'Unlimited sitemap analyses',
      'API access',
      'Dedicated support',
      'Team seats (up to 5)',
      'White-label reports',
    ],
  },
];

function CountdownTimer() {
  const [time, setTime] = useState({ h: 23, m: 47, s: 33 });
  useEffect(() => {
    const t = setInterval(() => {
      setTime(prev => {
        let { h, m, s } = prev;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { h = 23; m = 59; s = 59; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(t);
  }, []);
  const pad = (n: number) => String(n).padStart(2, '0');
  return (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center', justifyContent: 'center' }}>
      {[['h', time.h], ['m', time.m], ['s', time.s]].map(([label, val]) => (
        <div key={label as string} style={{ textAlign: 'center' }}>
          <div style={{ background: '#0a0a0f', color: 'white', borderRadius: 8, padding: '8px 12px', fontSize: 24, fontWeight: 700, fontFamily: 'monospace', minWidth: 52 }}>{pad(val as number)}</div>
          <div style={{ fontSize: 10, color: '#9ca3af', marginTop: 4, textTransform: 'uppercase' }}>{label}</div>
        </div>
      ))}
    </div>
  );
}

export default function PricingPage() {
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);

  async function handleCheckout(planId: string) {
    setLoadingPlan(planId);
    try {
      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan: planId }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(data.error || 'Something went wrong. Please try again.');
        setLoadingPlan(null);
      }
    } catch {
      alert('Network error. Please try again.');
      setLoadingPlan(null);
    }
  }

  return (
    <div style={{ minHeight: '100vh', background: '#fafaf9' }}>
      {/* Nav */}
      <nav style={{ borderBottom: '1px solid #e4e4ed', background: 'rgba(250,250,249,0.9)', backdropFilter: 'blur(12px)', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect width="28" height="28" rx="7" fill="#0a0a0f"/><path d="M7 9h14M7 14h10M7 19h12" stroke="white" strokeWidth="2" strokeLinecap="round"/><circle cx="21" cy="19" r="3" fill="#2d5be3"/></svg>
            <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: 20, color: '#0a0a0f' }}>SitemapFixer</span>
          </a>
          <a href="/" style={{ fontSize: 13, color: '#6b7280', textDecoration: 'none' }}>Back to tool</a>
        </div>
      </nav>

      {/* Urgency banner */}
      <div style={{ background: 'linear-gradient(90deg, #dc2626, #b91c1c)', color: 'white', textAlign: 'center', padding: '10px 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 14, fontWeight: 600 }}>🔥 Launch Sale - Discounts expire in:</span>
          <CountdownTimer />
        </div>
      </div>

      <div style={{ maxWidth: 960, margin: '0 auto', padding: '60px 24px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{ display: 'inline-block', background: '#fef3c7', border: '1px solid #fbbf24', borderRadius: 99, padding: '4px 16px', fontSize: 13, fontWeight: 600, color: '#92400e', marginBottom: 20 }}>
            Limited time - prices increase soon
          </div>
          <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 48, color: '#0a0a0f', marginBottom: 16, lineHeight: 1.1 }}>
            Simple, transparent pricing
          </h1>
          <p style={{ fontSize: 18, color: '#6b7280', maxWidth: 500, margin: '0 auto' }}>
            Start free. Upgrade when you need more analyses, history, and team features.
          </p>
        </div>

        {/* Free tier callout */}
        <div style={{ background: 'white', border: '1px solid #e4e4ed', borderRadius: 16, padding: '20px 28px', marginBottom: 32, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 16, color: '#0a0a0f', marginBottom: 4 }}>Free tier - no credit card needed</div>
            <div style={{ fontSize: 14, color: '#6b7280' }}>1 free sitemap analysis. See exactly what SitemapFixer does before paying anything.</div>
          </div>
          <a href="/" style={{ background: '#f3f4f6', color: '#0a0a0f', padding: '10px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 14, whiteSpace: 'nowrap' }}>Try Free First</a>
        </div>

        {/* Pricing cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 60 }}>
          {PLANS.map(plan => {
            const isPopular = plan.id === 'monthly';
            const isHovered = hoveredPlan === plan.id;
            return (
              <div
                key={plan.id}
                onMouseEnter={() => setHoveredPlan(plan.id)}
                onMouseLeave={() => setHoveredPlan(null)}
                style={{
                  background: isPopular ? '#0a0a0f' : 'white',
                  border: isPopular ? '2px solid #2d5be3' : '1px solid #e4e4ed',
                  borderRadius: 20,
                  padding: '32px 28px',
                  position: 'relative',
                  transform: (isPopular || isHovered) ? 'translateY(-4px)' : 'none',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  boxShadow: isPopular ? '0 20px 60px rgba(45,91,227,0.25)' : isHovered ? '0 12px 40px rgba(0,0,0,0.12)' : '0 2px 8px rgba(0,0,0,0.06)',
                }}
              >
                {/* Badge */}
                {plan.badge && (
                  <div style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', background: plan.id === 'yearly' ? '#059669' : '#2d5be3', color: 'white', fontSize: 11, fontWeight: 700, padding: '4px 14px', borderRadius: 99, letterSpacing: '0.06em', whiteSpace: 'nowrap' }}>
                    {plan.badge}
                  </div>
                )}

                {/* Discount badge */}
                <div style={{ display: 'inline-block', background: isPopular ? 'rgba(255,255,255,0.15)' : '#fef3c7', color: isPopular ? '#fbbf24' : '#92400e', fontSize: 12, fontWeight: 700, padding: '3px 10px', borderRadius: 6, marginBottom: 20 }}>
                  {plan.discount}% OFF - Launch Sale
                </div>

                <div style={{ fontSize: 18, fontWeight: 700, color: isPopular ? 'white' : '#0a0a0f', marginBottom: 8 }}>{plan.name}</div>

                {/* Price */}
                <div style={{ marginBottom: 6 }}>
                  <span style={{ fontSize: 13, color: isPopular ? '#9ca3af' : '#9ca3af', textDecoration: 'line-through' }}>${plan.originalPrice.toFixed(2)}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 24 }}>
                  <span style={{ fontSize: 42, fontWeight: 800, color: isPopular ? 'white' : '#0a0a0f', lineHeight: 1 }}>${plan.price.toFixed(2)}</span>
                  <span style={{ fontSize: 14, color: isPopular ? '#9ca3af' : '#6b7280' }}>/{plan.period}</span>
                </div>

                {/* CTA */}
                <a
                  href="/signup"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    padding: '14px',
                    borderRadius: 10,
                    textDecoration: 'none',
                    fontWeight: 700,
                    fontSize: 15,
                    marginBottom: 28,
                    background: isPopular ? '#2d5be3' : '#0a0a0f',
                    color: 'white',
                    transition: 'opacity 0.15s',
                  }}
                >
                  Get {plan.name} Access
                </a>

                {/* Features */}
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {plan.features.map(f => (
                    <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12, fontSize: 14, color: isPopular ? '#d1d5db' : '#374151' }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="8" fill={isPopular ? '#1d4ed8' : '#ecfdf5'}/><path d="M5 8l2 2 4-4" stroke={isPopular ? '#60a5fa' : '#059669'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Trust signals */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 60 }}>
          {[
            { icon: '🔒', title: 'Secure payments', desc: 'Processed by Stripe. We never store card details.' },
            { icon: '↩️', title: '7-day refund', desc: 'Not happy in the first 7 days? Full refund, no questions asked.' },
            { icon: '❌', title: 'Cancel anytime', desc: 'No contracts, no lock-in. Cancel with one click.' },
          ].map(item => (
            <div key={item.title} style={{ background: 'white', border: '1px solid #e4e4ed', borderRadius: 14, padding: '24px', textAlign: 'center' }}>
              <div style={{ fontSize: 28, marginBottom: 10 }}>{item.icon}</div>
              <div style={{ fontWeight: 700, color: '#0a0a0f', marginBottom: 6, fontSize: 15 }}>{item.title}</div>
              <div style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.5 }}>{item.desc}</div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 32, color: '#0a0a0f', marginBottom: 32, textAlign: 'center' }}>Frequently asked questions</h2>
          {[
            ['Is the free tier really free?', 'Yes. You get 1 full sitemap analysis completely free, no credit card required. You will see exactly what you get before deciding to upgrade.'],
            ['Can I switch plans?', 'Yes. You can upgrade, downgrade, or cancel at any time. Unused time is prorated if you upgrade.'],
            ['What payment methods do you accept?', 'All major credit and debit cards via Stripe. We do not store payment details.'],
            ['What happens when my plan expires?', 'Your account moves back to the free tier. Your analysis history is preserved for 30 days so you can re-subscribe and pick up where you left off.'],
            ['Do you offer team plans?', 'The Yearly plan includes up to 5 team seats. Need more? Contact us for a custom quote.'],
          ].map(([q, a]) => (
            <div key={q as string} style={{ borderBottom: '1px solid #e4e4ed', padding: '20px 0' }}>
              <div style={{ fontWeight: 600, color: '#0a0a0f', marginBottom: 8, fontSize: 15 }}>{q}</div>
              <div style={{ color: '#6b7280', fontSize: 14, lineHeight: 1.6 }}>{a}</div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
