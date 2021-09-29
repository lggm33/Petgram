/* eslint-disable consistent-return */
import React, { useRef, useState } from 'react';
import { Link } from '@reach/router';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../../context/AuthContext';

function SignIn() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const { logIn } = useAuth();


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    logIn(emailRef.current.value, passwordRef.current.value)
      .then(() => {setLoading(false);})
      .catch((e) => {
        setError(`Failed sing in: ${e.code}`);
        setLoading(false);
      })

  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4'>Sign In</h2>
          {error && <Alert variant='danger'>{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' ref={emailRef} required />
            </Form.Group>
            <Form.Group id='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control className='mb-4' type='password' ref={passwordRef} required />
            </Form.Group>
            <Button disable={loading ? 'true' : 'false'} className='w-100' type='submit'> Sign In</Button>
          </Form>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>
        Do you need an account?
        <Link to='/user/new'> Sign Up</Link>
      </div>
    </>
  );
}

export default SignIn;
