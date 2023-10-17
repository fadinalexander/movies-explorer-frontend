import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css'
import usePageSize from '../../hooks/usePageSize';

import logoImage from '../../images/logoImage.svg'
import Navigation from '../Navigation/Navigation'
import BurgerPopup from '../BurgerPopup/BurgerPopup';

const Header = ({ isLoggedIn }) => {

    const pageWidth = usePageSize()

    return (
        <header className='header'>
            <Link to='/'>
                <img className='header__logo' src={ logoImage } alt='Логотип' />
            </Link>

            { pageWidth.width > 768 ? (
                <Navigation isLoggedIn={ isLoggedIn } />
            ) : isLoggedIn ? (
                <BurgerPopup isLoggedIn={ isLoggedIn } />
            ) : (
                <Navigation isLoggedIn={ isLoggedIn } />
            ) }
        </header>
    )
}

export default Header