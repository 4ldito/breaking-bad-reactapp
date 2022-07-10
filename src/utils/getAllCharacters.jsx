import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCharacters, getCharactersError, getCharactersStatus, selectAllCharacters } from '../redux/reducers/characters';

export const getAllCharacters = () => {
    const dispatch = useDispatch();

    const characters = useSelector(selectAllCharacters);
    const charactersStatus = useSelector(getCharactersStatus);
    const error = useSelector(getCharactersError);

    useEffect(() => {
        
        if (charactersStatus === 'idle') dispatch(fetchCharacters());
        
    }, [charactersStatus]);

    if (charactersStatus === 'succeeded') return characters;
    else if (charactersStatus === 'failed') return error
    else return false;
}

