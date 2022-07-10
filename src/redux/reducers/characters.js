import { createSlice } from "@reduxjs/toolkit";
import { fetchCharacters, fetchQuoteRandom, initialState } from './../reducer';

export const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    extraReducers(builder) {
        builder
            // Characters
            .addCase(fetchCharacters.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchCharacters.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.characters = state.characters.concat(action.payload)
            })
            .addCase(fetchCharacters.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            // Quote
            .addCase(fetchQuoteRandom.fulfilled, (state, action) => {
                state.quoteLoaded = true;
                state.quote = action.payload;
            })
    }
});