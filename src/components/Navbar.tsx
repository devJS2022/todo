import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar: React.FunctionComponent = () => {
    return(
        <header className="header">
            <a href='/' className="header__logo">React APP</a>
            <ul className="header__list list">
                <li className="list__item">
                    <NavLink to="/" className="list__link">Main</NavLink>
                </li>
                <li className="list__item">
                    <NavLink to="/about" className="list__link">About</NavLink>
                </li>
            </ul>
        </header>
    )
}