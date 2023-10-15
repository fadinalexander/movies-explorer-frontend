import React from 'react'
import { Link } from 'react-router-dom'

import './FormPage.css'
import logoImage from '../../images/logoImage.svg'

function FormPage({
  title,
  children,
  beforeLinkQuestion,
  link,
  linkText,
  handleSubmit,
  errorMessage
}) {
  return (
    <section className='formPage'>
      <Link className='formPage__logo' to='/'>
        <img src={ logoImage } alt="Логотип" />
      </Link>
      <h2 className='formPage__title'>{ title }</h2>
      <form
        className='form'
        noValidate
        action=''
        method=''
        id='form'

        onSubmit={ handleSubmit }
      >
        { children }

      </form>
      {errorMessage && <span className='formPage__error'>{errorMessage}</span>}
      <p className='formPage__beforeLink-question'>
        { beforeLinkQuestion }
        <Link className='formPage__link' to={ link }>
          { linkText }
        </Link>
      </p>
    </section>
  );
}

export default FormPage