'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const supabase = createClient()

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    const { error: err } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    })
    if (err) {
      setError(err.message)
    } else {
      setSent(true)
    }
  }

  if (sent) {
    return (
      <div className="max-w-sm mx-auto px-4 py-24 text-center">
        <div className="text-4xl mb-4">✉️</div>
        <h1 className="text-2xl font-bold text-white">Check deine E-Mails</h1>
        <p className="mt-3 text-gray-400">
          Wir haben einen Magic Link an <strong className="text-gray-200">{email}</strong> gesendet.
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-sm mx-auto px-4 py-24">
      <h1 className="text-2xl font-bold text-white text-center">Anmelden</h1>
      <p className="mt-2 text-gray-400 text-center text-sm">
        Gib deine E-Mail ein, um einen Magic Link zu erhalten.
      </p>
      <form onSubmit={handleLogin} className="mt-8 space-y-4">
        <Input
          label="E-Mail"
          type="email"
          placeholder="deine@email.de"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          error={error}
        />
        <Button type="submit" size="lg" className="w-full">
          Magic Link senden
        </Button>
      </form>
    </div>
  )
}
