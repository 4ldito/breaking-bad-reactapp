import React from 'react';
import style from '../styles/Episodes.module.css';
import { getSeasons } from './../utils/getSeasons.jsx';
import Loading from './Loading';

const Episodes = () => {

  const seasons = getSeasons();

  const handleOnClick = (e) => {
    e.preventDefault();
    let target = e.target;
    if (target.innerText.includes('Season') || target.tagName === 'I') {
      if (target.tagName === 'P' || target.tagName === 'I') { // esto es para que funcione también si apretamos en el tag P o en el tag I
        target = target.parentElement;
      }
      const chapters = target.parentElement.children[1]; // div de los chapters
      if (chapters.clientHeight) { // si estába a la vista, lo ocultamos
        chapters.style.height = 0;
      } else { // si no, lo mostramos 
        const wrapper = chapters.children[0];
        chapters.style.height = `${wrapper.clientHeight}px`;
      }
      target.children[1].classList.toggle(style.rotate) // hacemos rotar a la flechita
    }
  }

  return (
    <div className={style.container}>
      <h2 className='title'>Episode List</h2>

      <ul className={style.listContainer}>
        {seasons?.length > 0 ?
          <>
            {seasons.map((season, i) => {
              return (
                <li key={i} className={style.list}>
                  <div onClick={handleOnClick} className={style.seasonNumberContainer}>
                    <p className={style.numSeason}>Season {i + 1} </p><i className={`fas fa-chevron-down ${style.icon}`}></i>
                  </div>

                  <div className={style.chapters}>
                    <div className="wrapper">
                      {season.map(ep => {
                        return <p key={ep.title} className={style.title}>{ep.title}</p>
                      })}
                    </div>
                  </div>
                </li>
              )
            })}
          </>
          : <div className='center'> <Loading /></div>}
      </ul>


    </div>
  )
}

export default Episodes