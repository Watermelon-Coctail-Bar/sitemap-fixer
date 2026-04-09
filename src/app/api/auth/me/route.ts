import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get('sf_token')?.value;
    if (!token) return NextResponse.json({ user: null }, { status: 401 });

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!supabaseUrl || !supabaseKey) return NextResponse.json({ user: null }, { status: 503 });

    const res = await fetch(`${supabaseUrl}/auth/v1/user`, {
      headers: { 'apikey': supabaseKey, 'Authorization': `Bearer ${token}` },
    });
    if (!res.ok) return NextResponse.json({ user: null }, { status: 401 });

    const user = await res.json();

    // Check subscription status - query by email (webhook stores by email, not user_id)
    const subRes = await fetch(`${supabaseUrl}/rest/v1/subscriptions?email=eq.${encodeURIComponent(user.email)}&select=plan,status&order=created_at.desc&limit=1`, {
      headers: { 'apikey': supabaseKey, 'Authorization': `Bearer ${supabaseKey}`, 'Accept': 'application/json' },
    });
    const subs = subRes.ok ? await subRes.json() : [];
    const sub = subs[0] || null;

    return NextResponse.json({
      user: { id: user.id, email: user.email },
      subscription: sub ? { plan: sub.plan, status: sub.status, isPro: sub.status === 'active' } : { isPro: false },
    });
  } catch {
    return NextResponse.json({ user: null }, { status: 500 });
  }
}
