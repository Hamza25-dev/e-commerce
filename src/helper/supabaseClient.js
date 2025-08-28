import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://avvpiylexgyfroyjvgsh.supabase.co'
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF2dnBpeWxleGd5ZnJveWp2Z3NoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYyOTMzNjQsImV4cCI6MjA3MTg2OTM2NH0.I3bQJ8nAmAshvCz20KnbBEgqdEk6z2osCOGag_3vxYo"

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;