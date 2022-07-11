import Loading from './Loading';
import { useDispatch, useSelector } from 'react-redux';
import { allDeaths, countDeaths, deathsStatus, fetchAllDeaths, fetchCountDeaths, fetchRandomDeath, getRandomDeath } from '../redux/reducers/deaths';

import style from '../styles/Deaths.module.css';

const Deaths = () => {

  const dispatch = useDispatch();

  
  const deaths = useSelector(allDeaths);
  const deathRandom = useSelector(getRandomDeath);
  const count = useSelector(countDeaths)
  const status = useSelector(deathsStatus);
  
  console.log(deathRandom);
  const infoDeaths = {};

  if (status === 'idle') {
    dispatch(fetchCountDeaths());
    dispatch(fetchAllDeaths());
    dispatch(fetchRandomDeath());
  }

  infoDeaths.countInfo = count;
  infoDeaths.deathsInfo = deaths;
  infoDeaths.deathRandomInfo = deathRandom;

  const { countInfo, deathRandomInfo } = infoDeaths;
  const handeOnClick = (e) => {
    e.preventDefault();
    dispatch(fetchRandomDeath());
  }

  return (
    <div className={style.container}>
      <div className={style.containerTitle}>
        <h2 className={`title ${style.titleDeaths}`}>Deaths</h2>
      </div>
      {deaths.length > 0 ?
        <>
          <p>Total Deaths</p>
          <p><span className={style.deathCount}>{countInfo}</span></p>
          <div className={style.containerTitle}>
            <h2 className={`title`}>Random Death</h2>
          </div>
          <div className={style.randomDeath}>
            <div className={style.cardContainer}>
              <div className="imgContainer">
                <img className={style.img} src={deathRandomInfo.img} alt={`${deathRandomInfo.name} image`} />
              </div>
              <div className={style.infoContainer}>
                <h4 className={style.nameDeath}>{deathRandomInfo.death}</h4>
                <div className={style.causeDeath}>
                  <span>{deathRandomInfo.cause}</span>
                </div>
                <div className={style.lastWords}>
                  <p>Last Words</p>
                  <span className={style.lastWords}>"{deathRandomInfo.last_words}"</span>
                </div>
              </div>
            </div>
          </div>
          <a onClick={handeOnClick} href="#" className={`btn ${style.btn}`} >Click to get a Random Death</a>
        </>
        : <Loading />}

    </div>
  )
}

export default Deaths;