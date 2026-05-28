import { NextResponse } from 'next/server'
import { generateContent } from '@/lib/openrouter'
import { createAdminClient } from '@/lib/supabase/admin'

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const body = await request.json()
  const { type, title, existingContent } = body

  const supabase = createAdminClient()
  const { data: product } = await supabase
    .from('products')
    .select('title, description')
    .eq('id', id)
    .single()

  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 })
  }

  let prompt: string

  if (type === 'description') {
    prompt = `Du schreibst Kursbeschreibungen für die AutoEmpire-Plattform (KI-Education).

Kurs: ${product.title}
Aktuelle Beschreibung: ${existingContent || '(keine)'}

${title ? `Fokus: ${title}` : ''}

Schreibe eine überzeugende, präzise Kursbeschreibung auf Deutsch (max. 200 Wörter).`
  } else if (type === 'lesson') {
    prompt = `Du erstellst Lektionsinhalte für den Kurs "${product.title}" auf der AutoEmpire-Plattform (KI-Education).

Lektionstitel: ${title || 'Lektion'}
${existingContent ? `Bestehender Inhalt zum Erweitern: ${existingContent}` : ''}

Schreibe hochwertigen Lerninhalt auf Deutsch (300-500 Wörter):
1. Ein kurzer Einstieg / Lernziel
2. Der Hauptinhalt mit klaren Erklärungen
3. Eine Zusammenfassung

Formatiere den Text mit Absätzen, Überschriften und Bullet Points wo sinnvoll.`
  } else {
    return NextResponse.json({ error: 'Invalid type' }, { status: 400 })
  }

  try {
    const generated = await generateContent(prompt)
    return NextResponse.json({ content: generated })
  } catch (error) {
    console.error('AI generation error:', error)
    return NextResponse.json(
      { error: 'AI content generation failed' },
      { status: 500 }
    )
  }
}
