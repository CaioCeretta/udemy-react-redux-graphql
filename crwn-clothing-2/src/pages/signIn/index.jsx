import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';

import { auth, signInWithGooglePopup,  createUserDocumentFromAuth } from '../../services/firebase'
import { SignUp } from '../../components/SignUp';
import Button from '../../components/Button';


export const SignIn = () => {
  useEffect(() => {
    async function getAuth() {
        const response = await getRedirectResult(auth)
        if(response) {
          const userDocRef = await createUserDocumentFromAuth(response.user)
        }
    }

    getAuth();

  }, [])

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = createUserDocumentFromAuth(user)
  }


  return (
    <div>
      <h1>Sign In Page</h1>
      <Button buttonType='google' onClick={logGoogleUser}>
        Sign In with Google Popup
      </Button>
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign In with Google Redirect
      </button> */}

      <SignUp />
    </div>
  )
}