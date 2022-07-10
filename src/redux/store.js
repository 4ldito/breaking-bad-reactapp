import { configureStore } from "@reduxjs/toolkit";
import { episodesSlice } from './reducers/episodes.js';
import { charactersSlice } from './reducers/characters';

export const store = configureStore({
    reducer: {
        characters: charactersSlice.reducer,
        episodes: episodesSlice.reducer
    }
})