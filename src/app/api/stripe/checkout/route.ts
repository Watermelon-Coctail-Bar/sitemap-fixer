import { NextRequest, NextResponse } from 'next/server';

const PRICE_IDS: Record<string, string | undefined> = {
  monthly: process.env.STRIPE_MONTHLY_PRICE_ID,
  yearly: process.env.STRIPE_YEARLY_PRICE_ID,
};

export async function POST(req: NextRequest) {
  try {
    const { plan, email } = await req.json();
    const stripeKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeKey) return NextResponse.json({ error: 'Payments not configured' }, { status: 503 });

    const priceId = PRICE_IDS[plan];
    if (!priceId) return NextResponse.json({ error: 'Invalid plan: ' + plan }, { status: 400 });

    const origin = req.headers.get('origin') || 'https://sitemapfixer.com';
    const params = new URLSearchParams({
      'mode': 'subscription',
      'line_items[0][price]': priceId,
      'line_items[0][quantity]': '1',
      'success_url': origin + '/pricing?checkout=success',
      'cancel_url': origin + '/pricing',
      'allow_promotion_codes': 'true',
      'metadata[plan]': plan,
    });
    if (email) params.set('customer_email', email);

    const res = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + stripeKey,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    const session = await res.json();
    if (!res.ok) return NextResponse.json({ error: session.error?.message || 'Checkout failed' }, { status: 400 });
    return NextResponse.json({ url: session.url });
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
