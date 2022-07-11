
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
    deaths: {
        allDeaths: [],
        countDeaths: 0,
        status: 'idle',
        error: null
    }
}

