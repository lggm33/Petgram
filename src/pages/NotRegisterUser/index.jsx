import React from 'react';
import { Div, LinkContainer, LinkStyled } from './styles'

const NotRegisterUser = () => {
  return (
    <>
      <Div>
      <h1>Welcome to Petgram</h1>
      <p>Where you can save your favorites animals picture </p>
      <div>
        <LinkContainer><LinkStyled to='/user'>Sing in</LinkStyled></LinkContainer>
        <LinkContainer><LinkStyled to='/user/new'>Sing up</LinkStyled></LinkContainer>
      </div>
      
      </Div>
      
    </>
    
  );
};

export default NotRegisterUser;
