export interface Profile {
  id: string
  email: string
  full_name: string
  avatar_url: string | null
  created_at: string
}

export interface Product {
  id: string
  title: string
  slug: string
  description: string
  price_cents: number
  currency: string
  file_type: 'course' | 'template' | 'ebook' | 'spreadsheet' | 'other'
  file_url: string | null
  preview_url: string | null
  image_url: string | null
  featured: boolean
  published: boolean
  created_at: string
}

export interface Order {
  id: string
  user_id: string
  product_id: string
  stripe_session_id: string | null
  amount_cents: number
  currency: string
  status: 'pending' | 'completed' | 'refunded'
  created_at: string
  product?: Product
}

export interface CourseContent {
  id: string
  product_id: string
  title: string
  description: string | null
  video_url: string | null
  content: string | null
  sort_order: number
  created_at: string
}
