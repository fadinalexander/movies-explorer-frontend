import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './Header.css'
import logoImage from '../../images/logoImage.svg'
import accountBtn from '../../images/account_btn.svg'
import Navigation from '../../components/Navigation/Navigation'
import HeaderPopup from '../HeaderPopup/HeaderPopup';

const Header = ({ isLoggedIn }) => {
    const location = useLocation()

    const showMainHeader = () => {
        return (
            location.pathname === '/'
        )
    }

    const showAuthorizedHeader = () => {
        return (
            location.pathname === '/movies' || location.pathname === '/saved-movies' || location.pathname === '/profile'
        )
    }

    const [pageSize, setPageSize] = useState(
        {
            with: window.innerWidth,
            height: window.innerHeight
        }
    )

    useEffect(() => {
        const resizeHandler = () => {
            setPageSize(
                {
                    with: window.innerWidth,
                    height: window.innerHeight
                }
            )
        }

        window.addEventListener('resize', resizeHandler)

        return () => {
            window.removeEventListener('resize', resizeHandler)
        }
    }, [])

    return (
        <>
            { showMainHeader() && (
                <header className='header'>
                    <Link className='header__route-home' to='/'>
                        <img className='header__logo' src={ logoImage } alt='Логотип' />
                    </Link>
                    <div className='header__buttons'>
                        <Link className='header__button' to='/signup'>
                            Регистрация
                        </Link>
                        <Link className='header__button header__button_green' to='/signin'>
                            Войти
                        </Link>
                    </div>
                </header>
            ) }

            { showAuthorizedHeader() && (
                <header className='header'>
                    <Link className='header__route-home' to='/'>
                        <img className='header__logo' src={ logoImage } alt='Логотип' />
                    </Link>
                    <div className='header__buttons header__buttons_authorized'>
                        <Link className='header__button header__button_authorized' to='/movies'>
                            Фильмы
                        </Link>
                        <Link className='header__button' to='/saved-movies'>
                            Сохранённые фильмы
                        </Link>
                    </div>
                    <div className='header__buttons-account'>
                        <Link className='header__button-account' to='/profile'>
                            <img src={ accountBtn } alt="Иконка аккаунта" />
                        </Link>
                    </div>
                </header>
            ) }
        </>
    )
}

export default Header