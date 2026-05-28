export default function DatenschutzPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-white mb-8">Datenschutzerklärung</h1>
      <div className="prose prose-invert prose-sm max-w-none text-gray-300 space-y-6">
        <section>
          <h2 className="text-xl font-semibold text-white mt-8 mb-3">1. Verantwortlicher</h2>
          <p>
            Verantwortlicher für die Datenverarbeitung auf dieser Plattform ist die AutoEmpire AI.
            Bei Fragen zum Datenschutz wende dich bitte an den im Impressum genannten Kontakt.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-white mt-8 mb-3">2. Erhobene Daten</h2>
          <p>Wir erheben folgende personenbezogene Daten:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>E-Mail-Adresse (für Kontoerstellung und Kaufabwicklung)</li>
            <li>Name (freiwillig für die Profilverwaltung)</li>
            <li>Zahlungsinformationen (verarbeitet durch Stripe, wir speichern keine Kreditkartendaten)</li>
            <li>Nutzungsdaten (Seitenaufrufe, Produktzugriffe zur Verbesserung unseres Angebots)</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-white mt-8 mb-3">3. Zweck der Verarbeitung</h2>
          <p>
            Die Datenverarbeitung erfolgt zur Vertragserfüllung (Kaufabwicklung, Produktzugriff),
            zur Kommunikation mit Nutzern und zur Verbesserung der Plattform.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-white mt-8 mb-3">4. Drittanbieter</h2>
          <p>Wir nutzen folgende Dienste:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>Supabase</strong> — Authentifizierung und Datenbank (Hosting in EU)</li>
            <li><strong>Stripe</strong> — Zahlungsabwicklung (PCI-DSS-konform)</li>
            <li><strong>Vercel</strong> — Hosting der Plattform</li>
            <li><strong>OpenRouter</strong> — KI-Inhaltegenerierung (optionale Funktion)</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-white mt-8 mb-3">5. Rechte der Nutzer</h2>
          <p>
            Nutzer haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung
            ihrer personenbezogenen Daten sowie das Recht auf Datenübertragbarkeit.
          </p>
        </section>
      </div>
    </div>
  )
}
