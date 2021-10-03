/* eslint-disable consistent-return */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, navigate } from '@reach/router';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

function SignIn() {

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const {register, handleSubmit} = useForm();

  const { signIn } = useAuth();


  const onSubmit = (data) => {
    setLoading(true);

    signIn(data.email, data.password)
      .then(() => {setLoading(false); navigate('/user')})
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
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group id='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control {...register('email')} type='email' required />
            </Form.Group>
            <Form.Group id='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control {...register('password')} className='mb-4' type='password' required />
            </Form.Group>
            <Button disable={loading ? 'true' : 'false'} className='w-100' type='submit'> Sign In</Button>
          </Form>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>
        Do you need an account?
        <Link to='/signUp'> Sign Up</Link>
      </div>
    </>
  );
}

export default SignIn;
