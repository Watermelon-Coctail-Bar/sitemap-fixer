'use client';
import { useState, useEffect } from 'react';

interface UserData {
  user: { id: string; email: string } | null;
  subscription: { plan?: string; status?: string; isPro: boolean };
}

export default function DashboardPage() {
  const [data, setData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/auth/me')
      .then(r => r.json())
      .then(d => { setData(d); setLoading(false); })
      .catch(() => { setLoading(false); });
  }, []);

  // Not authenticated — redirect to signup
  useEffect(() => {
    if (!loading && (!data || !data.user)) {
      window.location.href = '/signup?mode=login';
    }
  }, [loading, data]);

  if (loading) {
    return (
      <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ width: 32, height: 32, border: '3px solid #e4e4ed', borderTopColor: '#2d5be3', borderRadius: '50%', animation: 'spin 0.8s linear infinite', margin: '0 auto 16px' }} />
          <p style={{ color: '#6b7280', fontSize: 14 }}>Loading your dashboard...</p>
          <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
        </div>
      </div>
    );
  }

  if (!data || !data.user) return null; // Will redirect

  const { user, subscription } = data;
  const isPro = subscription?.isPro;
  const planLabel = subscription?.plan
    ? subscription.plan.charAt(0).toUpperCase() + subscription.plan.slice(1)
    : 'Free';

  return (
    <div style={{ minHeight: '70vh', background: '#fafaf9', padding: '48px 24px' }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <h1 style={{ fontSize: 32, fontWeight: 700, color: '#0a0a0f', marginBottom: 8 }}>Dashboard</h1>
          <p style={{ fontSize: 15, color: '#6b7280' }}>Welcome back, {user.email}</p>
        </div>

        {/* Subscription Card */}
        <div style={{ background: 'white', border: '1px solid #e4e4ed', borderRadius: 16, padding: '32px', marginBottom: 24, boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', margin: 0 }}>Subscription</h2>
            <span style={{
              fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em',
              padding: '4px 12px', borderRadius: 20,
              background: isPro ? '#dcfce7' : '#f3f4f6',
              color: isPro ? '#16a34a' : '#6b7280',
            }}>
              {isPro ? 'Active' : 'Free Tier'}
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            <div>
              <div style={{ fontSize: 12, color: '#9ca3af', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Plan</div>
              <div style={{ fontSize: 16, fontWeight: 600, color: '#0a0a0f' }}>{planLabel}</div>
            </div>
            <div>
              <div style={{ fontSize: 12, color: '#9ca3af', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Analyses</div>
              <div style={{ fontSize: 16, fontWeight: 600, color: '#0a0a0f' }}>{isPro ? 'Unlimited' : '3 per month'}</div>
            </div>
          </div>

          {!isPro && (
            <a href="/pricing" style={{
              display: 'inline-block', marginTop: 24,
              background: '#2d5be3', color: 'white', padding: '12px 24px',
              borderRadius: 10, textDecoration: 'none', fontWeight: 700, fontSize: 14,
            }}>
              Upgrade to Pro
            </a>
          )}
        </div>

        {/* Quick Actions */}
        <div style={{ background: 'white', border: '1px solid #e4e4ed', borderRadius: 16, padding: '32px', marginBottom: 24, boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 20 }}>Quick Actions</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <a href="/" style={{
              display: 'flex', alignItems: 'center', gap: 12, padding: '16px 20px',
              border: '1px solid #e4e4ed', borderRadius: 12, textDecoration: 'none',
              transition: 'border-color 0.15s',
            }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: '#eef1ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 4v12M4 10h12" stroke="#2d5be3" strokeWidth="2" strokeLinecap="round"/></svg>
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: '#0a0a0f' }}>New Analysis</div>
                <div style={{ fontSize: 12, color: '#9ca3af' }}>Analyze a sitemap</div>
              </div>
            </a>

            <a href="/learn" style={{
              display: 'flex', alignItems: 'center', gap: 12, padding: '16px 20px',
              border: '1px solid #e4e4ed', borderRadius: 12, textDecoration: 'none',
              transition: 'border-color 0.15s',
            }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: '#fef3c7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 4h12v12H4z" stroke="#d97706" strokeWidth="1.5"/><path d="M7 8h6M7 11h4" stroke="#d97706" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: '#0a0a0f' }}>SEO Guides</div>
                <div style={{ fontSize: 12, color: '#9ca3af' }}>Learn to fix issues</div>
              </div>
            </a>
          </div>
        </div>

        {/* Account */}
        <div style={{ background: 'white', border: '1px solid #e4e4ed', borderRadius: 16, padding: '32px', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', marginBottom: 20 }}>Account</h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: 14, color: '#0a0a0f', fontWeight: 500 }}>{user.email}</div>
              <div style={{ fontSize: 12, color: '#9ca3af', marginTop: 4 }}>Signed in</div>
            </div>
            <button
              onClick={async () => {
                await fetch('/api/auth/logout', { method: 'POST' });
                window.location.href = '/';
              }}
              style={{
                padding: '8px 20px', border: '1px solid #e4e4ed', borderRadius: 8,
                background: 'white', cursor: 'pointer', fontSize: 13, color: '#6b7280',
                fontWeight: 500,
              }}
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
