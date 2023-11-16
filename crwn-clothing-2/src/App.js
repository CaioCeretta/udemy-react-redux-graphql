import {  useEffect} from "react";
import { Route, Routes } from 'react-router-dom'
import {
  createUserDocumentFromAuth,
  onAuthStateChangeListener,
} from "./utils/firebase.utils";

import { Header } from './components/Header'
import { Shop } from './components/Shop'
import Home from "./pages/home/home"
import { Authentication } from './pages/authentication'
import Checkout from './components/Checkout'

import { useDispatch } from 'react-redux'
import { setCurrentUser } from './store/user/user.action'

export const App = () => {
  const dispatch = useDispatch();
  //Dispatches actions to our root reducer, which in turn, passes the action to every single reducer function
  

  

  useEffect(() => {
    /* At the moment that this listener mounts, it will check the auth state automatically, when we initialize it.*/

    // This function returns an unsubscribe method, which we'll use to detach the listener later
    const unsubscribe = onAuthStateChangeListener((user) => {
      if (user) {
        // If a user is logged in (i.e., user object exists), create a user document in the database

        createUserDocumentFromAuth(user);
      }

      // Update the state with the current user (whether null or the user object)
      dispatch(setCurrentUser(user));
    });

    return unsubscribe
  }, [dispatch])

  return (
    <Routes>
      <Route path='/' element={<Header />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='/auth' element={<Authentication />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  )

}