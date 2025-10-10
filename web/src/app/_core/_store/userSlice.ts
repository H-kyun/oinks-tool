import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type UserState = {
  open: boolean 
};
const initialState: UserState = { 
  open: true 
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setSidebar: (state, action: PayloadAction<boolean>) => {
      state.open = action.payload;
    },
    toggleSidebar: (state) => {
      state.open = !state.open;
    },
  },
});

export const { setSidebar, toggleSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;

