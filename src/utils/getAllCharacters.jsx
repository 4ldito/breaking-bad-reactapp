import { useSelector, useDispatch } from 'react-redux';
import { selectAllCharacters, getCharactersStatus, getCharactersError, fetchCharacters } from '../redux/reducer';
import { useEffect } from 'react';

export const getAllCharacters = () => {
    const dispatch = useDispatch();

    const characters = useSelector(selectAllCharacters);
    const charactersStatus = useSelector(getCharactersStatus);
    const error = useSelector(getCharactersError);

    useEffect(() => {
        if (charactersStatus === 'idle') {
            dispatch(fetchCharacters());
        }
    }, [charactersStatus]);

    if (charactersStatus === 'succeeded') {
        return characters;
    } else if (charactersStatus === 'failed') {
        return error;
    } else {
        return false;
    }
}

