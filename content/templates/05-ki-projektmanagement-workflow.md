# KI Projektmanagement Workflow

## Übersicht

Nutze KI, um Projekte schneller zu planen, zu steuern und abzuschließen. Dieser Workflow führt dich von der Idee bis zum Projektabschluss.

---

## Phase 1: Projekt-Setup mit KI (30 Minuten)

### 1.1 Projekt-Canvas mit KI erstellen

**Prompt:**
```
Erstelle einen Projekt-Canvas für:

Projektname: [NAME]
Kurzbeschreibung: [BESCHREIBUNG]
Ziel: [WAS SOLL ERREICHT WERDEN?]
Deadline: [DATUM]
Budget: [BUDGET]
Team: [ANZAHL + ROLLEN]

Gib mir:
1. Projekt-Ziele (max 3, SMART-formuliert)
2. Stakeholder (mit Erwartungen)
3. Risiken (Top-5 mit Wahrscheinlichkeit)
4. Meilensteine (mit Datum)
5. Erfolgskriterien (muss erfüllt sein)
```

### 1.2 Projektstrukturplan (PSP)

**Prompt:**
```
Erstelle einen Projektstrukturplan für [PROJEKTNAME].

Arbeitspakete nach Phasen:
1. Planung
2. Umsetzung
3. Test
4. Launch

Pro Arbeitspaket:
- Name
- Geschätzter Aufwand (Stunden)
- Abhängigkeiten
- Verantwortlich

Gesamtaufwand: [ANZAHL] Stunden
Deadline: [DATUM]
```

---

## Phase 2: Projektplanung (45 Minuten)

### 2.1 Detaillierter Projektplan

**Prompt:**
```
Erstelle einen detaillierten Projektplan:

Projekt: [NAME]
Start: [DATUM]
Ende: [DATUM]
Team: [ROLLEN]

Erstelle einen Wochenplan mit:
- KW [NUMMER]: Meilenstein + 3 Aufgaben
- Verantwortlichkeiten
- Abhängigkeiten zwischen Aufgaben
- Kritischer Pfad (was muss pünktlich fertig sein?)

Nutze dieses Format:
| Woche | Aufgaben | Verantwortlich | Abhängig von | Status |
|-------|----------|---------------|--------------|--------|
```

### 2.2 Kommunikationsplan

**Prompt:**
```
Erstelle einen Kommunikationsplan für [PROJEKTNAME]:

Beteiligte: [TEAM-GRÖSSE]
Projektdauer: [DAUER]

Definiere:
1. Weekly-Status-Meeting (Agenda, Dauer, Teilnehmer)
2. Slack/Teams-Channel-Struktur
3. Entscheidungs-Eskalationspfad
4. Dokumenten-Ablage
5. Berichts-Rhythmus (wer bekommt wann welche Info?)

Jeweils mit KI-Unterstützungspotenzial.
```

---

## Phase 3: Projekt-Durchführung (Laufend)

### 3.1 Tägliches Standup mit KI

**Prompt:**
```
Erstelle ein Standup-Update basierend auf:

Gestern erledigt: [LISTE]
Heute geplant: [LISTE]
Blockierer: [LISTE]

Optimiere für:
- Max 3 Minuten Lesezeit
- Fokus auf Blockierer und Entscheidungen
- Nenne konkrete Hilfe, die du brauchst

Format:
✅ Erledigt: [TOP 3]
🎯 Heute: [TOP 3]
🚧 Blockiert: [LISTE + WER HILFT?]
```

### 3.2 Weekly-Reporting

**Prompt:**
```
Erstelle ein Weekly-Reporting:

Projekt: [NAME]
Woche: [KW]
Team-Updates: [EINGABEN]

Format:
📊 Status: [GRÜN/GELB/ROT]
✅ Abgeschlossen diese Woche: [LISTE]
🔄 In Arbeit: [LISTE]
⚠️ Risiken/Probleme: [LISTE + GEGENMASSNAHME]
📅 Nächste Woche: [TOP 3 PRIORITÄTEN]
```

### 3.3 Meeting-Agenda-Generator

