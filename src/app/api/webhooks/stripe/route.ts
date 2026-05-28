import { NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { createAdminClient } from '@/lib/supabase/admin'

export async function POST(request: Request) {
  const body = await request.text()
  const signature = request.headers.get('stripe-signature') || ''

  let event
  try {
    event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET!)
  } catch {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object
    const supabase = createAdminClient()

    await supabase.from('orders').upsert({
      user_id: session.metadata?.userId,
      product_id: session.metadata?.productId,
      stripe_session_id: session.id,
      amount_cents: session.amount_total!,
      currency: session.currency!,
      status: 'completed',
    }, { onConflict: 'stripe_session_id' })

    await supabase.from('analytics_events').insert({
      event_name: 'Purchase',
      user_id: session.metadata?.userId || null,
      session_id: session.id,
      properties: {
        amount: session.amount_total!,
        currency: session.currency!,
        product_id: session.metadata?.productId,
        product_name: session.metadata?.productName,
      },
      page_url: session.success_url || null,
    })
  }

  return NextResponse.json({ received: true })
}
