import React from 'react';
import { Container } from 'react-bootstrap';
import { Auth } from '../../components';

function User() {
  return (
    <Container
      className='d-flex justify-content-center'
      style={{ minHeight: '100vh' }}
    >
      <div className='w-100' style={{ maxWidth: '400px' }}>
        <Auth />
      </div>
    </Container>
  );
}

export default User;

