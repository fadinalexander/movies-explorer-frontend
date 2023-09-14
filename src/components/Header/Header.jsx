import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css'
import logoImage from '../../images/logoImage.svg'

const Header = () => {
    return (
        <header className='header'>
            <Link className='header__route-home' to='/'>
                <img className='heder__logo' src={logoImage} alt='Логотип' />
            </Link>
        </header>

    )
}

export default Header