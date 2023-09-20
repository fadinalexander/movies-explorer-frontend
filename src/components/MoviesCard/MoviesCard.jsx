import React from 'react';

import './MoviesCard.css'
import movieCardImage from '../../images/movieCardImage.png'

const MoviesCard = () => {
    return (
        <li className='moviesCard'>
            <img className='moviesCard__img' src={ movieCardImage } alt='Обложка фильма' />
            <button className='moviesCard__btn-save moviesCard__btn-save_active'></button>
            <div className='moviesCard__container'>
                <h3 className='moviesCard__title'>
                    Бег это свобода
                </h3>
                <p className='moviesCard__duration'>
                    1ч 17м
                </p>

            </div>
        </li>
    )
}

export default MoviesCard