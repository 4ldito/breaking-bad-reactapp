import React from 'react';
import style from '../styles/Character.module.css';
import { Link } from 'react-router-dom';

const Character = ({ id, name, img, portrayed }) => {

  return (
    <div className={style.container}>
      <Link to={`./${id}`} >
        <p className={style.name}>{name}</p>
      </Link>
    </div>
  )
}

export default Character;