import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./features";
import { setupListeners } from "@reduxjs/toolkit/query";
import { booksApi } from "./api";

const store = configureStore({
  reducer: {
    rootReducer,
    [booksApi.reducerPath]: booksApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware),
});

export default store;
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
