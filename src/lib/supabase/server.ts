import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

function isValidUrl(url: string): boolean {
  try { new URL(url); return true } catch { return false }
}

export async function createServerSupabaseClient() {
  const cookieStore = await cookies()
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  return createServerClient(
    url && isValidUrl(url) ? url : 'https://placeholder.supabase.co',
    key || 'placeholder',
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          )
        },
      },
    }
  )
}
