# AutoGPT & Agenten-Workflows

## Übersicht

- **Dauer:** 5 Module (ca. 10-12 Stunden)
- **Zielgruppe:** Fortgeschrittene Anwender, die KI-Agenten verstehen und einsetzen wollen
- **Voraussetzungen:** Grundlegendes KI-Verständnis (Modul 1 aus KI-Produktivität Masterclass)
- **Tool-Stack:** AutoGPT, n8n, Python-Grundlagen, OpenRouter

---

## Modul 1: Was sind KI-Agenten?

### Lernziele
- Konzept autonomer KI-Agenten verstehen
- Unterschied zwischen Chat und Agenten kennen
- Erste Agenten-Konfiguration

### Skript

#### 1.1 Vom Chat zum Agenten

Ein KI-Agent ist wie ein ChatGPT, der selbstständig handeln kann. Statt dass du jede Frage stellst, bekommt der Agent ein Ziel und arbeitet eigenständig daran.

**Chat vs. Agent:**
| Chat | Agent |
|------|-------|
| Du fragst, KI antwortet | KI bekommt Ziel und handelt |
| Ein Durchgang | Mehrere Iterationen |
| Keine Werkzeuge | Kann Tools nutzen |
| Du steuerst jeden Schritt | KI plant eigene Schritte |

#### 1.2 Agenten-Arten

1. **Single-Agent** — Ein Agent, eine Aufgabe
2. **Multi-Agent** — Mehrere Agenten arbeiten zusammen
3. **Hierarchisch** — Ein Chef-Agent delegiert an Sub-Agenten
4. **RAG-Agent** — Agent mit eigenem Wissensspeicher

#### 1.3 Der erste Agent: Aufgabe formulieren

**Die 4 Elemente einer guten Agenten-Aufgabe:**
1. **Rolle:** Wer ist der Agent?
2. **Ziel:** Was ist das Endziel?
3. **Ressourcen:** Welche Tools hat er?
4. **Constraints:** Was darf er nicht?

**Beispiel:**
```
Rolle: Social Media Manager
Ziel: Erstelle 30 Tage Content-Plan für Instagram
Ressourcen: Kann googlen, Bilder generieren, Texte schreiben
Constraints: Keine politischen Themen, Marken-Sprache verwenden
```

### Übungen

**Übung 1.1:** Beschreibe eine Aufgabe aus deinem Alltag als Agenten-Konfiguration (Rolle, Ziel, Ressourcen, Constraints).

**Übung 1.2:** Vergleiche: Warum ist ein Agent besser geeignet als ein einfacher Chat-Prompt für diese Aufgabe?

---

## Modul 2: AutoGPT — Der bekannteste KI-Agent

### Lernziele
- AutoGPT installieren und starten
- Eigene Ziele setzen
- Ergebnisse bewerten

### Skript

#### 2.1 AutoGPT installieren

AutoGPT ist ein Open-Source-Projekt, das GPT-4 nutzt, um autonom Ziele zu erreichen.

**Installation:**
```bash
git clone https://github.com/Significant-Gravitas/AutoGPT.git
cd AutoGPT
cp .env.template .env
# OPENAI_API_KEY eintragen
docker-compose up
```

**Alternativ:** Nutze den Web-Client unter https://autogpt.net (keine Installation nötig).

#### 2.2 Ziele setzen — Die Kunst der guten Aufgabenstellung

**Schlechte Ziele:**
- "Mach Marketing für mein Business" (zu vage)
- "Schreibe 100 Blogartikel" (zu viel, keine Qualität)
- "Verdiene Geld mit KI" (nicht konkret)

**Gute Ziele:**
- "Recherchiere die Top-10 Keywords im Bereich KI-Training und erstelle eine SEO-optimierte Content-Strategie für 3 Monate"
- "Analysiere meine letzten 50 Kunden-E-Mails und kategorisiere sie in Anfragen, Beschwerden und Feedback"

#### 2.3 Der AutoGPT-Workflow

