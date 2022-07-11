import { configureStore } from "@reduxjs/toolkit";
import { episodesSlice } from './reducers/episodes.js';
import { charactersSlice } from './reducers/characters';
import { quoteSlice } from "./reducers/quote.js";
import { deathsSlice } from './reducers/deaths';

export const store = configureStore({
    reducer: {
        characters: charactersSlice.reducer,
        episodes: episodesSlice.reducer,
        quote: quoteSlice.reducer,
        deaths: deathsSlice.reducer
    }
})