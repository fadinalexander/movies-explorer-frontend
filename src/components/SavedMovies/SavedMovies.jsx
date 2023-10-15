import React, { useEffect, useState } from 'react';

import './SavedMovies.css'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const SavedMovies = ({ isLoggedIn, movies, onDelete }) => {

    const [query, setQuery] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [isShortFilm, setIsShortFilm] = useState(false)

    useEffect(() => {
        localStorage.setItem('currentPath', '/saved-movies')
    }, [])

    useEffect(() => {
        filterMovies(query, isShortFilm)
    }, [movies, query, isShortFilm])

    const handleSearch = (newQuery, newIsShortFilm) => {
        setIsShortFilm(newIsShortFilm)

        const filteredMovies = movies.filter((movie) => {
            const includesQuery =
                movie.nameRU.toLowerCase().includes(newQuery.toLowerCase()) ||
                movie.nameEN.toLowerCase().includes(newQuery.toLowerCase())

            if (newIsShortFilm)
            {
                return includesQuery && movie.duration <= 40
            } else
            {
                return includesQuery
            }
        })
        setSearchResults(filteredMovies)
    }

    const filterMovies = (query, isShortFilm) => {
        let filteredMovies = movies || []

        if (isShortFilm)
        {
            filteredMovies = filteredMovies.filter((movie) => movie.duration <= 40)
        }

        const filteredResults = filteredMovies.filter((movie) => {
            return (
                movie.nameRU.toLowerCase().includes(query.toLowerCase()) ||
                movie.nameEN.toLowerCase().includes(query.toLowerCase())
            )
        })
        setSearchResults(filteredResults)
    }

    return (
        <>
            <Header isLoggedIn={ isLoggedIn } />
            <main>
                <section className='saved-movies'>
                    <SearchForm
                        query={ query }
                        setQuery={ setQuery }
                        isShortFilm={ isShortFilm }
                        setIsShortFilm={ setIsShortFilm }
                        onSearch={ handleSearch }
                        onFilter={ filterMovies }
                    />
                    <MoviesCardList
                        savedMoviesList={ searchResults }
                        onDelete={ onDelete }
                    />{ ' ' }
                </section>
            </main>
            <Footer />
        </>
    )
}

export default SavedMovies