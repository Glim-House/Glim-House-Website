import { create } from "zustand";
import { createHomeSlice } from "./home.slice";
import { createDataBaseSlice } from "./database.slice";
import { createAuthSlice } from "./auth.slice";
import { createComponentSlice } from "./component.slice";

export const useAppStore = create((...a) => ({
  ...createHomeSlice(...a),
  ...createDataBaseSlice(...a),
  ...createAuthSlice(...a),
  ...createComponentSlice(...a),
}));
