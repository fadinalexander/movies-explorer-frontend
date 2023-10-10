import React, { useCallback, useEffect, useState } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import CurrentUserContext from '../../contexts/CurrentUserContext'

import mainApi from '../../utils/MainApi'
import moviesApi from '../../utils/MoviesApi'

import './App.css'

import InfoToolTip from '../InfoToolTip/InfoToolTip'
import Preloader from '../Preloader/Preloader'
import NotFoundPage from '../NotFoundPage/NotFoundPage'

import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'

import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile'
import Register from '../Register/Register'
import Login from '../Login/Login'

const App = () => {

  const location = useLocation()
  const navigate = useNavigate()
  const currentPath = location.pathname

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState({})

  const [isLoading, setIsLoading] = useState(false)


  const handleRegister = ({ name, email, password }) => {
    setIsLoading(true)
    mainApi
      .register({ name, email, password })
      .then(() => {
        handleLogin({ email, password })
        navigate('/movies')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleLogin = ({ email, password }) => {
    setIsLoading(true)
    if (!email || !password)
    {
      return
    }
    mainApi
      .login(email, password)
      .then((res) => {
        console.log(res)
        if (res.token)
        {
          setIsLoggedIn(true)
          // setIsLoading(false)
          // checkToken()
          navigate('/movies', { replace: true })
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }


  const checkToken = useCallback(() => {
    if (document.cookie.includes('jwt'))
    {
      mainApi
        .getUser()
        .then((res) => {
          setIsLoggedIn(true)
          setCurrentUser(res)
          navigate(currentPath, { replace: true })
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [])
   
  useEffect(() => {
    checkToken()
  }, [isLoggedIn])


  return (
    <CurrentUserContext.Provider value={ { currentUser } }>
      <div className='page'>
        <div className='page__container'>

          { isLoading
            ? (
              <Preloader />
            )
            : (
              <Routes>

                <Route path='*' element={ <NotFoundPage /> } />

                <Route
                  path='/'
                  element={
                    <>
                      <Header isLoggedIn={ isLoggedIn } />
                      <Main />
                      <Footer />
                    </>
                  }
                />

                <Route
                  path='/signup'
                  element={
                    (<Register
                      handleRegister={ handleRegister }
                      isLoggedIn={isLoggedIn}
                      isLoading={isLoading}
                    />)
                  }
                />

                <Route
                  path='/signin'
                  element={
                    (<Login
                      handleLogin={ handleLogin }
                      isLoggedIn={isLoggedIn}
                      isLoading={isLoading}
                    />)
                  }
                />

                <Route
                  path='/movies'
                  element={
                    <ProtectedRoute
                      path='/movies'
                      element={ Movies }
                      isLoggedIn={ isLoggedIn }
                    />
                  }
                />

                <Route
                  path='/saved-movies'
                  element={
                    <ProtectedRoute
                      path='/saved-movies'
                      element={ SavedMovies }
                      isLoggedIn={ isLoggedIn }
                    />
                  }
                />

                <Route
                  path='/profile'
                  element={
                    <ProtectedRoute
                      path='/profile'
                      element={ Profile }
                      isLoggedIn={ isLoggedIn }
                    />
                  }
                />

              </Routes>
            )
          }
        </div>
      </div>
    </CurrentUserContext.Provider>
  )
}

export default App