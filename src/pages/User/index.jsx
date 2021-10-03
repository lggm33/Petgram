/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';

import { Perfil } from '../../components'

function index({currentUser}) {

  return (
      <Perfil currentUser={currentUser} />
  )
}

export default index
