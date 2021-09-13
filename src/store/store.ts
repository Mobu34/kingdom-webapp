import { configureStore, combineReducers } from "@reduxjs/toolkit";

import itemSlice from "./reducers/item.reducer";

const combinedReducers = combineReducers({
  itemSlice,
});

export const store = configureStore({
  reducer: combinedReducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
