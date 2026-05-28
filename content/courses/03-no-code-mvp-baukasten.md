# No-Code MVP Baukasten

## Übersicht

- **Dauer:** 7 Module (ca. 14-18 Stunden)
- **Zielgruppe:** Gründer, Produktmanager, Kreative ohne Code-Erfahrung
- **Voraussetzungen:** Keine Programmiererfahrung nötig
- **Tool-Stack:** Bubble.io, Make.com, Supabase, Lovable, Bolt.new

---

## Modul 1: Was ist ein MVP — und warum du keinen Code brauchst

### Lernziele
- MVP-Konzept verstehen
- No-Code-Stack kennenlernen
- Erstes Produkt skizzieren

### Skript

#### 1.1 Das MVP-Prinzip

Ein MVP (Minimum Viable Product) ist die einfachste Version deines Produkts, die echten Mehrwert bietet. Kein Code. Kein Team. Kein Risiko.

**Die MVP-Faustregel:**
> Baue nur das, was du brauchst, um die erste Bezahlung zu erhalten.

**3 Fragen vor dem Bau:**
1. Welches Problem löse ich?
2. Wer hat dieses Problem?
3. Wären sie bereit, dafür zu zahlen?

#### 1.2 Der No-Code-Stack

**Bubble.io** — Web-App-Baukasten (UI, Datenbank, Workflows)
**Make.com** — Automatisierung & Integrationen
**Supabase** — Backend & Datenbank (Open Source)
**Lovable / Bolt.new** — KI-generierte Web-Apps
**Stripe / Lemon Squeezy** — Zahlungen

#### 1.3 Dein erstes Produkt skizzieren

**Produkt-Canvas:**
- **Name:** [Arbeitstitel]
- **Problem:** [Ein Satz]
- **Lösung:** [Ein Satz]
- **Kernfunktion:** [Die eine Sache, die funktionieren muss]
- **Erster Nutzer:** [Wer genau?]
- **Preis:** [Was ist der erste Preis?]

### Übungen

**Übung 1.1:** Fülle den Produkt-Canvas für eine digitale Produktidee aus.

**Übung 1.2:** Recherchiere 3 No-Code-Tools, die für deine Idee relevant sein könnten.

---

## Modul 2: Bubble.io Grundlagen — Deine erste App

### Lernziele
- Bubble.io-Konto einrichten
- Erste Seite bauen
- Datenbank modellieren

### Skript

#### 2.1 Bubble.io einrichten

1. **Konto erstellen** unter bubble.io (kostenloser Starter-Plan)
2. **Neue App:** "Empty App" wählen
3. **Template:** Optional "Responsive" wählen

#### 2.2 Deine erste Seite

Bubble.io arbeitet visuell. Alles ist Drag & Drop.

**Elemente, die du brauchst:**
- **Text** — Überschriften, Beschreibungen
- **Input** — Formularfelder
- **Button** — Aktionen auslösen
- **Repeating Group** — Listen anzeigen
- **Group** — Container für Layout

**Aufgabe: Baue eine Produktseite**
1. Bild-Platzhalter (1:1)
2. Produkttitel
3. Preis
4. "Jetzt kaufen"-Button
5. Beschreibungstext

#### 2.3 Datenbank-Modellierung

Bubbles Datenbank heißt "Data Types" — denk daran wie eine Excel-Tabelle.

**Beispiel: Produkt-Datenbank**
| Feld | Typ | Beispiel |
|------|-----|----------|
| Name | Text | "KI-Kurs Masterclass" |
| Preis | Number | 29,99 |
| Beschreibung | Text (lang) | "Lerne KI..." |
| Bild | Image | produkt.jpg |
| Kategorie | Option Set | Kurs, Template, Ebook |

### Übungen

**Übung 2.1:** Erstelle einen Bubble.io-Account und baue eine Produktseite mit Titel, Preis und Button.

**Übung 2.2:** Modelliere eine "Product"-Datenbank mit 5 Feldern.

