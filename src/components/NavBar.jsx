import React from "react";
import { Link } from 'react-router-dom';

import style from '../styles/NavBar.module.css'

const NavBar = () => {
    return (
        <div>
            <ul className={style.navbarUl}>
                <li><Link to='/' className={style.btn}>Home</Link></li>
                <li><Link to="/characters" className={style.btn}>Characters</Link></li>
                <li><Link to="/episodes" className={style.btn}>Episodes</Link></li>
                <li><Link to="/deaths" className={style.btn}>Deaths</Link></li>
            </ul>
        </div>
    )
}

export default NavBar;