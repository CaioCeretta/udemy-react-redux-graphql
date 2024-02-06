import { Link, Outlet } from "react-router-dom";
import { CartIcon } from "../CartIcon";

import { selectCurrentUser } from "../../store/user/user.selector";

import logo from "../../assets/crown.svg";
import { CartDropdown } from "../CartDropdown";

import { selectIsCartOpen } from '../../store/cart/cart.selector';

import { useSelector } from "react-redux";
import "./styles.scss";

export const Header = () => {


  /**useSelector is a hook that allows us to interact from a component with the redux store
 * it is a hook that we pass a selector function, and this selector function it essentially extracts of the values that
 * we want from the whole redux store, the state is one big object, which is composed by all the smaller reducers, but in
 * the end is just an object that has these key values on them, so we actually receive, whenever we call useSelector, the
 * entire state object, so when we want specifically the user reducer, we are going to have to say state.user, and from it
 * we are going to walk further the current user property
 * 
 */
  const currentUser = useSelector(selectCurrentUser)
  const isCartOpen = useSelector(selectIsCartOpen)


  console.log(currentUser)


  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={logo} alt="" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link">
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign In
            </Link>
          )}
        <CartIcon/>
        </div>
        {isCartOpen && <CartDropdown/>}
      </div>
      <Outlet />
    </>
  );
};
