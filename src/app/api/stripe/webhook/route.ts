import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2024-06-20' });

async function supabaseUpsert(url: string, key: string, table: string, data: object, matchCol?: string, matchVal?: string) {
  const endpoint = matchCol && matchVal
    ? `${url}/rest/v1/${table}?${matchCol}=eq.${matchVal}`
    : `${url}/rest/v1/${table}`;
  const method = matchCol ? 'PATCH' : 'POST';
  await fetch(endpoint, {
    method,
    headers: {
      apikey: key,
      Authorization: 'Bearer ' + key,
      'Content-Type': 'application/json',
      Prefer: 'resolution=merge-duplicates',
    },
    body: JSON.stringify(data),
  });
}

export async function POST(req: NextRequest) {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!supabaseUrl || !supabaseKey || !webhookSecret) {
    return NextResponse.json({ error: 'Not configured' }, { status: 503 });
  }

  // Verify Stripe signature
  const rawBody = await req.text();
  const signature = req.headers.get('stripe-signature');
  if (!signature) {
    return NextResponse.json({ error: 'Missing signature' }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        const email = session.customer_details?.email ?? session.customer_email;
        if (!email) break;
        await supabaseUpsert(supabaseUrl, supabaseKey, 'subscriptions', {
          email,
          plan: session.metadata?.plan ?? 'monthly',
          status: 'active',
          stripe_customer_id: session.customer,
          stripe_subscription_id: session.subscription,
          updated_at: new Date().toISOString(),
          created_at: new Date().toISOString(),
        });
        break;
      }

      case 'invoice.payment_succeeded': {
        const invoice = event.data.object as Stripe.Invoice;
        const subId = invoice.subscription as string | null;
        if (!subId) break;
        // Retrieve subscription to get customer email
        const sub = await stripe.subscriptions.retrieve(subId, { expand: ['customer'] });
        const customer = sub.customer as Stripe.Customer;
        const email = customer.email;
        if (!email) break;
        await supabaseUpsert(supabaseUrl, supabaseKey, 'subscriptions',
          { status: 'active', updated_at: new Date().toISOString() },
          'stripe_subscription_id', subId
        );
        break;
      }

      case 'customer.subscription.updated': {
        const sub = event.data.object as Stripe.Subscription;
        const status = sub.status === 'active' ? 'active' : 'cancelled';
        await supabaseUpsert(supabaseUrl, supabaseKey, 'subscriptions',
          { status, updated_at: new Date().toISOString() },
          'stripe_subscription_id', sub.id
        );
        break;
      }

      case 'customer.subscription.deleted': {
        const sub = event.data.object as Stripe.Subscription;
        await supabaseUpsert(supabaseUrl, supabaseKey, 'subscriptions',
          { status: 'cancelled', updated_at: new Date().toISOString() },
          'stripe_subscription_id', sub.id
        );
        break;
      }
    }
  } catch (err) {
    console.error('Webhook handler error:', err);
    return NextResponse.json({ error: 'Handler error' }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}
