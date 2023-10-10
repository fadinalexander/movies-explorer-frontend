import React, { useState } from 'react';

import './Login.css'
import FormPage from '../FormPage/FormPage'
import { useNavigate } from 'react-router-dom';

function Login({ handleLogin }) {
    const navigate = useNavigate()

    const [formValue, setFormValue] = useState({
        email: "",
        password: ""
    })

    const handleChange = (evt) => {
        const {name, value} = evt.target
        setFormValue({
            ...formValue,
            [name]: value
        })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        handleLogin({email, password})
    }

    const {password, email} = formValue

    return (
        <FormPage
            title='Рады видеть!'
            buttonText='Войти'
            beforeLinkQuestion='Ещё не зарегистрированы?'
            link='/signup'
            linkText='Регистрация'
            buttonLink='/movies'
            handleSubmit={handleSubmit}
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
                    onChange={handleChange}
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
                    onChange={handleChange}
                />
            </label>
        </FormPage>
    )
}

export default Login