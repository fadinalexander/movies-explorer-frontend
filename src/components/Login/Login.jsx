import React, { useState, useEffect } from 'react'

import FormPage from '../FormPage/FormPage'
import '../FormPage/FormPage.css'

function Login({ handleLogin, errorMessage}) {

    const [formValue, setFormValue] = useState({
        email: "",
        password: ""
    })

    const [isEmailValid, setIsEmailValid] = useState(true)
    const [isPasswordValid, setIsPasswordValid] = useState(true)
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true)

    const handleChange = (evt) => {
        const { name, value } = evt.target
        setFormValue({
            ...formValue,
            [name]: value
        })

        if (name === 'email') {
            setIsEmailValid(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value.trim()))
            setEmailError(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value.trim()) ? '' : 'Невалидный E-mail')
        } else if (name === 'password') {
            setIsPasswordValid(value.trim().length >= 8 && value.trim().length <= 40)
            setPasswordError(value.trim().length >= 8 && value.trim().length <= 40 ? '' : 'Пароль должен содержать минимум 8 символов')
        }
        setEmailError('')
        setPasswordError('')
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        handleLogin({ email: formValue.email, password: formValue.password })
    }

    useEffect(() => {
        setIsSubmitDisabled(!(isEmailValid && isPasswordValid))
    }, [isEmailValid, isPasswordValid])

    return (
        <FormPage
            title='Рады видеть!'
            buttonText='Войти'
            beforeLinkQuestion='Ещё не зарегистрированы?'
            link='/signup'
            linkText='Регистрация'
            handleSubmit={handleSubmit}
            errorMessage={errorMessage}
        >
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
                    onChange={handleChange}
                />
            </label>
            { emailError && <span className='formPage__tips'>{ emailError }</span> }
            <label className='label'>
                Пароль
                <input
                    autoComplete='new-password'
                    id='input-password'
                    name='password'
                    required
                    className={ `form__input ${!isPasswordValid ? 'formPage__input_on-error' : ''}` }
                    type='password'
                    minLength='8'
                    maxLength='40'
                    placeholder='Пароль'
                    onChange={handleChange}
                />
            </label>
            { passwordError && <span className='formPage__tips'>{ passwordError }</span> }
            <button
                className='formPage__button-save'
                type='submit'
                disabled={ isSubmitDisabled }
            >
                Войти
            </button>
        </FormPage>
    )
}

export default Login