import React from 'react';

import './SavedMovies.css'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import data from '../../utils/data';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const SavedMovies = ({ isLoggedIn }) => {

    const likedMovies = data.filter(movie => movie.isLiked)
    return (
        <>
            <Header isLoggedIn={ isLoggedIn } />
            <main>
                <section className='saved-movies'>
                    <SearchForm />
                    <MoviesCardList movies={ likedMovies } />
                </section>
            </main>
            <Footer />
        </>
    )
}

export default SavedMovies