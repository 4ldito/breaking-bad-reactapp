import React from "react";
import { Link, NavLink } from 'react-router-dom';

import style from '../styles/NavBar.module.css'

const NavBar = () => {
    return (
        <div>
            <ul className={style.navbarUl}>
                <li><NavLink to='/' className={style.btn}>Home</NavLink></li>
                <li><NavLink to="/characters" className={style.btn}>Characters</NavLink></li>
                <li><NavLink to="/episodes" className={style.btn}>Episodes</NavLink></li>
                <li><NavLink to="/deaths" className={style.btn}>Deaths</NavLink></li>
            </ul>
        </div>
    )
}

export default NavBar;