import React, { useEffect, useState } from 'react';

import './SearchForm.css'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'

const SearchForm = ({ query, setQuery, isShortFilm, setIsShortFilm, onSearch, onFilter }) => {
    // const SearchForm = ({ query, setQuery, isShortFilm, setIsShortFilm, onSearch, onFilter, userId }) => {


    // //добавил для поискового запроса
    // const [hasSearched, setHasSearched] = useState(false)
    // useEffect(() => {
    //     const searched = localStorage.getItem('hasSearched_${userId}') === true
    //     setHasSearched(searched)
    //     if (searched) {
    //         const savedQuery = localStorage.getItem('query_${userId}')
    //         if (savedQuery) {
    //             setQuery(savedQuery)
    //         }
    //     }
    // }, [userId])


    const handleInputChange = (evt) => {
        setQuery(evt.target.value)
    }

    const handleShortFilmToogle = () => {
        setIsShortFilm(!isShortFilm)
        onFilter(query, !isShortFilm)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        onSearch(query, isShortFilm)

            // //добавил для поискового запроса
            // if (!hasSearched) {
            //     localStorage.setItem('hasSearched_${_${userId}}', 'true')
            // }
            // localStorage.setItem('query_${_${userId}}', query)
    }

    const handleEnterBtn = (evt) => {
        if (evt.key === 'Enter') {
            handleSubmit(evt)
        }
    }

    return (
        <section className='searchForm'>
            <form className='searchForm__form' onSubmit={ handleSubmit }>
                <input
                    className='searchForm__input'
                    name='searchForm__input'
                    id='searchForm__input'
                    required
                    type='text'
                    minLength='1'
                    maxLength='40'
                    placeholder='Фильм'
                    value={ query }
                    onChange={ handleInputChange }
                    onKeyDown={handleEnterBtn}
                >
                </input>
                <button className='searchForm__btn' type='submit' alt='Кнопка'></button>
            </form>
            <FilterCheckbox
            onChange={handleShortFilmToogle}
            checked={isShortFilm}
            />
            <hr className='searchForm__hr'/>
        </section>
    )
}

export default SearchForm