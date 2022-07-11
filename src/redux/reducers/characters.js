import { createSlice } from "@reduxjs/toolkit";
import { initialState } from './../reducer';
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const ALL_CHARACTERS_URL = 'https://www.breakingbadapi.com/api/characters/';

export const fetchCharacters = createAsyncThunk('characters/allCharacters', async () => {
    const response = await axios.get(ALL_CHARACTERS_URL);
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
    }
});

//CHARACACTERS
export const selectAllCharacters = (state) => state.characters.characters;
export const getCharactersStatus = (state) => state.characters.status;
export const getCharactersError = (state) => state.characters.error;

