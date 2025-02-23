import { configureStore } from "@reduxjs/toolkit";
import { tasksApi } from "../features/tasks/tasksApi";
import tasksSlice from "../features/tasks/ tasksSlice";

const store = configureStore({
  reducer: {
    tasks: tasksSlice,
    [tasksApi.reducerPath]: tasksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tasksApi.middleware),
});

export default store;
