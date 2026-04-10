import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !supabaseKey) {
    // Auth not configured — redirect to signup with email fallback
    const origin = req.nextUrl.origin || 'https://sitemapfixer.com';
    return NextResponse.redirect(`${origin}/signup?error=google_unavailable`);
  }

  const origin = req.nextUrl.origin || 'https://sitemapfixer.com';
  const redirectTo = `${origin}/api/auth/callback`;

  // Redirect user to Supabase's Google OAuth flow
  const authUrl = `${supabaseUrl}/auth/v1/authorize?provider=google&redirect_to=${encodeURIComponent(redirectTo)}`;

  return NextResponse.redirect(authUrl);
}
