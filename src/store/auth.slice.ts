import { supabase } from "@/supabase/config";
import { toast } from "react-toastify";

export const createAuthSlice = (set) => ({
  user: {},
  signin: async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
    });
    set({ user: data });
    console.log({ data });
    if (error !== null) {
      toast.error("Unable to login. try again");
    }
  },
});
