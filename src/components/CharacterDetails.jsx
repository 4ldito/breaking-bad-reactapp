import React, { useEffect, useState } from 'react';
import style from '../styles/CharacterDetails.module.css';
import { useParams } from 'react-router';
import { getAllCharacters } from './../utils/getAllCharacters.jsx';
import Loading from './Loading';

const CharacterDetails = () => {
    const [actualChar, setActualChar] = useState();
    const { id } = useParams();
    const content = getAllCharacters();

    const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati repellendus facilis unde commodi inventore quasi quod. Blanditiis ut harum aperiam labore, minus cumque vel corporis! Hic beatae in dolor? Molestias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptates harum ad fuga ipsa mollitia temporibus nemo, hic maiores.';

    useEffect(() => {
        if (Array.isArray(content)) {
            const character = content.find((char) => char.char_id === Number(id));
            setActualChar(() => character);
        }
    }, [content]);

    return (
        <div className={style.container}>
            <h2 className='title'>Character Details</h2>
            {actualChar ?
                <div className={style.detailsContainer}>
                    <div className={style.cardContainer}>
                        <div className={style.card}>
                            <h3 className={style.name}>{actualChar.name}</h3>

                            <img src={actualChar.img} alt={`${actualChar.name} image`} />
                        </div>
                    </div>

                    <div className={style.aboutContainer}>
                        <h3 className={style.name}>About</h3>
                        <p className={style.nickname}>{actualChar.nickname}</p>
                        <div className={style.occupationContainer}>
                            {actualChar.occupation.map(occ => <p key={occ}>{occ}</p>)}
                        </div>
                        <p className={style.textAbout}>{lorem}</p>
                    </div>
                </div>
                : <Loading />}
        </div>
    )
}

export default CharacterDetails;