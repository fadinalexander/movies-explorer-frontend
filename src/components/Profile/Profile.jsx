import React, { useContext, useEffect, useState } from 'react'

import CurrentUserContext from '../../contexts/CurrentUserContext'

import './Profile.css'
import Header from '../Header/Header'

const Profile = ({ isLoggedIn, handleLogout, handleUpdateUser, successedPatchedProfile, errorMessage }) => {
    const { currentUser } = useContext(CurrentUserContext)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [isEdited, setIsEdited] = useState(false)

    const [nameError, setNameError] = useState('')
    const [emailError, setEmailError] = useState('')

    const message = errorMessage ? errorMessage : successedPatchedProfile

    useEffect(() => {
        setName(currentUser.name)
        setEmail(currentUser.email)
        setIsEdited(false)
        setNameError('')
        setEmailError('')
    }, [currentUser])

    function handleChangeName(evt) {
        setName(evt.target.value)
        setIsEdited(true)

        if (evt.target.value.trim().length < 2 || evt.target.value.trim().length > 40) {
            setNameError('Имя должно содержать от 2 до 40 символов')
        } else if (!(/^[A-Za-zА-Яа-яЁё\s]+$/).test(evt.target.value.trim())) {
            setNameError('Имя может содержать только буквы')
        } else {
            setNameError('')
        }
    }

    function handleChangeEmail(evt) {
        setEmail(evt.target.value)
        setIsEdited(true)

        if (!(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/).test(evt.target.value.trim())) {
            setEmailError('Невалидный E-mail');
        } else {
            setEmailError('')
        }
    }

    function handleSubmit(evt) {
        evt.preventDefault()
        handleUpdateUser({ name, email })
    }

    const isSubmitDisabled = !isEdited || !!nameError || !!emailError

    return (
        <>
            <Header isLoggedIn={isLoggedIn} />
            <main>
                <section className='profile'>
                    <h2 className='profile__title'>Привет, {currentUser.name}!</h2>
                    <form className='profile__form' id='profile__form' onSubmit={handleSubmit}>
                        <div className={`profile__form-container`}>
                            <label className='profile__label'>
                                Имя
                            </label>
                            <input
                                className={`profile__input ${nameError ? 'profile__input_on-error' : ''}`}
                                id='name-input'
                                type='text'
                                required
                                minLength='2'
                                maxLength='40'
                                name='name'
                                placeholder='Введите новое имя'
                                value={name || ''}
                                onChange={handleChangeName}
                            />
                            {nameError && <span className='profile__tips'>{nameError}</span>}
                        </div>

                        <div className={`profile__form-container`}>
                            <label className='profile__label'>
                                E-mail
                            </label>
                            <input
                                className={`profile__input ${emailError ? 'profile__input_on-error' : ''}`}
                                id='email-input'
                                type='text'
                                required
                                minLength='2'
                                maxLength='40'
                                name='email'
                                placeholder='Введите новый e-mail'
                                value={email || ''}
                                onChange={handleChangeEmail}
                            />
                            {emailError && <span className='profile__tips'>{emailError}</span>}
                        </div>
                        <span className='profile__message'>{message}</span>

                        <button
                            className='profile__button-edit'
                            type='submit'
                            disabled={isSubmitDisabled}
                        >
                            Редактировать
                        </button>

                        <button
                            className='profile__button-exit'
                            type='button'
                            onClick={handleLogout}
                        >
                            Выйти из аккаунта
                        </button>
                    </form>
                </section>
            </main>
        </>
    )
}

export default Profile