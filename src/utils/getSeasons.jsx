
import { useDispatch, useSelector } from 'react-redux';
import { allEpisodesBySeason, fetchEpisodes, getEpisodesError, getEpisodesStatus } from './../redux/reducers/episodes';

export const getSeasons = () => {
    const dispatch = useDispatch();

    const seasons = useSelector(allEpisodesBySeason);
    const status = useSelector(getEpisodesStatus);
    const error = useSelector(getEpisodesError);


    if (status === 'idle') dispatch(fetchEpisodes());

    if (status === 'succeeded') return seasons;
    else if (status === 'failed') return error;
    else return false;
}
