'use server';

import { createServerSupabaseClient } from '@/utils/supabaseServer';

export async function registerWithEmailAndPasword({
  email,
}: {
  email: string;
}) {
  const supabase = await createServerSupabaseClient();

  const response = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/auth/callback`,
    },
  });

  return JSON.stringify(response);
}