import React from 'react';

import '../FormPage/FormPage.css'
import FormPage from '../FormPage/FormPage'
import { Link } from 'react-router-dom';

function Register () {
    return (
            <FormPage
                title='Добро пожаловать!'
                buttonText= {
                    <Link to='/signin'>Зарегестрироваться</Link>
                }
                beforeLinkQuestion='Уже зарегистрированы?'
                link='/signin'
                linkText='Войти'
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