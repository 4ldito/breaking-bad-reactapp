import React from 'react';
import logo from '../img/logo.png';
import { getRandomQuote } from '../utils/getRandomQuote.jsx';
import style from '../styles/Home.module.css';


const Home = () => {
  const [quote] = getRandomQuote();
  return (
    <div className={style.container}>
      <img src={logo} alt="Logo Breaking Bad" />
      <p className={style.quote}>{
        quote? `"${quote.quote}" - ${quote.author}` : '...'
      }</p>
    </div>
  )
}

export default Home;