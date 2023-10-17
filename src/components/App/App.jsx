import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import CurrentUserContext from '../../contexts/CurrentUserContext'

import mainApi from '../../utils/MainApi'
import moviesApi from '../../utils/MoviesApi'

import './App.css'

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

  const [allCards, setAllCards] = useState([])

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState({})

  const [isLoading, setIsLoading] = useState(false)
  const [savedMovies, setSavedMovies] = useState([])

  const [registerErrorMessage, setRegisterErrorMessage] = useState('')
  const [loginErrorMessage, setLoginErrorMessage] = useState('')

  const [successedPatchedProfile, setSuccessedPatchedProfile] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  // const [isTokenCheckComplete, setIsTokenCheckComplete] = useState(false)

  const handleRegister = ({ name, email, password }) => {
    setIsLoading(true)
    setRegisterErrorMessage('')
    return mainApi
      .register({ name, email, password })
      .then(async() => {
       await handleLogin({ email, password })
        setIsLoggedIn(true)
        
        //добавил для очистки
        setSavedMovies([])

        navigate('/movies')
      })
      .catch((err) => {
        console.log(err.message)
        setRegisterErrorMessage(err instanceof Error ? err.message : err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const handleLogin = ({ email, password }) => {
    setIsLoading(true)
    setLoginErrorMessage('')
    return mainApi 
      .login(email, password)
      .then((res) => {
        
        //добавил для отображения результатов поиска
        localStorage.setItem('hasSearched', 'true')

          setIsLoggedIn(true)
          setCurrentUser(res)
          navigate('/movies', { replace: true })

      })
      .catch((err) => {
        console.log(err)
        setLoginErrorMessage(err instanceof Error ? err.message : err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const getCards = () => {
    setIsLoading(true)
    return moviesApi.getMovies()
      .then((card) => {
        setAllCards(card)
        return card
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const handleSaveMovie = (movie) => {
    const isSaved = savedMovies.some((item) =>
      movie.id === item.movieId
    )
    if (!isSaved)
    {
      mainApi
        .saveMovie(movie)
        .then((newMovie) => {
          console.log('новый фильм ', newMovie)
          setSavedMovies([newMovie, ...savedMovies])
        })
        .catch((err) => {
          console.log(err)
        })
    } else
    {
      const movieToDelete = savedMovies.find((item) => item.movieId === movie.id)
      if (movieToDelete && movieToDelete._id)
      {
        const movieId = movieToDelete._id
        mainApi
          .deleteSavedMovie(movieId)
          .then(() => {
            setSavedMovies((movies) => movies.filter((item) => item._id !== movieId))
          })
          .catch((err) => {
            console.log('Возникла ошибка при удалении видео', err)
          })
      }
    }
  }

  function handleDeleteMovie(movie) {
    return mainApi
      .deleteSavedMovie(movie._id)
      .then(() => {
        setSavedMovies((movies) => {
          return movies.filter((item) => item._id !== movie._id)
        })
      })
      .catch((err) => {
        console.log('Возникла ошибка при удалении видео', err)
      })
  }

  function getSavedMovies() {
    return mainApi
      .getSavedMovies()
      .then((movies) => {
        setSavedMovies(movies)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  

  //этот эффект был добавлен - вроде как помог обновлять данные пользователей, хотя безнего тоже работате
  // useEffect(() => {
  //   if (!isLoggedIn) return
  //   getSavedMovies()
  // }, [isLoggedIn])


  // const handleRegister = ({ name, email, password }) => {
  //   setIsLoading(true)
  //   setRegisterErrorMessage('')
  //   mainApi
  //     .register({ name, email, password })
  //     .then(() => {
  //       handleLogin({ email, password })
  //       setIsLoggedIn(true)

  //       //добавил для очистки
  //       setSavedMovies([])

  //       navigate('/movies')
  //     })
  //     .catch((err) => {
  //       console.log(err.message)
  //       setRegisterErrorMessage(err instanceof Error ? err.message : err)
  //     })
  //     .finally(() => {
  //       setIsLoading(false)
  //     })
  // }

  // const handleLogin = ({ email, password }) => {
  //   setIsLoading(true)
  //   setLoginErrorMessage('')
  //   return mainApi 
  //     .login(email, password)
  //     .then((res) => {
        
  //       //добавил для отображения результатов поиска
  //       localStorage.setItem('hasSearched', 'true')

  //         setIsLoggedIn(true)
  //         setCurrentUser(res)
  //         navigate('/movies', { replace: true })

  //     })
  //     .catch((err) => {
  //       console.log(err)
  //       setLoginErrorMessage(err instanceof Error ? err.message : err)
  //     })
  //     .finally(() => {
  //       setIsLoading(false)
  //     })
  // }

  const handleLogout = () => {
    mainApi
      .logout()
      .then((data) => {
        console.log(data.message)
        setIsLoggedIn(false)
        setCurrentUser({})
        
        //добавил для очистки
        setSavedMovies([])

        navigate('/')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const getUserInfo = () => {
    setIsLoading(true)
    mainApi
      .getUser()
      .then((currentUser) => {
        setCurrentUser(currentUser)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleUpdateUser = ({ id, name, email }) => {
    setIsLoading(true)
    mainApi
      .editUser({ id, name, email })
      .then((res) => {
        getUserInfo()
        setSuccessedPatchedProfile('Данные профиля успешно обновлены')
        setErrorMessage('')
      })
      .catch((err) => {
        console.log(err)
        setErrorMessage(err instanceof Error ? err.message : err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const checkToken = () => {
    setIsLoading(true)
    mainApi
      .getUser()
      .then((res) => {
        if (!res) { return }
        setIsLoggedIn(true)
        setCurrentUser(res)
        navigate(currentPath, { replace: true })

      })
      .catch((err) => {
        setIsLoggedIn(false)
        console.log(err)
      })
      .finally(() => {
        // setIsTokenCheckComplete(true)
        setIsLoading(false)
      })
  }

  useEffect(() => {
    checkToken()
  }, [])

  useEffect(() => {
    if (!isLoggedIn) return
    mainApi
      .getUser()
      .then((userData) => {
        setCurrentUser(userData)
      })
      .catch((err) => {
        console.log(err)
      })
    mainApi
      .getSavedMovies()
      .then((movies) => {
        setSavedMovies(movies.reverse())
      })
      .catch((err) => {
        console.log(err)
      })
  }, [isLoggedIn])
  // useEffect(() => {
  //   setIsLoading(true)
  //   checkToken()
  // }, [currentPath])

  // if (!isTokenCheckComplete) {
  //   return <Preloader/>
  // }

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
                      isLoggedIn={ isLoggedIn }
                      isLoading={ isLoading }
                      errorMessage={ registerErrorMessage }
                    />)
                  }
                />

                <Route
                  path='/signin'
                  element={
                    (<Login
                      handleLogin={ handleLogin }
                      isLoggedIn={ isLoggedIn }
                      isLoading={ isLoading }
                      errorMessage={ loginErrorMessage }

                      // onLoginSuccess={ () => {
                      //   setIsLoggedIn(true)
                      //   navigate('/movies')
                      // } }
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
                      currentUser={ currentUser }
                      movies={ allCards }
                      getMovies={ getCards }
                      savedMovies={ savedMovies }
                      onSave={ handleSaveMovie }
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
                      movies={ savedMovies }
                      onDelete={ handleDeleteMovie }

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
                      isLoading={ isLoading }
                      handleLogout={ handleLogout }
                      handleUpdateUser={ handleUpdateUser }
                      successedPatchedProfile={ successedPatchedProfile }
                      errorMessage={ errorMessage }
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