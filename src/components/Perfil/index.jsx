import React from 'react'
import { Section, Image, Flex, Text, LogOut, P } from './styles';
import { useAuth } from '../../context/AuthContext'

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg';

function Perfil({cover = DEFAULT_IMAGE }) {
  const { logOut } = useAuth()
  
  return (
    <Section>
      <Flex>
        <Image src={cover} />
      </Flex>
      <Text>
        <P>Name</P>
        <P>Gabriel Gómez</P>
        <P>User</P>
        <P>LGGM33</P>
        <P>Web</P>
        <P>GM.COM</P>
        <P>Presentation</P>
        <P>My web</P>
      </Text>

      <Flex>
        <LogOut variant="outline-dark" onClick={() => logOut() }>Logout</LogOut>

      </Flex>

    </Section>
  )
}

export default Perfil
