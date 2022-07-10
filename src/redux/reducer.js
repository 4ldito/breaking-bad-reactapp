
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
        countDeaths: 0,
        randomDeath: {},
        status: 'idle',
        error: null
    }
}

