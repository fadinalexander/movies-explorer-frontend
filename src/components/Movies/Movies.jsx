import React from 'react';

import './Movies.css'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import data from '../../utils/data'

const Movies = ({ isLoggedIn }) => {
    return (
        <>
            <Header isLoggedIn={ isLoggedIn } />
            <main>
                <section className='movies'>
                    <SearchForm />
                    <MoviesCardList movies={ data } />
                    <div className='movies__button-container'>
                        <button className='movies__button-else'>Ещё</button>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Movies