/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect} from 'react'
import { db } from '../../firebase/FirebaseConfig'
import { doc, setDoc, getDoc } from '@firebase/firestore';
import { useAuth } from '../../context/AuthContext'
import { useForm } from "react-hook-form";
import { FiEdit, FiLogOut } from "react-icons/fi";
import { BsCheckBox } from "react-icons/bs";
import { Section, Flex, Form, Label, Input, ContainerIcons, NewUser } from './styles';

function Perfil() {

  const { register, handleSubmit, setValue } = useForm();
  const [edit, setEdit] = useState(false)

  const [newUser, setNewUser] = useState(false)
  const { logOut, currentUser: { uid } } = useAuth()
  
  const onSubmit = (data) => {
    if (!edit) {
      setDoc(doc(db, 'user', uid), {...data})
      setNewUser(false)
    } else {
      const nameRef = document.getElementById('nameRef')
      nameRef.focus()
    }
  };

  useEffect(() => {
    getDoc(doc(db, 'user', uid))
      .then((response) => {
        const snap = response.data() || []
        if (Object.keys(snap).length > 0) {
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
        <ContainerIcons type='submit'>
          {edit ? (
            <BsCheckBox size='20px' onClick={() => {setEdit(false)}} /> 
            ) : (
            <FiEdit size='20px' onClick={() => {setEdit(true)}} />
            )
          }
        </ContainerIcons>
        <FiLogOut size='22px' onClick={() => logOut() }>Logout</FiLogOut>
        
        <Label>Name</Label>
        <Input {...register("Name")} disabled={!edit} placeholder='Name' id='nameRef' />
        <Label>ID user</Label>
        <Input {...register("IDuser")} disabled={!edit} placeholder='userID' />
        <Label>Email</Label>
        <Input {...register("Email")} disabled={!edit} placeholder='Email' />
        <Label>Age</Label>
        <Input {...register("Age", {valueAsNumber: true})} disabled={!edit} placeholder='Age' />
      </Form>
      {newUser && <NewUser>Please, Complete the form</NewUser>}
    </Section>
  )
}

export default Perfil
