import { create } from "zustand";
import { createHomeSlice } from "./home.slice";
import { createDataBaseSlice } from "./database.slice";

export const useAppStore = create((...a) => ({
  ...createHomeSlice(...a),
  ...createDataBaseSlice(...a),
}));
