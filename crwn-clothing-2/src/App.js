import { Route, Routes } from 'react-router-dom'

import { Header } from './components/Header'
import Home from "./pages/home/home"

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
      </Route>
    </Routes>
  )

}