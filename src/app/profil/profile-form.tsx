'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function ProfileForm({
  userId,
  email,
  fullName,
}: {
  userId: string
  email: string
  fullName: string
}) {
  const [name, setName] = useState(fullName)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    setMessage(null)

    try {
      const res = await fetch('/api/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, fullName: name }),
      })
      if (!res.ok) throw new Error('Fehler beim Speichern')
      setMessage({ type: 'success', text: 'Profil gespeichert.' })
      router.refresh()
    } catch {
      setMessage({ type: 'error', text: 'Fehler beim Speichern des Profils.' })
    } finally {
      setSaving(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="E-Mail"
        value={email}
        disabled
      />
      <Input
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Dein Name"
      />
      {message && (
        <p className={`text-sm ${message.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
          {message.text}
        </p>
      )}
      <Button type="submit" disabled={saving}>
        {saving ? 'Speichern...' : 'Speichern'}
      </Button>
    </form>
  )
}
