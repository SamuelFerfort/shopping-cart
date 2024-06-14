import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

Header.propTypes = {
  cart: PropTypes.number,
};
export default function Header({ cart }) {
  return (
    <header>
      <h1>
        <NavLink to="/">Shopping Cart</NavLink>
      </h1>
      <nav>
        
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/shop"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Shop
        </NavLink>
        <NavLink to="/cart" className="cartHolder">
          <span className="cartIcon"></span>
          <span>{cart.length}</span>
        </NavLink>
      </nav>
    </header>
  );
}
