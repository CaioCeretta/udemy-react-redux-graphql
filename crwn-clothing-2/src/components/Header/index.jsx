import { Outlet, Link } from "react-router-dom"

import './styles.scss'

import logo from '../../assets/crown.svg'
import { useContext } from "react"
import { UserContext } from "../../contexts/user.context"
import { signOutUser } from "../../services/firebase"

export const Header = () => {
  const { setCurrentUser, currentUser } = useContext(UserContext);
  
  const signOutHandler = () => {
    signOutUser();
    setCurrentUser(null);
  }

  return (
    <>
      <div className='navigation'>
        <Link className="logo-container" to='/'><img src={logo} alt="" /></Link>
        <div className="nav-links-container">
          <Link className="nav-link" to='/shop'>Shop</Link>
          { currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>Sign Out</span>
          ) : 
        
          
          <Link className="nav-link" to='/auth'>Sign In</Link>
        }
        </div>
      </div>
      <Outlet />
    </>
  )
}
