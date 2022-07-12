import React from 'react';
import style from '../styles/Character.module.css';
import { Link } from 'react-router-dom';

const Character = ({ id, name }) => {

  return (
    <div className={style.container}>
      <Link to={`./${id}`} >
        <span className={style.name}>{name}</span>
      </Link>
    </div>
  )
}

export default Character;