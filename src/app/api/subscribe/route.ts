import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 });
    }

    const { Resend } = await import('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'SitemapFixer <notifications@sitemapfixer.com>',
      to: process.env.SUPPORT_EMAIL || 'support@sitemapfixer.com',
      subject: 'New checklist subscriber',
      text: `New subscriber: ${email}\n\nThey signed up for the Sitemap Audit Checklist.\nAdd them to the list and send the PDF when ready.`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Subscribe error:', err);
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 });
  }
}
