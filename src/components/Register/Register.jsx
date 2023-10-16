import React, { useEffect, useState } from 'react'

import '../FormPage/FormPage.css'
import FormPage from '../FormPage/FormPage'
import { useNavigate } from 'react-router-dom'

function Register({ isLoggedIn, handleRegister, errorMessage }) {
    const navigate = useNavigate()

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/movies')
        }
    }, [isLoggedIn, navigate])

    const [formValue, setFormValue] = useState({
        name: "",
        email: "",
        password: ""
    })

    const { name, email, password } = formValue
    const [isNameValid, setIsNameValid] = useState(true)
    const [isEmailValid, setIsEmailValid] = useState(true)
    const [isPasswordValid, setIsPasswordValid] = useState(true)
    const [nameError, setNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true)

    const handleChange = (evt) => {
        const { name, value } = evt.target
        setFormValue({
            ...formValue,
            [name]: value
        })

        if (name === 'name')
        {
            setIsNameValid(value.trim().length >= 2 && value.trim().length <= 40)
            setNameError(value.trim().length >= 2 && value.trim().length <= 40 ? '' : 'Имя должно содержать от 2 до 40 символов')
        } else if (name === 'email')
        {
            setIsEmailValid(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value.trim()))
            setEmailError(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value.trim()) ? '' : 'Невалидный E-mail')
        } else if (name === 'password')
        {
            setIsPasswordValid(value.trim().length >= 8 && value.trim().length <= 40)
            setPasswordError(value.trim().length >= 8 && value.trim().length <= 40 ? '' : 'Пароль должен содержать минимум 8 символов')
        }
    };

    const handleSubmit = (evt) => {
        evt.preventDefault()
        handleRegister(formValue)
    };

    useEffect(() => {
        setIsSubmitDisabled(!(name && email && password && isNameValid && isEmailValid && isPasswordValid))
    }, [name, email, password, isNameValid, isEmailValid, isPasswordValid])

    return (
        <FormPage
            title='Добро пожаловать!'
            buttonText='Зарегистрироваться'
            beforeLinkQuestion='Уже зарегистрированы?'
            link='/signin'
            linkText='Войти'
            handleSubmit={ handleSubmit }
            errorMessage={ errorMessage }
        >
            <label className='label'>
                Имя
                <input
                    id='input-name'
                    name='name'
                    required
                    className={ `form__input ${!isNameValid ? 'formPage__input_on-error' : ''}` }
                    type='text'
                    minLength='2'
                    maxLength='40'
                    placeholder='Ваше имя'
                    value={ name }
                    onChange={ handleChange }
                />
            </label>
            { nameError && <span className='formPage__tips'>{ nameError }</span> }
            <label className='label'>
                E-mail
                <input
                    autoComplete='off'
                    id='input-email'
                    name='email'
                    required
                    className={ `form__input ${!isEmailValid ? 'formPage__input_on-error' : ''}` }
                    type='email'
                    placeholder='Ваш email'
                    value={ email }
                    onChange={ handleChange }
                />
            </label>
            { emailError && <span className='formPage__tips'>{ emailError }</span> }
            <label className='label'>
                Пароль
                <input
                    id='input-password'
                    name='password'
                    required
                    className={ `form__input ${!isPasswordValid ? 'formPage__input_on-error' : ''}` }
                    type='password'
                    minLength='2'
                    maxLength='40'
                    placeholder='Пароль'
                    value={ password }
                    onChange={ handleChange }
                    autoComplete='new-password'
                />
            </label>
            { passwordError && <span className='formPage__tips'>{ passwordError }</span> }
            <button
                className='formPage__button-save'
                type='submit'
                disabled={ isSubmitDisabled }
            >
                Зарегистрироваться
            </button>
        </FormPage>
    )
}

export default Register