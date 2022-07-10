import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchQuoteRandom, getQuote, getQuoteLoaded } from '../redux/reducers/quote';
// import { fetchQuoteRandom, getQuote, getQuoteLoaded } from '../redux/reducers/characters';

export const getRandomQuote = () => {
    const dispatch = useDispatch();
    const quote = useSelector(getQuote);
    const quoteLoaded = useSelector(getQuoteLoaded);

    useEffect(() => {

        if (!quoteLoaded) dispatch(fetchQuoteRandom());

    }, []);


    return quote;
}
