'use client'

import { use, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import type { CourseContent, Product } from '@/lib/types'

export default function CourseContentAdmin({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)
  const router = useRouter()
  const supabase = createClient()

  const [user, setUser] = useState<any>(null)
  const [product, setProduct] = useState<Product | null>(null)
  const [lessons, setLessons] = useState<CourseContent[]>([])
  const [loading, setLoading] = useState(true)

  const [generatingLesson, setGeneratingLesson] = useState<string | null>(null)
  const [generatingDescription, setGeneratingDescription] = useState(false)
  const [previewContent, setPreviewContent] = useState<string | null>(null)
  const [previewTarget, setPreviewTarget] = useState<{ type: string; lessonId?: string; title?: string } | null>(null)

  const [newLessonTitle, setNewLessonTitle] = useState('')
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    supabase.auth.getUser().then((result: any) => {
      if (!result.data?.user) {
        router.push('/auth/login')
        return
      }
      setUser(result.data.user)
      loadData()
    })
  }, [])

  async function loadData() {
    try {
      const res = await fetch(`/api/admin/courses/${id}/lessons`)
      const data = await res.json()
      setProduct(data.product)
      setLessons(data.lessons)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  async function generateLesson(lessonId: string, title: string, existingContent?: string) {
    setGeneratingLesson(lessonId)
    try {
      const res = await fetch(`/api/admin/courses/${id}/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'lesson', title, existingContent }),
      })
      const data = await res.json()
      if (data.content) {
        setPreviewContent(data.content)
        setPreviewTarget({ type: 'lesson', lessonId, title })
      }
    } catch (e) {
      console.error(e)
    } finally {
      setGeneratingLesson(null)
    }
  }

  async function generateDescription(existingContent?: string) {
    setGeneratingDescription(true)
    try {
      const res = await fetch(`/api/admin/courses/${id}/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'description', existingContent }),
      })
      const data = await res.json()
      if (data.content) {
        setPreviewContent(data.content)
        setPreviewTarget({ type: 'description' })
      }
    } catch (e) {
      console.error(e)
    } finally {
      setGeneratingDescription(false)
    }
  }

  async function savePreview() {
    if (!previewTarget || !previewContent) return
    setSaving(true)

    try {
      if (previewTarget.type === 'description') {
        await fetch(`/api/admin/courses/${id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ description: previewContent }),
        })
        if (product) {
          setProduct({ ...product, description: previewContent })
        }
      } else if (previewTarget.type === 'lesson' && previewTarget.lessonId) {
        await fetch(`/api/admin/courses/${id}/lessons`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            lessonId: previewTarget.lessonId,
            content: previewContent,
          }),
        })
        setLessons(lessons.map(l =>
          l.id === previewTarget.lessonId ? { ...l, content: previewContent } : l
        ))
      }

      setPreviewContent(null)
      setPreviewTarget(null)
    } catch (e) {
      console.error(e)
    } finally {
      setSaving(false)
    }
  }

  function discardPreview() {
    setPreviewContent(null)
    setPreviewTarget(null)
  }

  async function addLesson() {
    if (!newLessonTitle.trim()) return
    setSaving(true)

    try {
      const res = await fetch(`/api/admin/courses/${id}/lessons`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: newLessonTitle,
          sort_order: lessons.length,
        }),
      })
      const data = await res.json()
      if (data.lesson) {
        setLessons([...lessons, data.lesson])
        setNewLessonTitle('')
      }
    } catch (e) {
      console.error(e)
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <p className="text-gray-400">Lade...</p>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <p className="text-gray-400">Produkt nicht gefunden.</p>
        <a href="/admin" className="mt-4 inline-block text-indigo-400">← Zurück zur Übersicht</a>
      </div>
    )
  }

  const isCourse = product.file_type === 'course'

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <a href="/admin" className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors">
        ← Admin-Übersicht
      </a>

      <div className="mt-6 mb-8">
        <span className="text-sm font-medium text-indigo-400 uppercase tracking-wider">Admin</span>
        <h1 className="text-3xl font-bold text-white mt-1">{product.title}</h1>
        <p className="mt-2 text-gray-400">{product.description}</p>
      </div>

      {!isCourse ? (
        <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800">
          <p className="text-gray-400">
            AI Content Generation ist nur für Kurs-Produkte (file_type: course) verfügbar.
          </p>
          <button
            onClick={() => generateDescription(product.description)}
            disabled={generatingDescription}
            className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 text-sm transition-colors"
          >
            {generatingDescription ? 'Generiere...' : 'Beschreibung mit KI verbessern'}
          </button>
        </div>
      ) : (
        <>
          <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 mb-8">
            <h2 className="text-lg font-semibold text-white mb-2">Kursbeschreibung</h2>
            <button
              onClick={() => generateDescription(product.description)}
              disabled={generatingDescription}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 text-sm transition-colors"
            >
              {generatingDescription ? (
                <><span className="animate-pulse">⚡</span> Generiere...</>
              ) : (
                <><span>✨</span> Mit KI verbessern</>
              )}
            </button>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">Lektionen ({lessons.length})</h2>
            </div>

            {lessons.map((lesson, index) => (
              <div key={lesson.id} className="p-5 rounded-xl bg-gray-900/50 border border-gray-800">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                      <span className="w-7 h-7 rounded-full bg-indigo-600/20 text-indigo-400 flex items-center justify-center text-xs font-bold shrink-0">
                        {index + 1}
                      </span>
                      {lesson.title}
                    </h3>
                    {lesson.description && (
                      <p className="mt-1 text-sm text-gray-400">{lesson.description}</p>
                    )}
                    {lesson.content && (
                      <details className="mt-3">
                        <summary className="text-sm text-indigo-400 cursor-pointer hover:text-indigo-300">
                          Inhalt anzeigen ({lesson.content.length} Zeichen)
                        </summary>
                        <div className="mt-2 p-4 rounded-lg bg-gray-950 text-gray-300 text-sm whitespace-pre-wrap max-h-60 overflow-y-auto">
                          {lesson.content}
                        </div>
                      </details>
                    )}
                  </div>
                  <div className="flex-shrink-0">
                    <button
                      onClick={() => generateLesson(lesson.id, lesson.title, lesson.content ?? undefined)}
                      disabled={generatingLesson === lesson.id}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 text-sm transition-colors"
                    >
                      {generatingLesson === lesson.id ? (
                        <><span className="animate-pulse">⚡</span> Generiere...</>
                      ) : (
                        <><span>✨</span> KI-Inhalt</>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex gap-3">
              <input
                type="text"
                value={newLessonTitle}
                onChange={(e) => setNewLessonTitle(e.target.value)}
                placeholder="Neue Lektion..."
                className="flex-1 rounded-lg border border-gray-700 bg-gray-900 px-4 py-2.5 text-sm text-gray-100 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                onKeyDown={(e) => e.key === 'Enter' && addLesson()}
              />
              <button
                onClick={addLesson}
                disabled={!newLessonTitle.trim() || saving}
                className="px-5 py-2.5 bg-gray-700 text-white rounded-lg hover:bg-gray-600 disabled:opacity-50 text-sm transition-colors"
              >
                Hinzufügen
              </button>
            </div>
          </div>
        </>
      )}

      {previewContent && previewTarget && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="max-w-2xl w-full max-h-[85vh] flex flex-col rounded-xl bg-gray-900 border border-gray-700 shadow-2xl">
            <div className="p-5 border-b border-gray-800 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">
                Vorschau — {previewTarget.title || (previewTarget.type === 'description' ? 'Beschreibung' : 'Lektion')}
              </h3>
              <button
                onClick={discardPreview}
                className="text-gray-400 hover:text-white transition-colors text-xl leading-none"
              >
                ✕
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-5">
              <div className="prose prose-invert prose-sm max-w-none text-gray-300 whitespace-pre-wrap">
                {previewContent}
              </div>
            </div>
            <div className="p-5 border-t border-gray-800 flex items-center justify-end gap-3">
              <button
                onClick={discardPreview}
                className="px-5 py-2.5 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 text-sm transition-colors"
              >
                Verwerfen
              </button>
              <button
                onClick={savePreview}
                disabled={saving}
                className="px-5 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 text-sm transition-colors"
              >
                {saving ? 'Speichere...' : 'Speichern'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
