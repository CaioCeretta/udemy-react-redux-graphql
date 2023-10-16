import { Outlet, Link } from "react-router-dom"

import './styles.scss'

import logo from '../../assets/crown.svg'
import { useContext } from "react"
import { UserContext } from "../../contexts/user.context"

export const Header = () => {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser)
  return (
    <>
      <div className='navigation'>
        <Link className="logo-container" to='/'><img src={logo} alt="" /></Link>
        <div className="nav-links-container">
          <Link className="nav-link" to='/shop'>Shop</Link>
          <Link className="nav-link" to='/auth'>Sign In</Link>
        </div>
      </div>
      <Outlet />
    </>
  )
}
