import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();
    if (!email || !password) return NextResponse.json({ error: 'Email and password required' }, { status: 400 });

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!supabaseUrl || !supabaseKey) return NextResponse.json({ error: 'Auth not configured' }, { status: 503 });

    const res = await fetch(`${supabaseUrl}/auth/v1/token?grant_type=password`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'apikey': supabaseKey, 'Authorization': `Bearer ${supabaseKey}` },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (!res.ok) return NextResponse.json({ error: data.error_description || 'Login failed' }, { status: 401 });

    const response = NextResponse.json({ success: true, user: { email: data.user?.email, id: data.user?.id } });
    if (data.access_token) {
      response.cookies.set('sf_token', data.access_token, {
        httpOnly: true, secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax', maxAge: 60 * 60 * 24 * 7, path: '/',
      });
      response.cookies.set('sf_logged_in', '1', {
        httpOnly: false, secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax', maxAge: 60 * 60 * 24 * 7, path: '/',
      });
    }
    return response;
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
