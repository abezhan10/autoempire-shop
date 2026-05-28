import Stripe from 'stripe'

let _stripe: Stripe | null = null

function getStripeInstance(): Stripe {
  if (!_stripe) {
    const key = process.env.STRIPE_SECRET_KEY
    if (!key) throw new Error('STRIPE_SECRET_KEY is not set')
    _stripe = new Stripe(key)
  }
  return _stripe
}

export const stripe = new Proxy({} as Stripe, {
  get(_, prop) {
    return getStripeInstance()[prop as keyof Stripe]
  },
})

export function getStripePublishableKey(): string {
  return process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ''
}

export async function createCheckoutSession(
  productId: string,
  productTitle: string,
  priceCents: number,
  userId: string,
  userEmail: string
) {
  const session = await getStripeInstance().checkout.sessions.create({
    mode: 'payment',
    customer_email: userEmail,
    client_reference_id: userId,
    line_items: [
      {
        price_data: {
          currency: 'eur',
          product_data: { name: productTitle },
          unit_amount: priceCents,
        },
        quantity: 1,
      },
    ],
    metadata: { productId, userId, productName: productTitle },
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/cancel`,
  })

  return session
}
