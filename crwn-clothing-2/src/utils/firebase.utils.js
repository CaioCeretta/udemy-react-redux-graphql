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
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from 'firebase/firestore'
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

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  
  //This constant is holding the reference to the collection in the firestore which has this key on it
  const collectionRef = collection(db, collectionKey);
  /**Now we need to figure out how to store each of this objects array inside the collection because we are
   * writring multiple different objects inside this collection, so we need to understand the concept of transactions
   * transaction is basically a word that represents a successful unit of work to a database, but this unit it may differ
   * it might be multiple sets of setting values into the collection.
   * For us, we consider a successfull write to this collection if all of the documents successfully wrote to it
   * 
   */

  /*writebatch is going to return us a batch and we must pass the db we are trying to make this batch on
  it allows us to create a set of removes, updates, deletes, whatever, and we can attach all of those to the batch and
  and only when we are going to fireoff this batch, the transaction will begin*/
  const batch = writeBatch(db);

  //Here we are iterating over the objectsToAdd array, creating a documen of each object title, and setting each
  //content
  objectsToAdd.forEach(object => {
    const docRef = doc(collectionRef, object.title.toLowerCase())
    batch.set(docRef, object)
  })

  await batch.commit();
  console.log('done')


   
}


export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');

  const q = query(collectionRef)
  // What we need to do with the query is to say that we want to make a query of this collectionRef
   
/**This gives us an object that we can get a snapshot from, a snapshot is the state of a system in a particular point in
* time, so we create a variable which holds the variable that fetch those documents snapshots that we want
and now it's all encapsulated in this querySnapshot, allowing us to access diferent documents */
  const querySnapshot = await getDocs(q)
  
  /**
   * If we want to utilize, querySnapshot.docs will give us an array of all those individual documents inside this
   * collection and the snapshots are the actual
   */
  
  // In this case, we are reducing over the array returned in order to finally end up with an object
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();

    acc[title.toLowerCase()] = items;

    return acc;
  }, {})

  return categoryMap

}


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