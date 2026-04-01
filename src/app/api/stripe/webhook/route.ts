import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return NextResponse.json({ error: 'Not configured' }, { status: 503 });
  let ev: Record<string, unknown>;
  try { ev = JSON.parse(await req.text()) as Record<string, unknown>; }
  catch { return NextResponse.json({ error: 'Bad payload' }, { status: 400 }); }
  const type = ev.type as string;
  const obj = (ev.data as Record<string, unknown>).object as Record<string, unknown>;
  if (type === 'checkout.session.completed') {
    const d = obj.customer_details as Record<string, unknown> | null;
    const email = (d?.email ?? obj.customer_email) as string | null;
    const meta = obj.metadata as Record<string, string> | null;
    if (email) {
      await fetch(url + '/rest/v1/subscriptions', {
        method: 'POST',
        headers: { apikey: key, Authorization: 'Bearer ' + key, 'Content-Type': 'application/json', Prefer: 'resolution=merge-duplicates' },
        body: JSON.stringify({ email, plan: meta?.plan ?? 'monthly', status: 'active', stripe_customer_id: obj.customer, stripe_subscription_id: obj.subscription, created_at: new Date().toISOString() }),
      });
    }
  }
  if (type === 'customer.subscription.deleted') {
    await fetch(url + '/rest/v1/subscriptions?stripe_subscription_id=eq.' + String(obj.id), {
      method: 'PATCH',
      headers: { apikey: key, Authorization: 'Bearer ' + key, 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: 'cancelled' }),
    });
  }
  return NextResponse.json({ received: true });
}