**Übung 2.3:** Verbinde den Button mit einem Workflow: "Wenn geklickt → Seite wechseln".

---

## Modul 3: Workflows & Logik — Deine App wird intelligent

### Lernziele
- Workflows in Bubble verstehen
- Bedingungen und Zustände nutzen
- Benutzer-Logik abbilden

### Skript

#### 3.1 Workflow-Grundlagen

Ein Workflow ist eine Kette von Aktionen, die durch ein Ereignis ausgelöst werden.

**Ereignis → Aktion → Aktion → ...**

**Beispiel: Sign-Up-Workflow**
```
Wenn Button "Registrieren" geklickt wird →
    1. Prüfe: Ist E-Mail gültig?
    2. Prüfe: Existiert Benutzer schon?
    3. Erstelle neuen Benutzer in DB
    4. Sende Begrüßungs-E-Mail
    5. Leite zu Dashboard weiter
```

#### 3.2 Zustände und Bedingungen

Bubble zeigt/versteckt Elemente basierend on Bedingungen.

**Beispiele:**
- "Preis anzeigen NUR wenn Produkt > 0€"
- "Button deaktivieren WENN kein Benutzer eingeloggt"
- "Fehlermeldung zeigen WENN Feld leer"

#### 3.3 Benutzer-Verwaltung

Bubble hat eingebaute Benutzer-Funktionen:
- Login/Signup (Google, E-Mail)
- Passwort zurücksetzen
- Session-Management
- Rollen (Admin, User)

### Übungen

**Übung 3.1:** Baue einen Sign-Up-Workflow mit Validierung.

**Übung 3.2:** Erstelle eine Bedingung: "Nur eingeloggte Benutzer sehen den 'Dashboard'-Button".

**Übung 3.3:** Baue einen "Produkt zum Warenkorb hinzufügen"-Workflow.

---

## Modul 4: Make.com — Alles verbinden

### Lernziele
- Make.com-Grundlagen
- Apps integrieren
- Zahlungs-Workflows

### Skript

#### 4.1 Make.com einrichten

1. Konto auf make.com erstellen
2. Ersten Scenario anlegen
3. Module aus dem App-Verzeichnis wählen

#### 4.2 Bubble + Make.com verbinden

**Webhook-Integration:**
1. Bubble sendet Daten an Make.com-Webhook
2. Make.com verarbeitet die Daten
3. Make.com schreibt zurück in Bubble (API)

**Beispiel: Bestell-Workflow**
```
Bubble (Bestellung aufgegeben) → Webhook → Make.com →
    1. Stripe: Zahlung erstellen
    2. Supabase: Bestellung speichern
    3. E-Mail: Bestätigung an Kunden
    4. Slack: Benachrichtigung an Team
    5. Bubble: Status aktualisieren
```

#### 4.3 Zahlungen integrieren (Stripe)

1. Stripe-Konto erstellen
2. Stripe-Modul in Make.com konfigurieren
3. Checkout-Seite: Preis, Beschreibung, Erfolgs-URL
4. Webhook: Zahlungsbestätigung empfangen

### Übungen

**Übung 4.1:** Verbinde Bubble mit Make.com via Webhook.

**Übung 4.2:** Baue einen Stripe-Zahlungs-Workflow (Test-Modus).

**Übung 4.3:** Erstelle einen Workflow: "Nach erfolgreicher Zahlung → E-Mail mit Download-Link senden".

---

## Modul 5: Deployment — Dein Produkt geht live

### Lernziele
- Domain einrichten
- Custom Domain + SSL
- Launch-Checkliste

### Skript

#### 5.1 Von lokal zu live

**Bubble.io:** Ein Klick — "Deploy to Production". Fertig.

**Workflow:**
1. Entwicklung auf "Development"-Version
2. Testen mit Testern
3. "Deploy to Live"
4. Eigene Domain verbinden
5. SSL aktivieren (automatisch bei Bubble)

#### 5.2 Domain & Branding

