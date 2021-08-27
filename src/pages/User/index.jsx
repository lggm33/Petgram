/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { Perfil } from '../../components'
import { Container } from 'react-bootstrap';
function index() {
  return (
    <Container
      className='d-flex  justify-content-center'
      style={{ minHeight: '100vh' }}
    >
      <div className='w-100' style={{ maxWidth: '400px' }}>
      <Perfil />
      </div>
    </Container>
    
  )
}

export default index
