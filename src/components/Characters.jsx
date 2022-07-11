import React, { useState } from 'react'
import { useEffect } from 'react';
import style from '../styles/Characters.module.css'
import { getAllCharacters } from './../utils/getAllCharacters.jsx';
import { renderCharacters } from '../utils/renderCharacters';
import { useRef } from 'react';
import Loading from './Loading';

const Characters = () => {
  const characters = getAllCharacters();
  const [filterCharacters, setFilterCharacters] = useState({ succeess: [], error: false });
  const ref = useRef();

  const handleOnChange = () => {
    const value = ref.current.value.toLowerCase().trim();
    setFilterCharacters({ ...filterCharacters, succeess: characters.filter(c => c.name.toLowerCase().includes(value)) });
  };

  const handleNotFound = () => {
    return <p className={style.dontFound}>El personaje no fue encontrado</p>
  }

  useEffect(() => {
    if (filterCharacters.succeess.length === 0 && ref.current.value !== '') {
      setFilterCharacters({ ...filterCharacters, error: 'No se encontraron =(' });
    } else {
      setFilterCharacters({ ...filterCharacters, error: false });
    }
  }, [filterCharacters.succeess]);

  return (
    <div className={style.container}>
      <h2 className='title'>Characters List</h2>
      <div className={style.inputContain}>
        <svg className={style.glass} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" /></svg>
        <input ref={ref} className={style.input} type="text" onChange={handleOnChange} placeholder='Search Character' />
      </div>
      {filterCharacters.error ? handleNotFound() :
        <div className={characters ? style.charactersCointaner : style.containerLoading}>
          {filterCharacters.succeess.length > 0 ? renderCharacters(filterCharacters.succeess) :
            (characters && ref.current?.value === "") ? renderCharacters(characters) :
              !characters ? <Loading /> : ''}
        </div>}
    </div>
  )
}

export default Characters