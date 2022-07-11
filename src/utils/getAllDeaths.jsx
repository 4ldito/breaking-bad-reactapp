import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacters, getCharactersStatus, selectAllCharacters } from '../redux/reducers/characters';
import { allDeaths, countDeaths, deathError, deathsStatus, fetchAllDeaths, fetchCountDeaths, getRandomDeath, fetchRandomDeath } from '../redux/reducers/deaths';

export const getAllDeaths = () => {
    const dispatch = useDispatch();
    const deaths = useSelector(allDeaths);
    const deathRandom = useSelector(getRandomDeath);
    const count = useSelector(countDeaths)
    const status = useSelector(deathsStatus);
    const error = useSelector(deathError);

    const characters = useSelector(selectAllCharacters);
    const charactersStatus = useSelector(getCharactersStatus);

    const infoDeaths = {};

    if (status === 'idle') {
        dispatch(fetchCountDeaths());
        dispatch(fetchAllDeaths());
        dispatch(fetchRandomDeath());
        if (charactersStatus === 'idle') dispatch(fetchCharacters());
    }

    // let topKills = {};
    // if (deaths) {
    //     console.log(deaths);
    //     deaths.forEach(death => {
    //         if (!topKills[death.responsible]) topKills[death.responsible] = 0;
    //         topKills[death.responsible] = topKills[death.responsible] + death.number_of_deaths;
    //     });

    //     console.log(topKills);
    // }

    infoDeaths.count = count;
    infoDeaths.deaths = deaths;
    infoDeaths.characters = characters;
    infoDeaths.deathRandom = deathRandom;

    if (status === 'succeeded') return infoDeaths;
    else if (status === 'failed') return error
    else return false;
}
