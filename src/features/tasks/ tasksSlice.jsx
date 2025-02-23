import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "all",
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = tasksSlice.actions;
export default tasksSlice.reducer;
