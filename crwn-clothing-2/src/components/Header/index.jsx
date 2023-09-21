import { Outlet, Link } from "react-router-dom"

import './styles.scss'

import logo from '../../assets/crown.svg'

export const Header = () => {
  return (
    <>
      <div className='navigation'>
        <Link to='/'><img src={logo} alt="" /></Link>
        <div className="nav-links-container">
          <Link className="nav-link" to='/'>Home</Link>
          <Link className="nav-link" to='/shop'>Shop</Link>
        </div>
      </div>
      <Outlet />
    </>
  )
}
