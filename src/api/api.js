import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
    "https://hmvxqhhwypmptmyuaffk.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhtdnhxaGh3eXBtcHRteXVhZmZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc4ODAwNzEsImV4cCI6MTk5MzQ1NjA3MX0.YDX59a4JHowwcjWUVMWww_9QF6jibAc7Q2kai_wzbQ4"
)