import React from 'react';

import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'

const MoviesCardList = ({ movies }) => {
    return (
        <section className='moviesCardList'>
            <ul className='moviesCardList__list'>
                { movies.map((movie) => {
                    return <MoviesCard key={ movie.id } movie={ movie } />
                }) }
            </ul>
        </section>
    )
}

export default MoviesCardList