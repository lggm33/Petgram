/* eslint-disable react-hooks/exhaustive-deps */
import react from 'react';
import { Router } from '@reach/router';
import {NavBar, Logo} from '../components'
import { AuthProvider } from '../context/AuthContext';
import GlobalStyles from '../styles/GlobalStyles';
import { Home, Detail, Favorites, SignUp, SignIn, User, Welcome} from '../pages';
import { ErrorPage } from '../components'
import useGetData from '../hooks/useGetData';
import useAuth from '../hooks/useAuth';

function App() { 

  const initState = useGetData()
  const { currentUser } = useAuth()

  return (
    <react.Fragment>
      <AuthProvider>
          <GlobalStyles />
            <Logo />
            <Router>
              <Home path='/' {...initState} {...currentUser}/>
              <Home path='/pet/:id' {...initState} />
              <Detail path='/detail/:detailId' {...initState} />
              <Favorites currentUser={currentUser} path='/favs' />
              <User path='/user' currentUser={currentUser} />
              <Welcome path='/welcome' />
              <SignIn path='/signIn'  />
              <SignUp path='/signUp' />
              <ErrorPage default/>
            </Router>
          <NavBar currentUser={currentUser}  />
      </AuthProvider>
    </react.Fragment>
  );
}

export default App;
 