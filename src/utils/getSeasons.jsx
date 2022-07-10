import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { allEpisodesBySeason, fetchEpisodes, getEpisodesError, getEpisodesStatus } from './../redux/reducers/episodes';

export const getSeasons = () => {
    const dispatch = useDispatch();

    // const episodes = useSelector(allEpisodes);
    const seasons = useSelector(allEpisodesBySeason);
    const status = useSelector(getEpisodesStatus);
    const error = useSelector(getEpisodesError);

    useEffect(() => {
        if (status === 'idle') dispatch(fetchEpisodes());

    }, [status]);

    if (status === 'succeeded') return seasons;
    else if (status === 'failed') return error;
    else return false;
}
