import React from 'react'
import spinner from '../img/spinner.gif';
import style from '../styles/Loading.module.css'

const Loading = () => {
    return (
        <img className={style.spinner} src={spinner} alt="Cargando" />
    )
}

export default Loading;