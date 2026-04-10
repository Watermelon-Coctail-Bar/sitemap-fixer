import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get('sf_token')?.value;
    if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!supabaseUrl || !supabaseKey) return NextResponse.json({ error: 'Config error' }, { status: 503 });

    // Get user from token
    const userRes = await fetch(`${supabaseUrl}/auth/v1/user`, {
      headers: { 'apikey': supabaseKey, 'Authorization': `Bearer ${token}` },
    });
    if (!userRes.ok) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const user = await userRes.json();

    // Fetch history for this user (last 50)
    const historyRes = await fetch(
      `${supabaseUrl}/rest/v1/analysis_history?user_id=eq.${user.id}&select=id,domain,seo_score,total_urls,critical_count,warning_count,created_at&order=created_at.desc&limit=50`,
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Accept': 'application/json',
        },
      }
    );

    if (!historyRes.ok) {
      // Table might not exist yet — return empty
      return NextResponse.json({ history: [] });
    }

    const history = await historyRes.json();
    return NextResponse.json({ history });
  } catch {
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const token = req.cookies.get('sf_token')?.value;
    if (!token) return NextResponse.json({ ok: false }, { status: 401 });

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!supabaseUrl || !supabaseKey) return NextResponse.json({ ok: false }, { status: 503 });

    // Get user
    const userRes = await fetch(`${supabaseUrl}/auth/v1/user`, {
      headers: { 'apikey': supabaseKey, 'Authorization': `Bearer ${token}` },
    });
    if (!userRes.ok) return NextResponse.json({ ok: false }, { status: 401 });
    const user = await userRes.json();

    const body = await req.json();

    // Insert history record
    const insertRes = await fetch(`${supabaseUrl}/rest/v1/analysis_history`, {
      method: 'POST',
      headers: {
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal',
      },
      body: JSON.stringify({
        user_id: user.id,
        domain: body.domain,
        seo_score: body.seoScore,
        total_urls: body.totalUrls,
        critical_count: body.criticalCount,
        warning_count: body.warningCount,
        improvement_count: body.improvementCount,
        sitemap_url: body.sitemapUrl,
      }),
    });

    if (!insertRes.ok) {
      console.error('Failed to save history:', await insertRes.text());
      return NextResponse.json({ ok: false });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
