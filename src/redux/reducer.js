import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const ALL_CHARACTERS_URL = 'https://www.breakingbadapi.com/api/characters/';
const ALL_EPISODES_URL = 'https://www.breakingbadapi.com/api/episodes?series=Breaking Bad';
const RANDOM_QUOTE_URL = 'https://www.breakingbadapi.com/api/quote/random/';

export const initialState = {
    characters: [],
    quote: '',
    quoteLoaded: false,
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
    episodes: {
        allEpisodes: [],
        bySeason: [],
        status: 'idle',
        error: null
    },
}

export const fetchCharacters = createAsyncThunk('characters/allCharacters', async () => {
    const response = await axios.get(ALL_CHARACTERS_URL)
    return response.data
});

export const fetchQuoteRandom = createAsyncThunk('quotes/randomQuote', async () => {
    const response = await axios.get(RANDOM_QUOTE_URL);
    return response.data;
});

export const fetchEpisodes = createAsyncThunk('episodes/allEpisodes', async () => {
    const response = await axios.get(ALL_EPISODES_URL);
    return response.data
});

export const fetchCharacterById = createAsyncThunk('characters/allCharacters', async (id) => {
    const response = await axios.get(`${ALL_CHARACTERS_URL}${id}`)
    return response.data
});

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

//CHARACACTERS
export const selectAllCharacters = (state) => state.characters.characters;
export const getCharactersStatus = (state) => state.characters.status;
export const getCharactersError = (state) => state.characters.error;
//EPISODES

export const allEpisodes = (state) => state.episodes.episodes.allEpisodes;
export const getEpisodesStatus = (state) => state.episodes.episodes.status;
export const getEpisodesError = (state) => state.episodes.episodes.error;
export const allEpisodesBySeason = (state) => state.episodes.episodes.bySeason;

//QUOTES
export const getQuoteLoaded = (state) => state.characters.quoteLoaded;
export const getQuote = (state) => state.characters.quote;

