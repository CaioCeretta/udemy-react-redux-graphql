import Home from "./pages/Home";
import { Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar";
import SignIn from "./routes/SignIn";



const Shop = () => {
  return <h1>I am the shop page</h1>;
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="SignIn" element={<SignIn />} />
      </Route>
    </Routes>
  )
};

export default App;



