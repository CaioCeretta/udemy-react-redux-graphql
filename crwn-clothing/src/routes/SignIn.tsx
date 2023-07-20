import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';

import { auth, signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect } from '../utils/firebase/firebase.utils'

import SignUp from '../components/SignUp';

const SignIn = () => {
  // useEffect(() => {
  //   const getRedirectResultFn = async () => {
  //     const response = await getRedirectResult(auth);
      
  //     if(response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user)
  //     }
  //   }

  //   getRedirectResultFn()
  // }, [])

  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user)
    

  }


  return (
    <div>
      <h1>SignIn Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button> */}
      <SignUp />
    </div>
  )
}

export default SignIn