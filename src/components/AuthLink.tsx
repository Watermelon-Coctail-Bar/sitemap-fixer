'use client';
import { useState, useEffect } from 'react';

function hasAuthHint(): boolean {
  if (typeof document === 'undefined') return false;
  return document.cookie.split(';').some(c => c.trim().startsWith('sf_logged_in='));
}

export function AuthLink({ style, activeStyle }: { style?: React.CSSProperties; activeStyle?: React.CSSProperties }) {
  // Instant check from a non-httpOnly cookie — no flash
  const [isLoggedIn, setIsLoggedIn] = useState(hasAuthHint);

  useEffect(() => {
    // Verify with server in background (handles expired tokens)
    fetch('/api/auth/me')
      .then(r => { if (r.ok) return r.json(); throw 0; })
      .then(d => {
        if (d?.user) {
          setIsLoggedIn(true);
          // Ensure hint cookie exists
          if (!hasAuthHint()) document.cookie = 'sf_logged_in=1; path=/; max-age=31536000; SameSite=Lax';
        } else {
          setIsLoggedIn(false);
          // Clear stale hint cookie
          document.cookie = 'sf_logged_in=; path=/; max-age=0';
        }
      })
      .catch(() => {
        setIsLoggedIn(false);
        document.cookie = 'sf_logged_in=; path=/; max-age=0';
      });
  }, []);

  if (isLoggedIn) {
    return <a href="/dashboard" style={activeStyle || { ...style, color: '#2d5be3', fontWeight: 600 }}>Dashboard</a>;
  }

  return <a href="/signup?mode=login" style={style}>Sign in</a>;
}
