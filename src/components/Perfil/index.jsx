/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect} from 'react'
import { getFirestore, doc, setDoc, getDoc } from '@firebase/firestore';
import { useAuth } from '../../context/AuthContext'
import { useForm } from "react-hook-form";
import { FiEdit, FiLogOut } from "react-icons/fi";
import { BsCheckBox } from "react-icons/bs";
import { Section, Image, Flex, Form, Label, Input, ContainerIcons, NewUser } from './styles';


const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg';

function Perfil({cover = DEFAULT_IMAGE }) {

  const db = getFirestore()

  const { register, handleSubmit, setValue } = useForm();
  const [edit, setEdit] = useState(false)

  const [newUser, setNewUser] = useState(false)

  const { logOut, currentUser: { uid } } = useAuth()
  
  const handleEdit = () => {
    setEdit(true)
    const nameRef = document.getElementById('nameRef')
    setTimeout(() => {nameRef.focus();}, 100)
    
  }
  
  const onSubmit = (data) => {
    setDoc(doc(db, 'user', uid), {...data})
    setNewUser(false)
  };

  useEffect(() => {
    getDoc(doc(db, 'user', uid))
      .then((response) => {
        if (Object.keys(response.data()).length > 0) {
          setNewUser(false)
          setValue('Name', response.data().Name)
          setValue('IDuser', response.data().IDuser)
          setValue('Email', response.data().Email)
          setValue('Age', response.data().Age)
        } else {
          setNewUser(true)
        }
      })
  },[])

  return (
    <Section>
      <Flex>
        <h1>Profile</h1>
      </Flex>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FiEdit size='20px' onClick={() => {handleEdit()}} />
          {edit ? (
              <ContainerIcons type='submit'>
                <BsCheckBox size='20px' onClick={() => {setEdit(false)}} /> 
              </ContainerIcons>
            ) : (
              <FiLogOut size='22px' onClick={() => logOut() }>Logout</FiLogOut>
            )
          }
        
        <Label>Name</Label>
        <Input {...register("Name")} disabled={!edit} placeholder='Name' id='nameRef' />
        <Label>ID user</Label>
        <Input {...register("IDuser")} disabled={!edit} placeholder='IDuser' />
        <Label>Email</Label>
        <Input {...register("Email")} disabled={!edit} placeholder='Email' />
        <Label>Age</Label>
        <Input {...register("Age", {valueAsNumber: true})} disabled={!edit} placeholder='Age' />
        {/* <Button type='submit'>Done</Button> */}
      </Form>

      {newUser && <NewUser>Please, Complete the form</NewUser>}
    </Section>
  )
}

export default Perfil
