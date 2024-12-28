'use server';

import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function createServerSupabaseClient() {
  const cookieStore = cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => {
          return cookieStore.getAll().map(({ name, value }) => ({ name, value }))
        },
        setAll: (cookies) => {
          for (const cookie of cookies) {
            cookieStore.set(cookie.name, cookie.value, cookie.options)
          }
        }
      }
    }
  )
}