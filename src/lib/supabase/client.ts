import { createBrowserClient } from '@supabase/ssr'

function isValidUrl(url: string): boolean {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

export function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  return createBrowserClient(
    url && isValidUrl(url) ? url : 'https://placeholder.supabase.co',
    key || 'placeholder'
  )
}
