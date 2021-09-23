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

  // const db = getFirestore()
  // const [data, setData] = useState({})

  // useEffect(() => {
  //   db.collection('photos').doc('4a122TTfFrMNznWUl3cI').onSnapshot(snap => {
  //     setData(snap.data())
  //   })
  // }, [])

  // useEffect(() => {
  //   const unsub = onSnapshot(doc(db,'photos', '4a122TTfFrMNznWUl3cI'), (doc) => {
  //     // console.log(doc.data())
  //     setData(doc.data())
  //   })

  //   return () => unsub()
  // }, [])

  // console.log({data})

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
