import { createClient } from '@supabase/supabase-js'

// Both values come from .env.local (see .env.example). The publishable key
// is safe to ship to the browser: row level security on the products table
// only allows reading.
export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
)
