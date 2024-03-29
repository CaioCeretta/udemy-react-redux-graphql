import { useState } from "react";
import { useDispatch } from 'react-redux';


import Button from "../Button";
import Input from "../Input";

import { emailSignInStart, googleSignInStart } from "../../store/user/user.action";
import "./styles.scss";


const defaultFormFields = {
  email: "",
  password: "",
};

export const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const dispatch = useDispatch();


  const signInWithGoogle = () => {
    dispatch(googleSignInStart());
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
      resetFormFields();
    } catch (e) {
      if (e.code === 'auth/wrong-password' || e.code === 'auth/user-not-found') {
        alert('Email or password incorrect')
      }
      console.log(e);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account? </h2>
      <span>Sign in with your e-mail and password</span>
      <form onSubmit={handleSubmit}>
        <Input
          label={"email"}
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <Input
          label={"password"}
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <div className="buttons-container">
          <Button buttonType={'inverted'}> Confirm </Button>
          <Button> Reset </Button>
        </div>

      </form>

      <span style={{ margin: "1rem 0" }}>
        Or sign in with your google account
      </span>
      <Button type="button" buttonType="google" onClick={signInWithGoogle}>
        Sign In with Google Popup
      </Button>
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign In with Google Redirect
      </button> */}
    </div>
  );
};
