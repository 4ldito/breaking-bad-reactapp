import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getQuote, fetchQuoteRandom, getQuoteLoaded } from '../redux/reducer';

export const getRandomQuote = () => {
    const dispatch = useDispatch();
    const quote = useSelector(getQuote);
    const quoteLoaded = useSelector(getQuoteLoaded);

    useEffect(() => {
        
        if (!quoteLoaded)  dispatch(fetchQuoteRandom()); 

    }, []);


    return quote;
}
