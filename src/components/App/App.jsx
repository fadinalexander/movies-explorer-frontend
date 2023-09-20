import React from 'react'
import './App.css'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Main from '../Main/Main'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile'
import Register from '../Register/Register'
import Login from '../Login/Login'
import NotFoundPage from '../NotFoundPage/NotFoundPage'
import { Route, Routes, useLocation } from 'react-router-dom'

const App = () => {
  const location = useLocation()

  const showHeader = () => {
    return (
      location.pathname === '/' || location.pathname === '/movies' || location.pathname === '/saved-movies' || location.pathname === '/profile'
    )
  }

  const showFooter = () => {
    return (
      location.pathname === '/' || location.pathname === '/movies' || location.pathname === '/saved-movies'
    )
  }

  const isLoggedIn = location.pathname !== '/'

  return (
    <div className="app">
      <div className='app__container'>

        { showHeader() && <Header isLoggedIn={ isLoggedIn } /> }

        <main>
          <Routes>
            <Route path='/' element={ <Main /> } />
            <Route path='/movies' element={ <Movies /> } />
            <Route path='/saved-movies' element={ <SavedMovies /> } />
            <Route path='/profile' element={ <Profile /> } />
            <Route path='/signup' element={ <Register /> } />
            <Route path='/signin' element={ <Login /> } />
            <Route path='*' element={ <NotFoundPage /> } />
          </Routes>
        </main>

        { showFooter() && <Footer /> }

      </div>
    </div>
  )
}

export default App