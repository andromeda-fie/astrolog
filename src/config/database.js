import postgres from "@supabase/postgrest-js";
import env from "./env.js";

export const db = new postgres.PostgrestClient(env.DATABASE_URL)
