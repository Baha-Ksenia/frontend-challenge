import { createAsyncThunk } from '@reduxjs/toolkit';
import {Cat} from "./store.type";
import {GET_CATS} from "./store.const";

export const fetchCats = createAsyncThunk<
    Cat[],
    { limit: number; page: number },
    { rejectValue: string }
>(
    GET_CATS,
    async ({ limit, page }, { rejectWithValue }) => {
        const url = `https://api.thecatapi.com/v1/images/search?limit=${limit}&page=${page}`;
        const apiKey = 'live_wcRZMciU4T53ruF5R5JOS5cmAl6VwmFdVi3nK8eAKkGfUnz11Y0vOod2pwHJqhkq';

        try {
            const response = await fetch(url, {
                headers: { 'x-api-key': apiKey },
            });

            if (!response.ok) {
                throw new Error(`Ошибка: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            return rejectWithValue('Не удалось загрузить котиков');
        }
    }
);
