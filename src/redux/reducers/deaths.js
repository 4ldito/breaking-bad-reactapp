import { createSlice } from "@reduxjs/toolkit";
import { initialState } from './../reducer';
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const ALL_DEATHS_URL = 'https://www.breakingbadapi.com/api/deaths';
const ALL_DEATHS_COUNT = 'https://www.breakingbadapi.com/api/death-count';

export const fetchAllDeaths = createAsyncThunk('deaths/allDeaths', async () => {
    const response = await axios.get(ALL_DEATHS_URL);
    return response.data;
});

export const fetchCountDeaths = createAsyncThunk('deaths/deathsCount', async () => {
    const response = await axios.get(ALL_DEATHS_COUNT);
    return response.data;
});

export const deathsSlice = createSlice({
    name: 'deaths',
    initialState,
    extraReducers(builder) {
        builder
            .addCase(fetchAllDeaths.pending, (state) => {
                state.deaths.status = 'loading'
            })
            .addCase(fetchAllDeaths.fulfilled, (state, action) => {
                state.deaths.status = 'succeeded';
                state.deaths.allDeaths = state.deaths.allDeaths.concat(action.payload);
            })
            .addCase(fetchAllDeaths.rejected, (state, action) => {
                state.deaths.status = 'failed';
                state.deaths.error = action.error.message;
            })

            .addCase(fetchCountDeaths.fulfilled, (state, action) => {
                state.deaths.countDeaths = action.payload[0].deathCount;
            })
    }
});

//CHARACACTERS
export const allDeaths = (state) => state.deaths.deaths.allDeaths;
export const countDeaths = (state) => state.deaths.deaths.countDeaths;
export const deathsStatus = (state) => state.deaths.deaths.status;
export const deathError = (state) => state.deaths.deaths.error;

