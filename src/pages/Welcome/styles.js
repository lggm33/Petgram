import styled from "styled-components";
import { Link } from "@reach/router";

export const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
`

export const LinkContainer = styled.button`
  margin: 10px 20px;
  width: 120px;
  height:30px;
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
  border-radius: .25rem;
`

export const LinkStyled = styled(Link)`
  color: #fff;
  text-decoration: none;
`