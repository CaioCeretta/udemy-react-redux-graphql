import { ChangeEvent, FormEvent, useState } from "react";
import Input from "../Input";

import { useDispatch } from "react-redux";
import { signUpStart } from "../../store/user/user.action";
import Button from "../Button";
import "./styles.scss";
import { type } from "os";
import { error } from "console";

interface FormFields {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string
}

export const SignUp = () => {
  const defaultFormFields: FormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const dispatch = useDispatch();

  const resetFormFields = () => {
    setFormData(defaultFormFields);
  };

  const [formData, setFormData] = useState<FormFields>(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formData;

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords aren not equal");
      return;
    }

    try {
      dispatch(signUpStart(email, password, displayName))
      resetFormFields()

    } catch(error: Error) {
      if(error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use')
      } else {
        console.log('User creation encountered an error', error)
      }
    }
  }

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your e-mail and password</span>
      <form onSubmit={handleSubmit}>
        <Input
          label="Display Name"
          inputObject={{
            type: "text",
            onChange: handleChange,
            name: "displayName",
            value: displayName,
            required: true,
          }}
        />

        <Input
        label="Email"
        inputObject={{
          type: 'email',
          onChange: handleChange,
          name: "email",
          value: email,
          required: true
        }}
        />

        <Input
          label="Password"
          inputObject={{
          type:"password",
          onChange:handleChange,
          name:"password",
          value:password,
          required: true,
          }}
        />

        <Input
          label="Confirm Password"
          inputObject={{
          type:"password",
          onChange:handleChange,
          name:"confirmPassword",
          value:confirmPassword,
          required: true
          }}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};
