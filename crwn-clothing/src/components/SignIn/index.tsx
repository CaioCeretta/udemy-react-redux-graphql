

import { signInWithGooglePopup, signInWithGoogleRedirect } from '../../utils/firebase/firebase.utils'

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  }

  const logGoogleRedirectUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  }

  return (
    <div>
      <h1>SignIn Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <button onClick={logGoogleUser}>Sign in with Google Redirect</button>
    </div>
  )
}

export default SignIn