import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const url = req.nextUrl;
  const accessToken = url.searchParams.get('access_token') || url.hash?.replace('#access_token=', '');

  // Supabase sends tokens as hash fragments, but sometimes as query params
  // If we have the access_token directly, set the cookie and redirect
  if (accessToken) {
    const response = NextResponse.redirect(new URL('/dashboard', req.url));
    response.cookies.set('sf_token', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    });
    return response;
  }

  // Supabase OAuth callback sends tokens as URL hash fragments (#access_token=...)
  // These are not available server-side, so we need a client-side page to extract them
  // Return an HTML page that reads the hash and sends it back
  const html = `<!DOCTYPE html>
<html>
<head><title>Signing in...</title></head>
<body>
<p style="text-align:center;margin-top:100px;font-family:system-ui;color:#6b7280">Signing you in...</p>
<script>
(function() {
  var hash = window.location.hash.substring(1);
  var params = new URLSearchParams(hash);
  var token = params.get('access_token');
  if (token) {
    fetch('/api/auth/callback/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ access_token: token }),
    }).then(function() {
      window.location.href = '/dashboard';
    }).catch(function() {
      window.location.href = '/signup?error=auth_failed';
    });
  } else {
    window.location.href = '/signup?error=no_token';
  }
})();
</script>
</body>
</html>`;

  return new NextResponse(html, {
    headers: { 'Content-Type': 'text/html' },
  });
}
