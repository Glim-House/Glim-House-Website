import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://emocwgzsunxutsrfzkxy.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVtb2N3Z3pzdW54dXRzcmZ6a3h5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODczNjc2OTIsImV4cCI6MjAwMjk0MzY5Mn0.t1J0Y9rc6D7rKfNjyXimLXDWF5o0g8XnTT2WgO1TjOA"
);
