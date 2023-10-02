import React from 'react';

import './SearchForm.css'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'

const SearchForm = () => {
    return (
        <section className='searchForm'>
            <form className='searchForm__form'>
                <input
                    className='searchForm__input'
                    name='searchForm__input'
                    id='searchForm__input'
                    required
                    type='text'
                    minLength='2'
                    maxLength='40'
                    placeholder='Фильм'
                >
                </input>
                <button className='searchForm__btn' type='submit' />
            </form>
            <FilterCheckbox />
            <hr className='searchForm__hr' />
        </section>
    )
}

export default SearchForm