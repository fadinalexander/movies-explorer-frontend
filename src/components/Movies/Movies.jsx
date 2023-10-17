import React, { useEffect, useState } from 'react';

import './Movies.css'

import Preloader from '../Preloader/Preloader'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Movies = ({ isLoggedIn, movies, savedMovies, onSave, getMovies, isLiked, setIsLiked }) => {

    const [query, setQuery] = useState(
        localStorage.getItem('query') || ''
    )

    const [searchResults, setSearchResults] = useState(
        JSON.parse(localStorage.getItem('searchResults')) || []
    )
    const [hasSearched, setHasSearched] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [visibleCards, setVisibleCards] = useState(getInitialVisibleCards())
    const [isShortFilm, setIsShortFilm] = useState(
        localStorage.getItem('isShortFilm') === 'true' || false
    )

    useEffect(() => {
        localStorage.setItem('currentPath', '/movies')
    }, [])

    const updateQuery = (newQuery) => {
        setQuery(newQuery)
    }
    useEffect(() => {
        localStorage.setItem('query', query)
    }, [query])

    const updateIsShortFilm = (newValue) => {
        setIsShortFilm(newValue)
    }
    useEffect(() => {
        localStorage.setItem('isShortFilm', isShortFilm)
    }, [isShortFilm])

    function getInitialVisibleCards() {
        const screenWidth = window.innerWidth;
        if (screenWidth >= 1280)
        {
            return 12;
        } else if (screenWidth >= 780)
        {
            return 8;
        } else
        {
            return 5;
        }
    }
    const handleShowMoreClick = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth >= 1280)
        {
            setVisibleCards((prevVisibleCards) => prevVisibleCards + 3);
        } else if (screenWidth >= 780)
        {
            setVisibleCards((prevVisibleCards) => prevVisibleCards + 2);
        } else
        {
            setVisibleCards((prevVisibleCards) => prevVisibleCards + 2);
        }
    };

    useEffect(() => {
        function handleResize() {
            setVisibleCards(getInitialVisibleCards())
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const filterMovies = (query, isShortFilm) => {
        setIsLoading(true)
        let filteredMovies = movies
        if (isShortFilm) {
            filteredMovies = filteredMovies.filter(movie => movie.duration <= 40)
        }
        const queryLower = query.toLowerCase()
        const filteredResults = filteredMovies.filter(movie => 
            movie.nameRU.toLowerCase().includes(queryLower) || 
            movie.nameEN.toLowerCase().includes(queryLower)
        )
        setSearchResults(filteredResults)
        localStorage.setItem('searchResults', JSON.stringify(filteredResults))
        setIsLoading(false)
    }

    const handleSearch = async (query, isShortFilm) => {
        setIsLoading(true)
        let filteredMovies
        if (movies.length === 0) {
            filteredMovies = await getMovies()
        } else {
            filteredMovies = movies
        }
        const searchResults = filteredMovies.filter((movie) => {
            const nameRULowerCase = movie.nameRU.toLowerCase()
            const nameENLowerCase = movie.nameEN.toLowerCase()
            const includesQuery = (
                nameRULowerCase.includes(query.toLowerCase()) ||
                nameENLowerCase.includes(query.toLowerCase())
            );
            return isShortFilm ? includesQuery && movie.duration <= 40 : includesQuery
        })
        setSearchResults(searchResults)
        setHasSearched(true)
        localStorage.setItem("searchResults", JSON.stringify(searchResults))
        setVisibleCards(getInitialVisibleCards())
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }

    useEffect(() => {
        filterMovies(query, isShortFilm)
    }, [movies, query, isShortFilm])
    
    return (
        <>
            <Header isLoggedIn={ isLoggedIn } />
            <main>
                <section className='movies'>
                    <SearchForm
                        query={ query }
                        setQuery={ updateQuery }
                        isShortFilm={ isShortFilm }
                        setIsShortFilm={ updateIsShortFilm }
                        onSearch={ handleSearch }
                        onFilter={ filterMovies }
                    />

                    { isLoading ? (
                        <Preloader />
                    ) : (
                        !movies || (hasSearched && searchResults.length === 0)
                    ) ? (
                        <p style={ { textAlign: 'center', marginTop: 50 } }>Ничего не найдено</p>
                    ) : (
                        <MoviesCardList
                            moviesList={ searchResults.slice(0, visibleCards) }
                            savedMovies={ savedMovies }
                            onSave={ onSave }
                            isLiked={ isLiked }
                            setLiked={ setIsLiked }
                        />
                    ) }

                    { searchResults === 0 || visibleCards < searchResults.length ? (
                        <div className='movies__button-container'>
                            <button
                                className='movies__button-else'
                                type='button'
                                onClick={ handleShowMoreClick }
                            >
                                Ещё
                            </button>
                        </div>
                    ) : null
                    }
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Movies