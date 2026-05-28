import { redirect, notFound } from 'next/navigation'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import type { Product, CourseContent } from '@/lib/types'

async function fetchCourseContent(productId: string): Promise<CourseContent[]> {
  const admin = createAdminClient()
  const { data } = await admin
    .from('course_content')
    .select('*')
    .eq('product_id', productId)
    .order('sort_order', { ascending: true })
  return data ?? []
}

function FileTypeEmoji({ fileType }: { fileType: string }) {
  const emoji: Record<string, string> = {
    course: '🎓', template: '📋', ebook: '📘', spreadsheet: '📊',
  }
  return <span>{emoji[fileType] ?? '📦'}</span>
}

export default async function ProductAccessPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const supabase = await createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/auth/login')

  const admin = createAdminClient()

  const { data: order } = await admin
    .from('orders')
    .select('*')
    .eq('user_id', user.id)
    .eq('product_id', id)
    .eq('status', 'completed')
    .single()

  if (!order) {
    return (
      <div className="max-w-md mx-auto px-4 py-24 text-center">
        <p className="text-gray-400">Du hast dieses Produkt nicht erworben.</p>
        <a href="/dashboard" className="mt-4 inline-block text-indigo-400">Zurück zum Dashboard</a>
      </div>
    )
  }

  const { data: product } = await admin
    .from('products')
    .select('*')
    .eq('id', id)
    .single()

  if (!product) notFound()

  const isCourse = product.file_type === 'course'
  const lessons = isCourse ? await fetchCourseContent(id) : []

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <a href="/dashboard" className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors">
        ← Zurück zum Dashboard
      </a>

      <div className="mt-6">
        <span className="text-sm font-medium text-indigo-400 uppercase tracking-wider">Dein Produkt</span>
        <h1 className="text-3xl font-bold text-white mt-1 flex items-center gap-3">
          <FileTypeEmoji fileType={product.file_type} />
          {product.title}
        </h1>
        <p className="mt-4 text-gray-400">{product.description}</p>
      </div>

      <div className="mt-8">
        {isCourse ? (
          lessons.length > 0 ? (
            <div className="space-y-6">
              {lessons.map((lesson, index) => (
                <div key={lesson.id} className="p-6 rounded-xl bg-gray-900/50 border border-gray-800">
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-600/20 text-indigo-400 flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-white">{lesson.title}</h3>
                      {lesson.description && (
                        <p className="mt-1 text-sm text-gray-400">{lesson.description}</p>
                      )}
                      {lesson.video_url && (
                        <div className="mt-4 aspect-video rounded-lg overflow-hidden bg-black">
                          <video
                            src={lesson.video_url}
                            controls
                            className="w-full h-full"
                            poster={product.preview_url ?? undefined}
                          />
                        </div>
                      )}
                      {lesson.content && (
                        <div className="mt-4 prose prose-invert prose-sm max-w-none text-gray-300 whitespace-pre-wrap">
                          {lesson.content}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 text-center">
              <p className="text-gray-400">Kursinhalte werden vorbereitet.</p>
            </div>
          )
        ) : product.file_url ? (
          <a
            href={product.file_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            📥 Download
          </a>
        ) : null}
      </div>
    </div>
  )
}