**Prompt:**
```
Erstelle eine Agenda für ein [MINUTEN]-Meeting.

Typ: [WEEKLY / RETRO / PLANUNG / REVIEW]
Teilnehmer: [ROLLEN]
Letztes Meeting: [NOTIZEN]
Offene Punkte: [LISTE]

Die Agenda:
1. Check-in (2 Min) — Jeder: 1 Wort zum Befinden
2. Updates (10 Min) — Nur was relevant für andere ist
3. Entscheidungen (15 Min) — Konkrete Beschlüsse
4. Offene Punkte (5 Min) — Wer macht was bis wann?
5. Check-out (3 Min) — Nächste Schritte bestätigen

Pro Punkt: Zeitlimit und Verantwortlichen nennen.
```

---

## Phase 4: Projektabschluss (1 Stunde)

### 4.1 Projekt-Retrospective

**Prompt:**
```
Führe eine Projekt-Retrospective durch:

Projekt: [NAME]
Dauer: [START - ENDE]
Team: [TEAM]
Ergebnis: [WURDE DAS ZIEL ERREICHT?]

Analysiere:
1. Was lief gut? (Top 5)
2. Was lief schlecht? (Top 5)
3. Was würden wir anders machen? (Top 3)
4. Unexpected Learnings
5. Offene Punkte (muss nach Projekt noch geklärt werden)

Für jeden Punkt: Konkretes Beispiel nennen.
```

### 4.2 Projekt-Dokumentation mit KI

**Prompt:**
```
Erstelle eine 1-seitige Projektdokumentation:

Projekt: [NAME]
Ziel: [ZIEL]
Ergebnis: [ERGEBNIS]

Automatisch generieren aus folgenden Daten:
- Meilensteine: [MEILENSTEINE]
- Entscheidungen: [ENTSCHEIDUNGEN]
- Lessons Learned: [LESSONS]

Dokumentation:
1. Executive Summary (3 Sätze)
2. Was wurde erreicht? (Bullet Points)
3. Technische Entscheidungen (mit Begründung)
4. Offene Punkte / Next Steps
5. Ansprechpartner
```

### 4.3 Abschlussbericht

**Prompt:**
```
Erstelle einen Projekt-Abschlussbericht:

Projekt: [NAME]
Geplante Dauer: [DAUER]
Tatsächliche Dauer: [DAUER]
Budget: [BUDGET]
Tatsächliche Kosten: [KOSTEN]

Kennzahlen:
- Zielerreichung: [%]
- Termintreue: [%]
- Budgettreue: [%]
- Team-Zufriedenheit: [1-10]

Bericht:
1. Zusammenfassung (Executive Summary)
2. Soll/Ist-Vergleich (Termine, Kosten, Qualität)
3. Risiko-Evaluation (was ist eingetreten?)
4. Lessons Learned
5. Empfehlungen für Folgeprojekte
6. Anhang: Wichtige Dokumente
```

---

## Template: Projekt-Status-Tabelle

| KW | Status | Letzter Meilenstein | Nächster Meilenstein | Risiken | Entscheidungen |
|----|--------|---------------------|---------------------|---------|----------------|
| | 🟢/🟡/🔴 | | | | |

---

## Template: Entscheidungs-Log

| Datum | Entscheidung | Optionen | Begründung | Verantwortlich | Status |
|-------|-------------|----------|------------|----------------|--------|
| | | A / B / C | | | Offen/Entschieden |

---

## Template: Risiko-Matrix

| Risiko | Eintritts-WSK | Auswirkung | Risikowert | Gegenmaßnahme | Owner |
|--------|---------------|------------|------------|---------------|-------|
| | 1-5 | 1-5 | WS x A | | |

---

## KI-Prompt: Risikoanalyse für Projekte

```
Führe eine Risikoanalyse durch für:

Projekt: [NAME]
Branche: [BRANCHE]
Teamgröße: [ANZAHL]
Budget: [BUDGET]
Deadline: [DATUM]

Identifiziere:
1. Top-10-Risiken (mit Eintrittswahrscheinlichkeit 1-5)
2. Top-5-Chancen (mit Eintrittswahrscheinlichkeit 1-5)
3. 3 "Unknown Unknowns" (was könnte uns überraschen?)
4. Critical Path-Risiken (was gefährdet den Projektplan?)

Pro Risiko/Chance: Konkrete Gegenmaßnahme oder Nutzungsstrategie.
```
