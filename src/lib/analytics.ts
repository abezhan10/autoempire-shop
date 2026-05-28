type PlausibleEvent = 'Purchase' | 'ProductView' | 'AddToCart' | 'PageView'

export function trackEvent(name: PlausibleEvent, props?: Record<string, string | number>) {
  if (typeof window === 'undefined') return
  const plausible = (window as unknown as { plausible?: (event: string, opts?: { props?: Record<string, string | number> }) => void }).plausible
  if (plausible) {
    plausible(name, { props })
  }
}

export function trackPurchase(amount: number, currency: string, productName: string) {
  trackEvent('Purchase', { amount, currency, product_name: productName })
}

export function trackProductView(productName: string, productId: string) {
  trackEvent('ProductView', { product_name: productName, product_id: productId })
}
