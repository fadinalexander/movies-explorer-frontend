import React from 'react';

import './FilterCheckbox.css'

const FilterCheckbox = () => {
    return (
        <form className='filterCheckbox'>
            <input className='filterCheckbox__input' type='checkbox' id='checkbox' />
            <span className='filterCheckbox__name'>Короткометражки</span>
        </form>
    )
}

export default FilterCheckbox