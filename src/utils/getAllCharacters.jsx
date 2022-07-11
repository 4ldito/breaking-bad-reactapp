import { useSelector, useDispatch } from 'react-redux';
import { fetchCharacters, getCharactersError, getCharactersStatus, selectAllCharacters } from '../redux/reducers/characters';

export const getAllCharacters = () => {
    const dispatch = useDispatch();

    const characters = useSelector(selectAllCharacters);
    const charactersStatus = useSelector(getCharactersStatus);
    const error = useSelector(getCharactersError);

    if (charactersStatus === 'idle') dispatch(fetchCharacters());

    if (charactersStatus === 'succeeded') return characters;
    else if (charactersStatus === 'failed') return error
    else return false;
}

