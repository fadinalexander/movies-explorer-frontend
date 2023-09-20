import React from 'react';

import './Profile.css'
import { Link } from 'react-router-dom';

const Profile = () => {
    return (
        <section className='profile'>
            <h2 className='profile__title'>Привет, Виталий!</h2>
            <form className='profile__form' id='profile__form'>
                <div className='profile__form-container'>
                    <label className='profile__label'>
                        Имя
                    </label>
                    <input
                        className='profile__input'
                        id='name-input'
                        type='text'
                        required
                        minLength='2'
                        maxLength='40'
                        name='name'
                        placeholder='placeholder'
                    />
                </div>
                <div className='profile__form-container'>

                    <label className='profile__label'>
                        E-mail
                    </label>
                    <input
                        className='profile__input'
                        id='email-input'
                        type='text'
                        required
                        minLength='2'
                        maxLength='40'
                        name='email'
                        placeholder='placeholder'
                    />
                </div>
                <button className='profile__button-edit' type='submit'>Редактировать</button>
                <button className='profile__button-exit' type='submit'>Выйти из аккаунта</button>
            </form>

        </section>
    )
}

export default Profile