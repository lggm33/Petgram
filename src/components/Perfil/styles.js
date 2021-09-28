import styled from 'styled-components';

export const Section = styled.section`
  min-height: 400px;
  width: 80%;
  min-width: 300px;
  max-width: 500px;
  margin: 0 auto;
`

export const Flex = styled.div`
  display: flex;
  justify-content: center;
`
export const Image = styled.img`

  border: 1px solid #ddd;
  box-shadow: 0px 10px 14px rgba(0, 0, 0, .2);
  border-radius: 50%;
  height: auto;
  overflow: hidden;
  object-fit: cover;
  height: 100px;
  width: 100px;
`;

export const Form = styled.form`
  margin: 20px 0px 0px 5px;
  height: 250px;
  width: 100%auto;
  display:grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  justify-items: center;
`
export const Label = styled.label`
  width: 100%;
  max-height: 40px;
  text-align: center;
  border-bottom: solid 1px #d7d7d7;
`
export const Input = styled.input`
  width: 100%;
  max-height: 40px;
  text-align: center;
  border: none;
  border-bottom: solid 1px #d7d7d7;
`

export const ContainerIcons = styled.button`
  display: flex;
  align-content: flex-start;
`

export const Button = styled.button`
  margin-top: 20px;
  width:70px;
  height: 40px;
  border: solid 1px #000;
  border-radius: 10px;

`

export const LogOut = styled.div`
  margin-top: 20px;
`

export const NewUser = styled.p`
  color: red;
  margin-top: 20px;
`

