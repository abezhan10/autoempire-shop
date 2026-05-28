export function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-950 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-white">AutoEmpire<span className="text-indigo-500">.ai</span></h3>
            <p className="mt-2 text-sm text-gray-400">
              KI-gestützte Bildung und digitale Produkte für die nächste Generation.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Produkte</h4>
            <ul className="mt-3 space-y-2">
              <li><a href="/" className="text-sm text-gray-400 hover:text-white transition-colors">Alle Kurse</a></li>
              <li><a href="/" className="text-sm text-gray-400 hover:text-white transition-colors">Templates</a></li>
              <li><a href="/" className="text-sm text-gray-400 hover:text-white transition-colors">E-Books</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Rechtliches</h4>
            <ul className="mt-3 space-y-2">
              <li><a href="/recht/agb" className="text-sm text-gray-400 hover:text-white transition-colors">AGB</a></li>
              <li><a href="/recht/datenschutz" className="text-sm text-gray-400 hover:text-white transition-colors">Datenschutz</a></li>
              <li><a href="/recht/impressum" className="text-sm text-gray-400 hover:text-white transition-colors">Impressum</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} AutoEmpire AI. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  )
}
