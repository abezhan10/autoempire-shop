export default function ImpressumPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-white mb-8">Impressum</h1>
      <div className="prose prose-invert prose-sm max-w-none text-gray-300 space-y-4">
        <section>
          <h2 className="text-xl font-semibold text-white mt-8 mb-3">Angaben gemäß § 5 TMG</h2>
          <p>AutoEmpire AI</p>
          <p>Inhaber: [Name]</p>
          <p>[Straße und Hausnummer]</p>
          <p>[PLZ] [Stadt]</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-white mt-8 mb-3">Kontakt</h2>
          <p>E-Mail: kontakt@autoempire.ai</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-white mt-8 mb-3">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p>AutoEmpire AI</p>
          <p>[Adresse wie oben]</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-white mt-8 mb-3">Haftung für Inhalte</h2>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
            allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
            zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-white mt-8 mb-3">EU-Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer"
               className="text-indigo-400 hover:text-indigo-300 ml-1">
              https://ec.europa.eu/consumers/odr/
            </a>
          </p>
        </section>
      </div>
    </div>
  )
}
