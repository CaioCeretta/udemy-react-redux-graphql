import {
  getAuth, signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'

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

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth();


export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation) => {

  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      })
    } catch (e) {
      console.log('There was an error creating the user', e.message)
    }
  }



  return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  console.log(email, password)

  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = () => signOut(auth)

export const onAuthStateChangeListener = (cb) => onAuthStateChanged(auth, cb)

/**
 * This on authStateChangedListener is behind the scenes creating a listener for us.
 * next being the callback
 * 
 * and on the user.context we need to cleanup this listener, with it assigning to a const unsubscribe the return of this
 * function.
 * 
 * Essentially what happens is that on the unsubscribe it will clean up this method, if a completeCallback was
 * initialized, it would invoke it on the unsubscribe
 */