'use client'

import Script from 'next/script'
import { usePathname, useSearchParams } from 'next/navigation'
import { Suspense, useEffect } from 'react'

function PageViewTracker() {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!domain || typeof window === 'undefined') return
    const plausible = (window as unknown as { plausible?: (event: string, opts?: { u?: string }) => void }).plausible
    if (plausible) {
      plausible('PageView', { u: `${window.location.origin}${pathname}${searchParams?.toString() ? '?' + searchParams.toString() : ''}` })
    }
  }, [domain, pathname, searchParams])

  return null
}

export function PlausibleProvider({ children }: { children: React.ReactNode }) {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN

  return (
    <>
      {domain && (
        <Script
          defer
          data-domain={domain}
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      )}
      <Suspense fallback={null}>
        <PageViewTracker />
      </Suspense>
      {children}
    </>
  )
}