1. **Ziel setzen** → Klare Endzustand-Definition
2. **Agent starten** → AutoGPT analysiert, plant, handelt
3. **Zwischenergebnisse prüfen** → Mensch im Loop
4. **Iterieren** → Nachjustieren, neu starten
5. **Ergebnis sichern** → Output exportieren

### Übungen

**Übung 2.1:** Installiere AutoGPT (oder nutze den Web-Client). Setze ein klares Ziel für eine Marktrecherche.

**Übung 2.2:** Starte den Agenten und protokolliere seine Schritte. An welcher Stelle würdest du eingreifen?

**Übung 2.3:** Optimiere dein Ziel basierend auf den ersten Ergebnissen. Was hast du gelernt?

---

## Modul 3: n8n-Workflows mit KI-Agenten

### Lernziele
- n8n-Grundlagen verstehen
- KI-Knoten in Workflows integrieren
- Agenten-artige Automatisierungen bauen

### Skript

#### 3.1 n8n — Die Automatisierungs-Zentrale

n8n verbindet Apps und Dienste. Mit KI-Knoten werden Workflows intelligent.

**Grundlegende Knoten:**
- **Trigger** — Workflow starten (Zeit, Webhook, App-Ereignis)
- **Action** — Etwas tun (E-Mail senden, Daten speichern)
- **KI** — OpenAI/Claude-Knoten für KI-Operationen
- **Logic** — Bedingungen, Schleifen, Verzweigungen
- **Transform** — Daten umwandeln

#### 3.2 KI-Knoten konfigurieren

**OpenAI-Knoten in n8n:**
1. API-Key hinterlegen
2. Modell wählen (gpt-4 für komplexe Aufgaben)
3. System-Prompt definieren
4. User-Nachricht aus vorherigen Knoten

**Beispiel: Automatischer E-Mail-Responder**
```
Webhook (neue E-Mail) → OpenAI (Kategorisieren) → Switch (je nach Kategorie) →
- Angebot → Slack + CRM
- Beschwerde → E-Mail an Support-Chef
- Spam → Löschen
```

#### 3.3 Multi-Agent-Workflows

Baue mehrere KI-Knoten, die zusammenarbeiten:

```
Trigger → Agent 1 (Recherche) → Agent 2 (Analyse) → Agent 3 (Bericht) → Ausgabe
```

**Beispiel: Content-Fabrik**
1. **Recherche-Agent** sucht die 5 aktuellsten Trends
2. **Schreib-Agent** erstellt 3 Blogartikel-Outlines
3. **SEO-Agent** optimiert Überschriften und Keywords
4. **Bild-Agent** generiert passende Bilder
5. **Planungs-Agent** erstellt Content-Kalender

### Übungen

**Übung 3.1:** Baue einen n8n-Workflow mit einem KI-Knoten: Wenn ein Google-Formular ausgefüllt wird, analysiere die Antwort und sende eine personalisierte E-Mail.

**Übung 3.2:** Erstelle einen Multi-Agent-Workflow mit 2 KI-Knoten (Recherche + Zusammenfassung).

**Übung 3.3:** Baue einen täglichen "News-Briefing"-Workflow, der Nachrichten zu deinem Thema sammelt und zusammenfasst.

---

## Modul 4: Python-Grundlagen für Agenten

### Lernziele
- Python lesen und verstehen können (nicht unbedingt selbst schreiben)
- Einfache KI-Skripte mit KI-Unterstützung erstellen
- APIs verstehen und nutzen

### Skript

#### 4.1 Python? Aber ich bin kein Entwickler!

Gute Nachricht: Du musst kein Python können. KI schreibt den Code — du verstehst, was er tut, und testest ihn.

**Die 5 Konzepte, die du verstehen musst:**
1. **Variable** — Ein Behälter für Daten (Name = "Max")
2. **Funktion** — Ein wiederverwendbarer Code-Block
3. **Bedingung** — Wenn-dann-Logik (if/else)
4. **Schleife** — Wiederholung (for/while)
5. **API** — Wie Programme miteinander reden

#### 4.2 Der erste KI-Skript-Prompt

