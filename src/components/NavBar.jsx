import React from "react";
import { Link } from 'react-router-dom';

import style from '../styles/NavBar.module.css'

const NavBar = () => {
    return (
        <div>
            <ul className={style.navbarUl}>
                <li><Link to='/breaking-bad-reactapp/' className={style.btn}>Home</Link></li>
                <li><Link to="/breaking-bad-reactapp/characters" className={style.btn}>Characters</Link></li>
                <li><Link to="/breaking-bad-reactapp/episodes" className={style.btn}>Episodes</Link></li>
                <li><Link to="/breaking-bad-reactapp/deaths" className={style.btn}>Deaths</Link></li>
            </ul>
        </div>
    )
}

export default NavBar;