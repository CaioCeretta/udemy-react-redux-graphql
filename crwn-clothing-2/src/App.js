import { Route, Routes } from 'react-router-dom'

import { Header } from './components/Header'
import { Shop } from './components/Shop'
import Home from "./pages/home/home"
import { Authentication } from './pages/authentication'
import Checkout from './components/Checkout'




export const App = () => {

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