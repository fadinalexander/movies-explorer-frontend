import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

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

const App = () => {
  const location = useLocation()


  const isLoggedIn = location.pathname === '/' ? false : true
  // const isLoggedIn = true


  return (
    <div className='page'>
      <div className='page__container'>
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
              (<Register />)
            }
          />

          <Route
            path='/signin'
            element={
              (<Login />)
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
      </div>
    </div>
  )
}

export default App