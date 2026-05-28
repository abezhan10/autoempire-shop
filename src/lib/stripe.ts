import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

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
  const session = await stripe.checkout.sessions.create({
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
