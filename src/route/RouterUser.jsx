import React from 'react'
import { Router } from '@reach/router';
import { useAuth } from '../context/AuthContext'
import { Favorites, SignUp, SignIn, User, NotRegisterUser } from '../pages';

function RouteUser() {

  const { currentUser } = useAuth()

  return (
    <>
      {currentUser ? (
        <Router>
          <Favorites path='/favs' />
          <User path='/user' />
      </Router>
      ) : (
        <Router>
          <NotRegisterUser path='/favs' />
          <SignIn path='/user' />
          <SignUp path='/user/new' />
        </Router>
      )}
    </>
  )
}

export default RouteUser
