import { supabase } from "@/supabase/config";
import { toast } from "react-toastify";

export const createDataBaseSlice = (set) => ({
  publicComponents: [],
  fetchPublicComponents: async () => {
    const { data, error } = await supabase
      .from("components")
      .select()
      .eq("visibility", "public");
    set({ publicComponents: data });
    if (error !== null) {
      toast.error("Unable to get components. refresh the page");
    }
  },
});
