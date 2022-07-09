import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchEpisodes, initialState } from './../reducer';

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