import { redirect } from 'next/navigation'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import Link from 'next/link'
import type { Order, Product } from '@/lib/types'

export default async function DashboardPage() {
  const supabase = await createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/auth/login')

  const admin = createAdminClient()
  const { data: orders } = await admin
    .from('orders')
    .select('*, product:products(*)')
    .eq('user_id', user.id)
    .eq('status', 'completed')
    .order('created_at', { ascending: false })

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-white mb-2">Mein Dashboard</h1>
      <p className="text-gray-400 mb-8">Hier findest du all deine gekauften Produkte.</p>

      {!orders || orders.length === 0 ? (
        <div className="text-center py-16 bg-gray-900/50 rounded-xl border border-gray-800">
          <p className="text-gray-400 text-lg">Du hast noch keine Produkte gekauft.</p>
          <Link
            href="/"
            className="mt-4 inline-block text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            Produkte entdecken →
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((order: Order & { product: Product }) => (
            <div
              key={order.id}
              className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <span className="text-3xl">
                  {order.product.file_type === 'course' ? '🎓' :
                   order.product.file_type === 'template' ? '📋' :
                   order.product.file_type === 'ebook' ? '📘' :
                   order.product.file_type === 'spreadsheet' ? '📊' : '📦'}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white">{order.product.title}</h3>
                  <p className="text-sm text-gray-400">
                    Gekauft am {new Date(order.created_at).toLocaleDateString('de-DE')}
                  </p>
                </div>
              </div>
              <Link
                href={`/dashboard/products/${order.product_id}`}
                className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                Ansehen →
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
