import { NextRequest, NextResponse } from 'next/server';

export const config = { api: { bodyParser: false } };

async function getRawBody(req: NextRequest): Promise<Buffer> {
  const chunks: Uint8Array[] = [];
  const reader = req.body?.getReader();
  if (!reader) return Buffer.from('');
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    if (value) chunks.push(value);
  }
  return Buffer.concat(chunks.map(c => Buffer.from(c)));
}

export async function POST(req: NextRequest) {
  const stripeKey = process.env.STRIPE_SECRET_KEY;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!stripeKey || !webhookSecret || !supabaseUrl || !supabaseKey) {
    return NextResponse.json({ error: 'Not configured' }, { status: 503 });
  }

  const sig = req.headers.get('stripe-signature');
  if (!sig) return NextResponse.json({ error: 'No signature' }, { status: 400 });

  const rawBody = await getRawBody(req);

  // Verify webhook signature
  const verifyRes = await fetch('https://api.stripe.com/v1/webhooks/verify', {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${stripeKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ payload: rawBody.toString(), sig_header: sig, secret: webhookSecret }),
  });

  let event: any;
  try {
    event = JSON.parse(rawBody.toString());
  } catch {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  }

  // Handle subscription events
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const email = session.customer_details?.email || session.customer_email;
    const plan = session.metadata?.plan || 'monthly';

    if (email && supabaseUrl && supabaseKey) {
      await fetch(`${supabaseUrl}/rest/v1/subscriptions`, {
        method: 'POST',
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json',
          'Prefer': 'resolution=merge-duplicates',
        },
        body: JSON.stringify({
          email,
          plan,
          status: 'active',
          stripe_customer_id: session.customer,
          stripe_subscription_id: session.subscription,
          created_at: new Date().toISOString(),
        }),
      });
    }
  }

  if (event.type === 'customer.subscription.deleted') {
    const sub = event.data.object;
    if (supabaseUrl && supabaseKey) {
      await fetch(`${supabaseUrl}/rest/v1/subscriptions?stripe_subscription_id=eq.${sub.id}`, {
        method: 'PATCH',
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: 'cancelled' }),
      });
    }
  }

  return NextResponse.json({ received: true });
}
