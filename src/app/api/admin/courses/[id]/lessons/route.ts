import { NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/admin'

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const supabase = createAdminClient()

  const { data: product } = await supabase
    .from('products')
    .select('*')
    .eq('id', id)
    .single()

  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 })
  }

  const { data: lessons } = await supabase
    .from('course_content')
    .select('*')
    .eq('product_id', id)
    .order('sort_order', { ascending: true })

  return NextResponse.json({ product, lessons: lessons ?? [] })
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const body = await request.json()
  const { lessonId, title, description, content, sort_order } = body

  const supabase = createAdminClient()

  if (lessonId) {
    const { error } = await supabase
      .from('course_content')
      .update({ title, description, content, product_id: id })
      .eq('id', lessonId)

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  }

  const { data, error } = await supabase
    .from('course_content')
    .insert({
      product_id: id,
      title,
      description,
      content,
      sort_order: sort_order ?? 0,
    })
    .select()
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true, lesson: data })
}
