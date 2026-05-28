import { createAdminClient } from '@/lib/supabase/admin'
import { ProductCard } from '@/components/product-card'
import type { Product } from '@/lib/types'

export const dynamic = 'force-dynamic'

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
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/30 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
              Werde zum AI-Profi –{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                ohne Programmierkenntnisse
              </span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Lerne, wie du KI-Workflows in deinem Business einsetzt. Für Nicht-Techniker entwickelt – praktisch, sofort anwendbar, ergebnisorientiert.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/products"
                className="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors text-center"
              >
                Jetzt gratis starten
              </a>
              <a
                href="#produkte"
                className="w-full sm:w-auto px-8 py-3.5 border border-gray-700 text-gray-300 font-semibold rounded-xl hover:bg-gray-800 transition-colors text-center"
              >
                Produkte entdecken
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            KI kann jeder lernen
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Kein Code nötig. Unsere Kurse führen dich Schritt für Schritt durch die Welt der künstlichen Intelligenz.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-8 text-center">
            <div className="w-14 h-14 bg-indigo-900/40 rounded-xl flex items-center justify-center mx-auto">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="mt-6 text-xl font-semibold text-white">Für Einsteiger gemacht</h3>
            <p className="mt-3 text-gray-400 leading-relaxed">
              Keine Vorkenntnisse nötig. Jedes Modul führt dich Schritt für Schritt durch die Welt der KI.
            </p>
          </div>
          <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-8 text-center">
            <div className="w-14 h-14 bg-indigo-900/40 rounded-xl flex items-center justify-center mx-auto">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="mt-6 text-xl font-semibold text-white">Praxisnah & anwendbar</h3>
            <p className="mt-3 text-gray-400 leading-relaxed">
              Lerne an realen Business-Fällen. Jedes Modul endet mit einer Aufgabe, die du direkt umsetzen kannst.
            </p>
          </div>
          <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-8 text-center">
            <div className="w-14 h-14 bg-indigo-900/40 rounded-xl flex items-center justify-center mx-auto">
              <span className="text-2xl">⏱️</span>
            </div>
            <h3 className="mt-6 text-xl font-semibold text-white">Zeitersparnis pur</h3>
            <p className="mt-3 text-gray-400 leading-relaxed">
              Spare 20+ Stunden pro Woche durch automatisierte Workflows. Unsere Template-Bibliothek gibt dir fertige Lösungen.
            </p>
          </div>
        </div>
      </section>

      {/* Featured products */}
      {featured.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-white mb-8">Empfohlen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      {/* All products */}
      <section id="produkte" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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

      {/* Trust Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-950 p-8 sm:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Dein Erfolg ist unsere Mission
            </h2>
            <p className="mt-4 text-gray-400 max-w-xl mx-auto">
              Risikofrei starten und lebenslang profitieren.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-900/40 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">30 Tage Geld-zurück</h3>
              <p className="mt-2 text-sm text-gray-400">
                Teste risikofrei. Wenn es dir nicht gefällt, bekommst du dein Geld zurück.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-900/40 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">♾️</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">Lebenslanger Zugriff</h3>
              <p className="mt-2 text-sm text-gray-400">
                Einmal kaufen, für immer nutzen. Inklusive aller zukünftigen Updates.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-900/40 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">Community-Zugang</h3>
              <p className="mt-2 text-sm text-gray-400">
                Austausch mit Gleichgesinnten und wöchentliche Live-Q&A-Sessions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
          Häufige Fragen
        </h2>
        <div className="space-y-4">
          <details className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 group open:border-indigo-800/50 open:bg-gray-900/80 transition-all">
            <summary className="text-lg font-semibold text-white cursor-pointer list-none flex items-center justify-between">
              Brauche ich Vorkenntnisse?
              <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-4 text-gray-400 leading-relaxed">
              Nein. Die Kurse starten bei Null und sind speziell für Nicht-Techniker entwickelt. Du brauchst keine Programmiererfahrung.
            </p>
          </details>
          <details className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 group open:border-indigo-800/50 open:bg-gray-900/80 transition-all">
            <summary className="text-lg font-semibold text-white cursor-pointer list-none flex items-center justify-between">
              Wie viel Zeit muss ich investieren?
              <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-4 text-gray-400 leading-relaxed">
              Pro Modul ca. 2-3 Stunden. Du bestimmst dein Tempo und kannst jederzeit pausieren und weitermachen.
            </p>
          </details>
          <details className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 group open:border-indigo-800/50 open:bg-gray-900/80 transition-all">
            <summary className="text-lg font-semibold text-white cursor-pointer list-none flex items-center justify-between">
              Gibt es Support?
              <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-4 text-gray-400 leading-relaxed">
              Ja - über unsere Community und wöchentliche Live-Q&A-Sessions. Du bist nie allein auf deiner Lernreise.
            </p>
          </details>
          <details className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 group open:border-indigo-800/50 open:bg-gray-900/80 transition-all">
            <summary className="text-lg font-semibold text-white cursor-pointer list-none flex items-center justify-between">
              Kann ich mein Geld zurückbekommen?
              <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-4 text-gray-400 leading-relaxed">
              Ja, wir bieten 30 Tage Geld-zurück-Garantie. Wenn dir das Produkt nicht gefällt, erstatten wir den vollen Kaufpreis.
            </p>
          </details>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center rounded-2xl border border-gray-800 bg-gradient-to-br from-indigo-950/30 to-purple-950/30 p-12 sm:p-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Bereit, KI in deinem Business zu nutzen?
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Starte noch heute und werde in 4 Wochen zum KI-Profi - ohne Code, mit Verstand.
          </p>
          <a
            href="/products"
            className="inline-block mt-8 px-8 py-3.5 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors"
          >
            Jetzt starten
          </a>
        </div>
      </section>
    </div>
  )
}
