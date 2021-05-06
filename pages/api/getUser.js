import { supabase } from "lib/initSupabase";

export default (req, res) => {
  supabase.auth.refreshSession();
  const data = supabase.auth.user();
  console.log(data);
  res.status(200).json({ data });
}
