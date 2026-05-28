import { redirect } from 'next/navigation'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { ProfileForm } from './profile-form'

export default async function ProfilePage() {
  const supabase = await createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/auth/login')

  const admin = createAdminClient()
  const { data: profile } = await admin
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-white mb-2">Profil</h1>
      <p className="text-gray-400 mb-8">Verwalte deine persönlichen Daten.</p>

      <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800">
        <ProfileForm
          userId={user.id}
          email={user.email ?? ''}
          fullName={profile?.full_name ?? ''}
        />
      </div>

      <div className="mt-8 p-6 rounded-xl bg-gray-900/50 border border-gray-800">
        <h2 className="text-lg font-semibold text-white mb-2">Konto</h2>
        <p className="text-sm text-gray-400">
          Angemeldet als <strong className="text-gray-300">{user.email}</strong>
        </p>
      </div>
    </div>
  )
}
