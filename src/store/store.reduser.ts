import {createSlice} from '@reduxjs/toolkit';
import {fetchCats} from './store.acions';
import {CatsState, LoadingState} from "./store.type";
import {CATS} from "./store.const";

const initialState: CatsState = {
    cats: [],
    favorites: [],
    status: LoadingState.IDLE,
    error: null,
    page: 0,
};

export const catsSlice = createSlice<CatsState, {}>({
    name: CATS,
    initialState,
        reducers: {
            toggleFavorite(state, action) {
                const catId = action.payload;
                if (state.favorites.includes(catId)) {
                    state.favorites = state.favorites.filter((id) => id !== catId);
                    localStorage.setItem("favorites", JSON.stringify(state.favorites));
                } else {
                    state.favorites.push(catId);
                    localStorage.setItem("favorites", JSON.stringify(state.favorites));
                }
            },
            loadFavorites(state) {
                const savedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
                state.favorites = savedFavorites;
            },
        },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCats.pending, (state) => {
                if (state.status === LoadingState.IDLE) {
                    state.status = LoadingState.LOADING;
                }
            })
            .addCase(fetchCats.fulfilled, (state, action) => {
                state.status = LoadingState.FULFILLED;
                state.cats = action.payload.length > 0 ?[...state.cats, ...action.payload] : state.cats;
            })
            .addCase(fetchCats.rejected, (state, action) => {
                state.status = LoadingState.REJECTED;
                state.error = action.payload || "Произошла ошибка";
            });
    },
});
export const { toggleFavorite, loadFavorites } = catsSlice.actions;
export default catsSlice.reducer;
