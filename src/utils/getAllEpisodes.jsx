import { useDispatch, useSelector } from 'react-redux';
import { allEpisodes, getEpisodesStatus, getEpisodesError, fetchEpisodes } from '../redux/reducer';
import { useEffect } from 'react';

export const getAllEpisodes = () => {
    const dispatch = useDispatch();

    const episodes = useSelector(allEpisodes);
    const status = useSelector(getEpisodesStatus);
    const error = useSelector(getEpisodesError);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchEpisodes());
        }
    }, [status]);

    if (status === 'succeeded') {
        return episodes;
    } else if (status === 'failed') {
        return error;
    } else {

        return false;
    }
}
