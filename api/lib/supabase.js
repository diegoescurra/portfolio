import { createClient } from "@supabase/supabase-js";

let supabase;

export function getSupabaseServerClient() {
  if (supabase) return supabase;

  // The service-role key is valid only in serverless functions. Never import this module from src/.
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SECRET_KEY;

  if (!process.env.SUPABASE_URL || !serviceRoleKey) {
    throw new Error("Supabase server credentials are not configured.");
  }

  supabase = createClient(process.env.SUPABASE_URL, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  return supabase;
}
