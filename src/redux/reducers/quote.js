import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { initialState } from './../reducer';
import axios from 'axios';

const RANDOM_QUOTE_URL = 'https://www.breakingbadapi.com/api/quotes/';

export const fetchQuoteRandom = createAsyncThunk('quotes/randomQuote', async () => {
    const response = await axios.get(RANDOM_QUOTE_URL);
    return response.data;
});

export const quoteSlice = createSlice({
    name: 'quote',
    initialState,
    extraReducers(builder) {
        builder
            .addCase(fetchQuoteRandom.fulfilled, (state, action) => {
                state.quoteLoaded = true;
                state.quote = action.payload;
            });
    }
});

//QUOTES
export const getQuoteLoaded = (state) => state.quote.quoteLoaded;
export const getQuote = (state) => state.quote.quote;
