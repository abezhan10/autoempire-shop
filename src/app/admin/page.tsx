'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import type { Product } from '@/lib/types'
import Link from 'next/link'

export default function AdminPage() {
  const router = useRouter()
  const supabase = createClient()
  const [courses, setCourses] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!supabase) { setLoading(false); return }
    supabase.auth.getUser().then(({ data }: any) => {
      if (!data?.user) {
        router.push('/auth/login')
        return
      }
      fetchCourses()
    })
  }, [])

  async function fetchCourses() {
    try {
      const res = await fetch('/api/admin/courses')
      const data = await res.json()
      setCourses(data)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <p className="text-gray-400">Lade...</p>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-white mb-2">Admin-Bereich</h1>
      <p className="text-gray-400 mb-8">AI Content Generation für Kurse verwalten.</p>

      <h2 className="text-xl font-semibold text-white mb-4">Kurse ({courses.length})</h2>

      {courses.length === 0 ? (
        <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 text-center">
          <p className="text-gray-400">Keine Kurse gefunden.</p>
          <p className="text-gray-500 text-sm mt-1">Erstelle zuerst ein Produkt mit file_type &quot;course&quot;.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {courses.map((course) => (
            <Link
              key={course.id}
              href={`/admin/courses/${course.id}`}
              className="block p-5 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-indigo-700 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white">{course.title}</h3>
                  <p className="text-sm text-gray-400 mt-1 line-clamp-1">{course.description}</p>
                </div>
                <span className="text-indigo-400 text-sm">Bearbeiten →</span>
              </div>
            </Link>
          ))}
        </div>
      )}

      <div className="mt-12 p-5 rounded-xl bg-gray-900/50 border border-gray-800">
        <h2 className="text-lg font-semibold text-white mb-2">Nicht-Kurs Produkte</h2>
        <p className="text-sm text-gray-400">
          Andere Produkte (Templates, E-Books etc.) zeigen nur die Beschreibungs-Generierung.
        </p>
      </div>
    </div>
  )
}
