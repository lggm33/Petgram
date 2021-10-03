/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Cuadricula, Img, Container } from './styles';

const ListOfFavorites = ({favorites}) =>{
  return (
    <>
      <Cuadricula >
    {favorites.map((element) => (
        <Container key={element.id}>
          <Img src={element.src}></Img>
          </Container>
        )
        )
      }
      </Cuadricula>
    </> 
  )
}

export default ListOfFavorites
