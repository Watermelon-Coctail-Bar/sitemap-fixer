'use client';
import { useState, useEffect } from 'react';

export default function SignupPage() {
  const [mode, setMode] = useState<'signup' | 'login'>('signup');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('mode') === 'login') setMode('login');
    if (params.get('error') === 'google_unavailable') setError('Google sign-in is not available yet. Please use email and password.');
    if (params.get('error') === 'auth_failed') setError('Authentication failed. Please try again.');
    if (params.get('error') === 'no_token') setError('Authentication failed. Please try again.');
  }, []);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true); setError(''); setSuccess('');
    try {
      const res = await fetch(`/api/auth/${mode}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error || 'Something went wrong.'); return; }
      setSuccess(mode === 'signup' ? 'Account created! Redirecting...' : 'Logged in! Redirecting...');
      setTimeout(() => window.location.href = '/dashboard', 1000);
    } catch { setError('Network error. Please try again.'); }
    finally { setLoading(false); }
  }

  return (
    <div style={{ minHeight: '100vh', background: '#fafaf9', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
      {/* Logo */}
      <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none', marginBottom: 40 }}>
        <svg width="32" height="32" viewBox="0 0 28 28" fill="none"><rect width="28" height="28" rx="7" fill="#0a0a0f"/><path d="M7 9h14M7 14h10M7 19h12" stroke="white" strokeWidth="2" strokeLinecap="round"/><circle cx="21" cy="19" r="3" fill="#2d5be3"/></svg>
        <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: 22, color: '#0a0a0f' }}>SitemapFixer</span>
      </a>

      <div style={{ background: 'white', border: '1px solid #e4e4ed', borderRadius: 20, padding: '40px', width: '100%', maxWidth: 400, boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
        <h1 style={{ fontSize: 24, fontWeight: 700, color: '#0a0a0f', marginBottom: 8 }}>
          {mode === 'signup' ? 'Create your account' : 'Welcome back'}
        </h1>
        <p style={{ fontSize: 14, color: '#6b7280', marginBottom: 28 }}>
          {mode === 'signup' ? 'Start with 3 free analyses. No credit card required.' : 'Sign in to access your analyses.'}
        </p>

        {/* Google Sign-In */}
        <a
          href="/api/auth/google"
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
            width: '100%', padding: '11px', border: '1px solid #e4e4ed', borderRadius: 10,
            background: 'white', textDecoration: 'none', fontSize: 14, fontWeight: 600,
            color: '#374151', cursor: 'pointer', marginBottom: 24, boxSizing: 'border-box',
          }}
        >
          <svg width="18" height="18" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>
          Continue with Google
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
          <div style={{ flex: 1, height: 1, background: '#e4e4ed' }} />
          <span style={{ fontSize: 12, color: '#9ca3af', fontWeight: 500 }}>or with email</span>
          <div style={{ flex: 1, height: 1, background: '#e4e4ed' }} />
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 16 }}>
            <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6 }}>Email</label>
            <input
              type="email" value={email} onChange={e => setEmail(e.target.value)} required
              placeholder="you@example.com"
              style={{ width: '100%', padding: '10px 14px', border: '1px solid #e4e4ed', borderRadius: 8, fontSize: 14, outline: 'none', boxSizing: 'border-box' }}
            />
          </div>
          <div style={{ marginBottom: 24 }}>
            <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6 }}>Password</label>
            <input
              type="password" value={password} onChange={e => setPassword(e.target.value)} required
              placeholder="Min 8 characters"
              style={{ width: '100%', padding: '10px 14px', border: '1px solid #e4e4ed', borderRadius: 8, fontSize: 14, outline: 'none', boxSizing: 'border-box' }}
            />
          </div>

          {error && <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 8, padding: '10px 14px', fontSize: 13, color: '#dc2626', marginBottom: 16 }}>{error}</div>}
          {success && <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 8, padding: '10px 14px', fontSize: 13, color: '#16a34a', marginBottom: 16 }}>{success}</div>}

          <button
            type="submit" disabled={loading}
            style={{ width: '100%', padding: '12px', background: '#0a0a0f', color: 'white', border: 'none', borderRadius: 10, fontSize: 15, fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1 }}
          >
            {loading ? 'Please wait...' : mode === 'signup' ? 'Create Free Account' : 'Sign In'}
          </button>
        </form>

        <p style={{ textAlign: 'center', fontSize: 13, color: '#6b7280', marginTop: 20 }}>
          {mode === 'signup' ? 'Already have an account? ' : 'No account yet? '}
          <button onClick={() => setMode(mode === 'signup' ? 'login' : 'signup')} style={{ background: 'none', border: 'none', color: '#2d5be3', cursor: 'pointer', fontWeight: 600, fontSize: 13 }}>
            {mode === 'signup' ? 'Sign in' : 'Sign up free'}
          </button>
        </p>
      </div>

      <p style={{ marginTop: 24, fontSize: 12, color: '#9ca3af', textAlign: 'center' }}>
        By signing up you agree to our{' '}
        <a href="/terms" style={{ color: '#6b7280' }}>Terms</a>{' and '}
        <a href="/privacy" style={{ color: '#6b7280' }}>Privacy Policy</a>
      </p>
    </div>
  );
}
