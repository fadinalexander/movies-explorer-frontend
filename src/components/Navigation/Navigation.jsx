import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import './Navigation.css'
import accountBtn from '../../images/account_btn.svg'
import usePageSize from '../../hooks/usePageSize'

const Navigation = ({ isLoggedIn, onLinkClick }) => {

    const pageWidth = usePageSize()

    const toggleClassNameNavigation = pageWidth.width <= 768 ? 'navigation_popup' : 'navigation'
    const toggleClassNameMovie = pageWidth.width <= 768 ? 'navigation__movies-popup' : 'navigation__movies'
    const toggleClassNameLink = pageWidth.width <= 768 ? 'navigation__popup' : 'navigation__header'

    return (
        <>
            { isLoggedIn
                ? (
                    <nav className={ toggleClassNameNavigation } id='navigation'>

                        <div className={ toggleClassNameMovie }>
                            <NavLink
                                to='/'
                                className={ ({ isActive }) => `${toggleClassNameLink} navigation__header-mainPage ${isActive ? 'navigation__link-active' : ''}` }
                                onClick={ onLinkClick }
                            >
                                Главная
                            </NavLink>
                            <NavLink
                                to='/movies'
                                className={ ({ isActive }) => `${toggleClassNameLink} ${isActive ? 'navigation__link-active' : ''}` }
                                onClick={ onLinkClick }
                            >
                                Фильмы
                            </NavLink>
                            <NavLink
                                to='/saved-movies'
                                className={ ({ isActive }) => `${toggleClassNameLink} ${isActive ? 'navigation__link-active' : ''}` }
                                onClick={ onLinkClick }
                            >
                                Сохранённые фильмы
                            </NavLink>
                        </div>

                        <Link
                            to='/profile'
                            className='navigation__isLoggedIn-profile'
                            onClick={ onLinkClick }
                        >
                            <img src={ accountBtn } alt="Иконка аккаунта" />
                        </Link>
                    </nav >
                ) : (
                    <nav className='navigation' id='navigation'>
                        <div className='navigation__landing'>
                            <Link
                                className='navigation__landing-link'
                                to='/signup'
                            >
                                Регистрация
                            </Link>
                            <Link
                                to='/signin'
                                className='navigation__landing-link navigation__landing-link_green'
                            >
                                Войти
                            </Link>
                        </div>
                    </nav>
                )
            }
        </>
    )
}

export default Navigation