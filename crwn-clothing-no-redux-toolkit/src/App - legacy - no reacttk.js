import {  useEffect} from "react";
import { Route, Routes } from 'react-router-dom'

import { Header } from './components/Header'
import { Shop } from './components/Shop'
import Home from "./pages/home/home"
import { Authentication } from './pages/authentication'
import Checkout from './components/Checkout'
import { setCurrentUser } from "./store/user/user.reducer";
import { useDispatch } from "react-redux";
import { createUserDocumentFromAuth, onAuthStateChangeListener } from "./utils/firebase.utils";



export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChangeListener(user => {
      if(user) {
        createUserDocumentFromAuth(user);
      }

      dispatch(setCurrentUser)
    })
    
    return unsubscribe;
  }, [])

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