import { createClient } from '@supabase/supabase-js'

function isValidUrl(url: string): boolean {
  try { new URL(url); return true } catch { return false }
}

export function createAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  return createClient(
    url && isValidUrl(url) ? url : 'https://placeholder.supabase.co',
    key || 'placeholder',
    { auth: { autoRefreshToken: false, persistSession: false } }
  )
}
