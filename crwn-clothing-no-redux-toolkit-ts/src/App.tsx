import { Suspense, lazy, useEffect } from "react";
import { Route, Routes } from 'react-router-dom';

import { useDispatch } from "react-redux";
// import Home from "./pages/home/home";
import { checkUserSession } from "./store/user/user.action";
import { Spinner } from "./components/Spinner";


/* 
This is a different style of an import, an import that is dynamic

Lazy is a function with an import statement, and react will not render this until it actually fetches it, when it is
required, and it's required when on the page that actually renders it and it sees that it is a lazy import, is when, at
the browser, the moment that it encounters it, it's going to start requesting this component for our server that is
hosting all of our code, and in order to use it, we need to utilize <Suspense> from react

*/

const Checkout = lazy(() =>
  import('./components/Checkout').then(module => ({default: module.Checkout}))
)

const Header = lazy(() =>
  import('./components/Header').then(module => ({default: module.Header}))
)

const Shop  = lazy(() =>
  import('./components/Shop').then(module => ({default: module.Shop}))
)

const Authentication  = lazy(() =>
  import('./pages/authentication').then(module => ({default: module.Authentication}))
)

const Home = lazy(() => import('./pages/home/home'));



export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(checkUserSession())

  }, [])

  return (

  /*  The suspense means that if any of our routes is being lazy loaded, what we are going to do is instead show the
   spinner component, so for suspense, it receives one attribute, which is the fallback, and for it is where we render
   the component we want to show when the components are loading
  
  */
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<Home />} />
          <Route path='shop/*' element={<Shop />} />
          <Route path='/auth' element={<Authentication />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </Suspense>
  )

}