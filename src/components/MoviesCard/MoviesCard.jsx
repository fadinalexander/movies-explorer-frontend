import React from 'react';
import { Link } from 'react-router-dom';

import getDuration from '../../utils/getDuration'
import './MoviesCard.css'
const MoviesCard = ({ isSavedPage, movie, savedMovies, onSave, onDelete }) => {

    const isLiked = !isSavedPage && savedMovies.some((item) => item.movieId === movie.id)
    const classNameMovies = isSavedPage || isLiked ? 'moviesCard__btn-save moviesCard__btn-save_active' : 'moviesCard__btn-save'
    const classNameSavedMovies = isSavedPage ? 'moviesCard__btn-save moviesCard__btn-save_delete' : 'moviesCard__btn-save'
    const imageURL = isSavedPage ? movie.image : `https://api.nomoreparties.co${movie.image.url}`

    function handleSaveClick() {
        onSave(movie)
        console.log(movie.id)
    }

    function handleDeleteClick() {
        onDelete(movie)
    }

    return (
        <li className='moviesCard'>
            <Link
                to={ movie.trailerLink }
                target='blank'
                title={ movie.description }
            >
                <img
                    className='moviesCard__img'
                    src={ imageURL }
                    alt={ movie.nameRU }
                />
            </Link>
            <div
                className={ isSavedPage ? classNameSavedMovies : classNameMovies }
                type='button'
                onClick={ isSavedPage ? handleDeleteClick : handleSaveClick }
            >
            </div>
            <div className='moviesCard__container'>
                <h3 className='moviesCard__title'>
                    { movie.nameRU }
                </h3>
                <p className='moviesCard__duration'>
                    { getDuration(movie.duration) }
                </p>
            </div>
        </li>
    )
}

export default MoviesCard