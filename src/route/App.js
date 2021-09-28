/* eslint-disable react-hooks/exhaustive-deps */
import react from 'react';
import RouterHome from './RouterHome';
import RouterUser from './RouterUser';
// import {db} from '../firebase/FirebaseConfig'
// import { getFirestore, collection, onSnapshot, doc } from 'firebase/firestore';
import {NavBar, Logo} from '../components'
import { AuthProvider } from '../context/AuthContext';
import { DataProvider } from '../context/DataContext';
import GlobalStyles from '../styles/GlobalStyles';

function App() { 

  return (
    <react.Fragment>
      <AuthProvider>
        <DataProvider>
          <GlobalStyles />
            <Logo />
            <RouterHome />
            <RouterUser />
        </DataProvider>
      </AuthProvider>
      <NavBar />
    </react.Fragment>
  );
}

export default App;
