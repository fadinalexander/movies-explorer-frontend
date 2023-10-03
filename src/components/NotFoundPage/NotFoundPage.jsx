import React from 'react';

import './NotFoundPage.css'
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <section className='notFoundPage'>
            <h2 className='notFoundPage__title'>404</h2>
            <p className='notFoundPage__text'>Страница не&nbsp;найдена</p>
            <Link to='/' className='notFoundPage__link'>Назад</Link>
        </section>
    )
}

export default NotFoundPage