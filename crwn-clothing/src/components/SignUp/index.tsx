import { createAuthUserFromEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
import React, { ChangeEvent, ChangeEventHandler, FormEvent, useState } from 'react'
import FormInput from '../FormInput'

import './styles.scss'
import Button from '../Button'

interface FormProps {
  displayName: string
  email: string,
  password: string,
  confirmPassword: string
}

const defaultFormData = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

export default function SignUp() {
  const [formData, setFormData] = useState<FormProps>(defaultFormData)

  const { displayName, email, password, confirmPassword } = formData;

  const resetFormData = () => {
    setFormData(defaultFormData)
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value })
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (password !== confirmPassword) {
      console.log('passwords do not match');
    }
    try {
      const response = await createAuthUserFromEmailAndPassword(email, password);


      await createUserDocumentFromAuth(response?.user, { displayName })

      resetFormData();

    } catch (error: any) {
      if(error.code === 'auth/email-already-in-use') {
        alert('E-mail is already in use')
      }
      console.log('user creating encountered an error')
    }
  }

  return (
    <div className='signup-form-container'>
      <h2>Don't have an account?</h2>
      <span>Sign Up with your email and password</span>

      <form onSubmit={handleSubmit} >
        <FormInput label={'Display Name'} type="text" onChange={handleInputChange} value={displayName} name="displayName" required />
        <FormInput label={'E-mail'} type="email"  onChange={handleInputChange} value={email} name="email" required />
        <FormInput label={'Password'} type="password"  onChange={handleInputChange} value={password} name='password' required />
        <FormInput label={'Password Confirmation'}  type="password"  onChange={handleInputChange} value={confirmPassword} name='confirmPassword' required />

        <Button buttonType='inverted'>Sign Up</Button>

      </form>
    </div>
  )
}
