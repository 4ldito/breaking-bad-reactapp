import { useEffect, useState } from 'react';
import { getAllDeaths } from './../utils/getAllDeaths';
import Loading from './Loading';

import style from '../styles/Deaths.module.css';

const Deaths = () => {

  const { deaths, count, characters } = getAllDeaths();
  const [actualDeath, setActualDeath] = useState(null);

  // cause: "Shot in close range."
  // death: "Cartel Assassins"
  // death_id: 28
  // episode: 4
  // last_words: "Unknown"
  // number_of_deaths: 2
  // responsible: "Mike Ehrmantraut"
  // season: 4

  const handeOnClick = (e) => {
    e.preventDefault();
  }

  useEffect(() => {
    if (deaths) setActualDeath(deaths[1]);
    console.log('infoDeaths', count, deaths);
    // console.log('characters', characters);
  }, [deaths])

  return (
    <div className={style.container}>
      <div className={style.containerTitle}>
        <h2 className={`title ${style.titleDeaths}`}>Deaths</h2>
      </div>
      {actualDeath ?
        <>
          <p>Total Deaths</p>
          <p><span className={style.deathCount}>{count}</span></p>
          <div className={style.containerTitle}>
            <h2 className={`title`}>Iconics Deaths</h2>
          </div>
          <div className={style.iconicsDeaths}>
            <div className={style.infoContainer}>
              <p>{actualDeath.death}</p>
            </div>

            <div className={style.infoContainer}>
              <p>{actualDeath.death}</p>
            </div>

            <div className={style.infoContainer}>
              <p>{actualDeath.death}</p>
            </div>
          </div>
          <a onClick={handeOnClick} href="#" className='btn' >Click to get a Random Death</a>
        </>
        : <Loading />}
    </div>
  )
}

export default Deaths;