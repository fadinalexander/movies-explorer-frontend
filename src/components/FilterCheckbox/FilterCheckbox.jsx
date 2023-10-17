import React from 'react';

import './FilterCheckbox.css'

const FilterCheckbox = ({onChange, checked}) => {
    return (
        <form className='filterCheckbox'>
            <input className='filterCheckbox__input' type='checkbox' id='checkbox' onChange={onChange} checked={checked} />
            <span className='filterCheckbox__name'>Короткометражки</span>
        </form>
    )
}

export default FilterCheckbox