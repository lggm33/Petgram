/* eslint-disable consistent-return */
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, navigate } from '@reach/router';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import useFirestore from '../../hooks/useFirestore';

function Auth() {

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { signUp } = useAuth();
  const {setDocument} = useFirestore()

  
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setLoading(true);

    if (data.password !== data.passwordConfirm) {
      return setError('Password do not match');
    }

    signUp(data.email, data.password)
      .then((userResponse) => {setDocument('favorites', userResponse.user.uid, {listUrls: []});} )
      .then(() => {
        setLoading(false)
        navigate('/user')
      } )
      .catch((e) => {
        console.log({...e})
        setError(`Failed to create an account: ${e.code}`);
        setLoading(false)
      } )
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4'>Sign Up</h2>
          {error && <Alert variant='danger'>{error}</Alert>}
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group id='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control {...register('email')} type='email' />
            </Form.Group>
            <Form.Group id='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control {...register('password')} type='password' />
            </Form.Group>
            <Form.Group id='password-confirm'>
              <Form.Label>Password confirm</Form.Label>
              <Form.Control className='mb-4' {...register('passwordConfirm')} type='password' />
            </Form.Group>
            <Button disable={loading ? 'true' : 'false'} className='w-100' type='submit'> Sign Up</Button>
          </Form>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>
        Already have an account?
        <Link to='/signIn'>Sign In</Link>  
      </div>
    </>
  );
}

export default Auth;
