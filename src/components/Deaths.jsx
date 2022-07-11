import { useEffect, useState } from 'react';
import { getAllDeaths } from './../utils/getAllDeaths';
import Loading from './Loading';

import style from '../styles/Deaths.module.css';

const Deaths = () => {

  const { deaths, count, characters, deathRandom } = getAllDeaths();
  const [actualDeath, setActualDeath] = useState(null);


  console.log(deathRandom)

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
    const { deaths, count, characters, deathRandom } = getAllDeaths();
  }

  useEffect(() => {
    if (deaths) setActualDeath(deaths[1]);
    // console.log('infoDeaths', count, deaths);
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
            <h2 className={`title`}>Random Death</h2>
          </div>
          <div className={style.randomDeath}>
            <div className={style.cardContainer}>
              <div className="imgContainer">
                <img className={style.img} src={deathRandom.img} alt={`${deathRandom.name} image`} />
              </div>
              <div className={style.infoContainer}>
                <h4 className={style.nameDeath}>{deathRandom.death}</h4>
                <div className={style.causeDeath}>
                  <span>{deathRandom.cause}</span>
                </div>
                <div className={style.lastWords}>
                  <p>Last Words</p>
                  <span className={style.lastWords}>"{deathRandom.last_words}"</span>
                </div>
              </div>
            </div>
          </div>
          <a onClick={handeOnClick} href="#" className='btn' >Click to get a Random Death</a>
        </>
        : <Loading />}
    </div>
  )
}

export default Deaths;