```
Schreibe ein Python-Skript, das:
1. Eine CSV-Datei mit Kundendaten einliest
2. Jede Kundenbeschreibung mit der OpenAI-API analysiert
3. Kunden in Kategorien einteilt
4. Eine neue CSV mit den Kategorien ausgibt

Füge ausführliche Kommentare hinzu, damit ich verstehe, was passiert.
Nutze Umgebungsvariablen für API-Keys.
```

#### 4.3 Eigene Agenten-Skripte

Mit KI-Unterstützung erstellst du in Minuten eigene Agenten:

**Ein einfacher Recherche-Agent:**
```python
import requests
from openai import OpenAI

client = OpenAI(api_key="dein-key")

def recherchiere(thema):
    # Google-Suche simulieren (vereinfacht)
    print(f"Recherchiere zu: {thema}")
    
    # KI zur Analyse
    response = client.chat.completions.create(
        model="gpt-4",
        messages=[{
            "role": "user",
            "content": f"Gib mir eine strukturierte Zusammenfassung zu: {thema}"
        }]
    )
    return response.choices[0].message.content

ergebnis = recherchiere("KI-Trends 2026")
print(ergebnis)
```

### Übungen

**Übung 4.1:** Lass die KI ein Skript schreiben, das aus einer Textdatei alle E-Mail-Adressen extrahiert. Führe es aus.

**Übung 4.2:** Erstelle mit KI-Unterstützung ein Skript, das automatisch Social-Media-Posts generiert und in einer Datei speichert.

**Übung 4.3:** Baue einen einfachen Chatbot, der auf Produkt-FAQs antwortet.

---

## Modul 5: Abschlussprojekt — Autonomer Business-Agent

### Lernziele
- Kompletten Agenten-Workflow konzipieren und bauen
- Multi-Agent-System verstehen
- Deployment und Monitoring

### Projekt: Baue einen Business-Agenten

**Aufgabe:** Entwickle einen KI-Agenten, der einen vollständigen Geschäftsprozess autonom ausführt.

**Mögliche Projekte:**
1. **Kunden-Support-Agent:** Liest E-Mails, kategorisiert, beantwortet Standardfragen, eskaliert komplexe Fälle
2. **Content-Factory-Agent:** Recherchiert, schreibt, optimiert und plant Content
3. **Research-Agent:** Beobachtet Markt, sammelt News, erstellt tägliches Briefing

**Schritte:**
1. Prozessanalyse — Welche Schritte macht der Mensch heute?
2. Agenten-Design — Welche Agenten brauchst du?
3. Technologie-Wahl — AutoGPT, n8n, eigenes Skript?
4. Prototyp — Baue in 1 Tag eine erste Version
5. Test-Woche — Mensch prüft alle KI-Ausgaben
6. Optimierung — Fehlerquote senken, Geschwindigkeit erhöhen

### Übungen zum Abschluss

**Übung 5.1:** Dokumentiere deinen Agenten-Workflow als Diagramm.

**Übung 5.2:** Erstelle ein Monitoring-System: Wie stellst du sicher, dass der Agent richtig arbeitet?

**Übung 5.3:** Schreibe eine 1-seitige Anleitung, damit jemand anderes deinen Agenten nutzen kann.

---

## Anhang: Prompt-Vorlagen für Agenten

### Agenten-Rollen-Prompts

**Recherche-Agent:**
```
Du bist ein wissenschaftlicher Recherche-Assistent.
- Suche nach aktuellen, verlässlichen Quellen
- Fasse jeden Punkt in 2-3 Sätzen zusammen
- Zitiere immer die Quelle
- Markiere Unsicherheiten
```

**Analyse-Agent:**
```
Du bist ein Business-Analyst.
- Strukturiere Daten nach Relevanz
- Erstelle klare Handlungsempfehlungen
- Nutze Tabellen für Vergleiche
- Vermeide Fachjargon
```

**Korrektur-Agent:**
```
Du bist ein Lektor.
- Prüfe Rechtschreibung und Grammatik
- Verbessere Satzstruktur
- Achte auf konsistenten Tonfall
- Markiere unklare Formulierungen
```
