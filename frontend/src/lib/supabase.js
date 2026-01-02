import { createClient } from '@supabase/supabase-js'

// Default Supabase URL based on environment
// For development: Uses Kong gateway directly (localhost:8000)
// For production: Uses the configured VITE_SUPABASE_URL
const getSupabaseUrl = () => {
  const configuredUrl = import.meta.env.VITE_SUPABASE_URL
  
  // Require VITE_SUPABASE_URL to be explicitly set
  if (!configuredUrl) {
    throw new Error('VITE_SUPABASE_URL environment variable is required')
  }
  
  return configuredUrl
}

const supabaseUrl = getSupabaseUrl()
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  },
  global: {
    headers: {
      'X-Client-Info': 'mappalette-frontend'
    }
  }
})
