import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const googleEnabled = process.env.GOOGLE_OAUTH_ENABLED === 'true';

  const origin = req.nextUrl.origin || 'https://sitemapfixer.com';

  if (!supabaseUrl || !supabaseKey || !googleEnabled) {
    return NextResponse.redirect(`${origin}/signup?error=google_unavailable`);
  }

  const redirectTo = `${origin}/api/auth/callback`;
  const authUrl = `${supabaseUrl}/auth/v1/authorize?provider=google&redirect_to=${encodeURIComponent(redirectTo)}`;

  return NextResponse.redirect(authUrl);
}
