import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { access_token } = await req.json();
    if (!access_token) {
      return NextResponse.json({ error: 'No token provided' }, { status: 400 });
    }

    // Verify the token is valid by checking with Supabase
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json({ error: 'Auth not configured' }, { status: 503 });
    }

    const res = await fetch(`${supabaseUrl}/auth/v1/user`, {
      headers: { 'apikey': supabaseKey, 'Authorization': `Bearer ${access_token}` },
    });
    if (!res.ok) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }

    // Token is valid, set the cookie
    const response = NextResponse.json({ success: true });
    response.cookies.set('sf_token', access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    });
    response.cookies.set('sf_logged_in', '1', {
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    });
    return response;
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
