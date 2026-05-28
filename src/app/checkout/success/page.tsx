import { stripe } from '@/lib/stripe'
import { createAdminClient } from '@/lib/supabase/admin'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default async function CheckoutSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>
}) {
  const { session_id } = await searchParams
  if (!session_id) redirect('/')

  const session = await stripe.checkout.sessions.retrieve(session_id)
  if (session.payment_status !== 'paid') {
    return (
      <div className="max-w-md mx-auto px-4 py-24 text-center">
        <p className="text-gray-400">Zahlung noch nicht bestätigt.</p>
      </div>
    )
  }

  // Create order record
  const supabase = createAdminClient()
  const { error } = await supabase.from('orders').upsert({
    user_id: session.metadata?.userId,
    product_id: session.metadata?.productId,
    stripe_session_id: session.id,
    amount_cents: session.amount_total!,
    currency: session.currency!,
    status: 'completed',
  }, { onConflict: 'stripe_session_id' })

  return (
    <div className="max-w-md mx-auto px-4 py-24 text-center">
      <div className="text-6xl mb-6">🎉</div>
      <h1 className="text-3xl font-bold text-white">Zahlung erfolgreich!</h1>
      <p className="mt-4 text-gray-400">
        Du hast Zugriff auf dein Produkt. Sieh es dir im Dashboard an.
      </p>
      <Link href="/dashboard" className="mt-8 inline-block">
        <Button size="lg">Zum Dashboard</Button>
      </Link>
    </div>
  )
}
