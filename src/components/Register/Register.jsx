import React from 'react';

import '../FormPage/FormPage.css'
import FormPage from '../FormPage/FormPage'

function Register() {
    return (
        <FormPage
            title='Добро пожаловать!'
            buttonText='Зарегестрироваться'
            beforeLinkQuestion='Уже зарегистрированы?'
            link='/signin'
            linkText='Войти'
            buttonLink='/signin'
        >
            <label className='label'>
                Имя
                <input
                    id='input-name'
                    name='name'
                    required
                    className='form__input'
                    type='text'
                    minLength='2'
                    maxLength='40'
                    placeholder='Ваше имя'
                />
            </label>
            <label className='label'>
                E-mail
                <input
                    id='input-email'
                    name='email'
                    required
                    className='form__input'
                    type='email'
                    placeholder='Ваш email'
                />
            </label>
            <label className='label'>
                Пароль
                <input
                    id='input-password'
                    name='password'
                    required
                    className='form__input'
                    type='password'
                    minLength='2'
                    maxLength='40'
                    placeholder='Пароль'
                />
            </label>
        </FormPage>
    )
}

export default Register