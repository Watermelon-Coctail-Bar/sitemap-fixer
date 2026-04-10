'use client';
import { useState, useEffect } from 'react';

export function AuthLink({ style, activeStyle }: { style?: React.CSSProperties; activeStyle?: React.CSSProperties }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    fetch('/api/auth/me')
      .then(r => { if (r.ok) return r.json(); throw 0; })
      .then(d => { if (d?.user) setIsLoggedIn(true); setChecked(true); })
      .catch(() => setChecked(true));
  }, []);

  if (!checked) {
    // Show "Sign in" as default while loading to avoid layout shift
    return <a href="/signup?mode=login" style={style}>Sign in</a>;
  }

  if (isLoggedIn) {
    return <a href="/dashboard" style={activeStyle || { ...style, color: '#2d5be3', fontWeight: 600 }}>Dashboard</a>;
  }

  return <a href="/signup?mode=login" style={style}>Sign in</a>;
}
