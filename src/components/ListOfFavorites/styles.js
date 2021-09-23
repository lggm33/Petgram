import styled from 'styled-components';

export const Cuadricula = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`
export const Container = styled.div`
  padding-top: 100%;
  position:relative;
`

export const Img = styled.img`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
`