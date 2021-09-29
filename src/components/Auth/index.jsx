/* eslint-disable consistent-return */
import React, { useRef, useState } from 'react';
import { Link, navigate } from '@reach/router';
import { db } from '../../firebase/FirebaseConfig'
import { doc, setDoc } from '@firebase/firestore';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../../context/AuthContext';

function Auth() {

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { signUp } = useAuth();


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Password do not match');
    }

      setError('');
      signUp(emailRef.current.value, passwordRef.current.value)
        .then((userResponse) => setDoc(doc(db, 'favorites', userResponse.user.uid), {listUrls: []}))
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
          <Form onSubmit={handleSubmit}>
            <Form.Group id='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' ref={emailRef} required />
            </Form.Group>
            <Form.Group id='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' ref={passwordRef} required />
            </Form.Group>
            <Form.Group id='password-confirm'>
              <Form.Label>Password confirm</Form.Label>
              <Form.Control className='mb-4' type='password' ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disable={loading ? 'true' : 'false'} className='w-100' type='submit'> Sign Up</Button>
          </Form>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>
        Already have an account?
        <Link to='/user'>Sign In</Link>  
      </div>
    </>
  );
}

export default Auth;
