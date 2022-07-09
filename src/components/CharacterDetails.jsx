import React, { useEffect, useState } from 'react';
import style from '../styles/CharacterDetails.module.css';
import { useParams } from 'react-router';
import { getAllCharacters } from './../utils/getAllCharacters.jsx';
import Loading from './Loading';

const CharacterDetails = () => {
    const [actualChar, setActualChar] = useState();
    const { id } = useParams();
    const content = getAllCharacters();

    useEffect(() => {
        if (Array.isArray(content)) {
            const character = content.find((char) => char.char_id === Number(id));
            setActualChar(() => character);
        }
    }, [content]);

    return (
        <div className={style.container}>
            <h2 className='title'>Detalles del personaje </h2>
            {actualChar ?
                <div className={style.cardContainer}>
                    <div className={style.card}>
                        <p className={style.name}>{actualChar.name}</p>
                        <p>Mejor conocido como: {actualChar.nickname}</p>
                        <img src={actualChar.img} alt={`${actualChar.name} image`} />
                    </div>

                </div>
                : <Loading/>}

        </div>
    )
}

export default CharacterDetails;