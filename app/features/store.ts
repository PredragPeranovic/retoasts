import { configureStore } from "@reduxjs/toolkit";
import toastsReducer from "./toasts/toastsSlice";

export const store = configureStore({
    reducer: {
        toasts: toastsReducer
    },
    devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
