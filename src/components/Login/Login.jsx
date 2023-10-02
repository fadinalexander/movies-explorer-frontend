import React from 'react';

import '../FormPage/FormPage.css'
import FormPage from '../FormPage/FormPage'
import { Link } from 'react-router-dom';

function Login() {

    return (
        <FormPage
            title='Рады видеть!'
            buttonText={
                <Link to='/movies'>Войти</Link>
            }
            beforeLinkQuestion='Ещё не зарегистрированы?'
            link='/signup'
            linkText='Регистрация'
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