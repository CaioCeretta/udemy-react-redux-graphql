import { useContext, useState } from "react"
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase.utils";
import Input from "../Input";

import './styles.scss'
import Button from "../Button";



export const SignUp = () => {

  const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  const resetFormFields = () => {
    setFormData(defaultFormFields)
  }

  const [formData, setFormData] = useState(defaultFormFields)
  const { displayName, email, password, confirmPassword } = formData;


  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData, [name]: value
    })
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if(password !== confirmPassword) {
      alert('Passwords aren not equal')
      return;
    }

    try {
      const {user} = await createAuthUserWithEmailAndPassword(email, password);

      await createUserDocumentFromAuth(user, { displayName })

      resetFormFields();

    } catch(e) {
      if(e.code === 'auth/email-already-in-use') {
        alert('E-mail already is in use')
        return;
      }
      console.log('user creating encountered an error ' + e)
    }




  }



  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your e-mail and password</span>
      <form onSubmit={handleSubmit}>
        <Input label="Display Name" inputObject={{ type: "text", onChange:handleChange, name: "displayName", value: displayName, required: true }}/>

        <Input label="Email" type="email" onChange={handleChange} name="email" value={email} required/>

        <Input label="Password" type="password" onChange={handleChange} name="password" value={password} required/>

        <Input label="Confirm Password" type="password" onChange={handleChange} name="confirmPassword" value={confirmPassword} required/>

        <Button type="submit">Sign Up</Button>

      </form>
    </div>
  )
}