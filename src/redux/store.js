import { configureStore } from "@reduxjs/toolkit";
import {charactersSlice} from "./reducer";
import { episodesSlice } from './reducers/episodes.js';

export const store = configureStore({
    reducer: {
        characters: charactersSlice.reducer,
        episodes: episodesSlice.reducer
    }
})