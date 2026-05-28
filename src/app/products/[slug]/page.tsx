import { notFound, redirect } from 'next/navigation'
import { createAdminClient } from '@/lib/supabase/admin'
import { stripe, createCheckoutSession } from '@/lib/stripe'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { Button } from '@/components/ui/button'
import type { Product } from '@/lib/types'

async function getProduct(slug: string): Promise<Product | null> {
  const supabase = createAdminClient()
  const { data } = await supabase
    .from('products')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single()
  return data as Product | null
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = await getProduct(slug)
  if (!product) notFound()

  const supabase = await createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()

  async function buyAction() {
    'use server'
    if (!user?.email) {
      redirect('/auth/login')
    }
    const session = await createCheckoutSession(
      product!.id,
      product!.title,
      product!.price_cents,
      user.id,
      user.email
    )
    if (session.url) redirect(session.url)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Preview */}
        <div className="aspect-video rounded-xl bg-gradient-to-br from-indigo-900/40 to-purple-900/40 flex items-center justify-center">
          {product.image_url ? (
            <img src={product.image_url} alt={product.title} className="w-full h-full object-cover rounded-xl" />
          ) : (
            <span className="text-6xl">
              {product.file_type === 'course' ? '🎓' :
               product.file_type === 'template' ? '📋' :
               product.file_type === 'ebook' ? '📘' :
               product.file_type === 'spreadsheet' ? '📊' : '📦'}
            </span>
          )}
        </div>

        {/* Details */}
        <div>
          <span className="text-sm font-medium text-indigo-400 uppercase tracking-wider">
            {product.file_type === 'course' ? 'Kurs' :
             product.file_type === 'template' ? 'Template' :
             product.file_type === 'ebook' ? 'E-Book' :
             product.file_type === 'spreadsheet' ? 'Spreadsheet' : 'Digitales Produkt'}
          </span>
          <h1 className="mt-2 text-3xl font-bold text-white">{product.title}</h1>
          <p className="mt-4 text-gray-400 leading-relaxed">{product.description}</p>

          <div className="mt-8 p-6 rounded-xl bg-gray-900/50 border border-gray-800">
            <div className="flex items-center justify-between mb-6">
              <span className="text-3xl font-bold text-white">
                €{(product.price_cents / 100).toFixed(2)}
              </span>
            </div>
            <form action={buyAction}>
              <Button type="submit" size="lg" className="w-full">
                Jetzt kaufen
              </Button>
            </form>
            <p className="mt-3 text-xs text-gray-500 text-center">
              Sofortiger Zugriff nach Zahlung. SSL-verschlüsselt.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
