import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacters, getCharactersStatus, selectAllCharacters } from '../redux/reducers/characters';
import { allDeaths, countDeaths, deathError, deathsStatus, fetchAllDeaths, fetchCountDeaths } from '../redux/reducers/deaths';

export const getAllDeaths = () => {
    const dispatch = useDispatch();
    const deaths = useSelector(allDeaths);
    const count = useSelector(countDeaths)
    const status = useSelector(deathsStatus);
    const error = useSelector(deathError);

    const characters = useSelector(selectAllCharacters);
    const charactersStatus = useSelector(getCharactersStatus);

    const infoDeaths = {};

    if (status === 'idle') {
        dispatch(fetchCountDeaths());
        dispatch(fetchAllDeaths());
        if (charactersStatus === 'idle') dispatch(fetchCharacters());
    }

    infoDeaths.count = count;
    infoDeaths.deaths = deaths;
    infoDeaths.characters = characters;

    if (status === 'succeeded') return infoDeaths;
    else if (status === 'failed') return error
    else return false;
}
