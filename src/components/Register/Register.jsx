import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as appAuth from '../../utils/appAuth'

import '../FormPage/FormPage.css'

import FormPage from '../FormPage/FormPage'



function Register({ handleRegister }) {

    const [formValue, setFormValue] = useState({
        name: "",
        email: "",
        password: ""
    })

    const {name, email, password} = formValue

    const handleChange = (evt) => {
        const {name, value} = evt.target
        setFormValue({
            ...formValue,
            [name]: value
        })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
       handleRegister(formValue)        
    }


    return (
        <FormPage
            title='Добро пожаловать!'
            buttonText='Зарегестрироваться'
            beforeLinkQuestion='Уже зарегистрированы?'
            link='/signin'
            linkText='Войти'
            buttonLink='/signin'

            handleSubmit={handleSubmit}
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

                    onChange = {handleChange}
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

export default Register