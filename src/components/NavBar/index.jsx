/* eslint-disable import/prefer-default-export */
import React from 'react';
import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md';
import { Link, Nav } from './styles';

const SIZE = '32px';

const NavBar = ({currentUser}) => {
  return (
    <Nav>
      <Link to='/'><MdHome size={SIZE} /></Link>
      <Link to={currentUser ? '/favs' : '/welcome' }><MdFavoriteBorder size={SIZE} /></Link>
      <Link to={currentUser ? '/user' : '/signIn'}><MdPersonOutline size={SIZE} /></Link>
    </Nav>
  );
};

export default NavBar;

