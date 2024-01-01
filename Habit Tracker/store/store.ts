import { configureStore } from "@reduxjs/toolkit";

import habitsSlice from "./features/habits";

const store = configureStore({
  reducer: {
    habits: habitsSlice
  },
});

export default store;
