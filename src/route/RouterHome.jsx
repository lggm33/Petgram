import React from 'react';
import { Router } from '@reach/router';
import { Home, Detail} from '../pages';

function RouterHome() {
  return (
    <>
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
      </Router>
    </>
  )
}

export default RouterHome
