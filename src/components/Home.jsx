import React, { useEffect, useState } from 'react';
import logo from '../img/logo.png';
import { getRandomQuote } from '../utils/getRandomQuote.jsx';
import style from '../styles/Home.module.css';


const Home = () => {
  const quotes = getRandomQuote();
  const [quote, setQuote] = useState(null);

  const handeOnClick = (e) => {
    e.preventDefault();
    const randomNum = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomNum]);
  }

  useEffect(() => {
    setQuote(quotes[0]);
  }, [quotes]);

  return (
    <div className={style.container}>
      <img src={logo} alt="Logo Breaking Bad" />
      <p className={style.quote}>{
        quote? `"${quote.quote}" - ${quote.author}` : '...'
      }</p>
      <a href="#" className='btn' onClick={handeOnClick}>Random Quote</a>
    </div>
  )
}

export default Home;