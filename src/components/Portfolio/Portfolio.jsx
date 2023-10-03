import React from 'react';

import routeIcon from '../../images/route_icon.svg'
import './Portfolio.css'

const Portfolio = () => {
    return (
        <section className='portfolio'>
            <h2 className='portfolio__title'>
                Портфолио
            </h2>
            <ul className='portfolio__list-container'>
                <li className='portfolio__list'>
                    <a
                        className='portfolio__link'
                        href='https://fadinalexander.github.io/how-to-learn/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <p className='portfolio__list-title'>Статичный сайт</p>
                        <img
                            className='portfolio__link-icon'
                            src={ routeIcon }
                            alt='Ссылка на одностриничный сайт how-to-learn'
                        >
                        </img>
                    </a>
                </li>
                <li className='portfolio__list'>
                    <a
                        className='portfolio__link'
                        href='https://fadinalexander.github.io/russian-travel/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <p className='portfolio__list-title'>Адаптивный сайт</p>
                        <img
                            className='portfolio__link-icon'
                            src={ routeIcon }
                            alt='Ссылка на адаптивный сайт russian-travel'
                        >
                        </img>
                    </a>
                </li>
                <li className='portfolio__list'>
                    <a
                        className='portfolio__link'
                        href='https://fadinproject.nomoreparties.co/mesto'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <p className='portfolio__list-title'>Одностраничное приложение</p>
                        <img
                            className='portfolio__link-icon'
                            src={ routeIcon }
                            alt='Ссылка на одностриничный сайт mesto'
                        >
                        </img>
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default Portfolio