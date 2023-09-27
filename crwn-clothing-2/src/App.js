import { Route, Routes } from 'react-router-dom'

import { Header } from './components/Header'
import Home from "./pages/home/home"
import { SignIn } from './pages/signIn'

export const Shop = () => {
  return (
    <h1>I'm the shop page</h1>
  )
}


export const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Header />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='/signin' element={<SignIn />} />
      </Route>
    </Routes>
  )

}