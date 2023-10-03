import React from 'react';

import './Login.css'
import FormPage from '../FormPage/FormPage'

function Login() {

    return (
        <FormPage
            title='Рады видеть!'
            buttonText='Войти'
            beforeLinkQuestion='Ещё не зарегистрированы?'
            link='/signup'
            linkText='Регистрация'
            buttonLink='/movies'
        >
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

export default Login