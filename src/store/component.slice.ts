export const createComponentSlice = (set, get) => ({
  showSidebar: false,
  toggleSideBar: async (value: boolean) => {
    set({ showSidebar: value });
  },
});
