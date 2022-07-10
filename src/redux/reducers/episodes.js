import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { initialState } from './../reducer';
import axios from "axios";

const ALL_EPISODES_URL = 'https://www.breakingbadapi.com/api/episodes?series=Breaking Bad';

export const fetchEpisodes = createAsyncThunk('episodes/allEpisodes', async () => {
    const response = await axios.get(ALL_EPISODES_URL);
    return response.data
});

export const episodesSlice = createSlice({
    name: 'episodes',
    initialState,
    extraReducers(builder) {
        builder
            // Episodes
            .addCase(fetchEpisodes.pending, (state) => {
                state.episodes.status = 'loading';
            })
            .addCase(fetchEpisodes.fulfilled, (state, action) => {
                state.episodes.status = 'succeeded';
                state.episodes.allEpisodes = state.episodes.allEpisodes.concat(action.payload);
                const episodes = action.payload;
                let seasons = [];
                episodes.map((ep) => {
                    if (!seasons[ep.season - 1]) {
                        seasons[ep.season - 1] = []
                    }
                    seasons[ep.season - 1].push(ep);
                });
                state.episodes.bySeason = state.episodes.bySeason.concat(seasons);

            })
            .addCase(fetchEpisodes.rejected, (state, action) => {
                state.episodes.status = 'failed';
                state.episodes.error = action.error.message;
            })
    }
});


export const allEpisodes = (state) => state.episodes.episodes.allEpisodes;
export const getEpisodesStatus = (state) => state.episodes.episodes.status;
export const getEpisodesError = (state) => state.episodes.episodes.error;
export const allEpisodesBySeason = (state) => state.episodes.episodes.bySeason;