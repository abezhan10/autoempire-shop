import Link from 'next/link'
import type { Product } from '@/lib/types'

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group rounded-xl border border-gray-800 bg-gray-900/50 overflow-hidden hover:border-gray-700 transition-all hover:shadow-xl"
    >
      <div className="aspect-video bg-gradient-to-br from-indigo-900/40 to-purple-900/40 flex items-center justify-center">
        {product.image_url ? (
          <img
            src={product.image_url}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-4xl">
            {product.file_type === 'course' ? '🎓' :
             product.file_type === 'template' ? '📋' :
             product.file_type === 'ebook' ? '📘' :
             product.file_type === 'spreadsheet' ? '📊' : '📦'}
          </span>
        )}
      </div>
      <div className="p-5">
        <span className="text-xs font-medium text-indigo-400 uppercase tracking-wider">
          {product.file_type === 'course' ? 'Kurs' :
           product.file_type === 'template' ? 'Template' :
           product.file_type === 'ebook' ? 'E-Book' :
           product.file_type === 'spreadsheet' ? 'Spreadsheet' : 'Digital'}
        </span>
        <h3 className="mt-1 text-lg font-semibold text-white group-hover:text-indigo-300 transition-colors">
          {product.title}
        </h3>
        <p className="mt-2 text-sm text-gray-400 line-clamp-2">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-white">
            €{(product.price_cents / 100).toFixed(2)}
          </span>
          <span className="text-sm text-indigo-400 group-hover:translate-x-1 transition-transform">
            Ansehen →
          </span>
        </div>
      </div>
    </Link>
  )
}
