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
    return `El personaje no fue encontrado `
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
      <input ref={ref} className={style.input} type="text" onChange={handleOnChange} placeholder='Search Character' />

      {filterCharacters.error ? handleNotFound() :
        <div className={characters ? style.charactersCointaner : style.containerLoading}>
          {filterCharacters.succeess.length > 0 ? renderCharacters(filterCharacters.succeess) :
            characters ? renderCharacters(characters) :
              <Loading />}
        </div>}
    </div>
  )
}

export default Characters