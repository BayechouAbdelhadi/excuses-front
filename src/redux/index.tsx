import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import RootReducer from "./reducers";

const store = configureStore({
    reducer: RootReducer,
    devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>(); // Export a hook that can be reused to resolve types
export default store;