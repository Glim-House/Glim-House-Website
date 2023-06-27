import { create } from "zustand";
import { createHomeSlice } from "./home.slice";

export const useAppStore = create((...a) => ({
  ...createHomeSlice(...a),
}));
