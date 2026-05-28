'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function ProfileForm({
  userId,
  email,
  fullName: initialName,
}: {
  userId: string
  email: string
  fullName: string
}) {
  const [fullName, setFullName] = useState(initialName)
  const [saving, setSaving] = useState(false)

  async function handleSave(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    const { createAdminClient } = await import('@/lib/supabase/admin')
    const supabase = createAdminClient()
    const { error } = await supabase.from('profiles').upsert({
      id: userId,
      email,
      full_name: fullName,
    })
    setSaving(false)
    if (!error) alert('Profil gespeichert!')
  }

  return (
    <form onSubmit={handleSave} className="space-y-4">
      <Input label="E-Mail" type="email" value={email} disabled />
      <Input
        label="Vollständiger Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <Button type="submit" disabled={saving}>
        {saving ? 'Speichert...' : 'Speichern'}
      </Button>
    </form>
  )
}
