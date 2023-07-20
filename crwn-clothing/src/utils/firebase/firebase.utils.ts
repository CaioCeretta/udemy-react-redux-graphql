

import { initializeApp } from 'firebase/app'; // Import the functions you need from the SDKs you need


import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup, signInWithRedirect } from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCadatOTH4PowQDwBeyjL-U7oqzgrSr_aw",
  authDomain: "crwn-clothing-24218.firebaseapp.com",
  projectId: "crwn-clothing-24218",
  storageBucket: "crwn-clothing-24218.appspot.com",
  messagingSenderId: "671435384380",
  appId: "1:671435384380:web:0997880d46a05054eac539"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth: any, additionalInformation = {displayName: 'Jorge'}) => {
  if(!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef)

  const userSnapshot = await getDoc(userDocRef);

  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();


    const display = displayName ? displayName : additionalInformation.displayName

    try {
      await setDoc(userDocRef, {
        display,
        email,
        createdAt,
      })

    } catch(err) {
      console.log(`Error creating the user ${err}`)
    }
  }


  
  return userDocRef;

  
}

export async function createAuthUserFromEmailAndPassword(email: string, password: string) {
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password)
}