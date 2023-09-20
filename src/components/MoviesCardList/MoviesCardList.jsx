import React from 'react';

import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'

const MoviesCardList = () => {
    return (
        <section className='moviesCardList'>
            <ul className='moviesCardList__list'>
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
            </ul>
            <div className='moviesCardList__button-container'>
                <button className='moviesCardList__button'>Ещё</button>
            </div>
        </section>
    )
}


export default MoviesCardList