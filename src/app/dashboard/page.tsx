'use client';
import { useState, useEffect } from 'react';

interface UserData {
  user: { id: string; email: string } | null;
  subscription: { plan?: string; status?: string; isPro: boolean };
}

interface HistoryItem {
  id: string;
  domain: string;
  seo_score: number;
  total_urls: number;
  critical_count: number;
  warning_count: number;
  created_at: string;
}

export default function DashboardPage() {
  const [data, setData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [history, setHistory] = useState<HistoryItem[]>([]);

  useEffect(() => {
    fetch('/api/auth/me')
      .then(r => r.json())
      .then(d => { setData(d); setLoading(false); })
      .catch(() => { setLoading(false); });

    fetch('/api/history')
      .then(r => r.json())
      .then(d => { if (d.history) setHistory(d.history); })
      .catch(() => {});
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

        {/* Analysis History */}
        <div style={{ background: 'white', border: '1px solid #e4e4ed', borderRadius: 16, padding: '32px', marginBottom: 24, boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0f', margin: 0 }}>Recent Analyses</h2>
            <span style={{ fontSize: 12, color: '#9ca3af' }}>{history.length} total</span>
          </div>
          {history.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '24px 0' }}>
              <p style={{ fontSize: 14, color: '#9ca3af', marginBottom: 12 }}>No analyses yet</p>
              <a href="/" style={{ fontSize: 13, color: '#2d5be3', textDecoration: 'none', fontWeight: 600 }}>
                Run your first analysis →
              </a>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {history.map((item, i) => {
                const scoreColor = item.seo_score >= 80 ? '#16a34a' : item.seo_score >= 50 ? '#d97706' : '#dc2626';
                const date = new Date(item.created_at);
                const dateStr = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
                const timeStr = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
                return (
                  <div key={item.id || i} style={{
                    display: 'flex', alignItems: 'center', gap: 16, padding: '14px 0',
                    borderBottom: i < history.length - 1 ? '1px solid #f3f4f6' : 'none',
                  }}>
                    {/* Score circle */}
                    <div style={{
                      width: 40, height: 40, borderRadius: '50%',
                      border: `3px solid ${scoreColor}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 13, fontWeight: 700, color: scoreColor, flexShrink: 0,
                    }}>
                      {item.seo_score}
                    </div>
                    {/* Domain + meta */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 14, fontWeight: 600, color: '#0a0a0f', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {item.domain}
                      </div>
                      <div style={{ fontSize: 12, color: '#9ca3af', marginTop: 2, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                        <span>{item.total_urls} URLs</span>
                        {item.critical_count > 0 && <span style={{ color: '#dc2626' }}>{item.critical_count} errors</span>}
                        {item.warning_count > 0 && <span style={{ color: '#d97706' }}>{item.warning_count} warnings</span>}
                      </div>
                    </div>
                    {/* Date */}
                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <div style={{ fontSize: 12, color: '#6b7280' }}>{dateStr}</div>
                      <div style={{ fontSize: 11, color: '#9ca3af' }}>{timeStr}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
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
