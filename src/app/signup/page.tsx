'use client';
import { useState } from 'react';

export default function SignupPage() {
  const [mode, setMode] = useState<'signup' | 'login'>('signup');
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
      setSuccess(mode === 'signup' ? 'Account created! Check your email to verify.' : 'Logged in successfully!');
      if (mode === 'login') setTimeout(() => window.location.href = '/', 1000);
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
          {mode === 'signup' ? 'Start with 1 free analysis. No credit card required.' : 'Sign in to access your analyses.'}
        </p>

        {/* Google OAuth placeholder */}
        <button
          onClick={() => window.location.href = '/api/auth/google'}
          style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, padding: '12px', border: '1px solid #e4e4ed', borderRadius: 10, background: 'white', cursor: 'pointer', fontSize: 14, fontWeight: 600, color: '#374151', marginBottom: 20 }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18"><path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/><path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853"/><path d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/><path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/></svg>
          Continue with Google
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
          <div style={{ flex: 1, height: 1, background: '#e4e4ed' }} />
          <span style={{ fontSize: 12, color: '#9ca3af' }}>or with email</span>
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
