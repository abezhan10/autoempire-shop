-- Seed course_content for AI-Education courses
-- Each course gets lesson entries based on the markdown content files

DO $$
DECLARE
  v_product_id UUID;
BEGIN

  ---------------------------------------------------------------------------
  -- KI-Produktivität Masterclass (slug: ki-produktivitaet-masterclass)
  ---------------------------------------------------------------------------
  SELECT id INTO v_product_id FROM products WHERE slug = 'ki-produktivitaet-masterclass';

  INSERT INTO course_content (product_id, title, description, content, sort_order) VALUES
  (v_product_id, 'KI-Grundlagen — Was KI kann und wie du sie nutzt',
   'Verstehen, was KI ist und was nicht. Die wichtigsten KI-Tools kennenlernen. Ersten eigenen Prompt schreiben.',
   E'## 1.1 Willkommen in der KI-Welt\n\nKI klingt kompliziert. Ist es aber nicht. Stell dir KI vor wie einen sehr fleißigen Praktikanten: Er braucht klare Anweisungen, lernt schnell und macht keine Pause.\n\n**Was KI kann:**\n- Texte schreiben, zusammenfassen, übersetzen\n- Bilder generieren und bearbeiten\n- Daten analysieren und Muster erkennen\n\n**Was KI nicht kann:**\n- Deine Entscheidungen treffen\n- Garantiert korrekte Fakten liefern\n\n## Übungen\n1. Schreibe einen Prompt, der die KI bittet, deine täglichen Aufgaben zu analysieren.\n2. Teste denselben Prompt bei ChatGPT und Claude.\n3. Erstelle einen Prompt für ein 30-Sekunden-Video-Script.',
   1),
  (v_product_id, 'Content Creation mit KI — Texte, die verkaufen',
   'Content-Strategie mit KI entwickeln. Blogartikel, Social-Media-Posts und Newsletter schreiben.',
   E'## 2.1 Die Content-Maschine\n\nKI verändert Content-Erstellung fundamental. Statt Stunden an einem Blogartikel zu sitzen, erstellst du in 30 Minuten einen kompletten Content-Plan.\n\n**Der ideale Workflow:**\n1. Themen-Recherche\n2. Outline erstellen lassen\n3. Abschnitte einzeln generieren\n4. Persönlichen Input hinzufügen\n5. Mit KI Korrektur lesen und optimieren\n\n## Übungen\n1. Erstelle mit KI eine Content-Outline für eine Woche.\n2. Schreibe einen 500-Wörter-Blogartikel.\n3. Lass die KI 3 Newsletter-Betreff-Varianten schreiben.',
   2),
  (v_product_id, 'Automatisierung — Wiederkehrende Tasks eliminieren',
   'Wiederkehrende Aufgaben identifizieren. Einfache Automatisierungen mit KI bauen. Make.com/n8n Grundlagen.',
   E'## 3.1 Was lohnt sich zu automatisieren?\n\nDie 80/20-Regel: 80% deiner Zeit verbringst du mit 20% deiner Aufgaben.\n\n**Automatisierungs-Checkliste:**\n- Täglich wiederkehrend?\n- Klare Regeln definierbar?\n- Keine menschliche Kreativität nötig?\n\n## Übungen\n1. Liste 10 Aufgaben auf, automatisiert werden könnten.\n2. Zeichne einen Automatisierungs-Workflow.\n3. Baue einen einfachen Make.com-Workflow.',
   3),
  (v_product_id, 'Daten & Analytics — Clever auswerten ohne Excel-Chaos',
   'Daten mit KI analysieren und visualisieren. Berichte automatisiert erstellen.',
   E'## 4.1 Daten verstehen\n\nDu brauchst kein Data-Science-Studium. Mit KI analysierst du deine Daten in Minuten.\n\n**Die 3 häufigsten Daten-Fragen:**\n1. Was ist passiert?\n2. Warum ist es passiert?\n3. Was wird passieren?\n\n## Übungen\n1. Exportiere einen Monat deiner Umsatzdaten und lass die KI 3 Erkenntnisse ziehen.\n2. Erstelle einen Prompt für eine 1-seitige Zusammenfassung.\n3. Baue einen täglichen KPI-Bericht.',
   4),
  (v_product_id, 'Decision Making — KI-gestützte Entscheidungen',
   'KI für Recherche und Entscheidungsfindung nutzen. Pro/Contra-Analysen mit KI.',
   E'## 5.1 Bessere Entscheidungen, weniger Bauchgefühl\n\nKI hilft dir, Entscheidungen systematisch zu treffen.\n\n**Der Entscheidungs-Prompt:**\n- Bewerte Optionen nach Kosten, Zeit, Risiko, Potenzial\n- Gib eine klare Empfehlung mit Begründung\n\n## Übungen\n1. Wende den Entscheidungs-Prompt auf eine aktuelle Entscheidung an.\n2. Lass die KI eine Wettbewerbsanalyse erstellen.\n3. Erstelle einen Prompt für eine monatliche Geschäfts-Review.',
   5),
  (v_product_id, 'Abschlussprojekt — Dein persönlicher AI-Workflow',
   'Alles Gelernte in einem Projekt zusammenführen. Nachhaltige KI-Nutzung im Alltag verankern.',
   E'## Projekt: Baue deinen persönlichen AI-Assistenten\n\n**Aufgabe:** Entwickle einen KI-Workflow, der einen Bereich deines Arbeitsalltags automatisiert.\n\n**Schritte:**\n1. Analyse — Welche Aufgabe kostet dich am meisten Zeit?\n2. Design — Zeichne den Workflow\n3. Build — Setze ihn mit den gelernten Tools um\n4. Test — 1 Woche testen, anpassen, optimieren',
   6);

  ---------------------------------------------------------------------------
  -- AutoGPT & Agenten-Workflows (slug: autogpt-agenten-workflows)
  ---------------------------------------------------------------------------
  SELECT id INTO v_product_id FROM products WHERE slug = 'autogpt-agenten-workflows';

  INSERT INTO course_content (product_id, title, description, content, sort_order) VALUES
  (v_product_id, 'Was sind KI-Agenten?',
   'Konzept autonomer KI-Agenten verstehen. Unterschied zwischen Chat und Agenten.',
   E'## 1.1 Vom Chat zum Agenten\n\nEin KI-Agent ist wie ein ChatGPT, der selbstständig handeln kann.\n\n**Chat vs. Agent:**\n- Chat: Du fragst, KI antwortet\n- Agent: KI bekommt Ziel und handelt selbstständig\n\n## Übungen\n1. Beschreibe eine Aufgabe als Agenten-Konfiguration.\n2. Vergleiche: Warum ist ein Agent besser als ein Chat-Prompt?',
   1),
  (v_product_id, 'AutoGPT — Der bekannteste KI-Agent',
   'AutoGPT installieren und starten. Eigene Ziele setzen. Ergebnisse bewerten.',
   E'## 2.1 AutoGPT installieren\n\nAutoGPT ist ein Open-Source-Projekt.\n\n**Ziele setzen:**\n- Schlecht: "Mach Marketing für mein Business"\n- Gut: "Recherchiere Top-10 Keywords und erstelle eine SEO-Strategie"\n\n## Übungen\n1. Installiere AutoGPT und setze ein klares Ziel.\n2. Starte den Agenten und protokolliere seine Schritte.\n3. Optimiere dein Ziel basierend auf den Ergebnissen.',
   2),
  (v_product_id, 'n8n-Workflows mit KI-Agenten',
   'n8n-Grundlagen verstehen. KI-Knoten in Workflows integrieren.',
   E'## 3.1 n8n — Die Automatisierungs-Zentrale\n\nn8n verbindet Apps und Dienste. Mit KI-Knoten werden Workflows intelligent.\n\n**Multi-Agent-Workflows:** Baue mehrere KI-Knoten, die zusammenarbeiten.\n\n## Übungen\n1. Baue einen n8n-Workflow mit einem KI-Knoten.\n2. Erstelle einen Multi-Agent-Workflow mit 2 KI-Knoten.\n3. Baue einen täglichen News-Briefing-Workflow.',
   3),
  (v_product_id, 'Python-Grundlagen für Agenten',
   'Python lesen und verstehen. Einfache KI-Skripte mit KI-Unterstützung erstellen.',
   E'## 4.1 Python? Aber ich bin kein Entwickler!\n\nDu musst kein Python können. KI schreibt den Code.\n\n**Die 5 Konzepte:** Variable, Funktion, Bedingung, Schleife, API\n\n## Übungen\n1. Lass die KI ein Skript zum Extrahieren von E-Mail-Adressen schreiben.\n2. Erstelle ein Skript für Social-Media-Posts.\n3. Baue einen einfachen FAQ-Chatbot.',
   4),
  (v_product_id, 'Abschlussprojekt — Autonomer Business-Agent',
   'Kompletten Agenten-Workflow konzipieren und bauen.',
   E'## Projekt: Baue einen Business-Agenten\n\n**Mögliche Projekte:**\n1. Kunden-Support-Agent\n2. Content-Factory-Agent\n3. Research-Agent\n\n**Schritte:** Prozessanalyse → Design → Technologie-Wahl → Prototyp → Test → Optimierung',
   5);

  ---------------------------------------------------------------------------
  -- No-Code MVP Baukasten (slug: no-code-mvp-baukasten)
  ---------------------------------------------------------------------------
  SELECT id INTO v_product_id FROM products WHERE slug = 'no-code-mvp-baukasten';

  INSERT INTO course_content (product_id, title, description, content, sort_order) VALUES
  (v_product_id, 'Was ist ein MVP — und warum du keinen Code brauchst',
   'MVP-Konzept verstehen. No-Code-Stack kennenlernen. Erstes Produkt skizzieren.',
   E'## 1.1 Das MVP-Prinzip\n\nEin MVP ist die einfachste Version deines Produkts, die echten Mehrwert bietet.\n\n**Die MVP-Faustregel:** Baue nur das, was du brauchst, um die erste Bezahlung zu erhalten.\n\n## Übungen\n1. Fülle den Produkt-Canvas für eine digitale Produktidee aus.\n2. Recherchiere 3 No-Code-Tools für deine Idee.',
   1),
  (v_product_id, 'Bubble.io Grundlagen — Deine erste App',
   'Bubble.io-Konto einrichten. Erste Seite bauen. Datenbank modellieren.',
   E'## 2.1 Bubble.io einrichten\n\nBubble.io arbeitet visuell. Alles ist Drag & Drop.\n\n**Elemente:** Text, Input, Button, Repeating Group, Group\n\n## Übungen\n1. Erstelle einen Bubble.io-Account und baue eine Produktseite.\n2. Modelliere eine Product-Datenbank mit 5 Feldern.\n3. Verbinde den Button mit einem Workflow.',
   2),
  (v_product_id, 'Workflows & Logik — Deine App wird intelligent',
   'Workflows in Bubble verstehen. Bedingungen und Zustände nutzen.',
   E'## 3.1 Workflow-Grundlagen\n\nEin Workflow ist eine Kette von Aktionen, die durch ein Ereignis ausgelöst werden.\n\n## Übungen\n1. Baue einen Sign-Up-Workflow mit Validierung.\n2. Erstelle eine Bedingung für eingeloggte Benutzer.\n3. Baue einen Warenkorb-Workflow.',
   3),
  (v_product_id, 'Make.com — Alles verbinden',
   'Make.com-Grundlagen. Bubble + Make.com verbinden. Zahlungs-Workflows mit Stripe.',
   E'## 4.1 Make.com einrichten\n\nWebhook-Integration zwischen Bubble und Make.com.\n\n**Bestell-Workflow:**\nBubble → Webhook → Make.com → Stripe → Supabase → E-Mail → Slack\n\n## Übungen\n1. Verbinde Bubble mit Make.com via Webhook.\n2. Baue einen Stripe-Zahlungs-Workflow.\n3. Erstelle einen Workflow für E-Mail mit Download-Link.',
   4),
  (v_product_id, 'Deployment — Dein Produkt geht live',
   'Domain einrichten. Custom Domain + SSL. Launch-Checkliste.',
   E'## 5.1 Von lokal zu live\n\nBubble.io: Ein Klick — "Deploy to Production".\n\n**Launch-Checkliste:**\n- Landing Page funktioniert\n- Checkout-Prozess getestet\n- SSL aktiv\n- Mobile-Ansicht getestet\n\n## Übungen\n1. Gehe die Launch-Checkliste durch.\n2. Teste die mobile Ansicht.\n3. Erstelle eine 404-Seite.',
   5),
  (v_product_id, 'Wachstum — Nach dem Launch',
   'Feedback sammeln und priorisieren. Iterativ verbessern. Marketing-Automatisierung.',
   E'## 6.1 Feedback sammeln\n\nTools: Google Forms, Hotjar, Intercom, Feedback-Button\n\n**Priorisierungs-Matrix:** Hohe Wirkung/Niedrige Komplexität → SOFORT MACHEN\n\n## Übungen\n1. Baue einen Feedback-Button ein.\n2. Erstelle eine Priorisierungs-Matrix.',
   6),
  (v_product_id, 'Abschlussprojekt — Dein MVP in 7 Tagen',
   'Alle Fähigkeiten kombinieren. Vollständigen MVP bauen.',
   E'## 7-Tage-MVP-Challenge\n\nTag 1: Produkt-Canvas\nTag 2: Bubble.io-Seiten\nTag 3: Datenbank + Workflows\nTag 4: Make.com + Zahlung\nTag 5: Testen\nTag 6: Domain + Deployment\nTag 7: Launch\n\n## Übungen\n1. Dokumentiere deinen MVP als 1-Seiten-Business-Plan.\n2. Nenne 3 wichtigste Learnings.\n3. Plane die nächste Iteration.',
   7);

END $$;
