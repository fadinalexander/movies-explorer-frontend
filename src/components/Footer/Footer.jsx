import React from 'react';

import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <p className='footer__paragraph footer__paragraph_align'>
                Учебный проект Яндекс.Практикум х&nbsp;BeatFilm.
            </p>
            <hr className='footer__hr' />
            <div className='footer__links-block'>
                <p className='footer__year'>&copy; { new Date().getFullYear() }</p>
                <div className='footer__links'>
                    <a
                        className='footer__paragraph footer__link'
                        href='https://practicum.yandex.ru'
                        target='_blank'
                        rel='noreferrer'
                    >
                        Яндекс.Практикум
                    </a>
                    <a
                        className='footer__paragraph footer__link'
                        href='https://github.com/fadinalexander'
                        target='_blank'
                        rel='noreferrer'
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer