import React from 'react';

import getDuration from '../../utils/getDuration'
import './MoviesCard.css'
const MoviesCard = ({ movie }) => {

    const moviesCardLikeClassName = `${movie.isLiked ? 'moviesCard__btn-save_active' : 'moviesCard__btn-save'}`
    return (
        <li className='moviesCard'>
            <img
                className='moviesCard__img'
                src={ movie.thumbnail }
                alt={ movie.name }
            />
            <button className={moviesCardLikeClassName}></button>
            <div className='moviesCard__container'>
                <h3 className='moviesCard__title'>
                    {movie.name}
                </h3>
                <p className='moviesCard__duration'>
                    {getDuration(movie.duration)}
                </p>

            </div>
        </li>
    )
}

export default MoviesCard