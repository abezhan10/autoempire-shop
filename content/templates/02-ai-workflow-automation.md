# AI Workflow Automation Templates (n8n / Make.com)

## Template 1: Tägliches News-Briefing

**Zweck:** Automatisch die wichtigsten Nachrichten sammeln, zusammenfassen und per E-Mail oder Slack versenden.

### n8n-Workflow

```
[Schedule: Täglich 8:00] → 
  [HTTP Request: RSS-Feed(s) abrufen] →
    [OpenAI: Zusammenfassen (max 5 Bullet Points pro Artikel)] →
      [HTML: In E-Mail-Format bringen] →
        [E-Mail: An Empfänger senden] (ODER [Slack: In Channel posten])
```

**Konfiguration:**

| Schritt | Einstellung |
|---------|-------------|
| Schedule | Cron: `0 8 * * 1-5` |
| RSS Feeds | Je 3 Quellen pro Thema |
| KI-Prompt | "Fasse die wichtigsten News zusammen. Priorisiere nach Relevanz für [BRANCHE]" |
| Output | Max 500 Wörter, Bullet Points |

---

## Template 2: Lead-Qualifizierung

**Zweck:** Eingehende Kontaktformulare automatisch analysieren und kategorisieren.

### n8n-Workflow

```
[Webhook: Kontaktformular] →
  [OpenAI: Lead qualifizieren] →
    [Switch: Je nach Score] →
      Score > 80: [Slack: Hot Lead benachrichtigen] + [CRM: Eintrag erstellen]
      Score 50-80: [E-Mail: Automatische Antwort + Terminvorschlag]
      Score < 50: [E-Mail: Newsletter-Anmeldung bestätigen]
```

**KI-Prompt für Lead-Bewertung:**
```
Bewerte diesen Lead von 0-100:

Name: {NAME}
Firma: {FIRMA}
Nachricht: {NACHRICHT}
Budget-Indikation: {BUDGET}
Timeline: {TIMELINE}

Bewertungskriterien:
- Passung zum Produkt (0-40)
- Budget/Investitionsbereitschaft (0-30)
- Dringlichkeit (0-20)
- Entscheider-Rolle (0-10)

Empfehlung: Hot / Warm / Cold
Begründung: 1 Satz
```

---

## Template 3: Rechnungs-Assistent

**Zweck:** Rechnungs-E-Mails automatisch erkennen, Daten extrahieren und in Buchhaltung übertragen.

### n8n-Workflow

```
[E-Mail-Trigger: Neue E-Mail mit "Rechnung" im Betreff] →
  [Gmail: Anhang herunterladen (PDF)] →
    [PDF: Text extrahieren] →
      [OpenAI: Rechnungsdaten strukturieren] →
        [Google Sheets: Neue Zeile einfügen] +
        [Slack: "Neue Rechnung: {BETRAG} von {ABSENDER}"] →
          [Ordner: PDF ablegen (Rechnungen/JAHR/MONAT/)]
```

**KI-Prompt:**
```
Extrahiere folgende Daten aus dieser Rechnung im JSON-Format:
{
  "rechnungsnummer": "",
  "datum": "",
  "absender": "",
  "betrag_netto": 0,
  "ust": 0,
  "betrag_brutto": 0,
  "leistungszeitraum": "",
  "kategorie": ""
}
```

---

## Template 4: Social Media Cross-Poster

**Zweck:** Content auf mehreren Plattformen gleichzeitig oder zeitversetzt veröffentlichen.

### n8n-Workflow

```
[Schedule: Mo/Di/Mi/Do/Fr 10:00] →
  [Google Sheets: Nächsten Post lesen] →
    [OpenAI: Plattform-spezifisch anpassen] →
      [Switch: Je nach Plattform] →
        LinkedIn: [LinkedIn API: Post erstellen]
        Twitter/X: [Twitter API: Tweet senden]
        (weitere Plattformen ergänzbar)
          → [Google Sheets: Status auf "gepostet" setzen]
```

**Content-Tabelle (Google Sheets):**

| Datum | Plattform | Text | Bild-URL | Hashtags | Status |
|-------|-----------|------|----------|----------|--------|
| 01.06. | LinkedIn | Content | bild.jpg | #KI | Geplant |

---

## Template 5: Kunden-Onboarding-Automatisierung

**Zweck:** Neue Kunden automatisch durch den Onboarding-Prozess führen.

### n8n-Workflow (mehrere Schritte, zeitversetzt)

```
[Trigger: Neue Bestellung in Stripe] →
  [Supabase: Kunde in DB anlegen] →
  [Slack: "Neuer Kunde: {NAME} ({PRODUKT})"] →
  [E-Mail: Willkommen + Login-Daten senden (sofort)] →
  
  [WAIT: 3 Tage] →
    [E-Mail: "So startest du" + Video-Link]
    [Check: Hat Kunde eingeloggt?] →
      Nein → [E-Mail: Erinnerung + Support-Link]
      Ja → Nichts tun

  [WAIT: 7 Tage] →
    [E-Mail: "Fortgeschrittene Tipps"]

  [WAIT: 30 Tage] →
    [E-Mail: "Dein erster Monat" + Feedback-Umfrage]
    [Slack: "Kunde {NAME} — 30 Tage Feedback"]
```

---

## Template 6: KI-Content-Factory

**Zweck:** Autonome Content-Produktion von der Recherche bis zur Veröffentlichung.

### n8n-Workflow

```
[Schedule: Wöchentlich Mo 9:00] →
  [OpenAI: 5 Content-Ideen generieren für [THEMA]] →
  
  [Loop: Für jede Idee]
    [OpenAI: 1000-Wort-Artikel schreiben] →
    [OpenAI: SEO-optimieren (Meta-Title, -Description)] →
    [OpenAI: 3 Social-Media-Teaser generieren] →
    [WordPress: Artikel als Draft speichern] →
    [Buffer/Hootsuite: Teaser planen] →
  
  [Abschluss]
    [E-Mail: "Content-Woche geplant — 5 Artikel als Draft"] →
    [Slack: "Content-Factory hat {ANZAHL} Artikel produziert"]
```
