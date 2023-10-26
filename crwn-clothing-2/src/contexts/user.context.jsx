import { createContext, useState, useEffect } from "react";
import { createUserDocumentFromAuth, onAuthStateChangeListener, signOutUser } from "../utils/firebase.utils";



// as the actual value we want to access
export const UserContext = createContext({



  /*Usually the empty state of an object should be null, because we want to null check to define whether or not we have
  an user existing object or no object
  An empty object will still be evaluate as true
  and we know that there is no context when the currentUser value is null
  */
  currentUser: null,
  setCurrentUser: () => null,
});

/**
* A provider is the actual component
* The provider is a component that will wrap around any other component which needs access to the values inside
* The values will hold the actual contextual values

*/

//Basically this provider is essentially allowing any of its childrens to access the values inside of its useState
export const UserProvider = ({ children }) => {

  
  useEffect(() => {
    /* At the moment that this listener mounts, it will check the auth state automatically, when we initialize it.*/
    const unsubscribe = onAuthStateChangeListener((user) => {
      if(user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    })

    return unsubscribe 
  }, [])
  //This null is for the state, not necessarily to the context, the context needs an initial value aswell
  /* Essentially what's hapopening is we are going to create this user provider and we want to wrap it around, the
  portion of our code that matters*/
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
