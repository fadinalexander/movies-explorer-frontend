import React from 'react';

import './NotFoundPage.css'

const NotFoundPage = () => {
    return (
        <section className='notFoundPage'>
            <h2 className='notFoundPage__title'>404</h2>
            <p className='notFoundPage__text'>Страница не&nbsp;найдена</p>
            <button
                className='notFoundPage__link'
                onClick={ () => window.history.back() }
            >
                Назад
            </button>
        </section>
    )
}

export default NotFoundPage