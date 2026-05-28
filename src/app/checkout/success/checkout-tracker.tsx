'use client'

import { useEffect, useRef } from 'react'
import { trackPurchase } from '@/lib/analytics'

export function CheckoutTracker({
  amount,
  currency,
  productName,
}: {
  amount: number
  currency: string
  productName: string
}) {
  const tracked = useRef(false)

  useEffect(() => {
    if (tracked.current) return
    tracked.current = true
    trackPurchase(amount, currency, productName)
  }, [amount, currency, productName])

  return null
}
