import React from 'react';

import './FilterCheckbox.css'

const FilterCheckbox = ({onChange, checked}) => {
    return (
        <form className='filterCheckbox' onChange={onChange} checked={checked}>
            <input className='filterCheckbox__input' type='checkbox' id='checkbox' />
            <span className='filterCheckbox__name'>Короткометражки</span>
        </form>
    )
}

export default FilterCheckbox