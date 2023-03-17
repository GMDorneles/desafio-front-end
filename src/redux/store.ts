import { configureStore } from "@reduxjs/toolkit";

import funcionariosSlice from "./funcionariosSlice";

const store = configureStore({
  reducer: funcionariosSlice,
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