1. Domain kaufen (Namecheap, GoDaddy, Cloudflare)
2. DNS-Einträge bei Bubble hinterlegen
3. Warten bis DNS propagiert (5-30 Minuten)
4. SSL automatisch aktiv

#### 5.3 Launch-Checkliste

- [ ] Landing Page funktioniert
- [ ] Checkout-Prozess getestet
- [ ] E-Mail-Benachrichtigungen aktiv
- [ ] Impressum/Datenschutz online
- [ ] Analytics eingerichtet
- [ ] Backup konfiguriert
- [ ] Fehlerseiten angepasst (404, 500)
- [ ] Mobile-Ansicht getestet
- [ ] Ladezeit < 3 Sekunden
- [ ] SSL aktiv

### Übungen

**Übung 5.1:** Gehe die Launch-Checkliste für deine App durch.

**Übung 5.2:** Teste die mobile Ansicht deiner App.

**Übung 5.3:** Erstelle eine 404-Seite mit Weiterleitung zur Startseite.

---

## Modul 6: Wachstum — Nach dem Launch

### Lernziele
- Feedback sammeln und priorisieren
- Iterativ verbessern ohne kaputt zu machen
- Marketing-Automatisierung

### Skript

#### 6.1 Feedback sammeln

**Tools:**
- Google Forms / Typeform (Umfragen)
- Hotjar / Microsoft Clarity (Aufzeichnungen)
- Intercom / Crisp (Live-Chat)
- Built-in: Feedback-Button in der App

#### 6.2 Iterieren — Die Kunst des Verbesserns

**Priorisierungs-Matrix:**
```
                Hohe Komplexität | Niedrige Komplexität
Große Wirkung  |     Planen      |     SOFORT MACHEN
Kleine Wirkung |     Später      |     Wenn Zeit
```

#### 6.3 Marketing-Automatisierung

**Workflow:**
1. Landing Page → E-Mail Capture
2. E-Mail → Automatisierte Drip-Kampagne
3. Kauf → Onboarding-Sequenz
4. Nach Kauf → Upsell-Angebote

### Übungen

**Übung 6.1:** Baue einen Feedback-Button in deine App ein.

**Übung 6.2:** Erstelle eine Priorisierungs-Matrix für die nächsten 5 Features.

---

## Modul 7: Abschlussprojekt — Dein MVP in 7 Tagen

### Lernziele
- Alle bisherigen Fähigkeiten kombinieren
- Vollständigen MVP bauen
- Launch-Vorbereitung

### Projekt: 7-Tage-MVP-Challenge

**Tag 1:** Produkt-Canvas + Tool-Stack-Entscheidung
**Tag 2:** Bubble.io-Seiten bauen (3 Seiten max)
**Tag 3:** Datenbank-Modell + Workflows
**Tag 4:** Make.com-Integrationen + Zahlung
**Tag 5:** Testen + Fehler beheben
**Tag 6:** Domain + Deployment
**Tag 7:** Launch + erstes Feedback einholen

### Übungen zum Abschluss

**Übung 7.1:** Dokumentiere deinen MVP als 1-Seiten-Business-Plan.

**Übung 7.2:** Erstelle eine Liste der 3 wichtigsten Learnings aus dem Bau-Prozess.

**Übung 7.3:** Plane die nächste Iteration: Was ist das wichtigste Feature, das du als nächstes baust?

---

## Anhang: No-Code-Ressourcen

### Bubble.io-Vorlagen
- **SaaS Starter Template** (kostenlos)
- **Marketplace Template** (79$)
- **Dashboard Template** (49$)

### Make.com-Vorlagen
- **E-Commerce-Workflow** (kostenlos)
- **Lead-Gen-Automatisierung** (kostenlos)
- **CRM-Sync** (kostenlos)

### KI-Tools für No-Coder
- **Lovable.de** — App aus Beschreibung generieren
- **Bolt.new** — Web-App mit KI bauen
- **v0.dev** — UI-Komponenten generieren
- **Claude / ChatGPT** — Code verstehen und anpassen
