import styled, { css } from 'styled-components';

export const List = styled.ul`
  margin: 10px 0px 20px 0px;
  display: flex;
  overflow: scroll;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
  ${(props) => props.fixed && css`
    position: fixed;
    margin: 0 auto;
    left: 0;
    right: 0;
    z-index: 1;
    top: -20px;
    max-width: 400px;
    padding: 5px;
    background-color: #fff;
    border-radius: 60px;
    box-shadow: 0 0 20px rgba(0 ,0 ,0 , 0.3);
    transform: scale(.5);
  `}
`;

export const Item = styled.li`
  padding: 0 8px;
`;
