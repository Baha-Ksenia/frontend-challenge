
import { configureStore } from '@reduxjs/toolkit';
import catsReducer from './store.reduser';
import {useDispatch} from "react-redux";

const store = configureStore({
    reducer: {
        cats: catsReducer,
    },
});
export type AppDispatch = typeof store.dispatch;
export default store;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;

