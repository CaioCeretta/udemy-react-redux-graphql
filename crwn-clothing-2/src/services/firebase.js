import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider } from 'firebase/auth'

//Firestore required functions
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'



// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyAoAJ78ykvwLpfWCCxya5ePPoyZfKcuEW0",

  authDomain: "crwn-clothing-db-c1952.firebaseapp.com",

  projectId: "crwn-clothing-db-c1952",

  storageBucket: "crwn-clothing-db-c1952.appspot.com",

  messagingSenderId: "142438575244",

  appId: "1:142438575244:web:f9262dcc23acabad075fa9"

};


// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth();

console.log(auth);

export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  console.log(userSnapshot)

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    } catch(e) {
      console.log('There was an error creating the user', e.message)
    }
  }

  return userDocRef;
}