import { createAdminClient } from '@/lib/supabase/admin'
import { ProductCard } from '@/components/product-card'
import type { Product } from '@/lib/types'

async function getProducts(): Promise<Product[]> {
  const supabase = createAdminClient()
  const { data } = await supabase
    .from('products')
    .select('*')
    .eq('published', true)
    .order('created_at', { ascending: false })
  return (data as Product[]) || []
}

export default async function HomePage() {
  const products = await getProducts()
  const featured = products.filter((p) => p.featured)
  const rest = products.filter((p) => !p.featured)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero */}
      <section className="text-center py-20">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
          KI-Wissen, das dich{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
            weiterbringt
          </span>
        </h1>
        <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
          Kurse, Templates und Tools, um mit KI produktiver zu werden und dein eigenes
          Online-Business aufzubauen.
        </p>
      </section>

      {/* Featured products */}
      {featured.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Empfohlen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      {/* All products */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-8">Alle Produkte</h2>
        {products.length === 0 ? (
          <div className="text-center py-16 bg-gray-900/50 rounded-xl border border-gray-800">
            <p className="text-gray-400 text-lg">Noch keine Produkte verfügbar.</p>
            <p className="text-gray-500 text-sm mt-2">In Kürze findest du hier Kurse, Templates und mehr.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
