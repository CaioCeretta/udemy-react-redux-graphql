import { Link } from "react-router-dom";
import { Route, Routes, Outlet } from "react-router-dom";

import {ReactComponent as CrownLogo} from '../../assets/crown.svg'
import './styles.scss'

export default function Navbar() {
  return (
    <>
      <div className="navigation">
        <Link to="/">
          <div className="logo-container"><CrownLogo /></div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/Shop">Shop</Link>
          <Link className="nav-link" to="/SignIn">SignIn</Link>
        </div>
      </div>
      <Outlet />
    </>
  )
}